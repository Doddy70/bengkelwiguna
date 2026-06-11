<?php
/**
 * Plugin Name: AI Content Assistant
 * Plugin URI: https://example.com/ai-content-assistant
 * Description: AI-powered content assistant using Google Gemini API — generate titles, excerpts, improve content, and more.
 * Version: 1.0.0
 * Author: Your Name
 * Author URI: https://example.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ai-content-assistant
 * Domain Path: /languages
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Plugin version
define('AICA_VERSION', '1.0.0');
define('AICA_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('AICA_PLUGIN_URL', plugin_dir_url(__FILE__));

/**
 * Main plugin class
 */
class AI_Content_Assistant {

    /**
     * Singleton instance
     */
    private static $instance = null;

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
        add_action('init', array($this, 'load_textdomain'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
        add_action('add_meta_boxes', array($this, 'add_meta_box'));
        add_action('wp_ajax_aica_generate_content', array($this, 'ajax_generate_content'));
        add_action('wp_ajax_aica_save_draft', array($this, 'ajax_save_draft'));
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
    }

    /**
     * Activate plugin
     */
    public function activate() {
        // Set default options
        $defaults = array(
            'gemini_api_key'     => '',
            'model'             => 'gemini-2.0-flash',
            'temperature'       => 0.7,
            'max_tokens'       => 2048,
            'enable_title'      => '1',
            'enable_excerpt'    => '1',
            'enable_improve'    => '1',
            'enable_summarize'  => '1',
            'total_requests'    => 0,
            'last_reset'       => date('Y-m-d'),
        );
        foreach ($defaults as $key => $value) {
            if (get_option('aica_' . $key) === false) {
                add_option('aica_' . $key, $value);
            }
        }
        flush_rewrite_rules();
    }

    /**
     * Deactivate plugin
     */
    public function deactivate() {
        flush_rewrite_rules();
    }

    /**
     * Load plugin textdomain
     */
    public function load_textdomain() {
        load_plugin_textdomain(
            'ai-content-assistant',
            false,
            dirname(plugin_basename(__FILE__)) . '/languages'
        );
    }

    /**
     * Enqueue admin assets
     */
    public function enqueue_assets($hook) {
        // Only load on post editor and plugin pages
        if (!in_array($hook, array('post.php', 'post-new.php'), true) &&
            !str_contains($hook, 'ai-content-assistant')) {
            return;
        }

        wp_enqueue_style(
            'aica-admin-css',
            AICA_PLUGIN_URL . 'assets/css/admin.css',
            array(),
            AICA_VERSION
        );

        wp_enqueue_script(
            'aica-admin-js',
            AICA_PLUGIN_URL . 'assets/js/admin.js',
            array('jquery'),
            AICA_VERSION,
            true
        );

        wp_localize_script('aica-admin-js', 'aica', array(
            'ajaxurl'      => admin_url('admin-ajax.php'),
            'nonce'        => wp_create_nonce('aica_nonce'),
            'strings'      => array(
                'generating' => __('Generating...', 'ai-content-assistant'),
                'success'    => __('Success!', 'ai-content-assistant'),
                'error'      => __('Error occurred', 'ai-content-assistant'),
                'copy'       => __('Copy', 'ai-content-assistant'),
                'apply'      => __('Apply', 'ai-content-assistant'),
                'save_draft' => __('Save Draft', 'ai-content-assistant'),
            ),
        ));
    }

    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_menu_page(
            __('AI Content Assistant', 'ai-content-assistant'),
            __('AI Content', 'ai-content-assistant'),
            'manage_options',
            'ai-content-assistant',
            array($this, 'render_settings_page'),
            'dashicons-art',
            30
        );
    }

