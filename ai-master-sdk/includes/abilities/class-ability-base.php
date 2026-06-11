<?php
/**
 * Abstract base class for AI Abilities
 *
 * @since 1.0.0
 */
abstract class AIMSDK_Ability_Base {

    /**
     * Ability ID
     */
    protected $id;

    /**
     * Ability name
     */
    protected $name;

    /**
     * Ability description
     */
    protected $description;

    /**
     * Category (content, image, moderation, meta)
     */
    protected $category = 'content';

    /**
     * Supported providers
     */
    protected $supported_providers = array('openai', 'gemini', 'anthropic');

    /**
     * Capabilities
     */
    protected $capabilities = array();

    /**
     * Temperature for AI calls
     */
    protected $temperature = 0.7;

    /**
     * Max tokens for AI calls
     */
    protected $max_tokens = 2048;

    /**
     * Get ability ID
     */
    public function get_id() {
        return $this->id;
    }

    /**
     * Get ability name
     */
    public function get_name() {
        return $this->name;
    }

    /**
     * Get ability description
     */
    public function get_description() {
        return $this->description;
    }

    /**
     * Get category
     */
    public function get_category() {
        return $this->category;
    }

    /**
     * Get capabilities
     */
    public function get_capabilities() {
        return $this->capabilities;
    }

    /**
     * Get supported providers
     */
    public function get_supported_providers() {
        return $this->supported_providers;
    }

    /**
     * Get temperature
     */
    public function get_temperature() {
        return apply_filters('aimsdk_ability_temperature_' . $this->id, $this->temperature);
    }

    /**
     * Get max tokens
     */
    public function get_max_tokens() {
        return apply_filters('aimsdk_ability_max_tokens_' . $this->id, $this->max_tokens);
    }

    /**
     * Check if provider is supported
     */
    public function supports_provider($provider_id) {
        return in_array($provider_id, $this->supported_providers);
    }

    /**
     * Check if ability is enabled
     */
    public function is_enabled() {
        // Check experiments setting
        if (get_option('aimsdk_experiments_enabled', 'yes') !== 'yes') {
            return false;
        }

        // Check individual ability setting
        $enabled_abilities = get_option('aimsdk_enabled_abilities', array());
        if (!empty($enabled_abilities)) {
            return in_array($this->id, $enabled_abilities);
        }

        // By default, all abilities are enabled when experiments is on
        return true;
    }

    /**
     * Build prompt for AI
     */
    abstract public function build_prompt($context);

    /**
     * Parse AI response
     */
    public function parse_response($response) {
        return apply_filters('aimsdk_parse_response_' . $this->id, $response);
    }

    /**
     * Get meta box configuration
     */
    public function get_meta_box_config() {
        return array(
            'id' => 'aimsdk_' . $this->id,
            'title' => $this->name,
            'callback' => array($this, 'render_meta_box'),
            'screen' => array('post', 'page'),
            'context' => 'side',
            'priority' => 'high',
        );
    }

    /**
     * Render meta box (can be overridden)
     */
    public function render_meta_box($post) {
        echo '<div class="aimsdk-ability-meta-box">';
        echo '<p>' . esc_html($this->description) . '</p>';
        echo '<button type="button" class="button aimsdk-run-ability" data-ability="' . esc_attr($this->id) . '">';
        echo esc_html($this->name);
        echo '</button>';
        echo '<div class="aimsdk-ability-result" id="aimsdk-result-' . esc_attr($this->id) . '"></div>';
        echo '</div>';
    }

    /**
     * Register WordPress hooks
     */
    public function register_hooks() {
        // Override in child classes
    }

    /**
     * Get admin UI configuration
     */
    public function get_admin_config() {
        return array(
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'category' => $this->category,
            'supported_providers' => $this->supported_providers,
        );
    }
}

/**
 * Abstract class for Content Abilities
 */
abstract class AIMSDK_Content_Ability extends AIMSDK_Ability_Base {

    protected $category = 'content';
}

/**
 * Abstract class for Image Abilities
 */
abstract class AIMSDK_Image_Ability extends AIMSDK_Ability_Base {

    protected $category = 'image';

    protected $supported_providers = array('openai', 'gemini', 'anthropic');
}

/**
 * Abstract class for Moderation Abilities
 */
abstract class AIMSDK_Moderation_Ability extends AIMSDK_Ability_Base {

    protected $category = 'moderation';
}

/**
 * Abstract class for Meta Abilities
 */
abstract class AIMSDK_Meta_Ability extends AIMSDK_Ability_Base {

    protected $category = 'meta';
}