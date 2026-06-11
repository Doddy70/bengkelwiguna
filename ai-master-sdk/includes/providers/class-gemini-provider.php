<?php
/**
 * Google Gemini Provider
 *
 * @since 1.0.0
 */
class AIMSDK_Gemini_Provider extends AIMSDK_Provider_Base {

    /**
     * Provider name
     */
    protected $name = 'Google Gemini';

    /**
     * Provider ID
     */
    protected $id = 'gemini';

    /**
     * Base URL
     */
    protected $base_url = 'https://generativelanguage.googleapis.com/v1beta/models';

    /**
     * Available models
     */
    protected $models = array(
        'gemini-2.0-flash' => 'Gemini 2.0 Flash (Fast)',
        'gemini-1.5-flash' => 'Gemini 1.5 Flash',
        'gemini-1.5-pro' => 'Gemini 1.5 Pro (Most capable)',
        'gemini-pro-vision' => 'Gemini Pro Vision (Image analysis)',
    );

    /**
     * Default model
     */
    protected $default_model = 'gemini-2.0-flash';

    /**
     * Test connection
     */
    public function test_connection() {
        $models = array_keys($this->models);
        return $models;
    }

    /**
     * Complete a prompt
     */
    public function complete($prompt, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_gemini_model', $this->default_model);
        $temperature = floatval($options['temperature'] ?? 0.7);
        $max_tokens = intval($options['max_tokens'] ?? 2048);

        // Build URL with API key
        $url = $this->base_url . '/' . $model . ':generateContent?key=' . $this->api_key;

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

        // Add system instruction if guidelines exist
        $guidelines = get_option('aimsdk_guidelines', '');
        if (!empty($guidelines)) {
            $body['systemInstruction'] = array(
                'parts' => array(
                    array('text' => 'Follow these guidelines: ' . $guidelines)
                )
            );
        }

        $this->log_request('/generateContent', $body);

        $response = wp_remote_post($url, array(
            'headers' => array(
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
            $message = $error['error']['message'] ?? 'Gemini API error';
            return new WP_Error('api_error', $message);
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($data['candidates'][0]['content']['parts'][0]['text'])) {
            return new WP_Error('invalid_response', 'Invalid response from Gemini');
        }

        return $data['candidates'][0]['content']['parts'][0]['text'];
    }

    /**
     * Analyze image (multimodal)
     */
    public function analyze_image($image_data, $mime_type, $prompt, $options = array()) {
        $model = $options['model'] ?? 'gemini-1.5-flash';
        $url = $this->base_url . '/' . $model . ':generateContent?key=' . $this->api_key;

        $body = array(
            'contents' => array(
                array(
                    'parts' => array(
                        array(
                            'text' => $prompt
                        ),
                        array(
                            'inlineData' => array(
                                'mimeType' => $mime_type,
                                'data' => base64_encode($image_data),
                            )
                        )
                    )
                )
            ),
            'generationConfig' => array(
                'temperature' => 0.7,
                'maxOutputTokens' => 2048,
            ),
        );

        $response = wp_remote_post($url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        if (!isset($data['candidates'][0]['content']['parts'][0]['text'])) {
            return new WP_Error('invalid_response', 'Invalid response from Gemini');
        }

        return $data['candidates'][0]['content']['parts'][0]['text'];
    }

    /**
     * Chat with context
     */
    public function chat($messages, $options = array()) {
        $model = $options['model'] ?? get_option('aimsdk_gemini_model', $this->default_model);

        $contents = array();
        foreach ($messages as $msg) {
            $contents[] = array(
                'role' => ($msg['role'] === 'assistant') ? 'model' : 'user',
                'parts' => array(
                    array('text' => $msg['content'])
                )
            );
        }

        $body = array(
            'contents' => $contents,
            'generationConfig' => array(
                'temperature' => floatval($options['temperature'] ?? 0.7),
                'maxOutputTokens' => intval($options['max_tokens'] ?? 2048),
            ),
        );

        $url = $this->base_url . '/' . $model . ':generateContent?key=' . $this->api_key;

        $response = wp_remote_post($url, array(
            'headers' => array(
                'Content-Type' => 'application/json',
            ),
            'body' => wp_json_encode($body),
            'timeout' => 60,
        ));

        if (is_wp_error($response)) {
            return $response;
        }

        $data = json_decode(wp_remote_retrieve_body($response), true);

        return $data['candidates'][0]['content']['parts'][0]['text'] ?? '';
    }
}