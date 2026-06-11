/**
 * WordPress API Integration - Bengkel Wiguna
 * Semua fungsi fetch ke WordPress REST API & GraphQL
 */

import {
  WP_API_BASE,
  BW_API_BASE,
  ABILITIES_API_BASE,
  GRAPHQL_URL,
  REVALIDATE_TIME,
  REVALIDATE_TIME_LONG,
  REVALIDATE_TIME_SHORT,
} from './constants'

import { unstable_cache } from 'next/cache'

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Fetch dengan error handling, cache, dan network timeout
 */
export async function wpFetch(endpoint, options = {}, timeoutMs = 30000) {
  const url = `${WP_API_BASE}${endpoint}`

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  const defaultOptions = {
    next: { 
      revalidate: options?.next?.revalidate ?? REVALIDATE_TIME,
      tags: options?.next?.tags ?? []
    },
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    signal: controller.signal,
  }

  try {
    const response = await fetch(url, { ...defaultOptions, ...options })
    clearTimeout(timeoutId)

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.error(`WP API Error: ${response.status} - ${url}`)
      }
      return null
    }

    return await response.json()
  } catch (error) {
    clearTimeout(timeoutId)
    if (process.env.NODE_ENV === 'development') {
      console.error(`WP Fetch failure on ${url}:`, error.message)
    }
    return null
  }
}

/**
 * Fetch khusus untuk BW custom endpoints (/bw/v1/)
 */
export async function bwFetch(endpoint, options = {}, timeoutMs = 30000) {
  // Do not add cache buster for endpoints that already include a slug
  const isSlugEndpoint = /^\/layanan-spesialis\/.+/.test(endpoint) || /^\/promosi\/.+/.test(endpoint) || /^\/paket-service\/.+/.test(endpoint);
  const cacheBuster = isSlugEndpoint ? '' : (endpoint.includes('?') ? `&v=3` : `?v=3`);
  const url = `${BW_API_BASE}${endpoint}${cacheBuster}`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const defaultOptions = {
    next: { 
      revalidate: options?.next?.revalidate ?? REVALIDATE_TIME,
      tags: options?.next?.tags ?? []
    },
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    signal: controller.signal,
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    clearTimeout(timeoutId);

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.error(`BW API Error: ${response.status} - ${url}`);
      }
      return null;
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    if (process.env.NODE_ENV === 'development') {
      console.error(`BW Fetch failure on ${url}:`, error.message);
    }
    return null;
  }
}

/**
 * Fetch untuk GraphQL endpoints
 */
export async function gqlFetch(query, variables = {}, options = {}, timeoutMs = 30000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const defaultOptions = {
    method: 'POST',
    next: { 
      revalidate: options?.next?.revalidate ?? REVALIDATE_TIME,
      tags: options?.next?.tags ?? []
    },
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify({ query, variables }),
    signal: controller.signal,
  };

  try {
    const response = await fetch(GRAPHQL_URL, { ...defaultOptions, ...options });
    clearTimeout(timeoutId);

    const json = await response.json();
    if (json.errors) {
      if (process.env.NODE_ENV === 'development') {
        console.error('GraphQL Errors:', json.errors);
      }
      return null;
    }

    return json.data;
  } catch (error) {
    clearTimeout(timeoutId);
    if (process.env.NODE_ENV === 'development') {
      console.error(`GraphQL Fetch failure on ${GRAPHQL_URL}:`, error.message);
    }
    return null;
  }
}

/**
 * Fetch semua halaman (handle pagination) dengan timeout dan error boundaries
 * Optimized payload using sparse fieldsets (_fields)
 */
