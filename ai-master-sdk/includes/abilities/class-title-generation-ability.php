<?php
/**
 * Title Generation Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Title_Generation_Ability extends AIMSDK_Content_Ability {

    protected $id = 'title-generation';
    protected $name = 'Generate Title';
    protected $description = 'Generate engaging, SEO-optimized title suggestions for posts with a single click.';
    protected $capabilities = array('seo-optimization', 'multiple-suggestions', 'brainstorming');
    protected $max_tokens = 1024;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $post_type = $context['post_type'] ?? 'post';
        $count = $context['count'] ?? 5;
        $tone = $context['tone'] ?? 'professional';
        $keywords = $context['keywords'] ?? '';

        $plain_content = wp_strip_all_tags($content);

        $prompt = "You are an expert content strategist and SEO copywriter.\n\n";
        $prompt .= "Generate {$count} compelling, SEO-optimized title suggestions for a {$post_type}.\n\n";
        $prompt .= "Requirements:\n";
        $prompt .= "- Titles should be {$tone} in tone\n";
        if (!empty($keywords)) {
            $prompt .= "- Incorporate these keywords naturally: {$keywords}\n";
        }
        $prompt .= "- Keep titles between 50-60 characters for SEO\n";
        $prompt .= "- Use power words and emotional triggers\n";
        $prompt .= "- Mix different styles: question, how-to, list, emotional, numbered\n";
        $prompt .= "- Make each title unique and compelling\n\n";
        $prompt .= "Content:\n" . wp_trim_words($plain_content, 200) . "\n\n";
        $prompt .= "Return ONLY a JSON array of title strings:\n";
        $prompt .= '["Title 1", "Title 2", "Title 3", "Title 4", "Title 5"]';

        return $prompt;
    }

    public function parse_response($response) {
        // Try to extract JSON array from response
        $response = trim($response);

        // Try direct JSON parse first
        $decoded = json_decode($response, true);
        if (is_array($decoded)) {
            return $decoded;
        }

        // Try to extract array from text
        if (preg_match('/\[[.*\n]*\]/s', $response, $matches)) {
            $decoded = json_decode($matches[0], true);
            if (is_array($decoded)) {
                return $decoded;
            }
        }

        // Fallback: split by newlines and clean
        $lines = explode("\n", $response);
        $titles = array();
        foreach ($lines as $line) {
            $line = trim(preg_replace('/^[\d\.\-\*\)]+\s*/', '', $line));
            if (!empty($line) && strlen($line) > 10) {
                $titles[] = $line;
            }
            if (count($titles) >= 5) {
                break;
            }
        }

        return $titles;
    }

    public function render_meta_box($post) {
        $content = $post->post_content;
        $title = $post->post_title;
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-title-ability">
            <p><?php _e('Generate engaging, SEO-optimized titles for this post.', 'ai-master-sdk'); ?></p>
            <div class="aimsdk-ability-controls">
                <label>
                    <?php _e('Number of titles:', 'ai-master-sdk'); ?>
                    <select id="aimsdk-title-count">
                        <option value="3">3</option>
                        <option value="5" selected>5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label>
                    <?php _e('Tone:', 'ai-master-sdk'); ?>
                    <select id="aimsdk-title-tone">
                        <option value="professional"><?php _e('Professional', 'ai-master-sdk'); ?></option>
                        <option value="casual"><?php _e('Casual', 'ai-master-sdk'); ?></option>
                        <option value=" provocative"><?php _e('Provocative', 'ai-master-sdk'); ?></option>
                        <option value="informative"><?php _e('Informative', 'ai-master-sdk'); ?></option>
                    </select>
                </label>
            </div>
            <button type="button" class="button button-primary aimsdk-run-ability" data-ability="title-generation"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('🎯 Generate Titles', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-ability-result" id="aimsdk-result-title-generation"></div>
        </div>
        <?php
    }
}