<?php
/**
 * Headless CMS Abilities Registration
 */

class BW_Abilities {
    public function init() {
        add_action('wp_abilities_api_categories_init', [$this, 'register_categories']);
        add_action('wp_abilities_api_init', [$this, 'register_abilities']);
    }

    public function register_categories() {
        if (function_exists('wp_register_ability_category')) {
            wp_register_ability_category('bw', [
                'label'       => __('Headless Operations', 'bw-headless-api'),
                'description' => __('Manage Headless API and caching.', 'bw-headless-api'),
            ]);
        }
    }

    public function register_abilities() {
        $log_file = BW_HEADLESS_PLUGIN_DIR . 'abilities_debug.txt';
        $current_hook = current_action();
        $msg = "[" . date('Y-m-d H:i:s') . "] Hook: {$current_hook}\n";
        
        if (!function_exists('wp_register_ability')) {
            $msg .= "ERROR: wp_register_ability function does not exist.\n";
            file_put_contents($log_file, $msg, FILE_APPEND);
            return;
        }
        $msg .= "SUCCESS: wp_register_ability exists.\n";

        $res1 = wp_register_ability('bw/flush-cache', [
            'label'       => __('Flush BW Caches', 'bw-headless-api'),
            'description' => __('Ability to clear custom REST API transient caches.', 'bw-headless-api'),
            'category'    => 'bw',
            'permission_callback' => function() {
                return current_user_can('manage_options');
            },
            'meta'        => [
                'show_in_rest' => true,
                'annotations'  => [
                    'readonly'    => false,
                    'destructive' => true,
                    'idempotent'  => true,
                ],
            ],
            'input_schema' => [
                'type' => 'object',
                'properties' => [],
            ],
            'execute_callback' => [$this, 'execute_flush_bw_cache']
        ]);
        $msg .= "Register bw/flush-cache: " . (is_wp_error($res1) ? $res1->get_error_message() : json_encode($res1)) . "\n";

        $res2 = wp_register_ability('bw/get-service-portfolio-data', [
            'label'       => __('Get Optimized Service Portfolio Data', 'bw-headless-api'),
            'description' => __('Fetches highly optimized service data including Next/Prev slugs for Portfolio Home-05 layout.', 'bw-headless-api'),
            'category'    => 'bw',
            'permission_callback' => '__return_true',
            'meta'        => [
                'show_in_rest' => true,
                'readonly'     => true,
                'annotations'  => [
                    'readonly'    => true,
                    'destructive' => false,
                    'idempotent'  => true,
                ],
            ],
            'input_schema' => [
                'type'       => 'object',
                'properties' => [
                    'slug' => ['type' => 'string'],
                ],
                'required'   => ['slug'],
            ],
            'execute_callback' => [$this, 'execute_get_service_portfolio_data']
        ]);
        $msg .= "Register bw/get-service-portfolio-data: " . (is_wp_error($res2) ? $res2->get_error_message() : json_encode($res2)) . "\n";

        $res3 = wp_register_ability('bw/ai-create-cpt', [
            'label'       => __('AI Create CPT', 'bw-headless-api'),
            'description' => __('Create a new Service or Promotion with metadata directly from AI generator. Includes optional Featured Image generation.', 'bw-headless-api'),
            'category'    => 'bw',
            'permission_callback' => function() {
                return current_user_can('publish_posts');
            },
            'meta'        => [
                'show_in_rest' => true,
                'annotations'  => [
                    'readonly'    => false,
                    'destructive' => false,
                    'idempotent'  => false,
                ],
            ],
            'input_schema' => [
                'type'       => 'object',
                'properties' => [
                    'post_type' => ['type' => 'string'],
                    'title'     => ['type' => 'string'],
                    'content'   => ['type' => 'string'],
                    'excerpt'   => ['type' => 'string'],
                    'meta'      => ['type' => 'object'],
                    'seo_title' => ['type' => 'string'],
                    'seo_description' => ['type' => 'string'],
                    'seo_focus_keyword' => ['type' => 'string'],
                    'schema_markup' => ['type' => 'string'],
                    'generate_image' => ['type' => 'boolean', 'default' => false],
                    'image_base64' => ['type' => 'string'],
                ],
                'required'   => ['post_type', 'title', 'content'],
            ],
            'execute_callback' => [$this, 'execute_ai_create_cpt']
        ]);
        $msg .= "Register bw/ai-create-cpt: " . (is_wp_error($res3) ? $res3->get_error_message() : json_encode($res3)) . "\n";

        $res4 = wp_register_ability('bw/ai-generate-cpt-content', [
            'label'       => __('AI Generate CPT Content', 'bw-headless-api'),
            'description' => __('Generate Layanan or Promosi content using AI with Bengkel Wiguna domain context.', 'bw-headless-api'),
            'category'    => 'bw',
            'permission_callback' => function() {
                return current_user_can('edit_posts');
            },
            'meta'        => [
                'show_in_rest' => true,
                'readonly'     => true,
                'annotations'  => [
                    'readonly'    => true,
                    'destructive' => false,
                    'idempotent'  => true,
                ],
            ],
            'input_schema' => [
                'type'       => 'object',
                'properties' => [
                    'post_type' => [
                        'type' => 'string',
                        'enum' => ['services', 'promosi', 'competitor_comparison', 'programmatic_seo'],
                    ],
                    'user_request' => [
                        'type' => 'string',
                    ],
                    'language' => [
                        'type' => 'string',
                        'default' => 'id',
                    ],
                ],
                'required' => ['post_type', 'user_request'],
            ],
            'execute_callback' => [$this, 'execute_ai_generate_cpt_content']
        ]);
        $msg .= "Register bw/ai-generate-cpt-content: " . (is_wp_error($res4) ? $res4->get_error_message() : json_encode($res4)) . "\n";
        
        $msg .= "All abilities registered.\n";
        file_put_contents($log_file, $msg, FILE_APPEND);
    }

