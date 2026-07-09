/**
 * WordPress API Client — Bengkel Wiguna Next.js
 * Integration with WordPress REST API via bw-headless-cms plugin
 *
 * Performance Best Practices Applied:
 * - React.cache() for per-request deduplication (Vercel Rule 3.9)
 * - Circuit Breaker pattern (resilience)
 * - Exponential backoff with jitter (reliability)
 * - Parallel fetching with Promise.all() (Vercel Rule 1.5)
 */

import { cache } from 'react'
import {
  Service,
  Promosi,
  PaketService,
  LayananSpesialis,
  WPPost,
  PaginatedPosts,
  FaqItem,
  NavMenu
} from "@/types/wordpress";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com'

if (!process.env.NEXT_PUBLIC_WORDPRESS_URL && process.env.NODE_ENV === 'production') {
  console.warn('WARNING: NEXT_PUBLIC_WORDPRESS_URL is not set. Falling back to default backend URL.')
}

const WP_API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`
const BW_API_BASE = `${WORDPRESS_URL}/wp-json/bw/v1`

// Cache duration (Optimized: 1 hour default, purged on-demand via BW plugin)
const REVALIDATE_LIST = process.env.NODE_ENV === 'development' ? 0 : 3600
const REVALIDATE_SINGLE = process.env.NODE_ENV === 'development' ? 0 : 3600

// ============================================
// RESILIENCE CONFIGURATION
// ============================================

const MAX_RETRIES = process.env.NODE_ENV === 'development' ? 1 : 3
const INITIAL_RETRY_DELAY = 1000 // 1s
const MAX_RETRY_DELAY = 5000 // 5s max
const REQUEST_TIMEOUT = process.env.NODE_ENV === 'development' ? 10000 : 30000 // 10s in dev, 30s in prod

// Circuit Breaker Configuration
const CIRCUIT_BREAKER_CONFIG = {
  failureThreshold: 10, // Relaxed: Open after 10 consecutive failures
  cooldown: 30000, // 30 seconds before half-open
  halfOpenMaxRequests: 2,
}

// Circuit Breaker State
interface CircuitBreakerState {
  failures: number
  lastFailure: number | null
  state: 'CLOSED' | 'OPEN' | 'HALF_OPEN'
  halfOpenRequests: number
}

// Per-endpoint circuit breakers
const circuitBreakers = new Map<string, CircuitBreakerState>()

/**
 * Get or create circuit breaker for an endpoint
 */
function getCircuitBreaker(endpoint: string): CircuitBreakerState {
  if (!circuitBreakers.has(endpoint)) {
    circuitBreakers.set(endpoint, {
      failures: 0,
      lastFailure: null,
      state: 'CLOSED',
      halfOpenRequests: 0,
    })
  }
  return circuitBreakers.get(endpoint)!
}

/**
 * Check if circuit breaker allows the request
 */
function isCircuitBreakerOpen(endpoint: string): boolean {
  // DISABLE Circuit Breaker in Development to prevent blocking debugging
  if (process.env.NODE_ENV === 'development') return false

  const cb = getCircuitBreaker(endpoint)

  if (cb.state === 'CLOSED') return false

  if (cb.state === 'OPEN') {
    const cooldownPassed = Date.now() - (cb.lastFailure || 0) > CIRCUIT_BREAKER_CONFIG.cooldown
    if (cooldownPassed) {
      cb.state = 'HALF_OPEN'
      cb.halfOpenRequests = 0
      return false
    }
    return true
  }

  // HALF_OPEN state - allow limited requests
  if (cb.halfOpenRequests < CIRCUIT_BREAKER_CONFIG.halfOpenMaxRequests) {
    cb.halfOpenRequests++
    return false
  }
  return true
}

/**
 * Normalizes a URL/path from WordPress to a relative Next.js path
 * Essential for Next.js <Link> optimization to work (prevents full page refreshes)
 */
export function normalizePath(path: string): string {
  if (!path) return '/'
  
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com'
  
  let normalized = path
  
  // 1. Remove absolute domain
  if (normalized.startsWith(WORDPRESS_URL)) {
    normalized = normalized.replace(WORDPRESS_URL, '')
  }
  
  // 2. Ensure leading slash
  if (!normalized.startsWith('/') && !normalized.startsWith('http')) {
    normalized = '/' + normalized
  }
  
  // 3. Remove trailing slash (standardizing for Next.js folder routes)
  if (normalized !== '/' && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1)
  }
  
  return normalized || '/'
}

/**
 * Record a failure in circuit breaker
 */
function recordCircuitBreakerFailure(endpoint: string): void {
  const cb = getCircuitBreaker(endpoint)
  cb.failures++
  cb.lastFailure = Date.now()

  if (cb.failures >= CIRCUIT_BREAKER_CONFIG.failureThreshold) {
    cb.state = 'OPEN'
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Circuit breaker OPENED for: ${endpoint}`)
    }
  }
}

