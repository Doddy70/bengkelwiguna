<?php
/**
 * Headless CMS ISR Revalidation Logic
 */

class BW_ISR_Revalidation {
    public function init() {
        add_action('rest_api_init', [$this, 'register_revalidate_route']);
        add_action('add_option_bw_homepage_settings', [$this, 'auto_trigger_homepage'], 10, 2);
        add_action('update_option_bw_homepage_settings', [$this, 'auto_trigger_homepage'], 10, 2);
        add_action('transition_post_status', [$this, 'handle_post_transition'], 10, 3);
    }

    public function register_revalidate_route() {
        register_rest_route('bw/v1', '/revalidate', [
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'handle_revalidate'],
                'permission_callback' => [$this, 'check_revalidate_permission'],
            ]
        ]);
    }

    public function check_revalidate_permission() {
        // Check if secret is provided via header (more secure than body)
        $header_secret = isset($_SERVER['HTTP_X_BW_REVALIDATE_SECRET']) ? sanitize_text_field($_SERVER['HTTP_X_BW_REVALIDATE_SECRET']) : '';
        $stored_secret = get_option('bw_nextjs_revalidate_secret', '');

        // If no secret configured, deny access
        if (empty($stored_secret)) {
            return new WP_Error('no_secret_configured', 'Revalidation secret not configured.', ['status' => 500]);
        }

        // Verify using timing-safe comparison
        if (!hash_equals($stored_secret, $header_secret)) {
            return new WP_Error('unauthorized', 'Unauthorized', ['status' => 401]);
        }

        return true;
    }

    public function handle_revalidate($request) {
        // Secret already validated via check_revalidate_permission, get from header
        $secret = isset($_SERVER['HTTP_X_BW_REVALIDATE_SECRET']) ? sanitize_text_field($_SERVER['HTTP_X_BW_REVALIDATE_SECRET']) : '';
        $params = $request->get_json_params();

        $paths = isset($params['paths']) && is_array($params['paths']) ? $params['paths'] : [];
        $tags  = isset($params['tags'])  && is_array($params['tags'])  ? $params['tags']  : [];
        $site_url = rtrim(get_option('bw_nextjs_site_url', ''), '/');

        if (empty($site_url)) {
            return rest_ensure_response([
                'success' => true,
                'message' => 'Next.js site URL not configured. Revalidation skipped.',
                'results' => [],
            ]);
        }

        $revalidate_url = $site_url . '/api/revalidate';
        $results = ['paths' => [], 'tags' => [], 'errors' => []];

        foreach (array_unique($paths) as $path) {
            $path = '/' . ltrim($path, '/');
            $status = $this->call_revalidate($revalidate_url, ['path' => $path, 'secret' => $secret]);
            if ($status === 200) {
                $results['paths'][] = $path;
            } else {
                $results['errors'][] = "{$path}: HTTP {$status}";
            }
        }

        if (!empty($tags)) {
            $status = $this->call_revalidate($revalidate_url, ['tags' => array_unique($tags), 'secret' => $secret]);
            if ($status === 200) {
                $results['tags'] = array_unique($tags);
            } else {
                $results['errors'][] = 'Tag revalidation: HTTP ' . $status;
            }
        }

        $has_errors = !empty($results['errors']);
        $this->log_revalidate('Webhook revalidation: ' . json_encode($results), $has_errors ? 'error' : 'info');

        return rest_ensure_response([
            'success'   => !$has_errors,
            'message'   => $has_errors ? 'Completed with errors.' : 'Revalidation triggered.',
            'results'   => $results,
        ]);
    }

    private function call_revalidate($url, $body) {
        $response = wp_remote_post($url, [
            'body'    => json_encode($body),
            'headers' => [
                'Content-Type' => 'application/json',
                'Accept'       => 'application/json',
                'User-Agent'  => 'bw-headless-cms/v1',
            ],
            'timeout'   => 15,
            'sslverify' => true,
        ]);

        if (is_wp_error($response)) {
            $this->log_revalidate('revalidate wp_error: ' . $response->get_error_message(), 'error');
            return 500;
        }

        return (int) wp_remote_retrieve_response_code($response);
    }

    public function trigger_revalidation($paths = [], $tags = []) {
        $site_url       = rtrim(get_option('bw_nextjs_site_url', ''), '/');
        $revalidate_url = $site_url . '/api/revalidate';
        $secret = get_option('bw_nextjs_revalidate_secret', '');
        $is_enabled = get_option('bw_revalidate_enabled', '1') === '1';

        if (!$is_enabled) {
            $this->log_revalidate('Revalidation disabled in settings. Skipping.', 'info');
            return;
        }

        if (empty($site_url)) {
            $this->log_revalidate('Next.js site URL not configured. Revalidation skipped.', 'warn');
            return;
        }

        if (empty($paths) && empty($tags)) {
            $paths = ['/'];
        }

        $body = [
            'secret' => $secret,
            'source' => 'bw_auto',
        ];

        if (!empty($paths)) $body['paths'] = array_unique($paths);
        if (!empty($tags))  $body['tags']  = array_unique($tags);

        $this->log_revalidate('Triggering revalidation: ' . json_encode(['url' => $revalidate_url, 'body' => $body]), 'info');

        wp_remote_post($revalidate_url, [
            'body'      => json_encode($body),
            'headers'   => [
                'Content-Type' => 'application/json',
                'User-Agent'   => 'bw-headless-cms/v1.8.1',
            ],
            'timeout'   => 10,
            'blocking'  => false, // Non-blocking for performance
        ]);
    }

    /**
     * Manual trigger revalidation (called from admin)
     */
    public function manual_revalidate($paths = [], $tags = []) {
        $site_url       = rtrim(get_option('bw_nextjs_site_url', ''), '/');
        $revalidate_url = $site_url . '/api/revalidate';
        $secret = get_option('bw_nextjs_revalidate_secret', '');

        if (empty($site_url) || empty($secret)) {
            return new WP_Error('config_error', 'Site URL atau Secret belum dikonfigurasi.');
        }

        if (empty($paths) && empty($tags)) {
            $paths = ['/'];
        }

        $body = ['secret' => $secret, 'source' => 'bw_manual'];
        if (!empty($paths)) $body['paths'] = $paths;
        if (!empty($tags))  $body['tags']  = $tags;

        $response = wp_remote_post($revalidate_url, [
            'body'      => json_encode($body),
            'headers'   => [
                'Content-Type' => 'application/json',
                'User-Agent'   => 'bw-headless-cms/v1.8.1',
            ],
            'timeout'   => 30,
            'blocking'  => true,
        ]);

        if (is_wp_error($response)) {
            $this->log_revalidate('Manual revalidate failed: ' . $response->get_error_message(), 'error');
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = wp_remote_retrieve_body($response);

        $this->log_revalidate('Manual revalidate result: HTTP ' . $code . ' - ' . $body, 'info');

        return [
            'status' => $code,
            'body'   => json_decode($body, true),
        ];
    }

    public function auto_trigger_homepage($option, $value) {
        $this->trigger_revalidation(['/'], ['homepage', 'settings']);
    }

    public function handle_post_transition($new_status, $old_status, $post) {
        // Exclude internal post types
        $internal_types = ['attachment', 'revision', 'nav_menu_item', 'custom_css', 'customize_changeset', 'oembed_cache', 'user_request', 'wp_block', 'wp_template', 'wp_template_part', 'wp_navigation'];
        if (in_array($post->post_type, $internal_types)) {
            return;
        }

        if ($new_status === 'publish' || $old_status === 'publish') {
            // 1. CLEAR WORDPRESS TRANSIENTS (Backend Cache)
            $this->clear_wp_transients($post);

            // 2. TRIGGER NEXT.JS REVALIDATION (Frontend Cache)
            
            // Normalize post type to dashed tag (Next.js uses dashes)
            $tag_base = str_replace('_', '-', $post->post_type);
            if ($tag_base === 'post') $tag_base = 'posts';
            if ($tag_base === 'page') $tag_base = 'pages';

            // Paths and Tags to revalidate
            $paths = ['/']; // Always revalidate homepage for safety
            $tags = [$tag_base, "all-{$tag_base}"];

            // Add specific item tags
            $tags[] = "{$tag_base}-{$post->post_name}";
            if ($post->post_type === 'post') $tags[] = "post-{$post->post_name}";
            if ($post->post_type === 'page') $tags[] = "page-{$post->post_name}";

            // Determine frontend path based on post type
            $frontend_path = '';
            if ($post->post_type === 'services') $frontend_path = "/services/{$post->post_name}/";
            elseif ($post->post_type === 'promosi') $frontend_path = "/promosi/{$post->post_name}/";
            elseif ($post->post_type === 'paket_service') $frontend_path = "/paket-service/{$post->post_name}/";
            elseif ($post->post_type === 'layanan_spesialis') $frontend_path = "/layanan-spesialis/{$post->post_name}/";
            elseif ($post->post_type === 'post') $frontend_path = "/blog/{$post->post_name}/";
            elseif ($post->post_type === 'page') $frontend_path = "/{$post->post_name}/";

            if ($frontend_path) {
                $paths[] = $frontend_path;
                // Also revalidate archive pages
                $archive_path = rtrim(dirname($frontend_path), '/') . '/';
                if ($archive_path !== '/') $paths[] = $archive_path;
            }

            // Trigger revalidation
            $this->trigger_revalidation($paths, $tags);
        }
    }

    private function clear_wp_transients($post) {
        global $wpdb;
        
        $post_type = $post->post_type;
        $slug_hash = md5($post->post_name);

        // 1. Clear Collection Transients
        delete_transient('bw_' . $post_type . '_full');
        if ($post_type === 'services') delete_transient('bw_services_full_v3');
        if ($post_type === 'promosi') delete_transient('bw_promosi_active_v3');
        if ($post_type === 'paket_service') delete_transient('bw_paket_service_full_v1');
        if ($post_type === 'layanan_spesialis') delete_transient('bw_layanan_spesialis_full');
        
        // 2. Clear Single Item Transients (Handling plural/singular mismatches)
        $single_prefix = 'bw_' . $post_type . '_';
        if ($post_type === 'services') $single_prefix = 'bw_service_';
        if ($post_type === 'promosi') $single_prefix = 'bw_promosi_';
        if ($post_type === 'paket_service') $single_prefix = 'bw_paket_service_';
        if ($post_type === 'layanan_spesialis') $single_prefix = 'bw_layanan_spesialis_';

        delete_transient($single_prefix . $slug_hash);
        
        // 3. Bulk cleanup for transients starting with our prefix
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_" . esc_sql($post_type) . "_%'");
        if ($post_type === 'services') {
            $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_service_%'");
        }
    }

    private function log_revalidate($message, $level = 'info') {
        if (!defined('WP_DEBUG') || !WP_DEBUG) return;
        error_log("[BW-Revalidate][{$level}] {$message}");
    }
}
