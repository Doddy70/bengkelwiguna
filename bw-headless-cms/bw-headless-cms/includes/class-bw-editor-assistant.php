<?php
/**
 * BW Editor Assistant - TinyMCE & Gutenberg Integration
 */

class BW_Editor_Assistant {
    public function init() {
        add_action('admin_enqueue_scripts', [$this, 'enqueue_assets']);
        add_action('wp_ajax_bw_editor_assistant_generate', [$this, 'ajax_generate']);

        add_filter('mce_external_plugins', [$this, 'register_tinymce_plugin']);
        add_filter('mce_buttons', [$this, 'register_tiny_button']);
        
        // Rank Math Schema Injection
        add_filter('rank_math/json_ld', [$this, 'inject_schema_markup'], 99, 2);
    }

    public function enqueue_assets($hook) {
        if (!in_array($hook, ['post.php', 'post-new.php'], true)) return;
        wp_enqueue_media();
        wp_enqueue_style('bw-editor-assistant-css', BW_HEADLESS_PLUGIN_URL . 'assets/css/bw-editor-assistant.css', [], '1.0.0');
        wp_enqueue_script('bw-editor-assistant-js', BW_HEADLESS_PLUGIN_URL . 'assets/js/bw-editor-assistant.js', ['jquery'], time(), true);
        wp_localize_script('bw-editor-assistant-js', 'bwEditorAssistant', [
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('bw_editor_assistant_nonce'),
        ]);
    }

    public function register_tinymce_plugin($plugins) {
        // Clean URL without timestamp for TinyMCE internal loader stability
        $plugins['bw_assistant'] = BW_HEADLESS_PLUGIN_URL . 'assets/js/bw-editor-assistant.js';
        return $plugins;
    }

    public function register_tiny_button($buttons) {
        $buttons[] = 'bw_assistant';
        return $buttons;
    }

    public function ajax_generate() {
        check_ajax_referer('bw_editor_assistant_nonce', 'nonce');
        if (!current_user_can('edit_posts')) {
            wp_send_json_error(['message' => 'Anda tidak memiliki akses.']);
        }

        // Rate limiting: max 10 requests per minute
        $client_ip = $this->get_client_ip();
        $rate_key = 'bw_editor_rate_' . md5($client_ip);
        $rate_limit = get_transient($rate_key);

        if (false === $rate_limit) {
            set_transient($rate_key, 1, 60);
        } elseif ($rate_limit >= 10) {
            wp_send_json_error(['message' => 'Terlalu banyak permintaan. Tunggu sebentar.'], 429);
        } else {
            set_transient($rate_key, $rate_limit + 1, 60);
        }

        $action_type = sanitize_text_field($_POST['action_type'] ?? '');
        $text_input  = wp_kses_post($_POST['text_input'] ?? '');
        $post_id     = intval($_POST['post_id'] ?? 0);
        $image_id    = intval($_POST['image_id'] ?? 0);

        if ($post_id > 0 && $image_id > 0) {
            set_post_thumbnail($post_id, $image_id);
        }

        if (empty($text_input) && in_array($action_type, ['improve', 'grammar', 'shorten', 'lengthen'])) {
            wp_send_json_error(['message' => 'Silakan pilih atau masukkan teks terlebih dahulu.']);
        }

        $result = $this->generate_response($action_type, $text_input, $post_id, $image_id);

        if (is_wp_error($result)) {
            wp_send_json_error(['message' => $result->get_error_message()]);
        }

        if (is_array($result)) {
            wp_send_json_success([
                'result'      => $result['content'] ?? '',
                'seo_title'   => $result['seo_title'] ?? '',
                'seo_desc'    => $result['seo_description'] ?? '',
                'seo_keyword' => $result['seo_focus_keyword'] ?? '',
            ]);
        }

        wp_send_json_success(['result' => $result]);
    }

    // ============================================================
    // PROMPT BUILDERS — CPT-specific
    // ============================================================

