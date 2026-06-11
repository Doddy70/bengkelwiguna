import { WP_API_BASE } from './constants';

/**
 * Performance Optimization Utilities
 * Based on performance skill patterns + core-web-vitals integration
 *
 * Budget targets:
 * - Total page weight: < 1.5 MB
 * - JavaScript: < 300 KB
 * - CSS: < 100 KB
 * - Images (above-fold): < 500 KB
 * - Fonts: < 100 KB
 * - Third-party: < 200 KB
 */

// ============================================
// PERFORMANCE BUDGETS
// ============================================

export const performanceBudgets = {
  totalPageWeight: { limit: 1.5 * 1024 * 1024, unit: 'bytes' }, // 1.5 MB
  javascript: { limit: 300 * 1024, unit: 'bytes' }, // 300 KB
  css: { limit: 100 * 1024, unit: 'bytes' }, // 100 KB
  imagesAboveFold: { limit: 500 * 1024, unit: 'bytes' }, // 500 KB
  fonts: { limit: 100 * 1024, unit: 'bytes' }, // 100 KB
  thirdParty: { limit: 200 * 1024, unit: 'bytes' }, // 200 KB
}

// ============================================
// CRITICAL RENDERING PATH
// ============================================

const wpOrigin = WP_API_BASE ? new URL(WP_API_BASE).origin : 'https://backend.bengkelwiguna.com';

/**
 * Preconnect hints for critical origins
 * @see performance skill: Preconnect to required origins
 */
export const criticalOrigins = [
  // WordPress backend
  { href: wpOrigin, crossorigin: true },
  // Google Fonts
  { href: 'https://fonts.googleapis.com', crossorigin: true },
  { href: 'https://fonts.gstatic.com', crossorigin: true },
]

/**
 * Generate preconnect link tags
 */
export function generatePreconnectLinks() {
  return criticalOrigins
    .map(
      (origin) =>
        `<link rel="preconnect" href="${origin.href}" ${
          origin.crossorigin ? 'crossorigin' : ''
        }>`
    )
    .join('\n    ')
}

/**
 * Preload hints for critical resources
 * @see performance skill: Preload critical resources
 */
export function preloadResource(url, type, options = {}) {
  const { fetchpriority, as } = options

  return {
    rel: 'preload',
    href: url,
    as: as || type,
    type,
    ...(fetchpriority ? { fetchpriority } : {}),
  }
}

// ============================================
// IMAGE OPTIMIZATION
// ============================================

/**
 * Image format recommendations
 * @see performance skill: Format selection
 */
export const imageFormats = {
  avif: { use: 'Photos, best compression', support: '92%+', priority: 1 },
  webp: { use: 'Photos, good fallback', support: '97%+', priority: 2 },
  png: { use: 'Graphics with transparency', support: 'Universal', priority: 3 },
  svg: { use: 'Icons, logos, illustrations', support: 'Universal', priority: 4 },
  jpeg: { use: 'Photos, universal fallback', support: 'Universal', priority: 5 },
}

/**
 * Generate responsive image srcset
 * @see performance skill: Responsive images
 */
export function generateSrcSet(images, sizes) {
  return images
    .map((img) => `${img.src} ${img.width}w`)
    .join(', ')
}

/**
 * Generate picture element with format fallbacks
 * @see performance skill: Responsive images - picture element
 */
export function generatePictureElement(config) {
  const { sources, fallbackSrc, fallbackWidth, fallbackHeight, alt, sizes } = config

  const sourceTags = sources
    .map(
      (source) => `
    <source
      type="${source.type}"
      srcset="${generateSrcSet(source.images, sizes)}"
      sizes="${sizes}">`
    )
    .join('')

  return `
<picture>
  ${sourceTags}
  <img
    src="${fallbackSrc}"
    srcset="${generateSrcSet(
      sources.find((s) => s.type === 'image/jpeg')?.images || [],
      sizes
    )}"
    sizes="${sizes}"
    width="${fallbackWidth}"
    height="${fallbackHeight}"
    alt="${alt}"
    loading="lazy"
    decoding="async">
</picture>`
}

// ============================================
// FONT OPTIMIZATION
// ============================================

/**
 * Font loading with fallbacks
 * @see performance skill: Font optimization
 */
export const fontConfig = {
  display: 'swap', // or 'optional' for non-critical
  subsets: ['latin', 'latin-ext'],
}

/**
 * Generate @font-face CSS
 */
export function generateFontFace(family, variants = []) {
  return variants
    .map(
      (variant) => `
@font-face {
  font-family: '${family}';
  src: url('/fonts/${family}-${variant.weight}.woff2') format('woff2');
  font-weight: ${variant.weight};
  font-style: ${variant.style || 'normal'};
  font-display: ${fontConfig.display};
  unicode-range: ${fontConfig.subsets.map((s) => `U+0000-00FF`).join(', ')};
}`
    )
    .join('')
}