    /**
     * Render settings page
     */
    public function render_settings_page() {
        if (!current_user_can('manage_options')) {
            return;
        }

        // Handle form submission
        if (isset($_POST['aica_save_settings']) && wp_verify_nonce($_POST['aica_nonce_field'], 'aica_settings_action')) {
            $api_key   = sanitize_text_field($_POST['aica_gemini_api_key'] ?? '');
            $model     = sanitize_text_field($_POST['aica_model'] ?? 'gemini-2.0-flash');
            $temperature = floatval($_POST['aica_temperature'] ?? 0.7);
            $max_tokens = intval($_POST['aica_max_tokens'] ?? 2048);

            update_option('aica_gemini_api_key', $api_key);
            update_option('aica_model', $model);
            update_option('aica_temperature', $temperature);
            update_option('aica_max_tokens', $max_tokens);

            echo '<div class="notice notice-success is-dismissible"><p>' .
                __('Settings saved successfully!', 'ai-content-assistant') . '</p></div>';
        }

        // Handle feature toggles
        if (isset($_POST['aica_save_features']) && wp_verify_nonce($_POST['aica_features_nonce_field'], 'aica_features_action')) {
            $features = array('title', 'excerpt', 'improve', 'summarize');
            foreach ($features as $feature) {
                update_option('aica_enable_' . $feature, isset($_POST['aica_enable_' . $feature]) ? '1' : '0');
            }
            echo '<div class="notice notice-success is-dismissible"><p>' .
                __('Features updated!', 'ai-content-assistant') . '</p></div>';
        }

        // Handle stats reset
        if (isset($_POST['aica_reset_stats']) && wp_verify_nonce($_POST['aica_stats_nonce_field'], 'aica_stats_action')) {
            update_option('aica_total_requests', 0);
            update_option('aica_last_reset', date('Y-m-d'));
            echo '<div class="notice notice-success is-dismissible"><p>' .
                __('Statistics reset!', 'ai-content-assistant') . '</p></div>';
        }

        // Get current options
        $api_key     = get_option('aica_gemini_api_key', '');
        $model       = get_option('aica_model', 'gemini-2.0-flash');
        $temperature = get_option('aica_temperature', 0.7);
        $max_tokens  = get_option('aica_max_tokens', 2048);
        $total_reqs  = get_option('aica_total_requests', 0);
        $last_reset  = get_option('aica_last_reset', date('Y-m-d'));
        ?>
        <div class="wrap aica-wrap">
            <h1>
                <span class="dashicons dashicons-art" style="font-size:30px;width:30px;height:30px;"></span>
                <?php _e('AI Content Assistant', 'ai-content-assistant'); ?>
            </h1>

            <!-- Stats Dashboard -->
            <div class="aica-dashboard">
                <div class="aica-stat-card">
                    <h3><?php _e('Total Requests', 'ai-content-assistant'); ?></h3>
                    <p class="aica-stat-number"><?php echo number_format($total_reqs); ?></p>
                </div>
                <div class="aica-stat-card">
                    <h3><?php _e('Last Reset', 'ai-content-assistant'); ?></h3>
                    <p class="aica-stat-text"><?php echo esc_html($last_reset); ?></p>
                </div>
                <div class="aica-stat-card">
                    <h3><?php _e('Model', 'ai-content-assistant'); ?></h3>
                    <p class="aica-stat-text"><?php echo esc_html($model); ?></p>
                </div>
            </div>

            <!-- API Settings -->
            <div class="aica-card">
                <h2><?php _e('API Configuration', 'ai-content-assistant'); ?></h2>
                <form method="post" action="">
                    <?php wp_nonce_field('aica_settings_action', 'aica_nonce_field'); ?>
                    <table class="form-table">
                        <tr>
                            <th scope="row">
                                <label for="aica_gemini_api_key"><?php _e('Google Gemini API Key', 'ai-content-assistant'); ?></label>
                            </th>
                            <td>
                                <input type="password" id="aica_gemini_api_key" name="aica_gemini_api_key"
                                    value="<?php echo esc_attr($api_key); ?>" class="regular-text"
                                    placeholder="AIza..." autocomplete="off">
                                <p class="description">
                                    <?php _e('Get your API key from', 'ai-content-assistant'); ?>
                                    <a href="https://aistudio.google.com/app/apikey" target="_blank">
                                        <?php _e('Google AI Studio', 'ai-content-assistant'); ?>
                                    </a>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="aica_model"><?php _e('Model', 'ai-content-assistant'); ?></label>
                            </th>
                            <td>
                                <select id="aica_model" name="aica_model">
                                    <option value="gemini-2.0-flash" <?php selected($model, 'gemini-2.0-flash'); ?>>Gemini 2.0 Flash (Fast)</option>
                                    <option value="gemini-1.5-flash" <?php selected($model, 'gemini-1.5-flash'); ?>>Gemini 1.5 Flash</option>
                                    <option value="gemini-1.5-pro" <?php selected($model, 'gemini-1.5-pro'); ?>>Gemini 1.5 Pro</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="aica_temperature"><?php _e('Temperature', 'ai-content-assistant'); ?></label>
                            </th>
                            <td>
                                <input type="number" id="aica_temperature" name="aica_temperature"
                                    value="<?php echo esc_attr($temperature); ?>" min="0" max="2" step="0.1" class="small-text">
                                <p class="description"><?php _e('Lower = more focused, Higher = more creative (0.0 - 2.0)', 'ai-content-assistant'); ?></p>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">
                                <label for="aica_max_tokens"><?php _e('Max Tokens', 'ai-content-assistant'); ?></label>
                            </th>
                            <td>
                                <input type="number" id="aica_max_tokens" name="aica_max_tokens"
                                    value="<?php echo esc_attr($max_tokens); ?>" min="256" max="8192" step="256" class="small-text">
                            </td>
                        </tr>
                    </table>
                    <?php submit_button(__('Save Settings', 'ai-content-assistant'), 'primary', 'aica_save_settings'); ?>
                </form>
            </div>

            <!-- Feature Toggles -->
            <div class="aica-card">
                <h2><?php _e('Features', 'ai-content-assistant'); ?></h2>
                <form method="post" action="">
                    <?php wp_nonce_field('aica_features_action', 'aica_features_nonce_field'); ?>
                    <table class="form-table">
                        <tr>
                            <th scope="row"><?php _e('Enable Features', 'ai-content-assistant'); ?></th>
                            <td>
                                <label><input type="checkbox" name="aica_enable_title" value="1" <?php checked(get_option('aica_enable_title'), '1'); ?>>
                                    <?php _e('Generate Title Suggestions', 'ai-content-assistant'); ?></label><br>
                                <label><input type="checkbox" name="aica_enable_excerpt" value="1" <?php checked(get_option('aica_enable_excerpt'), '1'); ?>>
                                    <?php _e('Generate Excerpt', 'ai-content-assistant'); ?></label><br>
                                <label><input type="checkbox" name="aica_enable_improve" value="1" <?php checked(get_option('aica_enable_improve'), '1'); ?>>
                                    <?php _e('Improve Content', 'ai-content-assistant'); ?></label><br>
                                <label><input type="checkbox" name="aica_enable_summarize" value="1" <?php checked(get_option('aica_enable_summarize'), '1'); ?>>
                                    <?php _e('Summarize Content', 'ai-content-assistant'); ?></label>
                            </td>
                        </tr>
                    </table>
                    <?php submit_button(__('Save Features', 'ai-content-assistant'), 'primary', 'aica_save_features'); ?>
                </form>
            </div>

            <!-- Statistics Reset -->
            <div class="aica-card">
                <h2><?php _e('Statistics', 'ai-content-assistant'); ?></h2>
                <form method="post" action="">
                    <?php wp_nonce_field('aica_stats_action', 'aica_stats_nonce_field'); ?>
                    <p><?php printf(
                        __('Total AI requests: %d | Last reset: %s', 'ai-content-assistant'),
                        number_format($total_reqs),
                        esc_html($last_reset)
                    ); ?></p>
                    <?php submit_button(__('Reset Statistics', 'ai-content-assistant'), 'secondary', 'aica_reset_stats'); ?>
                </form>
            </div>

            <!-- Usage Guide -->
            <div class="aica-card">
                <h2><?php _e('How to Use', 'ai-content-assistant'); ?></h2>
                <ol>
                    <li><?php _e('Enter your Google Gemini API key above', 'ai-content-assistant'); ?></li>
                    <li><?php _e('Enable the features you want to use', 'ai-content-assistant'); ?></li>
                    <li><?php _e('Create or edit a post — look for the "AI Content Assistant" meta box', 'ai-content-assistant'); ?></li>
                    <li><?php _e('Click any feature button to generate content', 'ai-content-assistant'); ?></li>
                    <li><?php _e('Use "Copy" to copy text, "Apply" to insert into editor, or "Save Draft" to save', 'ai-content-assistant'); ?></li>
                </ol>
            </div>
        </div>
        <?php
    }

