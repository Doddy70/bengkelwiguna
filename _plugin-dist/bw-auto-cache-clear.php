<?php
/**
 * BW Auto Cache Clear
 * Auto-delete WordPress transients when posts are saved or deleted
 * Prevents stale data in headless WordPress + Next.js setup
 *
 * Paste this code at the END of your theme's functions.php
 * or upload as a separate plugin via WP Admin → Plugins → Add New → Upload Plugin
 */

add_action('save_post', function($post_id, $post) {
    if (wp_is_post_autosave($post_id) || $post->post_type === 'revision') return;
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_%'");
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_bw_%'");
}, 10, 2);

add_action('delete_post', function($post_id) {
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_%'");
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_timeout_bw_%'");
});
