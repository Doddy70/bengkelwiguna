/**
 * Core Web Vitals Optimization for Bengkel Wiguna
 * Based on core-web-vitals skill patterns
 *
 * Targets:
 * - LCP: ≤ 2.5s
 * - INP: ≤ 200ms
 * - CLS: ≤ 0.1
 */

// ============================================
// LCP OPTIMIZATION
// ============================================

/**
 * LCP optimization checklist for Next.js
 * @see core-web-vitals skill: LCP section
 */
export const lcpChecklist = {
  // TTFB - Time to First Byte
  ttfb: {
    target: '< 800ms',
    current: 'N/A', // Measure with Lighthouse
    status: 'todo',
  },

  // LCP Image optimization
  lcpImage: {
    target: 'Preloaded with fetchpriority="high"',
    current: 'N/A',
    status: 'todo',
  },

  // Critical CSS
  criticalCss: {
    target: '< 14KB inlined',
    current: 'N/A',
    status: 'todo',
  },

  // Render-blocking resources
  renderBlocking: {
    target: 'Zero render-blocking JS/CSS',
    current: 'N/A',
    status: 'todo',
  },

  // Font loading
  fonts: {
    target: 'font-display: swap, preloaded',
    current: 'N/A',
    status: 'todo',
  },
}

/**
 * Generate Speculation Rules for instant navigations
 * @see core-web-vitals skill: LCP - Speculation Rules API
 */
export function generateSpeculationRules(options = {}) {
  const {
    eagerness = 'moderate', // conservative, moderate, eager, immediate
    patterns = ['/*'],
    excludePatterns = ['/checkout/*', '/login/*', '/logout/*'],
  } = options

  return {
    prerender: [
      {
        where: {
          href_matches: patterns,
          not: {
            href_matches: excludePatterns,
          },
        },
        eagerness: eagerness,
      },
    ],
  }
}

// ============================================
// INP OPTIMIZATION
// ============================================

/**
 * INP optimization checklist
 * @see core-web-vitals skill: INP section
 */
export const inpChecklist = {
  // Long tasks
  longTasks: {
    target: 'No tasks > 50ms',
    status: 'todo',
  },

  // Event handlers
  eventHandlers: {
    target: 'Handlers < 100ms',
    status: 'todo',
  },

  // Visual feedback
  visualFeedback: {
    target: 'Immediate (< 16ms)',
    status: 'todo',
  },

  // Heavy work
  heavyWork: {
    target: 'Deferred with requestIdleCallback',
    status: 'todo',
  },

  // Third-party scripts
  thirdParty: {
    target: 'Lazy loaded, non-blocking',
    status: 'todo',
  },
}

/**
 * Chunk processing with scheduler.yield() for INP
 * @see core-web-vitals skill: INP - Breaking up long tasks
 */
export async function processInChunks(items, chunkSize = 100, processor) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize)
    chunk.forEach(processor)

    // Yield to allow browser to handle input
    if ('scheduler' in window && 'yield' in scheduler) {
      await scheduler.yield()
    } else {
      await new Promise((r) => setTimeout(r, 0))
    }
  }
}

/**
 * Event handler with visual feedback first
 * @see core-web-vitals skill: INP - Prioritize visual feedback
 */
export function createOptimizedHandler(options = {}) {
  const { onVisualFeedback, onHeavyWork, onAnalytics } = options

  return async function optimizedHandler(event) {
    // 1. Immediate visual feedback (user sees response instantly)
    if (onVisualFeedback) {
      onVisualFeedback(event)
    }

    // 2. Yield to let browser paint the feedback
    if ('scheduler' in window && 'yield' in scheduler) {
      await scheduler.yield()
    } else {
      await new Promise((r) => setTimeout(r, 0))
    }

    // 3. Heavy work (non-blocking)
    if (onHeavyWork) {
      await onHeavyWork(event)
    }

    // 4. Analytics (lowest priority)
    if (onAnalytics) {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => onAnalytics(event))
      } else {
        setTimeout(() => onAnalytics(event), 0)
      }
    }
  }
}

// ============================================
// CLS OPTIMIZATION
// ============================================

/**
 * CLS optimization checklist
 * @see core-web-vitals skill: CLS section
 */
export const clsChecklist = {
  // Image dimensions
  imageDimensions: {
    target: 'All images have width/height',
    status: 'todo',
  },

  // Video/embed dimensions
  videoDimensions: {
    target: 'All embeds have reserved space',
    status: 'todo',
  },

  // Ads
  ads: {
    target: 'Ads have min-height containers',
    status: 'todo',
  },

  // Fonts
  fonts: {
    target: 'font-display: optional or matched metrics',
    status: 'todo',
  },

  // Dynamic content
  dynamicContent: {
    target: 'Insert below viewport',
    status: 'todo',
  },

  // Animations
  animations: {
    target: 'transform/opacity only',
    status: 'todo',
  },
}

/**
 * Calculate aspect-ratio CSS for images
 */
export function calculateAspectRatio(width, height) {
  return {
    aspectRatio: `${width}/${height}`,
    width: '100%',
    height: 'auto',
  }
}

/**
 * Safe insert below viewport to avoid CLS
 * @see core-web-vitals skill: CLS - Dynamic content
 */
