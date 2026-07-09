/**
 * Tentang Wiguna Page — Bengkel Wiguna
 * Server component wrapper with SEO metadata
 * Optimized for Core Web Vitals
 */

import TentangWigunaClient from './TentangWigunaClient'
import JsonLd from '@/components/layout/JsonLd'
import { generateAboutPageSchema, generateOrganizationSchema } from '@/lib/seo'

// ISR - Revalidate every 24 hours
export const revalidate = 86400

// Generate static params for faster loading (if needed for static generation)
export const dynamicParams = true

// ✅ ENHANCED SEO METADATA for About Page
export async function generateMetadata() {
  return {
    title: 'Tentang Bengkel Wiguna | Cerita, Visi, dan Nilai Kami',
    description: 'Bengkel Wiguna - bengkel one stop service terpercaya di Depok sejak 1990. Visi kami menjadi bengkel mobil terpercaya dengan layanan transparan dan profesional.',
    keywords: [
      'tentang bengkel wiguna',
      'sejarah bengkel wiguna',
      'visi misi bengkel wiguna',
      'bengkel depok terpercaya',
      'bengkel mobil depok sejak 1990',
      'mekanik berpengalaman depok',
      'pelayanan bengkel transparan',
      'bengkel jujur depok'
    ],
    openGraph: {
      title: 'Tentang Bengkel Wiguna | Cerita, Visi, dan Nilai Kami',
      description: 'Bengkel Wiguna - bengkel one stop service terpercaya di Depok sejak 1990. Visi kami menjadi bengkel mobil terpercaya dengan layanan transparan.',
      url: 'https://bengkelwiguna.com/tentang-wiguna',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Tentang+Bengkel+Wiguna&page=about',
          width: 1200,
          height: 630,
          alt: 'Tentang Bengkel Wiguna - Sejarah & Visi',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tentang Bengkel Wiguna | Cerita, Visi, dan Nilai Kami',
      description: 'Bengkel one stop service terpercaya di Depok sejak 1990.',
      images: ['https://bengkelwiguna.com/api/og?title=Tentang+Bengkel+Wiguna&page=about'],
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
      canonical: 'https://bengkelwiguna.com/tentang-wiguna',
    },
  }
}

export default async function TentangWigunaPage() {
  return (
    <>
      <JsonLd data={generateAboutPageSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <TentangWigunaClient />
    </>
  )
}
