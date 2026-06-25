/**
 * Promosi Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import PromosiArchiveClient from './PromosiArchiveClient'
import { getAllPromosi, getHomepageSettings } from '@/lib/wordpress'

export const revalidate = 60

// ✅ ENHANCED SEO METADATA for Promosi Page
export async function generateMetadata() {
  return {
    title: 'Promo & Diskon Service Mobil | Bengkel Wiguna',
    description: 'Dapatkan promo dan diskon menarik untuk perawatan kendaraan Anda di Bengkel Wiguna. Hemat hingga 20% untuk service berkala, ganti oli, dan paket service spesial.',
    keywords: [
      'promo bengkel depok',
      'diskon service mobil',
      'promo ganti oli',
      'promo service ac',
      'hemat bengkel mobil',
      'paket hemat service mobil',
      'promo bengkel wiguna',
      'diskon perawatan kendaraan',
      ' promo tune up',
      'promo body repair'
    ],
    openGraph: {
      title: 'Promo & Diskon Service Mobil | Bengkel Wiguna',
      description: 'Dapatkan promo dan diskon menarik untuk perawatan kendaraan Anda. Hemat hingga 20%!',
      url: 'https://bengkelwiguna.com/promosi',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Promo+Service+Mobil&page=promosi',
          width: 1200,
          height: 630,
          alt: 'Promo Bengkel Wiguna - Diskon Service Mobil',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Promo & Diskon Service Mobil | Bengkel Wiguna',
      description: 'Dapatkan promo dan diskon menarik untuk perawatan kendaraan Anda.',
      images: ['https://bengkelwiguna.com/api/og?title=Promo+Service+Mobil&page=promosi'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://bengkelwiguna.com/promosi',
    },
  }
}

export default async function PromosiPage() {
  const [promosi, hpSettings] = await Promise.all([
    getAllPromosi(),
    getHomepageSettings()
  ])
  const promosiList = Array.isArray(promosi) ? promosi : []
  const showPromoBulanan = hpSettings?.show_promo_bulanan !== false

  return (
    <PromosiArchiveClient promos={promosiList} showPromoBulanan={showPromoBulanan} />
  )
}