export function safeInsertNotification(container, newNotification) {
  const viewportBottom = window.innerHeight
  const notificationTop = newNotification.getBoundingClientRect().top

  if (viewportBottom < notificationTop) {
    // Insert normally - it's below viewport
    container.prepend(newNotification)
  } else {
    // Insert with animation - avoid layout shift
    newNotification.style.transform = 'translateY(-100%)'
    container.prepend(newNotification)
    requestAnimationFrame(() => {
      newNotification.style.transform = ''
    })
  }
}

// ============================================
// NEXT.JS SPECIFIC OPTIMIZATIONS
// ============================================

/**
 * Next.js Image optimization for LCP
 * @see core-web-vitals skill: Framework quick fixes - Next.js
 */
export const nextImageOptimizations = {
  // Hero images - use priority
  heroImage: {
    priority: true,
    sizes: '(max-width: 768px) 100vw, 1200px',
  },

  // Below-fold images - lazy load
  belowFoldImage: {
    priority: false,
    loading: 'lazy',
    sizes: '(max-width: 768px) 100vw, 400px',
  },

  // Featured images
  featuredImage: {
    priority: true,
    sizes: '(max-width: 768px) 100vw, 600px',
  },
}

/**
 * Generate Next.js Image component props for different use cases
 */
export function getNextImageProps(type, src, dimensions) {
  const baseProps = {
    src,
    alt: dimensions.alt || '',
    ...(dimensions.width && dimensions.height
      ? { width: dimensions.width, height: dimensions.height }
      : { fill: true, sizes: nextImageOptimizations[type]?.sizes || '100vw' }),
  }

  if (nextImageOptimizations[type]) {
    return { ...baseProps, ...nextImageOptimizations[type] }
  }

  return baseProps
}

/**
 * Dynamic import for heavy components (INP)
 * @see core-web-vitals skill: Framework quick fixes - Next.js
 */
export function createDynamicComponent(importPath, options = {}) {
  const { ssr = false, loading, ...dynamicOptions } = options

  // This would be used with React.lazy in components
  return {
    importPath,
    ssr,
    loading: loading || null,
    dynamicOptions,
  }
}

// ============================================
// WEB VITALS MEASUREMENT
// ============================================

/**
 * Initialize web vitals tracking
 * @see core-web-vitals skill: Measurement tools
 */
export function initWebVitals(options = {}) {
  const {
    analyticsEndpoint = '/api/vitals',
    debug = false,
    onMetric,
  } = options

  // Check if web-vitals is available
  if (typeof window === 'undefined') return

  // Load web-vitals dynamically
  import('web-vitals').then(({ onLCP, onINP, onCLS, onFCP, onTTFB }) => {
    function sendToAnalytics(metric) {
      // Send to your analytics endpoint
      if (analyticsEndpoint) {
        navigator.sendBeacon?.(
          analyticsEndpoint,
          JSON.stringify({
            name: metric.name,
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
            entries: metric.entries,
          })
        )
      }

      // Debug logging
      if (debug) {
        console.log(`[Web Vitals] ${metric.name}:`, {
          value: Math.round(metric.value),
          rating: metric.rating,
        })
      }

      // Callback
      if (onMetric) {
        onMetric(metric)
      }
    }

    // Track all metrics
    onLCP(sendToAnalytics)
    onINP(sendToAnalytics)
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
  })
}

/**
 * Debug LCP element
 * @see core-web-vitals skill: LCP element identification
 */
export function debugLCP() {
  if (typeof window === 'undefined') return

  new PerformanceObserver((list) => {
    const entries = list.getEntries()
    const lastEntry = entries[entries.length - 1]

    console.log('[LCP Debug] Element:', lastEntry.element)
    console.log('[LCP Debug] Time:', Math.round(lastEntry.startTime), 'ms')
    console.log('[LCP Debug] Size:', lastEntry.size, 'x', lastEntry.height)
  }).observe({ type: 'largest-contentful-paint', buffered: true })
}

/**
 * Debug slow interactions (INP)
 * @see core-web-vitals skill: INP debugging
 */
export function debugINP() {
  if (typeof window === 'undefined') return

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.duration > 200) {
        console.warn('[INP Debug] Slow interaction:', {
          type: entry.name,
          duration: Math.round(entry.duration),
          processingStart: entry.processingStart,
          processingEnd: entry.processingEnd,
          target: entry.target,
        })
      }
    }
  }).observe({ type: 'event', buffered: true, durationThreshold: 40 })
}

/**
 * Debug layout shifts (CLS)
 * @see core-web-vitals skill: CLS debugging
 */
export function debugCLS() {
  if (typeof window === 'undefined') return

  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        console.log('[CLS Debug] Layout shift:', Math.round(entry.value * 1000) / 1000)
        entry.sources?.forEach((source) => {
          console.log('[CLS Debug] Shifted element:', source.node)
          console.log('[CLS Debug] Previous:', source.previousRect)
          console.log('[CLS Debug] Current:', source.currentRect)
        })
      }
    }
  }).observe({ type: 'layout-shift', buffered: true })
}

// ============================================
// EXPORTS
// ============================================

export {
  lcpChecklist,
  inpChecklist,
  clsChecklist,
  generateSpeculationRules,
  processInChunks,
  createOptimizedHandler,
  calculateAspectRatio,
  safeInsertNotification,
  nextImageOptimizations,
  getNextImageProps,
  createDynamicComponent,
  initWebVitals,
  debugLCP,
  debugINP,
  debugCLS,
}