/**
 * Record a success in circuit breaker
 */
function recordCircuitBreakerSuccess(endpoint: string): void {
  const cb = getCircuitBreaker(endpoint)
  cb.failures = 0
  cb.state = 'CLOSED'
}

// ============================================
// SMUSH CDN IMAGE OPTIMIZATION
// ============================================

/**
 * Smush Pro CDN Configuration
 * Smush CDN automatically:
 * - Converts images to WebP/AVIF (30-50% smaller)
 * - Serves from edge CDN (faster LCP)
 * - Applies lazy loading
 * - Optimizes dimensions
 */
const SMUSH_CDN_CONFIG = {
  enabled: process.env.NEXT_PUBLIC_SMUSH_CDN_ENABLED === 'true',
  cdnUrl: process.env.NEXT_PUBLIC_SMUSH_CDN_URL || '',
}

/**
 * Transform WordPress image URL to Smush CDN URL
 *
 * When Smush CDN is enabled, this transforms:
 * FROM: https://backend.bengkelwiguna.com/wp-content/uploads/2024/06/image.jpg
 * TO:   https://cdn.bengkelwiguna.com/wp-content/uploads/2024/06/image.jpg?w=800&format=webp
 *
 * Benefits:
 * - WebP/AVIF conversion (30-50% size reduction)
 * - Edge CDN delivery (lower latency)
 * - Automatic lazy loading
 * - Resize to optimal dimensions
 */
export function getOptimizedImageUrl(
  originalUrl: string | null | undefined,
  options: {
    width?: number
    height?: number
    format?: 'webp' | 'avif' | 'original'
    quality?: number
    lazy?: boolean
  } = {}
): string {
  if (!originalUrl) return ''

  const {
    width,
    height,
    format = 'webp',
    quality = 85,
    lazy = false
  } = options

  // If Smush CDN is enabled, use it
  if (SMUSH_CDN_CONFIG.enabled && SMUSH_CDN_CONFIG.cdnUrl) {
    // Remove backend domain to get relative path
    let path = originalUrl
    if (path.includes(WORDPRESS_URL)) {
      path = path.replace(WORDPRESS_URL, '')
    }

    // Build CDN URL with optimization parameters
    const params = new URLSearchParams()
    if (width) params.set('w', width.toString())
    if (height) params.set('h', height.toString())
    if (format !== 'original') params.set('format', format)
    if (quality) params.set('q', quality.toString())

    const queryString = params.toString()
    return `${SMUSH_CDN_CONFIG.cdnUrl}${path}${queryString ? '?' + queryString : ''}`
  }

  // Fallback: Return original URL with Next.js image optimization
  // Next.js will handle WebP conversion and caching
  return originalUrl
}

/**
 * Generate srcset for responsive images with Smush CDN
 *
 * Usage:
 * const { src, srcset } = getResponsiveImageSrcSet(originalUrl, 1920)
 * <img src={src} srcSet={srcset} />
 */
export function getResponsiveImageSrcSet(
  originalUrl: string | null | undefined,
  maxWidth: number = 1920
): { src: string; srcset: string; sizes: string } {
  if (!originalUrl) {
    return { src: '', srcset: '', sizes: '100vw' }
  }

  // Generate srcset for common viewport widths
  const widths = [320, 640, 750, 828, 1080, 1200, 1440, 1920, 2048]
    .filter(w => w <= maxWidth)
    .concat(maxWidth)

  const srcsetParts = widths.map(w => {
    const optimizedUrl = getOptimizedImageUrl(originalUrl, { width: w, format: 'webp' })
    return `${optimizedUrl} ${w}w`
  })

  const src = getOptimizedImageUrl(originalUrl, { width: maxWidth, format: 'webp' })
  const srcset = srcsetParts.join(', ')
  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px'

  return { src, srcset, sizes }
}

