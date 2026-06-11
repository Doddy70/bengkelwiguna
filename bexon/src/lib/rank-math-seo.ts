/**
 * Rank Math SEO Integration for Next.js / Headless WordPress
 * Based on seo skill patterns for Bengkel Wiguna
 *
 * Rank Math Pro REST API Integration:
 * - rank_math_title
 * - rank_math_description
 * - rank_math_og_title
 * - rank_math_og_description
 * - rank_math_og_image
 * - rank_math_canonical
 * - rank_math_head (raw HTML)
 * - rank_math_schema (JSON-LD)
 */

import { WP_API_BASE, REVALIDATE_TIME_LONG } from './constants'

// ============================================
// TYPES
// ============================================

export interface RankMathSEO {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string | null
  twitterTitle: string
  twitterDescription: string
  canonical: string
  headHtml: string // Raw HTML from rank_math_head
  schema: RankMathSchema | null
  robots: string | null
  keywords: string[]
}

export interface RankMathSchema {
  '@context': string
  '@type': string
  [key: string]: unknown
}

export interface RankMathPostMeta {
  rank_math_title: string
  rank_math_description: string
  rank_math_og_title: string
  rank_math_og_description: string
  rank_math_og_image: string
  rank_math_twitter_title: string
  rank_math_twitter_description: string
  rank_math_canonical: string
  rank_math_head: string
  rank_math_robots: string
  rank_math_keywords: string
  rank_math_focus_keyword: string
}

// ============================================
// EXTRACT SEO DATA FROM WORDPRESS RESPONSE
// ============================================

/**
 * Extract Rank Math SEO data from WordPress post/page
 * @see seo skill: Structured data (JSON-LD)
 */
export function extractRankMathSEO(post: Record<string, unknown>): RankMathSEO {
  return {
    // Title - prioritize Rank Math, fallback to Yoast, then WP title
    title:
      (post.rank_math_title as string) ||
      (post.yoast_head_json as { title?: string })?.title ||
      (post.title as { rendered?: string })?.rendered ||
      '',

    // Description
    description:
      (post.rank_math_description as string) ||
      (post.yoast_head_json as { description?: string })?.description ||
      extractExcerpt(post),

    // Open Graph
    ogTitle:
      (post.rank_math_og_title as string) ||
      (post.yoast_head_json as { og_title?: string })?.og_title ||
      '',

    ogDescription:
      (post.rank_math_og_description as string) ||
      (post.yoast_head_json as { og_description?: string })?.og_description ||
      '',

    ogImage:
      (post.rank_math_og_image as string) ||
      ((post.yoast_head_json as { og_image?: Array<{ url: string }> })?.og_image?.[0]?.url) ||
      null,

    // Twitter
    twitterTitle:
      (post.rank_math_twitter_title as string) ||
      (post.yoast_head_json as { twitter_title?: string })?.twitter_title ||
      '',

    twitterDescription:
      (post.rank_math_twitter_description as string) ||
      (post.yoast_head_json as { twitter_description?: string })?.twitter_description ||
      '',

    // Canonical
    canonical: (post.rank_math_canonical as string) || (post.yoast_head_json as { canonical?: string })?.canonical || '',

    // Raw head HTML (Rank Math Pro feature)
    headHtml: (post.rank_math_head as string) || '',

    // Schema
    schema: extractRankMathSchema(post),

    // Robots
    robots: (post.rank_math_robots as string) || null,

    // Keywords
    keywords: parseKeywords(post.rank_math_keywords as string || ''),
  }
}

/**
 * Extract excerpt from post content
 */
function extractExcerpt(post: Record<string, unknown>): string {
  // Try Rank Math
  if (post.rank_math_description) return post.rank_math_description as string

  // Try Yoast
  const yoast = post.yoast_head_json as { description?: string }
  if (yoast?.description) return yoast.description

  // Try WP excerpt
  const excerpt = post.excerpt as { rendered?: string }
  if (excerpt?.rendered) {
    return stripHtml(excerpt.rendered)
  }

  return ''
}

