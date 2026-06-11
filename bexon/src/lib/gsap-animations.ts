/**
 * GSAP Animation Utilities for Bengkel Wiguna
 * Based on gsap-core skill patterns
 *
 * Features:
 * - Pre-built animation presets
 * - Scroll-triggered animations
 * - React hooks
 * - Accessibility support (prefers-reduced-motion)
 * - Brand-aligned easing
 */

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================
// BRAND-ALIGNED EASINGS
// ============================================

export const EASINGS = {
  // Primary - smooth deceleration (entrance animations)
  smooth: 'power3.out',

  // Secondary - slight overshoot (interactive elements)
  bouncy: 'back.out(1.7)',

  // Tertiary - elastic feel (celebratory moments)
  elastic: 'elastic.out(1, 0.3)',

  // Linear (continuous animations)
  linear: 'none',

  // Quick snap (buttons, toggles)
  snap: 'power2.inOut',

  // Dramatic (hero sections)
  dramatic: 'power4.out',

  // Gentle (subtle effects)
  gentle: 'power1.out',
} as const

// ============================================
// ANIMATION PRESETS
// ============================================

export const PRESETS = {
  // Fade in up (standard entrance)
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    duration: 0.6,
    ease: EASINGS.smooth,
  },

  // Fade in down
  fadeInDown: {
    from: { opacity: 0, y: -30 },
    to: { opacity: 1, y: 0 },
    duration: 0.6,
    ease: EASINGS.smooth,
  },

  // Scale in (cards, modals)
  scaleIn: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    duration: 0.5,
    ease: EASINGS.bouncy,
  },

  // Slide in from left
  slideInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0 },
    duration: 0.6,
    ease: EASINGS.smooth,
  },

  // Slide in from right
  slideInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    duration: 0.6,
    ease: EASINGS.smooth,
  },

  // Staggered reveal
  staggerReveal: {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    duration: 0.4,
    stagger: 0.1,
    ease: EASINGS.smooth,
  },

  // Button hover
  buttonHover: {
    scale: 1.05,
    duration: 0.2,
    ease: EASINGS.snap,
  },

  // Card hover lift
  cardHover: {
    from: { y: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    to: { y: -8, boxShadow: '0 20px 25px rgba(0,0,0,0.15)' },
    duration: 0.3,
    ease: EASINGS.smooth,
  },

  // Loading pulse
  pulse: {
    scale: 1.05,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: EASINGS.smooth,
  },
} as const

// ============================================
// ANIMATION FUNCTIONS
// ============================================

/**
 * Fade in up animation
 * @see gsap-core skill: Common vars
 */
