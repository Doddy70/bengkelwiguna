/**
 * WordPress Integration - Complete Example
 * Combines wp-rest-api and wp-abilities-api skills
 *
 * This file demonstrates:
 * 1. Direct WordPress REST API calls (wp-rest-api skill)
 * 2. Abilities API consumption (wp-abilities-api skill)
 * 3. Type-safe data handling
 * 4. Error recovery and fallback
 */

import { WPAPIClient, extractSEOMetadata, WPPost } from './wp-client'
import {
  fetchAbilities,
  checkAbility,
  executeAbility,
  BENGKEL_ABILITIES,
  isAIAvailable,
  type WPAbility,
} from './wp-abilities'

// ============================================
// CLIENT INITIALIZATION
// ============================================

const wpClient = createWPAPIClient({
  timeout: 10000,
  retryAttempts: 3,
})

// ============================================
// EXAMPLE: Services Fetching
// ============================================

/**
 * Fetch services using direct REST API
 * @see wp-rest-api skill: routes-and-endpoints.md
 */
export async function getServicesDirect() {
  // Method 1: Using the WPAPIClient
  const services = await wpClient.fetchAll('/services')

  return services.map((service) => ({
    id: service.id,
    title: service.title.rendered,
    slug: service.slug,
    content: service.content.rendered,
    seo: extractSEOMetadata(service as unknown as Record<string, unknown>),
    featuredImage: service._embedded?.['wp:featuredmedia']?.[0]?.source_url,
  }))
}

/**
 * Fetch services using Abilities API
 * @see wp-abilities-api skill: rest-api.md
 */
export async function getServicesViaAbilities() {
  // Check if abilities are available
  const aiAvailable = await isAIAvailable()

  if (!aiAvailable) {
    console.log('AI abilities not available, falling back to direct API')
    return getServicesDirect()
  }

  // Execute the ability
  const result = await executeAbility(
    BENGKEL_ABILITIES.READ_SERVICES,
    { per_page: 10 },
    { apiBase: '/wp-json/wp-abilities/v1' }
  )

  return result
}

// ============================================
// EXAMPLE: Content with AI Enhancement
// ============================================

export interface ContentWithAI {
  content: WPPost
  seo: ReturnType<typeof extractSEOMetadata>
  aiSuggestions?: {
    title: string
    metaDescription: string
    targetKeyword: string
  }[]
  relatedServices?: { id: number; title: string; slug: string }[]
}

/**
 * Get blog post with AI-enhanced suggestions
 * Combines REST API + Abilities API
 */
export async function getBlogPostWithAI(slug: string): Promise<ContentWithAI | null> {
  // 1. Fetch the post via REST API
  const post = await wpClient.fetch<WPPost>(`/posts?slug=${slug}&_embed`)

  if (!post || !Array.isArray(post) || post.length === 0) {
    return null
  }

  const contentPost = Array.isArray(post) ? post[0] : post

  // 2. Extract SEO metadata
  const seo = extractSEOMetadata(contentPost as unknown as Record<string, unknown>)

  // 3. Try to get AI suggestions (if ability available)
  let aiSuggestions = undefined
  const canSuggest = await checkAbility(BENGKEL_ABILITIES.CONTENT_SUGGESTIONS)

  if (canSuggest.hasAbility) {
    try {
      const suggestions = await executeAbility(
        BENGKEL_ABILITIES.CONTENT_SUGGESTIONS,
        {
          topic: contentPost.title.rendered,
          count: 3,
        }
      )

      aiSuggestions = (suggestions as { data: ContentWithAI['aiSuggestions'] }).data
    } catch (error) {
      console.warn('AI suggestions unavailable:', error)
    }
  }

  // 4. Fetch related services
  const categories = contentPost.categories || []
  let relatedServices: ContentWithAI['relatedServices'] = undefined

  if (categories.length > 0) {
    const services = await wpClient.fetchAll('/services', {
      categories: String(categories[0]),
    })

    relatedServices = services.slice(0, 3).map((s) => ({
      id: s.id,
      title: s.title.rendered,
      slug: s.slug,
    }))
  }

  return {
    content: contentPost,
    seo,
    aiSuggestions,
    relatedServices,
  }
}

// ============================================
// EXAMPLE: Parallel Fetching Pattern
// ============================================

export interface HomePageData {
  services: Awaited<ReturnType<typeof getServicesDirect>>
  promotions: Awaited<ReturnType<typeof getServicesDirect>>
  featuredPost: WPPost | null
  abilities: WPAbility[]
}

/**
 * Fetch all homepage data in parallel
 * @see wp-rest-api skill: parallelization patterns
 */