/**
 * Extract JSON-LD schema from Rank Math
 */
function extractRankMathSchema(post: Record<string, unknown>): RankMathSchema | null {
  // Try rank_math_schema field
  const schemaJson = post.rank_math_schema
  if (typeof schemaJson === 'string' && schemaJson) {
    try {
      return JSON.parse(schemaJson)
    } catch {
      // Not valid JSON
    }
  }

  // Try from rank_math_head HTML
  const headHtml = post.rank_math_head as string
  if (headHtml) {
    const jsonLdMatch = headHtml.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i)
    if (jsonLdMatch) {
      try {
        return JSON.parse(jsonLdMatch[1])
      } catch {
        // Invalid JSON-LD
      }
    }
  }

  return null
}

/**
 * Parse keywords from comma-separated string
 */
function parseKeywords(keywordsStr: string): string[] {
  if (!keywordsStr) return []
  return keywordsStr.split(',').map((k) => k.trim()).filter(Boolean)
}

/**
 * Strip HTML tags
 */
function stripHtml(html: string): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

// ============================================
// META TAG GENERATION
// ============================================

/**
 * Generate Next.js metadata from Rank Math SEO
 * @see seo skill: Title tags, Meta descriptions
 */
export function generateRankMathMetadata(seo: RankMathSEO, baseUrl: string) {
  return {
    // Basic
    title: seo.title,
    description: seo.description,

    // Open Graph
    openGraph: {
      title: seo.ogTitle || seo.title,
      description: seo.ogDescription || seo.description,
      images: seo.ogImage ? [{ url: seo.ogImage, width: 1200, height: 630 }] : [],
      type: 'website' as const,
      locale: 'id_ID',
      siteName: 'Bengkel Wiguna',
      url: seo.canonical || baseUrl,
    },

    // Twitter
    twitter: {
      card: 'summary_large_image' as const,
      title: seo.twitterTitle || seo.ogTitle || seo.title,
      description: seo.twitterDescription || seo.ogDescription || seo.description,
      images: seo.ogImage ? [seo.ogImage] : [],
      site: '@bengkelwiguna',
    },

    // Robots
    robots: seo.robots
      ? {
          index: seo.robots.includes('index'),
          follow: seo.robots.includes('follow'),
          noarchive: seo.robots.includes('noarchive'),
        }
      : undefined,

    // Canonical
    alternates: {
      canonical: seo.canonical || baseUrl,
    },

    // Keywords
    keywords: seo.keywords.join(', '),
  }
}

// ============================================
// JSON-LD SCHEMA GENERATION
// ============================================

/**
 * Generate complete JSON-LD for a page
 * @see seo skill: Structured data (JSON-LD)
 */
export function generateRankMathJSONLD(
  seo: RankMathSEO,
  pageType: 'homepage' | 'post' | 'page' | 'service' | 'archive'
): Record<string, unknown> {
  const schemas: Record<string, unknown>[] = []

  // 1. WebSite Schema (always on homepage)
  if (pageType === 'homepage') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Bengkel Wiguna',
      url: 'https://bengkelwiguna.com',
      description: 'Bengkel mobil terpercaya di Depok',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://bengkelwiguna.com/search?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    })

    // 2. LocalBusiness Schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'AutoRepairShop'],
      name: 'Bengkel Wiguna',
      description: 'Bengkel mobil profesional di Depok',
      url: 'https://bengkelwiguna.com',
      telephone: '+62-21-xxxx-xxxx',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Raya Bogor Km 25',
        addressLocality: 'Depok',
        addressRegion: 'Jawa Barat',
        postalCode: '16411',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-6.3675',
        longitude: '106.8221',
      },
      openingHours: 'Mo-Fr 08:00-17:00, Sa 08:00-15:00',
      priceRange: '$$$',
    })
  }

  // 3. Use Rank Math's own schema if available
  if (seo.schema) {
    schemas.push(seo.schema)
  }

  // 4. Article schema for blog posts
  if (pageType === 'post') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: seo.title,
      description: seo.description,
      datePublished: new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'Bengkel Wiguna',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Bengkel Wiguna',
        logo: {
          '@type': 'ImageObject',
          url: 'https://bengkelwiguna.com/logo.png',
        },
      },
    })
  }

  // Return first schema for single output, or composite for multi
  return schemas[0] || {}
}