    private function build_system_instruction($type) {
        $sys = "Anda adalah Copy Editor & AEO (AI Engine Optimization) Specialist untuk Bengkel Wiguna.\n";
        
        // Inject Product Marketing Context dynamically if available
        $context_file = plugin_dir_path(dirname(__FILE__)) . 'docs/product-marketing-context.md';
        if (file_exists($context_file)) {
            $business_context = file_get_contents($context_file);
            $sys .= "\n--- PRODUCT MARKETING CONTEXT ---\n";
            $sys .= "Gunakan pedoman identitas bisnis di bawah ini sebagai dasar utama tulisan Anda (Target Audiens, Nada Bicara, Diferensiasi, dll):\n\n";
            $sys .= $business_context . "\n";
            $sys .= "---------------------------------\n\n";
        }

        $sys .= "ATURAN WAJIB & FORMAT (CRITICAL):\n";
        $sys .= "1. OUTPUT JSON WAJIB: {content, seo_title, seo_description, seo_focus_keyword, schema_markup}\n";
        $sys .= "2. FORMAT KONTEN HTML MURNI: Nilai dari 'content' WAJIB berbentuk string HTML murni (gunakan tag <p>, <h2>, <h3>, <ul>, <li>, <strong>, <table>). DILARANG menggunakan format Markdown (*, #, dll). Buat menjadi SATU BARIS string berkesinambungan tanpa menekan tombol enter/newline.\n";
        $sys .= "3. COPY-EDITING RULES: Hapus semua kata-kata AI generik (fluff) seperti 'komprehensif', 'menyeluruh', 'di era modern', 'solusi terbaik', 'tak perlu diragukan lagi'. Gunakan kalimat aktif, ringkas, dan langsung pada intinya (punchy). Gunakan bahasa Indonesia konkret dan profesional.\n";
        $sys .= "4. AEO & ENTITY CLARITY: Untuk di-cite oleh AI (ChatGPT/Gemini/Google AI Overviews), selalu awali paragraf pertama dengan definisi langsung berformat 'X adalah Y'. Sebut nama entitas 'Bengkel Wiguna' secara utuh sebagai sumber otoritas di awal paragraf.\n";
        $sys .= "5. TERMINOLOGI SPESIFIK: Gunakan istilah teknis bengkel yang tepat (spooring 3D, scanner OBD2, oli sintetis, AC cleaner) untuk membangun E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).\n";
        $sys .= "6. STRUKTUR HTML: Gunakan <h2> lalu <h3> (jangan meloncati hierarki HTML). WAJIB sertakan tabel komparasi/data (<table>) atau list berurutan (<ol>/<ul>) untuk mempermudah ekstraksi data oleh AI Engine.\n";
        $sys .= "7. LOCAL SEO: Target pasar HANYA mencakup Kota Depok, Jakarta Selatan, Tangerang Selatan (Tangsel), dan Bogor. Kaitkan konten dengan pain-point lokal (misal: kemacetan Margonda, cuaca Jabodetabek, rute tol JORR/Desari).\n";
        $sys .= "8. SCHEMA MARKUP: 'schema_markup' HARUS berisi string valid JSON-LD format Schema.org yang sesuai tipe halaman (LocalBusiness, Service, Product, Article, FAQPage).\n";
        $sys .= "9. SEO META: seo_title MAKSIMAL 60 karakter. seo_description MAKSIMAL 160 karakter.\n";
        $sys .= "10. CTA: Akhiri dengan ajakan bertindak (CTA) WhatsApp yang jelas dan mendesak.\n";
        return $sys;
    }

