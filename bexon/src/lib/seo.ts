/**
 * SEO Optimization Utilities
 * Based on seo skill patterns for Bengkel Wiguna
 *
 * Features:
 * - Meta tags generation
 * - Structured data (JSON-LD) schemas
 * - Open Graph / Twitter cards
 * - Sitemap generation
 * - robots.txt
 * - Schema validation
 */

import { WP_API_BASE, REVALIDATE_TIME_LONG } from './constants'

// ============================================
// TYPES
// ============================================

export interface SEOMetadata {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
  robots?: string
}

export interface JSONLDSchema {
  '@context': string
  '@type': string
  [key: string]: unknown
}

export interface OpenGraphData {
  title: string
  description: string
  url: string
  type?: 'website' | 'article' | 'product'
  image?: string
  locale?: string
  siteName?: string
}

export interface TwitterCardData {
  card: 'summary' | 'summary_large_image'
  title: string
  description: string
  image?: string
  site?: string
}

// ============================================
// META TAG GENERATORS
// ============================================

/**
 * Generate comprehensive meta tags
 * @see seo skill: Title tags, Meta descriptions
 */
export function generateMetaTags(config: {
  title: string
  description: string
  canonical?: string
  robots?: string
  keywords?: string[]
  author?: string
}) {
  const { title, description, canonical, robots = 'index, follow', keywords, author } = config

  return {
    title,
    meta: {
      description,
      robots,
      keywords: keywords?.join(', '),
      author,
      // Open Graph
      'og:title': title,
      'og:description': description,
      'og:url': canonical,
      'og:type': 'website',
      'og:locale': 'id_ID',
      'og:site_name': 'Bengkel Wiguna',
      // Twitter
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
    },
  }
}

/**
 * Generate meta robots tag
 * @see seo skill: Meta robots
 */
export function generateRobotsMeta(options: {
  index?: boolean
  follow?: boolean
  noarchive?: boolean
  nosnippet?: boolean
  maxSnippet?: number
  maxImagePreview?: 'none' | 'standard' | 'large'
} = {}) {
  const {
    index = true,
    follow = true,
    noarchive = false,
    nosnippet = false,
    maxSnippet,
    maxImagePreview,
  } = options

  const parts = []

  if (index) parts.push('index')
  else parts.push('noindex')

  if (follow) parts.push('follow')
  else parts.push('nofollow')

  if (noarchive) parts.push('noarchive')
  if (nosnippet) parts.push('nosnippet')

  if (maxSnippet !== undefined) parts.push(`max-snippet:${maxSnippet}`)
  if (maxImagePreview) parts.push(`max-image-preview:${maxImagePreview}`)

  return parts.join(', ')
}

// ============================================
// STRUCTURED DATA (JSON-LD)
// ============================================

/**
 * Generate Organization schema
 * @see seo skill: Organization structured data
 */
export function generateOrganizationSchema(config?: { name?: string; url?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepairShop',
    name: config?.name || 'Bengkel Wiguna',
    url: config?.url || 'https://bengkelwiguna.com',
    logo: `${config?.url || 'https://bengkelwiguna.com'}/logo.png`,
    description: 'Bengkel mobil terpercaya di Depok dengan layanan perbaikan dan perawatan profesional.',
    foundingDate: '2015',
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
    telephone: '+62-21-xxxx-xxxx',
    email: 'info@bengkelwiguna.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '15:00',
      },
    ],
    priceRange: '$$$',
    areaServed: 'Depok, Jawa Barat, Indonesia',
    sameAs: [
      'https://www.facebook.com/bengkelwiguna',
      'https://www.instagram.com/bengkelwiguna',
      'https://www.youtube.com/bengkelwiguna',
    ],
  }
}

