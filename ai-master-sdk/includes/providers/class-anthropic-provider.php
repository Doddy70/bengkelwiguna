<?php
/**
 * Anthropic Claude Provider
 *
 * @since 1.0.0
 */
class AIMSDK_Anthropic_Provider extends AIMSDK_Provider_Base {

    /**
     * Provider name
     */
    protected $name = 'Anthropic Claude';

    /**
     * Provider ID
     */
    protected $id = 'anthropic';

    /**
     * Base URL
     */
    protected $base_url = 'https://api.anthropic.com/v1';

    /**
     * Available models
     */
    protected $models = array(
        'claude-3-5-sonnet-20241022' => 'Claude 3.5 Sonnet (Latest)',
        'claude-3-opus-20240229' => 'Claude 3 Opus',
        'claude-3-sonnet-20240229' => 'Claude 3 Sonnet',
        'claude-3-haiku-20240307' => 'Claude 3 Haiku (Fast)',
    );

    /**
     * Default model
     */
    protected $default_model = 'claude-3-5-sonnet-20241022';

    /**
     * Test connection
     */
    public function test_connection() {
        // Anthropic doesn't have a list models endpoint, so we try a simple completion
        $response = wp_remote_post($this->base_url . '/messages', array(
            'headers' => array(
                'x-api-key' => $this->api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode(array(
                'model' => $this->default_model,
                'max_tokens' => 10,
                'messages' => array(
                    array(
                        'role' => 'user',
                        'content' => 'Hi',
                    )
                )
            )),
            'timeout' => 15,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200) {
            return new WP_Error('connection_failed', 'Failed to connect to Anthropic API');
        }

        return array_keys($this->models);
    }

    /**
     * Complete a prompt
     */
    public function complete($prompt, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_anthropic_model', $this->default_model);
        $temperature = floatval($options['temperature'] ?? 0.7);
        $max_tokens = intval($options['max_tokens'] ?? 2048);

        $body = array(
            'model' => $model,
            'messages' => array(
                array(
                    'role' => 'user',
                    'content' => $prompt,
                )
            ),
            'temperature' => $temperature,
            'max_tokens' => $max_tokens,
        );

        // Add system prompt for guidelines
        $guidelines = get_option('aimsdk_guidelines', '');
        if (!empty($guidelines)) {
            $body['system'] = 'Follow these guidelines: ' . $guidelines;
        }

        $this->log_request('/messages', $body);

        $response = wp_remote_post($this->base_url . '/messages', array(
            'headers' => array(
                'x-api-key' => $this->api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200) {
            $error = json_decode(wp_remote_retrieve_body($response), true);
            $message = $error['error']['message'] ?? 'Anthropic API error';
            return new WP_Error('api_error', $message);
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($data['content'][0]['text'])) {
            return new WP_Error('invalid_response', 'Invalid response from Anthropic');
        }

        return $data['content'][0]['text'];
    }

    /**
     * Chat with conversation history
     */
    public function chat($messages, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_anthropic_model', $this->default_model);

        $body = array(
            'model' => $model,
            'messages' => $messages,
            'temperature' => floatval($options['temperature'] ?? 0.7),
            'max_tokens' => intval($options['max_tokens'] ?? 2048),
        );

        // Add system prompt
        $guidelines = get_option('aimsdk_guidelines', '');
        if (!empty($guidelines)) {
            $body['system'] = 'Follow these guidelines: ' . $guidelines;
        }

        $response = wp_remote_post($this->base_url . '/messages', array(
            'headers' => array(
                'x-api-key' => $this->api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        return $data['content'][0]['text'] ?? '';
    }

    /**
     * Analyze image (Claude 3+)
     */
    public function analyze_image($image_data, $mime_type, $prompt, $options = array()) {
        $model = $options['model'] ?? 'claude-3-5-sonnet-20241022';

        $body = array(
            'model' => $model,
            'messages' => array(
                array(
                    'role' => 'user',
                    'content' => array(
                        array(
                            'type' => 'text',
                            'text' => $prompt,
                        ),
                        array(
                            'type' => 'image',
                            'source' => array(
                                'type' => 'base64',
                                'media_type' => $mime_type,
                                'data' => base64_encode($image_data),
                            )
                        )
                    ),
                )
            ),
            'max_tokens' => $options['max_tokens'] ?? 2048,
        );

        $response = wp_remote_post($this->base_url . '/messages', array(
            'headers' => array(
                'x-api-key' => $this->api_key,
                'anthropic-version' => '2023-06-01',
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        return $data['content'][0]['text'] ?? '';
    }
}