<?php
/**
 * Plugin Name: Bengkel Wiguna Headless CMS API
 * Plugin URI: https://bengkelwiguna.com
 * Description: Custom REST API endpoints for headless WordPress CMS integration with Next.js frontend (Core Ability Reference Implementation)
 * Version: 1.8.3
 * Author: Bengkel Wiguna
 * Author URI: https://bengkelwiguna.com
 * License: GPL v2 or later
 * Text Domain: bw-headless-api
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Define Constants
define('BW_HEADLESS_VERSION', '1.8.3');
define('BW_HEADLESS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('BW_HEADLESS_PLUGIN_URL', plugin_dir_url(__FILE__));

// Includes
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-admin.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-post-types.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-rest-controller.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-isr.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-abilities.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-editor-assistant.php';
require_once BW_HEADLESS_PLUGIN_DIR . 'includes/class-bw-meta-boxes.php';

// Initialize Classes
function bw_headless_cms_init() {
    $admin = new BW_Admin_Settings();
    $admin->init();

    $post_types = new BW_Post_Types();
    $post_types->init();

    $rest_controller = new BW_REST_API_Controller();
    $rest_controller->init();

    $isr = new BW_ISR_Revalidation();
    $isr->init();

    $abilities = new BW_Abilities();
    $abilities->init();

    $editor_assistant = new BW_Editor_Assistant();
    $editor_assistant->init();

    $meta_boxes = new BW_Meta_Boxes();
    $meta_boxes->init();
}
add_action('plugins_loaded', 'bw_headless_cms_init');

// CORS Headers
function bw_add_cors_headers() {
    $allowed_origins = [
        'https://bengkelwiguna.com',
        'https://www.bengkelwiguna.com',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
    ];

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header("Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        exit;
    }
}
add_action('init', 'bw_add_cors_headers', 1);

// Bypass nginx basic auth header stripping using custom headers
add_filter('determine_current_user', function($user_id) {
    // Validate and sanitize before logging
    $log_file = BW_HEADLESS_PLUGIN_DIR . 'auth_debug.txt';
    $request_method = isset($_SERVER['REQUEST_METHOD']) ? sanitize_text_field($_SERVER['REQUEST_METHOD']) : 'UNKNOWN';
    $request_uri = isset($_SERVER['REQUEST_URI']) ? sanitize_url($_SERVER['REQUEST_URI']) : 'UNKNOWN';
    $request_body = file_get_contents('php://input');
    // Sanitize body: remove newlines to prevent log injection, limit length
    $request_body = sanitize_textarea_field(substr($request_body, 0, 1000));
    $req_log = "[" . date('Y-m-d H:i:s') . "] METHOD: {$request_method} | URI: {$request_uri}\n";
    $req_log .= "BODY: " . $request_body . "\n";
    // Use LOCK_EX to prevent race conditions, sanitize any remaining newlines
    file_put_contents($log_file, str_replace(["\r", "\n"], " ", $req_log) . "\n", FILE_APPEND | LOCK_EX);

    $auth_header = '';
    if (isset($_SERVER['HTTP_X_WP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['HTTP_X_WP_AUTHORIZATION'];
    } elseif (isset($_SERVER['HTTP_X_AUTHORIZATION'])) {
        $auth_header = $_SERVER['HTTP_X_AUTHORIZATION'];
    }
    
    if (empty($auth_header) && isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $auth_header = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    }
    
    if ($user_id) {
        return $user_id;
    }
    
    if (empty($auth_header)) {
        return $user_id;
    }
    
    if (strpos(strtolower($auth_header), 'basic ') === 0) {
        $creds = base64_decode(substr($auth_header, 6));
        if ($creds && strpos($creds, ':') !== false) {
            list($username, $password) = explode(':', $creds, 2);
            
            // Log for debugging
            $log = "Username: " . $username . "\n";
            $user = get_user_by('login', $username);
            if ($user) {
                $log .= "User found: ID " . $user->ID . "\n";
                $valid = function_exists('wp_validate_application_password') && wp_validate_application_password($user->ID, $password);
                $log .= "Valid App PW: " . ($valid ? "YES" : "NO") . "\n";
                if ($valid) {
                    file_put_contents(BW_HEADLESS_PLUGIN_DIR . 'auth_debug.txt', $log . "Result: SUCCESS\n");
                    return $user->ID;
                }
            } else {
                $log .= "User NOT found by login\n";
            }
            file_put_contents(BW_HEADLESS_PLUGIN_DIR . 'auth_debug.txt', $log . "Result: FAILED\n");
            
            if ($user) {
                $auth_user = wp_authenticate($username, $password);
                if (!is_wp_error($auth_user)) {
                    return $auth_user->ID;
                }
            }
        }
    }
    
    return $user_id;
}, 20);

// Helpers
function bw_sanitize_array_helper($array) {
    if (!is_array($array)) {
        return is_string($array) ? sanitize_text_field($array) : $array;
    }
    $sanitized = [];
    foreach ($array as $key => $value) {
        if (is_array($value)) {
            $sanitized[$key] = bw_sanitize_array_helper($value);
        } else {
            $sanitized[$key] = is_string($value) ? sanitize_text_field($value) : $value;
        }
    }
    return $sanitized;
}

// Activation / Deactivation
function bw_activate() {
    $default_settings = [
        'hero' => [
            'slides' => [
                [
                    'title' => 'Layanan Profesional untuk Kendaraan Anda',
                    'subtitle' => 'Solusi terpercaya untuk semua kebutuhan perawatan mobil Anda. Tim ahli berpengalaman siap membantu.',
                    'btnText' => 'Hubungi Kami',
                    'btnLink' => '#contact',
                    'bgImage' => '/images/slider/Paket_SIaga_1.jpg',
                    'enabled' => true,
                ],
            ],
            'autoplay' => true,
            'autoplayInterval' => 6000,
        ],
        'services' => [
            'title' => 'Layanan Kami',
            'subtitle' => 'Servis berkualitas tinggi untuk kendaraan Anda',
            'showSection' => true,
            'maxItems' => 8,
        ],
        'business' => [
            'name' => 'Bengkel Wiguna',
            'phone' => '+62 878-1777-3888',
            'whatsapp' => '6287817773888',
        ],
        'sections' => [
            'hero' => true,
            'services' => true,
            'strategy' => true,
            'process' => true,
            'portfolios' => true,
            'blogs' => true,
        ],
        'cta' => [
            'title' => 'Let’s Build Future Together.',
            'whatsappUrl' => 'https://wa.me/6281717773888?text=halo',
            'bgImage' => '/images/cta/cta-bg.jpg',
        ],
        'updated_at' => current_time('mysql'),
    ];

    if (!get_option('bw_homepage_settings')) {
        add_option('bw_homepage_settings', $default_settings);
    }
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'bw_activate');

function bw_deactivate() {
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'bw_deactivate');

function bw_clear_services_transients($post_id) {
    if (get_post_type($post_id) !== 'services') return;
    delete_transient('bw_services_full_v3');
    $post = get_post($post_id);
    if ($post) {
        delete_transient('bw_service_' . md5($post->post_name));
    }
}
add_action('save_post_services', 'bw_clear_services_transients');

function bw_clear_promosi_transients($post_id) {
    if (get_post_type($post_id) !== 'promosi') return;
    delete_transient('bw_promosi_active_v3');
    $post = get_post($post_id);
    if ($post) {
        delete_transient('bw_promosi_' . md5($post->post_name));
    }
}
add_action('save_post_promosi', 'bw_clear_promosi_transients');