<?php
/**
 * Headless CMS Admin Settings
 */

class BW_Admin_Settings {
    public function init() {
        add_action('admin_menu', [$this, 'admin_menu']);
        add_action('admin_init', [$this, 'register_admin_settings']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
    }

    public function enqueue_admin_assets($hook) {
        if ($hook !== 'toplevel_page_bw-headless-cms') {
            return;
        }
        // Enqueue WPDS styles so we can use Gutenberg UI components without React build
        wp_enqueue_style('wp-components');
        
        // Custom inline style for better spacing since we are mixing WP forms with WPDS CSS
        wp_add_inline_style('wp-components', '
            .bw-wpds-wrap { max-width: 800px; margin: 20px 0; }
            .bw-wpds-wrap .components-panel { margin-bottom: 24px; box-shadow: 0 1px 1px rgba(0,0,0,0.04); }
            .bw-wpds-wrap .components-panel__body { padding: 24px; background: #fff; border: 1px solid #e2e4e7; border-radius: 4px; }
            .bw-wpds-wrap h2.components-panel__body-title { margin: 0 0 16px 0; font-size: 1.1em; font-weight: 600; padding: 0; border: none; }
            .bw-wpds-wrap .components-base-control { margin-bottom: 20px; }
            .bw-wpds-wrap .components-base-control__label { display: block; font-weight: 500; margin-bottom: 8px; }
            .bw-wpds-wrap .components-text-control__input,
            .bw-wpds-wrap .components-select-control__input { width: 100%; max-width: 500px; padding: 6px 12px; border: 1px solid #757575; border-radius: 2px; }
            .bw-wpds-wrap .components-base-control__help { display: block; margin-top: 6px; color: #757575; font-size: 12px; }
            .bw-wpds-wrap table.form-table th { padding: 0; width: auto; font-weight: normal; }
            .bw-wpds-wrap table.form-table td { padding: 0; margin-bottom: 20px; display: block; }
            .bw-wpds-wrap table.form-table tr { display: block; margin-bottom: 20px; }
        ');
    }

    public function admin_menu() {
        add_menu_page(
            'Headless CMS Settings',
            'BW Headless CMS',
            'manage_options',
            'bw-headless-cms',
            [$this, 'admin_page'],
            'dashicons-admin-settings',
            80
        );
    }

    public function register_admin_settings() {
        // --- GENERAL SETTINGS (Next.js Revalidation) ---
        register_setting('bw_headless_general', 'bw_nextjs_site_url', ['sanitize_callback' => 'esc_url_raw']);
        register_setting('bw_headless_general', 'bw_nextjs_revalidate_secret', [
            'sanitize_callback' => function($val) {
                if (empty($val)) return bin2hex(random_bytes(24));
                return sanitize_text_field($val);
            }
        ]);
        register_setting('bw_headless_general', 'bw_revalidate_enabled', [
            'sanitize_callback' => function($val) { return $val === '1' ? '1' : '0'; }
        ]);

        add_settings_section('bw_nextjs_section', false, null, 'bw-headless-general');

        add_settings_field(
            'bw_nextjs_site_url',
            false,
            function() {
                $val = esc_attr(get_option('bw_nextjs_site_url', ''));
                echo '<div class="components-base-control components-text-control">';
                echo '<label class="components-base-control__label">Next.js Site URL</label>';
                echo "<input type='url' name='bw_nextjs_site_url' value='{$val}' class='components-text-control__input' placeholder='https://bengkelwiguna.com' />";
                echo '<span class="components-base-control__help">URL frontend Next.js untuk trigger ISR revalidation. Contoh: https://bengkelwiguna.com</span>';
                echo '</div>';
            },
            'bw-headless-general',
            'bw_nextjs_section'
        );

        add_settings_field(
            'bw_nextjs_revalidate_secret',
            false,
            function() {
                $val = esc_attr(get_option('bw_nextjs_revalidate_secret', ''));
                echo '<div class="components-base-control components-text-control">';
                echo '<label class="components-base-control__label">Revalidation Secret</label>';
                echo "<input type='text' name='bw_nextjs_revalidate_secret' value='{$val}' class='components-text-control__input' placeholder='Auto-generated on save' />";
                echo '<span class="components-base-control__help">Secret token untuk otentikasi webhook revalidation. Biarkan kosong untuk auto-generate.</span>';
                echo '</div>';
            },
            'bw-headless-general',
            'bw_nextjs_section'
        );

        add_settings_field(
            'bw_revalidate_enabled',
            false,
            function() {
                $val = get_option('bw_revalidate_enabled', '1');
                echo '<div class="components-base-control components-select-control">';
                echo '<label class="components-base-control__label">Auto Revalidation</label>';
                echo "<select name='bw_revalidate_enabled' class='components-select-control__input'>";
                echo "<option value='1'" . selected($val, '1', false) . ">Aktif — auto-trigger ISR saat konten berubah</option>";
                echo "<option value='0'" . selected($val, '0', false) . ">Nonaktif — manual only via API</option>";
                echo '</select>';
                echo '</div>';
            },
            'bw-headless-general',
            'bw_nextjs_section'
        );

        // --- AI SETTINGS ---
        register_setting('bw_headless_ai', 'bw_gemini_api_key', ['sanitize_callback' => 'sanitize_text_field']);
        register_setting('bw_headless_ai', 'bw_gemini_model', ['sanitize_callback' => 'sanitize_text_field']);
        register_setting('bw_headless_ai', 'bw_ai_provider', ['sanitize_callback' => 'sanitize_text_field']);
        register_setting('bw_headless_ai', 'bw_openai_api_key', ['sanitize_callback' => 'sanitize_text_field']);
        register_setting('bw_headless_ai', 'bw_openai_model', ['sanitize_callback' => 'sanitize_text_field']);

        add_settings_section('bw_ai_section', false, null, 'bw-headless-ai');

        add_settings_field(
            'bw_ai_provider',
            false,
            function() {
                $val = esc_attr(get_option('bw_ai_provider', 'gemini'));
                echo '<div class="components-base-control components-select-control">';
                echo '<label class="components-base-control__label">AI Provider</label>';
                echo "<select name='bw_ai_provider' id='bw_ai_provider' class='components-select-control__input'>";
                echo "<option value='gemini'" . selected($val, 'gemini', false) . ">Google Gemini (Default)</option>";
                echo "<option value='openai'" . selected($val, 'openai', false) . ">OpenAI (GPT-4o)</option>";
                echo "<option value='both'" . selected($val, 'both', false) . ">Both — Gemini first, OpenAI fallback</option>";
                echo "</select>";
                echo '<span class="components-base-control__help">Pilih AI provider utama. Opsi "Both" akan coba Gemini dulu, fallback ke OpenAI jika Gemini gagal.</span>';
                echo '</div>';
            },
            'bw-headless-ai',
            'bw_ai_section'
        );

        add_settings_field(
            'bw_gemini_api_key',
            false,
            function() {
                $val = esc_attr(get_option('bw_gemini_api_key', ''));
                echo '<div class="components-base-control components-text-control" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">';
                echo '<h3 style="margin-top:0;">Google Gemini Settings</h3>';
                echo '<label class="components-base-control__label">Google Gemini API Key</label>';
                echo "<input type='password' name='bw_gemini_api_key' value='{$val}' class='components-text-control__input' placeholder='AIza...' autocomplete='off' />";
                echo '<span class="components-base-control__help">API Key Google Gemini untuk AI Editor Assistant. Dapatkan key dari <a href="https://aistudio.google.dev" target="_blank">Google AI Studio</a>.</span>';
                echo '</div>';
            },
            'bw-headless-ai',
            'bw_ai_section'
        );

        add_settings_field(
            'bw_gemini_model',
            false,
            function() {
                $val = esc_attr(get_option('bw_gemini_model', 'gemini-2.0-flash'));
                echo '<div class="components-base-control components-select-control">';
                echo '<label class="components-base-control__label">Google Gemini Model</label>';
                echo "<select name='bw_gemini_model' class='components-select-control__input'>";
                echo "<option value='gemini-2.0-flash'" . selected($val, 'gemini-2.0-flash', false) . ">Gemini 2.0 Flash (Default)</option>";
                echo "<option value='gemini-2.5-flash'" . selected($val, 'gemini-2.5-flash', false) . ">Gemini 2.5 Flash</option>";
                echo "<option value='gemini-1.5-flash'" . selected($val, 'gemini-1.5-flash', false) . ">Gemini 1.5 Flash</option>";
                echo "<option value='gemini-1.5-pro'" . selected($val, 'gemini-1.5-pro', false) . ">Gemini 1.5 Pro</option>";
                echo "</select>";
                echo '</div>';
            },
            'bw-headless-ai',
            'bw_ai_section'
        );

        add_settings_field(
            'bw_openai_api_key',
            false,
            function() {
                $val = esc_attr(get_option('bw_openai_api_key', ''));
                echo '<div class="components-base-control components-text-control" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">';
                echo '<h3 style="margin-top:0;">OpenAI Settings</h3>';
                echo '<label class="components-base-control__label">OpenAI API Key</label>';
                echo "<input type='password' name='bw_openai_api_key' value='{$val}' class='components-text-control__input' placeholder='sk-proj-...' autocomplete='off' />";
                echo '<span class="components-base-control__help">API Key OpenAI untuk AI Editor Assistant. Dapatkan key dari <a href="https://platform.openai.com/api-keys" target="_blank">OpenAI Platform</a>.</span>';
                echo '</div>';
            },
            'bw-headless-ai',
            'bw_ai_section'
        );

        add_settings_field(
            'bw_openai_model',
            false,
            function() {
                $val = esc_attr(get_option('bw_openai_model', 'gpt-4o-mini'));
                echo '<div class="components-base-control components-select-control">';
                echo '<label class="components-base-control__label">OpenAI Model</label>';
                echo "<select name='bw_openai_model' class='components-select-control__input'>";
                echo "<option value='gpt-4o-mini'" . selected($val, 'gpt-4o-mini', false) . ">GPT-4o Mini (Fast &amp; Cheap)</option>";
                echo "<option value='gpt-4o'" . selected($val, 'gpt-4o', false) . ">GPT-4o (High Quality)</option>";
                echo "<option value='gpt-4-turbo'" . selected($val, 'gpt-4-turbo', false) . ">GPT-4 Turbo</option>";
                echo "<option value='gpt-3.5-turbo'" . selected($val, 'gpt-3.5-turbo', false) . ">GPT-3.5 Turbo (Cheapest)</option>";
                echo "</select>";
                echo '</div>';
            },
            'bw-headless-ai',
            'bw_ai_section'
        );
    }

    public function admin_page() {
        if (!current_user_can('manage_options')) {
            return;
        }

        $settings = get_option('bw_homepage_settings', []);
        $active_tab = isset($_GET['tab']) ? sanitize_text_field($_GET['tab']) : 'general';
        
        // Handle settings updated messages safely
        if (isset($_GET['settings-updated']) && $_GET['settings-updated']) {
            echo '<div class="notice notice-success is-dismissible components-notice is-success"><div class="components-notice__content">Pengaturan berhasil disimpan.</div></div>';
        }
        ?>
        <div class="wrap bw-wpds-wrap">
            <h1 style="margin-bottom: 20px;">Bengkel Wiguna Headless CMS</h1>
            
            <h2 class="nav-tab-wrapper" style="margin-bottom: 20px; border-bottom: 1px solid #ccc;">
                <a href="?page=bw-headless-cms&tab=general" class="nav-tab <?php echo $active_tab === 'general' ? 'nav-tab-active' : ''; ?>">General</a>
                <a href="?page=bw-headless-cms&tab=ai" class="nav-tab <?php echo $active_tab === 'ai' ? 'nav-tab-active' : ''; ?>">AI Settings</a>
                <a href="?page=bw-headless-cms&tab=theme" class="nav-tab <?php echo $active_tab === 'theme' ? 'nav-tab-active' : ''; ?>">Theme Editor</a>
            </h2>

            <?php if ($active_tab === 'general'): ?>
                <div class="components-panel">
                    <div class="components-panel__body">
                        <h2 class="components-panel__body-title">Next.js Revalidation Settings</h2>
                        <form method="post" action="options.php">
                            <?php
                            settings_fields('bw_headless_general');
                            do_settings_sections('bw-headless-general');
                            ?>
                            <div style="margin-top: 24px;">
                                <button type="submit" class="components-button is-primary">Simpan Pengaturan General</button>
                            </div>
                        </form>
                    </div>
                </div>

            <?php elseif ($active_tab === 'ai'): ?>
                <div class="components-panel">
                    <div class="components-panel__body">
                        <h2 class="components-panel__body-title">AI Providers Configuration</h2>
                        <form method="post" action="options.php">
                            <?php
                            settings_fields('bw_headless_ai');
                            do_settings_sections('bw-headless-ai');
                            ?>
                            <div style="margin-top: 24px;">
                                <button type="submit" class="components-button is-primary">Simpan Pengaturan AI</button>
                            </div>
                        </form>
                    </div>
                </div>

            <?php elseif ($active_tab === 'theme'): ?>
                <div class="components-panel">
                    <div class="components-panel__body">
                        <h2 class="components-panel__body-title">Pengaturan Tema Frontend (Next.js)</h2>
                        <form id="bw-theme-form">
                            <h3 style="margin-top: 0;">Pengaturan Hero Slider</h3>
                            <div class="components-base-control components-text-control">
                                <label class="components-base-control__label" for="hero_title">Judul Hero Slider</label>
                                <input name="hero_title" type="text" id="hero_title" value="" class="components-text-control__input" />
                            </div>
                            <div class="components-base-control components-text-control">
                                <label class="components-base-control__label" for="hero_bg_image">Background Image (URL)</label>
                                <input name="hero_bg_image" type="text" id="hero_bg_image" value="" class="components-text-control__input" />
                            </div>
                            <div class="components-base-control components-text-control" style="padding-bottom: 20px; border-bottom: 1px solid #eee;">
                                <label class="components-base-control__label" for="hero_overlay_opacity">Overlay Opacity</label>
                                <input name="hero_overlay_opacity" type="number" step="0.05" min="0" max="1" id="hero_overlay_opacity" value="" class="components-text-control__input" style="max-width: 150px;" />
                            </div>

                            <h3 style="margin-top: 20px;">Pengaturan CTA Footer</h3>
                            <div class="components-base-control components-text-control">
                                <label class="components-base-control__label" for="cta_title">Judul CTA</label>
                                <input name="cta_title" type="text" id="cta_title" value="" class="components-text-control__input" />
                            </div>
                            <div class="components-base-control components-text-control">
                                <label class="components-base-control__label" for="cta_wa_url">Link WhatsApp</label>
                                <input name="cta_wa_url" type="url" id="cta_wa_url" value="" class="components-text-control__input" />
                            </div>
                            <div class="components-base-control components-text-control">
                                <label class="components-base-control__label" for="cta_bg_image">Background Image (URL)</label>
                                <input name="cta_bg_image" type="text" id="cta_bg_image" value="" class="components-text-control__input" />
                            </div>

                            <div style="margin-top: 24px; display: flex; align-items: center; gap: 10px;">
                                <button type="submit" id="bw-save-theme" class="components-button is-primary">Simpan Pengaturan Tema</button>
                                <span id="bw-theme-spinner" class="spinner" style="float: none; margin: 0;"></span>
                            </div>
                            <div id="bw-theme-notice" style="display:none; margin-top:15px; padding: 10px; border-left: 4px solid #46b450; background: #fff;">
                                <p id="bw-theme-message" style="margin: 0;"></p>
                            </div>
                        </form>
                    </div>
                </div>
                <script>
                document.addEventListener('DOMContentLoaded', function() {
                    const apiEndpointHero = '/wp-json/bw/v1/homepage-settings/hero';
                    const apiEndpointCta = '/wp-json/bw/v1/homepage-settings/cta';
                    
                    const form = document.getElementById('bw-theme-form');
                    const btnSave = document.getElementById('bw-save-theme');
                    const spinner = document.getElementById('bw-theme-spinner');
                    const notice = document.getElementById('bw-theme-notice');
                    const msg = document.getElementById('bw-theme-message');
                    
                    Promise.all([
                        fetch(apiEndpointHero).then(res => res.json()).catch(() => ({})),
                        fetch(apiEndpointCta).then(res => res.json()).catch(() => ({}))
                    ]).then(([resHero, resCta]) => {
                        if (resHero.data && resHero.data.theme) {
                            document.getElementById('hero_title').value = resHero.data.theme.title || '';
                            document.getElementById('hero_bg_image').value = resHero.data.theme.bgImage || '';
                            document.getElementById('hero_overlay_opacity').value = resHero.data.theme.overlayOpacity || '';
                        }
                        if (resCta.data) {
                            document.getElementById('cta_title').value = resCta.data.title || '';
                            document.getElementById('cta_wa_url').value = resCta.data.whatsappUrl || '';
                            document.getElementById('cta_bg_image').value = resCta.data.bgImage || '';
                        }
                    });

                    form.addEventListener('submit', function(e) {
                        e.preventDefault();
                        btnSave.disabled = true;
                        spinner.classList.add('is-active');
                        notice.style.display = 'none';

                        Promise.all([
                            fetch(apiEndpointHero).then(res => res.json()).catch(() => ({})),
                            fetch(apiEndpointCta).then(res => res.json()).catch(() => ({}))
                        ]).then(([resHero, resCta]) => {
                            let currentHero = resHero.data || {};
                            currentHero.theme = {
                                title: document.getElementById('hero_title').value,
                                bgImage: document.getElementById('hero_bg_image').value,
                                overlayOpacity: document.getElementById('hero_overlay_opacity').value
                            };
                            
                            let currentCta = resCta.data || {};
                            currentCta.title = document.getElementById('cta_title').value;
                            currentCta.whatsappUrl = document.getElementById('cta_wa_url').value;
                            currentCta.bgImage = document.getElementById('cta_bg_image').value;
                            
                            Promise.all([
                                fetch(apiEndpointHero, {
                                    method: 'PATCH',
                                    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': '<?php echo wp_create_nonce('wp_rest'); ?>' },
                                    body: JSON.stringify(currentHero)
                                }),
                                fetch(apiEndpointCta, {
                                    method: 'PATCH',
                                    headers: { 'Content-Type': 'application/json', 'X-WP-Nonce': '<?php echo wp_create_nonce('wp_rest'); ?>' },
                                    body: JSON.stringify(currentCta)
                                })
                            ])
                            .then(() => {
                                btnSave.disabled = false;
                                spinner.classList.remove('is-active');
                                notice.style.borderLeftColor = '#46b450';
                                notice.style.display = 'block';
                                msg.innerText = 'Pengaturan tema berhasil disimpan!';
                            })
                            .catch(err => {
                                btnSave.disabled = false;
                                spinner.classList.remove('is-active');
                                notice.style.borderLeftColor = '#dc3232';
                                notice.style.display = 'block';
                                msg.innerText = 'Terjadi kesalahan saat menyimpan.';
                            });
                        });
                    });
                });
                </script>
            <?php endif; ?>
        </div>
        <?php
    }
}