/**
 * System font stack
 */
export const systemFontStack =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"

// ============================================
// CACHING STRATEGY
// ============================================

/**
 * Cache-Control header recommendations
 * @see performance skill: Cache-Control headers
 */
export const cacheHeaders = {
  // HTML - short or no cache
  html: 'no-cache, must-revalidate',

  // Static assets with hash (immutable)
  immutable: 'public, max-age=31536000, immutable',

  // Static assets without hash
  static: 'public, max-age=86400, stale-while-revalidate=604800',

  // API responses
  api: 'private, max-age=0, must-revalidate',
}

/**
 * Generate cache headers config for Next.js
 */
export function generateCacheHeadersConfig() {
  return [
    {
      source: '/:path*.(ico|jpg|jpeg|png|gif|webp|avif|svg|woff|woff2)',
      headers: [
        {
          key: 'Cache-Control',
          value: cacheHeaders.immutable,
        },
      ],
    },
    {
      source: '/:path*.(css|js)',
      headers: [
        {
          key: 'Cache-Control',
          value: cacheHeaders.immutable,
        },
      ],
    },
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on',
        },
      ],
    },
  ]
}

// ============================================
// SERVICE WORKER CACHING
// ============================================

/**
 * Service worker cache strategy
 * @see performance skill: Service worker caching
 */
export const serviceWorkerConfig = {
  cacheName: 'static-v1',
  staticExtensions: ['image', 'style', 'script', 'font'],
}

/**
 * Generate service worker code
 */
export function generateServiceWorker() {
  return `
// Service Worker for Bengkel Wiguna
// Cache-first strategy for static assets

const CACHE_NAME = '${serviceWorkerConfig.cacheName}';
const STATIC_EXTENSIONS = ${JSON.stringify(serviceWorkerConfig.staticExtensions)};

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/offline.html',
      ]);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - cache-first for static, network-first for HTML
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Cache-first for static assets
  if (STATIC_EXTENSIONS.some((ext) => url.pathname.endsWith('.' + ext))) {
    event.respondWith(
      caches.match(request).then((cached) => {
        return (
          cached ||
          fetch(request).then((response) => {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            return response;
          })
        );
      })
    );
    return;
  }

  // Network-first for HTML pages
  event.respondWith(
    fetch(request).catch(() => {
      return caches.match(request).then((cached) => {
        return cached || caches.match('/offline.html');
      });
    })
  );
});
`
}

// ============================================
// RUNTIME PERFORMANCE
// ============================================

/**
 * Debounce utility
 * @see performance skill: Debounce expensive operations
 */
export function debounce(fn, delay) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Throttle utility
 */
