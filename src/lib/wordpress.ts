/**
 * WordPress API Client — Bengkel Wiguna Next.js
 * Integration with WordPress REST API via bw-headless-cms plugin
 */

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
const REVALIDATE_LIST = 3600
const REVALIDATE_SINGLE = 3600

// ============================================
// RESILIENCE CONFIGURATION
// ============================================

const MAX_RETRIES = process.env.NODE_ENV === 'development' ? 1 : 3
const INITIAL_RETRY_DELAY = 1000 // 1s
const MAX_RETRY_DELAY = 5000 // 5s max
const REQUEST_TIMEOUT = process.env.NODE_ENV === 'development' ? 10000 : 30000 // 10s in dev, 30s in prod

// Circuit Breaker Configuration
const CIRCUIT_BREAKER_CONFIG = {
  failureThreshold: 5, // Open after 5 consecutive failures
  cooldown: 60000, // 60 seconds before half-open
  halfOpenMaxRequests: 1,
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
 */
function isValidSlug(slug: string): boolean {
  return typeof slug === 'string' && slug.length > 0 && /^[a-z0-9-]+$/.test(slug)
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

export async function getAllServices(): Promise<Service[]> {
  return (await apiFetch<Service[]>('/services-full?per_page=99', 'bw', REVALIDATE_LIST, ['services', 'all-services'])) ?? []
}

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

export async function getAllPromosi(): Promise<Promosi[]> {
  return (await apiFetch<Promosi[]>('/promosi-active', 'bw', REVALIDATE_LIST, ['promosi', 'all-promosi'])) ?? []
}

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

export async function getAllPaketService(): Promise<PaketService[]> {
  return (await apiFetch<PaketService[]>('/paket-service-full?per_page=99', 'bw', REVALIDATE_LIST, ['paket-service', 'all-paket'])) ?? []
}

export async function getPaketServiceBySlug(slug: string): Promise<PaketService | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<PaketService>(`/paket-service/${slug}`, 'bw', REVALIDATE_SINGLE, ['paket-service', `paket-${slug}`])
}

// ============================================
// CUSTOM ENDPOINTS (BW Plugin)
// ============================================

/**
 * Fetches homepage settings from BW Headless CMS
 * Used for dynamic sections like Hero, FAQ, etc.
 */
export async function getHomepageSettings(): Promise<any> {
  return bwFetch('/homepage-settings', {
    next: { revalidate: REVALIDATE_SINGLE, tags: ['settings', 'homepage'] }
  })
}

/**
 * Helper to fetch and parse homepage FAQs
 */
export async function getHomepageFaqs(): Promise<FaqItem[]> {
  try {
    const settings = await getHomepageSettings();
    if (settings && settings.faq && Array.isArray(settings.faq)) {
      return settings.faq;
    }
    // Fallback if structured as a JSON string
    if (settings && settings.faq && typeof settings.faq === 'string') {
      return parseFaqField(settings.faq);
    }
  } catch (error) {
    console.error('[WP] Error fetching homepage FAQs:', error);
  }
  return [];
}

/**
 * Fetch khusus untuk BW custom endpoints (/bw/v1/)
 */
export async function bwFetch<T>(endpoint: string, options: any = {}): Promise<T | null> {
  return apiFetch<T>(endpoint, 'bw', options?.next?.revalidate ?? REVALIDATE_LIST, options?.next?.tags ?? [])
}

// ============================================
// LAYANAN SPESIALIS (Custom Post Type with FAQ)
// ============================================

export async function getAllLayananSpesialis(): Promise<LayananSpesialis[]> {
  return (await apiFetch<LayananSpesialis[]>('/layanan-spesialis-full', 'bw', REVALIDATE_LIST, ['layanan-spesialis', 'all-spesialis'])) ?? []
}

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

export async function getAllPosts(page = 1, perPage = 12): Promise<PaginatedPosts<WPPost>> {
  const safePage = Math.max(1, page)
  return apiFetchPaginated<WPPost>(
    `/posts?page=${safePage}&per_page=${perPage}&_embed=1`,
    REVALIDATE_LIST,
    ['posts', 'all-posts']
  )
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<WPPost[]>(`/posts?slug=${slug}&_embed=1`, REVALIDATE_SINGLE, ['posts', `post-${slug}`]).then(data => data?.[0] ?? null)
}

export async function getAllPostsFlat(): Promise<Partial<WPPost>[]> {
  const posts: Partial<WPPost>[] = []
  let page = 1

  while (true) {
    const result = await apiFetchPaginated<WPPost>(
      `/posts?page=${page}&per_page=100`,
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

export async function getAllCategories(): Promise<any[]> {
  return (await apiFetch<any[]>('/categories?per_page=100&hide_empty=true', 'wp', REVALIDATE_LIST, ['categories'])) ?? []
}

export async function getPostsByCategory(categoryId: number, excludeId?: number, perPage = 4): Promise<WPPost[]> {
  let endpoint = `/posts?categories=${categoryId}&per_page=${perPage}&_embed=1`
  if (excludeId) {
    endpoint += `&exclude=${excludeId}`
  }
  return (await apiFetch<WPPost[]>(endpoint, 'wp', REVALIDATE_LIST, ['posts', `category-${categoryId}`])) ?? []
}

// ============================================
// PAGES
// ============================================

export async function getPageBySlug(slug: string): Promise<WPPost | null> {
  if (!isValidSlug(slug)) return null
  return apiFetch<WPPost[]>(`/pages?slug=${slug}&_embed`, REVALIDATE_SINGLE, ['pages', `page-${slug}`]).then(data => data?.[0] ?? null)
}

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
 * Decodes the JSON-encoded FAQ field from the BW plugin
 * @param faqJson JSON string from API
 * @returns Array of FAQ items or empty array
 */
export function parseFaqField(faqJson: string | null): FaqItem[] {
  if (!faqJson) return []
  try {
    return JSON.parse(faqJson)
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to parse FAQ JSON:', faqJson, error)
    }
    return []
  }
}

/**
 * MENUS (WP Navigation)
 * Fetches navigation menu from WordPress.
 * @param menuLocation Menu slug (e.g., 'main-menu')
 * @returns Menu object or null
 */
export async function getNavigationMenu(menuLocation: string = 'main-menu'): Promise<NavMenu | null> {
  const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://backend.bengkelwiguna.com'
  // Use cache-busting timestamp to prevent browser caching stale menu
  const timestamp = typeof window !== 'undefined' ? `?t=${Date.now()}` : '';
  const url = `${WORDPRESS_URL}/wp-json/menus/v1/menus/${menuLocation}${timestamp}`

  try {
    const response = await fetch(url, {
      next: { revalidate: REVALIDATE_LIST, tags: ['menus', `menu-${menuLocation}`] },
      cache: 'no-store' // Ensure no caching in Next.js or browser
    })

    if (response.ok) {
      return await response.json()
    }
    
    console.error(`[WP Menu] Error fetching menu: ${response.status}`)
    return null
  } catch (error) {
    console.error('[WP Menu] Network error:', error)
    return null
  }
}