async function fetchAll(endpoint, params = {}, options = {}, timeoutMs = 45000) {
  let page = 1
  let allItems = []
  const baseUrl = `${WP_API_BASE}${endpoint}`
  const tags = options?.next?.tags ?? [];

  while (true) {
    const url = new URL(baseUrl)
    url.searchParams.set('per_page', '100')
    url.searchParams.set('page', page)
    url.searchParams.set('_embed', '1')

    // DEFAULT SPARSE FIELDSET: Dramatic reduction in payload size
    if (!params._fields) {
      url.searchParams.set('_fields', 'id,slug,title,excerpt,date,modified,link,_links,_embedded');
    }

    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value)
    })

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

    try {
      const response = await fetch(url.toString(), {
        next: { revalidate: REVALIDATE_TIME, tags },
        signal: controller.signal,
      })
      clearTimeout(timeoutId)

      if (!response.ok) {
        if (process.env.NODE_ENV === 'development') {
          console.warn(`WP fetchAll Error page ${page}: ${response.status} - ${url}`)
        }
        break
      }

      const items = await response.json()
      if (!items || !items.length || !Array.isArray(items)) break

      allItems = [...allItems, ...items]

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')
      if (page >= totalPages) break
      page++

      // Rate limiting to avoid hammering server during build
      await new Promise((resolve) => setTimeout(resolve, 50))
    } catch (error) {
      clearTimeout(timeoutId)
      if (process.env.NODE_ENV === 'development') {
        console.error(`WP fetchAll failed on ${url}:`, error.message)
      }
      break
    }
  }

  return allItems
}

/**
 * Helper untuk transform raw data ke format terstandarisasi
 */
export function transformItem(item) {
  if (!item) return null;
  
  return {
    id: item.id || item.databaseId || item.ID,
    slug: item.slug || '',
    title: item.title?.rendered || item.title || '',
    content: item.content?.rendered || item.content || '',
    excerpt: item.excerpt?.rendered || item.excerpt || '',
    date: item.date || '',
    featured_img: getFeaturedImage(item) || item.featuredImage?.node?.sourceUrl || item.featured_img || '',
    ...item 
  };
}

// ============================================
// PAGES - Halaman Statis
// ============================================

/**
 * Ambil semua pages
 */
export async function getAllPages() {
  return fetchAll('/pages', {}, { next: { tags: ['pages'] } })
}

/**
 * Ambil page berdasarkan slug
 */
export async function getPageBySlug(slug) {
  const data = await wpFetch(`/pages?slug=${slug}&_embed&_fields=id,slug,title,content,excerpt,date,modified,link,_embedded,rank_math_title,rank_math_description,rank_math_head`, {
    next: { tags: ['pages', `page-${slug}`] }
  })
  return data?.[0] ?? null
}

/**
 * Ambil page berdasarkan ID
 */
export async function getPageById(id) {
  return wpFetch(`/pages/${id}?_embed`, {
    next: { tags: ['pages', `page-${id}`] }
  })
}

// ============================================
// POSTS - Blog Articles
// ============================================

/**
 * Ambil posts menggunakan GraphQL (High Performance)
 */
