# Core Web Vitals Optimization Guide

Optimizing Bengkel Wiguna for Core Web Vitals targets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).

## Quick Start

### 1. Enable Optimized Next.js Config

```javascript
// next.config.js
const { withCoreWebVitals } = require('./next.config.with-vitals')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config
  reactStrictMode: true,
}

module.exports = withCoreWebVitals(nextConfig)
```

### 2. Track Web Vitals in Production

```javascript
// app/layout.tsx or pages/_app.tsx
import { initWebVitals } from '@/lib/core-web-vitals'

// Initialize tracking
initWebVitals({
  analyticsEndpoint: '/api/vitals',
  debug: process.env.NODE_ENV === 'development',
})
```

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/core-web-vitals.ts` | Optimization utilities and tracking |
| `next.config.web-vitals.js` | Next.js config optimizations |
| `scripts/test-core-web-vitals.mjs` | Lighthouse test runner |

## LCP Optimization

### Hero Image

```tsx
import Image from 'next/image'

// ❌ Bad - no priority
<Image src="/hero.jpg" alt="Hero" />

// ✅ Good - priority + preload
<Image
  src="/hero.jpg"
  alt="Hero"
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

### Speculation Rules (Instant Navigation)

Add to `app/layout.tsx`:

```tsx
import { generateSpeculationRules } from '@/lib/core-web-vitals'

export default function RootLayout({ children }) {
  const speculationRules = generateSpeculationRules({
    eagerness: 'moderate',
    patterns: ['/*'],
    excludePatterns: ['/checkout/*', '/booking/*'],
  })

  return (
    <html>
      <head>
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speculationRules),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## INP Optimization

### Optimized Event Handler

```tsx
import { createOptimizedHandler } from '@/lib/core-web-vitals'

const handleClick = createOptimizedHandler({
  // Instant visual feedback
  onVisualFeedback: (e) => {
    e.target.classList.add('loading')
  },
  // Heavy work after yield
  onHeavyWork: async (e) => {
    const result = await fetchBookingData()
    updateUI(result)
  },
  // Analytics last
  onAnalytics: (e) => {
    trackEvent('booking_click')
  },
})

<button onClick={handleClick}>Book Now</button>
```

### Lazy Load Heavy Components

```tsx
import dynamic from 'next/dynamic'

// ❌ Imports immediately
import HeavyMap from './HeavyMap'

// ✅ Loads on demand
const HeavyMap = dynamic(() => import('./HeavyMap'), {
  loading: () => <MapSkeleton />,
  ssr: false,
})
```

## CLS Optimization

### Image Dimensions

```tsx
// ❌ Causes layout shift
<Image src="/photo.jpg" alt="Photo" />

// ✅ Reserves space
<Image
  src="/photo.jpg"
  alt="Photo"
  width={800}
  height={600}
/>

// ✅ Or use aspect-ratio
<div style={{ aspectRatio: '4/3' }}>
  <Image src="/photo.jpg" alt="Photo" fill />
</div>
```

### Font Loading

```css
/* font-display: swap prevents FOIT */
@font-face {
  font-family: 'Custom';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
  /* Match fallback metrics to prevent CLS */
  size-adjust: 105%;
  ascent-override: 95%;
  descent-override: 20%;
}
```

## Testing

### Run Lighthouse Tests

```bash
# Test local site
SITE_URL=http://localhost:3000 node scripts/test-core-web-vitals.mjs

# Test production
SITE_URL=https://bengkelwiguna.com node scripts/test-core-web-vitals.mjs

# JSON output for CI/CD
node scripts/test-core-web-vitals.mjs --json > results.json
```

### Debug in Browser

```javascript
import { debugLCP, debugINP, debugCLS } from '@/lib/core-web-vitals'

// Add to development only
if (process.env.NODE_ENV === 'development') {
  debugLCP()
  debugINP()
  debugCLS()
}
```

## Checklist

### LCP ✅
- [ ] TTFB < 800ms (CDN, caching)
- [ ] Hero image has `priority` prop
- [ ] Images optimized (WebP/AVIF)
- [ ] Critical CSS inlined
- [ ] Fonts preloaded with `font-display: swap`
- [ ] Speculation Rules added

### INP ✅
- [ ] No tasks > 50ms
- [ ] Event handlers have immediate visual feedback
- [ ] Heavy work uses `scheduler.yield()` or `requestIdleCallback`
- [ ] Third-party scripts lazy loaded
- [ ] Heavy components use dynamic imports

### CLS ✅
- [ ] All images have width/height or aspect-ratio
- [ ] Fonts use matched metrics
- [ ] Ads have min-height containers
- [ ] Dynamic content inserted below viewport
- [ ] Animations use transform/opacity only

## Targets

| Metric | Good | Target |
|--------|------|--------|
| LCP | ≤ 2.5s | ⚡ < 2.0s |
| INP | ≤ 200ms | ⚡ < 150ms |
| CLS | ≤ 0.1 | ⚡ < 0.05 |
| FCP | ≤ 1.8s | ⚡ < 1.5s |
| TTFB | ≤ 800ms | ⚡ < 400ms |

## References

- [web.dev LCP Guide](https://web.dev/articles/lcp)
- [web.dev INP Guide](https://web.dev/articles/inp)
- [web.dev CLS Guide](https://web.dev/articles/cls)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