export function throttle(fn, limit) {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      fn(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Batch DOM reads and writes to avoid layout thrashing
 * @see performance skill: Avoid layout thrashing
 */
export function batchDOMUpdates(elements, readFn, writeFn) {
  // Batch all reads first
  const readResults = elements.map(readFn)

  // Batch all writes
  elements.forEach((el, i) => writeFn(el, readResults[i]))
}

/**
 * requestAnimationFrame wrapper
 * @see performance skill: Use requestAnimationFrame
 */
export function rafLoop(callback) {
  let frameId

  const loop = () => {
    callback()
    frameId = requestAnimationFrame(loop)
  }

  return {
    start: () => {
      frameId = requestAnimationFrame(loop)
    },
    stop: () => {
      cancelAnimationFrame(frameId)
    },
  }
}

// ============================================
// VIRTUALIZATION
// ============================================

/**
 * Virtual list configuration
 * @see performance skill: Virtualize long lists
 */
export const virtualListConfig = {
  itemHeight: 50, // Estimated item height in pixels
  overscan: 5, // Number of items to render outside viewport
}

/**
 * Content-visibility CSS for virtualization
 */
export const contentVisibilityCSS = {
  enabled: {
    contentVisibility: 'auto',
    containIntrinsicSize: '0 50px', // Estimated height
  },
  disabled: {
    contentVisibility: 'visible',
  },
}

// ============================================
// VIEW TRANSITIONS API
// ============================================

/**
 * View Transitions configuration
 * @see performance skill: Smooth navigations with View Transitions
 */
export const viewTransitionsConfig = {
  // Enable cross-document view transitions (MPA)
  crossDocument: true,

  // Shared element transition names
  sharedElements: {
    hero: 'hero-image',
    productCard: 'product-card',
  },
}

/**
 * Start a view transition (SPA-style)
 * @see performance skill: Same-document (SPA-style)
 */
export function startViewTransition(swapDOMFn) {
  if (!document.startViewTransition) {
    // Fallback for browsers without View Transitions API
    swapDOMFn()
    return
  }

  document.startViewTransition(() => swapDOMFn())
}

/**
 * Generate View Transitions CSS for shared elements
 * @see performance skill: Shared-element transitions
 */
export function generateSharedElementCSS(elementMap) {
  let css = `
/* Enable cross-document view transitions */
@view-transition { navigation: auto; }

/* Shared element transitions */
`

  Object.entries(elementMap).forEach(([selector, name]) => {
    css += `
${selector} { view-transition-name: ${name}; }
`
  })

  return css
}

// ============================================
// THIRD-PARTY SCRIPTS
// ============================================

/**
 * Facade pattern for third-party embeds
 * @see performance skill: Facade pattern
 */
export function createFacade(type, config) {
  const facades = {
    youtube: {
      tag: 'div',
      className: 'youtube-facade',
      attributes: {
        'data-video-id': config.videoId,
        onclick: 'window.loadYouTube && window.loadYouTube(this)',
      },
      content: `
        <img src="${config.thumbnail}" alt="${config.title}">
        <button aria-label="Play video">▶</button>
      `,
    },
    twitter: {
      tag: 'div',
      className: 'twitter-facade',
      attributes: {
        'data-tweet-id': config.tweetId,
      },
      content: '<div class="placeholder">Tweet preview</div>',
    },
  }

  return facades[type] || null
}

/**
 * Load script on interaction
 * @see performance skill: Delay until interaction
 */
export function loadOnInteraction(selector, scriptUrl) {
  if (typeof window === 'undefined') return

  const element = document.querySelector(selector)
  if (!element) return

  const loadScript = () => {
    const script = document.createElement('script')
    script.src = scriptUrl
    document.body.appendChild(script)
    element.removeEventListener('click', loadScript)
  }

  element.addEventListener('click', loadScript, { once: true })
}

/**
 * Load script when visible (IntersectionObserver)
 */
export function loadWhenVisible(selector, scriptUrl) {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        const script = document.createElement('script')
        script.src = scriptUrl
        document.body.appendChild(script)
        observer.disconnect()
      }
    },
    { rootMargin: '100px' }
  )

  const element = document.querySelector(selector)
  if (element) {
    observer.observe(element)
  }
}

// ============================================
// MEASUREMENT
// ============================================

/**
 * Resource timing observer
 */
export function observeResourceTiming(callback) {
  if (typeof window === 'undefined') return

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries()
    entries.forEach((entry) => {
      callback({
        name: entry.name,
        type: entry.initiatorType,
        size: entry.transferSize,
        duration: entry.duration,
        dns: entry.domainLookupEnd - entry.domainLookupStart,
        connect: entry.connectEnd - entry.connectStart,
        ttfb: entry.responseStart - entry.requestStart,
      })
    })
  })

  observer.observe({ entryTypes: ['resource'] })
}

/**
 * Check performance budget
 */
export function checkBudget(resources) {
  const summary = resources.reduce(
    (acc, resource) => {
      const size = resource.size || 0
      const type = resource.type

      if (type === 'script') acc.javascript += size
      else if (type === 'style') acc.css += size
      else if (type === 'image') acc.images += size

      acc.total += size
      return acc
    },
    { total: 0, javascript: 0, css: 0, images: 0 }
  )

  return {
    total: {
      value: summary.total,
      budget: performanceBudgets.totalPageWeight.limit,
      passed: summary.total < performanceBudgets.totalPageWeight.limit,
    },
    javascript: {
      value: summary.javascript,
      budget: performanceBudgets.javascript.limit,
      passed: summary.javascript < performanceBudgets.javascript.limit,
    },
    css: {
      value: summary.css,
      budget: performanceBudgets.css.limit,
      passed: summary.css < performanceBudgets.css.limit,
    },
    images: {
      value: summary.images,
      budget: performanceBudgets.imagesAboveFold.limit,
      passed: summary.images < performanceBudgets.imagesAboveFold.limit,
    },
  }
}

// ============================================
// EXPORTS
// ============================================

export {
  performanceBudgets,
  criticalOrigins,
  generatePreconnectLinks,
  preloadResource,
  imageFormats,
  generateSrcSet,
  generatePictureElement,
  fontConfig,
  generateFontFace,
  systemFontStack,
  cacheHeaders,
  generateCacheHeadersConfig,
  generateServiceWorker,
  serviceWorkerConfig,
  debounce,
  throttle,
  batchDOMUpdates,
  rafLoop,
  virtualListConfig,
  contentVisibilityCSS,
  viewTransitionsConfig,
  startViewTransition,
  generateSharedElementCSS,
  createFacade,
  loadOnInteraction,
  loadWhenVisible,
  observeResourceTiming,
  checkBudget,
}