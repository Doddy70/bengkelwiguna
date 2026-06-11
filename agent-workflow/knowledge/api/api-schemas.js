/**
 * API Schema Knowledge — Bengkel Wiguna Agent Workflow
 * Structured API schemas with examples and attribution
 */

/**
 * Response schemas for WordPress REST API
 * Source: bw-headless-cms plugin, wordpress.js
 * Last Updated: 2026-06-07
 */

/**
 * Single Item Response
 * @example { id: 1, title: { rendered: "..." }, slug: "...", ... }
 */
export const SINGLE_ITEM_SCHEMA = {
  type: 'object',
  nullable: true,
  onSuccess: 'Object with fields',
  onError: 'null',
  example: {
    id: 123,
    title: { rendered: 'Semi Overhaul Engine' },
    slug: 'semi-overhaul',
    content: { rendered: '<p>...</p>' },
    excerpt: { rendered: '<p>...</p>' },
    date: '2026-06-07T10:00:00',
    modified: '2026-06-07T10:00:00',
    link: '/layanan-spesialis/semi-overhaul/',
    _embedded: {
      'wp:featuredmedia': [{ source_url: 'https://...', alt_text: '...' }],
    },
  },
}

/**
 * List Response
 * @example { posts: [...], total: 10, totalPages: 1 }
 */
export const PAGINATED_LIST_SCHEMA = {
  type: 'object',
  structure: {
    posts: { type: 'array', description: 'Array of items' },
    total: { type: 'number', description: 'Total items matching query' },
    totalPages: { type: 'number', description: 'Total pages available' },
  },
  onSuccess: '{ posts: [...], total: N, totalPages: M }',
  onError: '{ posts: [], total: 0, totalPages: 0 }',
  pagination: {
    defaultPerPage: 12,
    maxPerPage: 100,
    headers: ['X-WP-Total', 'X-WP-TotalPages'],
  },
}

/**
 * API Response Patterns
 * Source: wordpress.js fetch functions
 */
export const API_PATTERNS = {
  wpFetch: {
    description: 'Standard WordPress REST API fetch',
    baseUrl: 'process.env.NEXT_PUBLIC_WORDPRESS_URL + /wp/v2/',
    features: ['timeout (30s)', 'error handling', 'null on failure'],
    returns: 'JSON object or null',
  },
  bwFetch: {
    description: 'BW custom endpoints (/bw/v1/)',
    baseUrl: 'process.env.NEXT_PUBLIC_WORDPRESS_URL + /bw/v1/',
    features: ['cache busting for list', 'no cache busting for single', 'timeout (30s)'],
    returns: 'JSON object or null',
  },
  fetchAll: {
    description: 'Paginated fetch with all pages',
    baseUrl: 'process.env.NEXT_PUBLIC_WORDPRESS_URL + /wp/v2/',
    features: ['auto pagination', '100 items per page', 'rate limit (100ms delay)'],
    returns: 'Array of all items or []',
  },
}

/**
 * FAQ Response Schema (layanan_spesialis)
 * Source: Frontend Faq2, Faq3 components
 */
export const FAQ_RESPONSE_SCHEMA = {
  field: 'bw_spesialis_faq',
  format: 'JSON string: \'[{"q":"Question?","a":"Answer."}]\'',
  parseRequired: true,  // JSON.parse before use
  imageField: 'bw_spesialis_faq_image',
  displaySplit: {
    firstN: 5,
    container1: '#faqOne',
    container2: '#faqTwo',
  },
  example: {
    raw: '[{"q":"Apa itu Semi Overhaul?","a":"Proses overhauling yang lebih ringan..."}]',
    parsed: [{ q: 'Apa itu Semi Overhaul?', a: 'Proses overhauling...' }],
  },
}

/**
 * SEO Meta Response Schema
 * Source: rank-math-seo.ts, getRankMathData()
 */
export const SEO_RESPONSE_SCHEMA = {
  primaryPlugin: 'Rank Math Pro',
  fields: {
    title: 'rank_math_title',
    description: 'rank_math_description',
    ogTitle: 'rank_math_og_title',
    ogDescription: 'rank_math_og_description',
    ogImage: 'rank_math_og_image',
    twitterTitle: 'rank_math_twitter_title',
    twitterDescription: 'rank_math_twitter_description',
    canonical: 'rank_math_canonical',
    headHtml: 'rank_math_head',  // Direct render
  },
  fallbackFields: {
    title: 'yoast_head_json.title',
    description: 'yoast_head_json.description',
    ogImage: 'yoast_head_json.og_image[0].url',
  },
}

/**
 * Menu Response Schema
 * Source: getNavigationMenu() in wordpress.js
 */
export const MENU_RESPONSE_SCHEMA = {
  strategies: [
    { source: 'bw/v1/menu/{location}', priority: 1 },
    { source: 'menus/v1/menus/{location}', priority: 2 },
    { fallback: 'null (use static nav-items.json)', priority: 3 },
  ],
  transform: {
    id: 'item.id',
    name: 'item.name || item.label || item.title',
    path: 'item.path',
    isActive: false,
    submenu: 'item.children || []',
  },
}

/**
 * Meta Field Reference
 * Source: .maestro.md
 */
export const META_FIELDS = {
  layanan_spesialis: {
    manfaat_spesialis: { type: 'HTML text', api: true },
    teknologi_spesialis: { type: 'text', api: true },
    gallery: { type: 'array of URLs', api: true },
    bw_spesialis_faq: { type: 'JSON array [{q,a}]', api: true, parse: true },
    bw_spesialis_faq_image: { type: 'URL string', api: true },
  },
  services: {
    // Add as needed
  },
  promosi: {
    // Add as needed
  },
}

/**
 * Transient Cache Configuration
 * Source: wordpress.js, .maestro.md
 */
export const CACHE_CONFIG = {
  defaultTTL: 43200,  // 12 hours
  longTTL: 86400,    // 24 hours (site-info, post-types)
  shortTTL: 300,    // 5 minutes (search, menus)
  versionKey: '?v=3',
  invalidation: 'bump version key for zero-downtime',
}

export default {
  SINGLE_ITEM_SCHEMA,
  PAGINATED_LIST_SCHEMA,
  API_PATTERNS,
  FAQ_RESPONSE_SCHEMA,
  SEO_RESPONSE_SCHEMA,
  MENU_RESPONSE_SCHEMA,
  META_FIELDS,
  CACHE_CONFIG,
}