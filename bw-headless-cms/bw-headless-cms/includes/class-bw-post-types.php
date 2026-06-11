<?php
/**
 * BW Headless CMS - Custom Post Types Registration
 * Registers: services, promosi, paket_service
 */

if (!defined('ABSPATH')) exit;

class BW_Post_Types {
    public function init() {
        add_action('init', [$this, 'register_post_types']);
        add_action('init', [$this, 'register_meta_fields']);
    }

    // =============================================
    // CUSTOM POST TYPES
    // =============================================
    public function register_post_types() {

        // --- SERVICES TAXONOMIES ---
        register_taxonomy('services_category', ['services'], [
            'labels' => [
                'name' => __('Kategori Layanan', 'bw-headless-api'),
                'singular_name' => __('Kategori Layanan', 'bw-headless-api'),
            ],
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'services_category',
        ]);

        register_taxonomy('services_tag', ['services'], [
            'labels' => [
                'name' => __('Tag Layanan', 'bw-headless-api'),
                'singular_name' => __('Tag Layanan', 'bw-headless-api'),
            ],
            'hierarchical' => false,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'services_tag',
        ]);

        // --- PROMOSI TAXONOMIES ---
        register_taxonomy('promosi_category', ['promosi'], [
            'labels' => [
                'name' => __('Kategori Promosi', 'bw-headless-api'),
                'singular_name' => __('Kategori Promosi', 'bw-headless-api'),
            ],
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'promosi_category',
        ]);

        register_taxonomy('promosi_tag', ['promosi'], [
            'labels' => [
                'name' => __('Tag Promosi', 'bw-headless-api'),
                'singular_name' => __('Tag Promosi', 'bw-headless-api'),
            ],
            'hierarchical' => false,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'promosi_tag',
        ]);

        // --- PAKET TAXONOMIES ---
        register_taxonomy('paket_category', ['paket_service'], [
            'labels' => [
                'name' => __('Kategori Paket', 'bw-headless-api'),
                'singular_name' => __('Kategori Paket', 'bw-headless-api'),
            ],
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'paket_category',
        ]);

        register_taxonomy('paket_tag', ['paket_service'], [
            'labels' => [
                'name' => __('Tag Paket', 'bw-headless-api'),
                'singular_name' => __('Tag Paket', 'bw-headless-api'),
            ],
            'hierarchical' => false,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'paket_tag',
        ]);

        // --- LAYANAN SPESIALIS TAXONOMIES ---
        register_taxonomy('spesialis_category', ['layanan_spesialis'], [
            'labels' => [
                'name' => __('Kategori Spesialis', 'bw-headless-api'),
                'singular_name' => __('Kategori Spesialis', 'bw-headless-api'),
            ],
            'hierarchical' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'spesialis_category',
        ]);

        register_taxonomy('spesialis_tag', ['layanan_spesialis'], [
            'labels' => [
                'name' => __('Tag Spesialis', 'bw-headless-api'),
                'singular_name' => __('Tag Spesialis', 'bw-headless-api'),
            ],
            'hierarchical' => false,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => 'spesialis_tag',
        ]);

        // --- SERVICES ---
        register_post_type('services', [
            'labels'       => [
                'name'               => __('Layanan', 'bw-headless-api'),
                'singular_name'      => __('Layanan', 'bw-headless-api'),
                'add_new_item'       => __('Tambah Layanan Baru', 'bw-headless-api'),
                'edit_item'          => __('Edit Layanan', 'bw-headless-api'),
                'view_item'          => __('Lihat Layanan', 'bw-headless-api'),
                'search_items'       => __('Cari Layanan', 'bw-headless-api'),
                'not_found'          => __('Layanan tidak ditemukan', 'bw-headless-api'),
                'not_found_in_trash' => __('Layanan tidak ditemukan di trash', 'bw-headless-api'),
            ],
            'public'             => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'menu_icon'          => 'dashicons-admin-tools',
            'menu_position'       => 5,
            'has_archive'        => true,
            'hierarchical'       => false,
            'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'author'],
            'show_in_rest'       => true,
            'rest_base'          => 'services',
            'rewrite'            => ['slug' => 'services', 'with_front' => false],
            'taxonomies'         => ['services_category', 'services_tag'],
        ]);

        // --- PROMOSI ---
        register_post_type('promosi', [
            'labels'       => [
                'name'               => __('Promosi', 'bw-headless-api'),
                'singular_name'      => __('Promo', 'bw-headless-api'),
                'add_new_item'       => __('Tambah Promo Baru', 'bw-headless-api'),
                'edit_item'          => __('Edit Promo', 'bw-headless-api'),
                'view_item'          => __('Lihat Promo', 'bw-headless-api'),
                'search_items'       => __('Cari Promo', 'bw-headless-api'),
                'not_found'          => __('Promo tidak ditemukan', 'bw-headless-api'),
                'not_found_in_trash' => __('Promo tidak ditemukan di trash', 'bw-headless-api'),
            ],
            'public'             => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'menu_icon'          => 'dashicons-megaphone',
            'menu_position'       => 6,
            'has_archive'        => true,
            'hierarchical'       => false,
            'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'author'],
            'show_in_rest'       => true,
            'rest_base'          => 'promosi',
            'rewrite'            => ['slug' => 'promosi', 'with_front' => false],
            'taxonomies'         => ['promosi_category', 'promosi_tag'],
        ]);

        // --- PAKET SERVICE (NEW) ---
        register_post_type('paket_service', [
            'labels'       => [
                'name'               => __('Paket Service', 'bw-headless-api'),
                'singular_name'      => __('Paket Service', 'bw-headless-api'),
                'add_new_item'       => __('Tambah Paket Service Baru', 'bw-headless-api'),
                'edit_item'          => __('Edit Paket Service', 'bw-headless-api'),
                'view_item'          => __('Lihat Paket Service', 'bw-headless-api'),
                'search_items'       => __('Cari Paket Service', 'bw-headless-api'),
                'not_found'          => __('Paket Service tidak ditemukan', 'bw-headless-api'),
                'not_found_in_trash' => __('Paket Service tidak ditemukan di trash', 'bw-headless-api'),
            ],
            'public'             => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'menu_icon'          => 'dashicons-packaging',
            'menu_position'       => 7,
            'has_archive'        => true,
            'hierarchical'       => false,
            'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'author'],
            'show_in_rest'       => true,
            'rest_base'          => 'paket_service',
            'rewrite'            => ['slug' => 'paket-service', 'with_front' => false],
            'taxonomies'         => ['paket_category', 'paket_tag'],
        ]);

        // --- LAYANAN SPESIALIS (NEW) ---
        register_post_type('layanan_spesialis', [
            'labels'       => [
                'name'               => __('Layanan Spesialis', 'bw-headless-api'),
                'singular_name'      => __('Layanan Spesialis', 'bw-headless-api'),
                'add_new_item'       => __('Tambah Spesialis Baru', 'bw-headless-api'),
                'edit_item'          => __('Edit Spesialis', 'bw-headless-api'),
                'view_item'          => __('Lihat Spesialis', 'bw-headless-api'),
                'search_items'       => __('Cari Spesialis', 'bw-headless-api'),
                'not_found'          => __('Layanan Spesialis tidak ditemukan', 'bw-headless-api'),
                'not_found_in_trash' => __('Layanan Spesialis tidak ditemukan di trash', 'bw-headless-api'),
            ],
            'public'             => true,
            'show_ui'            => true,
            'show_in_menu'       => true,
            'menu_icon'          => 'dashicons-admin-network',
            'menu_position'       => 8,
            'has_archive'        => true,
            'hierarchical'       => false,
            'supports'           => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'author'],
            'show_in_rest'       => true,
            'rest_base'          => 'layanan_spesialis',
            'rewrite'            => ['slug' => 'layanan-spesialis', 'with_front' => false],
            'taxonomies'         => ['spesialis_category', 'spesialis_tag'],
        ]);

