/**
 * WordPress Abilities API Integration
 * Based on wp-abilities-api skill patterns
 *
 * This module provides:
 * - WordPress Abilities registration helpers
 * - REST endpoint registration for abilities
 * - Client-side ability consumption helpers
 * - Permission and capability checking
 *
 * @see references/php-registration.md
 * @see references/rest-api.md
 */

export interface WPAbility {
  id: string
  label: string
  description: string
  category?: string
  meta?: {
    readonly?: boolean
    show_in_rest?: boolean
    [key: string]: unknown
  }
  execute_callback?: string
  input_schema?: Record<string, unknown>
}

export interface WPAbilityCategory {
  id: string
  label: string
  description?: string
  meta?: Record<string, unknown>
}

// ============================================
// ABILITIES REGISTRATION (PHP template)
// ============================================

/**
 * WordPress Plugin Template for Abilities Registration
 * This is the PHP code that would go in a WordPress plugin
 */
export const WP_ABILITIES_PLUGIN_TEMPLATE = `<?php
/**
 * Plugin Name: Bengkel Wiguna Abilities
 * Description: Registers custom abilities for the Bengkel Wiguna headless site
 * Version: 1.0.0
 * Requires at least: 6.9
 */

add_action('init', function() {
    // Register ability categories
    $categories = array(
        'services' => array(
            'id' => 'bengkel-services',
            'label' => 'Layanan Bengkel',
            'description' => 'Kemampuan terkait layanan bengkel'
        ),
        'content' => array(
            'id' => 'bengkel-content',
            'label' => 'Konten',
            'description' => 'Kemampuan terkait manajemen konten'
        )
    );

    foreach ($categories as $cat) {
        wp_register_ability_category(
            $cat['id'],
            $cat['label'],
            isset($cat['description']) ? $cat['description'] : ''
        );
    }

    // Register abilities
    $abilities = array(
        array(
            'id' => 'bengkel:read-services',
            'label' => 'Baca Layanan',
            'description' => 'Mendapatkan daftar dan detail layanan bengkel',
            'category' => 'bengkel-services',
            'meta' => array(
                'readonly' => true,
                'show_in_rest' => true
            )
        ),
        array(
            'id' => 'bengkel:manage-bookings',
            'label' => 'Kelola Booking',
            'description' => 'Membuat, memperbarui, dan melihat booking layanan',
            'category' => 'bengkel-services',
            'meta' => array(
                'show_in_rest' => true
            )
        ),
        array(
            'id' => 'bengkel:read-promotions',
            'label' => 'Baca Promo',
            'description' => 'Mendapatkan informasi promosi aktif',
            'category' => 'bengkel-content',
            'meta' => array(
                'readonly' => true,
                'show_in_rest' => true
            )
        ),
        array(
            'id' => 'bengkel:content-suggestions',
            'label' => 'Saran Konten AI',
            'description' => 'Mendapatkan saran topik artikel dari AI',
            'category' => 'bengkel-content',
            'meta' => array(
                'show_in_rest' => true
            ),
            'input_schema' => array(
                'type' => 'object',
                'properties' => array(
                    'topic' => array(
                        'type' => 'string',
                        'description' => 'Topik untuk saran konten'
                    ),
                    'count' => array(
                        'type' => 'integer',
                        'default' => 5
                    )
                )
            )
        )
    );

    foreach ($abilities as $ability) {
        wp_register_ability(
            $ability['id'],
            $ability['label'],
            $ability['description'],
            $ability['category'],
            $ability['meta'] ?? array()
        );
    }
});

// Register REST endpoints for abilities
add_action('rest_api_init', function() {
    register_rest_route('wp-abilities/v1', '/bengkel/services', array(
        'methods' => 'GET',
        'callback' => function($request) {
            // Permission check
            if (!current_user_can('read')) {
                return new WP_Error(
                    'rest_forbidden',
                    'You do not have permission to access this resource.',
                    array('status' => 403)
                );
            }

            // Get services from WordPress
            $args = array(
                'post_type' => 'services',
                'posts_per_page' => $request->get_param('per_page') ?? 10,
                'paged' => $request->get_param('page') ?? 1
            );

            $query = new WP_Query($args);
            $services = array();

            foreach ($query->posts as $post) {
                $services[] = array(
                    'id' => $post->ID,
                    'title' => get_the_title($post),
                    'slug' => $post->post_name,
                    'content' => apply_filters('the_content', $post->post_content),
                    'meta' => get_post_meta($post->ID)
                );
            }

            return rest_ensure_response(array(
                'data' => $services,
                'total' => $query->found_posts,
                'pages' => $query->max_num_pages
            ));
        },
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array(
                'type' => 'integer',
                'default' => 10,
                'maximum' => 100
            ),
            'page' => array(
                'type' => 'integer',
                'default' => 1
            )
        )
    ));

    register_rest_route('wp-abilities/v1', '/bengkel/content-suggestions', array(
        'methods' => 'POST',
        'callback' => function($request) {
            // Check for AI service capability
            if (!current_user_can('edit_posts')) {
                return new WP_Error(
                    'rest_forbidden',
                    'You do not have permission to access this resource.',
                    array('status' => 403)
                );
            }

            $topic = $request->get_param('topic');
            $count = $request->get_param('count') ?? 5;

            // This would integrate with Claude API for content suggestions
            // For now, return a template structure
            $suggestions = array();

            for ($i = 0; $i < $count; $i++) {
                $suggestions[] = array(
                    'title' => "Template untuk: {$topic}",
                    'meta_description' => "Artikel tentang {$topic} untuk Bengkel Wiguna",
                    'target_keyword' => $topic,
                    'category' => 'tips-perawatan'
                );
            }

            return rest_ensure_response(array(
                'data' => $suggestions
            ));
        },
        'permission_callback' => function() {
            return current_user_can('edit_posts');
        },
        'args' => array(
            'topic' => array(
                'required' => true,
                'type' => 'string',
                'sanitize_callback' => 'sanitize_text_field'
            ),
            'count' => array(
                'type' => 'integer',
                'default' => 5,
                'minimum' => 1,
                'maximum' => 20
            )
        )
    ));
});

// @see references/php-registration.md
// @see references/delegate-helper-pattern.md
`

