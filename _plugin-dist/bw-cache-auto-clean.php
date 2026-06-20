/**
 * BW Headless CMS - Auto Cache Cleanup on Post Save/Delete
 * Tempatkan di mu-plugins atau theme functions.php
 */

if (!defined('ABSPATH')) exit;

// =============================================
// 1. Auto-clear specific post type transients on save
// =============================================
add_action('save_post', 'bw_clear_post_transients', 10, 3);
function bw_clear_post_transients($post_id, $post, $update) {
    // Skip autosave dan revision
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($post->post_type === 'revision') return;

    $transients_to_clear = [
        'bw_services_full_v3',
        'bw_promosi_active_v3',
        'bw_promosi_active_v4',
        'bw_promosi_active_v5',
        'bw_promosi_v4_',
        'bw_promosi_v5_',
        'bw_layanan_spesialis_full_v2',
    ];

    foreach ($transients_to_clear as $key) {
        if ($key === 'bw_promosi_v4_' || $key === 'bw_promosi_v5_') {
            // Clear all promo item transients
            global $wpdb;
            $wpdb->query($wpdb->prepare(
                "DELETE FROM {$wpdb->options} WHERE option_name LIKE %s",
                '_transient_' . $key . '%'
            ));
        } else {
            delete_transient($key);
        }
    }
}

// =============================================
// 2. Auto-clear on DELETE (juga transient WP-Cache)
add_action('delete_post', 'bw_clear_transients_on_delete', 1);
function bw_clear_transients_on_delete($post_id) {
    $post = get_post($post_id);
    if (!$post) return;

    // Clear ALL promo transients saat hapus post
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_%'");
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_bw_%'");

    // Trigger Vercel On-Demand ISR jika dikonfigurasi
    bw_trigger_isr_revalidation($post->post_type, $post->post_name);
}

// =============================================
// 3. Trigger Vercel ISR On-Demand (jika dikonfigurasi)
// =============================================
add_action('transition_post_status', 'bw_trigger_isr_on_status_change', 20, 3);
function bw_trigger_isr_on_status_change($new_status, $old_status, $post) {
    // Hanya trigger jika publish berubah
    if (!in_array($new_status, ['publish', 'trash']) &&
        !in_array($old_status, ['publish', 'trash'])) {
        return;
    }

    bw_trigger_isr_revalidation($post->post_type, $post->post_name);
}

function bw_trigger_isr_revalidation($post_type, $post_slug = '') {
    $site_url = rtrim(get_option('bw_nextjs_site_url', ''), '/');
    $secret = get_option('bw_revalidate_secret', '');
    $enabled = get_option('bw_revalidate_enabled', '1');

    if ($enabled !== '1' || empty($site_url) || empty($secret)) {
        return;
    }

    // Normalize post type ke tag
    $tag = str_replace('_', '-', $post_type);
    if ($tag === 'post') $tag = 'posts';
    if ($tag === 'page') $tag = 'pages';

    $paths = ['/'];
    $tags = [$tag, "all-{$tag}"];
    if ($post_slug) {
        $tags[] = "{$tag}-{$post_slug}";
    }

    // Archive pages
    $archive_map = [
        'services' => '/services/',
        'promosi' => '/promosi/',
        'post' => '/blog/',
        'page' => "/{$post_slug}/",
    ];
    if (isset($archive_map[$post_type])) {
        $paths[] = $archive_map[$post_type];
    }

    $body = json_encode([
        'secret' => $secret,
        'paths' => array_unique($paths),
        'tags' => array_unique($tags),
        'source' => 'bw_auto',
    ]);

    wp_remote_post($site_url . '/api/revalidate', [
        'body' => $body,
        'headers' => [
            'Content-Type' => 'application/json',
            'User-Agent' => 'BW-CMS-AutoRevalidate/1.0',
        'Cache-Control' => 'no-cache',
        'X-BW-Revalidate-Secret' => $secret,
        'X-BW-Post-Type' => $post_type,
        'X-BW-Post-Slug' => $post_slug ?: 'unknown',
        'X-BW-Trigger' => 'bw_auto_cleanup',
        ],
        'timeout' => 10,
        'blocking' => false,
    ]);
}

// =============================================
// 4. Admin Bar Button untuk Manual Clear Cache
// =============================================
add_action('admin_bar_menu', 'bw_add_cache_clear_button', 999);
function bw_add_cache_clear_button($wp_admin_bar) {
    if (!current_user_can('manage_options')) return;

    $wp_admin_bar->add_node([
        'id' => 'bw_clear_cache',
        'title' => 'Clear BW Cache',
        'href' => wp_nonce_url(admin_url('admin.php?page=bw_cache_clear'), 'bw_clear_cache_nonce'),
        'meta' => [
            'title' => 'Clear All BW Cache',
        ],
    ]);
}

add_action('admin_menu', 'bw_add_cache_clear_page');
function bw_add_cache_clear_page() {
    add_management_page('BW Cache Clear', 'BW Cache Clear', 'manage_options', 'bw_cache_clear', 'bw_cache_clear_page');
}

function bw_cache_clear_page() {
    if (!current_user_can('manage_options')) {
        wp_die('Unauthorized');
    }

    if (isset($_GET['_wpnonce']) && wp_verify_nonce($_GET['_wpnonce'], 'bw_clear_cache_nonce')) {
        global $wpdb;
        $deleted = $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_%'");
        echo '<div class="notice notice-success"><p>Cache cleared. ' . intval($deleted) . ' rows deleted.</p></div>';
    }

    $nonce = wp_create_nonce('bw_clear_cache_nonce');
    echo '<div class="wrap"><h1>BW Cache Clear</h1><p><a href="' . esc_url(wp_nonce_url(admin_url('admin.php?page=bw_cache_clear'), 'bw_clear_cache_nonce') . '" class="button button-primary">Clear Cache Now</a></p></div>';
}
