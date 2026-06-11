<?php
/**
 * AI Master SDK - Abilities Explorer Page
 *
 * @since 1.0.0
 */
if (!defined('ABSPATH')) {
    exit;
}

$aimsdk = AIMSDK();
$abilities = $aimsdk->get_abilities();
?>

<div class="wrap aimsdk-abilities-wrap">
    <h1>
        <span class="dashicons dashicons-art" style="font-size:30px;width:30px;height:30px;margin-right:10px;"></span>
        <?php _e('Abilities Explorer', 'ai-master-sdk'); ?>
    </h1>

    <p><?php _e('Browse and test all registered AI abilities. Click on any ability to see details and run a test.', 'ai-master-sdk'); ?></p>

    <!-- Filter by Category -->
    <div class="aimsdk-abilities-filters">
        <button class="button aimsdk-filter active" data-category="all"><?php _e('All', 'ai-master-sdk'); ?></button>
        <button class="button aimsdk-filter" data-category="content">📝 <?php _e('Content', 'ai-master-sdk'); ?></button>
        <button class="button aimsdk-filter" data-category="image">🖼️ <?php _e('Image', 'ai-master-sdk'); ?></button>
        <button class="button aimsdk-filter" data-category="moderation">🛡️ <?php _e('Moderation', 'ai-master-sdk'); ?></button>
        <button class="button aimsdk-filter" data-category="meta">🔍 <?php _e('Meta', 'ai-master-sdk'); ?></button>
    </div>

    <!-- Abilities Grid -->
    <div class="aimsdk-abilities-grid" id="aimsdk-abilities-list">
        <?php foreach ($abilities as $id => $ability) : ?>
            <?php
            $config = $ability->get_admin_config();
            $category_icons = array(
                'content' => '📝',
                'image' => '🖼️',
                'moderation' => '🛡️',
                'meta' => '🔍',
            );
            $icon = $category_icons[$config['category']] ?? '🤖';
            ?>
            <div class="aimsdk-ability-card" data-category="<?php echo esc_attr($config['category']); ?>">
                <div class="aimsdk-ability-header">
                    <span class="aimsdk-ability-icon"><?php echo $icon; ?></span>
                    <h3><?php echo esc_html($config['name']); ?></h3>
                </div>
                <p class="aimsdk-ability-desc"><?php echo esc_html($config['description']); ?></p>

                <div class="aimsdk-ability-meta">
                    <span class="aimsdk-ability-category"><?php echo ucfirst($config['category']); ?></span>
                    <span class="aimsdk-ability-providers">
                        <?php
                        $provider_icons = array(
                            'openai' => '🤖',
                            'gemini' => '💡',
                            'anthropic' => '🧠',
                        );
                        foreach ($config['supported_providers'] as $p) {
                            echo $provider_icons[$p] ?? $p;
                        }
                        ?>
                    </span>
                </div>

                <div class="aimsdk-ability-actions">
                    <button type="button" class="button aimsdk-test-ability"
                        data-ability-id="<?php echo esc_attr($id); ?>"
                        data-ability-name="<?php echo esc_attr($config['name']); ?>">
                        <?php _e('Test', 'ai-master-sdk'); ?>
                    </button>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <!-- Test Modal -->
    <div id="aimsdk-test-modal" class="aimsdk-modal" style="display:none;">
        <div class="aimsdk-modal-content">
            <div class="aimsdk-modal-header">
                <h2 id="aimsdk-modal-title"><?php _e('Test Ability', 'ai-master-sdk'); ?></h2>
                <button type="button" class="aimsdk-modal-close">&times;</button>
            </div>
            <div class="aimsdk-modal-body">
                <div class="aimsdk-form-group">
                    <label for="aimsdk-test-context"><?php _e('Test Input (JSON):', 'ai-master-sdk'); ?></label>
                    <textarea id="aimsdk-test-context" rows="8" class="large-text" placeholder='{"content": "Your test content here..."}'></textarea>
                </div>
                <div class="aimsdk-form-group">
                    <label for="aimsdk-test-provider"><?php _e('Provider:', 'ai-master-sdk'); ?></label>
                    <select id="aimsdk-test-provider">
                        <option value="auto"><?php _e('Auto (Preferred)', 'ai-master-sdk'); ?></option>
                        <option value="openai"><?php _e('OpenAI', 'ai-master-sdk'); ?></option>
                        <option value="gemini"><?php _e('Google Gemini', 'ai-master-sdk'); ?></option>
                        <option value="anthropic"><?php _e('Anthropic Claude', 'ai-master-sdk'); ?></option>
                    </select>
                </div>
            </div>
            <div class="aimsdk-modal-footer">
                <button type="button" class="button button-primary" id="aimsdk-run-test">
                    <?php _e('🚀 Run Test', 'ai-master-sdk'); ?>
                </button>
                <button type="button" class="button aimsdk-modal-close"><?php _e('Cancel', 'ai-master-sdk'); ?></button>
            </div>
            <div id="aimsdk-test-output" class="aimsdk-test-output" style="display:none;">
                <h4><?php _e('Output:', 'ai-master-sdk'); ?></h4>
                <pre id="aimsdk-test-result"></pre>
            </div>
        </div>
    </div>

    <script>
    jQuery(document).ready(function($) {
        var currentAbilityId = null;

        // Filter abilities
        $('.aimsdk-filter').on('click', function() {
            var cat = $(this).data('category');
            $('.aimsdk-filter').removeClass('active');
            $(this).addClass('active');

            if (cat === 'all') {
                $('.aimsdk-ability-card').show();
            } else {
                $('.aimsdk-ability-card').hide();
                $('.aimsdk-ability-card[data-category="' + cat + '"]').show();
            }
        });

        // Open test modal
        $('.aimsdk-test-ability').on('click', function() {
            currentAbilityId = $(this).data('ability-id');
            var abilityName = $(this).data('ability-name');

            $('#aimsdk-modal-title').text('<?php _e('Test:', 'ai-master-sdk'); ?> ' + abilityName);
            $('#aimsdk-test-context').val('{\n  "content": "Sample content for testing...",\n  "title": "Test Post"\n}');
            $('#aimsdk-test-output').hide();
            $('#aimsdk-test-modal').show();
        });

        // Close modal
        $('.aimsdk-modal-close').on('click', function() {
            $('#aimsdk-test-modal').hide();
        });

        // Run test
        $('#aimsdk-run-test').on('click', function() {
            var $btn = $(this);
            var $output = $('#aimsdk-test-output');
            var $result = $('#aimsdk-test-result');

            $btn.prop('disabled', true).text('Running...');
            $output.show();
            $result.text('<?php _e('Processing...', 'ai-master-sdk'); ?>');

            var context = $('#aimsdk-test-context').val();
            try {
                context = JSON.parse(context);
            } catch (e) {
                $result.text('<?php _e('Invalid JSON', 'ai-master-sdk'); ?>');
                $btn.prop('disabled', false).text('Run Test');
                return;
            }

            $.ajax({
                url: '<?php echo admin_url('admin-ajax.php'); ?>',
                type: 'POST',
                data: {
                    action: 'aimsdk_ability_request',
                    nonce: '<?php echo wp_create_nonce('aimsdk_nonce'); ?>',
                    ability_id: currentAbilityId,
                    context: JSON.stringify(context)
                },
                success: function(response) {
                    if (response.success) {
                        $result.text(response.data.result);
                    } else {
                        $result.html('<span style="color:red;">Error: ' + (response.data.message || 'Unknown error') + '</span>');
                    }
                },
                error: function() {
                    $result.html('<span style="color:red;"><?php _e('Request failed', 'ai-master-sdk'); ?></span>');
                },
                complete: function() {
                    $btn.prop('disabled', false).text('Run Test');
                }
            });
        });
    });
    </script>
</div>