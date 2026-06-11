# Performance & Core Web Vitals Optimization

Complete optimization guide combining `performance` and `core-web-vitals` skills for Bengkel Wiguna.

## Quick Start

### 1. Use Optimized Next.js Config

```javascript
// next.config.js
const optimized = require('./next.config.optimized')

module.exports = optimized
```

### 2. Run Performance Audit

```bash
# Test your site
SITE_URL=http://localhost:3000 node scripts/audit-performance.mjs

# Full Core Web Vitals test
SITE_URL=http://localhost:3000 node scripts/test-core-web-vitals.mjs
```

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/performance.ts` | Performance utilities & budget helpers |
| `src/lib/core-web-vitals.ts` | Core Web Vitals tracking & optimization |
| `next.config.optimized.js` | Next.js config with all optimizations |
| `scripts/audit-performance.mjs` | Lighthouse audit against budget |
| `scripts/test-core-web-vitals.mjs` | Core Web Vitals test suite |

## Performance Budgets

| Resource | Target | Status |
|----------|--------|--------|
| Total Page Weight | < 1.5 MB | ⏳ |
| JavaScript | < 300 KB | ⏳ |
| CSS | < 100 KB | ⏳ |
| Images (above-fold) | < 500 KB | ⏳ |
| Fonts | < 100 KB | ⏳ |
| Third-party | < 200 KB | ⏳ |

## Core Web Vitals Targets

| Metric | Good | Target |
|--------|------|--------|
| LCP | ≤ 2.5s | ⚡ < 2.0s |
| INP | ≤ 200ms | ⚡ < 150ms |
| CLS | ≤ 0.1 | ⚡ < 0.05 |
| FCP | ≤ 1.8s | ⚡ < 1.5s |
| TTFB | ≤ 800ms | ⚡ < 400ms |

## Key Optimizations

### LCP: Largest Contentful Paint

```tsx
// Hero images - always use priority
<Image
  src="/hero.webp"
  alt="Bengkel Wiguna - Service Excellence"
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
  width={1200}
  height={600}
/>

// Or with fetchpriority
<img src="/hero.webp" fetchpriority="high" loading="eager" />
```

### INP: Interaction to Next Paint

```tsx
import { createOptimizedHandler, processInChunks } from '@/lib/core-web-vitals'

// Optimized click handler
const handleBooking = createOptimizedHandler({
  onVisualFeedback: (e) => {
    e.currentTarget.classList.add('loading')
  },
  onHeavyWork: async () => {
    const result = await submitBooking()
    showConfirmation(result)
  },
})
```

### CLS: Cumulative Layout Shift

```tsx
// Always specify dimensions
<Image
  src="/service.jpg"
  alt="Service"
  width={800}
  height={600}
/>

// Or use aspect-ratio
<div style={{ aspectRatio: '4/3' }}>
  <Image src="/photo.jpg" fill alt="Photo" />
</div>
```

### Fonts

```css
/* In your global CSS */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap; /* Prevents FOIT */
  size-adjust: 105%; /* Match fallback metrics */
}

/* System font fallback */
body {
  font-family: 'CustomFont', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Critical Rendering Path

```tsx
// Add to layout.tsx - Preconnect to critical origins
function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://backend.bengkelwiguna.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Speculation Rules (Instant Navigation)

```tsx
// Add to layout.tsx for instant page navigations
import { generateSpeculationRules } from '@/lib/performance'

export default function Layout({ children }) {
  const speculation = generateSpeculationRules({
    eagerness: 'moderate',
    excludePatterns: ['/booking/*', '/checkout/*'],
  })

  return (
    <html>
      <head>
        <script
          type="application/json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculation) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Caching Strategy

| Resource Type | Cache-Control |
|---------------|---------------|
| Hash-named assets (hashed filenames) | `public, max-age=31536000, immutable` |
| CSS/JS bundles | `public, max-age=31536000, immutable` |
| Images | `public, max-age=31536000, immutable` |
| HTML pages | `public, max-age=86400, stale-while-revalidate=604800` |
| API responses | `private, max-age=0, must-revalidate` |

## Runtime Performance

```tsx
import { debounce, throttle, rafLoop } from '@/lib/performance'

// Debounce scroll handlers
window.addEventListener('scroll', debounce(handleScroll, 100))

// Throttle resize handlers
window.addEventListener('resize', throttle(handleResize, 200))

// Animation loop
const animator = rafLoop(() => {
  updateAnimation()
})
animator.start()
```

## Third-party Scripts

```tsx
import { loadWhenVisible, loadOnInteraction, createFacade } from '@/lib/performance'

// Lazy load on visibility
loadWhenVisible('#youtube-embed', '/youtube-embed.js')

// Lazy load on click
loadOnInteraction('#twitter-widget', '/twitter-widget.js')

// YouTube facade - loads only on play
<YouTubeFacade videoId="abc123" title="Our Services" />
```

## View Transitions (Smooth Navigation)

```tsx
import { startViewTransition } from '@/lib/performance'

// SPA-style transitions
function navigateToProduct(id) {
  startViewTransition(() => {
    setCurrentProduct(id)
  })
}
```

CSS for shared element transitions:

```css
/* In your CSS */
@view-transition { navigation: auto; }

/* Shared element */
.product-thumbnail, .product-detail {
  view-transition-name: product-detail;
}
```

## Testing

### Performance Audit

```bash
# Full audit with budget checks
SITE_URL=https://bengkelwiguna.com node scripts/audit-performance.mjs

# JSON output for CI
SITE_URL=https://bengkelwiguna.com node scripts/audit-performance.mjs --json > results.json
```

### Core Web Vitals Test

```bash
# Lighthouse Core Web Vitals
SITE_URL=https://bengkelwiguna.com node scripts/test-core-web-vitals.mjs

# Verbose output
SITE_URL=https://bengkelwiguna.com node scripts/test-core-web-vitals.mjs --verbose
```

### Debug in Browser

```tsx
// Add to development only
if (process.env.NODE_ENV === 'development') {
  import('@/lib/core-web-vitals').then(({ debugLCP, debugINP, debugCLS }) => {
    debugLCP()
    debugINP()
    debugCLS()
  })
}
```

## Integration Checklist

- [ ] Enable optimized next.config.js
- [ ] Add preconnect to critical origins
- [ ] Use priority on hero images
- [ ] Set width/height on all images
- [ ] Configure font-display: swap
- [ ] Add Speculation Rules
- [ ] Enable View Transitions
- [ ] Set up performance monitoring
- [ ] Run baseline audit
- [ ] Set performance budget in CI

## Installed Skills

```
.agents/skills/
├── performance/         ← General performance optimization
├── core-web-vitals/      ← Core Web Vitals specific
├── wp-rest-api/         ← WordPress REST API
└── wp-abilities-api/    ← WordPress Abilities
```

## References

- [web.dev Performance](https://web.dev/articles/performance)
- [web.dev LCP](https://web.dev/articles/lcp)
- [web.dev INP](https://web.dev/articles/inp)
- [web.dev CLS](https://web.dev/articles/cls)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [View Transitions API](https://developer.chrome.com/docs/web-platform/view-transitions)