/**
 * WordPress REST API Client - Enhanced Integration
 * Based on wp-rest-api skill patterns
 *
 * Features:
 * - Type-safe API calls
 * - Automatic retry with exponential backoff
 * - Response caching with stale-while-revalidate
 * - Pagination handling
 * - Error recovery
 * - SEO metadata extraction (Rank Math / Yoast)
 */

import { WP_API_BASE, REVALIDATE_TIME, REVALIDATE_TIME_LONG, REVALIDATE_TIME_SHORT } from './constants'

// ============================================
// TYPES - TypeScript interfaces for WordPress entities
// ============================================

export interface WPPost {
  id: number
  date: string
  date_gmt: string
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: { rendered: string }
  content: { rendered: string; protected: boolean }
  excerpt: { rendered: string; protected: boolean }
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Record<string, unknown>
  categories: number[]
  tags: number[]
  _links: Record<string, Array<{ href: string; embeddable?: boolean; count?: number; id?: number; taxonomy?: string }>>
  _embedded?: {
    author?: Array<{ id: number; name: string; avatar_urls: Record<string, string> }>
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string; media_details?: object }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>
  }
}

export interface WPService extends WPPost {
  type: 'services'
  meta: {
    price_range?: string
    duration?: string
    icon?: string
    features?: string[]
  }
}

export interface WPPromosi extends WPPost {
  type: 'promosi'
  meta: {
    discount_percentage?: number
    valid_until?: string
    promo_code?: string
  }
}

export interface WPCategory {
  id: number
  count: number
  description: string
  link: string
  name: string
  slug: string
  taxonomy: string
  parent: number
  meta: Record<string, unknown>
}

export interface WPMedia {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: { rendered: string }
  author: number
  caption: { rendered: string }
  alt_text: string
  media_type: string
  mime_type: string
  media_details: {
    width: number
    height: number
    file: string
    sizes: Record<string, { file: string; width: number; height: number; source_url: string }>
  }
  source_url: string
}

export interface SEOMetadata {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string | null
  twitterTitle: string
  twitterDescription: string
  canonical: string
  rankMathHead: string // Raw HTML from Rank Math Pro
  robots?: string
  keywords?: string[]
}

// ============================================
// CONFIGURATION
// ============================================

const DEFAULT_CONFIG = {
  baseUrl: WP_API_BASE,
  timeout: 10000,
  paginationTimeout: 15000,
  retryAttempts: 3,
  retryDelay: 1000,
  perPage: 100,
  embed: true,
}

// ============================================
// ERROR HANDLING
// ============================================

export class WPAPIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public endpoint: string,
    public response?: unknown
  ) {
    super(message)
    this.name = 'WPAPIError'
  }
}

export class WPRateLimitError extends WPAPIError {
  constructor(endpoint: string, public retryAfter?: number) {
    super('Rate limit exceeded', 429, endpoint)
    this.name = 'WPRateLimitError'
  }
}

export class WPNotFoundError extends WPAPIError {
  constructor(endpoint: string) {
    super('Resource not found', 404, endpoint)
    this.name = 'WPNotFoundError'
  }
}

// ============================================
// API CLIENT
// ============================================

export class WPAPIClient {
  private config: typeof DEFAULT_CONFIG
  private cache: Map<string, { data: unknown; timestamp: number; ttl: number }> = new Map()