    /**
     * Add meta box to post editor
     */
    public function add_meta_box() {
        $screens = array('post', 'page');
        foreach ($screens as $screen) {
            add_meta_box(
                'aica_meta_box',
                __('AI Content Assistant', 'ai-content-assistant'),
                array($this, 'render_meta_box'),
                $screen,
                'side',
                'high'
            );
        }
    }

    /**
     * Render meta box content
     */
    public function render_meta_box($post) {
        $api_key = get_option('aica_gemini_api_key', '');
        $has_key = !empty($api_key);
        ?>
        <div class="aica-meta-box" id="aica-meta-box">
            <?php if (!$has_key) : ?>
                <div class="aica-alert aica-alert-warning">
                    <p><?php _e('Please configure your API key in', 'ai-content-assistant'); ?>
                        <a href="<?php echo admin_url('admin.php?page=ai-content-assistant'); ?>">
                            <?php _e('AI Content Settings', 'ai-content-assistant'); ?>
                        </a>
                    </p>
                </div>
            <?php else : ?>

                <!-- Generate Title -->
                <?php if (get_option('aica_enable_title') === '1') : ?>
                <div class="aica-section">
                    <h4><?php _e('🎯 Generate Title', 'ai-content-assistant'); ?></h4>
                    <button type="button" class="button aica-btn" data-action="title" data-post-id="<?php echo esc_attr($post->ID); ?>">
                        <?php _e('Generate Titles', 'ai-content-assistant'); ?>
                    </button>
                    <div class="aica-results" id="aica-title-results"></div>
                </div>
                <?php endif; ?>

                <!-- Generate Excerpt -->
                <?php if (get_option('aica_enable_excerpt') === '1') : ?>
                <div class="aica-section">
                    <h4><?php _e('📝 Generate Excerpt', 'ai-content-assistant'); ?></h4>
                    <button type="button" class="button aica-btn" data-action="excerpt" data-post-id="<?php echo esc_attr($post->ID); ?>">
                        <?php _e('Generate Excerpt', 'ai-content-assistant'); ?>
                    </button>
                    <div class="aica-results" id="aica-excerpt-results"></div>
                </div>
                <?php endif; ?>

                <!-- Improve Content -->
                <?php if (get_option('aica_enable_improve') === '1') : ?>
                <div class="aica-section">
                    <h4><?php _e('✨ Improve Content', 'ai-content-assistant'); ?></h4>
                    <button type="button" class="button aica-btn" data-action="improve" data-post-id="<?php echo esc_attr($post->ID); ?>">
                        <?php _e('Improve Writing', 'ai-content-assistant'); ?>
                    </button>
                    <div class="aica-results" id="aica-improve-results"></div>
                </div>
                <?php endif; ?>

                <!-- Summarize Content -->
                <?php if (get_option('aica_enable_summarize') === '1') : ?>
                <div class="aica-section">
                    <h4><?php _e('📋 Summarize', 'ai-content-assistant'); ?></h4>
                    <button type="button" class="button aica-btn" data-action="summarize" data-post-id="<?php echo esc_attr($post->ID); ?>">
                        <?php _e('Summarize', 'ai-content-assistant'); ?>
                    </button>
                    <div class="aica-results" id="aica-summarize-results"></div>
                </div>
                <?php endif; ?>

                <!-- Loading State -->
                <div class="aica-loading" id="aica-loading" style="display:none;">
                    <span class="spinner is-active"></span>
                    <span><?php _e('Generating...', 'ai-content-assistant'); ?></span>
                </div>

            <?php endif; ?>
        </div>
        <?php
    }

