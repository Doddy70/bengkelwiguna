/**
 * WordPress Type Definitions - Bengkel Wiguna
 * Mandate: Gunakan interface di sini. Penggunaan 'any' dilarang.
 */

export interface WPImage {
  id: number;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface WPBaseItem {
  id: number;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  date?: string;
  modified?: string;
  featured_img?: string;
}

export interface WPPost extends WPBaseItem {
  categories?: number[];
  tags?: number[];
  author?: number;
}

export interface WPPromosi extends WPBaseItem {
  harga_asli?: string;
  harga_promo?: string;
  status_promo?: 'Aktif' | 'Berakhir';
  syarat_ketentuan?: string;
}

export interface WPPaketService extends WPBaseItem {
  harga_paket?: string;
  durasi_paket?: string;
  garansi_paket?: string;
  items_paket?: string;
  jenis_kendaraan?: string;
  gallery?: string[];
}

export interface WPLayananSpesialis extends WPBaseItem {
  icon_class?: string;
  benefit_list?: string[];
}

export interface WPMenu {
  id: number;
  name: string;
  path: string;
  isActive: boolean;
  submenu?: WPMenu[];
}

export interface APIResponse<T> {
  data: T;
  meta: {
    total?: number;
    totalPages?: number;
    version: string;
    generatedAt: string;
  };
}