export async function getHomePageData(): Promise<HomePageData> {
  // Use Promise.all for parallel fetching
  const [services, promotions, posts, abilities] = await Promise.all([
    wpClient.fetchAll('/services', { per_page: 6 }),
    wpClient.fetchAll('/promosi', { per_page: 4 }),
    wpClient.fetch<WPPost[]>('/posts?per_page=1&sticky=true'),
    fetchAbilities().catch(() => [] as WPAbility[]), // Graceful fallback
  ])

  // Handle posts response (may be array or single post)
  const postsArray = Array.isArray(posts) ? posts : posts ? [posts] : []
  const featuredPost = postsArray[0] || null

  return {
    services: services.slice(0, 6).map((s) => ({
      id: s.id,
      title: s.title.rendered,
      slug: s.slug,
      content: s.content.rendered,
      seo: extractSEOMetadata(s as unknown as Record<string, unknown>),
      featuredImage: s._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    })),
    promotions: promotions.slice(0, 4).map((p) => ({
      id: p.id,
      title: p.title.rendered,
      slug: p.slug,
      content: p.content.rendered,
      discount: (p.meta as { discount_percentage?: number })?.discount_percentage,
      validUntil: (p.meta as { valid_until?: string })?.valid_until,
    })),
    featuredPost,
    abilities,
  }
}

// ============================================
// EXAMPLE: Booking Management via Abilities
// ============================================

export interface BookingInput {
  serviceId: number
  customerName: string
  customerPhone: string
  customerEmail?: string
  scheduledDate: string
  notes?: string
}

export interface BookingResult {
  success: boolean
  bookingId?: number
  message: string
}

/**
 * Create a booking using Abilities API
 * @see wp-abilities-api skill: permission checks
 */
export async function createBooking(input: BookingInput): Promise<BookingResult> {
  // Check permission first
  const canBook = await checkAbility(BENGKEL_ABILITIES.MANAGE_BOOKINGS)

  if (!canBook.hasAbility) {
    return {
      success: false,
      message: 'Booking ability not available. Please configure WordPress Abilities API.',
    }
  }

  try {
    const result = await executeAbility(
      BENGKEL_ABILITIES.MANAGE_BOOKINGS,
      {
        action: 'create',
        ...input,
      }
    )

    return {
      success: true,
      bookingId: (result as { booking_id: number }).booking_id,
      message: 'Booking created successfully',
    }
  } catch (error) {
    return {
      success: false,
      message: (error as Error).message,
    }
  }
}

// ============================================
// EXAMPLE: SEO Verification
// ============================================

export interface SEOVerificationResult {
  hasTitle: boolean
  hasDescription: boolean
  hasCanonical: boolean
  hasOgImage: boolean
  hasJsonLd: boolean
  score: number // 0-100
}

/**
 * Verify SEO completeness for a post
 * @see wp-rest-api skill: schema validation
 */
export function verifySeoCompleteness(post: WPPost): SEOVerificationResult {
  const seo = extractSEOMetadata(post as unknown as Record<string, unknown>)

  const checks = {
    hasTitle: Boolean(seo.title && seo.title.length > 0),
    hasDescription: Boolean(seo.description && seo.description.length > 50),
    hasCanonical: Boolean(seo.canonical),
    hasOgImage: Boolean(seo.ogImage),
    hasJsonLd: Boolean(seo.rankMathHead),
  }

  const passedCount = Object.values(checks).filter(Boolean).length
  const score = Math.round((passedCount / 5) * 100)

  return {
    ...checks,
    score,
  }
}

// ============================================
// EXAMPLE: Error Recovery Pattern
// ============================================

/**
 * Fetch with automatic fallback from Abilities to REST
 */
export async function fetchWithFallback<T>(
  abilityId: string,
  restEndpoint: string,
  params: Record<string, string> = {}
): Promise<T[]> {
  // Try abilities first
  try {
    const abilities = await fetchAbilities()
    const hasAbility = abilities.some((a) => a.id === abilityId)

    if (hasAbility) {
      const result = await executeAbility(abilityId, params)
      return (result as { data: T[] }).data
    }
  } catch (error) {
    console.warn('Abilities API failed, falling back to REST:', error)
  }

  // Fallback to direct REST
  return wpClient.fetchAll(restEndpoint, params)
}

// ============================================
// EXPORTS
// ============================================

export {
  wpClient,
  getServicesDirect,
  getServicesViaAbilities,
  getBlogPostWithAI,
  getHomePageData,
  createBooking,
  verifySeoCompleteness,
  fetchWithFallback,
}