// ============================================
// RANK MATH API INTEGRATION
// ============================================

/**
 * Fetch posts with Rank Math SEO data
 * @see seo skill: Rank Math REST API
 */
export async function fetchPostsWithSEO(page = 1, perPage = 10) {
  const response = await fetch(
    `${WP_API_BASE}/posts?page=${page}&per_page=${perPage}&_embed&rank_math_seo=1`,
    { next: { revalidate: REVALIDATE_TIME_LONG } }
  )

  if (!response.ok) return []

  const posts = await response.json()
  return posts.map((post: Record<string, unknown>) => ({
    ...post,
    seo: extractRankMathSEO(post),
  }))
}

/**
 * Fetch single post with full Rank Math SEO
 */
export async function fetchPostWithSEO(slug: string) {
  const response = await fetch(
    `${WP_API_BASE}/posts?slug=${slug}&_embed&rank_math_seo=1`,
    { next: { revalidate: REVALIDATE_TIME_LONG } }
  )

  if (!response.ok) return null

  const posts = await response.json()
  if (!posts.length) return null

  const post = posts[0]
  return {
    ...post,
    seo: extractRankMathSEO(post),
  }
}

// ============================================
// RANK MATH SCHEMA TYPES
// ============================================

export const RANK_MATH_SCHEMA_TYPES = {
  ARTICLE: 'Article',
  BLOG_POSTING: 'BlogPosting',
  NEWS_ARTICLE: 'NewsArticle',
  SERVICE: 'Service',
  PRODUCT: 'Product',
  LOCAL_BUSINESS: 'LocalBusiness',
  AUTO_REPAIR_SHOP: 'AutoRepairShop',
  ORGANIZATION: 'Organization',
  WEB_SITE: 'WebSite',
  FAQ_PAGE: 'FAQPage',
  BREADCRUMB_LIST: 'BreadcrumbList',
  PERSON: 'Person',
} as const

// ============================================
// VALIDATION
// ============================================

/**
 * Validate Rank Math SEO configuration
 * @see seo skill: Title tag guidelines (50-60 chars)
 */
export function validateRankMathSEO(seo: RankMathSEO): {
  valid: boolean
  warnings: string[]
  errors: string[]
} {
  const warnings: string[] = []
  const errors: string[] = []

  // Title validation (50-60 chars)
  if (!seo.title) {
    errors.push('Title is missing')
  } else {
    if (seo.title.length > 60) errors.push(`Title too long: ${seo.title.length} chars (max 60)`)
    if (seo.title.length < 50) warnings.push(`Title too short: ${seo.title.length} chars (optimal 50-60)`)
  }

  // Description validation (150-160 chars)
  if (!seo.description) {
    errors.push('Meta description is missing')
  } else {
    if (seo.description.length > 160) errors.push(`Description too long: ${seo.description.length} chars (max 160)`)
    if (seo.description.length < 150) warnings.push(`Description too short: ${seo.description.length} chars (optimal 150-160)`)
  }

  // Image validation
  if (!seo.ogImage) {
    warnings.push('OG image is missing - social sharing may be affected')
  }

  // Schema validation (GEO / AI SEO critical)
  if (!seo.schema) {
    errors.push('No structured data (JSON-LD) found - Critical for AI Citation / GEO')
  }

  // Keywords validation
  if (seo.keywords.length === 0) {
    errors.push('No focus keywords configured - Critical for SEO mapping')
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors,
  }
}

// ============================================
// EXPORTS
// ============================================

export {
  extractRankMathSEO,
  generateRankMathMetadata,
  generateRankMathJSONLD,
  fetchPostsWithSEO,
  fetchPostWithSEO,
  RANK_MATH_SCHEMA_TYPES,
  validateRankMathSEO,
}