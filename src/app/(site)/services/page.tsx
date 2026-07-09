/**
 * Services Archive Page — Bengkel Wiguna
 * Template: Shop Two with filters
 */

import ServicesArchiveClient from './ServicesArchiveClient'
import { getAllServices } from '@/lib/wordpress'

export const revalidate = 43200

// ✅ ENHANCED SEO METADATA for Services Page
export async function generateMetadata() {
  return {
    title: 'Service Mobil Depok Terpercaya | Bengkel Wiguna - Tune Up, Ganti Oli, AC',
    description: 'Service mobil terpercaya di Depok. Tune up, ganti oli, service AC, spooring & balancing, semi overhaul. Teknisi berpengalaman 30+ tahun. Diagnosa gratis. Booking sekarang!',
    keywords: [
      'service mobil depok',
      'bengkel mobil depok',
      'bengkel depok',
      'tune up mobil depok',
      'ganti oli depok',
      'service ac mobil depok',
      'bengkel one stop service depok',
      'service berkala mobil depok',
      'spooring balancing depok',
      'bengkel mobil terpercaya depok',
      'service mobil profesional depok',
      'bengkel margonda depok'
    ],
    openGraph: {
      title: 'Service Mobil Depok Terpercaya | Bengkel Wiguna',
      description: 'Layanan service mobil lengkap di Depok: tune up, ganti oli, service AC, spooring & balancing. Teknisi berpengalaman. Diagnosa gratis.',
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
  const services = await getAllServices()
  const servicesList = Array.isArray(services) ? services : []

  return (
    <ServicesArchiveClient services={servicesList} basePath="/services" />
  )
}