export async function getPostsGQL(first = 10, after = null) {
  const query = `
    query GetPosts($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          databaseId
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  const data = await gqlFetch(query, { first, after }, { next: { tags: ['posts'] } });
  if (!data) return null;

  return {
    posts: data.posts.nodes.map(node => transformItem(node)),
    pageInfo: data.posts.pageInfo
  };
}

/**
 * Ambil semua posts dengan pagination (cached)
 */
const _getAllPosts = async (page = 1, perPage = 12) => {
  const response = await fetch(
    `${WP_API_BASE}/posts?page=${page}&per_page=${perPage}&_embed=1&_fields=id,slug,title,excerpt,date,modified,link,_links,_embedded,featured_media`,
    { next: { revalidate: REVALIDATE_TIME, tags: ['posts'] } }
  )

  if (!response.ok) return { posts: [], total: 0, totalPages: 0 }

  return {
    posts: await response.json(),
    total: parseInt(response.headers.get('X-WP-Total') || '0'),
    totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
  }
}

export const getAllPosts = unstable_cache(
  _getAllPosts,
  ['all-posts'],
  { revalidate: REVALIDATE_TIME, tags: ['posts'] }
)

/**
 * Ambil semua posts (untuk generateStaticParams) — optimized payload
 */
export async function getAllPostsFlat() {
  return fetchAll('/posts', {
    _fields: 'id,slug',
  }, { next: { tags: ['posts'] } })
}

/**
 * Ambil post berdasarkan slug (cached)
 */
export const getPostBySlug = unstable_cache(
  async (slug) => {
    const data = await wpFetch(`/posts?slug=${slug}&_fields=id,slug,title,content,excerpt,date,modified,link,_embedded,rank_math_title,rank_math_description,rank_math_head`, {
      next: { tags: ['posts', `post-${slug}`] }
    })
    return data?.[0] ?? null
  },
  ['post-by-slug'],
  { revalidate: REVALIDATE_TIME, tags: ['posts'] }
)

/**
 * Ambil posts berdasarkan kategori
 */
export async function getPostsByCategory(categoryId, page = 1, perPage = 12) {
  const response = await fetch(
    `${WP_API_BASE}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_fields=id,slug,title,excerpt,date,modified,link,_embedded`,
    { next: { revalidate: REVALIDATE_TIME, tags: ['posts', `category-${categoryId}`] } }
  )

  if (!response.ok) return { posts: [], total: 0, totalPages: 0 }

  return {
    posts: await response.json(),
    total: parseInt(response.headers.get('X-WP-Total') || '0'),
    totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1'),
  }
}

// ============================================
// BLOG CATEGORIES
// ============================================

/**
 * Ambil semua categories
 */
export async function getAllCategories() {
  return fetchAll('/categories', { _fields: 'id,slug,name,count' }, { next: { tags: ['categories'] } })
}

// ============================================
// SERVICES - Custom Post Type
// ============================================

/**
 * Ambil semua services
 */
export async function getAllServices() {
  return bwFetch('/services-full?per_page=99', {
    next: { tags: ['services'] }
  })
}

/**
 * Ambil service berdasarkan slug
 */
export async function getServiceBySlug(slug) {
  return bwFetch(`/services/${slug}`, {
    next: { tags: ['services', `service-${slug}`] }
  })
}

/**
 * Ambil service dengan struktur portfolio + next/prev optimization (via Abilities API)
 */
export async function getOptimizedServicePortfolioData(slug) {
  const url = `${ABILITIES_API_BASE}/bw/get-service-portfolio-data/run?input[slug]=${encodeURIComponent(slug)}`;
  
  try {
    const res = await fetch(url, {
      method: 'GET',
      next: { revalidate: 3600, tags: ['services', `service-${slug}`] },
    });

    if (!res.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.error(`Failed to fetch optimized portfolio data for ${slug}`);
      }
      return null;
    }

    return await res.json();
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error fetching optimized portfolio data:`, error.message);
    }
    return null;
  }
}

// ============================================
// PROMOSI - Custom Post Type
// ============================================

/**
 * Ambil semua promosi (hanya yang aktif)
 */
export async function getAllPromosi() {
  return bwFetch('/promosi-active', {
    next: { tags: ['promosi'] }
  })
}

/**
 * Ambil promosi berdasarkan slug
 */
export async function getPromosiBySlug(slug) {
  return bwFetch(`/promosi/${slug}`, {
    next: { tags: ['promosi', `promo-${slug}`] }
  })
}

// ============================================
// PAKET SERVICE - Custom Post Type
// ============================================

/**
 * Ambil semua paket service
 */
export async function getAllPaketService() {
  return bwFetch('/paket-service-full?per_page=99', {
    next: { tags: ['paket-service'] }
  })
}

/**
 * Ambil paket service berdasarkan slug
 */
export async function getPaketServiceBySlug(slug) {
  return bwFetch(`/paket-service/${slug}`, {
    next: { tags: ['paket-service', `paket-${slug}`] }
  })
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Extract featured image URL dari post
 */
export function getFeaturedImage(post) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

/**
 * Extract featured image alt text
 */
export function getFeaturedImageAlt(post) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? ''
}

/**
 * Extract Rank Math Pro SEO data dari post/page
 */
export function getRankMathData(item) {
  if (!item) return null

  return {
    title: item?.rank_math_title || item?.yoast_head_json?.title || item?.title?.rendered || '',
    description: item?.rank_math_description || item?.yoast_head_json?.description || stripHtml(item?.excerpt?.rendered) || '',
    ogTitle: item?.rank_math_og_title || item?.yoast_head_json?.og_title || item?.title?.rendered || '',
    ogDescription: item?.rank_math_og_description || item?.yoast_head_json?.og_description || stripHtml(item?.excerpt?.rendered) || '',
    ogImage: item?.rank_math_og_image || item?.yoast_head_json?.og_image?.[0]?.url || null,
    twitterTitle: item?.rank_math_twitter_title || item?.yoast_head_json?.twitter_title || '',
    twitterDescription: item?.rank_math_twitter_description || item?.yoast_head_json?.twitter_description || '',
    canonical: item?.rank_math_canonical || item?.yoast_head_json?.canonical || '',
    headHtml: item?.rank_math_head || '', 
  }
}