    private function build_prompt($type, $input) {
        switch ($type) {
            // SERVICES
            case 'services':
                $p = "ARTIKEL LAYANAN KENDARAAN:\n";
                $p .= "Input: \"$input\"\n\n";
                $p .= "Spesifikasi:\n";
                $p .= "- Bahasa Indonesia, >250 kata\n";
                $p .= "- Struktur: pain-point -> solusi spesifik -> keunggulan Bengkel Wiguna -> estimasi harga -> durasi -> garansi -> CTA\n";
                $p .= "- SEO Title: [Nama Layanan] Bengkel Wiguna Depok | Harga\n";
                $p .= "- Focus Keyword: [nama layanan] + [kota]\n";
                $p .= "- Schema Markup: Gunakan tipe Service atau LocalBusiness schema.\n";
                $p .= "- OUTPUT JSON WAJIB.\n";
                break;

            // PROMOSI
            case 'promosi':
                $p = "DRAFT PROMO MENARIK:\n";
                $p .= "Input: \"$input\"\n\n";
                $p .= "Spesifikasi:\n";
                $p .= "- AIDA framework.\n";
                $p .= "- Bahasa Indonesia, >150 kata.\n";
                $p .= "- WAJIB sebut: nama promo, benefit, harga/diskon.\n";
                $p .= "- CTA WhatsApp konkret.\n";
                $p .= "- Schema Markup: Gunakan tipe Offer atau Product schema.\n";
                $p .= "- OUTPUT JSON.\n";
                break;

            // PAKET SERVICE
            case 'paket_service':
            case 'paket-service':
            case 'paket_servis':
            case 'paket-servis':
                $p = "PAKET SERVICE BUNDLING:\n";
                $p .= "Input: \"$input\"\n\n";
                $p .= "Spesifikasi:\n";
                $p .= "- Bahasa Indonesia, >200 kata.\n";
                $p .= "- WAJIB sebutkan: daftar item, harga paket, durasi, garansi.\n";
                $p .= "- Format items: pisahkan dengan | (pipe).\n";
                $p .= "- CTA WhatsApp konkret.\n";
                $p .= "- Schema Markup: Gunakan tipe Product atau Offer schema.\n";
                $p .= "- OUTPUT JSON.\n";
                break;

            // IMPROVE
            case 'improve':
                $p = "KEMBANGKAN teks berikut jadi lebih profesional & SEO:\n";
                $p .= "\"$input\"\n\n";
                $p .= "OUTPUT JSON {content, seo_title, seo_description, seo_focus_keyword}.\n";
                break;

            // GRAMMAR
            case 'grammar':
                $p = "KOREKSI ejaan & tata bahasa:\n";
                $p .= "\"$input\"\n\n";
                $p .= "OUTPUT: {content} saja.\n";
                break;

            // SHORTEN
            case 'shorten':
                $p = "RINGKAS teks berikut (tetap jaga kekuatan CTA:\n";
                $p .= "\"$input\"\n\n";
                $p .= "OUTPUT: {content}.\n";
                break;

            // LENGTHEN
            case 'lengthen':
                $p = "PERLUAS teks berikut dengan tips/FAQ singkat:\n";
                $p .= "\"$input\"\n\n";
                $p .= "OUTPUT: {content}.\n";
                break;

            // COMPETITOR COMPARISON
            case 'competitor_comparison':
            case 'competitor-comparison':
                $p = "HALAMAN KOMPARASI KOMPETITOR (You vs Competitor):\n";
                $p .= "Target/Kompetitor: \"$input\"\n\n";
                $p .= "Spesifikasi:\n";
                $p .= "- Jujur & Bangun Trust: Akui kekuatan kompetitor, jelaskan keunggulan spesifik Bengkel Wiguna (misal: transparansi, alat modern).\n";
                $p .= "- Struktur: TL;DR Ringkasan -> Tabel Komparasi -> Detail Keunggulan -> Siapa yang cocok untuk Wiguna & Siapa yang cocok untuk kompetitor.\n";
                $p .= "- Fokus Lokal: Tekankan keuntungan lokasi yang mencakup Depok, Jakarta Selatan, Tangsel, atau Bogor.\n";
                $p .= "- Schema Markup: Gunakan tipe Article atau FAQPage.\n";
                $p .= "- OUTPUT JSON WAJIB.\n";
                break;

            // PROGRAMMATIC SEO (Local Pages / Hub-Spoke)
            case 'programmatic_seo':
            case 'programmatic-seo':
                $p = "PROGRAMMATIC SEO PAGE (Local Hub/Spoke):\n";
                $p .= "Target Pattern / Keyword: \"$input\"\n\n";
                $p .= "Spesifikasi:\n";
                $p .= "- Buat halaman pSEO yang hyper-local & informatif (bukan thin content) untuk area spesifik (seperti kecamatan/kelurahan di Depok, Jakarta Selatan, Tangsel, atau Bogor) atau jenis masalah kendaraan spesifik.\n";
                $p .= "- Harus mengandung 'Unique Value' yang relevan dengan keyword, bukan sekadar text template.\n";
                $p .= "- Masukkan pain point spesifik yang cocok dengan target keyword.\n";
                $p .= "- Schema Markup: Gunakan tipe LocalBusiness, Service, atau FAQPage.\n";
                $p .= "- OUTPUT JSON WAJIB.\n";
                break;

            // CUSTOM
            default:
                $label = ucwords(str_replace(['-', '_'], ' ', $type));
                $p = "KONTEN $label:\n";
                $p .= "\"$input\"\n\n";
                $p .= "OUTPUT JSON {content, seo_title, seo_description, seo_focus_keyword}.\n";
                break;
        }
        return $p;
    }

