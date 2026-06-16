<?php
/**
 * Headless CMS REST Controllers
 */

class BW_REST_API_Controller extends WP_REST_Controller {
    public function __construct() {
        $this->namespace = 'bw/v1';
    }

    public function init() {
        add_action('rest_api_init', [$this, 'register_routes']);
    }

    public function register_routes() {
        // Homepage Settings
        register_rest_route($this->namespace, '/homepage-settings', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_homepage_settings'],
                'permission_callback' => '__return_true',
            ],
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'update_homepage_settings'],
                'permission_callback' => function() {
                    return current_user_can('edit_posts');
                },
            ]
        ]);

        register_rest_route($this->namespace, '/homepage-settings/(?P<section>[a-z_-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_homepage_section'],
                'permission_callback' => '__return_true',
            ],
            [
                'methods'             => WP_REST_Server::EDITABLE, // PATCH/PUT
                'callback'            => [$this, 'patch_homepage_section'],
                'permission_callback' => function() {
                    return current_user_can('edit_posts');
                },
            ]
        ]);

        // Site Info
        register_rest_route($this->namespace, '/site-info', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_site_info'],
                'permission_callback' => '__return_true',
            ]
        ]);

        // Services Collection
        register_rest_route($this->namespace, '/services-full', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_services'],
                'permission_callback' => '__return_true',
                'args'                => $this->get_collection_params(),
            ],
        ]);

        // Service Item
        register_rest_route($this->namespace, '/services/(?P<slug>[a-zA-Z0-9-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_service_item'],
                'permission_callback' => '__return_true',
                'args'                => [
                    'slug' => [
                        'type'              => 'string',
                        'required'          => true,
                        'sanitize_callback' => 'sanitize_title',
                    ],
                ],
            ],
        ]);

        // Promosi Collection
        register_rest_route($this->namespace, '/promosi-active', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_promosis'],
                'permission_callback' => '__return_true',
                'args'                => $this->get_collection_params(),
            ],
        ]);

        // Promosi Item
        register_rest_route($this->namespace, '/promosi/(?P<slug>[a-zA-Z0-9-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_promosi_item'],
                'permission_callback' => '__return_true',
                'args'                => [
                    'slug' => [
                        'type'              => 'string',
                        'required'          => true,
                        'sanitize_callback' => 'sanitize_title',
                    ],
                ],
            ],
        ]);

        // Paket Service Collection
        register_rest_route($this->namespace, '/paket-service-full', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_paket_services'],
                'permission_callback' => '__return_true',
                'args'                => $this->get_collection_params(),
            ],
        ]);

        // Paket Service Item
        register_rest_route($this->namespace, '/paket-service/(?P<slug>[a-zA-Z0-9-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_paket_service_item'],
                'permission_callback' => '__return_true',
                'args'                => [
                    'slug' => [
                        'type'              => 'string',
                        'required'          => true,
                        'sanitize_callback' => 'sanitize_title',
                    ],
                ],
            ],
        ]);

        // Layanan Spesialis Collection
        register_rest_route($this->namespace, '/layanan-spesialis-full', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_layanan_spesialis'],
                'permission_callback' => '__return_true',
                'args'                => $this->get_collection_params(),
            ],
        ]);

        // Layanan Spesialis Item
        register_rest_route($this->namespace, '/layanan-spesialis/(?P<slug>[a-zA-Z0-9-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_layanan_spesialis_item'],
                'permission_callback' => '__return_true',
                'args'                => [
                    'slug' => [
                        'type'              => 'string',
                        'required'          => true,
                        'sanitize_callback' => 'sanitize_title',
                    ],
                ],
            ],
        ]);

        // Navigation Menu (WP Navigation API)
        register_rest_route($this->namespace, '/menu/(?P<location>[a-z-]+)', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_menu_by_location'],
                'permission_callback' => '__return_true',
                'args'                => [
                    'location' => [
                        'type'              => 'string',
                        'required'          => true,
                        'sanitize_callback' => 'sanitize_key',
                    ],
                ],
            ],
        ]);

        // Debug Logs REST Route
        register_rest_route($this->namespace, '/debug-logs', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'get_debug_logs'],
                'permission_callback' => '__return_true',
            ]
        ]);

        // Manual Revalidate REST Route
        register_rest_route($this->namespace, '/revalidate-manual', [
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'handle_manual_revalidate'],
                'permission_callback' => function() {
                    return current_user_can('manage_options');
                },
            ]
        ]);

        // Health Check REST Route
        register_rest_route($this->namespace, '/health-check', [
            [
                'methods'             => WP_REST_Server::READABLE,
                'callback'            => [$this, 'health_check'],
                'permission_callback' => '__return_true',
            ]
        ]);
        
        // AI Chat
        register_rest_route('wp-abilities/v1', '/bengkel/ai-chat', [
            [
                'methods'             => WP_REST_Server::CREATABLE,
                'callback'            => [$this, 'handle_ai_chat'],
                'permission_callback' => '__return_true',
            ]
        ]);
    }

    public function get_collection_params() {
        return [
            'per_page' => [
                'type'              => 'integer',
                'description'       => 'Maximum number of items to be returned in result set.',
                'default'           => -1,
                'sanitize_callback' => 'absint',
            ],
        ];
    }

    public function get_homepage_settings($request) {
        $settings = get_option('bw_homepage_settings', []);
        if (empty($settings)) {
            return rest_ensure_response([
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
                        [
                            'title' => 'Promo Paket Servis Spesial',
                            'subtitle' => 'Dapatkan penawaran terbaik untuk perawatan kendaraan Anda. Harga transparan, tanpa biaya tersembunyi.',
                            'btnText' => 'Lihat Promo',
                            'btnLink' => '/promosi/',
                            'bgImage' => '/images/slider/PAket-Ijig.jpg',
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
                    'email' => 'info@bengkelwiguna.com',
                    'address' => 'Depok, Jawa Barat',
                    'openingHours' => 'Senin-Sabtu: 08.00 - 17.00',
                ],
                'sections' => [
                    'hero' => true,
                    'services' => true,
                    'strategy' => true,
                    'process' => true,
                    'portfolios' => true,
                    'blogs' => true,
                ],
                'promo_bulanan' => [],
                'show_promo_bulanan' => true,
            ]);
        }

        if (!isset($settings['show_promo_bulanan'])) {
            $settings['show_promo_bulanan'] = true;
        }

        return rest_ensure_response($settings);
    }

    public function update_homepage_settings($request) {
        $params = $request->get_json_params();

        if (empty($params)) {
            return new WP_Error('empty_data', 'Data tidak boleh kosong', ['status' => 400]);
        }

        $settings = [
            'hero' => bw_sanitize_array_helper($params['hero'] ?? []),
            'services' => bw_sanitize_array_helper($params['services'] ?? []),
            'business' => bw_sanitize_array_helper($params['business'] ?? []),
            'sections' => bw_sanitize_array_helper($params['sections'] ?? []),
            'seo' => bw_sanitize_array_helper($params['seo'] ?? []),
            'show_promo_bulanan' => isset($params['show_promo_bulanan']) ? (bool)$params['show_promo_bulanan'] : true,
            'updated_at' => current_time('mysql'),
        ];

        update_option('bw_homepage_settings', $settings);

        return rest_ensure_response([
            'success' => true,
            'message' => 'Settings berhasil disimpan',
            'updated_at' => $settings['updated_at'],
        ]);
    }

    public function get_homepage_section($request) {
        $section = $request->get_param('section');
        $settings = get_option('bw_homepage_settings', []);

        if (!isset($settings[$section])) {
            if ($section === 'show_promo_bulanan') {
                return rest_ensure_response([
                    'section' => $section,
                    'data' => true,
                ]);
            }
            return new WP_Error('section_not_found', 'Section tidak ditemukan', ['status' => 404]);
        }

        return rest_ensure_response([
            'section' => $section,
            'data' => $settings[$section],
        ]);
    }

    public function patch_homepage_section($request) {
        $section = $request->get_param('section');
        $params = $request->get_json_params();

        $allowed_sections = ['hero', 'services', 'business', 'sections', 'seo', 'cta', 'faq', 'promo_bulanan', 'show_promo_bulanan'];

        if (!in_array($section, $allowed_sections)) {
            return new WP_Error('invalid_section', 'Section tidak valid', ['status' => 400]);
        }

        $settings = get_option('bw_homepage_settings', []);
        
        if ($section === 'show_promo_bulanan') {
            $settings[$section] = (bool)$params;
        } else {
            $settings[$section] = bw_sanitize_array_helper($params);
        }
        
        $settings['updated_at'] = current_time('mysql');

        update_option('bw_homepage_settings', $settings);

        return rest_ensure_response([
            'success' => true,
            'section' => $section,
            'data' => $settings[$section],
        ]);
    }

    public function get_site_info($request) {
        return rest_ensure_response([
            'name' => get_bloginfo('name'),
            'description' => get_bloginfo('description'),
            'url' => get_bloginfo('url'),
            'admin_email' => get_bloginfo('admin_email'),
        ]);
    }

    private function resolve_image_url($post_id) {
        $url = get_the_post_thumbnail_url($post_id, 'full');
        if (!$url) {
            $url = get_the_post_thumbnail_url($post_id, 'large');
        }
        return $url ?: false;
    }

    private function resolve_gallery_urls($post_id) {
        $meta = get_post_meta($post_id, 'bw_gallery_images', true);
        if (empty($meta)) return [];
        $ids = explode(',', $meta);
        $urls = [];
        foreach ($ids as $id) {
            if (empty($id)) continue;
            $url = wp_get_attachment_image_url($id, 'full');
            if ($url) {
                $urls[] = $url;
            }
        }
        return $urls;
    }

    private function parse_faq_meta($post_id, $meta_key = 'bw_services_faq') {
        $faq_raw = get_post_meta($post_id, $meta_key, true);
        if (empty($faq_raw)) return [];
        $faq_array = json_decode($faq_raw, true);
        return is_array($faq_array) ? $faq_array : [];
    }

    public function get_services($request) {
        $transient_key = 'bw_services_full_v3';
        $services = get_transient($transient_key);

        if (false === $services) {
            $args = [
                'post_type'      => 'services',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);
            $services = [];
            foreach ($query->posts as $post) {
                $services[] = [
                    'id'           => $post->ID,
                    'title'        => $post->post_title,
                    'slug'         => $post->post_name,
                    'content'      => apply_filters('the_content', $post->post_content),
                    'excerpt'      => $post->post_excerpt,
                    'date'         => $post->post_date,
                    'featured_img' => $this->resolve_image_url($post->ID),
                    'harga'        => get_post_meta($post->ID, 'harga', true),
                    'durasi'       => get_post_meta($post->ID, 'durasi', true),
                    'garansi'      => get_post_meta($post->ID, 'garansi', true),
                    'gallery'      => $this->resolve_gallery_urls($post->ID),
                    'bw_services_faq' => $this->parse_faq_meta($post->ID, 'bw_services_faq'),
                ];
            }
            set_transient($transient_key, $services, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($services);
    }

    public function get_service_item($request) {
        $slug = sanitize_text_field($request->get_param('slug'));
        $transient_key = 'bw_service_' . md5($slug);
        $service = get_transient($transient_key);

        if (false === $service) {
            $args = [
                'post_type'      => 'services',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);

            if (empty($query->posts)) {
                return new WP_Error('not_found', 'Service tidak ditemukan', ['status' => 404]);
            }

            $post = $query->posts[0];
            $service = [
                'id'           => $post->ID,
                'title'        => $post->post_title,
                'slug'         => $post->post_name,
                'content'      => apply_filters('the_content', $post->post_content),
                'excerpt'      => $post->post_excerpt,
                'featured_img' => $this->resolve_image_url($post->ID),
                'harga'        => get_post_meta($post->ID, 'harga', true),
                'durasi'       => get_post_meta($post->ID, 'durasi', true),
                'garansi'      => get_post_meta($post->ID, 'garansi', true),
                'gallery'      => $this->resolve_gallery_urls($post->ID),
                'bw_services_faq' => $this->parse_faq_meta($post->ID, 'bw_services_faq'),
            ];
            set_transient($transient_key, $service, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($service);
    }

    public function get_promosis($request) {
        $transient_key = 'bw_promosi_active_v3';
        $promosis = get_transient($transient_key);

        if (false === $promosis) {
            $today = date('Y-m-d');
            $args = [
                'post_type'      => 'promosi',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);
            $promosis = [];

            foreach ($query->posts as $post) {
                $tanggal_selesai = get_post_meta($post->ID, 'tanggal_selesai', true);
                if (empty($tanggal_selesai) || strtotime($tanggal_selesai) >= strtotime($today)) {
                    $promosis[] = [
                        'id'              => $post->ID,
                        'title'           => $post->post_title,
                        'slug'            => $post->post_name,
                        'content'         => apply_filters('the_content', $post->post_content),
                        'excerpt'         => $post->post_excerpt,
                        'featured_img'    => $this->resolve_image_url($post->ID),
                        'harga_asli'      => get_post_meta($post->ID, 'harga_asli', true),
                        'harga_promo'     => get_post_meta($post->ID, 'harga_promo', true),
                        'diskon_persen'   => get_post_meta($post->ID, 'diskon_persen', true),
                        'tanggal_mulai'   => get_post_meta($post->ID, 'tanggal_mulai', true),
                        'tanggal_selesai' => get_post_meta($post->ID, 'tanggal_selesai', true),
                        'gallery'         => $this->resolve_gallery_urls($post->ID),
                    ];
                }
            }
            set_transient($transient_key, $promosis, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($promosis);
    }

    public function get_promosi_item($request) {
        $slug = sanitize_text_field($request->get_param('slug'));
        $transient_key = 'bw_promosi_' . md5($slug);
        $promo = get_transient($transient_key);

        if (false === $promo) {
            $args = [
                'post_type'      => 'promosi',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);

            if (empty($query->posts)) {
                return new WP_Error('not_found', 'Promosi tidak ditemukan', ['status' => 404]);
            }

            $post = $query->posts[0];
            $promo = [
                'id'              => $post->ID,
                'title'           => $post->post_title,
                'slug'            => $post->post_name,
                'content'         => apply_filters('the_content', $post->post_content),
                'excerpt'         => $post->post_excerpt,
                'featured_img'    => $this->resolve_image_url($post->ID),
                'harga_asli'      => get_post_meta($post->ID, 'harga_asli', true),
                'harga_promo'     => get_post_meta($post->ID, 'harga_promo', true),
                'diskon_persen'   => get_post_meta($post->ID, 'diskon_persen', true),
                'tanggal_mulai'   => get_post_meta($post->ID, 'tanggal_mulai', true),
                'tanggal_selesai' => get_post_meta($post->ID, 'tanggal_selesai', true),
                'gallery'         => $this->resolve_gallery_urls($post->ID),
            ];
            set_transient($transient_key, $promo, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($promo);
    }

    public function get_paket_services($request) {
        $transient_key = 'bw_paket_service_full_v1';
        $items = get_transient($transient_key);

        if (false === $items) {
            $args = [
                'post_type'      => 'paket_service',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);
            $items = [];
            foreach ($query->posts as $post) {
                $items[] = [
                    'id'             => $post->ID,
                    'title'          => $post->post_title,
                    'slug'           => $post->post_name,
                    'content'        => apply_filters('the_content', $post->post_content),
                    'excerpt'        => $post->post_excerpt,
                    'featured_img'   => $this->resolve_image_url($post->ID),
                    'harga_paket'    => get_post_meta($post->ID, 'harga_paket', true),
                    'durasi_paket'   => get_post_meta($post->ID, 'durasi_paket', true),
                    'garansi_paket'  => get_post_meta($post->ID, 'garansi_paket', true),
                    'items_paket'    => get_post_meta($post->ID, 'items_paket', true),
                    'jenis_kendaraan'=> get_post_meta($post->ID, 'jenis_kendaraan', true),
                    'ulasan_paket'   => get_post_meta($post->ID, 'ulasan_paket', true),
                    'gallery'        => $this->resolve_gallery_urls($post->ID),
                ];
            }
            set_transient($transient_key, $items, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($items);
    }

    public function get_paket_service_item($request) {
        $slug = sanitize_text_field($request->get_param('slug'));
        $transient_key = 'bw_paket_service_' . md5($slug);
        $item = get_transient($transient_key);

        if (false === $item) {
            $args = [
                'post_type'      => 'paket_service',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);

            if (empty($query->posts)) {
                return new WP_Error('not_found', 'Paket Service tidak ditemukan', ['status' => 404]);
            }

            $post = $query->posts[0];
            $item = [
                'id'             => $post->ID,
                'title'          => $post->post_title,
                'slug'           => $post->post_name,
                'content'        => apply_filters('the_content', $post->post_content),
                'excerpt'        => $post->post_excerpt,
                'featured_img'   => $this->resolve_image_url($post->ID),
                'harga_paket'    => get_post_meta($post->ID, 'harga_paket', true),
                'durasi_paket'   => get_post_meta($post->ID, 'durasi_paket', true),
                'garansi_paket'  => get_post_meta($post->ID, 'garansi_paket', true),
                'items_paket'    => get_post_meta($post->ID, 'items_paket', true),
                'jenis_kendaraan'=> get_post_meta($post->ID, 'jenis_kendaraan', true),
                'ulasan_paket'   => get_post_meta($post->ID, 'ulasan_paket', true),
                'gallery'        => $this->resolve_gallery_urls($post->ID),
                'price'          => get_post_meta($post->ID, 'price', true),
                'previousPrice'  => get_post_meta($post->ID, 'previousPrice', true),
                'status'         => get_post_meta($post->ID, 'status', true),
                'availability'   => get_post_meta($post->ID, 'availability', true),
                'bestSeller'     => get_post_meta($post->ID, 'bestSeller', true),
                'sku'            => get_post_meta($post->ID, 'sku', true),
                'reviews'        => get_post_meta($post->ID, 'reviews', true),
                'soldUnits'      => get_post_meta($post->ID, 'soldUnits', true),
                'paket_category' => wp_get_post_terms($post->ID, 'paket_category', ['fields' => 'all']),
                'paket_tag'      => wp_get_post_terms($post->ID, 'paket_tag', ['fields' => 'all']),
            ];
            set_transient($transient_key, $item, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($item);
    }

    public function get_layanan_spesialis($request) {
        // v1.7.0: bumped transient key to force cache refresh after FAQ fields added
        $transient_key = 'bw_layanan_spesialis_full_v2';
        $items = get_transient($transient_key);

        if (false === $items) {
            $args = [
                'post_type'      => 'layanan_spesialis',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);
            $items = [];
            foreach ($query->posts as $post) {
                // Decode FAQ JSON — return as array, or empty array if not set
                $faq_raw = get_post_meta($post->ID, 'bw_spesialis_faq', true);
                $faq_array = [];
                if (!empty($faq_raw)) {
                    $decoded = json_decode($faq_raw, true);
                    if (is_array($decoded)) {
                        $faq_array = $decoded;
                    }
                }

                $items[] = [
                    'id'                   => $post->ID,
                    'title'                => $post->post_title,
                    'slug'                 => $post->post_name,
                    'content'              => apply_filters('the_content', $post->post_content),
                    'excerpt'              => $post->post_excerpt,
                    'featured_img'         => $this->resolve_image_url($post->ID),
                    'manfaat_spesialis'    => get_post_meta($post->ID, 'manfaat_spesialis', true),
                    'teknologi_spesialis'  => get_post_meta($post->ID, 'teknologi_spesialis', true),
                    'gallery'              => $this->resolve_gallery_urls($post->ID),
                    'bw_spesialis_faq'     => $faq_array,
                    'bw_spesialis_faq_image' => get_post_meta($post->ID, 'bw_spesialis_faq_image', true),
                ];
            }
            set_transient($transient_key, $items, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($items);
    }

    public function get_layanan_spesialis_item($request) {
        $slug = sanitize_text_field($request->get_param('slug'));
        // v1.7.0: bumped transient version to force cache refresh after FAQ fields added
        $transient_key = 'bw_layanan_spesialis_v2_' . md5($slug);
        $item = get_transient($transient_key);

        if (false === $item) {
            $args = [
                'post_type'      => 'layanan_spesialis',
                'name'           => $slug,
                'posts_per_page' => 1,
                'post_status'    => 'publish',
            ];
            $query = new WP_Query($args);

            if (empty($query->posts)) {
                return new WP_Error('not_found', 'Layanan Spesialis tidak ditemukan', ['status' => 404]);
            }

            $post = $query->posts[0];

            // Decode FAQ JSON — return as array so frontend can use directly
            $faq_raw = get_post_meta($post->ID, 'bw_spesialis_faq', true);
            $faq_array = [];
            if (!empty($faq_raw)) {
                $decoded = json_decode($faq_raw, true);
                if (is_array($decoded)) {
                    $faq_array = $decoded;
                }
            }

            $item = [
                'id'                     => $post->ID,
                'title'                  => $post->post_title,
                'slug'                   => $post->post_name,
                'content'                => apply_filters('the_content', $post->post_content),
                'excerpt'                => $post->post_excerpt,
                'featured_img'           => $this->resolve_image_url($post->ID),
                'manfaat_spesialis'      => get_post_meta($post->ID, 'manfaat_spesialis', true),
                'teknologi_spesialis'    => get_post_meta($post->ID, 'teknologi_spesialis', true),
                'gallery'                => $this->resolve_gallery_urls($post->ID),
                'spesialis_category'     => wp_get_post_terms($post->ID, 'spesialis_category', ['fields' => 'all']),
                'spesialis_tag'          => wp_get_post_terms($post->ID, 'spesialis_tag', ['fields' => 'all']),
                // FAQ fields — added in v1.7.0
                'bw_spesialis_faq'       => $faq_array,
                'bw_spesialis_faq_image' => get_post_meta($post->ID, 'bw_spesialis_faq_image', true),
            ];
            set_transient($transient_key, $item, 12 * HOUR_IN_SECONDS);
        }
        return rest_ensure_response($item);
    }

public function handle_ai_chat($request) {
        // Rate limiting: max 20 requests per minute per IP
        $client_ip = $this->get_client_ip();
        $rate_key = 'bw_ai_rate_' . md5($client_ip);
        $rate_limit = get_transient($rate_key);

        if (false === $rate_limit) {
            // First request in window
            set_transient($rate_key, 1, 60); // 60 second window
        } elseif ($rate_limit >= 20) {
            return new WP_Error('rate_limit_exceeded', 'Terlalu banyak permintaan. Coba lagi dalam beberapa menit.', ['status' => 429]);
        } else {
            // Increment counter
            set_transient($rate_key, $rate_limit + 1, 60);
        }

        $params = $request->get_json_params();
        $messages = isset($params['messages']) ? $params['messages'] : [];

        if (empty($messages)) {
            return new WP_Error('empty_messages', 'Pesan tidak boleh kosong.', ['status' => 400]);
        }

        $last_message = end($messages);
        $user_text = isset($last_message['content']) ? sanitize_text_field($last_message['content']) : '';

        $chat_history = "";
        if (count($messages) > 1) {
            $recent_messages = array_slice($messages, -4, 3);
            foreach ($recent_messages as $msg) {
                $role = ($msg['role'] === 'user') ? 'User' : 'Asisten';
                $content = sanitize_text_field($msg['content']);
                $chat_history .= "{$role}: {$content}\n";
            }
        }
        $prompt = "Riwayat Obrolan:\n" . $chat_history . "\nUser: " . $user_text . "\nAsisten:";
        if (empty($chat_history)) { $prompt = $user_text; }

        $services_text = $this->get_services_for_ai_context();
        $promos_text = $this->get_promos_for_ai_context();
        $system_prompt = "Kamu adalah asisten AI untuk Bengkel Wiguna - bengkel mobil one-stop service di Depok, Jawa Barat. Jawab dengan ramah & profesional dalam Bahasa Indonesia.\n\nLAYANAN:\n" . $services_text . "\n\nPROMOSI AKTIF:\n" . $promos_text . "\n\nJika ditanya layanan yang tidak ada, sarankan Hubungi WA +62 878-1777-3888.";

        $provider = get_option('bw_ai_provider', 'gemini');

        // Try primary provider
        if ($provider === 'gemini' || $provider === 'both') {
            $result = $this->chat_via_gemini($prompt, $system_prompt);
            if (!is_wp_error($result)) {
                return rest_ensure_response(['reply' => $result, 'provider' => 'gemini']);
            }
            if ($provider === 'gemini') return $result;
        }

        // Try OpenAI fallback
        if ($provider === 'openai' || $provider === 'both') {
            $result = $this->chat_via_openai($prompt, $system_prompt);
            if (!is_wp_error($result)) {
                return rest_ensure_response(['reply' => $result, 'provider' => 'openai']);
            }
            return $result;
        }

        return new WP_Error('no_provider', 'Tidak ada AI provider dikonfigurasi.');
    }

    private function chat_via_gemini($prompt, $system_instruction) {
        if (class_exists('\WordPress\AiClient\AiClient')) {
            try {
                $client = \WordPress\AiClient\AiClient::prompt($prompt)
                    ->usingSystemInstruction($system_instruction);
                if (class_exists('\WordPress\AiClient\Providers\Google')) {
                    $model = get_option('bw_gemini_model', 'gemini-2.0-flash');
                    $client->usingModel(\WordPress\AiClient\Providers\Google::model($model));
                }
                $result = $client->generateText();
                if (!empty($result)) return $result;
            } catch (\Exception $e) {
                error_log('BW Chat Gemini SDK: ' . $e->getMessage());
            }
        }
        $api_key = $this->get_gemini_api_key_for_rest();
        if (empty($api_key)) return new WP_Error('no_key', 'Gemini API key tidak dikonfigurasi.');
        $model = get_option('bw_gemini_model', 'gemini-2.0-flash');
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$api_key}";
        $response = wp_remote_post($url, [
            'method' => 'POST',
            'headers' => ['Content-Type' => 'application/json'],
            'body' => json_encode([
                'contents' => [['parts' => [['text' => $prompt]]]],
                'systemInstruction' => ['parts' => [['text' => $system_instruction]]],
                'generationConfig' => ['temperature' => 0.7],
            ]),
            'timeout' => 30,
        ]);
        if (is_wp_error($response)) return $response;
        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);
        if ($code !== 200) return new WP_Error('gemini_error', $body['error']['message'] ?? "Gemini HTTP {$code}");
        $text = $body['candidates'][0]['content']['parts'][0]['text'] ?? null;
        if (empty($text)) return new WP_Error('gemini_empty', 'Gemini response empty.');
        return $text;
    }

    private function chat_via_openai($prompt, $system_instruction) {
        $api_key = get_option('bw_openai_api_key', '');
        if (empty($api_key)) return new WP_Error('no_openai_key', 'OpenAI API key tidak dikonfigurasi.');
        $model = get_option('bw_openai_model', 'gpt-4o-mini');
        $url = 'https://api.openai.com/v1/chat/completions';
        $response = wp_remote_post($url, [
            'method' => 'POST',
            'headers' => ['Content-Type' => 'application/json', 'Authorization' => 'Bearer ' . $api_key],
            'body' => json_encode([
                'model' => $model,
                'messages' => [
                    ['role' => 'system', 'content' => $system_instruction],
                    ['role' => 'user', 'content' => $prompt],
                ],
                'temperature' => 0.7,
            ]),
            'timeout' => 30,
        ]);
        if (is_wp_error($response)) return $response;
        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);
        if ($code !== 200) return new WP_Error('openai_error', $body['error']['message'] ?? "OpenAI HTTP {$code}");
        $text = $body['choices'][0]['message']['content'] ?? null;
        if (empty($text)) return new WP_Error('openai_empty', 'OpenAI response empty.');
        return $text;
    }

    private function get_gemini_api_key_for_rest() {
        $key = get_option('bw_gemini_api_key', '');
        if (!empty($key)) return $key;
        $key = get_option('aica_gemini_api_key', '');
        if (!empty($key)) return $key;
        return defined('GEMINI_API_KEY') ? GEMINI_API_KEY : '';
    }

    /**
     * Get client IP address for rate limiting
     */
    private function get_client_ip() {
        $ip_keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'];
        foreach ($ip_keys as $key) {
            if (!empty($_SERVER[$key])) {
                $ip = sanitize_text_field($_SERVER[$key]);
                // Handle comma-separated IPs (X-Forwarded-For)
                if (strpos($ip, ',') !== false) {
                    $ip = trim(explode(',', $ip)[0]);
                }
                // Basic IP validation
                if (filter_var($ip, FILTER_VALIDATE_IP)) {
                    return $ip;
                }
            }
        }
        return '0.0.0.0';
    }
    
    private function get_services_for_ai_context() {
        $args_services = [
            'post_type' => 'services',
            'posts_per_page' => -1,
            'post_status' => 'publish',
        ];
        $query_services = new WP_Query($args_services);
        $services_data = [];
        foreach ($query_services->posts as $post) {
            $harga = get_post_meta($post->ID, 'harga', true);
            $services_data[] = "- " . $post->post_title . ($harga ? " (Mulai dari: $harga)" : "");
        }
        return empty($services_data) ? "Belum ada data layanan." : implode("\n", $services_data);
    }
    
    private function get_promos_for_ai_context() {
        $today = date('Y-m-d');
        $args_promos = [
            'post_type' => 'promosi',
            'posts_per_page' => -1,
            'post_status' => 'publish',
        ];
        $query_promos = new WP_Query($args_promos);
        $promos_data = [];
        foreach ($query_promos->posts as $post) {
            $tanggal_selesai = get_post_meta($post->ID, 'tanggal_selesai', true);
            $is_active = empty($tanggal_selesai) || strtotime($tanggal_selesai) >= strtotime($today);
            if ($is_active) {
                $harga_promo = get_post_meta($post->ID, 'harga_promo', true);
                $promos_data[] = "- " . $post->post_title . ($harga_promo ? " (Harga Promo: $harga_promo)" : "");
            }
        }
        return empty($promos_data) ? "Tidak ada promosi aktif saat ini." : implode("\n", $promos_data);
    }

    public function get_debug_logs($request) {
        // Get secret from WordPress options (not hardcoded)
        $stored_secret = get_option('bw_debug_logs_secret', '');
        $provided_secret = sanitize_text_field($request->get_param('secret'));

        // Use timing-safe comparison, return generic error if invalid
        if (empty($stored_secret)) {
            return new WP_Error('forbidden', 'Access denied', ['status' => 403]);
        }

        if (!hash_equals($stored_secret, $provided_secret)) {
            return new WP_Error('forbidden', 'Access denied', ['status' => 403]);
        }
        
        $abilities_debug = '';
        $auth_debug = '';
        
        $abilities_file = BW_HEADLESS_PLUGIN_DIR . 'abilities_debug.txt';
        $auth_file = BW_HEADLESS_PLUGIN_DIR . 'auth_debug.txt';
        
        if (file_exists($abilities_file)) {
            $abilities_debug = file_get_contents($abilities_file);
        }
        if (file_exists($auth_file)) {
            $auth_debug = file_get_contents($auth_file);
        }
        
        return rest_ensure_response([
            'abilities_debug' => $abilities_debug,
            'auth_debug' => $auth_debug,
            'active_actions' => [
                'has_wp_register_ability' => function_exists('wp_register_ability'),
                'has_wp_register_ability_category' => function_exists('wp_register_ability_category'),
                'has_ai_client' => class_exists('\WordPress\AiClient\AiClient'),
            ]
        ]);
    }

    /**
     * Manual revalidation handler
     */
    public function handle_manual_revalidate($request) {
        global $wpdb;

        $params = $request->get_json_params();
        $paths = isset($params['paths']) && is_array($params['paths']) ? $params['paths'] : [];
        $tags = isset($params['tags']) && is_array($params['tags']) ? $params['tags'] : [];
        $clear_transients = isset($params['clear_transients']) ? (bool)$params['clear_transients'] : true;

        $results = ['success' => true, 'paths' => [], 'tags' => [], 'transients_cleared' => 0, 'errors' => []];

        // Clear WordPress transients if requested
        if ($clear_transients) {
            $cleared = 0;
            $cleared += $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_%'");
            $results['transients_cleared'] = $cleared;
        }

        // Trigger ISR via ISR class
        $isr = new BW_ISR_Revalidation();
        $revalidate_result = $isr->manual_revalidate($paths, $tags);

        if (is_wp_error($revalidate_result)) {
            $results['success'] = false;
            $results['errors'][] = $revalidate_result->get_error_message();
        } elseif (is_array($revalidate_result)) {
            $results['revalidate_response'] = $revalidate_result;
        }

        return rest_ensure_response($results);
    }

    /**
     * Health check endpoint
     */
    public function health_check($request) {
        $checks = [];
        $all_healthy = true;

        // Check WordPress version
        global $wp_version;
        $checks['wordpress'] = [
            'status' => 'ok',
            'version' => $wp_version,
        ];

        // Check REST API
        $checks['rest_api'] = [
            'status' => 'ok',
            'url' => rest_url(),
        ];

        // Check custom endpoints
        $endpoints = [
            'services' => '/wp-json/bw/v1/services-full',
            'promosi' => '/wp-json/bw/v1/promosi-active',
            'menu' => '/wp-json/bw/v1/menu/primary',
            'homepage' => '/wp-json/bw/v1/homepage-settings',
        ];

        foreach ($endpoints as $name => $endpoint) {
            $response = wp_remote_get(home_url($endpoint), ['timeout' => 10]);
            if (is_wp_error($response)) {
                $checks['endpoints'][$name] = ['status' => 'error', 'message' => $response->get_error_message()];
                $all_healthy = false;
            } else {
                $code = wp_remote_retrieve_response_code($response);
                $checks['endpoints'][$name] = [
                    'status' => $code === 200 ? 'ok' : 'error',
                    'http_code' => $code,
                ];
                if ($code !== 200) $all_healthy = false;
            }
        }

        // Check Next.js site URL configuration
        $nextjs_url = get_option('bw_nextjs_site_url', '');
        $nextjs_secret = get_option('bw_nextjs_revalidate_secret', '');
        $checks['nextjs_integration'] = [
            'site_url_configured' => !empty($nextjs_url),
            'secret_configured' => !empty($nextjs_secret),
            'revalidate_enabled' => get_option('bw_revalidate_enabled', '1') === '1',
            'site_url' => $nextjs_url ?: '(not set)',
        ];

        // Check custom post types
        $cpts = ['services', 'promosi', 'paket_service', 'layanan_spesialis'];
        $counts = [];
        foreach ($cpts as $cpt) {
            $count = wp_count_posts($cpt);
            $counts[$cpt] = $count->publish ?? 0;
        }
        $checks['post_types'] = $counts;

        return rest_ensure_response([
            'healthy' => $all_healthy,
            'timestamp' => current_time('mysql'),
            'checks' => $checks,
        ]);
    }

    /**
     * Get WordPress Navigation Menu by location
     * Supports: WP Navigation API (WP 6.5+), WP REST API Menus plugin, fallback to WP menus query
     */
    public function get_menu_by_location($request) {
        $location = sanitize_key($request->get_param('location'));
        $site_url = get_option('home');

        // Strategy 1: WordPress Navigation API (WP 6.5+ built-in)
        if (function_exists('wp_get_nav_menu_name') && function_exists('wp_get_nav_menus')) {
            $menus = wp_get_nav_menus(['hide_empty' => true]);
            foreach ($menus as $menu) {
                $locations = get_nav_menu_locations();
                foreach ($locations as $loc => $menu_id) {
                    if ($loc === $location && $menu_id == $menu->term_id) {
                        $items = $this->get_wp_menu_items($menu->term_id);
                        if (!empty($items)) {
                            return rest_ensure_response([
                                'source' => 'wp_navigation_api',
                                'location' => $location,
                                'menu_name' => $menu->name,
                                'items' => $items,
                            ]);
                        }
                    }
                }
            }
            // If no location matches, try to match by menu slug or name
            $menu_obj = wp_get_nav_menu_object($location);
            if ($menu_obj) {
                $items = $this->get_wp_menu_items($menu_obj->term_id);
                if (!empty($items)) {
                    return rest_ensure_response([
                        'source' => 'wp_navigation_api_by_slug',
                        'location' => $location,
                        'menu_name' => $menu_obj->name,
                        'items' => $items,
                    ]);
                }
            }
        }

        // Strategy 2: Fallback - Direct query WordPress menus via get_terms
        $fallback_items = $this->get_menu_fallback($location, $site_url);
        if (!empty($fallback_items)) {
            return rest_ensure_response([
                'source' => 'wp_nav_menu_fallback',
                'location' => $location,
                'menu_name' => ucfirst(str_replace('-', ' ', $location)),
                'items' => $fallback_items,
            ]);
        }

        // Strategy 3: Try custom stored menu option (for menus created via plugin)
        $stored_menu = get_option('bw_custom_menu_' . $location, []);
        if (!empty($stored_menu)) {
            return rest_ensure_response([
                'source' => 'bw_custom_menu_option',
                'location' => $location,
                'menu_name' => $stored_menu['name'] ?? ucfirst($location),
                'items' => $stored_menu['items'] ?? [],
            ]);
        }

        // Strategy 4: WP REST API Menus plugin compatibility
        $plugin_menus = $this->try_plugin_menu($location);
        if ($plugin_menus !== null) {
            return rest_ensure_response($plugin_menus);
        }

        // Strategy 5: Ultimate fallback — try to get ANY published menu
        $any_menu = $this->get_any_available_menu($site_url);
        if ($any_menu !== null) {
            return rest_ensure_response($any_menu);
        }

        // Strategy 6: Return default static menu for common locations
        $default_menu = $this->get_default_static_menu($location, $site_url);
        return rest_ensure_response([
            'source' => 'static_fallback',
            'location' => $location,
            'menu_name' => ucfirst(str_replace('-', ' ', $location)),
            'items' => $default_menu,
            'message' => 'Using default menu. Configure menu in Appearance > Menus if needed.',
        ]);
    }

    /**
     * Get menu fallback via direct WP menus query
     */
    private function get_menu_fallback($location, $site_url) {
        // Get all menus and find one matching the location
        $menus = wp_get_nav_menus(['hide_empty' => true]);

        // First, try to find menu assigned to this location
        $locations = get_nav_menu_locations();
        if (isset($locations[$location])) {
            $items = $this->get_wp_menu_items($locations[$location]);
            if (!empty($items)) return $items;
        }

        // If no location match, try to find menu by slug containing the location name
        foreach ($menus as $menu) {
            if (stripos($menu->slug, $location) !== false || stripos($menu->name, $location) !== false) {
                $items = $this->get_wp_menu_items($menu->term_id);
                if (!empty($items)) return $items;
            }
        }

        // Last resort: return first available menu
        if (!empty($menus)) {
            $items = $this->get_wp_menu_items($menus[0]->term_id);
            return $items;
        }

        return [];
    }

    /**
     * Get any available menu as last resort
     */
    private function get_any_available_menu($site_url) {
        $menus = wp_get_nav_menus(['hide_empty' => true]);
        if (empty($menus)) return null;

        foreach ($menus as $menu) {
            $items = $this->get_wp_menu_items($menu->term_id);
            if (!empty($items)) {
                return [
                    'source' => 'wp_any_available_menu',
                    'location' => 'auto-detected',
                    'menu_name' => $menu->name,
                    'items' => $items,
                ];
            }
        }
        return null;
    }

    /**
     * Default static menu for common locations when no WP menu exists
     */
    private function get_default_static_menu($location, $site_url) {
        $base_path = str_replace($site_url, '', home_url('/'));
        $menus = [
            'primary' => [
                ['name' => 'Beranda', 'path' => '/'],
                ['name' => 'Layanan', 'path' => '/services/'],
                ['name' => 'Promosi', 'path' => '/promosi/'],
                ['name' => 'Tentang Kami', 'path' => '/tentang-kami/'],
                ['name' => 'Kontak', 'path' => '/#contact'],
            ],
            'footer' => [
                ['name' => 'Beranda', 'path' => '/'],
                ['name' => 'Layanan', 'path' => '/services/'],
                ['name' => 'Promosi', 'path' => '/promosi/'],
                ['name' => 'Kontak', 'path' => '/#contact'],
            ],
        ];

        $menu_items = $menus[$location] ?? $menus['primary'];
        $result = [];
        foreach ($menu_items as $index => $item) {
            $result[] = [
                'id' => 1000 + $index,
                'name' => $item['name'],
                'path' => $item['path'],
                'label' => $item['name'],
                'children' => [],
            ];
        }
        return $result;
    }

    /**
     * Transform WordPress nav menu items to frontend format
     */
    private function get_wp_menu_items($menu_id) {
        $menu_items = wp_get_nav_menu_items($menu_id, ['hide_empty' => true]);
        if (empty($menu_items)) return [];

        $site_url = get_option('home');
        $items = [];
        $item_map = [];

        foreach ($menu_items as $menu_item) {
            $url = $menu_item->url;
            // Convert absolute URLs to path-relative
            if (strpos($url, $site_url) === 0) {
                $url = str_replace($site_url, '', $url);
            }
            // Remove trailing slash if not root
            if ($url !== '/' && str_ends_with($url, '/')) {
                $url = rtrim($url, '/');
            }

            $item = [
                'id' => $menu_item->ID,
                'name' => $menu_item->title,
                'path' => $url,
                'label' => $menu_item->title,
                'title' => $menu_item->attr_title ?: '',
                'target' => $menu_item->target ?: '',
                'classes' => $menu_item->classes ?: [],
                'menu_item_parent' => (int) $menu_item->menu_item_parent,
            ];

            $item_map[$menu_item->ID] = $item;
        }

        // Build tree structure
        $root_items = [];
        foreach ($item_map as $id => $item) {
            $parent = $item['menu_item_parent'];
            if ($parent === 0) {
                $root_items[] = $item;
            } else {
                if (!isset($item_map[$parent]['children'])) {
                    $item_map[$parent]['children'] = [];
                }
                $item_map[$parent]['children'][] = $item;
            }
        }

        // Clean up helper fields
        foreach ($root_items as &$item) {
            unset($item['menu_item_parent']);
            if (isset($item['children'])) {
                foreach ($item['children'] as &$child) {
                    unset($child['menu_item_parent']);
                }
            }
        }

        return $root_items;
    }

    /**
     * Try fetching menu via WP REST API Menus plugin
     */
    private function try_plugin_menu($location) {
        // Try WP REST API Menus plugin endpoint
        $response = wp_remote_get(
            add_query_arg('location', $location, rest_url('wp/v2/menus/' . $location)),
            ['timeout' => 5]
        );

        if (is_wp_error($response)) return null;

        $body = json_decode(wp_remote_retrieve_body($response), true);
        if (empty($body) || isset($body['code'])) return null;

        // Transform plugin format to our standard format
        $items = [];
        foreach ($body as $item) {
            $url = $item['url'] ?? '';
            $site_url = get_option('home');
            if (strpos($url, $site_url) === 0) {
                $url = str_replace($site_url, '', $url);
            }

            $items[] = [
                'id' => $item['id'] ?? 0,
                'name' => $item['title'] ?? '',
                'path' => $url,
                'label' => $item['title'] ?? '',
                'children' => [],
            ];
        }

        return [
            'source' => 'wp_rest_api_menus',
            'location' => $location,
            'items' => $items,
        ];
    }
}
