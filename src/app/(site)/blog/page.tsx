/**
 * Blog Archive Page — Bengkel Wiguna
 * Template: Blog Two (Exsit) adapted for WordPress posts
 */

import BlogArchiveClient from './BlogArchiveClient'
import { getAllPosts, getAllCategories } from '@/lib/wordpress'

export const revalidate = 43200

// ✅ ENHANCED SEO METADATA for Blog Page
export async function generateMetadata() {
  return {
    title: 'Blog & Artikel Perawatan Mobil | Bengkel Wiguna',
    description: 'Tips perawatan kendaraan, berita otomotif, dan panduan service dari tim teknisi berpengalaman Bengkel Wiguna. Edukasi gratis untuk pemilik mobil di Depok.',
    keywords: [
      'blog mobil depok',
      'tips perawatan mobil',
      'artikel service mobil',
      'edukasi otomotf',
      'berita bengkel depok',
      'tuning mobil',
      'perawatan kendaraan',
      'tanda mobil perlu service',
      'tips anti fraud bengkel',
      'informasi service mobil'
    ],
    openGraph: {
      title: 'Blog & Artikel Perawatan Mobil | Bengkel Wiguna',
      description: 'Tips perawatan kendaraan, berita otomotif, dan panduan service dari tim teknisi berpengalaman.',
      url: 'https://bengkelwiguna.com/blog',
      siteName: 'Bengkel Wiguna',
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: 'https://bengkelwiguna.com/api/og?title=Blog+Perawatan+Mobil&page=blog',
          width: 1200,
          height: 630,
          alt: 'Blog Bengkel Wiguna - Tips Perawatan Mobil',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Blog & Artikel Perawatan Mobil | Bengkel Wiguna',
      description: 'Tips perawatan kendaraan dari teknisi berpengalaman.',
      images: ['https://bengkelwiguna.com/api/og?title=Blog+Perawatan+Mobil&page=blog'],
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
      canonical: 'https://bengkelwiguna.com/blog',
    },
  }
}

export default async function BlogPage() {
  // Parallel Fetching for better performance
  const [blogResult, categories] = await Promise.all([
    getAllPosts(1, 20),
    getAllCategories()
  ])

  const posts = blogResult?.posts || []

  return (
    <BlogArchiveClient posts={posts} categories={categories} />
  )
}