        // Flush rewrite rules on activation
        flush_rewrite_rules();
    }

    // =============================================
    // META FIELDS (REST API Visible)
    // =============================================
    public function register_meta_fields() {

        // --- SERVICES META ---
        $service_meta = [
            'harga'   => [
                'type'         => 'string',
                'description'  => 'Harga layanan (contoh: Rp 150.000 - Rp 350.000)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'durasi'  => [
                'type'         => 'string',
                'description'  => 'Estimasi durasi service (contoh: 1-2 jam)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'garansi' => [
                'type'         => 'string',
                'description'  => 'Kebijakan garansi layanan',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_gallery_images' => [
                'type'         => 'string',
                'description'  => 'Array IDs for gallery images (comma separated)',
                'single'       => true,
                'show_in_rest' => true,
            ],
        ];

        foreach ($service_meta as $key => $args) {
            register_post_meta('services', $key, [
                'type'              => $args['type'],
                'description'       => $args['description'],
                'single'            => $args['single'],
                'show_in_rest'      => $args['show_in_rest'],
                'sanitize_callback' => 'sanitize_text_field',
                'auth_callback'     => function() { return current_user_can('edit_posts'); },
            ]);
        }

        // --- PROMOSI META ---
        $promosi_meta = [
            'harga_asli'      => [
                'type'         => 'string',
                'description'  => 'Harga sebelum diskon',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'harga_promo'     => [
                'type'         => 'string',
                'description'  => 'Harga setelah diskon',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'diskon_persen'   => [
                'type'         => 'number',
                'description'  => 'Persentase diskon (angka saja, contoh: 20)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'tanggal_mulai'   => [
                'type'         => 'string',
                'description'  => 'Tanggal mulai promo (YYYY-MM-DD)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'tanggal_selesai' => [
                'type'         => 'string',
                'description'  => 'Tanggal akhir promo (YYYY-MM-DD)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'include'         => [
                'type'         => 'string',
                'description'  => 'Daftar yang termasuk dalam promo (pisahkan dengan |)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_gallery_images' => [
                'type'         => 'string',
                'description'  => 'Array IDs for gallery images (comma separated)',
                'single'       => true,
                'show_in_rest' => true,
            ],
        ];

        foreach ($promosi_meta as $key => $args) {
            register_post_meta('promosi', $key, [
                'type'              => $args['type'],
                'description'       => $args['description'],
                'single'            => $args['single'],
                'show_in_rest'      => $args['show_in_rest'],
                'sanitize_callback' => $args['type'] === 'number' ? 'absint' : 'sanitize_text_field',
                'auth_callback'     => function() { return current_user_can('edit_posts'); },
            ]);
        }

        // --- PAKET SERVICE META ---
        $paket_meta = [
            'harga_paket'       => [
                'type'         => 'string',
                'description'  => 'Harga paket service',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'durasi_paket'      => [
                'type'         => 'string',
                'description'  => 'Estimasi durasi paket',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'garansi_paket'     => [
                'type'         => 'string',
                'description'  => 'Kebijakan garansi paket',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'items_paket'       => [
                'type'         => 'string',
                'description'  => 'Daftar item service dalam paket (pisahkan dengan |)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'jenis_kendaraan'   => [
                'type'         => 'string',
                'description'  => 'Jenis kendaraan yang cocok (contoh: SUV|LCGC|Sedan)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_gallery_images' => [
                'type'         => 'string',
                'description'  => 'Array IDs for gallery images (comma separated)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            // Shop Meta Fields for Paket Service
            'price' => [
                'type'         => 'number',
                'description'  => 'Current Price (angka)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'previousPrice' => [
                'type'         => 'number',
                'description'  => 'Previous Price (angka, untuk coret harga)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'status' => [
                'type'         => 'string',
                'description'  => 'Badge Status (e.g., Sale, Sold)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'availability' => [
                'type'         => 'string',
                'description'  => 'Availability (e.g., In stock, Out of stock)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bestSeller' => [
                'type'         => 'string',
                'description'  => 'Is Best Seller (true/false)',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'sku' => [
                'type'         => 'string',
                'description'  => 'SKU / Kode Produk',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'reviews' => [
                'type'         => 'number',
                'description'  => 'Review Count',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'soldUnits' => [
                'type'         => 'number',
                'description'  => 'Sold Units',
                'single'       => true,
                'show_in_rest' => true,
            ],
        ];

        foreach ($paket_meta as $key => $args) {
            register_post_meta('paket_service', $key, [
                'type'              => $args['type'],
                'description'       => $args['description'],
                'single'            => $args['single'],
                'show_in_rest'      => $args['show_in_rest'],
                'sanitize_callback' => $args['type'] === 'number' ? 'absint' : 'sanitize_text_field',
                'auth_callback'     => function() { return current_user_can('edit_posts'); },
            ]);
        }

        // --- LAYANAN SPESIALIS META ---
        $spesialis_meta = [
            'manfaat_spesialis' => [
                'type'         => 'string',
                'description'  => 'Manfaat utama dari layanan spesialis',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'teknologi_spesialis' => [
                'type'         => 'string',
                'description'  => 'Alat atau teknologi diagnostik/flushing yang digunakan',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_spesialis_faq_image' => [
                'type'         => 'string',
                'description'  => 'Image ID or URL for FAQ section',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_spesialis_faq' => [
                'type'         => 'string',
                'description'  => 'JSON string of FAQ items',
                'single'       => true,
                'show_in_rest' => true,
            ],
            'bw_gallery_images' => [
                'type'         => 'string',
                'description'  => 'Array IDs for gallery images (comma separated)',
                'single'       => true,
                'show_in_rest' => true,
            ],
        ];

        foreach ($spesialis_meta as $key => $args) {
            register_post_meta('layanan_spesialis', $key, [
                'type'              => $args['type'],
                'description'       => $args['description'],
                'single'            => $args['single'],
                'show_in_rest'      => $args['show_in_rest'],
                // Do not sanitize heavily since we might inject HTML for list of benefits
                'sanitize_callback' => function($value) { return wp_kses_post($value); },
                'auth_callback'     => function() { return current_user_can('edit_posts'); },
            ]);
        }
    }
}