/**
 * Paket Service Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import PaketServiceArchiveClient from './PaketServiceArchiveClient'
import { getAllPaketService } from '@/lib/wordpress'

export const revalidate = 43200

// ✅ ENHANCED SEO METADATA for Paket Service Page
export async function generateMetadata() {
  return {
    title: 'Paket Service Mobil Lengkap | Bengkel Wiguna',
    description: 'Paket lengkap untuk kebutuhan spesifik kendaraan Anda: paket ganti oli, paket service AC, paket spooring, paket tune up, dan paket body repair dengan harga hemat.',
    keywords: [
      'paket service mobil depok',
      'paket ganti oli',
      'paket service ac',
      'paket spooring balancing',
      'paket tune up',
      'paket body repair',
      'paket service berkala',
      'paket hemat mobil',
      'harga paket service',
      'paket perawatan kendaraan'
    ],
    openGraph: {
      title: 'Paket Service Mobil Lengkap | Bengkel Wiguna',
      description: 'Paket lengkap untuk kebutuhan spesifik kendaraan Anda dengan harga hemat.',
      url: 'https://bengkelwiguna.com/paket-service',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Paket+Service+Mobil&page=paket',
          width: 1200,
          height: 630,
          alt: 'Paket Service Bengkel Wiguna',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Paket Service Mobil Lengkap | Bengkel Wiguna',
      description: 'Paket lengkap untuk kebutuhan spesifik kendaraan Anda.',
      images: ['https://bengkelwiguna.com/api/og?title=Paket+Service+Mobil&page=paket'],
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
      canonical: 'https://bengkelwiguna.com/paket-service',
    },
  }
}

export default async function PaketServicePage() {
  const pakets = await getAllPaketService()
  const paketList = Array.isArray(pakets) ? pakets : []

  return (
    <PaketServiceArchiveClient pakets={paketList} />
  )
}