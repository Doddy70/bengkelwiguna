/**
 * Sitemap Generator for Bengkel Wiguna
 * @see seo skill: XML sitemap
 */

import { WP_API_BASE } from './constants'
import { generateSitemapUrl, generateSitemapIndex } from './seo'

// ============================================
// SITEMAP TYPES
// ============================================

export interface SitemapConfig {
  baseUrl: string
  defaultPriority?: number
  defaultChangefreq?: string
}

export interface SitemapEntry {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
}

export interface WPContentEntry {
  slug: string
  date: string
  modified?: string
  categories?: string[]
  type: 'post' | 'page' | 'service' | 'promosi'
}

// ============================================
// SITEMAP GENERATORS
// ============================================

/**
 * Generate main sitemap
 * @see seo skill: XML sitemap best practices (max 50K URLs, 50MB)
 */
export function generateMainSitemap(entries: SitemapEntry[], config: SitemapConfig): string {
  const { baseUrl } = config

  const urlEntries = entries
    .map(
      (entry) => `
  <url>
    <loc>${entry.loc}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''}
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ''}
    ${entry.priority ? `<priority>${entry.priority}</priority>` : ''}
  </url>`
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`
}

/**
 * Generate blog posts sitemap
 */
export function generatePostsSitemap(posts: Array<{ slug: string; date: string; modified?: string }>, baseUrl: string): string {
  const entries: SitemapEntry[] = posts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: post.modified || post.date,
    changefreq: 'monthly',
    priority: 0.7,
  }))

  return generateMainSitemap(entries, { baseUrl })
}

/**
 * Generate services sitemap
 */
export function generateServicesSitemap(services: Array<{ slug: string; modified?: string }>, baseUrl: string): string {
  const entries: SitemapEntry[] = services.map((service) => ({
    loc: `${baseUrl}/services/${service.slug}`,
    lastmod: service.modified,
    changefreq: 'weekly',
    priority: 0.8,
  }))

  return generateMainSitemap(entries, { baseUrl })
}

/**
 * Generate sitemap index for large sites
 * @see seo skill: Sitemap index for larger sites
 */
export function generateSitemapIndexFile(sitemaps: Array<{ loc: string; lastmod: string }>): string {
  return generateSitemapIndex(sitemaps)
}

// ============================================
// NEXT.JS SITEMAP ROUTE
// ============================================

/**
 * Generate Next.js App Router sitemap
 * Place this at app/sitemap.ts
 */
export const nextJsSitemapTemplate = `
import { MetadataRoute } from 'next'
import { getAllPosts, getAllServices, getAllPages } from '@/lib/wordpress'

const BASE_URL = 'https://bengkelwiguna.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, services, pages] = await Promise.all([
    getAllPostsFlat(),
    getAllServices(),
    getAllPages(),
  ])

  const routes = ['', '/services', '/blog', '/lokasi'].map((route) => ({
    url: \`\${BASE_URL}\${route}\`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogPosts = posts.map((post) => ({
    url: \`\${BASE_URL}/blog/\${post.slug}\`,
    lastModified: post.modified || post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const servicePages = services.map((service) => ({
    url: \`\${BASE_URL}/services/\${service.slug}\`,
    lastModified: service.modified || service.date,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticPages = pages.map((page) => ({
    url: \`\${BASE_URL}/\${page.slug}\`,
    lastModified: page.modified || page.date,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogPosts, ...servicePages, ...staticPages]
}
`

// ============================================
// ROBOTS.TXT FOR NEXT.JS
// ============================================

/**
 * Generate robots.txt for Next.js App Router
 * Place this at app/robots.ts
 */
export const nextJsRobotsTemplate = `
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/', '/checkout/', '/booking/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: [],
      },
      {
        userAgent: 'ClaudeBot',
        disallow: [],
      },
      {
        userAgent: 'PerplexityBot',
        disallow: [],
      },
    ],
    sitemap: 'https://bengkelwiguna.com/sitemap.xml',
    host: 'https://bengkelwiguna.com',
  }
}
`

// ============================================
// EXPORTS
// ============================================

export {
  generateMainSitemap,
  generatePostsSitemap,
  generateServicesSitemap,
  generateSitemapIndexFile,
  nextJsSitemapTemplate,
  nextJsRobotsTemplate,
}