/**
 * Generate LocalBusiness schema
 * @see seo skill: Organization structured data
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepairShop'],
    name: 'Bengkel Wiguna',
    description: 'Bengkel mobil profesional di Depok. Layanan: service berkala, penggantian ban, spooring, rem, mesin, AC, aki, kaki-kaki.',
    url: 'https://bengkelwiguna.com',
    telephone: '+6287817773888',
    image: 'https://bengkelwiguna.com/images/brand/favicon.png',
    logo: 'https://bengkelwiguna.com/images/logos/logo-panjang-bengkelwiguna.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Bogor KM 25',
      addressLocality: 'Depok',
      addressRegion: 'Jawa Barat',
      postalCode: '16411',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.4025',
      longitude: '106.7942',
    },
    hasMap: 'https://maps.google.com/?q=Bengkel+Wiguna+Depok',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Transfer Bank',
    areaServed: 'Depok, Jawa Barat, Indonesia',
    sameAs: [
      'https://www.facebook.com/bengkelwiguna',
      'https://www.instagram.com/bengkelwiguna',
      'https://www.youtube.com/bengkelwiguna',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Bengkel',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Berkala' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penggantian Oli' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spooring & Balancing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Rem' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service AC' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penggantian Ban' } },
      ],
    },
  }
}

/**
 * Generate Service schema
 * @see seo skill: Product structured data
 */
export function generateServiceSchema(service: {
  id: number
  title: string
  slug: string
  content?: string
  excerpt?: string
  featuredImage?: string
  priceRange?: string
  duration?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.excerpt || service.content?.substring(0, 160) || '',
    url: `https://bengkelwiguna.com/services/${service.slug}`,
    image: service.featuredImage || undefined,
    provider: {
      '@type': 'AutoRepairShop',
      name: 'Bengkel Wiguna',
      url: 'https://bengkelwiguna.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Depok',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Service Options',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Standard Service',
          price: service.priceRange || '$$$',
          priceCurrency: 'IDR',
        },
      ],
    },
  }
}

/**
 * Generate FAQPage schema
 * @see seo skill: FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Article/BlogPosting schema
 * @see seo skill: Article structured data
 */
export function generateArticleSchema(post: {
  title: string
  slug: string
  excerpt?: string
  content?: string
  date: string
  modified?: string
  author?: string
  featuredImage?: string
  categories?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.content?.substring(0, 160) || '',
    url: `https://bengkelwiguna.com/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Person',
      name: post.author || 'Bengkel Wiguna',
      url: 'https://bengkelwiguna.com/author/admin',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Bengkel Wiguna',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bengkelwiguna.com/logo.png',
      },
    },
    image: post.featuredImage ? [post.featuredImage] : undefined,
    keywords: post.categories?.join(', '),
    articleSection: post.categories?.[0],
    wordCount: post.content?.split(' ').length || 0,
  }
}

/**
 * Generate BreadcrumbList schema
 * @see seo skill: Breadcrumbs structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate WebSite schema with search box
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bengkel Wiguna',
    url: 'https://bengkelwiguna.com',
    description: 'Bengkel mobil terpercaya di Depok. Service, repair, dan perawatan mobil profesional.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://bengkelwiguna.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ============================================
// OPEN GRAPH & TWITTER
// ============================================

/**
 * Generate Open Graph meta tags
 * @see seo skill: Open Graph
 */
export function generateOpenGraph(data: OpenGraphData) {
  return {
    'og:title': data.title,
    'og:description': data.description,
    'og:url': data.url,
    'og:type': data.type || 'website',
    'og:image': data.image,
    'og:locale': data.locale || 'id_ID',
    'og:site_name': data.siteName || 'Bengkel Wiguna',
  }
}

/**
 * Generate Twitter Card meta tags
 * @see seo skill: Twitter cards
 */
export function generateTwitterCard(data: TwitterCardData) {
  return {
    'twitter:card': data.card,
    'twitter:title': data.title,
    'twitter:description': data.description,
    'twitter:image': data.image,
    'twitter:site': data.site || '@bengkelwiguna',
  }
}

// ============================================
// SITEMAP GENERATION
// ============================================

/**
 * Generate XML sitemap URL entry
 * @see seo skill: XML sitemap
 */
export function generateSitemapUrl(config: {
  loc: string
  lastmod?: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}) {
  const { loc, lastmod, changefreq = 'weekly', priority = 0.5 } = config

  return `
  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

/**
 * Generate sitemap index entry
 */
export function generateSitemapIndex(sitemaps: Array<{ loc: string; lastmod: string }>) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) => `
  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
  )
  .join('')}
</sitemapindex>`
}