    /**
     * AJAX handler for content generation
     */
    public function ajax_generate_content() {
        check_ajax_referer('aica_nonce', 'nonce');

        $action_type = sanitize_text_field($_POST['action_type'] ?? '');
        $post_id     = intval($_POST['post_id'] ?? 0);
        $post        = get_post($post_id);

        if (!$post) {
            wp_send_json_error(array('message' => __('Post not found', 'ai-content-assistant')));
        }

        $api_key    = get_option('aica_gemini_api_key', '');
        $model      = get_option('aica_model', 'gemini-2.0-flash');
        $temperature = get_option('aica_temperature', 0.7);
        $max_tokens = get_option('aica_max_tokens', 2048);

        if (empty($api_key)) {
            wp_send_json_error(array('message' => __('API key not configured', 'ai-content-assistant')));
        }

        // Build prompt based on action type
        $content = $post->post_content;
        $title   = $post->post_title;
        $prompt  = $this->build_prompt($action_type, $title, $content);

        // Call Gemini API
        $result = $this->call_gemini_api($api_key, $model, $prompt, $temperature, $max_tokens);

        if (is_wp_error($result)) {
            wp_send_json_error(array('message' => $result->get_error_message()));
        }

        // Increment request counter
        update_option('aica_total_requests', get_option('aica_total_requests', 0) + 1);

        wp_send_json_success(array(
            'result' => $result,
            'action' => $action_type,
        ));
    }

