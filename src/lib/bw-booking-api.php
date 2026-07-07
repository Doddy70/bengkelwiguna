<?php
/**
 * Plugin Name: BW Booking API
 * Description: Custom booking form API endpoint
 */

add_action('rest_api_init', function() {
    register_rest_route('bw/v1', '/submit-booking', array(
        'methods'  => 'POST',
        'callback' => 'bw_submit_booking_form',
        'permission_callback' => '__return_true',
    ));
});

function bw_submit_booking_form(WP_REST_Request $request) {
    global $wpdb;

    $params = $request->get_json_params();
    $fields = $params['fields'] ?? array();

    // Accept both 'your-phone' and 'your-tel' field names
    $name = sanitize_text_field($fields['your-name'] ?? '');
    $email = sanitize_email($fields['your-email'] ?? '');
    $phone = sanitize_text_field($fields['your-phone'] ?? $fields['your-tel'] ?? '');
    $service = sanitize_text_field($fields['service-type'] ?? '');
    $message = sanitize_textarea_field($fields['your-message'] ?? '');

    if (empty($name) || empty($phone)) {
        return new WP_REST_Response(array(
            'success' => false,
            'message' => 'Nama dan telepon wajib diisi.'
        ), 400);
    }

    // Get CF7 form ID
    $cf7_form = $wpdb->get_row($wpdb->prepare(
        "SELECT ID FROM {$wpdb->prefix}posts WHERE post_name = %s AND post_type = 'wpcf7_contact_form'",
        'b5abf32'
    ));
    $form_id = $cf7_form ? $cf7_form->ID : 125;

    // Insert into Contact Form Entries table
    $table_name = $wpdb->prefix . 'contact_form_entry';
    if ($wpdb->get_var("SHOW TABLES LIKE '{$table_name}'") === $table_name) {
        $entry_fields = json_encode(array(
            'your-name' => $name,
            'your-email' => $email,
            'your-phone' => $phone,
            'service-type' => $service,
            'your-message' => $message,
        ));

        $wpdb->insert($table_name, array(
            'form_id' => $form_id,
            'status' => 'new',
            'data' => $entry_fields,
            'date' => current_time('mysql'),
        ));
        $entry_id = $wpdb->insert_id;
    } else {
        $entry_id = 0;
    }

    // Send email notification
    $to = get_option('admin_email');
    $subject = '[Bengkel Wiguna] Booking Baru: ' . $name;
    $body = "Booking baru dari website:\n\n";
    $body .= "Nama: " . $name . "\n";
    $body .= "Email: " . $email . "\n";
    $body .= "Telepon: " . $phone . "\n";
    $body .= "Layanan: " . $service . "\n";
    $body .= "Pesan: " . $message . "\n";
    wp_mail($to, $subject, $body);

    return new WP_REST_Response(array(
        'success' => true,
        'message' => 'Booking berhasil terkirim! Kami akan segera menghubungi Anda.',
        'entry_id' => $entry_id,
    ), 200);
}