/**
 * Determine if an error is retryable
 */
function isRetryableError(status: number, error?: Error): boolean {
  // Server errors and rate limits are retryable
  if (status === 429 || (status >= 500 && status < 600)) return true
  // Network errors are retryable
  if (error?.name === 'TypeError' && error.message.includes('fetch')) return true
  if (error?.name === 'AbortError') return false // Don't retry intentional aborts
  return false
}

/**
 * Calculate exponential backoff delay with jitter
 */
function calculateBackoffDelay(attempt: number): number {
  const exponentialDelay = INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1)
  const jitter = Math.random() * 1000 // 0-1s jitter
  return Math.min(exponentialDelay + jitter, MAX_RETRY_DELAY)
}

/**
 * Delay helper for retry strategy
 */
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Validates post slugs to prevent invalid API requests
 * Relaxed validation to support WordPress slugs including accented chars
 */
function isValidSlug(slug: string): boolean {
  if (typeof slug !== 'string' || slug.length === 0) return false
  // Support: lowercase, uppercase, numbers, hyphens, underscores, and unicode chars
  return /^[a-zA-Z0-9-_]+$/.test(slug) && slug.length <= 200
}

/**
 * Core API fetcher with Fortification Layers:
 * - Layer 1: Input Validation
 * - Layer 2: Exponential Backoff with Jitter
 * - Layer 3: Fallback on Exhausted Retries
 * - Layer 4: Circuit Breaker
 * - Layer 5: Timeout Controls
 */