    /**
     * Build prompt based on action type
     */
    private function build_prompt($action_type, $title, $content) {
        $plain_content = wp_strip_all_tags($content);
        $plain_title    = wp_strip_all_tags($title);

        switch ($action_type) {
            case 'title':
                return "Based on the following content, generate 5 catchy and SEO-friendly title suggestions.\n\n" .
                       "Title: {$plain_title}\nContent: {$plain_content}\n\n" .
                       "Return ONLY a JSON array like: [\"Title 1\", \"Title 2\", \"Title 3\", \"Title 4\", \"Title 5\"]";

            case 'excerpt':
                return "Write a compelling and SEO-friendly excerpt (max 160 characters) for the following content.\n\n" .
                       "Title: {$plain_title}\nContent: {$plain_content}\n\n" .
                       "Return ONLY the excerpt text, no additional explanation.";

            case 'improve':
                return "Improve the following content for better readability, grammar, and engagement. " .
                       "Keep the same meaning but make it more compelling and professional.\n\n" .
                       "Title: {$plain_title}\nContent: {$plain_content}\n\n" .
                       "Return the improved content in HTML format with proper paragraph tags.";

            case 'summarize':
                return "Summarize the following content in 2-3 concise bullet points.\n\n" .
                       "Title: {$plain_title}\nContent: {$plain_content}\n\n" .
                       "Return the summary as bullet points, no additional explanation.";

            default:
                return "Generate content based on the following:\n\n" .
                       "Title: {$plain_title}\nContent: {$plain_content}";
        }
    }

    /**
     * Call Google Gemini API
     */
    private function call_gemini_api($api_key, $model, $prompt, $temperature = 0.7, $max_tokens = 2048) {
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$api_key}";

        $body = array(
            'contents' => array(
                array(
                    'parts' => array(
                        array('text' => $prompt)
                    )
                )
            ),
            'generationConfig' => array(
                'temperature' => $temperature,
                'maxOutputTokens' => $max_tokens,
            ),
        );

        $args = array(
            'method'  => 'POST',
            'headers' => array(
                'Content-Type' => 'application/json',
            ),
            'body'    => json_encode($body),
            'timeout' => 60,
        );

        $response = wp_remote_post($url, $args);

        if (is_wp_error($response)) {
            return $response;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($body['candidates'][0]['content']['parts'][0]['text'])) {
            return new WP_Error('api_error', __('Invalid API response', 'ai-content-assistant'));
        }

        return $body['candidates'][0]['content']['parts'][0]['text'];
    }

    /**
     * AJAX handler for save draft
     */
    public function ajax_save_draft() {
        check_ajax_referer('aica_nonce', 'nonce');

        $post_id   = intval($_POST['post_id'] ?? 0);
        $content   = wp_kses_post($_POST['content'] ?? '');
        $field     = sanitize_text_field($_POST['field'] ?? 'content');

        if (!$post_id) {
            wp_send_json_error(array('message' => __('Invalid post ID', 'ai-content-assistant')));
        }

        if ($field === 'title') {
            wp_update_post(array('ID' => $post_id, 'post_title' => $content));
        } elseif ($field === 'excerpt') {
            update_post_meta($post_id, '_ai_generated_excerpt', $content);
            wp_update_post(array('ID' => $post_id, 'post_excerpt' => $content));
        } else {
            wp_update_post(array('ID' => $post_id, 'post_content' => $content));
        }

        wp_send_json_success(array('message' => __('Saved!', 'ai-content-assistant')));
    }
}

// Initialize plugin
AI_Content_Assistant::get_instance();