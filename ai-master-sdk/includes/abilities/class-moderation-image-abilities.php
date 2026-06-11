<?php
/**
 * Comment Moderation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Comment_Moderation_Ability extends AIMSDK_Moderation_Ability {

    protected $id = 'comment-moderation';
    protected $name = 'Moderate Comments';
    protected $description = 'Automatically moderate comments based on toxicity detection and sentiment analysis.';
    protected $capabilities = array('toxicity-detection', 'sentiment-analysis', 'auto-action');
    protected $max_tokens = 512;
    protected $temperature = 0.2;

    public function build_prompt($context) {
        $comment = $context['comment'] ?? '';
        $author = $context['author'] ?? '';

        $prompt = "You are a content moderation expert. Analyze the following comment for toxicity, spam, and sentiment.\n\n";
        $prompt .= "Author: {$author}\n";
        $prompt .= "Comment: {$comment}\n\n";
        $prompt .= "Return a JSON object with:\n";
        $prompt .= '{"approved": true/false, "toxicity_score": 0.0-1.0, "sentiment": "positive/neutral/negative", ';
        $prompt .= '"reasons": ["reason1", "reason2"], "action": "approve/hold/spam/delete"}\n\n";
        $prompt .= "Be strict - reject comments with any form of harassment, hate speech, or spam.\n";
        $prompt .= "Return ONLY valid JSON.";

        return $prompt;
    }

    public function parse_response($response) {
        $decoded = json_decode($response, true);
        if (is_array($decoded)) {
            return $decoded;
        }
        return array('approved' => true, 'toxicity_score' => 0, 'sentiment' => 'neutral');
    }

    public function register_hooks() {
        // Auto-moderate new comments
        add_action('wp_insert_comment', array($this, 'moderate_comment'), 10, 2);

        // Add moderation column
        add_filter('manage_edit-comments_columns', array($this, 'add_moderation_column'));
        add_action('manage_comments_custom_column', array($this, 'render_moderation_column'), 10, 2);

        // Bulk actions
        add_filter('comment_row_actions', array($this, 'add_moderation_actions'), 10, 2);
    }

    public function moderate_comment($comment_id, $comment) {
        if (get_option('aimsdk_auto_moderate_comments', 'no') !== 'yes') {
            return;
        }

        // Skip if already moderated
        if (get_comment_meta($comment_id, 'aimsdk_moderated', true)) {
            return;
        }

        $context = array(
            'comment' => $comment->comment_content,
            'author' => $comment->comment_author,
        );

        // This would be async in production - for now we do sync
        $ability = new AIMSDK_Comment_Moderation_Ability();
        $prompt = $ability->build_prompt($context);

        // Get provider and call
        $providers = AIMSDK()->providers ?? array();
        $provider = $providers[get_option('aimsdk_preferred_provider', 'openai')] ?? null;

        if (!$provider) {
            return;
        }

        $result = $provider->complete($prompt);

        if (is_wp_error($result)) {
            return;
        }

        $analysis = $ability->parse_response($result);

        // Store moderation results
        update_comment_meta($comment_id, 'aimsdk_moderation', $analysis);
        update_comment_meta($comment_id, 'aimsdk_moderated', true);
        update_comment_meta($comment_id, 'aimsdk_toxicity_score', $analysis['toxicity_score'] ?? 0);

        // Auto-action based on settings
        if (isset($analysis['action'])) {
            switch ($analysis['action']) {
                case 'hold':
                    wp_set_comment_status($comment_id, 'hold');
                    break;
                case 'spam':
                    wp_spam_comment($comment_id);
                    break;
                case 'delete':
                    wp_delete_comment($comment_id);
                    break;
            }
        }
    }

    public function add_moderation_column($columns) {
        $columns['aimsdk_moderation'] = __('AI Mod', 'ai-master-sdk');
        return $columns;
    }

    public function render_moderation_column($column, $comment_id) {
        if ($column !== 'aimsdk_moderation') {
            return;
        }

        $score = get_comment_meta($comment_id, 'aimsdk_toxicity_score', true);
        $analysis = get_comment_meta($comment_id, 'aimsdk_moderation', true);

        if ($score !== '') {
            $color = $score > 0.7 ? 'red' : ($score > 0.3 ? 'yellow' : 'green');
            echo '<span style="color:' . esc_attr($color) . '" title="Toxicity: ' . esc_attr($score) . '">';
            echo $score > 0.7 ? '🚫' : ($score > 0.3 ? '⚠️' : '✅');
            echo '</span>';
        } else {
            echo '<span style="color:#999">—</span>';
        }
    }

    public function add_moderation_actions($actions, $comment) {
        $actions['aimsdk_analyze'] = '<a href="#" class="aimsdk-analyze-comment" data-comment-id="' . esc_attr($comment->comment_ID) . '">' .
            __('AI Analyze', 'ai-master-sdk') . '</a>';
        return $actions;
    }
}

/**
 * Meta Description Generation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Meta_Description_Ability extends AIMSDK_Meta_Ability {

    protected $id = 'meta-description-generation';
    protected $name = 'Generate Meta Description';
    protected $description = 'Generates meta description suggestions and integrates with various SEO plugins.';
    protected $capabilities = array('seo-optimization', 'integration-rankmath', 'integration-yoast', 'character-limit');
    protected $max_tokens = 512;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $title = $context['title'] ?? '';
        $target_keywords = $context['keywords'] ?? '';
        $max_length = $context['max_length'] ?? 160;

        $plain_content = wp_strip_all_tags($content);

        $prompt = "You are an SEO expert. Generate a compelling meta description for search engines.\n\n";
        $prompt .= "Requirements:\n";
        $prompt .= "- Maximum {$max_length} characters\n";
        $prompt .= "- Include primary keyword: {$target_keywords}\n";
        $prompt .= "- Use active voice and compelling copy\n";
        $prompt .= "- Include a subtle call-to-action\n";
        $prompt .= "- Must be different from the title\n\n";
        $prompt .= "Title: {$title}\n\n";
        $prompt .= "Content summary:\n" . wp_trim_words($plain_content, 100) . "\n\n";
        $prompt .= "Return ONLY the meta description, no quotes or explanations.";

        return $prompt;
    }

    public function register_hooks() {
        // Hook into Rank Math if available
        add_filter('rank_math/snippet/rich_snippet_article', array($this, 'add_rankmath_snippet'), 10, 2);

        // Hook into Yoast if available
        add_filter('wpseo_metabox_show', array($this, 'maybe_hide_yoast'));
    }

    public function add_rankmath_snippet($data, $video = null) {
        // Let Rank Math handle it - we just provide suggestions
        return $data;
    }

    public function maybe_hide_yoast($show) {
        // Allow both to work - just provide suggestions
        return $show;
    }
}

/**
 * Image Generation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Image_Generation_Ability extends AIMSDK_Image_Ability {

    protected $id = 'image-generation';
    protected $name = 'Generate Images';
    protected $description = 'Create and edit images from post content in the editor, also via the Media Library.';
    protected $capabilities = array('text-to-image', 'image-editing', 'style-variations', 'media-library');
    protected $supported_providers = array('openai');

    public function build_prompt($context) {
        // Image generation uses different prompt structure
        return $context['image_prompt'] ?? '';
    }

    public function register_hooks() {
        // Add to media library
        add_filter('media_row_actions', array($this, 'add_image_actions'), 10, 2);

        // Add to post editor
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_image_assets'));
    }

    public function generate_image($prompt, $options = array()) {
        $provider = AIMSDK()->providers['openai'] ?? null;

        if (!$provider) {
            return new WP_Error('no_provider', 'OpenAI provider required for image generation');
        }

        return $provider->generate_image($prompt, $options);
    }

    public function add_image_actions($actions, $post) {
        $actions['aimsdk_edit_image'] = '<a href="#" class="aimsdk-edit-image" data-attachment-id="' . esc_attr($post->ID) . '">' .
            __('AI Edit', 'ai-master-sdk') . '</a>';
        return $actions;
    }

    public function enqueue_image_assets() {
        wp_enqueue_script(
            'aimsdk-image-generator',
            AIMSDK_PLUGIN_URL . 'admin/js/image-generator.js',
            array('wp-edit-post', 'wp-element'),
            AIMSDK_VERSION,
            true
        );
    }
}