  constructor(config: Partial<typeof DEFAULT_CONFIG> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  /**
   * Set cache TTL for specific endpoints
   */
  setCache(endpoint: string, data: unknown, ttl: number): void {
    this.cache.set(endpoint, { data, timestamp: Date.now(), ttl })
  }

  /**
   * Get cached data if still valid
   */
  getCache(endpoint: string): unknown | null {
    const cached = this.cache.get(endpoint)
    if (!cached) return null

    const age = Date.now() - cached.timestamp
    if (age > cached.ttl) {
      this.cache.delete(endpoint)
      return null
    }

    return cached.data
  }

  /**
   * Fetch with retry and exponential backoff
   */
  async fetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
    const url = `${this.config.baseUrl}${endpoint}`
    const cacheKey = url

    // Check cache first
    const cached = this.getCache(cacheKey)
    if (cached && !options.cache) {
      return cached as T
    }

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)

    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    }

    try {
      // Retry logic with exponential backoff
      let lastError: Error | null = null

      for (let attempt = 0; attempt < this.config.retryAttempts; attempt++) {
        try {
          const response = await fetch(url, { ...defaultOptions, ...options })

          clearTimeout(timeoutId)

          if (response.status === 429) {
            const retryAfter = parseInt(response.headers.get('Retry-After') || '60')
            throw new WPRateLimitError(endpoint, retryAfter)
          }

          if (response.status === 404) {
            throw new WPNotFoundError(endpoint)
          }

          if (!response.ok) {
            throw new WPAPIError(
              `API Error: ${response.status} ${response.statusText}`,
              response.status,
              endpoint
            )
          }

          const data = await response.json()

          // Cache successful responses
          if (options.next?.revalidate) {
            this.setCache(cacheKey, data, (options.next.revalidate as number) * 1000)
          }

          return data as T
        } catch (error) {
          lastError = error as Error

          if (error instanceof WPRateLimitError && error.retryAfter) {
            // Wait for rate limit to reset
            await this.sleep(error.retryAfter * 1000)
          } else if (attempt < this.config.retryAttempts - 1) {
            // Exponential backoff
            const delay = this.config.retryDelay * Math.pow(2, attempt)
            await this.sleep(delay)
          } else {
            throw error
          }
        }
      }

      throw lastError
    } catch (error) {
      clearTimeout(timeoutId)

      if (error instanceof WPAPIError) {
        console.error(`WP API Error: ${error.message} (${error.statusCode})`)
      } else {
        console.error(`WP Fetch failed on ${url}:`, (error as Error).message)
      }

      return null
    }
  }

  /**
   * Fetch all pages with pagination
   */
  async fetchAll<T>(endpoint: string, params: Record<string, string> = {}): Promise<T[]> {
    let page = 1
    let allItems: T[] = []
    const baseUrl = `${this.config.baseUrl}${endpoint}`

    while (true) {
      const url = new URL(baseUrl)
      url.searchParams.set('per_page', String(this.config.perPage))
      url.searchParams.set('page', String(page))

      if (this.config.embed) {
        url.searchParams.set('_embed', '1')
      }

      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
      })

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.paginationTimeout)

      try {
        const response = await fetch(url.toString(), {
          next: { revalidate: REVALIDATE_TIME },
          signal: controller.signal,
        })
        clearTimeout(timeoutId)

        if (!response.ok) {
          console.warn(`WP fetchAll Error page ${page}: ${response.status}`)
          break
        }

        const items = await response.json()
        if (!items || !Array.isArray(items) || items.length === 0) break

        allItems = [...allItems, ...items]

        const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')
        if (page >= totalPages) break

        page++

        // Rate limiting - be nice to the server
        await this.sleep(100)
      } catch (error) {
        clearTimeout(timeoutId)
        console.error(`WP fetchAll failed:`, (error as Error).message)
        break
      }
    }

    return allItems
  }

  /**
   * Parallel fetch for multiple endpoints
   */
  async parallelFetch<T>(endpoints: string[]): Promise<(T | null)[]> {
    return Promise.all(endpoints.map((endpoint) => this.fetch<T>(endpoint)))
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// ============================================
// SEO METADATA EXTRACTION
// ============================================

export function extractSEOMetadata(item: Record<string, unknown>): SEOMetadata {
  return {
    title:
      (item.rank_math_title as string) ||
      (item.yoast_head_json as { title?: string })?.title ||
      (item.title as { rendered?: string })?.rendered ||
      '',
    description:
      (item.rank_math_description as string) ||
      (item.yoast_head_json as { description?: string })?.description ||
      stripHtml((item.excerpt as { rendered?: string })?.rendered || ''),
    ogTitle:
      (item.rank_math_og_title as string) ||
      (item.yoast_head_json as { og_title?: string })?.og_title ||
      '',
    ogDescription:
      (item.rank_math_og_description as string) ||
      (item.yoast_head_json as { og_description?: string })?.og_description ||
      '',
    ogImage:
      (item.rank_math_og_image as string) ||
      ((item.yoast_head_json as { og_image?: Array<{ url: string }> })?.og_image?.[0]?.url) ||
      null,
    twitterTitle:
      (item.rank_math_twitter_title as string) ||
      (item.yoast_head_json as { twitter_title?: string })?.twitter_title ||
      '',
    twitterDescription:
      (item.rank_math_twitter_description as string) ||
      (item.yoast_head_json as { twitter_description?: string })?.twitter_description ||
      '',
    canonical:
      (item.rank_math_canonical as string) ||
      (item.yoast_head_json as { canonical?: string })?.canonical ||
      '',
    rankMathHead: (item.rank_math_head as string) || '',
    robots: (item.rank_math_robots as string) || undefined,
    keywords: (item.rank_math_keywords as string[]) || undefined,
  }
}

export function stripHtml(html: string): string {
  if (!html) return ''
  return html.replace(/<[^>]*>/g, '').trim()
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
}

export function getFeaturedImageAlt(post: WPPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || ''
}

export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.find((terms) => terms[0]?.taxonomy === 'category') || []
}

export function getPostTags(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.find((terms) => terms[0]?.taxonomy === 'post_tag') || []
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

// ============================================
// EXPORTS
// ============================================

export { WP_API_BASE, REVALIDATE_TIME, REVALIDATE_TIME_LONG, REVALIDATE_TIME_SHORT }

// Factory function
export function createWPAPIClient(config?: Partial<typeof DEFAULT_CONFIG>): WPAPIClient {
  return new WPAPIClient(config)
}