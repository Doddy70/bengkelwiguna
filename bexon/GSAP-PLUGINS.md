# GSAP Plugins Guide

GSAP plugins integration for Bengkel Wiguna, based on `gsap-plugins` skill patterns.

## Install All GSAP

```bash
npm install gsap
```

All plugins are included in the `gsap` package - no extra installation needed.

## Quick Start

```tsx
import {
  scrollToElement,
  flipAnimate,
  createDraggable,
  revealChars,
  animateAlongPath,
} from '@/lib/gsap-plugins'

// Scroll to element
scrollToElement('#contact', { offset: 80 })

// Flip animation
flipAnimate('.card')

// Reveal text character by character
revealChars('.heading')

// Animate along SVG path
animateAlongPath('.car', '#route-path')
```

## Available Plugins

| Plugin | Purpose | Import |
|--------|---------|--------|
| ScrollToPlugin | Animate scroll position | `gsap/ScrollToPlugin` |
| Flip | Layout state animations | `gsap/Flip` |
| Draggable | Drag/touch interactions | `gsap/Draggable` |
| InertiaPlugin | Momentum/throw | `gsap/InertiaPlugin` |
| Observer | Swipe/scroll gestures | `gsap/Observer` |
| SplitText | Text splitting | `gsap/SplitText` |
| MotionPath | Path animations | `gsap/MotionPathPlugin` |
| CustomEase | Custom easing curves | `gsap/CustomEase` |
| CustomBounce | Bounce effects | `gsap/CustomBounce` |
| CustomWiggle | Wiggle effects | `gsap/CustomWiggle` |

## ScrollTo Plugin

```tsx
import { scrollToElement, scrollToTop } from '@/lib/gsap-plugins'

// Scroll to element with offset
scrollToElement('#services', { offset: 80, duration: 1 })

// Scroll to top
scrollToTop({ duration: 0.8 })

// Scroll to bottom
scrollToBottom()
```

## Flip Animations

```tsx
import { flipAnimate } from '@/lib/gsap-plugins'

// Capture state → change DOM → animate
const state = Flip.getState('.card')

// Reorder cards
reorderCards()

// Animate from old position to new
flipAnimate('.card', { duration: 0.5, ease: 'power2.inOut' })
```

## Draggable

```tsx
import { createDraggable } from '@/lib/gsap-plugins'

// Basic draggable
const draggable = createDraggable('.handle', {
  type: 'y',
  bounds: '.track',
  inertia: true,
})

// With callbacks
createDraggable('.slider-thumb', {
  type: 'x',
  onDrag: () => updateValue(),
  onDragEnd: () => saveValue(),
})
```

## Observer (Swipe Gestures)

```tsx
import { createObserver } from '@/lib/gsap-plugins'

createObserver('.carousel', {
  onLeft: () => goToNextSlide(),
  onRight: () => goToPrevSlide(),
  tolerance: 50,
})
```

## Text Animations

```tsx
import { revealChars, revealWords } from '@/lib/gsap-plugins'

// Character reveal
revealChars('.hero-title', { stagger: 0.02 })

// Word reveal
revealWords('.description', { stagger: 0.1 })
```

## Motion Path

```tsx
import { animateAlongPath } from '@/lib/gsap-plugins'

// Animate element along SVG path
animateAlongPath('.car', '#road-path', {
  duration: 3,
  autoRotate: true,
})
```

## Custom Easings

```tsx
import { CUSTOM_EASES } from '@/lib/gsap-plugins'

gsap.to('.element', {
  x: 100,
  ease: CUSTOM_EASES.smoothSlide,
})
```

## React Hooks

```tsx
import { useScrollTo, useDraggable } from '@/lib/gsap-plugins'

// Scroll hook
const scrollTo = useScrollTo()
<button onClick={() => scrollTo('#contact')}>Contact</button>

// Draggable hook
const ref = useRef(null)
useDraggable(ref, { type: 'x', inertia: true })
<div ref={ref}>Draggable</div>
```

## Best Practices

- ✅ Register plugins before use (already done in `gsap-plugins.ts`)
- ✅ Use `Flip.getState()` → DOM change → `Flip.from()` pattern
- ✅ Kill Draggable instances on unmount
- ✅ Revert SplitText instances when done

## Do Not

- ❌ Ship GSDevTools to production
- ❌ Use unregistered plugins
- ❌ Create tweens before DOM is mounted

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/gsap-plugins.ts` | Plugin integrations |
| `src/lib/useGSAP.tsx` | React hooks |
| `src/lib/gsap-animations.ts` | Animation presets |

## Resources

- [GSAP Plugins Docs](https://gsap.com/docs/v3/Plugins/)
- [ScrollTrigger](../gsap-scrolltrigger/SKILL.md)
- [gsap-plugins skill](../gsap-plugins/SKILL.md)