    public function execute_flush_bw_cache($input) {
        if (!current_user_can('manage_options')) {
            return new WP_Error('rest_forbidden', __('You do not have permission to do this.', 'bw-headless-api'), ['status' => 403]);
        }
        delete_transient('bw_services_full_v3');
        delete_transient('bw_promosi_active_v3');
        
        global $wpdb;
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_service_%'");
        $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '_transient_bw_promosi_%'");

        return true;
    }

    public function execute_get_service_portfolio_data($input) {
        $slug = sanitize_text_field($input['slug']);
        
        $args = [
            'post_type'      => 'services',
            'posts_per_page' => -1,
            'post_status'    => 'publish',
            'orderby'        => 'date',
            'order'          => 'DESC'
        ];
        $query = new WP_Query($args);
        $posts = $query->posts;
        
        $currentIndex = -1;
        foreach ($posts as $index => $post) {
            if ($post->post_name === $slug) {
                $currentIndex = $index;
                break;
            }
        }
        
        if ($currentIndex === -1) {
            return new WP_Error('not_found', 'Service not found', ['status' => 404]);
        }
        
        $currentPost = $posts[$currentIndex];
        $prevPost = isset($posts[$currentIndex + 1]) ? $posts[$currentIndex + 1] : null; // Older
        $nextPost = isset($posts[$currentIndex - 1]) ? $posts[$currentIndex - 1] : null; // Newer
        
        $img_url = get_the_post_thumbnail_url($currentPost->ID, 'full') ?: get_the_post_thumbnail_url($currentPost->ID, 'large');
        
        $gallery_meta = get_post_meta($currentPost->ID, 'bw_gallery_images', true);
        $gallery_urls = [];
        if (!empty($gallery_meta)) {
            $gallery_ids = explode(',', $gallery_meta);
            foreach ($gallery_ids as $gid) {
                if (empty($gid)) continue;
                $g_url = wp_get_attachment_image_url($gid, 'full');
                if ($g_url) {
                    $gallery_urls[] = $g_url;
                }
            }
        }
        
        return [
            'currentItem' => [
                'id'           => $currentPost->ID,
                'title'        => $currentPost->post_title,
                'slug'         => $currentPost->post_name,
                'content'      => apply_filters('the_content', $currentPost->post_content),
                'excerpt'      => $currentPost->post_excerpt,
                'featured_img' => $img_url,
                'harga'        => get_post_meta($currentPost->ID, 'harga', true) ?: 'Hubungi Kami',
                'durasi'       => get_post_meta($currentPost->ID, 'durasi', true) ?: 'Tergantung Kondisi',
                'gallery'      => $gallery_urls,
            ],
            'prevId'     => $prevPost ? $prevPost->post_name : null,
            'nextId'     => $nextPost ? $nextPost->post_name : null,
            'isPrevItem' => $prevPost ? true : false,
            'isNextItem' => $nextPost ? true : false,
        ];
    }

    public function execute_ai_create_cpt($input) {
        if (!current_user_can('publish_posts')) {
            return new WP_Error('rest_forbidden', __('You do not have permission to publish posts.', 'bw-headless-api'), ['status' => 403]);
        }

        $post_type = sanitize_text_field($input['post_type']);
        if (!in_array($post_type, ['services', 'promosi'])) {
            return new WP_Error('invalid_argument', 'Hanya bisa membuat post type Layanan atau Promosi', ['status' => 400]);
        }

        $post_data = [
            'post_title'   => sanitize_text_field($input['title']),
            'post_content' => wp_kses_post($input['content']),
            'post_excerpt' => isset($input['excerpt']) ? sanitize_textarea_field($input['excerpt']) : '',
            'post_status'  => 'publish',
            'post_type'    => $post_type,
        ];

        $post_id = wp_insert_post($post_data, true);

        if (is_wp_error($post_id)) {
            return $post_id;
        }

        if (isset($input['meta']) && is_array($input['meta'])) {
            foreach ($input['meta'] as $key => $value) {
                $sanitized_key = sanitize_key($key);
                $sanitized_val = sanitize_text_field($value);
                update_post_meta($post_id, $sanitized_key, $sanitized_val);
            }
        }

        // Simpan metadata Rank Math SEO jika disediakan
        if (!empty($input['seo_title'])) {
            update_post_meta($post_id, 'rank_math_title', sanitize_text_field($input['seo_title']));
        }
        if (!empty($input['seo_description'])) {
            update_post_meta($post_id, 'rank_math_description', sanitize_text_field($input['seo_description']));
        }
        if (!empty($input['seo_focus_keyword'])) {
            update_post_meta($post_id, 'rank_math_focus_keyword', sanitize_text_field($input['seo_focus_keyword']));
        }
        if (!empty($input['schema_markup'])) {
            $schema_str = is_array($input['schema_markup']) ? wp_json_encode($input['schema_markup']) : $input['schema_markup'];
            update_post_meta($post_id, 'bw_ai_schema_markup', wp_slash($schema_str));
        }

        $image_message = "";
        $image_data = "";
        $image_message_prefix = "";
        
        // Priority 1: Use OpenAI DALL-E image from frontend if provided
        if (!empty($input['image_base64'])) {
            $image_data = $input['image_base64'];
            $image_message_prefix = " dan Featured Image AI (OpenAI DALL-E) berhasil dibuat";
        } 
        // Priority 2: Fallback to remote server-side image generation (Gemini)
        elseif (!empty($input['generate_image']) && class_exists('\WordPress\AiClient\AiClient')) {
            try {
                $image_prompt = "Fotografi profesional, sebuah gambar yang merepresentasikan layanan: " . $input['title'];
                $image_data = \WordPress\AiClient\AiClient::prompt($image_prompt)->generateImage();
                $image_message_prefix = " dan Featured Image AI (Gemini) berhasil dibuat";
            } catch (\Exception $e) {
                $image_message = " namun gagal generate Image (" . $e->getMessage() . ")";
            }
        }

        if (!empty($image_data)) {
            try {
                // Upload the base64 image to WordPress Media Library
                $upload_dir = wp_upload_dir();
                $image_name = 'ai-image-' . $post_id . '-' . time() . '.png';
                $image_file = $upload_dir['path'] . '/' . $image_name;
                $decoded_image = base64_decode($image_data);
                
                file_put_contents($image_file, $decoded_image);
                
                $filetype = wp_check_filetype($image_name, null);
                $attachment = [
                    'post_mime_type' => $filetype['type'],
                    'post_title'     => sanitize_file_name($image_name),
                    'post_content'   => '',
                    'post_status'    => 'inherit'
                ];
                
                $attach_id = wp_insert_attachment($attachment, $image_file, $post_id);
                require_once(ABSPATH . 'wp-admin/includes/image.php');
                $attach_data = wp_generate_attachment_metadata($attach_id, $image_file);
                wp_update_attachment_metadata($attach_id, $attach_data);
                
                set_post_thumbnail($post_id, $attach_id);
                $image_message = $image_message_prefix;
            } catch (\Exception $e) {
                $image_message = " namun gagal mengunggah Featured Image (" . $e->getMessage() . ")";
            }
        }

        $this->execute_flush_bw_cache([]);

        return [
            'success' => true,
            'post_id' => $post_id,
            'message' => "Berhasil mempublikasikan " . $input['title'] . $image_message
        ];
    }

    public function execute_ai_generate_cpt_content($input) {
        if (!current_user_can('edit_posts')) {
            return new WP_Error('rest_forbidden', __('You do not have permission.', 'bw-headless-api'), ['status' => 403]);
        }

        $post_type = sanitize_text_field($input['post_type']);
        $user_request = sanitize_text_field($input['user_request']);
        $language = isset($input['language']) ? sanitize_text_field($input['language']) : 'id';

        if (!class_exists('\WordPress\AiClient\AiClient')) {
            return new WP_Error('ai_missing', 'WordPress AI Client SDK tidak ditemukan. Install @wordpress/ai first.', ['status' => 500]);
        }

        $services_context = $this->get_cpt_context_for_ai('services');
        $promos_context  = $this->get_cpt_context_for_ai('promosi');

        $system_prompt = $this->build_cpt_system_prompt($post_type, $services_context, $promos_context, $language);
        
        $user_prompt = "REQUEST: {$user_request}\n\n";

        if ($post_type === 'services') {
            $user_prompt .= "Buatkan konten layanan lengkap untuk CPT 'services' WordPress dengan format:\n";
            $user_prompt .= "- title: Judul layanan (max 60 karakter)\n";
            $user_prompt .= "- slug: URL-safe slug (auto-generated, jangan tulis manual)\n";
            $user_prompt .= "- excerpt: Deskripsi singkat (max 200 karakter, untuk meta description)\n";
            $user_prompt .= "- content: Artikel lengkap dalam Bahasa Indonesia, >300 kata, mencakup: overview layanan, mengapa perlu, proses kerja, estimasi waktu, dan CTA\n";
            $user_prompt .= "- seo_title: SEO Title yang menarik (max 60 karakter)\n";
            $user_prompt .= "- seo_description: SEO Description (max 160 karakter)\n";
            $user_prompt .= "- seo_focus_keyword: Target keyword SEO\n";
            $user_prompt .= "- schema_markup: JSON-LD string Schema.org valid (Gunakan tipe LocalBusiness atau Service)\n";
            $user_prompt .= "- meta.harga: Range harga dalam format 'Rp XXX.000 - Rp YYY.000'\n";
            $user_prompt .= "- meta.durasi: Estimasi waktu layanan (contoh: '1-2 jam')\n";
            $user_prompt .= "- meta.garansi: Kebijakan garansi (contoh: 'Garansi 30 hari untuk sparepart')\n";
        } else {
            $user_prompt .= "Buatkan konten promo untuk CPT 'promosi' WordPress dengan format:\n";
            $user_prompt .= "- title: Judul promo (max 60 karakter)\n";
            $user_prompt .= "- slug: URL-safe slug (auto-generated)\n";
            $user_prompt .= "- excerpt: Deskripsi singkat promo (max 200 karakter)\n";
            $user_prompt .= "- content: Detail lengkap promo dalam Bahasa Indonesia, >300 kata\n";
            $user_prompt .= "- seo_title: SEO Title yang menarik (max 60 karakter)\n";
            $user_prompt .= "- seo_description: SEO Description (max 160 karakter)\n";
            $user_prompt .= "- seo_focus_keyword: Target keyword SEO\n";
            $user_prompt .= "- schema_markup: JSON-LD string Schema.org valid (Gunakan tipe Offer atau Product)\n";
            $user_prompt .= "- meta.harga_asli: Harga sebelum diskon (format: 'Rp XXX.000')\n";
            $user_prompt .= "- meta.harga_promo: Harga setelah diskon (format: 'Rp YYY.000')\n";
            $user_prompt .= "- meta.diskon_persen: Persentase diskon (angka saja, contoh: 20)\n";
            $user_prompt .= "- meta.tanggal_mulai: Tanggal mulai promo (format: YYYY-MM-DD)\n";
            $user_prompt .= "- meta.tanggal_selesai: Tanggal akhir promo (format: YYYY-MM-DD)\n";
            $user_prompt .= "- meta.include: Daftar yang termasuk dalam promo (pisahkan dengan ' | ')\n";
        }

        try {
            $ai_client = \WordPress\AiClient\AiClient::prompt($user_prompt)
                ->usingSystemInstruction($system_prompt);
                
            // Gunakan global provider dari WordPress/ai jika ada, jika tidak fallback ke Gemini Flash
            if (function_exists('WordPress\AI\get_guidelines')) {
                // WordPress/ai is active, we let it use default global provider
                // We can also inject editorial guidelines
                $guidelines = \WordPress\AI\get_guidelines();
                if (!empty($guidelines)) {
                    $ai_client->usingSystemInstruction($system_prompt . "\n\nEDITORIAL GUIDELINES:\n" . wp_json_encode($guidelines));
                }
            } else {
                // Fallback to manual provider assignment
                $ai_client->usingModel(\WordPress\AiClient\Providers\Google::model('gemini-1.5-flash'));
            }

            $result_text = $ai_client->generateText();
            $parsed = $this->parse_ai_cpt_response($result_text, $post_type);

            if (is_wp_error($parsed)) {
                return $parsed;
            }

            return [
                'success'    => true,
                'post_type'  => $post_type,
                'generated'  => $parsed,
                'raw'        => $result_text,
                'next_step' => 'Gunakan hasil di atas untuk memanggil wp_insert_post() atau ability ai_create_cpt untuk mempublikasikan.',
            ];

        } catch (\Exception $e) {
            return new WP_Error('ai_error', $e->getMessage(), ['status' => 500]);
        }
    }

