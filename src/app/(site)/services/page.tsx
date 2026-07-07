/**
 * Services Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import ServicesArchiveClient from './ServicesArchiveClient'
import { getAllServicesWithCategories } from '@/lib/wordpress'

export const revalidate = 43200

// ✅ ENHANCED SEO METADATA for Services Page
export async function generateMetadata() {
  return {
    title: 'Layanan Service Mobil Lengkap | Bengkel Wiguna Depok',
    description: 'Layanan service mobil terpercaya di Depok: tune up, ganti oli, service AC, spooring & balancing, body repair, kaki-kaki. Teknisi berpengalaman, diagnosa gratis. Booking sekarang!',
    keywords: [
      'service mobil depok',
      'bengkel mobil terpercaya depok',
      'ganti oli depok',
      'service ac mobil depok',
      'tune up depok',
      'spooring balancing depok',
      'body repair mobil depok',
      'kaki-kaki mobil depok',
      'service berkala depok',
      'bengkel one stop service depok'
    ],
    openGraph: {
      title: 'Layanan Service Mobil Lengkap | Bengkel Wiguna',
      description: 'Solusi lengkap perawatan kendaraan Anda di satu tempat. Tune up, ganti oli, service AC, dan lainnya.',
      url: 'https://bengkelwiguna.com/services',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Layanan+Service+Mobil&page=services',
          width: 1200,
          height: 630,
          alt: 'Layanan Service Mobil Bengkel Wiguna Depok',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Layanan Service Mobil Lengkap | Bengkel Wiguna',
      description: 'Solusi lengkap perawatan kendaraan Anda di satu tempat.',
      images: ['https://bengkelwiguna.com/api/og?title=Layanan+Service+Mobil&page=services'],
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
      canonical: 'https://bengkelwiguna.com/services',
    },
  }
}

export default async function ServicesPage() {
  const services = await getAllServicesWithCategories()
  const servicesList = Array.isArray(services) ? services : []

  return (
    <ServicesArchiveClient services={servicesList} />
  )
}