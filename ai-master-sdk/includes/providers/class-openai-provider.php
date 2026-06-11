<?php
/**
 * OpenAI Provider
 *
 * @since 1.0.0
 */
class AIMSDK_OpenAI_Provider extends AIMSDK_Provider_Base {

    /**
     * Provider name
     */
    protected $name = 'OpenAI';

    /**
     * Provider ID
     */
    protected $id = 'openai';

    /**
     * Available models
     */
    protected $models = array(
        'gpt-4o' => 'GPT-4o (Most capable)',
        'gpt-4o-mini' => 'GPT-4o Mini (Fast & affordable)',
        'gpt-4-turbo' => 'GPT-4 Turbo',
        'gpt-3.5-turbo' => 'GPT-3.5 Turbo (Legacy)',
        'dall-e-3' => 'DALL-E 3 (Image generation)',
        'dall-e-2' => 'DALL-E 2 (Image generation)',
    );

    /**
     * Base URL
     */
    protected $base_url = 'https://api.openai.com/v1';

    /**
     * Default model
     */
    protected $default_model = 'gpt-4o-mini';

    /**
     * Test connection
     */
    public function test_connection() {
        $response = wp_remote_get($this->base_url . '/models', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
            ),
            'timeout' => 15,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200) {
            return new WP_Error('connection_failed', 'Failed to connect to OpenAI API');
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);
        $models = array();
        if (isset($body['data'])) {
            foreach (array_slice($body['data'], 0, 10) as $model) {
                $models[] = $model['id'];
            }
        }

        return $models;
    }

    /**
     * Complete a prompt
     */
    public function complete($prompt, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_openai_model', $this->default_model);
        $temperature = floatval($options['temperature'] ?? 0.7);
        $max_tokens = intval($options['max_tokens'] ?? 2048);

        $body = array(
            'model' => $model,
            'messages' => array(
                array(
                    'role' => 'user',
                    'content' => $prompt,
                ),
            ),
            'temperature' => $temperature,
            'max_tokens' => $max_tokens,
        );

        // Add system message for guidelines
        $guidelines = get_option('aimsdk_guidelines', '');
        if (!empty($guidelines)) {
            $body['messages'] = array_merge(
                array(array(
                    'role' => 'system',
                    'content' => 'Follow these guidelines: ' . $guidelines,
                )),
                $body['messages']
            );
        }

        $this->log_request('/chat/completions', $body);

        $response = wp_remote_post($this->base_url . '/chat/completions', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
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
            $message = $error['error']['message'] ?? 'OpenAI API error';
            return new WP_Error('api_error', $message);
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($data['choices'][0]['message']['content'])) {
            return new WP_Error('invalid_response', 'Invalid response from OpenAI');
        }

        return $data['choices'][0]['message']['content'];
    }

    /**
     * Generate image
     */
    public function generate_image($prompt, $options = array()) {
        $size = $options['size'] ?? '1024x1024';
        $quality = $options['quality'] ?? 'standard';
        $model = $options['model'] ?? 'dall-e-3';

        $body = array(
            'model' => $model,
            'prompt' => $prompt,
            'n' => 1,
            'size' => $size,
            'quality' => $quality,
        );

        $this->log_request('/images/generations', $body);

        $response = wp_remote_post($this->base_url . '/images/generations', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 120,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $code = wp_remote_retrieve_response_code($response);
        if ($code !== 200) {
            $error = json_decode(wp_remote_retrieve_body($response), true);
            $message = $error['error']['message'] ?? 'Image generation failed';
            return new WP_Error('api_error', $message);
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($data['data'][0]['url'])) {
            return new WP_Error('invalid_response', 'Invalid image generation response');
        }

        return array(
            'url' => $data['data'][0]['url'],
            'revised_prompt' => $data['data'][0]['revised_prompt'] ?? '',
        );
    }

    /**
     * Analyze image
     */
    public function analyze_image($image_url, $prompt, $options = array()) {
        $model = $options['model'] ?? 'gpt-4o';

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
                            'type' => 'image_url',
                            'image_url' => array(
                                'url' => $image_url,
                            ),
                        ),
                    ),
                ),
            ),
            'max_tokens' => $options['max_tokens'] ?? 2048,
        );

        $this->log_request('/chat/completions (vision)', $body);

        $response = wp_remote_post($this->base_url . '/chat/completions', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
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
            return new WP_Error('api_error', 'Failed to analyze image');
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        return $data['choices'][0]['message']['content'] ?? '';
    }

    /**
     * Chat completion with conversation context
     */
    public function chat($messages, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_openai_model', $this->default_model);

        $body = array(
            'model' => $model,
            'messages' => $messages,
            'temperature' => floatval($options['temperature'] ?? 0.7),
            'max_tokens' => intval($options['max_tokens'] ?? 2048),
        );

        $response = wp_remote_post($this->base_url . '/chat/completions', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $this->api_key,
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        return $data['choices'][0]['message']['content'] ?? '';
    }
}