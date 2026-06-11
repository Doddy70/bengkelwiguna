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
                'User-Agent'   => 'bw-headless-cms/v1.7.1',
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
                'User-Agent'   => 'bw-headless-cms/v1.7.1',
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
        $this->trigger_revalidation(['/', '/services/', '/promosi/'], ['services', 'promosi']);
    }

    public function handle_post_transition($new_status, $old_status, $post) {
        // Exclude standard built-in post types that do not have custom frontend routes
        $excluded_types = ['post', 'page', 'attachment', 'revision', 'nav_menu_item', 'custom_css', 'customize_changeset', 'oembed_cache', 'user_request', 'wp_block', 'wp_template', 'wp_template_part', 'wp_navigation'];
        if (in_array($post->post_type, $excluded_types)) {
            return;
        }

        if ($new_status === 'publish' || $old_status === 'publish') {
            // Delete transient caches for standard types
            if ($post->post_type === 'services') {
                delete_transient('bw_services_full_v3');
                delete_transient('bw_service_' . md5($post->post_name));
            } elseif ($post->post_type === 'promosi') {
                delete_transient('bw_promosi_active_v3');
                delete_transient('bw_promosi_' . md5($post->post_name));
            } elseif ($post->post_type === 'paket_service') {
                delete_transient('bw_paket_service_full_v1');
                delete_transient('bw_paket_service_' . md5($post->post_name));
            }

            global $wpdb;
            $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_service_%'");
            $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_promosi_%'");
            $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_" . esc_sql($post->post_type) . "_%'");

            // Normalize path prefix and tag
            $path_prefix = str_replace('_', '-', $post->post_type);
            $tag = $post->post_type;

            // Trigger Next.js revalidation dynamically using post type slug as directory prefix
            $this->trigger_revalidation(
                ['/', "/{$path_prefix}/", "/{$path_prefix}/{$post->post_name}/"],
                [$tag]
            );
        }
    }

    private function log_revalidate($message, $level = 'info') {
        if (!defined('WP_DEBUG') || !WP_DEBUG) return;
        error_log("[BW-Revalidate][{$level}] {$message}");
    }
}
