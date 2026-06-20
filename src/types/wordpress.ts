/**
 * WordPress API Types — Bengkel Wiguna Next.js
 */

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: {
    rendered: string;
  } | string;
  content: {
    rendered: string;
    protected: boolean;
  } | string;
  excerpt: {
    rendered: string;
    protected: boolean;
  } | string;
  featured_media: number;
  link: string;
  categories?: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
      taxonomy: string;
    }>>;
  };
  // Rank Math SEO
  rank_math_title?: string;
  rank_math_description?: string;
  rank_math_focus_keyword?: string;
  rank_math_canonical?: string;
  rank_math_og_title?: string;
  rank_math_og_description?: string;
  rank_math_og_image?: string;
}

export interface Service extends WPPost {
  service_category?: number[];
  service_tag?: number[];
  featured_img?: string; // Direct URL from bw/v1 API
  harga?: string;
  durasi?: string;
  garansi?: string;
  gallery?: string[];
}

export interface Promosi extends WPPost {
  promosi_category?: number[];
  promosi_tag?: number[];
  featured_img?: string;
  harga_asli?: string;
  harga_promo?: string;
  diskon_persen?: string;
  tanggal_mulai?: string;
  tanggal_selesai?: string;
  gallery?: string[];
  manfaat?: string;
  kategori_promosi?: string;
  /** Jenis promosi: 'bulanan' untuk promo bulanan (hero slider), 'regular' untuk promo regular (carousel) */
  jenis_promosi?: 'bulanan' | 'regular';
  is_active?: boolean;
  /** FAQ promo — array dari { q: string, a: string } */
  faq?: FaqItem[];
  /** Syarat dan ketentuan promo */
  syarat_ketentuan?: string;
  /** ID Contact Form 7 yang dipilih untuk tab Booking */
  cf7_form_id?: string;
  /** Template pesan WhatsApp */
  wa_template?: string;
}

export interface PaketService extends WPPost {
  paket_category?: number[];
  paket_tag?: number[];
  featured_img?: string;
  harga_paket?: string;
  previousPrice?: string;
  durasi_paket?: string;
  garansi_paket?: string;
  items_paket?: string;
  jenis_kendaraan?: string;
  ulasan_paket?: string;
  soldUnits?: string;
  status?: string;
  availability?: string;
  bestSeller?: boolean;
  gallery?: string[];
}

export interface LayananSpesialis extends WPPost {
  spesialis_category?: number[];
  spesialis_tag?: number[];
  manfaat_spesialis?: string;
  teknologi_spesialis?: string;
  gallery?: string[];
  bw_spesialis_faq?: string; // JSON string from API
  bw_spesialis_faq_image?: string;
}

export interface PaginatedPosts<T> {
  posts: T[];
  total: number;
  totalPages: number;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface NavMenuItem {
  id: number;
  name: string;
  path: string;
  label: string;
  title?: string;
  target?: string;
  classes?: string[];
  menu_item_parent?: number;
  child_items?: NavMenuItem[];
  children?: NavMenuItem[]; // Alternate field name sometimes used
}

export interface NavMenu {
  source?: string;
  location: string;
  menu_name?: string;
  items: NavMenuItem[];
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}
