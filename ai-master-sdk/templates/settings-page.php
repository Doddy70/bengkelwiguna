<?php
/**
 * AI Master SDK - Settings Page Template
 *
 * @since 1.0.0
 */
if (!defined('ABSPATH')) {
    exit;
}

$aimsdk = AIMSDK();
$providers = $aimsdk->get_active_providers();
$logs_count = count(get_option('aimsdk_request_logs', array()));
?>

<div class="wrap aimsdk-settings-wrap">
    <h1>
        <span class="dashicons dashicons-art" style="font-size:30px;width:30px;height:30px;margin-right:10px;"></span>
        <?php _e('AI Master SDK', 'ai-master-sdk'); ?>
    </h1>

    <!-- Settings Tabs -->
    <nav class="aimsdk-tabs">
        <button class="aimsdk-tab active" data-tab="providers"><?php _e('🔌 Providers', 'ai-master-sdk'); ?></button>
        <button class="aimsdk-tab" data-tab="experiments"><?php _e('🧪 Experiments', 'ai-master-sdk'); ?></button>
        <button class="aimsdk-tab" data-tab="guidelines"><?php _e('📋 Guidelines', 'ai-master-sdk'); ?></button>
        <button class="aimsdk-tab" data-tab="logging"><?php _e('📝 Logging', 'ai-master-sdk'); ?></button>
        <button class="aimsdk-tab" data-tab="about"><?php _e('ℹ️ About', 'ai-master-sdk'); ?></button>
    </nav>

    <form method="post" action="" id="aimsdk-settings-form">
        <?php wp_nonce_field('aimsdk_settings_save', 'aimsdk_nonce'); ?>

        <!-- Providers Tab -->
        <div class="aimsdk-tab-content active" id="tab-providers">
            <div class="aimsdk-card">
                <h2><?php _e('AI Providers Configuration', 'ai-master-sdk'); ?></h2>
                <p><?php _e('Configure your AI provider API keys. You can add multiple providers and set a preferred one.', 'ai-master-sdk'); ?></p>

                <table class="form-table">
                    <tr>
                        <td colspan="2"><h3><?php _e('OpenAI', 'ai-master-sdk'); ?></h3></td>
                    </tr>
                    <tr>
                        <th><?php _e('API Key', 'ai-master-sdk'); ?></th>
                        <td>
                            <input type="password" name="aimsdk_openai_api_key" id="aimsdk_openai_api_key"
                                value="<?php echo esc_attr(get_option('aimsdk_openai_api_key', '')); ?>"
                                class="regular-text" placeholder="sk-..." autocomplete="off">
                            <button type="button" class="button aimsdk-test-btn" data-provider="openai">
                                <?php _e('Test Connection', 'ai-master-sdk'); ?>
                            </button>
                            <span class="aimsdk-test-result" id="result-openai"></span>
                            <p class="description">
                                <?php _e('Get your key from', 'ai-master-sdk'); ?>
                                <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php _e('Model', 'ai-master-sdk'); ?></th>
                        <td>
                            <select name="aimsdk_openai_model" id="aimsdk_openai_model">
                                <option value="gpt-4o" <?php selected(get_option('aimsdk_openai_model'), 'gpt-4o'); ?>>GPT-4o (Most capable)</option>
                                <option value="gpt-4o-mini" <?php selected(get_option('aimsdk_openai_model'), 'gpt-4o-mini'); ?>>GPT-4o Mini (Recommended)</option>
                                <option value="gpt-4-turbo" <?php selected(get_option('aimsdk_openai_model'), 'gpt-4-turbo'); ?>>GPT-4 Turbo</option>
                                <option value="gpt-3.5-turbo" <?php selected(get_option('aimsdk_openai_model'), 'gpt-3.5-turbo'); ?>>GPT-3.5 Turbo</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2"><h3><?php _e('Google Gemini', 'ai-master-sdk'); ?></h3></td>
                    </tr>
                    <tr>
                        <th><?php _e('API Key', 'ai-master-sdk'); ?></th>
                        <td>
                            <input type="password" name="aimsdk_gemini_api_key" id="aimsdk_gemini_api_key"
                                value="<?php echo esc_attr(get_option('aimsdk_gemini_api_key', '')); ?>"
                                class="regular-text" placeholder="AIza..." autocomplete="off">
                            <button type="button" class="button aimsdk-test-btn" data-provider="gemini">
                                <?php _e('Test Connection', 'ai-master-sdk'); ?>
                            </button>
                            <span class="aimsdk-test-result" id="result-gemini"></span>
                            <p class="description">
                                <?php _e('Get your key from', 'ai-master-sdk'); ?>
                                <a href="https://aistudio.google.com/app/apikey" target="_blank">Google AI Studio</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php _e('Model', 'ai-master-sdk'); ?></th>
                        <td>
                            <select name="aimsdk_gemini_model" id="aimsdk_gemini_model">
                                <option value="gemini-2.0-flash" <?php selected(get_option('aimsdk_gemini_model'), 'gemini-2.0-flash'); ?>>Gemini 2.0 Flash (Recommended)</option>
                                <option value="gemini-1.5-flash" <?php selected(get_option('aimsdk_gemini_model'), 'gemini-1.5-flash'); ?>>Gemini 1.5 Flash</option>
                                <option value="gemini-1.5-pro" <?php selected(get_option('aimsdk_gemini_model'), 'gemini-1.5-pro'); ?>>Gemini 1.5 Pro</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td colspan="2"><h3><?php _e('Anthropic Claude', 'ai-master-sdk'); ?></h3></td>
                    </tr>
                    <tr>
                        <th><?php _e('API Key', 'ai-master-sdk'); ?></th>
                        <td>
                            <input type="password" name="aimsdk_anthropic_api_key" id="aimsdk_anthropic_api_key"
                                value="<?php echo esc_attr(get_option('aimsdk_anthropic_api_key', '')); ?>"
                                class="regular-text" placeholder="sk-ant-..." autocomplete="off">
                            <button type="button" class="button aimsdk-test-btn" data-provider="anthropic">
                                <?php _e('Test Connection', 'ai-master-sdk'); ?>
                            </button>
                            <span class="aimsdk-test-result" id="result-anthropic"></span>
                            <p class="description">
                                <?php _e('Get your key from', 'ai-master-sdk'); ?>
                                <a href="https://console.anthropic.com/" target="_blank">Anthropic Console</a>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php _e('Model', 'ai-master-sdk'); ?></th>
                        <td>
                            <select name="aimsdk_anthropic_model" id="aimsdk_anthropic_model">
                                <option value="claude-3-5-sonnet-20241022" <?php selected(get_option('aimsdk_anthropic_model'), 'claude-3-5-sonnet-20241022'); ?>>Claude 3.5 Sonnet (Recommended)</option>
                                <option value="claude-3-opus-20240229" <?php selected(get_option('aimsdk_anthropic_model'), 'claude-3-opus-20240229'); ?>>Claude 3 Opus</option>
                                <option value="claude-3-sonnet-20240229" <?php selected(get_option('aimsdk_anthropic_model'), 'claude-3-sonnet-20240229'); ?>>Claude 3 Sonnet</option>
                                <option value="claude-3-haiku-20240307" <?php selected(get_option('aimsdk_anthropic_model'), 'claude-3-haiku-20240307'); ?>>Claude 3 Haiku</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <th><?php _e('Preferred Provider', 'ai-master-sdk'); ?></th>
                        <td>
                            <select name="aimsdk_preferred_provider" id="aimsdk_preferred_provider">
                                <option value="openai" <?php selected(get_option('aimsdk_preferred_provider'), 'openai'); ?>>OpenAI</option>
                                <option value="gemini" <?php selected(get_option('aimsdk_preferred_provider'), 'gemini'); ?>>Google Gemini</option>
                                <option value="anthropic" <?php selected(get_option('aimsdk_preferred_provider'), 'anthropic'); ?>>Anthropic Claude</option>
                            </select>
                            <p class="description"><?php _e('This provider will be used by default when multiple are available.', 'ai-master-sdk'); ?></p>
                        </td>
                    </tr>
                </table>

                <?php submit_button(__('Save Providers', 'ai-master-sdk')); ?>
            </div>
        </div>

        <!-- Experiments Tab -->
        <div class="aimsdk-tab-content" id="tab-experiments">
            <div class="aimsdk-card">
                <h2><?php _e('Experiment Framework', 'ai-master-sdk'); ?></h2>
                <p><?php _e('Enable or disable specific AI features. The experiment framework allows granular control over which abilities are active.', 'ai-master-sdk'); ?></p>

                <table class="form-table">
                    <tr>
                        <th><?php _e('Enable Experiments', 'ai-master-sdk'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="aimsdk_experiments_enabled" value="yes"
                                    <?php checked(get_option('aimsdk_experiments_enabled', 'yes'), 'yes'); ?>>
                                <?php _e('Enable AI experiments and features', 'ai-master-sdk'); ?>
                            </label>
                            <p class="description"><?php _e('When disabled, all AI features will be turned off.', 'ai-master-sdk'); ?></p>
                        </td>
                    </tr>
                </table>

                <hr>

                <h3><?php _e('Enabled Abilities', 'ai-master-sdk'); ?></h3>
                <p><?php _e('Check the abilities you want to enable:', 'ai-master-sdk'); ?></p>

                <div class="aimsdk-abilities-grid">
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('alt-text-generation', get_option('aimsdk_enabled_abilities', array()) ?: array('alt-text-generation'))); ?>
                        value="alt-text-generation"> 📝 <?php _e('Alt Text Generation', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('title-generation', get_option('aimsdk_enabled_abilities', array()) ?: array('title-generation'))); ?>
                        value="title-generation"> 🎯 <?php _e('Title Generation', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('excerpt-generation', get_option('aimsdk_enabled_abilities', array()) ?: array('excerpt-generation'))); ?>
                        value="excerpt-generation"> 📝 <?php _e('Excerpt Generation', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('content-classification', get_option('aimsdk_enabled_abilities', array()) ?: array('content-classification'))); ?>
                        value="content-classification"> 🏷️ <?php _e('Content Classification', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('content-summarization', get_option('aimsdk_enabled_abilities', array()) ?: array('content-summarization'))); ?>
                        value="content-summarization"> 📋 <?php _e('Content Summarization', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('content-resizing', get_option('aimsdk_enabled_abilities', array()) ?: array('content-resizing'))); ?>
                        value="content-resizing"> ✂️ <?php _e('Content Resizing', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('editorial-notes', get_option('aimsdk_enabled_abilities', array()) ?: array('editorial-notes'))); ?>
                        value="editorial-notes"> 🔍 <?php _e('Editorial Notes', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('editorial-updates', get_option('aimsdk_enabled_abilities', array()) ?: array('editorial-updates'))); ?>
                        value="editorial-updates"> ✨ <?php _e('Editorial Updates', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('comment-moderation', get_option('aimsdk_enabled_abilities', array()) ?: array('comment-moderation'))); ?>
                        value="comment-moderation"> 🛡️ <?php _e('Comment Moderation', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('meta-description-generation', get_option('aimsdk_enabled_abilities', array()) ?: array('meta-description-generation'))); ?>
                        value="meta-description-generation"> 🔍 <?php _e('Meta Description Generation', 'ai-master-sdk'); ?></label><br>
                    <label><input type="checkbox" name="abilities[]"
                        <?php checked(in_array('image-generation', get_option('aimsdk_enabled_abilities', array()) ?: array('image-generation'))); ?>
                        value="image-generation"> 🖼️ <?php _e('Image Generation', 'ai-master-sdk'); ?></label><br>
                </div>

                <?php submit_button(__('Save Experiments', 'ai-master-sdk')); ?>
            </div>
        </div>

        <!-- Guidelines Tab -->
        <div class="aimsdk-tab-content" id="tab-guidelines">
            <div class="aimsdk-card">
                <h2><?php _e('Guidelines', 'ai-master-sdk'); ?></h2>
                <p><?php _e('Set site-wide editorial standards that all AI abilities will respect. Use this to define your brand voice, style guide, and content rules.', 'ai-master-sdk'); ?></p>

                <table class="form-table">
                    <tr>
                        <th><?php _e('Editorial Guidelines', 'ai-master-sdk'); ?></th>
                        <td>
                            <textarea name="aimsdk_guidelines" rows="10" cols="70" class="large-text"
                                placeholder="<?php
                                esc_attr_e('Example guidelines:
- Tone: Professional but approachable
- Style: Use active voice
- Format: Short paragraphs, bullet points for lists
- SEO: Always include primary keyword in first 100 words
- Avoid: Jargon, overly technical terms without explanation');
                                ?>"><?php echo esc_textarea(get_option('aimsdk_guidelines', '')); ?></textarea>
                            <p class="description"><?php _e('These guidelines will be included in every AI request as a system prompt.', 'ai-master-sdk'); ?></p>
                        </td>
                    </tr>
                </table>

                <?php submit_button(__('Save Guidelines', 'ai-master-sdk')); ?>
            </div>
        </div>

        <!-- Logging Tab -->
        <div class="aimsdk-tab-content" id="tab-logging">
            <div class="aimsdk-card">
                <h2><?php _e('Request Logging', 'ai-master-sdk'); ?></h2>
                <p><?php _e('View and manage AI request logs for observability and debugging.', 'ai-master-sdk'); ?></p>

                <table class="form-table">
                    <tr>
                        <th><?php _e('Enable Logging', 'ai-master-sdk'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="aimsdk_logging_enabled" value="yes"
                                    <?php checked(get_option('aimsdk_logging_enabled', 'yes'), 'yes'); ?>>
                                <?php _e('Log AI requests', 'ai-master-sdk'); ?>
                            </label>
                            <p class="description"><?php _e('Logs are stored locally in WordPress options (max 1000 entries).', 'ai-master-sdk'); ?></p>
                        </td>
                    </tr>
                    <tr>
                        <th><?php _e('Require Connector Approval', 'ai-master-sdk'); ?></th>
                        <td>
                            <label>
                                <input type="checkbox" name="aimsdk_connector_approval" value="yes"
                                    <?php checked(get_option('aimsdk_connector_approval', 'no'), 'yes'); ?>>
                                <?php _e('Require administrator approval before plugins can use AI connectors', 'ai-master-sdk'); ?>
                            </label>
                            <p class="description"><?php _e('When enabled, third-party plugins must request admin approval to use AI features.', 'ai-master-sdk'); ?></p>
                        </td>
                    </tr>
                </table>

                <hr>

                <h3><?php _e('Recent Logs', 'ai-master-sdk'); ?></h3>
                <p><?php printf(__('Total requests logged: %d', 'ai-master-sdk'), number_format($logs_count)); ?></p>

                <a href="<?php echo admin_url('admin.php?page=aimsdk-logs'); ?>" class="button">
                    <?php _e('View All Logs →', 'ai-master-sdk'); ?>
                </a>

                <?php submit_button(__('Save Logging Settings', 'ai-master-sdk')); ?>
            </div>
        </div>

        <!-- About Tab -->
        <div class="aimsdk-tab-content" id="tab-about">
            <div class="aimsdk-card">
                <h2><?php _e('About AI Master SDK', 'ai-master-sdk'); ?></h2>
                <p><strong>Version:</strong> <?php echo AIMSDK_VERSION; ?></p>
                <p><?php _e('AI Master SDK is a comprehensive AI framework for WordPress that brings powerful AI capabilities to your content workflows.', 'ai-master-sdk'); ?></p>

                <h3><?php _e('Features', 'ai-master-sdk'); ?></h3>
                <ul>
                    <li>🤖 <?php _e('Multi-provider support (OpenAI, Gemini, Anthropic)', 'ai-master-sdk'); ?></li>
                    <li>📝 <?php _e('15+ built-in AI abilities for content creation', 'ai-master-sdk'); ?></li>
                    <li>🛡️ <?php _e('Comment moderation with toxicity detection', 'ai-master-sdk'); ?></li>
                    <li>🖼️ <?php _e('Image generation and editing', 'ai-master-sdk'); ?></li>
                    <li>📊 <?php _e('Request logging and debugging', 'ai-master-sdk'); ?></li>
                    <li>🧪 <?php _e('Experiment framework for granular feature control', 'ai-master-sdk'); ?></li>
                    <li>📋 <?php _e('Customizable guidelines for AI behavior', 'ai-master-sdk'); ?></li>
                    <li>🔌 <?php _e('Extensible architecture for custom abilities', 'ai-master-sdk'); ?></li>
                </ul>

                <h3><?php _e('Documentation', 'ai-master-sdk'); ?></h3>
                <p><?php _e('For more information and guides, visit:', 'ai-master-sdk'); ?></p>
                <ul>
                    <li><a href="https://github.com/bengkelwiguna/ai-master-sdk" target="_blank"><?php _e('GitHub Repository', 'ai-master-sdk'); ?></a></li>
                    <li><a href="https://www.bengkelwiguna.com/ai-docs" target="_blank"><?php _e('Documentation', 'ai-master-sdk'); ?></a></li>
                </ul>
            </div>
        </div>

    </form>

    <!-- Status Widget -->
    <div class="aimsdk-status-widget">
        <h3><?php _e('Quick Status', 'ai-master-sdk'); ?></h3>
        <table class="widefat">
            <tr><td><?php _e('Active Providers:', 'ai-master-sdk'); ?></td><td><?php echo count($providers); ?></td></tr>
            <tr><td><?php _e('Total Requests:', 'ai-master-sdk'); ?></td><td><?php echo number_format($logs_count); ?></td></tr>
            <tr><td><?php _e('Experiments:', 'ai-master-sdk'); ?></td><td><?php echo get_option('aimsdk_experiments_enabled', 'yes') === 'yes' ? '✅ Enabled' : '❌ Disabled'; ?></td></tr>
            <tr><td><?php _e('Logging:', 'ai-master-sdk'); ?></td><td><?php echo get_option('aimsdk_logging_enabled', 'yes') === 'yes' ? '✅ On' : '❌ Off'; ?></td></tr>
        </table>
    </div>
</div>

<script>
jQuery(document).ready(function($) {
    // Tab switching
    $('.aimsdk-tab').on('click', function() {
        var tab = $(this).data('tab');
        $('.aimsdk-tab').removeClass('active');
        $(this).addClass('active');
        $('.aimsdk-tab-content').removeClass('active');
        $('#tab-' + tab).addClass('active');
    });

    // Test connection buttons
    $('.aimsdk-test-btn').on('click', function() {
        var provider = $(this).data('provider');
        var $btn = $(this);
        var apiKey = $('#aimsdk_' + provider + '_api_key').val();

        if (!apiKey) {
            $('#result-' + provider).html('<span style="color:red;">Please enter API key first</span>');
            return;
        }

        $btn.prop('disabled', true).text('Testing...');
        $('#result-' + provider).html('<span class="spinner is-active" style="float:none;margin-left:10px;"></span>');
    });
});
</script>