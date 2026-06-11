<?php
/**
 * Plugin Name: AI Master SDK
 * Plugin URI: https://bengkelwiguna.com/ai-master-sdk
 * Description: Multi-provider AI engine for WordPress with 15+ built-in AI abilities. Supports OpenAI, Google Gemini, and Anthropic Claude.
 * Version: 1.0.0
 * Author: Bengkel Wiguna
 * Author URI: https://bengkelwiguna.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ai-master-sdk
 * Domain Path: /languages
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Plugin constants
define('AIMSDK_VERSION', '1.0.0');
define('AIMSDK_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('AIMSDK_PLUGIN_URL', plugin_dir_url(__FILE__));
define('AIMSDK_PLUGIN_BASENAME', plugin_basename(__FILE__));

/**
 * Main AI Master SDK Class
 *
 * @since 1.0.0
 */
class AI_Master_SDK {

    /**
     * Singleton instance
     */
    private static $instance = null;

    /**
     * AI Providers
     */
    private $providers = array();

    /**
     * Active abilities
     */
    private $abilities = array();

    /**
     * Experiment status
     */
    private $experiments_enabled = false;

    /**
     * Registered dashboard widgets
     */
    private $dashboard_widgets = array();

    /**
     * Guidelines for AI behavior
     */
    private $guidelines = array();

    /**
     * Get singleton instance
     */
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        $this->experiments_enabled = (get_option('aimsdk_experiments_enabled', 'yes') === 'yes');

        // Load providers
        $this->load_providers();

        // Load abilities
        $this->load_abilities();

        // Initialize hooks
        $this->init_hooks();