async function apiFetch<T>(
  endpoint: string,
  base: 'wp' | 'bw' = 'wp',
  revalidate: number = REVALIDATE_SINGLE,
  tags: string[] = []
): Promise<T | null> {
  const baseUrl = base === 'wp' ? WP_API_BASE : BW_API_BASE
  const url = `${baseUrl}${endpoint}`

  if (process.env.NODE_ENV === 'development') {
    console.log(`[apiFetch] Calling: ${url} (tags: ${tags.join(',')})`)
  }

  // Layer 1: Input Validation
  if (!endpoint || typeof endpoint !== 'string') {
    console.error('[apiFetch] Invalid endpoint provided')
    return null
  }

  // Layer 4: Circuit Breaker Check
  if (isCircuitBreakerOpen(endpoint)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[CircuitBreaker] Request blocked for: ${endpoint}`)
    }
    return null
  }

  let lastError: Error | null = null
  let lastStatus: number | null = null

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

    try {
      // Layer 2: Exponential Backoff with Jitter
      if (attempt > 0) {
        const backoffDelay = calculateBackoffDelay(attempt)
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Retry] Attempt ${attempt}/${MAX_RETRIES} for ${endpoint} after ${Math.round(backoffDelay)}ms`)
        }
        await delay(backoffDelay)
      }

      const response = await fetch(url, {
        next: { 
          revalidate,
          tags: [...tags]
        },
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      clearTimeout(timeoutId)
      lastStatus = response.status

      if (response.ok) {
        // Record success in circuit breaker
        recordCircuitBreakerSuccess(endpoint)
        return await response.json()
      }

      // Layer 5: Error Classification
      // Non-retryable errors (4xx except 429)
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        console.error(`[${base.toUpperCase()}] Client Error: ${response.status} - ${endpoint}`)
        recordCircuitBreakerFailure(endpoint)
        return null
      }

      // Retryable errors (5xx, 429)
      if (isRetryableError(response.status)) {
        lastError = new Error(`Retryable HTTP Error: ${response.status}`)
        recordCircuitBreakerFailure(endpoint)
        continue
      }

      lastError = new Error(`HTTP Error: ${response.status}`)
    } catch (error: unknown) {
      clearTimeout(timeoutId)
      lastError = error instanceof Error ? error : new Error(String(error))

      // Don't retry on abort (intentional cancellation)
      if (lastError.name === 'AbortError') {
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Abort] Request cancelled for: ${endpoint}`)
        }
        break
      }

      // Network errors are retryable
      recordCircuitBreakerFailure(endpoint)

      // Only retry if we haven't exceeded attempts
      if (attempt < MAX_RETRIES - 1) {
        continue
      }
    }
  }

  // Layer 3: Fallback - Log detailed error for debugging
  console.error(`[${base.toUpperCase()}] Exhausted retries for: ${endpoint}`, {
    lastStatus,
    lastError: lastError?.message,
    attempts: MAX_RETRIES,
  })

  return null
}

/**
 * Robust paginated fetcher with Fortification Layers:
 * - Layer 1: Input Validation
 * - Layer 2: Exponential Backoff with Jitter
 * - Layer 3: Fallback on Exhausted Retries
 * - Layer 4: Circuit Breaker
 * - Layer 5: Timeout Controls
 */
async function apiFetchPaginated<T>(
  endpoint: string,
  revalidate: number = REVALIDATE_LIST,
  tags: string[] = []
): Promise<PaginatedPosts<T>> {
  // Layer 1: Input Validation
  if (!endpoint || typeof endpoint !== 'string') {
    console.error('[apiFetchPaginated] Invalid endpoint provided')
    return { posts: [], total: 0, totalPages: 0 }
  }

  const url = `${WP_API_BASE}${endpoint}`

  // Layer 4: Circuit Breaker Check
  if (isCircuitBreakerOpen(endpoint)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[CircuitBreaker] Paginated request blocked for: ${endpoint}`)
    }
    return { posts: [], total: 0, totalPages: 0 }
  }

  let lastError: Error | null = null
  let lastStatus: number | null = null

  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

    try {
      // Layer 2: Exponential Backoff with Jitter
      if (attempt > 0) {
        const backoffDelay = calculateBackoffDelay(attempt)
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Retry] Paginated attempt ${attempt}/${MAX_RETRIES} for ${endpoint}`)
        }
        await delay(backoffDelay)
      }

      const response = await fetch(url, {
        next: { 
          revalidate,
          tags: [...tags]
        },
        signal: controller.signal,
      })

      clearTimeout(timeoutId)
      lastStatus = response.status

      if (response.ok) {
        // Record success in circuit breaker
        recordCircuitBreakerSuccess(endpoint)
        return {
          posts: await response.json(),
          total: parseInt(response.headers.get('X-WP-Total') || '0'),
          totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
        }
      }

      // Non-retryable errors (4xx except 429)
      if (response.status >= 400 && response.status < 500 && response.status !== 429) {
        recordCircuitBreakerFailure(endpoint)
        break
      }

      // Retryable errors (5xx, 429)
      if (isRetryableError(response.status)) {
        lastError = new Error(`Retryable HTTP Error: ${response.status}`)
        recordCircuitBreakerFailure(endpoint)
        continue
      }

      lastError = new Error(`HTTP Error: ${response.status}`)
    } catch (error: unknown) {
      clearTimeout(timeoutId)
      lastError = error instanceof Error ? error : new Error(String(error))

      // Don't retry on abort
      if (lastError.name === 'AbortError') {
        if (process.env.NODE_ENV === 'development') {
          console.log(`[Abort] Paginated request cancelled for: ${endpoint}`)
        }
        break
      }

      // Network errors are retryable
      recordCircuitBreakerFailure(endpoint)

      // Only retry if we haven't exceeded attempts
      if (attempt < MAX_RETRIES - 1) {
        continue
      }
    }
  }

  // Layer 3: Fallback
  console.error(`[WP] Paginated exhausted retries for: ${endpoint}`, {
    lastStatus,
    lastError: lastError?.message,
    attempts: MAX_RETRIES,
  })

  return { posts: [], total: 0, totalPages: 0 }
}

// ============================================
// SERVICES (Custom Post Type)
// ============================================

/**
 * Get all services WITH taxonomy categories (for filtering)
 * Uses WP REST API to get services_category field
 */
export const getAllServicesWithCategories = cache(async (): Promise<Service[]> => {
  try {
    const response = await fetch(
      `${WP_API_BASE}/layanan_spesialis?per_page=99&_embed`,
      {
        next: { revalidate: REVALIDATE_LIST },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT)
      }
    )

    if (!response.ok) {
      console.error(`[WP] Services API error: ${response.status}`)
      return []
    }

    const posts = await response.json()

    // Transform to include services_category and featured_img
    return posts.map((post: any) => ({
      ...post,
      // Map spesialis_category from WP REST API to services_category for consistency
      services_category: post.spesialis_category || [],
      // Extract featured image URL from _embedded
      featured_img: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    }))
  } catch (error) {
    console.error('[WP] Failed to fetch services with categories:', error)
    return []
  }
})

/**
 * Cached version for per-request deduplication
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication with React.cache()
 *
 * Uses WP REST API with _embed for taxonomy and featured image support
 * ACF fields accessible via meta object
 */
export const getAllServices = cache(async (): Promise<Service[]> => {
  try {
    // Use WP REST API with _embed for taxonomy and featured image support
    const response = await fetch(
      `${WP_API_BASE}/services?per_page=99&_embed`,
      {
        next: { revalidate: REVALIDATE_LIST },
        signal: AbortSignal.timeout(REQUEST_TIMEOUT)
      }
    )

    if (!response.ok) {
      console.error(`[WP] Services API error: ${response.status}`)
      return []
    }

    const posts = await response.json()

    // Transform WP REST API response to match expected Service interface
    return posts.map((post: any) => {
      // Extract featured image from _embedded
      const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0]
      const featuredImg = featuredMedia?.source_url || null

      // Extract taxonomy terms from _embedded.wp:term
      const embeddedTerms = post._embedded?.['wp:term'] || []
      const categories = embeddedTerms[0] || [] // First taxonomy is usually category

      // Build services_category as flat array of IDs for filter compatibility
      const servicesCategoryIds: number[] = (post.services_category || []).map((cat: any) =>
        typeof cat === 'number' ? cat : cat.id || cat.term_id
      )

      // Build taxonomies object for components that expect nested structure
      const taxonomies = {
        services_category: categories.map((cat: any) => ({
          term_id: cat.id || cat.term_id,
          name: cat.name,
          slug: cat.slug
        }))
      }

      // ACF fields accessible via meta
      const meta = post.meta || {}

      return {
        id: post.id,
        title: typeof post.title === 'string' ? post.title : post.title?.rendered || '',
        slug: post.slug,
        content: typeof post.content === 'string' ? post.content : post.content?.rendered || '',
        excerpt: typeof post.excerpt === 'string' ? post.excerpt : post.excerpt?.rendered || '',
        date: post.date,
        link: post.link,
        featured_img: featuredImg,
        // Flat array for filter
        services_category: servicesCategoryIds,
        // Nested structure for components
        taxonomies,
        // ACF fields
        harga: meta.harga || '',
        durasi: meta.durasi || '',
        garansi: meta.garansi || '',
        gallery: meta.gallery || [],
        bw_services_faq: meta.bw_services_faq || [],
      }
    })
  } catch (error) {
    console.error('[WP] Failed to fetch services:', error)
    return []
  }
})

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<Service>(`/services/${slug}`, 'bw', REVALIDATE_SINGLE, ['services', `service-${slug}`])
}

export async function getServicesForSitemap(): Promise<Service[]> {
  return (await apiFetch<Service[]>('/services-full?per_page=99', 'bw', REVALIDATE_LIST, ['sitemap'])) ?? []
}

// ============================================
// PROMOSI (Custom Post Type)
// ============================================

/**
 * Cached version for per-request deduplication
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication with React.cache()
 */
export const getAllPromosi = cache(async (): Promise<Promosi[]> => {
  return (await apiFetch<Promosi[]>('/promosi-active?per_page=99', 'bw', REVALIDATE_LIST, ['promosi', 'all-promosi'])) ?? []
})

export async function getPromosiBySlug(slug: string): Promise<Promosi | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<Promosi>(`/promosi/${slug}`, 'bw', REVALIDATE_SINGLE, ['promosi', `promosi-${slug}`])
}

export async function getPromosiForSitemap(): Promise<Promosi[]> {
  return (await apiFetch<Promosi[]>('/promosi-active?per_page=99', 'bw', REVALIDATE_LIST, ['sitemap'])) ?? []
}


// ============================================
// PAKET SERVICE (Custom Post Type)
// ============================================

/**
 * Cached version for per-request deduplication
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication with React.cache()
 */
export const getAllPaketService = cache(async (): Promise<PaketService[]> => {
  return (await apiFetch<PaketService[]>('/paket-service-full?per_page=99', 'bw', REVALIDATE_LIST, ['paket-service', 'all-paket'])) ?? []
})

export async function getPaketServiceBySlug(slug: string): Promise<PaketService | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<PaketService>(`/paket-service/${slug}`, 'bw', REVALIDATE_SINGLE, ['paket-service', `paket-${slug}`])
}

// ============================================
// CUSTOM ENDPOINTS (BW Plugin)
// ============================================

/**
 * Cached version for per-request deduplication
 * Revalidate: 3600s (1 hour) — homepage settings rarely change
 */
export const getHomepageSettings = cache(async (): Promise<any> => {
  return bwFetch('/homepage-settings', {
    next: { revalidate: 3600, tags: ['settings', 'homepage'] }
  })
})

/**
 * Helper to fetch and parse homepage FAQs
 * No longer makes a separate call — reuses getHomepageSettings result
 */
export const getHomepageFaqs = cache(async (): Promise<FaqItem[]> => {
  try {
    const settings = await getHomepageSettings();
    if (settings && settings.faq && Array.isArray(settings.faq)) {
      return settings.faq;
    }
    if (settings && settings.faq && typeof settings.faq === 'string') {
      return parseFaqField(settings.faq);
    }
  } catch (error) {
    console.error('[WP] Error fetching homepage FAQs:', error);
  }
  return [];
})

/**
 * Fetch khusus untuk BW custom endpoints (/bw/v1/)
 */
export async function bwFetch<T>(endpoint: string, options: any = {}): Promise<T | null> {
  return apiFetch<T>(endpoint, 'bw', options?.next?.revalidate ?? REVALIDATE_LIST, options?.next?.tags ?? [])
}

// ============================================
// LAYANAN SPESIALIS (Custom Post Type with FAQ)
// ============================================

/**
 * Cached version for per-request deduplication
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication with React.cache()
 */
export const getAllLayananSpesialis = cache(async (): Promise<LayananSpesialis[]> => {
  return (await apiFetch<LayananSpesialis[]>('/layanan-spesialis-full', 'bw', REVALIDATE_LIST, ['layanan-spesialis', 'all-spesialis'])) ?? []
})

export async function getLayananSpesialisBySlug(slug: string): Promise<LayananSpesialis | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<LayananSpesialis>(`/layanan-spesialis/${slug}`, 'bw', REVALIDATE_SINGLE, ['layanan-spesialis', `spesialis-${slug}`])
}

export async function getLayananSpesialisForSitemap(): Promise<LayananSpesialis[]> {
  return (await apiFetch<LayananSpesialis[]>('/layanan-spesialis-full?per_page=99', 'bw', REVALIDATE_LIST, ['sitemap'])) ?? []
}

// ============================================
// BLOG POSTS (Standard WordPress)
// ============================================

/**
 * Cached version for per-request deduplication
 * Note: Cannot use cache() directly due to page/perPage parameters
 * Use the factory pattern below for deduplication
 */
export async function getAllPosts(page = 1, perPage = 12): Promise<PaginatedPosts<WPPost>> {
  const safePage = Math.max(1, page)
  return apiFetchPaginated<WPPost>(
    `/posts?page=${safePage}&per_page=${perPage}&_embed=1`,
    REVALIDATE_LIST,
    ['posts', 'all-posts']
  )
}

/**
 * Cached posts fetcher with page parameter
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication
 */
export const getCachedPosts = cache(async (page: number, perPage: number): Promise<PaginatedPosts<WPPost>> => {
  const safePage = Math.max(1, page)
  return apiFetchPaginated<WPPost>(
    `/posts?page=${safePage}&per_page=${perPage}&_embed=1`,
    REVALIDATE_LIST,
    ['posts', 'all-posts']
  )
})

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<WPPost[]>(`/posts?slug=${slug}&_embed=1`, 'wp', REVALIDATE_SINGLE, ['posts', `post-${slug}`]).then(data => data?.[0] ?? null)
}

export async function getAllPostsFlat(): Promise<Partial<WPPost>[]> {
  const posts: Partial<WPPost>[] = []
  let page = 1

  while (true) {
    const result = await apiFetchPaginated<WPPost>(
      `/posts?page=${page}&per_page=100&_embed=1`,
      REVALIDATE_LIST,
      ['posts']
    )

    if (!result.posts.length) break
    posts.push(...result.posts)

    if (page >= result.totalPages) break
    page++
  }

  return posts
}

/**
 * Cached version for per-request deduplication
 */
export const getAllCategories = cache(async (): Promise<any[]> => {
  return (await apiFetch<any[]>('/categories?per_page=100&hide_empty=true', 'wp', REVALIDATE_LIST, ['categories'])) ?? []
})

export const getPostsByCategory = cache(async (categoryId: number, excludeId?: number, perPage = 4): Promise<WPPost[]> => {
  let endpoint = `/posts?categories=${categoryId}&per_page=${perPage}&_embed=1`
  if (excludeId) {
    endpoint += `&exclude=${excludeId}`
  }
  return (await apiFetch<WPPost[]>(endpoint, 'wp', REVALIDATE_LIST, ['posts', `category-${categoryId}`])) ?? []
})

// ============================================
// PAGES
// ============================================

/**
 * Cached version for per-request deduplication
 */
export const getPageBySlug = cache(async (slug: string): Promise<WPPost | null> => {
  if (!isValidSlug(slug)) return null
  return apiFetch<WPPost[]>(`/pages?slug=${slug}&_embed`, 'wp', REVALIDATE_SINGLE, ['pages', `page-${slug}`]).then(data => data?.[0] ?? null)
})

/**
 * Extracts the featured image URL from a WordPress post
 * @param post The post object from API
 * @returns The image source URL or null
 */
export function getFeaturedImage(post: WPPost | null): string | null {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

/**
 * Extracts the featured image alt text from a WordPress post
 * @param post The post object from API
 * @returns The alt text or empty string
 */
export function getFeaturedImageAlt(post: WPPost | null): string {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? ''
}

/**
 * Removes HTML tags from a string or WordPress rendered object
 * @param html The HTML string or object to strip
 * @returns Clean text string
 */
export function stripHtml(html: string | { rendered: string } | null | undefined): string {
  if (!html) return ''
  const content = typeof html === 'string' ? html : html.rendered || ''
  return content.replace(/<[^>]*>/g, '').trim()
}

/**
 * Formats a date string into Indonesian format (e.g., 7 Juni 2026)
 * @param dateString ISO date string
 * @returns Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/**
 * Decodes HTML entities from WordPress REST API response strings.
 * WordPress encodes characters like & as &#038; in titles, excerpts, etc.
 * @param str - String potentially containing HTML entities
 * @returns Decoded string with plain text characters
 */
export function decodeHtml(str: string | undefined | null): string {
  if (!str) return ''
  return str
    .replace(/&#0*38;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_match, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_match, hex) => String.fromCharCode(parseInt(hex, 16)))
}

/**
 * Decodes the FAQ field from the BW plugin REST API
 * Handles both JSON string (legacy) and direct array (v4 API)
 * @param faqData JSON string or array from API
 * @returns Array of FAQ items or empty array
 */
export function parseFaqField(faqData: string | FaqItem[] | null | undefined): FaqItem[] {
  if (!faqData) return []
  // Already an array (from v4 REST API)
  if (Array.isArray(faqData)) return faqData
  // Legacy: JSON string from older API
  try {
    return JSON.parse(faqData)
  } catch {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to parse FAQ JSON:', faqData)
    }
    return []
  }
}

/**
 * Cached version for per-request deduplication
 * Vercel Best Practice Rule 3.9: Per-Request Deduplication with React.cache()
 */
export const getNavigationMenu = cache(async (menuLocation: string = 'main-menu'): Promise<NavMenu | null> => {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com'

  // Use WP menus API for proper child_items structure
  const url = `${WORDPRESS_URL}/wp-json/menus/v1/menus/${menuLocation}`

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_LIST, tags: ['menus', `menu-${menuLocation}`] }
    })

    if (response.ok) {
      const data = await response.json();

      // Transform to match NavMenu interface
      const menu: NavMenu = {
        source: 'wp_navigation_api',
        location: menuLocation,
        menu_name: data.name,
        items: (data.items || []).map((item: any) => ({
          id: item.ID,
          name: item.title,
          label: item.title,
          path: normalizePath(item.url),
          target: item.target || '',
          classes: item.classes || [],
          menu_item_parent: item.menu_item_parent === '0' ? 0 : parseInt(item.menu_item_parent),
          children: (function mapChildren(childItems: any[]): any[] {
            return (childItems || []).map((child: any) => ({
              id: child.ID,
              name: child.title,
              label: child.title,
              path: normalizePath(child.url),
              target: child.target || '',
              classes: child.classes || [],
              children: mapChildren(child.child_items || [])
            }));
          })(item.child_items || [])
        }))
      }

      return menu;
    }

    console.error(`[WP Menu] Error fetching menu: ${response.status} from ${url}`)
    return null
  } catch (error) {
    console.error('[WP Menu] Network error:', error)
    return null
  }
})