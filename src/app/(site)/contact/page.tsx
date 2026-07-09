/**
 * Contact Page — Bengkel Wiguna
 * Server component wrapper with SEO metadata
 */

import ContactClient from './ContactClient'
import JsonLd from '@/components/layout/JsonLd'
import { generateContactPageSchema } from '@/lib/seo'
import { getAllServices } from '@/lib/wordpress'

export const revalidate = 86400

// ✅ ENHANCED SEO METADATA for Contact Page
export async function generateMetadata() {
  return {
    title: 'Hubungi Kami | Bengkel Wiguna - Booking Service & Konsultasi',
    description: 'Hubungi Bengkel Wiguna untuk booking service atau konsultasi gratis. WhatsApp 0878-1777-3888. Alamat: Jl. Margonda No.268, Depok. Jam operasional Senin-Sabtu 08:00-17:00.',
    keywords: [
      'hubungi bengkel wiguna',
      'booking service mobil depok',
      'konsultasi bengkel',
      'whatsapp bengkel depok',
      'alamat bengkel wiguna',
      'nomor telpon bengkel wiguna',
      'booking jadwal service',
      'konsultasi gratis mobil',
      'service mobil terdekat depok',
      'reservasi bengkel'
    ],
    openGraph: {
      title: 'Hubungi Kami | Bengkel Wiguna',
      description: 'Hubungi Bengkel Wiguna untuk booking service atau konsultasi gratis. WhatsApp respons cepat!',
      url: 'https://bengkelwiguna.com/contact',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Hubungi+Kami&page=contact',
          width: 1200,
          height: 630,
          alt: 'Hubungi Bengkel Wiguna',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hubungi Kami | Bengkel Wiguna',
      description: 'Hubungi Bengkel Wiguna untuk booking service atau konsultasi gratis.',
      images: ['https://bengkelwiguna.com/api/og?title=Hubungi+Kami&page=contact'],
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
      canonical: 'https://bengkelwiguna.com/contact',
    },
  }
}

export default async function ContactPage() {
  // Fetch services for the tag labels
  const services = await getAllServices()

  // Extract unique service names for tags
  const serviceTags = services
    .slice(0, 12) // Limit to 12 tags
    .map(service => ({
      name: typeof service.title === 'string' ? service.title : service.title.rendered,
      slug: service.slug
    }))

  return (
    <>
      <JsonLd data={generateContactPageSchema()} />
      <ContactClient serviceTags={serviceTags} />
    </>
  )
}
