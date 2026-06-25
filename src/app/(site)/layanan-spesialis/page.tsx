/**
 * Layanan Spesialis Archive Page — Bengkel Wiguna
 */

import { getAllLayananSpesialis } from '@/lib/wordpress'
import ServicesArchiveClient from '../services/ServicesArchiveClient'

export const revalidate = 43200

// ✅ ENHANCED SEO METADATA for Layanan Spesialis Page
export async function generateMetadata() {
  return {
    title: 'Layanan Spesialis Mobil Modern | Bengkel Wiguna',
    description: 'Layanan spesialis dengan teknologi modern di Depok: Reset AC Kyoto Shaking Machine, Cek Kaki-Kaki Kyoto System, dan Semi Overhaul Stinger untuk performa optimal.',
    keywords: [
      'reset ac kyoto depok',
      'kyoto shaking machine',
      'semi overhaul stinger',
      'cek kaki-kaki kyoto',
      'service spesialis mobil depok',
      'modern automotive depok',
      'diagnostic modern',
      'kyoto system service',
      'engine overhaul depok',
      'stinger repair depok'
    ],
    openGraph: {
      title: 'Layanan Spesialis Mobil Modern | Bengkel Wiguna',
      description: 'Layanan spesialis dengan teknologi modern: Reset AC Kyoto, Cek Kaki-Kaki Kyoto, Semi Overhaul Stinger.',
      url: 'https://bengkelwiguna.com/layanan-spesialis',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Layanan+Spesialis+Mobil&page=spesialis',
          width: 1200,
          height: 630,
          alt: 'Layanan Spesialis Bengkel Wiguna - Teknologi Modern',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Layanan Spesialis Mobil Modern | Bengkel Wiguna',
      description: 'Layanan spesialis dengan teknologi modern di Depok.',
      images: ['https://bengkelwiguna.com/api/og?title=Layanan+Spesialis+Mobil&page=spesialis'],
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
      canonical: 'https://bengkelwiguna.com/layanan-spesialis',
    },
  }
}

export default async function LayananSpesialisPage() {
  const specialists = await getAllLayananSpesialis()
  const data = Array.isArray(specialists) ? specialists : []

  // Reuse the clean grid layout from ServicesArchiveClient
  return (
    <ServicesArchiveClient services={data} />
  )
}
