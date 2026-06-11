<?php
/**
 * BW Headless CMS - Custom Meta Boxes
 * Handles custom UI for post meta in the WordPress Admin
 */

if (!defined('ABSPATH')) exit;

class BW_Meta_Boxes {
    public function init() {
        add_action('add_meta_boxes', [$this, 'add_gallery_meta_box']);
        add_action('add_meta_boxes', [$this, 'add_shop_meta_box']);
        add_action('add_meta_boxes', [$this, 'add_paket_info_meta_box']);
        add_action('add_meta_boxes', [$this, 'add_spesialis_info_meta_box']);
        add_action('add_meta_boxes', [$this, 'add_spesialis_faq_meta_box']);
        add_action('save_post', [$this, 'save_gallery_meta_box']);
        add_action('save_post', [$this, 'save_shop_meta_box']);
        add_action('save_post', [$this, 'save_paket_info_meta_box']);
        add_action('save_post', [$this, 'save_spesialis_info_meta_box']);
        add_action('save_post', [$this, 'save_spesialis_faq_meta_box']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_media_scripts']);
    }

    public function enqueue_media_scripts($hook) {
        global $post;
        if ($hook == 'post-new.php' || $hook == 'post.php') {
            if (in_array($post->post_type, ['services', 'promosi', 'paket_service', 'layanan_spesialis'])) {
                wp_enqueue_media();
                wp_enqueue_style('bw-gallery-meta-box', false);
                wp_add_inline_style('bw-gallery-meta-box', '
                    .bw-gallery-images-container { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px; }
                    .bw-gallery-image-item { position: relative; width: 100px; height: 100px; border: 1px solid #ddd; }
                    .bw-gallery-image-item img { width: 100%; height: 100%; object-fit: cover; }
                    .bw-gallery-image-remove { position: absolute; top: -5px; right: -5px; background: red; color: white; border-radius: 50%; width: 20px; height: 20px; text-align: center; line-height: 18px; cursor: pointer; text-decoration: none; font-weight: bold; }
                    .bw-gallery-image-remove:hover { background: darkred; color: white; }
                ');
            }
        }
    }

    public function add_gallery_meta_box() {
        $screens = ['services', 'promosi', 'paket_service', 'layanan_spesialis'];
        foreach ($screens as $screen) {
            add_meta_box(
                'bw_gallery_meta_box',           // Unique ID
                'Galeri Pengerjaan (Work Gallery)',  // Box title
                [$this, 'render_gallery_meta_box'],  // Content callback
                $screen,                            // Post type
                'normal',                           // Context
                'high'                              // Priority
            );
        }
    }

    public function render_gallery_meta_box($post) {
        wp_nonce_field('bw_save_gallery_meta', 'bw_gallery_meta_nonce');

        $value = get_post_meta($post->ID, 'bw_gallery_images', true);
        $image_ids = !empty($value) ? explode(',', $value) : [];

        echo '<div id="bw-gallery-container">';
        echo '<div class="bw-gallery-images-container" id="bw-gallery-preview">';
        
        if (!empty($image_ids)) {
            foreach ($image_ids as $attachment_id) {
                if (empty($attachment_id)) continue;
                $url = wp_get_attachment_image_url($attachment_id, 'thumbnail');
                if ($url) {
                    echo '<div class="bw-gallery-image-item" data-id="' . esc_attr($attachment_id) . '">';
                    echo '<img src="' . esc_url($url) . '" alt="" />';
                    echo '<a href="#" class="bw-gallery-image-remove" title="Remove">&times;</a>';
                    echo '</div>';
                }
            }
        }
        
        echo '</div>';
        echo '<input type="hidden" name="bw_gallery_images" id="bw_gallery_images_input" value="' . esc_attr($value) . '" />';
        echo '<button type="button" class="button button-secondary" id="bw_upload_gallery_button">Pilih / Tambah Gambar Galeri</button>';
        echo '<p class="description">Pilih 3 gambar untuk galeri pengerjaan (Gambar 1: 870x420, Gambar 2&3: 420x420).</p>';
        echo '</div>';

        // JavaScript for Media Uploader
        ?>
        <script>
        jQuery(document).ready(function($){
            var mediaUploader;
            var inputField = $('#bw_gallery_images_input');
            var previewContainer = $('#bw-gallery-preview');

            $('#bw_upload_gallery_button').click(function(e) {
                e.preventDefault();
                
                if (mediaUploader) {
                    mediaUploader.open();
                    return;
                }
                
                mediaUploader = wp.media.frames.file_frame = wp.media({
                    title: 'Pilih Gambar untuk Galeri',
                    button: { text: 'Gunakan Gambar Ini' },
                    multiple: true
                });
                
                mediaUploader.on('select', function() {
                    var attachments = mediaUploader.state().get('selection').map(function(attachment) {
                        attachment.toJSON();
                        return attachment;
                    });

                    var currentIds = inputField.val() ? inputField.val().split(',') : [];
                    
                    attachments.forEach(function(attachment) {
                        var id = attachment.get('id').toString();
                        if (currentIds.indexOf(id) === -1) {
                            currentIds.push(id);
                            var url = attachment.attributes.sizes && attachment.attributes.sizes.thumbnail ? attachment.attributes.sizes.thumbnail.url : attachment.attributes.url;
                            
                            var imgHtml = '<div class="bw-gallery-image-item" data-id="'+id+'">' +
                                '<img src="'+url+'" alt="" />' +
                                '<a href="#" class="bw-gallery-image-remove" title="Remove">&times;</a>' +
                                '</div>';
                            previewContainer.append(imgHtml);
                        }
                    });
                    
                    inputField.val(currentIds.join(','));
                });
                
                mediaUploader.open();
            });

            previewContainer.on('click', '.bw-gallery-image-remove', function(e) {
                e.preventDefault();
                var item = $(this).closest('.bw-gallery-image-item');
                var idToRemove = item.data('id').toString();
                
                item.remove();
                
                var currentIds = inputField.val().split(',');
                var newIds = currentIds.filter(function(id) {
                    return id !== idToRemove;
                });
                
                inputField.val(newIds.join(','));
            });
        });
        </script>
        <?php
    }

    public function save_gallery_meta_box($post_id) {
        if (!isset($_POST['bw_gallery_meta_nonce']) || !wp_verify_nonce($_POST['bw_gallery_meta_nonce'], 'bw_save_gallery_meta')) {
            return;
        }

        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        if (isset($_POST['bw_gallery_images'])) {
            $sanitized_ids = sanitize_text_field($_POST['bw_gallery_images']);
            update_post_meta($post_id, 'bw_gallery_images', $sanitized_ids);
        } else {
            delete_post_meta($post_id, 'bw_gallery_images');
        }
    }

    public function add_shop_meta_box() {
        add_meta_box(
            'bw_shop_meta_box',
            'Detail Toko (Shop Data)',
            [$this, 'render_shop_meta_box'],
            'paket_service',
            'normal',
            'high'
        );
    }

    public function render_shop_meta_box($post) {
        wp_nonce_field('bw_save_shop_meta', 'bw_shop_meta_nonce');

        $price = get_post_meta($post->ID, 'price', true);
        $previousPrice = get_post_meta($post->ID, 'previousPrice', true);
        $status = get_post_meta($post->ID, 'status', true);
        $availability = get_post_meta($post->ID, 'availability', true);
        $bestSeller = get_post_meta($post->ID, 'bestSeller', true);
        $sku = get_post_meta($post->ID, 'sku', true);
        $reviews = get_post_meta($post->ID, 'reviews', true);
        $soldUnits = get_post_meta($post->ID, 'soldUnits', true);

        ?>
        <style>
            .bw-shop-field { margin-bottom: 15px; }
            .bw-shop-field label { display: inline-block; width: 150px; font-weight: bold; }
            .bw-shop-field input[type="text"], .bw-shop-field input[type="number"], .bw-shop-field select { width: 300px; }
        </style>
        <div class="bw-shop-field">
            <label for="shop_price">Harga (Price):</label>
            <input type="number" id="shop_price" name="shop_price" value="<?php echo esc_attr($price); ?>" />
        </div>
        <div class="bw-shop-field">
            <label for="shop_previous_price">Harga Coret (Prev):</label>
            <input type="number" id="shop_previous_price" name="shop_previous_price" value="<?php echo esc_attr($previousPrice); ?>" />
        </div>
        <div class="bw-shop-field">
            <label for="shop_status">Status Badge:</label>
            <input type="text" id="shop_status" name="shop_status" value="<?php echo esc_attr($status); ?>" placeholder="e.g. Sale, Sold, Hot" />
        </div>
        <div class="bw-shop-field">
            <label for="shop_availability">Ketersediaan:</label>
            <select id="shop_availability" name="shop_availability">
                <option value="In stock" <?php selected($availability, 'In stock'); ?>>In stock</option>
                <option value="Out of stock" <?php selected($availability, 'Out of stock'); ?>>Out of stock</option>
            </select>
        </div>
        <div class="bw-shop-field">
            <label for="shop_best_seller">Best Seller:</label>
            <select id="shop_best_seller" name="shop_best_seller">
                <option value="false" <?php selected($bestSeller, 'false'); ?>>Tidak</option>
                <option value="true" <?php selected($bestSeller, 'true'); ?>>Ya</option>
            </select>
        </div>
        <div class="bw-shop-field">
            <label for="shop_sku">SKU / Kode:</label>
            <input type="text" id="shop_sku" name="shop_sku" value="<?php echo esc_attr($sku); ?>" />
        </div>
        <div class="bw-shop-field">
            <label for="shop_reviews">Jumlah Review:</label>
            <input type="number" id="shop_reviews" name="shop_reviews" value="<?php echo esc_attr($reviews); ?>" />
        </div>
        <div class="bw-shop-field">
            <label for="shop_sold_units">Jumlah Terjual:</label>
            <input type="number" id="shop_sold_units" name="shop_sold_units" value="<?php echo esc_attr($soldUnits); ?>" />
        </div>
        <?php
    }

    public function save_shop_meta_box($post_id) {
        if (!isset($_POST['bw_shop_meta_nonce']) || !wp_verify_nonce($_POST['bw_shop_meta_nonce'], 'bw_save_shop_meta')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        $fields = [
            'price' => 'shop_price',
            'previousPrice' => 'shop_previous_price',
            'status' => 'shop_status',
            'availability' => 'shop_availability',
            'bestSeller' => 'shop_best_seller',
            'sku' => 'shop_sku',
            'reviews' => 'shop_reviews',
            'soldUnits' => 'shop_sold_units',
        ];

        foreach ($fields as $meta_key => $post_key) {
            if (isset($_POST[$post_key])) {
                $sanitized = sanitize_text_field($_POST[$post_key]);
                update_post_meta($post_id, $meta_key, $sanitized);
            } else {
                delete_post_meta($post_id, $meta_key);
            }
        }
    }

    public function add_paket_info_meta_box() {
        add_meta_box(
            'bw_paket_info_meta_box',
            'Informasi Tambahan & Ulasan Paket',
            [$this, 'render_paket_info_meta_box'],
            'paket_service',
            'normal',
            'high'
        );
    }

    public function render_paket_info_meta_box($post) {
        wp_nonce_field('bw_save_paket_info_meta', 'bw_paket_info_meta_nonce');

        $durasi = get_post_meta($post->ID, 'durasi_paket', true);
        $jenis_kendaraan = get_post_meta($post->ID, 'jenis_kendaraan', true);
        $garansi = get_post_meta($post->ID, 'garansi_paket', true);
        $ulasan = get_post_meta($post->ID, 'ulasan_paket', true);

        ?>
        <style>
            .bw-paket-field { margin-bottom: 15px; }
            .bw-paket-field label { display: inline-block; width: 150px; font-weight: bold; vertical-align: top; }
            .bw-paket-field input[type="text"] { width: 300px; }
            .bw-paket-field .description { display: block; margin-left: 154px; font-size: 12px; color: #666; }
        </style>
        <div class="bw-paket-field">
            <label for="durasi_paket">Durasi Pengerjaan:</label>
            <input type="text" id="durasi_paket" name="durasi_paket" value="<?php echo esc_attr($durasi); ?>" placeholder="e.g. 1-2 Jam" />
        </div>
        <div class="bw-paket-field">
            <label for="jenis_kendaraan">Jenis Kendaraan:</label>
            <input type="text" id="jenis_kendaraan" name="jenis_kendaraan" value="<?php echo esc_attr($jenis_kendaraan); ?>" placeholder="e.g. Semua Merk / Honda, Toyota" />
        </div>
        <div class="bw-paket-field">
            <label for="garansi_paket">Garansi:</label>
            <input type="text" id="garansi_paket" name="garansi_paket" value="<?php echo esc_attr($garansi); ?>" placeholder="e.g. 1 Minggu / 1000 KM" />
        </div>
        <div class="bw-paket-field">
            <label for="ulasan_paket">Ulasan Paket:</label>
            <div style="display:inline-block; width: 80%;">
                <?php
                wp_editor($ulasan, 'ulasan_paket', [
                    'textarea_name' => 'ulasan_paket',
                    'media_buttons' => false,
                    'textarea_rows' => 5,
                    'teeny'         => true,
                ]);
                ?>
            </div>
            <span class="description">Isi ulasan pelanggan atau review terkait paket ini. Mendukung HTML.</span>
        </div>
        <?php
    }

    public function save_paket_info_meta_box($post_id) {
        if (!isset($_POST['bw_paket_info_meta_nonce']) || !wp_verify_nonce($_POST['bw_paket_info_meta_nonce'], 'bw_save_paket_info_meta')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        $fields = [
            'durasi_paket'    => 'sanitize_text_field',
            'jenis_kendaraan' => 'sanitize_text_field',
            'garansi_paket'   => 'sanitize_text_field',
            'ulasan_paket'    => 'wp_kses_post', // Allows safe HTML for WYSIWYG
        ];

        foreach ($fields as $meta_key => $sanitize_callback) {
            if (isset($_POST[$meta_key])) {
                $value = $_POST[$meta_key];
                if ($sanitize_callback === 'wp_kses_post') {
                    $sanitized = wp_kses_post(wp_unslash($value));
                } else {
                    $sanitized = sanitize_text_field($value);
                }
                update_post_meta($post_id, $meta_key, $sanitized);
            } else {
                delete_post_meta($post_id, $meta_key);
            }
        }
    }

    public function add_spesialis_info_meta_box() {
        add_meta_box(
            'bw_spesialis_info_meta_box',
            'Informasi Tambahan Layanan Spesialis',
            [$this, 'render_spesialis_info_meta_box'],
            'layanan_spesialis',
            'normal',
            'high'
        );
    }

    public function render_spesialis_info_meta_box($post) {
        wp_nonce_field('bw_save_spesialis_info_meta', 'bw_spesialis_info_meta_nonce');

        $manfaat = get_post_meta($post->ID, 'manfaat_spesialis', true);
        $teknologi = get_post_meta($post->ID, 'teknologi_spesialis', true);

        ?>
        <style>
            .bw-spesialis-field { margin-bottom: 20px; }
            .bw-spesialis-field label { display: block; font-weight: bold; margin-bottom: 8px; }
            .bw-spesialis-field input[type="text"] { width: 100%; max-width: 600px; }
            .bw-spesialis-field .description { display: block; margin-top: 4px; font-size: 12px; color: #666; }
        </style>
        
        <div class="bw-spesialis-field">
            <label for="teknologi_spesialis">Alat / Teknologi yang Digunakan:</label>
            <input type="text" id="teknologi_spesialis" name="teknologi_spesialis" value="<?php echo esc_attr($teknologi); ?>" placeholder="e.g. Stinger Engine Flush, Kyoto Shaking Machine" />
            <span class="description">Sebutkan alat diagnostik atau teknologi spesifik yang membedakan layanan ini.</span>
        </div>

        <div class="bw-spesialis-field">
            <label for="manfaat_spesialis">Manfaat Utama Layanan:</label>
            <div style="width: 100%; max-width: 800px;">
                <?php
                wp_editor($manfaat, 'manfaat_spesialis', [
                    'textarea_name' => 'manfaat_spesialis',
                    'media_buttons' => false,
                    'textarea_rows' => 8,
                    'teeny'         => true,
                ]);
                ?>
            </div>
            <span class="description">Gunakan Bullet Points (Daftar Tidak Berurutan) untuk menuliskan manfaat. Mendukung HTML.</span>
        </div>
        <?php
    }

    public function save_spesialis_info_meta_box($post_id) {
        if (!isset($_POST['bw_spesialis_info_meta_nonce']) || !wp_verify_nonce($_POST['bw_spesialis_info_meta_nonce'], 'bw_save_spesialis_info_meta')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        // Teknologi - simple text field
        if (isset($_POST['teknologi_spesialis'])) {
            update_post_meta($post_id, 'teknologi_spesialis', sanitize_text_field($_POST['teknologi_spesialis']));
        } else {
            delete_post_meta($post_id, 'teknologi_spesialis');
        }

        // Manfaat - WYSIWYG, needs wp_kses_post
        if (isset($_POST['manfaat_spesialis'])) {
            update_post_meta($post_id, 'manfaat_spesialis', wp_kses_post(wp_unslash($_POST['manfaat_spesialis'])));
        } else {
            delete_post_meta($post_id, 'manfaat_spesialis');
        }
    }

    // =============================================
    // SPESIALIS FAQ & GAMBAR META BOX
    // =============================================
    public function add_spesialis_faq_meta_box() {
        add_meta_box(
            'bw_spesialis_faq_meta_box',
            'FAQ & Gambar Accordion',
            [$this, 'render_spesialis_faq_meta_box'],
            'layanan_spesialis',
            'normal',
            'high'
        );
    }

    public function render_spesialis_faq_meta_box($post) {
        wp_nonce_field('bw_save_spesialis_faq_meta', 'bw_spesialis_faq_meta_nonce');

        $faq_image = get_post_meta($post->ID, 'bw_spesialis_faq_image', true);
        $faqs_json = get_post_meta($post->ID, 'bw_spesialis_faq', true);
        $faqs = !empty($faqs_json) ? json_decode($faqs_json, true) : [];
        if (!is_array($faqs)) $faqs = [];

        $image_url = $faq_image; // Already saving URL

        ?>
        <style>
            .bw-faq-wrapper { margin-bottom: 20px; }
            .bw-faq-item { border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; background: #fafafa; position: relative; }
            .bw-faq-item label { display: block; font-weight: bold; margin-bottom: 5px; }
            .bw-faq-item input[type="text"], .bw-faq-item textarea { width: 100%; margin-bottom: 10px; }
            .bw-faq-remove { position: absolute; top: 10px; right: 10px; color: red; text-decoration: none; font-weight: bold; }
            .bw-faq-remove:hover { color: darkred; }
            .bw-faq-image-preview { margin-top: 10px; max-width: 300px; display: <?php echo $image_url ? 'block' : 'none'; ?>; }
            .bw-faq-image-preview img { width: 100%; height: auto; }
        </style>
        
        <div class="bw-faq-wrapper">
            <h4>Gambar Pendamping Accordion</h4>
            <div style="display: flex; gap: 10px; align-items: center;">
                <input type="text" name="bw_spesialis_faq_image" id="bw_spesialis_faq_image" value="<?php echo esc_attr($faq_image); ?>" style="width: 300px;" />
                <button type="button" class="button" id="bw_upload_faq_image_btn">Pilih / Upload Gambar</button>
            </div>
            <div class="bw-faq-image-preview" id="bw_faq_image_preview">
                <img src="<?php echo esc_url($image_url); ?>" alt="" />
                <button type="button" class="button button-link-delete" id="bw_remove_faq_image_btn" style="margin-top: 5px;">Hapus Gambar</button>
            </div>
            <p class="description">URL atau ID gambar yang akan muncul di samping accordion FAQ.</p>
        </div>

        <div class="bw-faq-wrapper">
            <h4>Daftar Tanya Jawab (FAQ)</h4>
            <div id="bw-faq-list">
                <?php foreach ($faqs as $index => $faq): ?>
                <div class="bw-faq-item">
                    <a href="#" class="bw-faq-remove">&times; Hapus</a>
                    <label>Pertanyaan</label>
                    <input type="text" name="bw_faqs[<?php echo $index; ?>][q]" value="<?php echo esc_attr($faq['q']); ?>" placeholder="Masukkan pertanyaan..." />
                    <label>Jawaban</label>
                    <textarea name="bw_faqs[<?php echo $index; ?>][a]" rows="3" placeholder="Masukkan jawaban..."><?php echo esc_textarea($faq['a']); ?></textarea>
                </div>
                <?php endforeach; ?>
            </div>
            <button type="button" class="button button-primary" id="bw_add_faq_btn">+ Tambah FAQ Baru</button>
        </div>

        <script>
        jQuery(document).ready(function($) {
            // Media Uploader for FAQ Image
            var file_frame;
            $('#bw_upload_faq_image_btn').on('click', function(e) {
                e.preventDefault();
                if (file_frame) {
                    file_frame.open();
                    return;
                }
                file_frame = wp.media.frames.file_frame = wp.media({
                    title: 'Pilih Gambar FAQ',
                    button: { text: 'Gunakan Gambar Ini' },
                    multiple: false
                });
                file_frame.on('select', function() {
                    var attachment = file_frame.state().get('selection').first().toJSON();
                    var imageUrl = attachment.url;
                    if (attachment.sizes && attachment.sizes.large) {
                        imageUrl = attachment.sizes.large.url;
                    }
                    $('#bw_spesialis_faq_image').val(imageUrl); // Save URL
                    $('#bw_faq_image_preview img').attr('src', imageUrl);
                    $('#bw_faq_image_preview').show();
                });
                file_frame.open();
            });

            $('#bw_remove_faq_image_btn').on('click', function(e) {
                e.preventDefault();
                $('#bw_spesialis_faq_image').val('');
                $('#bw_faq_image_preview').hide();
                $('#bw_faq_image_preview img').attr('src', '');
            });

            // Repeater for FAQs
            var faqIndex = <?php echo count($faqs); ?>;
            $('#bw_add_faq_btn').on('click', function(e) {
                e.preventDefault();
                var html = '<div class="bw-faq-item">' +
                    '<a href="#" class="bw-faq-remove">&times; Hapus</a>' +
                    '<label>Pertanyaan</label>' +
                    '<input type="text" name="bw_faqs[' + faqIndex + '][q]" value="" placeholder="Masukkan pertanyaan..." />' +
                    '<label>Jawaban</label>' +
                    '<textarea name="bw_faqs[' + faqIndex + '][a]" rows="3" placeholder="Masukkan jawaban..."></textarea>' +
                    '</div>';
                $('#bw-faq-list').append(html);
                faqIndex++;
            });

            $('#bw-faq-list').on('click', '.bw-faq-remove', function(e) {
                e.preventDefault();
                $(this).closest('.bw-faq-item').remove();
            });
        });
        </script>
        <?php
    }

    public function save_spesialis_faq_meta_box($post_id) {
        if (!isset($_POST['bw_spesialis_faq_meta_nonce']) || !wp_verify_nonce($_POST['bw_spesialis_faq_meta_nonce'], 'bw_save_spesialis_faq_meta')) {
            return;
        }
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        // Save Image
        if (isset($_POST['bw_spesialis_faq_image'])) {
            update_post_meta($post_id, 'bw_spesialis_faq_image', sanitize_text_field($_POST['bw_spesialis_faq_image']));
        }

        // Save FAQs
        if (isset($_POST['bw_faqs']) && is_array($_POST['bw_faqs'])) {
            $sanitized_faqs = [];
            foreach ($_POST['bw_faqs'] as $faq) {
                if (!empty($faq['q']) || !empty($faq['a'])) {
                    $sanitized_faqs[] = [
                        'q' => sanitize_text_field($faq['q']),
                        'a' => wp_kses_post($faq['a'])
                    ];
                }
            }
            update_post_meta($post_id, 'bw_spesialis_faq', json_encode($sanitized_faqs));
        } else {
            delete_post_meta($post_id, 'bw_spesialis_faq');
        }
    }
}
