<?php
/**
 * AI Master SDK - Guidelines Page
 *
 * @since 1.0.0
 */
if (!defined('ABSPATH')) {
    exit;
}

$guidelines = get_option('aimsdk_guidelines', '');
$examples = array(
    'brand_voice' => "Tone: Professional but approachable
Language: Indonesian (Bahasa Indonesia) with some English technical terms
Style: Use short sentences, active voice
Format: Short paragraphs (2-3 sentences), bullet points for lists
Brand: Bengkel Wiguna - automotive service excellence",

    'seo_rules' => "SEO Rules:
- Always include primary keyword in the first 100 words
- Use keyword in title, first paragraph, and at least one subheading
- Meta descriptions should be 150-160 characters
- Include internal links to related services
- Use descriptive alt text for all images",

    'accessibility' => "Accessibility Standards:
- All images must have descriptive alt text
- Use semantic HTML (headings in order)
- Link text should describe the destination
- Color contrast must meet WCAG AA standards
- Avoid auto-playing media",
);

$presets = array(
    'brand_voice' => 'Brand Voice',
    'seo_rules' => 'SEO Rules',
    'accessibility' => 'Accessibility',
);
?>

<div class="wrap aimsdk-guidelines-wrap">
    <h1>
        <span class="dashicons dashicons-book" style="font-size:30px;width:30px;height:30px;margin-right:10px;"></span>
        <?php _e('Guidelines', 'ai-master-sdk'); ?>
    </h1>

    <p><?php _e('Guidelines are rules that all AI abilities will respect. Define your brand voice, editorial standards, and content rules here.', 'ai-master-sdk'); ?></p>

    <!-- Quick Presets -->
    <div class="aimsdk-card">
        <h2><?php _e('Quick Presets', 'ai-master-sdk'); ?></h2>
        <p><?php _e('Click to load a preset template (you can customize after):', 'ai-master-sdk'); ?></p>
        <div class="aimsdk-preset-buttons">
            <?php foreach ($presets as $key => $label) : ?>
                <button type="button" class="button aimsdk-load-preset" data-preset="<?php echo esc_attr($key); ?>">
                    <?php echo '📋 ' . esc_html($label); ?>
                </button>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Guidelines Editor -->
    <form method="post" action="">
        <?php wp_nonce_field('aimsdk_save_guidelines', 'aimsdk_guidelines_nonce'); ?>

        <div class="aimsdk-card">
            <h2><?php _e('Editorial Guidelines', 'ai-master-sdk'); ?></h2>

            <table class="form-table">
                <tr>
                    <th>
                        <label for="aimsdk_guidelines"><?php _e('Guidelines Content', 'ai-master-sdk'); ?></label>
                    </th>
                    <td>
                        <textarea name="aimsdk_guidelines" id="aimsdk_guidelines" rows="15" cols="100" class="large-text code"><?php echo esc_textarea($guidelines); ?></textarea>
                        <p class="description">
                            <?php _e('Write guidelines using simple text. AI will read these as instructions before generating content.', 'ai-master-sdk'); ?>
                        </p>
                    </td>
                </tr>
            </table>

            <?php submit_button(__('Save Guidelines', 'ai-master-sdk')); ?>
        </div>
    </form>

    <?php
    // Handle save
    if (isset($_POST['aimsdk_save_guidelines']) && wp_verify_nonce($_POST['aimsdk_guidelines_nonce'], 'aimsdk_save_guidelines')) {
        $new_guidelines = sanitize_textarea_field($_POST['aimsdk_guidelines']);
        update_option('aimsdk_guidelines', $new_guidelines);
        echo '<div class="notice notice-success"><p>' . __('Guidelines saved.', 'ai-master-sdk') . '</p></div>';
    }
    ?>

    <!-- Guidelines Reference -->
    <div class="aimsdk-card">
        <h2><?php _e('Guidelines Reference', 'ai-master-sdk'); ?></h2>

        <table class="widefat">
            <thead>
                <tr>
                    <th><?php _e('Category', 'ai-master-sdk'); ?></th>
                    <th><?php _e('Example Keywords', 'ai-master-sdk'); ?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong><?php _e('Tone & Voice', 'ai-master-sdk'); ?></strong></td>
                    <td><code>formal, casual, professional, friendly, authoritative</code></td>
                </tr>
                <tr>
                    <td><strong><?php _e('Language', 'ai-master-sdk'); ?></strong></td>
                    <td><code>Indonesian, English, bilingual, technical terms allowed</code></td>
                </tr>
                <tr>
                    <td><strong><?php _e('Formatting', 'ai-master-sdk'); ?></strong></td>
                    <td><code>short paragraphs, bullet points, numbered lists, headings</code></td>
                </tr>
                <tr>
                    <td><strong><?php _e('SEO', 'ai-master-sdk'); ?></strong></td>
                    <td><code>keyword in first 100 words, meta description rules</code></td>
                </tr>
                <tr>
                    <td><strong><?php _e('Accessibility', 'ai-master-sdk'); ?></strong></td>
                    <td><code>alt text required, semantic HTML, contrast standards</code></td>
                </tr>
                <tr>
                    <td><strong><?php _e('Brand', 'ai-master-sdk'); ?></strong></td>
                    <td><code>company name, tagline, value propositions</code></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script>
jQuery(document).ready(function($) {
    // Load preset
    $('.aimsdk-load-preset').on('click', function() {
        var preset = $(this).data('preset');
        var presets = <?php echo wp_json_encode($examples); ?>;

        if (presets[preset]) {
            var current = $('#aimsdk_guidelines').val();
            if (current && !confirm('Replace current guidelines?')) {
                return;
            }
            $('#aimsdk_guidelines').val(presets[preset]);
        }
    });
});
</script>