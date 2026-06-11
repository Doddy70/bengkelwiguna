/**
 * Domain Knowledge — Bengkel Wiguna Agent Workflow
 * Curated domain knowledge with source attribution
 */

/**
 * CPT Domain Knowledge
 * Source: bw-headless-cms plugin + .maestro.md
 * Last Updated: 2026-06-07
 */
export const CPT_KNOWLEDGE = {
  services: {
    description: 'Layanan service kendaraan (ganti oli, ban, dll)',
    slugPattern: 'kebab-case',
    requiredFields: ['title', 'slug', 'content', 'featured_media'],
    optionalFields: ['excerpt', 'categories', 'tags'],
    apiEndpoints: {
      list: '/bw/v1/services-full',
      single: '/bw/v1/services/{slug}',
    },
    source: 'bw-headless-cms v1.7.0',
  },
  promosi: {
    description: 'Promosi dan diskon service',
    slugPattern: 'kebab-case',
    requiredFields: ['title', 'slug', 'content'],
    optionalFields: ['excerpt', 'bw_promosi_diskon', 'bw_promosi_mulai', 'bw_promosi_berakhir'],
    apiEndpoints: {
      list: '/bw/v1/promosi-active',
      single: '/bw/v1/promosi/{slug}',
    },
    source: 'bw-headless-cms v1.7.0',
  },
  paket_service: {
    description: 'Paket service bundling',
    slugPattern: 'kebab-case',
    requiredFields: ['title', 'slug', 'content'],
    optionalFields: ['excerpt', 'bw_paket_harga', 'bw_paket_fitur'],
    apiEndpoints: {
      list: '/bw/v1/paket-service-full',
      single: '/bw/v1/paket-service/{slug}',
    },
    source: 'bw-headless-cms v1.7.0',
  },
  layanan_spesialis: {
    description: 'Layanan spesialis (semi overhaul, dll) dengan FAQ',
    slugPattern: 'kebab-case',
    requiredFields: ['title', 'slug', 'content'],
    optionalFields: [
      'excerpt',
      'manfaat_spesialis',        // HTML text
      'teknologi_spesialis',      // text
      'gallery',                  // array of image URLs
      'bw_spesialis_faq',         // JSON array [{q, a}]
      'bw_spesialis_faq_image',   // URL string
    ],
    apiEndpoints: {
      list: '/bw/v1/layanan-spesialis-full',
      single: '/bw/v1/layanan-spesialis/{slug}',
    },
    source: 'bw-headless-cms v1.7.0',
  },
}

/**
 * FAQ Field Knowledge
 * Source: Frontend layout components
 */
export const FAQ_KNOWLEDGE = {
  fieldName: 'bw_spesialis_faq',
  format: 'JSON string (array of {q, a} objects)',
  maxItems: 20,
  imageField: 'bw_spesialis_faq_image',
  displayRules: {
    splitAt: 5,  // First 5 items → FaqItem (#faqOne), rest → FaqItem2 (#faqTwo)
    imagePosition: 'top',  // Image at top of FAQ section
  },
  source: 'Frontend components (Faq2, Faq3)',
}

/**
 * SEO Knowledge
 * Source: rank-math-seo.ts, seo.ts
 */
export const SEO_KNOWLEDGE = {
  plugin: 'Rank Math Pro (NOT Yoast SEO)',
  metaFields: [
    'rank_math_title',
    'rank_math_description',
    'rank_math_og_title',
    'rank_math_og_description',
    'rank_math_og_image',
    'rank_math_twitter_title',
    'rank_math_twitter_description',
    'rank_math_canonical',
    'rank_math_head',  // Raw HTML for direct rendering
  ],
  fallback: 'yoast_head_json for backward compatibility',
  source: 'bexon/src/lib/rank-math-seo.ts',
}

/**
 * Frontend Routing Knowledge
 * Source: .maestro.md
 */
export const ROUTING_KNOWLEDGE = {
  routes: {
    homepage: '/',
    services: '/services/',
    servicesDetail: '/services/[slug]/',
    promosi: '/promosi/',
    promosiDetail: '/promosi/[slug]/',
    paketService: '/paket-service/',
    paketServiceDetail: '/paket-service/[slug]/',
    layananSpesialis: '/layanan-spesialis/[slug]/',
    blog: '/blog/',
    blogDetail: '/blog/[slug]/',
    lokasi: '/lokasi/',
  },
  constraints: {
    dynamicParams: 'DILARANG — conflicts with cacheComponents',
    generateStaticParams: 'Run at build time, all slugs prerendered',
  },
  source: '.maestro.md',
}

/**
 * Error Handling Patterns
 * Source: wordpress.js, fortification utilities
 */
export const ERROR_HANDLING_KNOWLEDGE = {
  returnPatterns: {
    singleItem: 'Object on success, null on error',
    list: 'Array on success, [] on error',
    paginated: '{ posts: [], total: 0, totalPages: 0 } on error',
    helper: 'typed value on success, safe default on error',
  },
  httpStatuses: {
    retryable: [429, 500, 502, 503, 504],
    nonRetryable: [400, 401, 403, 404],
  },
  timeout: {
    default: 30000,  // 30s
    fetchAll: 45000, // 45s for pagination
  },
  source: 'agent-workflow/utils/',
}

/**
 * Quality Gates
 * Source: .maestro.md, CONVENTIONS.md
 */
export const QUALITY_GATES = {
  build: {
    command: 'npm run build',
    target: 'zero errors',
    location: 'bexon/',
  },
  routes: {
    goldenUrls: [
      '/',
      '/services/',
      '/services/[slug]/',
      '/promosi/',
      '/paket-service/',
      '/layanan-spesialis/[slug]/',
      '/blog/',
      '/lokasi/',
    ],
    expectedStatus: 200,
  },
  constraints: {
    zeroInitiative: 'No UI/UX changes without explicit approval',
    urlPermanence: 'Zero unauthorized URL slug changes',
    seoPreservation: 'Canonical links, sitemaps, Google verification',
  },
  source: '.maestro.md, CONVENTIONS.md',
}

export default {
  CPT_KNOWLEDGE,
  FAQ_KNOWLEDGE,
  SEO_KNOWLEDGE,
  ROUTING_KNOWLEDGE,
  ERROR_HANDLING_KNOWLEDGE,
  QUALITY_GATES,
}