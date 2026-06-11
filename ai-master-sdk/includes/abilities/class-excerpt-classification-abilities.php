<?php
/**
 * Excerpt Generation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Excerpt_Generation_Ability extends AIMSDK_Content_Ability {

    protected $id = 'excerpt-generation';
    protected $name = 'Generate Excerpt';
    protected $description = 'Automatically create concise, engaging summaries for posts with proper SEO optimization.';
    protected $capabilities = array('seo-optimization', 'concise', 'engaging');
    protected $max_tokens = 512;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $title = $context['title'] ?? '';
        $max_length = $context['max_length'] ?? 160;
        $style = $context['style'] ?? 'informative';

        $plain_content = wp_strip_all_tags($content);

        $prompt = "You are an expert content summarizer and SEO copywriter.\n\n";
        $prompt .= "Create a compelling excerpt (meta description) for the following content.\n\n";
        $prompt .= "Requirements:\n";
        $prompt .= "- Maximum {$max_length} characters\n";
        $prompt .= "- Style: {$style}\n";
        $prompt .= "- Include a call-to-action or compelling hook\n";
        $prompt .= "- Use active voice\n";
        $prompt .= "- Include primary keyword early\n";
        $prompt .= "- No quotes, just the excerpt text\n\n";
        $prompt .= "Title: {$title}\n\n";
        $prompt .= "Content:\n" . wp_trim_words($plain_content, 150) . "\n\n";
        $prompt .= "Return ONLY the excerpt text, no explanations.";

        return $prompt;
    }

    public function render_meta_box($post) {
        $current_excerpt = $post->post_excerpt;
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-excerpt-ability">
            <p><?php _e('Generate SEO-optimized excerpts for search engines and social sharing.', 'ai-master-sdk'); ?></p>
            <?php if (!empty($current_excerpt)) : ?>
                <div class="aimsdk-current-excerpt">
                    <strong><?php _e('Current Excerpt:', 'ai-master-sdk'); ?></strong>
                    <p><?php echo esc_html(wp_trim_words($current_excerpt, 20)); ?></p>
                </div>
            <?php endif; ?>
            <div class="aimsdk-ability-controls">
                <label>
                    <?php _e('Style:', 'ai-master-sdk'); ?>
                    <select id="aimsdk-excerpt-style">
                        <option value="informative"><?php _e('Informative', 'ai-master-sdk'); ?></option>
                        <option value="provocative"><?php _e('Provocative', 'ai-master-sdk'); ?></option>
                        <option value="descriptive"><?php _e('Descriptive', 'ai-master-sdk'); ?></option>
                    </select>
                </label>
            </div>
            <button type="button" class="button button-primary aimsdk-run-ability" data-ability="excerpt-generation"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('📝 Generate Excerpt', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-ability-result" id="aimsdk-result-excerpt-generation"></div>
        </div>
        <?php
    }
}

/**
 * Content Classification Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Content_Classification_Ability extends AIMSDK_Content_Ability {

    protected $id = 'content-classification';
    protected $name = 'Classify Content';
    protected $description = 'Suggests relevant tags and categories to organize content effectively.';
    protected $capabilities = array('auto-tagging', 'category-suggestion', 'taxonomy-optimization');
    protected $max_tokens = 1024;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $title = $context['title'] ?? '';
        $existing_tags = $context['existing_tags'] ?? array();
        $existing_cats = $context['existing_cats'] ?? array();

        $plain_content = wp_strip_all_tags($content);

        $prompt = "You are a content taxonomy expert. Analyze the following content and suggest appropriate tags and categories.\n\n";
        $prompt .= "Title: {$title}\n";
        $prompt .= "Existing tags: " . implode(', ', $existing_tags) . "\n";
        $prompt .= "Existing categories: " . implode(', ', $existing_cats) . "\n\n";
        $prompt .= "Content:\n" . wp_trim_words($plain_content, 200) . "\n\n";
        $prompt .= "Return a JSON object with:\n";
        $prompt .= '{"tags": ["tag1", "tag2", "tag3"], "categories": ["category1", "category2"], "confidence": 0.95}'."\n";
        $prompt .= "- Suggest 5-10 relevant tags (lowercase, hyphenated)\n";
        $prompt .= "- Suggest 1-3 categories if new ones are needed\n";
        $prompt .= "- Include confidence score (0-1)";

        return $prompt;
    }

    public function parse_response($response) {
        $decoded = json_decode($response, true);
        if (is_array($decoded)) {
            return $decoded;
        }
        return array('tags' => array(), 'categories' => array());
    }

    public function render_meta_box($post) {
        $tags = get_the_tags($post->ID);
        $cats = get_the_category($post->ID);
        $tag_names = $tags ? array_map(function($t) { return $t->name; }, $tags) : array();
        $cat_names = $cats ? array_map(function($c) { return $c->name; }, $cats) : array();
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-classification-ability">
            <p><?php _e('Get AI-powered tag and category suggestions for better content organization.', 'ai-master-sdk'); ?></p>
            <div class="aimsdk-existing-taxonomy">
                <strong><?php _e('Current:', 'ai-master-sdk'); ?></strong>
                <?php if (!empty($tag_names)) : ?>
                    <div><?php _e('Tags:', 'ai-master-sdk'); ?> <?php echo esc_html(implode(', ', $tag_names)); ?></div>
                <?php endif; ?>
                <?php if (!empty($cat_names)) : ?>
                    <div><?php _e('Categories:', 'ai-master-sdk'); ?> <?php echo esc_html(implode(', ', $cat_names)); ?></div>
                <?php endif; ?>
                <?php if (empty($tag_names) && empty($cat_names)) : ?>
                    <em><?php _e('No tags or categories assigned', 'ai-master-sdk'); ?></em>
                <?php endif; ?>
            </div>
            <button type="button" class="button button-primary aimsdk-run-ability" data-ability="content-classification"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('🏷️ Get Suggestions', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-ability-result" id="aimsdk-result-content-classification"></div>
        </div>
        <?php
    }
}

/**
 * Content Summarization Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Content_Summarization_Ability extends AIMSDK_Content_Ability {

    protected $id = 'content-summarization';
    protected $name = 'Summarize Content';
    protected $description = 'Summarizes long-form content into digestible overviews with key points.';
    protected $capabilities = array('bullets', 'key-points', 'digestible');
    protected $max_tokens = 1024;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $title = $context['title'] ?? '';
        $format = $context['format'] ?? 'bullets';
        $length = $context['length'] ?? 'medium';

        $plain_content = wp_strip_all_tags($content);

        $length_config = array(
            'short' => '3-4 sentences or 3 bullet points',
            'medium' => '1 paragraph + 5-7 bullet points',
            'long' => '2 paragraphs + 10 bullet points',
        );

        $prompt = "You are an expert content summarizer. Create a comprehensive summary of the following content.\n\n";
        $prompt .= "Title: {$title}\n";
        $prompt .= "Format: {$format}\n";
        $prompt .= "Length: {$length_config[$length] ?? $length_config['medium']}\n\n";
        $prompt .= "Content:\n" . $plain_content . "\n\n";
        $prompt .= "Make the summary:\n";
        $prompt .= "- Capture main ideas and key points\n";
        $prompt .= "- Use clear, accessible language\n";
        $prompt .= "- Start with the most important point\n";
        $prompt .= "- Include any statistics or key data\n\n";
        $prompt .= "Return the summary in {$format} format.";

        return $prompt;
    }

    public function render_meta_box($post) {
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-summarization-ability">
            <p><?php _e('Create digestible summaries of your content with key points.', 'ai-master-sdk'); ?></p>
            <div class="aimsdk-ability-controls">
                <label>
                    <?php _e('Length:', 'ai-master-sdk'); ?>
                    <select id="aimsdk-summary-length">
                        <option value="short"><?php _e('Short', 'ai-master-sdk'); ?></option>
                        <option value="medium" selected><?php _e('Medium', 'ai-master-sdk'); ?></option>
                        <option value="long"><?php _e('Long', 'ai-master-sdk'); ?></option>
                    </select>
                </label>
                <label>
                    <?php _e('Format:', 'ai-master-sdk'); ?>
                    <select id="aimsdk-summary-format">
                        <option value="bullets" selected><?php _e('Bullets', 'ai-master-sdk'); ?></option>
                        <option value="paragraph"><?php _e('Paragraph', 'ai-master-sdk'); ?></option>
                        <option value="both"><?php _e('Both', 'ai-master-sdk'); ?></option>
                    </select>
                </label>
            </div>
            <button type="button" class="button button-primary aimsdk-run-ability" data-ability="content-summarization"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('📋 Summarize', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-ability-result" id="aimsdk-result-content-summarization"></div>
        </div>
        <?php
    }
}

/**
 * Content Resizing Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Content_Resizing_Ability extends AIMSDK_Content_Ability {

    protected $id = 'content-resizing';
    protected $name = 'Resize Content';
    protected $description = 'Shorten, expand, or rephrase selected block content with AI assistance.';
    protected $capabilities = array('expand', 'shorten', 'rephrase', 'tone-adjust');
    protected $max_tokens = 2048;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $action = $context['action'] ?? 'improve';
        $target_length = $context['target_length'] ?? '';

        $actions = array(
            'shorten' => 'Condense this content into a shorter version while keeping all key points.',
            'expand' => 'Expand this content with more details, examples, and depth.',
            'rephrase' => 'Rephrase this content to improve clarity and engagement.',
            'improve' => 'Improve this content for better readability and grammar.',
            'simplify' => 'Simplify this content for a general audience.',
            'formal' => 'Convert this content to a more formal tone.',
            'casual' => 'Convert this content to a more casual, conversational tone.',
        );

        $instruction = $actions[$action] ?? $actions['improve'];

        $prompt = "You are an expert content editor. {$instruction}\n\n";
        if (!empty($target_length)) {
            $prompt .= "Target length: {$target_length}\n";
        }
        $prompt .= "Original content:\n{$content}\n\n";
        $prompt .= "Return the modified content only, no explanations.";

        return $prompt;
    }

    public function register_hooks() {
        // Add to block editor
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_assets'));
    }

    public function enqueue_block_assets() {
        wp_enqueue_script(
            'aimsdk-content-resizer',
            AIMSDK_PLUGIN_URL . 'admin/js/content-resizer.js',
            array('wp-edit-post', 'wp-element', 'wp-components', 'wp-data'),
            AIMSDK_VERSION,
            true
        );
    }
}