# GSAP React Integration

Complete GSAP + React integration for Bengkel Wiguna based on `gsap-react` skill patterns.

## Install

```bash
npm install gsap @gsap/react
```

## Quick Start

```tsx
import { useGSAP, useScrollReveal, ScrollReveal } from '@/lib/useGSAP'

// Basic usage with useGSAP
function Hero() {
  useGSAP(() => {
    gsap.from('.hero-content', { y: 50, opacity: 0, duration: 0.8 })
  })

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome</h1>
      </div>
    </section>
  )
}

// Scroll reveal component
function ServiceCard({ title }) {
  return (
    <ScrollReveal y={30} duration={0.6}>
      <h3>{title}</h3>
    </ScrollReveal>
  )
}
```

## Core Hooks

### useGSAP

Main hook for GSAP animations with automatic cleanup.

```tsx
import { useGSAP } from '@/lib/useGSAP'

function MyComponent() {
  useGSAP((context) => {
    gsap.to('.box', { x: 100 })
    
    // contextSafe for event handlers
    const handleClick = context.contextSafe(() => {
      gsap.to('.box', { rotation: 360 })
    })
  }, { scope: containerRef })

  return <div ref={containerRef}>...</div>
}
```

### useScrollReveal

Animate elements when they scroll into view.

```tsx
const [ref, reveal, hide] = useScrollReveal<HTMLDivElement>({
  y: 30,
  opacity: 0,
  duration: 0.6,
  delay: 0,
  ease: 'power3.out',
  start: 'top 85%',
  once: true,
})

return <div ref={ref}>Content</div>
```

### useStaggerReveal

Staggered children animation.

```tsx
const [ref] = useStaggerReveal<HTMLDivElement>('.service-card', {
  y: 20,
  duration: 0.5,
  stagger: { amount: 0.5, from: 'start' },
})

return (
  <div ref={ref}>
    <div className="service-card">Card 1</div>
    <div className="service-card">Card 2</div>
    <div className="service-card">Card 3</div>
  </div>
)
```

### useParallax

Parallax scrolling effect.

```tsx
const ref = useParallax<HTMLDivElement>({
  speed: 0.5,
  direction: 'up',
  start: 'top bottom',
  end: 'bottom top',
})

return <div ref={ref}>Parallax Content</div>
```

### useHover

Interactive hover animations.

```tsx
const ref = useHover<HTMLButtonElement>(
  { scale: 1.05, y: -2 },  // enter
  { scale: 1, y: 0 },      // leave
  { duration: 0.2 }
)

return <button ref={ref}>Hover Me</button>
```

### useMagnetic

Magnetic button effect.

```tsx
const ref = useMagnetic<HTMLButtonElement>(0.3) // strength

return <button ref={ref}>Magnetic</button>
```

## React Components

### ScrollReveal

Wrapper component for scroll animations.

```tsx
<ScrollReveal y={50} duration={0.8} delay={0.2} as="section">
  <h1>Animated Heading</h1>
  <p>Animated paragraph</p>
</ScrollReveal>
```

### StaggerReveal

Wrapper for staggered children.

```tsx
<StaggerReveal selector=".card" stagger={0.1} duration={0.5}>
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
</StaggerReveal>
```

## SSR Safe

All hooks check for client-side rendering:

```tsx
function isClient() {
  return typeof window !== 'undefined'
}

// Hooks handle SSR automatically
useEffect(() => {
  if (!isClient()) return
  // GSAP code here
}, [])
```

## Reduced Motion

All animations respect `prefers-reduced-motion`:

```tsx
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Automatically skips animation for users who prefer reduced motion
```

## Best Practices

### Do

- ✅ Use `scope` to limit selectors to component
- ✅ Return cleanup from `useEffect` when using raw GSAP
- ✅ Use refs for precise targeting
- ✅ Check `isClient()` for SSR safety

### Don't

- ❌ Target by selector without scope
- ❌ Skip cleanup
- ❌ Run GSAP during SSR

## Integration with Next.js

```tsx
// app/providers.tsx
'use client'
import { useGSAP } from '@/lib/useGSAP'

export function GSAPProvider({ children }) {
  useGSAP(() => {})
  return <>{children}</>
}

// app/layout.tsx
import { GSAPProvider } from './providers'

export default function Layout({ children }) {
  return (
    <html lang="id">
      <body>
        <GSAPProvider>{children}</GSAPProvider>
      </body>
    </html>
  )
}
```

## With ScrollTrigger

```tsx
import { useGSAP } from '@/lib/useGSAP'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger)
  
  gsap.to('.element', {
    y: 100,
    scrollTrigger: {
      trigger: '.trigger',
      start: 'top bottom',
      end: 'top top',
      scrub: true,
    },
  })
}, { dependencies: [] })
```

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/useGSAP.ts` | React hooks & components |
| `src/lib/gsap-animations.ts` | Animation presets |
| `src/lib/gsap-plugins.ts` | Plugin integrations |

## Resources

- [GSAP React](https://gsap.com/resources/react/)
- [gsap-react skill](../gsap-react/SKILL.md)
- [@gsap/react docs](https://www.npmjs.com/package/@gsap/react)