    // ============================================================
    // MAIN GENERATOR
    // ============================================================

    public function generate_response($type, $input, $post_id = 0, $image_id = 0) {
        $provider = get_option('bw_ai_provider', 'gemini');
        $sys = $this->build_system_instruction($type);
        $prompt = $this->build_prompt($type, $input);

        if ($image_id > 0) {
            $prompt .= "\n[GAMBAR] Ekstrak info akurat dari flyer/gambar. Jangan improvisasi.\n";
        }

        $cpts = ['services', 'promosi', 'paket_service', 'paket-service', 'paket_servis', 'paket-servis'];
        $is_json = in_array($type, $cpts) || !in_array($type, ['improve', 'grammar', 'shorten', 'lengthen', 'custom']);

        $result = $this->call_ai($provider, $prompt, $sys, $is_json);

        if (is_wp_error($result)) return $result;

        if ($is_json) {
            $clean = trim($result);
            $clean = preg_replace('/^```json\s*/', '', $clean);
            $clean = trim(preg_replace('/```$/', '', $clean));
            $data = json_decode($clean, true);

            if (is_array($data) && !empty($data['content'])) {
                if ($post_id > 0) {
                    if (!empty($data['seo_title'])) update_post_meta($post_id, 'rank_math_title', sanitize_text_field($data['seo_title']));
                    if (!empty($data['seo_description'])) update_post_meta($post_id, 'rank_math_description', sanitize_text_field($data['seo_description']));
                    if (!empty($data['seo_focus_keyword'])) update_post_meta($post_id, 'rank_math_focus_keyword', sanitize_text_field($data['seo_focus_keyword']));
                    if (!empty($data['schema_markup'])) {
                        $schema_str = is_array($data['schema_markup']) ? wp_json_encode($data['schema_markup']) : $data['schema_markup'];
                        update_post_meta($post_id, 'bw_ai_schema_markup', wp_slash($schema_str));
                    }
                }
                
                // Sanitize output text: Remove literal newlines or backslash-n to prevent them from showing in Gutenberg
                $content = $data['content'];
                $content = str_replace(['\n', '\r', "\n", "\r", "\\n", "\\r"], '', $content);
                
                return [
                    'content' => $content,
                    'seo_title' => $data['seo_title'] ?? '',
                    'seo_description' => $data['seo_description'] ?? '',
                    'seo_focus_keyword' => $data['seo_focus_keyword'] ?? '',
                ];
            }
            
            // Fallback: If AI fails to return the exact JSON keys
            $clean_fallback = str_replace(['\n', '\r', "\n", "\r", "\\n", "\\r"], '', $clean);
            return [
                'content' => $clean_fallback,
                'seo_title' => '',
                'seo_description' => '',
                'seo_focus_keyword' => '',
            ];
        }

        return $result;
    }

    // ===========================================================
    // AI CALLS — dual provider
    // ===========================================================

    private function call_ai($provider, $prompt, $sys, $is_json) {
        if ($provider === 'gemini' || $provider === 'both') {
            $r = $this->gemini($prompt, $sys, $is_json);
            if (!is_wp_error($r)) return $r;
            if ($provider === 'gemini') return $r;
        }
        if ($provider === 'openai' || $provider === 'both') {
            return $this->openaichat($prompt, $sys, $is_json);
        }
        return new WP_Error('no_provider', 'Tidak ada AI provider dikonfigurasi.');
    }