    private function get_cpt_context_for_ai($post_type) {
        $cache_key = "bw_ai_context_{$post_type}";
        $cached = get_transient($cache_key);
        if ($cached !== false) {
            return $cached;
        }

        $args = [
            'post_type'      => $post_type,
            'posts_per_page' => 20,
            'post_status'    => 'publish',
        ];
        $query = new WP_Query($args);
        $items = [];

        foreach ($query->posts as $post) {
            $item = [
                'title'   => $post->post_title,
                'slug'    => $post->post_name,
                'excerpt' => $post->post_excerpt,
            ];
            if ($post_type === 'services') {
                $item['harga']  = get_post_meta($post->ID, 'harga', true);
                $item['durasi'] = get_post_meta($post->ID, 'durasi', true);
            } else {
                $item['harga_promo'] = get_post_meta($post->ID, 'harga_promo', true);
            }
            $items[] = $item;
        }

        $result = [
            'count' => count($items),
            'items' => $items,
        ];

        set_transient($cache_key, $result, 6 * HOUR_IN_SECONDS);
        return $result;
    }

    private function build_cpt_system_prompt($post_type, $services_context, $promos_context, $language) {
        $lang = $language === 'en' ? 'English' : 'Bahasa Indonesia';

        $system = "Kamu adalah content writer profesional untuk Bengkel Wiguna, bengkel mobil one-stop service di Depok, Jawa Barat.\n";
        $system .= "Lokasi: Jl. Margonda Raya, Depok, Jawa Barat. WA: +62 878-1777-3888\n";
        $system .= "Jam operasional: Senin-Sabtu, 08.00 - 17.00\n\n";

        $system .= "ATURAN WAJIB:\n";
        $system .= "1. Selalu jawab dalam Bahasa Indonesia (kecuali language=en)\n";
        $system .= "2. Jangan berhalusinasi — hanya gunakan informasi yang ada di knowledge base\n";
        $system .= "3. Tulis dengan tone profesional tapi ramah, cocok untuk pemilik kendaraan di Indonesia\n";
        $system .= "4. Cantumkan estimasi harga yang realistis untuk pasar Indonesia\n";
        $system .= "5. Sertakan CTA WhatsApp di akhir konten\n";
        $system .= "6. GEO/AI SEO: Awali paragraf pertama dengan kalimat definisi berformat 'X adalah Y'. Gunakan tabel komparasi/data (<table>) atau list berurutan (<ol>) di dalam konten.\n";
        $system .= "7. ENTITY CLARITY: Selalu sebut 'Bengkel Wiguna' secara utuh di awal artikel.\n";
        $system .= "8. SEO FUNDAMENTALS: Gunakan H2 lalu H3. Jangan meloncat hierarki HTML.\n\n";

        $system .= "LAYANAN YANG SUDAH ADA ({$services_context['count']} layanan):\n";
        foreach (array_slice($services_context['items'], 0, 10) as $svc) {
            $harga = $svc['harga'] ?: 'Hubungi kami';
            $system .= "- {$svc['title']} | {$svc['slug']} | {$svc['excerpt']} | {$harga}\n";
        }
        if (empty($services_context['items'])) {
            $system .= "- Belum ada layanan terdaftar\n";
        }

        $system .= "\nPROMOSI YANG SEDANG AKTIF ({$promos_context['count']} promo):\n";
        foreach (array_slice($promos_context['items'], 0, 5) as $promo) {
            $harga = $promo['harga_promo'] ?: 'Hubungi kami';
            $system .= "- {$promo['title']} | {$promo['slug']} | {$harga}\n";
        }
        if (empty($promos_context['items'])) {
            $system .= "- Belum ada promo aktif\n";
        }

        $system .= "\nFORMAT OUTPUT WAJIB:\n";
        $system .= "Kembalikan dalam format JSON (tanpa markdown code block):\n";
        $system .= '{"title":"...","slug":"...","excerpt":"...","content":"...","seo_title":"...","seo_description":"...","seo_focus_keyword":"...","schema_markup":"...","meta":{"harga":"...","durasi":"...","garansi":"..."}}' . "\n";
        $system .= "Untuk promosi, meta fields berbeda: harga_asli, harga_promo, diskon_persen, tanggal_mulai, tanggal_selesai, include\n";
        $system .= "slug harus URL-safe, lowercase, pisahkan dengan hyphen (-)\n";
        $system .= "content harus >300 kata untuk layanan, >200 kata untuk promosi\n";
        $system .= "Jangan gunakan karakter khusus di JSON (escape dengan \\uXXXX jika perlu)";

        return $system;
    }

