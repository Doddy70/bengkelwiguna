<?php
/**
 * Editorial Notes Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Editorial_Notes_Ability extends AIMSDK_Content_Ability {

    protected $id = 'editorial-notes';
    protected $name = 'Editorial Notes';
    protected $description = 'Reviews post content block-by-block and adds notes with suggestions for Accessibility, Readability, Grammar, and SEO.';
    protected $capabilities = array('block-review', 'accessibility', 'readability', 'grammar', 'seo');
    protected $max_tokens = 2048;
    protected $temperature = 0.3;

    public function build_prompt($context) {
        $blocks = $context['blocks'] ?? array();
        $focus_areas = $context['focus_areas'] ?? array('accessibility', 'readability', 'grammar', 'seo');

        $blocks_text = '';
        foreach ($blocks as $i => $block) {
            $blocks_text .= "Block " . ($i + 1) . " ({$block['type']}):\n{$block['content']}\n\n";
        }

        $focus_text = implode(', ', $focus_areas);

        $prompt = "You are an expert content editor. Review the following content blocks and provide editorial notes.\n\n";
        $prompt .= "Focus areas: {$focus_text}\n\n";
        $prompt .= "Content blocks:\n{$blocks_text}\n\n";
        $prompt .= "Return a JSON array of editorial notes:\n";
        $prompt .= '[{"block": 1, "type": "accessibility", "severity": "warning", "issue": "Issue description", "suggestion": "How to fix it"}, ...]'."\n\n";
        $prompt .= "Severity levels: info, warning, error\n";
        $prompt .= "Types: accessibility, readability, grammar, seo, style\n";
        $prompt .= "Return only valid JSON, no explanations.";

        return $prompt;
    }

    public function parse_response($response) {
        $decoded = json_decode($response, true);
        if (is_array($decoded)) {
            return $decoded;
        }

        // Fallback parsing
        return array();
    }

    public function render_meta_box($post) {
        $content = $post->post_content;
        $blocks = $this->parse_blocks($content);
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-editorial-notes">
            <p><?php _e('Review your content for accessibility, readability, grammar, and SEO improvements.', 'ai-master-sdk'); ?></p>
            <p><em><?php printf(__('Found %d content blocks', 'ai-master-sdk'), count($blocks)); ?></em></p>
            <div class="aimsdk-focus-areas">
                <strong><?php _e('Focus areas:', 'ai-master-sdk'); ?></strong><br>
                <label><input type="checkbox" checked data-focus="accessibility"> <?php _e('Accessibility', 'ai-master-sdk'); ?></label>
                <label><input type="checkbox" checked data-focus="readability"> <?php _e('Readability', 'ai-master-sdk'); ?></label>
                <label><input type="checkbox" checked data-focus="grammar"> <?php _e('Grammar', 'ai-master-sdk'); ?></label>
                <label><input type="checkbox" checked data-focus="seo"> <?php _e('SEO', 'ai-master-sdk'); ?></label>
            </div>
            <button type="button" class="button button-primary aimsdk-run-ability" data-ability="editorial-notes"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('🔍 Review Content', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-editorial-notes-results" id="aimsdk-result-editorial-notes"></div>
        </div>
        <?php
    }

    private function parse_blocks($content) {
        $blocks = array();

        // Try to parse as blocks (Gutenberg)
        if (function_exists('parse_blocks')) {
            $parsed = parse_blocks($content);
            foreach ($parsed as $block) {
                if (!empty($block['blockName']) && !empty($block['innerHTML'])) {
                    $blocks[] = array(
                        'type' => $block['blockName'],
                        'content' => wp_strip_all_tags($block['innerHTML']),
                    );
                }
            }
        }

        // Fallback: split by paragraphs
        if (empty($blocks)) {
            $paragraphs = preg_split('/<\/p>|<br\s*\/?>/i', $content);
            foreach ($paragraphs as $p) {
                $p = trim(wp_strip_all_tags($p));
                if (!empty($p)) {
                    $blocks[] = array('type' => 'paragraph', 'content' => $p);
                }
            }
        }

        return array_slice($blocks, 0, 20); // Limit to 20 blocks
    }
}

/**
 * Editorial Updates Ability
 *
 * @since 1.0.0
 */
class AIMSDK_Editorial_Updates_Ability extends AIMSDK_Content_Ability {

    protected $id = 'editorial-updates';
    protected $name = 'Apply Editorial Updates';
    protected $description = 'Automatically apply editorial notes and improvements to content with one click.';
    protected $capabilities = array('auto-apply', 'bulk-edit', 'preview');
    protected $max_tokens = 4096;

    public function build_prompt($context) {
        $content = $context['content'] ?? '';
        $notes = $context['notes'] ?? array();
        $apply_all = $context['apply_all'] ?? true;

        $notes_text = '';
        foreach ($notes as $note) {
            $notes_text .= "- [Block {$note['block']}] {$note['type']}: {$note['suggestion']}\n";
        }

        $plain_content = wp_strip_all_tags($content);

        $prompt = "You are an expert content editor. Apply the following editorial improvements to the content.\n\n";
        $prompt .= "Editorial notes to apply:\n{$notes_text}\n\n";
        $prompt .= "Original content:\n{$plain_content}\n\n";
        $prompt .= "Apply each improvement and return the updated content. ";
        $prompt .= "Return ONLY the improved content in plain text format, no explanations or markdown.";

        return $prompt;
    }

    public function render_meta_box($post) {
        ?>
        <div class="aimsdk-ability-meta-box aimsdk-editorial-updates">
            <p><?php _e('Apply AI-suggested improvements to your content automatically.', 'ai-master-sdk'); ?></p>
            <div class="aimsdk-warning" style="background:#fff8e5;padding:10px;border-radius:6px;margin-bottom:10px;">
                <strong>⚠️ <?php _e('Note:', 'ai-master-sdk'); ?></strong>
                <?php _e('Run Editorial Notes first to get improvement suggestions.', 'ai-master-sdk'); ?>
            </div>
            <button type="button" class="button button-primary aimsdk-apply-updates"
                data-post-id="<?php echo esc_attr($post->ID); ?>">
                <?php _e('✨ Apply All Updates', 'ai-master-sdk'); ?>
            </button>
            <div class="aimsdk-apply-results" id="aimsdk-apply-results"></div>
        </div>
        <?php
    }
}