// ============================================
// CLIENT-SIDE ABILITY CONSUMPTION
// ============================================

export interface AbilityCheckResult {
  hasAbility: boolean
  ability?: WPAbility
  error?: string
}

/**
 * Fetch available abilities from WordPress REST API
 */
export async function fetchAbilities(): Promise<WPAbility[]> {
  try {
    const response = await fetch('/wp-json/wp-abilities/v1/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch abilities: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching WordPress abilities:', error)
    return []
  }
}

/**
 * Check if user has a specific ability
 * Uses @wordpress/abilities pattern for client-side checks
 */
export async function checkAbility(
  abilityId: string,
  options: { apiBase?: string; auth?: string } = {}
): Promise<AbilityCheckResult> {
  const apiBase = options.apiBase || '/wp-json/wp-abilities/v1'

  try {
    const response = await fetch(`${apiBase}/check/${abilityId}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.auth ? { Authorization: `Bearer ${options.auth}` } : {}),
      },
    })

    if (response.status === 403) {
      return { hasAbility: false, error: 'Permission denied' }
    }

    if (response.status === 404) {
      return { hasAbility: false, error: 'Ability not found' }
    }

    if (!response.ok) {
      return { hasAbility: false, error: `API error: ${response.status}` }
    }

    const data = await response.json()
    return { hasAbility: true, ability: data }
  } catch (error) {
    return { hasAbility: false, error: (error as Error).message }
  }
}

/**
 * Execute an ability via REST API
 */
export async function executeAbility(
  abilityId: string,
  input: Record<string, unknown>,
  options: { apiBase?: string; auth?: string } = {}
): Promise<unknown> {
  const apiBase = options.apiBase || '/wp-json/wp-abilities/v1'

  const response = await fetch(`${apiBase}/execute/${abilityId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(options.auth ? { Authorization: `Bearer ${options.auth}` } : {}),
    },
    body: JSON.stringify(input),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || `Ability execution failed: ${response.status}`)
  }

  return response.json()
}

/**
 * Get abilities by category
 */
export async function getAbilitiesByCategory(
  category: string
): Promise<WPAbility[]> {
  const abilities = await fetchAbilities()
  return abilities.filter((ability) => ability.category === category)
}

// ============================================
// ABILITY HELPERS FOR BENGKEL WIGUNA
// ============================================

export const BENGKEL_ABILITIES = {
  // Services category
  READ_SERVICES: 'bengkel:read-services',
  MANAGE_BOOKINGS: 'bengkel:manage-bookings',

  // Content category
  READ_PROMOTIONS: 'bengkel:read-promotions',
  CONTENT_SUGGESTIONS: 'bengkel:content-suggestions',
} as const

export const BENGKEL_CATEGORIES = {
  SERVICES: 'bengkel-services',
  CONTENT: 'bengkel-content',
} as const

/**
 * Check if AI features are available
 */
export async function isAIAvailable(): Promise<boolean> {
  const result = await checkAbility(BENGKEL_ABILITIES.CONTENT_SUGGESTIONS)
  return result.hasAbility && !result.error
}

/**
 * Get content suggestions using abilities API
 */
export async function getContentSuggestions(
  topic: string,
  count = 5
): Promise<Array<{ title: string; metaDescription: string; targetKeyword: string }>> {
  try {
    const result = await executeAbility(
      BENGKEL_ABILITIES.CONTENT_SUGGESTIONS,
      { topic, count }
    ) as { data: Array<{ title: string; metaDescription: string; targetKeyword: string }> }

    return result.data
  } catch (error) {
    console.error('Failed to get content suggestions:', error)
    return []
  }
}

/**
 * Get available services using abilities API
 */
export async function getServicesViaAbilities(): Promise<unknown[]> {
  try {
    const response = await fetch('/wp-json/wp-abilities/v1/bengkel/services')
    if (!response.ok) return []

    const result = await response.json()
    return result.data || []
  } catch (error) {
    console.error('Failed to get services:', error)
    return []
  }
}

// @see references/error-code-vocabulary.md
export const ERROR_CODES = {
  ABILITY_NOT_FOUND: 'ability_not_found',
  PERMISSION_DENIED: 'permission_denied',
  INVALID_INPUT: 'invalid_input',
  SERVER_ERROR: 'server_error',
  RATE_LIMITED: 'rate_limited',
} as const

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES]