<?php
/**
 * =====================================================
 * WORDPRESS BACKEND CONFIGURATION
 * Bengkel Wiguna - Headless WordPress Setup
 * =====================================================
 *
 * Tambahkan kode ini ke functions.php theme Anda
 * atau buat plugin baru untuk kustomisasi ini
 *
 * Lokasi: wp-content/themes/[theme-name]/functions.php
 * atau: wp-content/plugins/bengkel-wiguna-api/bengkel-wiguna-api.php
 * =====================================================
 */

// =====================================================
// 1. EXPOSE CUSTOM POST TYPES VIA REST API
// =====================================================
function bengkel_expose_cpt_rest() {

    // Daftar CPT yang perlu di-expose
    $post_types = ['services', 'promosi'];

    foreach ($post_types as $pt) {
        $args = get_post_type_object($pt);
        if ($args) {
            $args->show_in_rest = true;
            $args->rest_base = $pt;
            $args->rest_controller_class = 'WP_REST_Posts_Controller';
        }
    }
}
add_action('init', 'bengkel_expose_cpt_rest', 30);

// =====================================================
// 2. REGISTER CUSTOM POST TYPES (JIKA BELUM ADA)
// =====================================================
function bengkel_register_cpts() {

    // --- Services CPT ---
    $services_labels = [
        'name'               => 'Services',
        'singular_name'      => 'Service',
        'menu_name'          => 'Layanan',
        'all_items'          => 'Semua Layanan',
        'add_new_item'       => 'Tambah Layanan Baru',
        'add_new'            => 'Tambah Baru',
        'new_item'           => 'Layanan Baru',
        'edit_item'          => 'Edit Layanan',
        'update_item'        => 'Update Layanan',
        'view_item'          => 'Lihat Layanan',
        'search_items'       => 'Cari Layanan',
        'not_found'          => 'Layanan tidak ditemukan',
        'not_found_in_trash'  => 'Layanan tidak ditemukan di trash',
    ];

    $services_args = [
        'label'               => 'Layanan',
        'description'         => 'Post type untuk layanan bengkel',
        'labels'              => $services_labels,
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_rest'        => true,        // WAJIB: untuk REST API
        'rest_base'           => 'services',   // WAJIB: endpoint URL
        'query_var'           => true,
        'rewrite'             => ['slug' => 'services'],
        'has_archive'         => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-admin-tools',
        'taxonomies'          => ['category', 'post_tag'],
    ];
    register_post_type('services', $services_args);

    // --- Promosi CPT ---
    $promosi_labels = [
        'name'               => 'Promosi',
        'singular_name'      => 'Promo',
        'menu_name'          => 'Promosi',
        'all_items'          => 'Semua Promosi',
        'add_new_item'       => 'Tambah Promo Baru',
        'add_new'            => 'Tambah Baru',
        'new_item'           => 'Promo Baru',
        'edit_item'          => 'Edit Promo',
        'update_item'        => 'Update Promo',
        'view_item'          => 'Lihat Promo',
        'search_items'       => 'Cari Promo',
        'not_found'          => 'Promo tidak ditemukan',
        'not_found_in_trash'  => 'Promo tidak ditemukan di trash',
    ];

    $promosi_args = [
        'label'               => 'Promosi',
        'description'         => 'Post type untuk promosi dan penawaran',
        'labels'              => $promosi_labels,
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
        'hierarchical'        => false,
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_nav_menus'   => true,
        'show_in_rest'        => true,        // WAJIB: untuk REST API
        'rest_base'           => 'promosi',   // WAJIB: endpoint URL
        'query_var'           => true,
        'rewrite'             => ['slug' => 'promosi'],
        'has_archive'         => true,
        'menu_position'       => 6,
        'menu_icon'           => 'dashicons-megaphone',
        'taxonomies'          => ['category', 'post_tag'],
    ];
    register_post_type('promosi', $promosi_args);
}
add_action('init', 'bengkel_register_cpts', 20);

// =====================================================
// 3. ADD YOAST SEO DATA TO REST API RESPONSE
// =====================================================
function bengkel_add_yoast_to_rest($response, $post, $request) {

    // Ambil Yoast SEO meta
    $yoast_title = get_post_meta($post->ID, '_yoast_wpseo_title', true);
    $yoast_desc = get_post_meta($post->ID, '_yoast_wpseo_metadesc', true);
    $yoast_focuskw = get_post_meta($post->ID, '_yoast_wpseo_focuskw', true);

    // Jika Yoast meta ada, tambahkan ke response
    if (!empty($yoast_title) || !empty($yoast_desc)) {
        $response->data['yoast_head_json'] = [
            'title'       => $yoast_title ?: $post->post_title,
            'description' => $yoast_desc ?: wp_strip_all_tags($post->post_excerpt),
 ];
    }

    return $response;
}
add_filter('rest_prepare_post', 'bengkel_add_yoast_to_rest', 10, 3);

// =====================================================
// 4. ADD CUSTOM META FIELDS TO REST API
// =====================================================
function bengkel_register_rest_fields() {

    // Register meta untuk Services
    register_post_meta('services', 'harga', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('services', 'durasi', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('services', 'garansi', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    // Register meta untuk Promosi
    register_post_meta('promosi', 'diskon_persen', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('promosi', 'harga_asli', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('promosi', 'harga_promo', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('promosi', 'tanggal_mulai', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);

    register_post_meta('promosi', 'tanggal_selesai', [
        'show_in_rest'  => true,
        'single'        => true,
        'type'          => 'string',
        'auth_callback' => '__return_true',
    ]);
}
add_action('init', 'bengkel_register_rest_fields', 30);

// =====================================================
// 5. ENABLE CORS HEADERS (untuk development)
// =====================================================
function bengkel_add_cors_headers() {

    // Untuk production, ganti * dengan domain frontend Anda
    $allowed_origins = [
        'https://bengkelwiguna.com',
        'https://www.bengkelwiguna.com',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
    ];

    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

    if (in_array($origin, $allowed_origins)) {
        header("Access-Control-Allow-Origin: $origin");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
    }

    // Handle preflight requests
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");
        exit;
    }
}
add_action('init', 'bengkel_add_cors_headers', 1);

// =====================================================
// 6. CUSTOM REST API ENDPOINT (Optional)
// =====================================================
function bengkel_custom_rest_routes() {

    // Endpoint untuk semua layanan dengan meta
    register_rest_route('wp/v2', '/services-full', [
        'methods'  => 'GET',
        'callback' => function($request) {
            $args = [
                'post_type'      => 'services',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ];

            $query = new WP_Query($args);
            $services = [];

            foreach ($query->posts as $post) {
                $services[] = [
                    'id'          => $post->ID,
                    'title'       => $post->post_title,
                    'slug'        => $post->post_name,
                    'content'     => $post->post_content,
                    'excerpt'     => $post->post_excerpt,
                    'date'        => $post->post_date,
                    'featured_img'=> get_the_post_thumbnail_url($post->ID, 'large'),
                    'harga'       => get_post_meta($post->ID, 'harga', true),
                    'durasi'      => get_post_meta($post->ID, 'durasi', true),
                    'garansi'     => get_post_meta($post->ID, 'garansi', true),
                ];
            }

            return rest_ensure_response($services);
        },
        'permission_callback' => '__return_true',
    ]);

    // Endpoint untuk semua promosi aktif
    register_rest_route('wp/v2', '/promosi-active', [
        'methods'  => 'GET',
        'callback' => function($request) {
            $today = date('Y-m-d');

            $args = [
                'post_type'      => 'promosi',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'meta_query'     => [
                    'relation' => 'OR',
                    [
                        'key'     => 'tanggal_selesai',
                        'value'   => $today,
                        'compare' => '>=',
                        'type'    => 'DATE',
                    ],
                    [
                        'key'     => 'tanggal_selesai',
                        'value'   => '',
                        'compare' => '=',
                    ],
 ],
            ];

            $query = new WP_Query($args);
            $promos = [];

            foreach ($query->posts as $post) {
                $tanggal_mulai = get_post_meta($post->ID, 'tanggal_mulai', true);
                $tanggal_selesai = get_post_meta($post->ID, 'tanggal_selesai', true);

                // Cek apakah promo masih aktif
                $is_active = empty($tanggal_selesai) || strtotime($tanggal_selesai) >= strtotime($today);

                if ($is_active) {
                    $promos[] = [
                        'id'            => $post->ID,
                        'title'         => $post->post_title,
                        'slug'          => $post->post_name,
                        'content'       => $post->post_content,
                        'excerpt'       => $post->post_excerpt,
                        'featured_img'  => get_the_post_thumbnail_url($post->ID, 'large'),
                        'diskon_persen' => get_post_meta($post->ID, 'diskon_persen', true),
                        'harga_asli'    => get_post_meta($post->ID, 'harga_asli', true),
                        'harga_promo'   => get_post_meta($post->ID, 'harga_promo', true),
                        'tanggal_mulai' => $tanggal_mulai,
                        'tanggal_selesai'=> $tanggal_selesai,
                    ];
                }
            }

            return rest_ensure_response($promos);
        },
        'permission_callback' => '__return_true',
    ]);

    // Endpoint untuk site info
    register_rest_route('wp/v2', '/site-info', [
        'methods'  => 'GET',
        'callback' => function($request) {
            return rest_ensure_response([
                'name'        => get_bloginfo('name'),
                'description' => get_bloginfo('description'),
                'url'         => get_bloginfo('url'),
                'admin_email' => get_bloginfo('admin_email'),
            ]);
        },
        'permission_callback' => '__return_true',
    ]);

    // =====================================================
    // HOMEPAGE SETTINGS ENDPOINT (HEADLESS CMS)
    // =====================================================
    register_rest_route('bw/v1', '/homepage-settings', [
        'methods'  => 'GET',
        'callback' => function($request) {
            $settings = get_option('bw_homepage_settings', []);

            // Return default values if empty
            if (empty($settings)) {
                return rest_ensure_response([
                    'hero' => [
                        'slides' => [
                            [
                                'title' => 'Layanan Profesional untuk Kendaraan Anda',
                                'subtitle' => 'Solusi terpercaya untuk semua kebutuhan perawatan mobil Anda',
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
                ]);
            }

            return rest_ensure_response($settings);
        },
        'permission_callback' => '__return_true',
    ]);

    // Save homepage settings (POST)
    register_rest_route('bw/v1', '/homepage-settings', [
        'methods'  => 'POST',
        'callback' => function($request) {
            $params = $request->get_json_params();

            if (empty($params)) {
                return new WP_Error('empty_data', 'Data tidak boleh kosong', ['status' => 400]);
            }

            $settings = [
                'hero' => isset($params['hero']) ? $params['hero'] : [],
                'services' => isset($params['services']) ? $params['services'] : [],
                'business' => isset($params['business']) ? $params['business'] : [],
                'sections' => isset($params['sections']) ? $params['sections'] : [],
                'updated_at' => current_time('mysql'),
            ];

            update_option('bw_homepage_settings', $settings);

            return rest_ensure_response([
                'success' => true,
                'message' => 'Settings berhasil disimpan',
                'updated_at' => $settings['updated_at'],
            ]);
        },
        'permission_callback' => function() {
            return current_user_can('edit_posts');
        },
    ]);
}
add_action('rest_api_init', 'bengkel_custom_rest_routes');

// =====================================================
// 7. FLUSH REWRITE RULES (Jalankan sekali, lalu comment)
// =====================================================
// function bengkel_flush_rewrite_rules() {
//     flush_rewrite_rules();
// }
// add_action('after_switch_theme', 'bengkel_flush_rewrite_rules');
// flush_rewrite_rules(); // Jalankan sekali, lalu hapus baris ini

// =====================================================
// 8. DISABLE EMOJIS (Optional - untuk performa)
// =====================================================
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');

// =====================================================
// 9. REMOVE WP VERSION
// =====================================================
remove_action('wp_head', 'wp_generator');

// =====================================================
// 10. ADD CUSTOM IMAGE SIZES
// =====================================================
function bengkel_custom_image_sizes() {
    add_image_size('service-thumb', 400, 280, true);
    add_image_size('blog-thumb', 400, 280, true);
    add_image_size('promo-large', 800, 400, true);
    add_image_size('og-image', 1200, 630, true);
}
add_action('after_setup_theme', 'bengkel_custom_image_sizes');

// =====================================================
// INFO& INSTRUKSI
// =====================================================
/**
 * SETELAH MENAMBAHKAN KODE INI:
 *
 * 1. Flush rewrite rules:
 *    - Buka Settings > Permalinks di WP Admin
 *    - Klik "Save Changes" (tanpa mengubah apapun)
 *
 * 2. Test endpoint baru:
 *    curl "https://backend.bengkelwiguna.com/wp-json/wp/v2/services"
 *    curl "https://backend.bengkelwiguna.com/wp-json/wp/v2/promosi"
 *    curl "https://backend.bengkelwiguna.com/wp-json/wp/v2/services-full"
 *    curl "https://backend.bengkelwiguna.com/wp-json/wp/v2/promosi-active"
 *
 * 3. Buat sample content:
 *    - Buat beberapa post dengan post type "Layanan"
 *    - Buat beberapa post dengan post type "Promosi"
 *
 * 4. Test image URLs harus menggunakan domain backend:
 *    https://backend.bengkelwiguna.com/wp-content/uploads/...
 */
