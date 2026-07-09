<?php
/**
 * Custom Taxonomy: Kategori Layanan
 *
 * For Services CPT - replaces BW Headless plugin taxonomy
 *
 * @package    BengkelWiguna
 * @subpackage Taxonomy
 * @version    1.0.0
 */

/**
 * Register Kategori Layanan taxonomy for Services CPT
 */
function bw_register_kategori_layanan_taxonomy() {

    $labels = array(
        'name'                       => _x( 'Kategori Layanan', 'Taxonomy General Name', 'bengkel-wiguna' ),
        'singular_name'              => _x( 'Kategori Layanan', 'Taxonomy Singular Name', 'bengkel-wiguna' ),
        'menu_name'                  => __( 'Kategori Layanan', 'bengkel-wiguna' ),
        'all_items'                  => __( 'Semua Kategori', 'bengkel-wiguna' ),
        'parent_item'                => __( 'Parent Kategori', 'bengkel-wiguna' ),
        'parent_item_colon'          => __( 'Parent Kategori:', 'bengkel-wiguna' ),
        'new_item_name'             => __( 'Nama Kategori Baru', 'bengkel-wiguna' ),
        'add_new_item'              => __( 'Tambah Kategori Baru', 'bengkel-wiguna' ),
        'edit_item'                 => __( 'Edit Kategori', 'bengkel-wiguna' ),
        'update_item'               => __( 'Update Kategori', 'bengkel-wiguna' ),
        'view_item'                 => __( 'Lihat Kategori', 'bengkel-wiguna' ),
        'separate_items_with_commas' => __( 'Pisahkan dengan koma', 'bengkel-wiguna' ),
        'add_or_remove_items'       => __( 'Tambah atau Hapus Kategori', 'bengkel-wiguna' ),
        'choose_from_most_used'     => __( 'Pilih dari yang paling sering digunakan', 'bengkel-wiguna' ),
        'popular_items'             => __( 'Kategori Populer', 'bengkel-wiguna' ),
        'search_items'              => __( 'Cari Kategori', 'bengkel-wiguna' ),
        'not_found'                 => __( 'Tidak Ditemukan', 'bengkel-wiguna' ),
        'no_terms'                  => __( 'Tidak ada kategori', 'bengkel-wiguna' ),
        'items_list'                => __( 'Daftar Kategori', 'bengkel-wiguna' ),
        'items_list_navigation'     => __( 'Navigasi Daftar Kategori', 'bengkel-wiguna' ),
    );

    $args = array(
        'labels'             => $labels,
        'hierarchical'       => true,  // True = like categories, False = like tags
        'public'             => true,
        'show_ui'            => true,
        'show_admin_column'  => true,
        'show_in_nav_menus'  => true,
        'show_tagcloud'      => true,
        'show_in_rest'       => true,  // IMPORTANT: Enable Gutenberg & REST API
        'query_var'          => true,
        'rewrite'           => array(
            'slug'         => 'kategori-layanan',
            'with_front'    => false,
            'hierarchical'  => true,
        ),
    );

    register_taxonomy( 'kategori_layanan', array( 'services' ), $args );

    // Also register for other CPTs if needed
    register_taxonomy_for_object_type( 'kategori_layanan', 'layanan_spesialis' );

}
add_action( 'init', 'bw_register_kategori_layanan_taxonomy', 0 );

/**
 * Flush rewrite rules on theme/plugin activation
 */
function bw_flush_rewrite_rules_on_activation() {
    // Uncomment the line below if you modify the taxonomy
    // flush_rewrite_rules();
}
// register_activation_hook( __FILE__, 'bw_flush_rewrite_rules_on_activation' );

/**
 * Add default categories for Services on theme activation
 */
function bw_create_default_kategori_layanan() {

    // Only run once
    $option_key = 'bw_default_kategori_created';
    if ( get_option( $option_key ) ) {
        return;
    }

    $default_categories = array(
        'Servis Kaki-Kaki'    => 'servis-kaki-kaki',
        'Servis AC Mobil'    => 'servis-ac-mobil',
        'Servis Berkala'      => 'servis-berkala',
        'Servis Rem'          => 'servis-rem',
        'Servis Transmisi'    => 'servis-transmisi',
        'Ganti Ban'           => 'ganti-ban',
        'Ganti Oli Mesin'     => 'ganti-oli-mesin',
        'Ganti Oli Transmisi' => 'ganti-oli-transmisi',
        'Overhaul'            => 'overhaul',
        'Semi Overhaul'       => 'semi-overhaul',
        'Balancing'           => 'balancing',
        'Spooring'            => 'spooring',
        'Tune Up'             => 'tune-up',
        'Carbon Cleaning'     => 'carbon-cleaning',
        'Servis Radiator'     => 'servis-radiator',
        'Flushing Radiator'   => 'flushing-radiator',
        'Paket Service'       => 'paket-service',
        'Diagnosa Scanner'    => 'diagnosa-scanner',
        'Servis Injektor'     => 'servis-injektor',
        'Servis Aki'          => 'servis-aki',
    );

    foreach ( $default_categories as $name => $slug ) {
        if ( ! term_exists( $name, 'kategori_layanan' ) ) {
            wp_insert_term(
                $name,
                'kategori_layanan',
                array(
                    'slug' => $slug,
                )
            );
        }
    }

    update_option( $option_key, true );
}
add_action( 'after_setup_theme', 'bw_create_default_kategori_layanan' );

/**
 * Get kategori layanan terms for REST API
 */
function bw_get_kategori_layanan_for_rest( $object, $field_name, $request ) {
    return get_the_terms( $object->ID, 'kategori_layanan' );
}

/**
 * Register meta field for REST API
 */
function bw_register_kategori_layanan_meta() {
    register_rest_field( 'services',
        'kategori_layanan',
        array(
            'get_callback'    => 'bw_get_kategori_layanan_for_rest',
            'update_callback' => null,
            'schema'          => null,
        )
    );
}
add_action( 'rest_api_init', 'bw_register_kategori_layanan_meta' );
