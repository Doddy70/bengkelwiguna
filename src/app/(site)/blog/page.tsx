/**
 * Blog Archive Page — Bengkel Wiguna
 * Template: Blog Two (Exsit) adapted for WordPress posts
 */

import BlogArchiveClient from './BlogArchiveClient'
import { getAllPosts, getAllCategories } from '@/lib/wordpress'

export const revalidate = 43200

export const metadata = {
  title: 'Blog & Artikel | Bengkel Wiguna',
  description: 'Tips perawatan kendaraan, berita otomotif, dan informasi service dari tim teknisi berpengalaman Bengkel Wiguna.',
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