    // ===========================================================
    // GEMINI
    // ===========================================================
    private function gemini($prompt, $sys, $is_json = false) {
        $key = get_option('bw_gemini_api_key', '');
        if (empty($key)) $key = get_option('aica_gemini_api_key', '');
        if (empty($key) && defined('GEMINI_API_KEY')) $key = GEMINI_API_KEY;
        if (empty($key)) return new WP_Error('no_key', 'Gemini API key kosong.');

        $model = get_option('bw_gemini_model', 'gemini-2.0-flash');
        $url = "https://generativelanguage.googleapis.com/v1beta/models/{$model}:generateContent?key={$key}";

        $parts = [['text' => $prompt]];
        $body = [
            'contents' => [['parts' => $parts]],
            'systemInstruction' => ['parts' => [['text' => $sys]]],
            'generationConfig' => ['temperature' => 0.7],
        ];

        if ($is_json) {
            $body['generationConfig']['responseMimeType'] = 'application/json';
            $body['generationConfig']['responseSchema'] = [
                'type' => 'OBJECT',
                'properties' => [
                    'content' => ['type' => 'STRING'],
                    'seo_title' => ['type' => 'STRING'],
                    'seo_description' => ['type' => 'STRING'],
                    'seo_focus_keyword' => ['type' => 'STRING'],
                    'schema_markup' => ['type' => 'STRING'],
                ],
                'required' => ['content', 'seo_title', 'seo_description', 'seo_focus_keyword', 'schema_markup'],
            ];
        }

        $r = wp_remote_post($url, [
            'method' => 'POST',
            'headers' => ['Content-Type' => 'application/json'],
            'body' => json_encode($body),
            'timeout' => 60,
        ]);

        if (is_wp_error($r)) return $r;
        $code = wp_remote_retrieve_response_code($r);
        $body = json_decode(wp_remote_retrieve_body($r), true);
        if ($code !== 200) return new WP_Error('gemini_http', "Gemini HTTP $code: " . ($body['error']['message'] ?? 'error'));
        $text = $body['candidates'][0]['content']['parts'][0]['text'] ?? null;
        if (empty($text)) return new WP_Error('gemini_empty', 'Gemini response kosong.');
        return $text;
    }

    // ===========================================================
    // OPENAICHAT
    // ===========================================================
    private function openaichat($prompt, $sys, $is_json = false) {
        $key = get_option('bw_openai_api_key', '');
        if (empty($key)) return new WP_Error('no_openai_key', 'OpenAI key kosong.');

        $model = get_option('bw_openai_model', 'gpt-4o-mini');
        $url = 'https://api.openai.com/v1/chat/completions';

        $body = [
            'model' => $model,
            'messages' => [
                ['role' => 'system', 'content' => $sys],
                ['role' => 'user', 'content' => $prompt],
            ],
            'temperature' => 0.7,
        ];

        if ($is_json) $body['response_format'] = ['type' => 'json_object'];

        $r = wp_remote_post($url, [
            'method' => 'POST',
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' => "Bearer $key",
            ],
            'body' => json_encode($body),
            'timeout' => 60,
        ]);

        if (is_wp_error($r)) return $r;
        $code = wp_remote_retrieve_response_code($r);
        $body = json_decode(wp_remote_retrieve_body($r), true);
        if ($code !== 200) return new WP_Error('openai_http', "OpenAI HTTP $code: " . ($body['error']['message'] ?? 'error'));

        $text = $body['choices'][0]['message']['content'] ?? null;
        if (empty($text)) return new WP_Error('openai_empty', 'OpenAI response kosong.');
        return $text;
    }

    /**
     * Get client IP address for rate limiting
     */
    private function get_client_ip() {
        $ip_keys = ['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'];
        foreach ($ip_keys as $key) {
            if (!empty($_SERVER[$key])) {
                $ip = sanitize_text_field($_SERVER[$key]);
                if (strpos($ip, ',') !== false) {
                    $ip = trim(explode(',', $ip)[0]);
                }
                if (filter_var($ip, FILTER_VALIDATE_IP)) {
                    return $ip;
                }
            }
        }
        return '0.0.0.0';
    }

    /**
     * Inject AI generated Schema Markup into Rank Math JSON-LD output
     */
    public function inject_schema_markup($data, $jsonld) {
        $post_id = get_the_ID();
        if (!$post_id && isset($jsonld->post_id)) {
            $post_id = $jsonld->post_id;
        }

        if ($post_id) {
            $schema = get_post_meta($post_id, 'bw_ai_schema_markup', true);
            if (!empty($schema)) {
                $schema_arr = json_decode($schema, true);
                if (is_array($schema_arr)) {
                    // Inject AI generated schema into Rank Math JSON-LD data
                    $data['bw_ai_custom_schema'] = $schema_arr;
                }
            }
        }
        return $data;
    }
}