        // Load admin features
        if (is_admin()) {
            $this->init_admin();
        }
    }

    /**
     * Load AI providers
     */
    private function load_providers() {
        require_once AIMSDK_PLUGIN_DIR . 'includes/providers/class-provider-base.php';
        require_once AIMSDK_PLUGIN_DIR . 'includes/providers/class-openai-provider.php';
        require_once AIMSDK_PLUGIN_DIR . 'includes/providers/class-gemini-provider.php';
        require_once AIMSDK_PLUGIN_DIR . 'includes/providers/class-anthropic-provider.php';

        // Initialize providers based on settings
        $openai_key = get_option('aimsdk_openai_api_key', '');
        $gemini_key = get_option('aimsdk_gemini_api_key', '');
        $anthropic_key = get_option('aimsdk_anthropic_api_key', '');

        if (!empty($openai_key)) {
            $this->providers['openai'] = new AIMSDK_OpenAI_Provider($openai_key);
        }

        if (!empty($gemini_key)) {
            $this->providers['gemini'] = new AIMSDK_Gemini_Provider($gemini_key);
        }

        if (!empty($anthropic_key)) {
            $this->providers['anthropic'] = new AIMSDK_Anthropic_Provider($anthropic_key);
        }

        // Allow third-party providers to register
        $this->providers = apply_filters('aimsdk_register_providers', $this->providers);
    }

    /**
     * Load AI abilities
     */
    private function load_abilities() {
        // Load ability base class
        require_once AIMSDK_PLUGIN_DIR . 'includes/abilities/class-ability-base.php';

        // Load all built-in abilities
        $ability_files = array(
            'class-alt-text-ability.php',
            'class-title-generation-ability.php',
            'class-excerpt-generation-ability.php',
            'class-content-classification-ability.php',
            'class-content-summarization-ability.php',
            'class-content-resizing-ability.php',
            'class-editorial-notes-ability.php',
            'class-editorial-updates-ability.php',
            'class-comment-moderation-ability.php',
            'class-meta-description-ability.php',
            'class-image-generation-ability.php',
        );

        foreach ($ability_files as $file) {
            $path = AIMSDK_PLUGIN_DIR . 'includes/abilities/' . $file;
            if (file_exists($path)) {
                require_once $path;
            }
        }

        // Register abilities via filter
        $this->abilities = apply_filters('aimsdk_register_abilities', $this->abilities);

        // Auto-discover abilities from classes
        $this->auto_discover_abilities();
    }

    /**
     * Auto-discover ability classes
     */
    private function auto_discover_abilities() {
        $classes = get_declared_classes();
        foreach ($classes as $class) {
            if (is_subclass_of($class, 'AIMSDK_Ability_Base') && !isset($this->abilities[$class])) {
                $ability = new $class();
                if ($ability->is_enabled()) {
                    $this->abilities[$class] = $ability;
                }
            }
        }
    }

    /**
     * Initialize hooks
     */
    private function init_hooks() {
        // REST API initialization
        add_action('rest_api_init', array($this, 'register_rest_routes'));

        // AJAX handlers
        add_action('wp_ajax_aimsdk_ability_request', array($this, 'handle_ability_request'));
        add_action('wp_ajax_aimsdk_test_connection', array($this, 'handle_test_connection'));

        // Dashboard widgets
        add_action('wp_dashboard_setup', array($this, 'register_dashboard_widgets'));

        // Admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));

        // Enqueue admin assets
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_assets'));

        // Plugin activation
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }

    /**
     * Initialize admin features
     */
    private function init_admin() {
        // Admin menu pages
        $this->register_admin_pages();

        // Abilities explorer
        add_action('admin_init', array($this, 'init_abilities_explorer'));

        // Guidelines
        $this->load_guidelines();
    }

    /**
     * Register REST API routes
     */
    public function register_rest_routes() {
        register_rest_route('aimsdk/v1', '/abilities', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_abilities'),
            'permission_callback' => array($this, 'check_admin_permission'),
        ));

        register_rest_route('aimsdk/v1', '/ability/(?P<ability_id>[a-z-]+)', array(
            'methods' => 'POST',
            'callback' => array($this, 'execute_ability'),
            'permission_callback' => array($this, 'check_admin_permission'),
            'args' => array(
                'ability_id' => array(
                    'required' => true,
                    'sanitize_callback' => 'sanitize_key',
                ),
                'context' => array(
                    'required' => false,
                    'default' => array(),
                ),
            ),
        ));

        register_rest_route('aimsdk/v1', '/providers', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_providers'),
            'permission_callback' => array($this, 'check_admin_permission'),
        ));

        register_rest_route('aimsdk/v1', '/logs', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_logs'),
            'permission_callback' => array($this, 'check_admin_permission'),
        ));

        register_rest_route('aimsdk/v1', '/settings', array(
            'methods' => 'GET',
            'callback' => array($this, 'get_settings'),
            'permission_callback' => array($this, 'check_admin_permission'),
        ), array(
            'methods' => 'POST',
            'callback' => array($this, 'update_settings'),
            'permission_callback' => array($this, 'check_admin_permission'),
        ));
    }

    /**
     * Check admin permission for REST
     */
    public function check_admin_permission() {
        return current_user_can('manage_options');
    }

    /**
     * Get all registered abilities
     */
    public function get_abilities($request) {
        $abilities_data = array();
        foreach ($this->abilities as $id => $ability) {
            $abilities_data[$id] = array(
                'id' => $id,
                'name' => $ability->get_name(),
                'description' => $ability->get_description(),
                'category' => $ability->get_category(),
                'capabilities' => $ability->get_capabilities(),
                'supported_providers' => $ability->get_supported_providers(),
            );
        }
        return new WP_REST_Response($abilities_data, 200);
    }

    /**
     * Execute an ability
     */
    public function execute_ability($request) {
        $ability_id = $request->get_param('ability_id');
        $context = $request->get_param('context', array());

        // Find the ability
        $ability = null;
        foreach ($this->abilities as $id => $a) {
            if ($id === $ability_id || sanitize_title($a->get_name()) === $ability_id) {
                $ability = $a;
                break;
            }
        }

        if (!$ability) {
            return new WP_Error('ability_not_found', 'Ability not found', array('status' => 404));
        }

        // Log the request
        $log_id = $this->log_request($ability_id, $context);

        // Execute with first available provider
        $result = $this->execute_with_provider($ability, $context);

        // Update log with result
        $this->log_response($log_id, $result);

        return new WP_REST_Response($result, 200);
    }

    /**
     * Execute ability with provider
     */
    private function execute_with_provider($ability, $context) {
        $preferred_provider = get_option('aimsdk_preferred_provider', 'openai');

        // Try preferred provider first
        if (isset($this->providers[$preferred_provider]) && $ability->supports_provider($preferred_provider)) {
            return $this->call_provider($this->providers[$preferred_provider], $ability, $context);
        }

        // Fall back to any available provider
        foreach ($this->providers as $provider_id => $provider) {
            if ($ability->supports_provider($provider_id)) {
                return $this->call_provider($provider, $ability, $context);
            }
        }

        return new WP_Error('no_provider', 'No AI provider configured for this ability');
    }

    /**
     * Call AI provider
     */
    private function call_provider($provider, $ability, $context) {
        $prompt = $ability->build_prompt($context);

        $result = $provider->complete($prompt, array(
            'temperature' => $ability->get_temperature(),
            'max_tokens' => $ability->get_max_tokens(),
        ));

        if (is_wp_error($result)) {
            return $result;
        }

        return $ability->parse_response($result);
    }

    /**
     * Get providers
     */
    public function get_providers($request) {
        $providers_data = array();
        foreach ($this->providers as $id => $provider) {
            $providers_data[$id] = array(
                'id' => $id,
                'name' => $provider->get_name(),
                'available' => $provider->is_available(),
                'models' => $provider->get_available_models(),
            );
        }
        return new WP_REST_Response($providers_data, 200);
    }

    /**
     * Get logs
     */
    public function get_logs($request) {
        $limit = $request->get_param('limit') ?: 50;
        $logs = get_option('aimsdk_request_logs', array());

        // Return most recent first
        $logs = array_slice(array_reverse($logs), 0, $limit);

        return new WP_REST_Response($logs, 200);
    }

    /**
     * Get settings
     */
    public function get_settings($request) {
        $settings = array(
            'experiments_enabled' => get_option('aimsdk_experiments_enabled', 'yes'),
            'preferred_provider' => get_option('aimsdk_preferred_provider', 'openai'),
            'openai_configured' => !empty(get_option('aimsdk_openai_api_key', '')),
            'gemini_configured' => !empty(get_option('aimsdk_gemini_api_key', '')),
            'anthropic_configured' => !empty(get_option('aimsdk_anthropic_api_key', '')),
            'guidelines' => get_option('aimsdk_guidelines', ''),
            'logging_enabled' => get_option('aimsdk_logging_enabled', 'yes'),
            'connector_approval_required' => get_option('aimsdk_connector_approval', 'no'),
            'enabled_abilities' => get_option('aimsdk_enabled_abilities', array()),
        );
        return new WP_REST_Response($settings, 200);
    }

    /**
     * Update settings
     */
    public function update_settings($request) {
        $params = $request->get_json_params();

        $settings_map = array(
            'experiments_enabled' => 'aimsdk_experiments_enabled',
            'preferred_provider' => 'aimsdk_preferred_provider',
            'openai_api_key' => 'aimsdk_openai_api_key',
            'gemini_api_key' => 'aimsdk_gemini_api_key',
            'anthropic_api_key' => 'aimsdk_anthropic_api_key',
            'openai_model' => 'aimsdk_openai_model',
            'gemini_model' => 'aimsdk_gemini_model',
            'anthropic_model' => 'aimsdk_anthropic_model',
            'guidelines' => 'aimsdk_guidelines',
            'logging_enabled' => 'aimsdk_logging_enabled',
            'connector_approval' => 'aimsdk_connector_approval',
        );

        foreach ($settings_map as $key => $option_key) {
            if (isset($params[$key])) {
                update_option($option_key, sanitize_text_field($params[$key]));
            }
        }

        // Handle enabled abilities array
        if (isset($params['enabled_abilities'])) {
            update_option('aimsdk_enabled_abilities', array_map('sanitize_key', $params['enabled_abilities']));
        }

        // Reload providers if API keys changed
        if (isset($params['openai_api_key']) || isset($params['gemini_api_key']) || isset($params['anthropic_api_key'])) {
            $this->load_providers();
        }

        return new WP_REST_Response(array('success' => true, 'message' => 'Settings updated'), 200);
    }

    /**
     * Log AI request
     */
    private function log_request($ability_id, $context) {
        if (get_option('aimsdk_logging_enabled', 'yes') !== 'yes') {
            return null;
        }

        $logs = get_option('aimsdk_request_logs', array());

        $log_entry = array(
            'id' => uniqid('aimsdk_'),
            'timestamp' => current_time('mysql'),
            'ability' => $ability_id,
            'context_type' => isset($context['type']) ? $context['type'] : 'unknown',
            'context_id' => isset($context['id']) ? $context['id'] : null,
            'user_id' => get_current_user_id(),
            'provider' => get_option('aimsdk_preferred_provider', 'openai'),
        );

        $logs[] = $log_entry;

        // Keep only last 1000 logs
        if (count($logs) > 1000) {
            $logs = array_slice($logs, -1000);
        }

        update_option('aimsdk_request_logs', $logs);

        return $log_entry['id'];
    }

    /**
     * Log AI response
     */
    private function log_response($log_id, $result) {
        if (!$log_id || get_option('aimsdk_logging_enabled', 'yes') !== 'yes') {
            return;
        }

        $logs = get_option('aimsdk_request_logs', array());

        foreach ($logs as &$log) {
            if ($log['id'] === $log_id) {
                $log['success'] = !is_wp_error($result);
                $log['response_length'] = is_string($result) ? strlen($result) : 0;
                $log['error'] = is_wp_error($result) ? $result->get_error_message() : null;
                break;
            }
        }

        update_option('aimsdk_request_logs', $logs);
    }

    /**
     * Handle AJAX ability request
     */
    public function handle_ability_request() {
        check_ajax_referer('aimsdk_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permission denied'));
        }

        $ability_id = sanitize_key($_POST['ability_id'] ?? '');
        $context = json_decode(stripslashes($_POST['context'] ?? '{}'), true);

        if (empty($ability_id)) {
            wp_send_json_error(array('message' => 'Ability ID required'));
        }

        // Find ability
        $ability = null;
        foreach ($this->abilities as $id => $a) {
            if ($id === $ability_id || sanitize_title($a->get_name()) === $ability_id) {
                $ability = $a;
                break;
            }
        }

        if (!$ability) {
            wp_send_json_error(array('message' => 'Ability not found'));
        }

        // Log and execute
        $log_id = $this->log_request($ability_id, $context);
        $result = $this->execute_with_provider($ability, $context);
        $this->log_response($log_id, $result);

        if (is_wp_error($result)) {
            wp_send_json_error(array('message' => $result->get_error_message()));
        }

        wp_send_json_success(array(
            'result' => $result,
            'ability' => $ability->get_name(),
        ));
    }

    /**
     * Handle connection test
     */
    public function handle_test_connection() {
        check_ajax_referer('aimsdk_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permission denied'));
        }

        $provider = sanitize_key($_POST['provider'] ?? '');
        $api_key = sanitize_text_field($_POST['api_key'] ?? '');

        if (empty($provider) || empty($api_key)) {
            wp_send_json_error(array('message' => 'Provider and API key required'));
        }

        // Test connection based on provider
        $test_result = $this->test_provider_connection($provider, $api_key);

        if (is_wp_error($test_result)) {
            wp_send_json_error(array('message' => $test_result->get_error_message()));
        }

        wp_send_json_success(array('message' => 'Connection successful', 'models' => $test_result));
    }

    /**
     * Test provider connection
     */
    private function test_provider_connection($provider, $api_key) {
        switch ($provider) {
            case 'openai':
                $p = new AIMSDK_OpenAI_Provider($api_key);
                return $p->test_connection();

            case 'gemini':
                $p = new AIMSDK_Gemini_Provider($api_key);
                return $p->test_connection();

            case 'anthropic':
                $p = new AIMSDK_Anthropic_Provider($api_key);
                return $p->test_connection();

            default:
                return new WP_Error('unknown_provider', 'Unknown AI provider');
        }
    }

    /**
     * Register dashboard widgets
     */
    public function register_dashboard_widgets() {
        // AI Status Widget
        wp_add_dashboard_widget('aimsdk_status_widget', 'AI Status', array($this, 'render_status_widget'));

        // AI Capabilities Widget
        wp_add_dashboard_widget('aimsdk_capabilities_widget', 'AI Capabilities', array($this, 'render_capabilities_widget'));
    }

    /**
     * Render AI Status Widget
     */
    public function render_status_widget() {
        $providers = $this->get_active_providers();
        $total_logs = count(get_option('aimsdk_request_logs', array()));

        echo '<div class="aimsdk-widget">';
        echo '<table class="widefat"><tr><td><strong>Providers Active:</strong></td><td>' . count($providers) . '</td></tr>';
        echo '<tr><td><strong>Abilities Available:</strong></td><td>' . count($this->abilities) . '</td></tr>';
        echo '<tr><td><strong>Total Requests:</strong></td><td>' . number_format($total_logs) . '</td></tr>';
        echo '<tr><td><strong>Experiments:</strong></td><td>' . (get_option('aimsdk_experiments_enabled', 'yes') === 'yes' ? '✅ Enabled' : '❌ Disabled') . '</td></tr>';
        echo '</table>';
        echo '<p><a href="' . admin_url('admin.php?page=ai-master-sdk') . '" class="button">Configure AI</a></p>';
        echo '</div>';
    }

    /**
     * Render AI Capabilities Widget
     */
    public function render_capabilities_widget() {
        $categories = array(
            'content' => array(),
            'image' => array(),
            'moderation' => array(),
            'meta' => array(),
        );

        foreach ($this->abilities as $ability) {
            $cat = $ability->get_category();
            if (isset($categories[$cat])) {
                $categories[$cat][] = $ability->get_name();
            }
        }

        echo '<div class="aimsdk-widget">';
        echo '<ul style="list-style:none;margin:0;padding:0;">';

        foreach ($categories as $cat => $items) {
            if (!empty($items)) {
                $cat_labels = array(
                    'content' => '📝 Content',
                    'image' => '🖼️ Image',
                    'moderation' => '🛡️ Moderation',
                    'meta' => '🔍 Meta',
                );
                echo '<li style="margin-bottom:10px;"><strong>' . ($cat_labels[$cat] ?? $cat) . '</strong>';
                echo '<ul style="margin-left:15px;">';
                foreach ($items as $item) {
                    echo '<li>' . esc_html($item) . '</li>';
                }
                echo '</ul></li>';
            }
        }

        echo '</ul>';
        echo '<p><a href="' . admin_url('admin.php?page=aimsdk-abilities') . '">View All Abilities →</a></p>';
        echo '</div>';
    }

    /**
     * Register admin menu pages
     */
    public function register_admin_pages() {
        add_menu_page(
            'AI Master SDK',
            'AI Master',
            'manage_options',
            'ai-master-sdk',
            array($this, 'render_main_page'),
            'dashicons-art',
            30
        );

        add_submenu_page(
            'ai-master-sdk',
            'Settings',
            'Settings',
            'manage_options',
            'ai-master-sdk',
            array($this, 'render_main_page')
        );

        add_submenu_page(
            'ai-master-sdk',
            'Abilities Explorer',
            'Abilities Explorer',
            'manage_options',
            'aimsdk-abilities',
            array($this, 'render_abilities_page')
        );

        add_submenu_page(
            'ai-master-sdk',
            'Request Logs',
            'Request Logs',
            'manage_options',
            'aimsdk-logs',
            array($this, 'render_logs_page')
        );

        add_submenu_page(
            'ai-master-sdk',
            'Guidelines',
            'Guidelines',
            'manage_options',
            'aimsdk-guidelines',
            array($this, 'render_guidelines_page')
        );
    }

    /**
     * Add admin menu (legacy)
     */
    public function add_admin_menu() {
        // Already registered in register_admin_pages
    }

    /**
     * Enqueue admin assets
     */
    public function enqueue_admin_assets($hook) {
        if (strpos($hook, 'ai-master-sdk') !== false || strpos($hook, 'aimsdk') !== false) {
            wp_enqueue_style('aimsdk-admin', AIMSDK_PLUGIN_URL . 'admin/css/admin.css', array(), AIMSDK_VERSION);
            wp_enqueue_script('aimsdk-admin', AIMSDK_PLUGIN_URL . 'admin/js/admin.js', array('jquery'), AIMSDK_VERSION, true);

            wp_localize_script('aimsdk-admin', 'aimsdk', array(
                'ajaxurl' => admin_url('admin-ajax.php'),
                'nonce' => wp_create_nonce('aimsdk_nonce'),
                'strings' => array(
                    'testing' => __('Testing connection...', 'ai-master-sdk'),
                    'success' => __('Success!', 'ai-master-sdk'),
                    'error' => __('Error occurred', 'ai-master-sdk'),
                    'generating' => __('Generating...', 'ai-master-sdk'),
                ),
            ));
        }

        // Enqueue on post editor for meta boxes
        if (in_array($hook, array('post.php', 'post-new.php'))) {
            wp_enqueue_style('aimsdk-editor', AIMSDK_PLUGIN_URL . 'admin/css/editor.css', array(), AIMSDK_VERSION);
            wp_enqueue_script('aimsdk-editor', AIMSDK_PLUGIN_URL . 'admin/js/editor.js', array('jquery'), AIMSDK_VERSION, true);

            wp_localize_script('aimsdk-editor', 'aimsdkEditor', array(
                'abilities' => $this->get_abilities_list(),
                'nonce' => wp_create_nonce('aimsdk_nonce'),
            ));
        }
    }

    /**
     * Get abilities list for JS
     */
    private function get_abilities_list() {
        $list = array();
        foreach ($this->abilities as $id => $ability) {
            $list[] = array(
                'id' => $id,
                'name' => $ability->get_name(),
                'category' => $ability->get_category(),
            );
        }
        return $list;
    }

    /**
     * Get active providers
     */
    public function get_active_providers() {
        $active = array();
        foreach ($this->providers as $id => $provider) {
            if ($provider->is_available()) {
                $active[] = $id;
            }
        }
        return $active;
    }

    /**
     * Load guidelines
     */
    private function load_guidelines() {
        $this->guidelines = get_option('aimsdk_guidelines', '');
    }

    /**
     * Get guidelines
     */
    public function get_guidelines() {
        return $this->guidelines;
    }

    /**
     * Init abilities explorer
     */
    public function init_abilities_explorer() {
        // Register abilities explorer
    }

    /**
     * Render main settings page
     */
    public function render_main_page() {
        include AIMSDK_PLUGIN_DIR . 'templates/settings-page.php';
    }

    /**
     * Render abilities page
     */
    public function render_abilities_page() {
        include AIMSDK_PLUGIN_DIR . 'templates/abilities-page.php';
    }

    /**
     * Render logs page
     */
    public function render_logs_page() {
        include AIMSDK_PLUGIN_DIR . 'templates/logs-page.php';
    }

    /**
     * Render guidelines page
     */
    public function render_guidelines_page() {
        include AIMSDK_PLUGIN_DIR . 'templates/guidelines-page.php';
    }

    /**
     * Activate plugin
     */
    public function activate() {
        // Set default options
        $defaults = array(
            'aimsdk_experiments_enabled' => 'yes',
            'aimsdk_preferred_provider' => 'openai',
            'aimsdk_logging_enabled' => 'yes',
            'aimsdk_connector_approval' => 'no',
            'aimsdk_request_logs' => array(),
        );

        foreach ($defaults as $key => $value) {
            if (get_option($key) === false) {
                add_option($key, $value);
            }
        }

        // Create capabilities table for logs
        global $wpdb;
        $table_name = $wpdb->prefix . 'aimsdk_logs';

        $charset_collate = $wpdb->get_charset_collate();
        $sql = "CREATE TABLE IF NOT EXISTS $table_name (
            id BIGINT(20) NOT NULL AUTO_INCREMENT,
            ability_id VARCHAR(100) NOT NULL,
            provider VARCHAR(50) NOT NULL,
            context_type VARCHAR(50),
            context_id BIGINT(20),
            prompt TEXT,
            response TEXT,
            success TINYINT(1) DEFAULT 1,
            error_message TEXT,
            user_id BIGINT(20),
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id),
            KEY ability_id (ability_id),
            KEY provider (provider),
            KEY created_at (created_at)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);

        flush_rewrite_rules();
    }

    /**
     * Deactivate plugin
     */
    public function deactivate() {
        // Clean up if needed (keep logs by default)
        flush_rewrite_rules();
    }
}

// Initialize plugin
function AIMSDK() {
    return AI_Master_SDK::get_instance();
}

// Start plugin
add_action('plugins_loaded', function() {
    AIMSDK();
}, 5);