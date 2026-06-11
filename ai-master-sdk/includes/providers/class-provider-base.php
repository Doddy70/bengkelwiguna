<?php
/**
 * Abstract base class for AI Providers
 *
 * @since 1.0.0
 */
abstract class AIMSDK_Provider_Base {

    /**
     * API Key
     */
    protected $api_key;

    /**
     * Provider name
     */
    protected $name;

    /**
     * Provider ID
     */
    protected $id;

    /**
     * Available models
     */
    protected $models = array();

    /**
     * Constructor
     */
    public function __construct($api_key) {
        $this->api_key = $api_key;
    }

    /**
     * Get provider name
     */
    public function get_name() {
        return $this->name;
    }

    /**
     * Get provider ID
     */
    public function get_id() {
        return $this->id;
    }

    /**
     * Check if provider is available
     */
    public function is_available() {
        return !empty($this->api_key);
    }

    /**
     * Get available models
     */
    public function get_available_models() {
        return $this->models;
    }

    /**
     * Test connection
     */
    abstract public function test_connection();

    /**
     * Complete a prompt
     */
    abstract public function complete($prompt, $options = array());

    /**
     * Generate image
     */
    public function generate_image($prompt, $options = array()) {
        return new WP_Error('not_supported', 'Image generation not supported by this provider');
    }

    /**
     * Build headers for API request
     */
    protected function build_headers() {
        return array(
            'Content-Type' => 'application/json',
        );
    }

    /**
     * Handle API response
     */
    protected function handle_response($response) {
        if (is_wp_error($response)) {
            return $response;
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (empty($data)) {
            return new WP_Error('invalid_response', 'Invalid API response');
        }

        return $data;
    }

    /**
     * Log API request
     */
    protected function log_request($endpoint, $data) {
        if (get_option('aimsdk_logging_enabled', 'yes') !== 'yes') {
            return;
        }

        $logs = get_option('aimsdk_request_logs', array());
        $logs[] = array(
            'timestamp' => current_time('mysql'),
            'provider' => $this->id,
            'endpoint' => $endpoint,
            'data_size' => strlen(wp_json_encode($data)),
        );

        if (count($logs) > 1000) {
            $logs = array_slice($logs, -1000);
        }

        update_option('aimsdk_request_logs', $logs);
    }
}