/**
 * backward Compatibility Proxy untuk Yoast
 */
export function getYoastData(item) {
  return getRankMathData(item)
}

/**
 * Parse HTML content - strip tags
 */
export function stripHtml(html) {
  if (!html) return ''
  const str = typeof html === 'string' ? html : String(html);
  if (str === '[object Object]') return '';
  return str.replace(/<[^>]*>/g, '').trim()
}

/**
 * Format date untuk display
 */
export function formatDate(dateString) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

// ============================================
// SEARCH
// ============================================

/**
 * Search posts
 */
export async function searchPosts(query, page = 1, perPage = 10) {
  return wpFetch(`/posts?search=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&_fields=id,slug,title,excerpt,date,modified,link,_embedded`, {
    next: { revalidate: REVALIDATE_TIME_SHORT, tags: ['posts', 'search'] }
  });
}

// ============================================
// TAXONOMIES (Tags)
// ============================================

/**
 * Ambil posts berdasarkan tag
 */
export async function getPostsByTag(tagId, page = 1, perPage = 12) {
  return wpFetch(`/posts?tags=${tagId}&page=${page}&per_page=${perPage}&_fields=id,slug,title,excerpt,date,modified,link,_embedded`, {
    next: { tags: ['posts', `tag-${tagId}`] }
  });
}

// ============================================
// MENUS (WP Navigation)
// ============================================

/**
 * Ambil navigation menu dari WordPress
 */
export async function getNavigationMenu(menuLocation = 'primary') {
  try {
    const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || WP_API_BASE.replace('/wp-json/wp/v2', '');
    if (!API_URL) return null;

    // Strategy 1: BW Headless CMS custom menu endpoint
    const bwRes = await fetch(`${API_URL}/wp-json/bw/v1/menu/${menuLocation}`, {
      next: { revalidate: 60, tags: ['menus', `menu-${menuLocation}`] },
    });

    if (bwRes.ok) {
      const bwData = await bwRes.json();
      if (bwData.source === 'wp_navigation_api' || bwData.source === 'wp_rest_api_menus') {
        return transformWpMenuItems(bwData.items);
      }
    }

    // Strategy 2: WP REST API Menus plugin
    const pluginRes = await fetch(`${API_URL}/wp-json/menus/v1/menus/${menuLocation}`, {
      next: { revalidate: 60, tags: ['menus', `menu-${menuLocation}`] },
    });

    if (pluginRes.ok) {
      const pluginData = await pluginRes.json();
      if (pluginData && pluginData.items) {
        return pluginData.items.map(item => ({
          id: item.ID,
          name: item.title,
          path: item.url.replace(API_URL, '').replace('http://localhost', ''),
          isActive: false,
          submenu: item.child_items ? item.child_items.map(child => ({
            id: child.ID,
            name: child.title,
            path: child.url.replace(API_URL, '').replace('http://localhost', ''),
          })) : [],
        }));
      }
    }

    return null;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching WP menu:', error.message);
    }
    return null;
  }
}

/**
 * Transform WP Navigation API items
 */
function transformWpMenuItems(items) {
  if (!items || !Array.isArray(items)) return null;

  return items.map(item => ({
    id: item.id,
    name: item.name || item.label || item.title,
    path: item.path,
    isActive: false,
    submenu: item.children && item.children.length > 0
      ? item.children.map(child => ({
          id: child.id,
          name: child.name || child.label || child.title,
          path: child.path,
        }))
      : [],
  }));
}

// ============================================
// CUSTOM ENDPOINTS
// ============================================

/**
 * Ambil Theme Editor / Homepage Settings
 */
export async function getHomepageSettings() {
  return bwFetch('/homepage-settings', {
    next: { revalidate: 60, tags: ['settings', 'homepage'] }
  })
}

/**
 * Ambil semua layanan spesialis
 */
export async function getAllLayananSpesialis() {
  return bwFetch('/layanan-spesialis-full', {
    next: { tags: ['layanan-spesialis'] }
  })
}

/**
 * Ambil single layanan spesialis berdasarkan slug
 */
export async function getLayananSpesialisBySlug(slug) {
  return bwFetch(`/layanan-spesialis/${slug}`, {
    next: { tags: ['layanan-spesialis', `spesialis-${slug}`] }
  })
}