// ============================================
// ROBOTS.TXT
// ============================================

/**
 * Generate robots.txt content
 * @see seo skill: robots.txt
 */
export function generateRobotsTxt(options: {
  allow?: string[]
  disallow?: string[]
  sitemap?: string
  userAgent?: string[]
} = {}) {
  const { allow = ['/'], disallow = ['/admin/', '/api/', '/private/', '/checkout/'], sitemap = '/sitemap.xml', userAgent = ['*'] } = options

  let content = ''

  // User agents
  userAgent.forEach((ua) => {
    content += `User-agent: ${ua}\n`
  })

  // Disallow rules
  disallow.forEach((path) => {
    content += `Disallow: ${path}\n`
  })

  // Allow rules (override disallow)
  allow.forEach((path) => {
    if (path !== '/') {
      content += `Allow: ${path}\n`
    }
  })

  // Sitemap location
  content += `\nSitemap: ${sitemap}\n`

  return content
}

// ============================================
// CANONICAL URLS
// ============================================

/**
 * Generate canonical URL
 * @see seo skill: Canonical URLs
 */
export function generateCanonical(baseUrl: string, path: string, params?: Record<string, string>) {
  const url = new URL(path, baseUrl)

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })
  }

  return url.toString()
}

// ============================================
// HREFLANG
// ============================================

/**
 * Generate hreflang tags
 * @see seo skill: Hreflang tags
 */
export function generateHreflang(baseUrl: string, path: string, locales: string[]) {
  return locales.map((locale) => {
    const href = new URL(path, baseUrl).toString()
    const lang = locale.split('-')[0]

    return {
      rel: 'alternate',
      hreflang: locale,
      href: href.replace(baseUrl, `${baseUrl}/${locale}/`),
    }
  })
}

// ============================================
// SEO VALIDATION
// ============================================

/**
 * Check title tag length
 * @see seo skill: Title tag guidelines (50-60 chars)
 */
export function validateTitle(title: string): { valid: boolean; message?: string } {
  if (!title) {
    return { valid: false, message: 'Title is required' }
  }

  if (title.length > 60) {
    return { valid: false, message: `Title is ${title.length} characters (max 60)` }
  }

  return { valid: true }
}

/**
 * Check meta description length
 * @see seo skill: Meta description guidelines (150-160 chars)
 */
export function validateDescription(description: string): { valid: boolean; message?: string } {
  if (!description) {
    return { valid: false, message: 'Meta description is required' }
  }

  if (description.length > 160) {
    return { valid: false, message: `Description is ${description.length} characters (max 160)` }
  }

  return { valid: true }
}

/**
 * Validate JSON-LD schema
 */
export function validateSchema(schema: JSONLDSchema): { valid: boolean; errors?: string[] } {
  const errors: string[] = []

  // Check required fields
  if (!schema['@context']) {
    errors.push('Missing @context')
  }

  if (!schema['@type']) {
    errors.push('Missing @type')
  }

  // Validate context URL
  if (schema['@context'] && !schema['@context'].startsWith('https://schema.org')) {
    errors.push('Invalid @context URL')
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  }
}

// ============================================
// EXPORTS
// ============================================

export {
  generateMetaTags,
  generateRobotsMeta,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateWebSiteSchema,
  generateOpenGraph,
  generateTwitterCard,
  generateSitemapUrl,
  generateSitemapIndex,
  generateRobotsTxt,
  generateCanonical,
  generateHreflang,
  validateTitle,
  validateDescription,
  validateSchema,
}