    private function parse_ai_cpt_response($raw_response, $post_type) {
        $json_str = trim($raw_response);

        $json_str = preg_replace('/^```json\s*/', '', $json_str);
        $json_str = preg_replace('/^```\s*$/', '', $json_str);
        $json_str = trim($json_str);

        $decoded = json_decode($json_str, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            if (preg_match('/\{[\s\S]*\}/', $json_str, $matches)) {
                $decoded = json_decode($matches[0], true);
            }
            if (json_last_error() !== JSON_ERROR_NONE) {
                return new WP_Error('ai_parse_error', 'AI response is not valid JSON. Response: ' . substr($raw_response, 0, 500), ['status' => 500]);
            }
        }

        if (empty($decoded['title'])) {
            return new WP_Error('ai_missing_field', 'AI response missing required field: title', ['status' => 500]);
        }

        $title = sanitize_text_field($decoded['title']);
        $slug  = isset($decoded['slug']) ? sanitize_title($decoded['slug']) : sanitize_title($title);
        $excerpt = sanitize_text_field($decoded['excerpt'] ?? '');
        $content = wp_kses_post($decoded['content'] ?? '');

        $result = [
            'title'   => $title,
            'slug'    => $slug,
            'excerpt' => $excerpt,
            'content' => $content,
            'seo_title' => sanitize_text_field($decoded['seo_title'] ?? ''),
            'seo_description' => sanitize_text_field($decoded['seo_description'] ?? ''),
            'seo_focus_keyword' => sanitize_text_field($decoded['seo_focus_keyword'] ?? ''),
            'schema_markup' => is_array($decoded['schema_markup'] ?? '') ? wp_json_encode($decoded['schema_markup']) : ($decoded['schema_markup'] ?? ''),
            'meta'    => [],
        ];

        if ($post_type === 'services') {
            $result['meta'] = [
                'harga'  => sanitize_text_field($decoded['meta']['harga'] ?? ''),
                'durasi' => sanitize_text_field($decoded['meta']['durasi'] ?? ''),
                'garansi' => sanitize_text_field($decoded['meta']['garansi'] ?? ''),
            ];
        } elseif ($post_type === 'promosi') {
            $result['meta'] = [
                'harga_asli'     => sanitize_text_field($decoded['meta']['harga_asli'] ?? ''),
                'harga_promo'    => sanitize_text_field($decoded['meta']['harga_promo'] ?? ''),
                'diskon_persen'  => absint($decoded['meta']['diskon_persen'] ?? 0),
                'tanggal_mulai'  => sanitize_text_field($decoded['meta']['tanggal_mulai'] ?? date('Y-m-d')),
                'tanggal_selesai' => sanitize_text_field($decoded['meta']['tanggal_selesai'] ?? date('Y-m-d', strtotime('+30 days'))),
                'include'         => sanitize_text_field($decoded['meta']['include'] ?? ''),
            ];
        } else {
            $result['meta'] = [
                'keterangan' => sanitize_text_field($decoded['meta']['keterangan'] ?? '')
            ];
        }

        return $result;
    }
}
