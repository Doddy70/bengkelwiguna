<?php
/**
 * Alt Text Generation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Alt_Text_Ability extends AIMSDK_Image_Ability {

    protected $id = 'alt-text-generation';
    protected $name = 'Generate Alt Text';
    protected $description = 'Automatically generate descriptive and accessible alt text for images.';
    protected $capabilities = array('image-analysis', 'accessibility', 'seo-optimization');

    /**
     * Build prompt for alt text generation
     */
    public function build_prompt($context) {
        $image_url = $context['image_url'] ?? '';
        $image_description = $context['image_description'] ?? '';
        $post_title = $context['post_title'] ?? '';
        $max_length = $context['max_length'] ?? 125;

        $prompt = "You are an accessibility and SEO expert. Generate a concise, descriptive alt text for an image.\n\n";
        $prompt .= "Requirements:\n";
        $prompt .= "- Maximum {$max_length} characters\n";
        $prompt .= "- Describe the main subjects and actions\n";
        $prompt .= "- Include relevant context from the post: '{$post_title}'\n";
        $prompt .= "- Start with descriptive words, not 'Image of' or 'Photo of'\n";
        $prompt .= "- Include primary colors or visual style if notable\n";
        $prompt .= "- Make it useful for screen readers AND search engines\n\n";

        if (!empty($image_url)) {
            $prompt .= "Image URL: {$image_url}\n";
        }
        if (!empty($image_description)) {
            $prompt .= "Image description: {$image_description}\n";
        }

        $prompt .= "\nGenerate only the alt text, no explanations.";

        return $prompt;
    }

    /**
     * Register WordPress hooks
     */
    public function register_hooks() {
        // Add meta box to media library
        add_filter('attachment_fields_to_edit', array($this, 'add_alt_text_field'), 10, 2);
        add_filter('attachment_fields_to_save', array($this, 'save_alt_text'), 10, 2);

        // Add to media list
        add_filter('manage_media_columns', array($this, 'add_media_column'));
        add_action('manage_media_custom_column', array($this, 'render_media_column'), 10, 2);
    }

    /**
     * Add alt text field to media library
     */
    public function add_alt_text_field($form_fields, $post) {
        $form_fields['aimsdk_alt_text'] = array(
            'label' => 'AI Alt Text',
            'input' => 'html',
            'html' => '<button type="button" class="button aimsdk-generate-alt" data-attachment-id="' . esc_attr($post->ID) . '">' .
                __('Generate Alt Text', 'ai-master-sdk') . '</button>',
            'helps' => __('Use AI to generate accessible alt text for this image.', 'ai-master-sdk'),
        );
        return $form_fields;
    }

    /**
     * Save alt text
     */
    public function save_alt_text($post, $attachment) {
        if (isset($_POST['attachments'][$post['ID']]['aimsdk_alt_text'])) {
            $alt_text = sanitize_text_field($_POST['attachments'][$post['ID']]['aimsdk_alt_text']);
            wp_update_post(array(
                'ID' => $post['ID'],
                'post_excerpt' => $alt_text,
            ));
        }
        return $post;
    }

    /**
     * Add media column
     */
    public function add_media_column($columns) {
        $columns['aimsdk_alt'] = __('AI Alt', 'ai-master-sdk');
        return $columns;
    }

    /**
     * Render media column
     */
    public function render_media_column($column, $attachment_id) {
        if ($column === 'aimsdk_alt') {
            $alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true);
            if (empty($alt)) {
                echo '<button type="button" class="button button-small aimsdk-generate-alt" data-attachment-id="' . esc_attr($attachment_id) . '">' .
                    __('Generate', 'ai-master-sdk') . '</button>';
            } else {
                echo '<span class="aimsdk-alt-indicator" title="' . esc_attr(wp_trim_words($alt, 10)) . '">✅</span>';
            }
        }
    }
}