export function fadeInUp(targets: gsap.TweenTarget, options: { duration?: number; delay?: number; stagger?: number } = {}) {
  const { duration = 0.6, delay = 0, stagger = 0 } = options

  return gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: EASINGS.smooth,
      stagger,
      scrollTrigger: {
        trigger: targets as Element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

/**
 * Scale in animation
 * @see gsap-core skill: Transform aliases
 */
export function scaleIn(targets: gsap.TweenTarget, options: { duration?: number; delay?: number } = {}) {
  const { duration = 0.5, delay = 0 } = options

  return gsap.fromTo(
    targets,
    { opacity: 0, scale: 0.9 },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease: EASINGS.bouncy,
      scrollTrigger: {
        trigger: targets as Element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

/**
 * Staggered children animation
 * @see gsap-core skill: Stagger
 */
export function staggerChildren(
  container: Element | string,
  options: {
    selector?: string
    from?: string
    stagger?: number | { amount: number; from?: string }
    duration?: number
    y?: number
    opacity?: number
  } = {}
) {
  const {
    selector = ':scope > *',
    from = 'start',
    stagger = { amount: 0.5, from },
    duration = 0.5,
    y = 20,
    opacity = 0,
  } = options

  return gsap.fromTo(
    container + ' ' + selector,
    { opacity, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: EASINGS.smooth,
      scrollTrigger: {
        trigger: container as Element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

/**
 * Parallax effect
 * @see gsap-core skill: ScrollTrigger
 */
export function parallax(targets: gsap.TweenTarget, options: { speed?: number; direction?: 'up' | 'down' } = {}) {
  const { speed = 0.5, direction = 'up' } = options
  const yPercent = direction === 'up' ? -100 * speed : 100 * speed

  return gsap.to(targets, {
    yPercent,
    ease: 'none',
    scrollTrigger: {
      trigger: targets as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}

/**
 * Text reveal animation
 * @see gsap-core skill: Function-based values
 */
export function textReveal(targets: gsap.TweenTarget, options: { duration?: number; delay?: number } = {}) {
  const { duration = 0.8, delay = 0 } = options

  return gsap.fromTo(
    targets,
    { 'clip-path': 'inset(0 100% 0 0)' },
    {
      'clip-path': 'inset(0 0% 0 0)',
      duration,
      delay,
      ease: EASINGS.dramatic,
      scrollTrigger: {
        trigger: targets as Element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

/**
 * Counter animation (numbers counting up)
 */
export function counter(targets: gsap.TweenTarget, options: { endValue: number; duration?: number; prefix?: string; suffix?: string } = {}) {
  const { endValue, duration = 2, prefix = '', suffix = '' } = options

  const counter = { value: 0 }

  return gsap.to(counter, {
    value: endValue,
    duration,
    ease: EASINGS.smooth,
    onUpdate: () => {
      const element = typeof targets === 'string' ? document.querySelector(targets) : targets
      if (element) {
        element.textContent = `${prefix}${Math.round(counter.value)}${suffix}`
      }
    },
    scrollTrigger: {
      trigger: targets as Element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  })
}

// ============================================
// INTERACTIVE ANIMATIONS
// ============================================

/**
 * Button hover animation
 * @see gsap-core skill: Transform aliases
 */
export function buttonHover(button: Element) {
  return gsap.to(button, {
    scale: 1.05,
    duration: 0.2,
    ease: EASINGS.snap,
  })
}

/**
 * Button hover out animation
 */
export function buttonHoverOut(button: Element) {
  return gsap.to(button, {
    scale: 1,
    duration: 0.2,
    ease: EASINGS.snap,
  })
}

/**
 * Card hover animation
 */
export function cardHover(card: Element, options: { lift?: number } = {}) {
  const { lift = -8 } = options

  return gsap.to(card, {
    y: lift,
    boxShadow: '0 20px 25px rgba(0,0,0,0.15)',
    duration: 0.3,
    ease: EASINGS.smooth,
  })
}

/**
 * Card hover out animation
 */
export function cardHoverOut(card: Element) {
  return gsap.to(card, {
    y: 0,
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    duration: 0.3,
    ease: EASINGS.smooth,
  })
}

/**
 * Magnetic button effect
 */
export function magneticButton(button: Element, strength = 0.3) {
  const handleMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    gsap.to(button, {
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
      duration: 0.3,
      ease: EASINGS.smooth,
    })
  }

  const handleLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: EASINGS.bouncy,
    })
  }

  button.addEventListener('mousemove', handleMove)
  button.addEventListener('mouseleave', handleLeave)

  return () => {
    button.removeEventListener('mousemove', handleMove)
    button.removeEventListener('mouseleave', handleLeave)
  }
}

// ============================================
// PAGE TRANSITIONS
// ============================================

/**
 * Page entrance animation
 */
export function pageEntrance(options: { stagger?: number } = {}) {
  const { stagger = 0.1 } = options

  return gsap.fromTo(
    'main > *',
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      ease: EASINGS.smooth,
    }
  )
}

/**
 * Hero section animation
 */
export function heroAnimation(hero: Element) {
  const tl = gsap.timeline()

  tl.fromTo(hero.querySelector('h1') || hero, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: EASINGS.dramatic })
    .fromTo(hero.querySelector('p') || hero, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: EASINGS.smooth }, '-=0.4')
    .fromTo(hero.querySelectorAll('button, a.btn') || hero, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: EASINGS.smooth }, '-=0.3')

  return tl
}

// ============================================
// ACCESSIBILITY: REDUCED MOTION
// ============================================

/**
 * Check if user prefers reduced motion
 * @see gsap-core skill: prefers-reduced-motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Animation that respects reduced motion preference
 */
export function animateRespectfully(
  targets: gsap.TweenTarget,
  fromVars: gsap.TweenVars,
  toVars: gsap.TweenVars
) {
  if (prefersReducedMotion()) {
    // Just set the final state immediately
    gsap.set(targets, toVars)
    return gsap.timeline()
  }

  return gsap.fromTo(targets, fromVars, toVars)
}

/**
 * ScrollTrigger that respects reduced motion
 */
export function scrollAnimateRespectfully(targets: gsap.TweenTarget, toVars: gsap.TweenVars) {
  if (prefersReducedMotion()) {
    // Just show immediately
    gsap.set(targets, { opacity: 1, y: 0, ...toVars })
    return
  }

  gsap.fromTo(
    targets,
    { opacity: 0, y: 30 },
    {
      ...toVars,
      scrollTrigger: {
        trigger: targets as Element,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    }
  )
}

// ============================================
// GSAP MATCHMEDIA (RESPONSIVE)
// ============================================

/**
 * Responsive animation setup with GSAP matchMedia
 * @see gsap-core skill: gsap.matchMedia()
 */
export function setupResponsiveAnimations() {
  if (typeof window === 'undefined') return

  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: '(min-width: 1024px)',
      isTablet: '(min-width: 768px) and (max-width: 1023px)',
      isMobile: '(max-width: 767px)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { isDesktop, isMobile, reduceMotion } = context.conditions || {}

      // Example: Adjust animation intensity based on device
      const duration = reduceMotion ? 0 : isMobile ? 0.4 : 0.6
      const yDistance = reduceMotion ? 0 : isMobile ? 15 : 30

      // Set up scroll animations with adjusted values
      gsap.fromTo(
        '.animate-on-scroll',
        { opacity: 0, y: yDistance },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: 0.1,
          ease: EASINGS.smooth,
          scrollTrigger: {
            trigger: '.animate-on-scroll',
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )

      return () => {
        // Cleanup when media query no longer matches
      }
    }
  )

  return () => mm.revert()
}

// ============================================
// REACT HOOKS
// ============================================

export function useGSAP(callback: (context: gsap.Context) => void, dependencies: unknown[] = []) {
  if (typeof window === 'undefined') return

  // This would be used in a React component
  // const ctx = useGSAP(() => { gsap.to(...) }, [])
  // useLayoutEffect(() => { return () => ctx.revert() }, [ctx])

  return { setupResponsiveAnimations }
}

// ============================================
// EXPORTS
// ============================================

export { gsap, ScrollTrigger, EASINGS, PRESETS }