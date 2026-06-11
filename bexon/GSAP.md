# GSAP Animation Guide

GSAP (GreenSock Animation Platform) integration for Bengkel Wiguna, based on `gsap-core` skill patterns.

## Quick Start

### 1. Install GSAP

```bash
npm install gsap
# For scroll animations:
npm install gsap ScrollTrigger
```

### 2. Use in Components

```tsx
import { useScrollReveal, useGSAP } from '@/lib/useGSAP'

// Scroll reveal animation
function ServiceCard({ service }) {
  const [ref] = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 })

  return (
    <div ref={ref} className="card">
      <h3>{service.title}</h3>
    </div>
  )
}

// Main GSAP context
function Page() {
  useGSAP()

  return (
    <main>
      <Hero />
      <Services />
    </main>
  )
}
```

## Animation Hooks

### useScrollReveal

Animate elements when they enter the viewport.

```tsx
const [ref] = useScrollReveal<HTMLDivElement>({
  y: 30,           // Y distance to animate from
  opacity: 0,      // Starting opacity
  duration: 0.6,   // Animation duration in seconds
  delay: 0,        // Delay before animation starts
  once: true,       // Only animate once
  start: 'top 85%', // ScrollTrigger start position
})
```

### useStaggerReveal

Staggered reveal for child elements.

```tsx
const ref = useStaggerReveal<HTMLDivElement>('.service-card', {
  y: 20,
  staggerAmount: 0.1,  // Delay between each child
  from: 'start',       // 'start' | 'center' | 'end' | 'random' | 'edges'
})
```

### useParallax

Parallax scrolling effect.

```tsx
const ref = useParallax<HTMLDivElement>({
  speed: 0.5,      // Parallax intensity (0-1)
  direction: 'up',  // 'up' or 'down'
})
```

### useHoverAnimation

Interactive hover effects.

```tsx
const ref = useHoverAnimation<HTMLButtonElement>(
  { scale: 1.05, y: -2 },    // On enter
  { scale: 1, y: 0 }          // On leave (optional)
)
```

### useMagneticEffect

Magnetic button effect (follows cursor).

```tsx
const ref = useMagneticEffect<HTMLButtonElement>(0.3) // Strength
```

### useCountUp

Animated number counter.

```tsx
const [ref, value] = useCountUp(1000, { duration: 2, prefix: '$' })

// Or use the component:
<AnimatedCounter value={1000} prefix="$" suffix="+" />
```

## Animation Presets

### Standalone Functions

```tsx
import { fadeInUp, scaleIn, staggerChildren, parallax } from '@/lib/gsap-animations'

// Fade in up
fadeInUp('.hero-title')

// Scale in
scaleIn('.modal', { duration: 0.5 })

// Stagger children
staggerChildren('.services-grid', { selector: '.service-card' })

// Parallax
parallax('.hero-bg', { speed: 0.5 })
```

## Pre-built Easings

```tsx
import { EASINGS } from '@/lib/gsap-animations'

// Brand-aligned easings
gsap.to('.element', {
  x: 100,
  ease: EASINGS.smooth,    // power3.out - entrances
  ease: EASINGS.bouncy,    // back.out(1.7) - interactive
  ease: EASINGS.elastic,   // elastic.out(1, 0.3) - celebration
  ease: EASINGS.dramatic,   // power4.out - hero sections
})
```

## Accessibility

All animations respect the `prefers-reduced-motion` setting.

```tsx
// Automatically skips animation for users who prefer reduced motion
const [ref] = useScrollReveal<HTMLDivElement>({ ... })

// Manual check
import { prefersReducedMotion } from '@/lib/gsap-animations'

if (prefersReducedMotion()) {
  // Skip animation
}
```

## ScrollTrigger Setup

```tsx
import { setupResponsiveAnimations } from '@/lib/gsap-animations'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const cleanup = setupResponsiveAnimations()
    return cleanup
  }, [])

  return <Component />
}
```

## React Components

### ScrollReveal

```tsx
import { ScrollReveal } from '@/lib/useGSAP'

// Simple usage
<ScrollReveal>
  <h1>Hello</h1>
</ScrollReveal>

// With options
<ScrollReveal y={50} duration={0.8} as="section" className="hero">
  <h1>Welcome</h1>
</ScrollReveal>
```

### AnimatedCounter

```tsx
import { AnimatedCounter } from '@/lib/useGSAP'

// Basic
<AnimatedCounter value={500} />

// With formatting
<AnimatedCounter value={1500} prefix="$" suffix="+" />
```

## GSAP MatchMedia (Responsive)

```tsx
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mm = gsap.matchMedia()

mm.add(
  {
    isDesktop: '(min-width: 1024px)',
    isTablet: '(min-width: 768px) and (max-width: 1023px)',
    isMobile: '(max-width: 767px)',
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  (context) => {
    const { isDesktop, reduceMotion } = context.conditions || {}

    const duration = reduceMotion ? 0 : isDesktop ? 0.6 : 0.4
    const yDistance = reduceMotion ? 0 : isDesktop ? 30 : 15

    gsap.fromTo('.animate', { y: yDistance }, { y: 0, duration })

    return () => { /* cleanup */ }
  }
)
```

## Best Practices

### Do

- ✅ Use transform aliases (`x`, `y`, `scale`) for performance
- ✅ Respect `prefers-reduced-motion`
- ✅ Clean up animations in `useEffect` return
- ✅ Use `gsap.set()` for immediate values

### Don't

- ❌ Animate layout properties (`width`, `height`) when transforms work
- ❌ Use invalid easing names
- ❌ Nest `gsap.context()` inside `matchMedia`
- ❌ Forget cleanup in `useEffect`

## GSAP Tween Methods

```tsx
import { gsap } from 'gsap'

// Animate FROM current state TO target state
gsap.to('.element', { x: 100, duration: 1 })

// Animate FROM vars TO current state
gsap.from('.element', { opacity: 0, y: 50, duration: 1 })

// Explicit FROM and TO
gsap.fromTo('.element',
  { opacity: 0 },           // From
  { opacity: 1, x: 100 }   // To
)

// Immediate SET (no animation)
gsap.set('.element', { x: 0, opacity: 1 })
```

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/gsap-animations.ts` | Animation functions, presets, utilities |
| `src/lib/useGSAP.tsx` | React hooks for GSAP |

## Resources

- [GSAP Documentation](https://gsap.com/docs/)
- [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [gsap-core skill](../gsap-core/SKILL.md)