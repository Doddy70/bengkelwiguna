/**
 * Blog Archive Page — Bengkel Wiguna
 * Template: Blog Three adapted for WordPress posts
 */

import Header from '@/components/layout/Header'
import FooterModern from '@/components/heroui/footer-modern'
import BlogArchiveClient from './BlogArchiveClient'
import { getAllPosts, getAllPostsFlat } from '@/lib/wordpress'

export const revalidate = 43200

export const metadata = {
  title: 'Blog & Artikel | Bengkel Wiguna',
  description: 'Tips perawatan kendaraan, berita otomotif, dan informasi service dari tim teknisi berpengalaman Bengkel Wiguna.',
}

export default async function BlogPage() {
  // Fetch posts
  const blogResult = await getAllPosts(1, 20)
  const posts = blogResult?.posts || []

  // Extract unique categories from posts
  const allPosts = await getAllPostsFlat()
  const categoriesSet = new Set<string>()
  allPosts.forEach((post: any) => {
    const categories = post._embedded?.['wp:term']?.[0] || []
    categories.forEach((cat: any) => {
      if (cat.name) categoriesSet.add(cat.name)
    })
  })
  const categories = Array.from(categoriesSet).sort()

  return (
    <>
      <Header
        position="fixed"
        bgColor="bg-[#050b14]/80 backdrop-blur-xl border-b border-white/10"
        theme="header-dark"
      />
      <BlogArchiveClient posts={posts} categories={categories} />
      <FooterModern />
    </>
  )
}