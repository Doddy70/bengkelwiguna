/**
 * GSAP React Integration for Bengkel Wiguna
 * Based on gsap-react skill patterns + @gsap/react
 *
 * Features:
 * - useGSAP hook with automatic cleanup
 * - contextSafe callbacks
 * - SSR-safe patterns
 * - ScrollTrigger integration
 * - React 18+ compatible
 */

'use client'

import { useEffect, useRef, useState, useCallback, type RefObject } from 'react'

// Dynamic import to handle SSR
let gsap: typeof import('gsap').gsap | null = null
let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger | null = null
let useGSAPModule: typeof import('@gsap/react').useGSAP | null = null

// ============================================
// TYPES
// ============================================

interface GSAPContext {
  revert: () => void
  kill: () => void
}

interface UseGSAPConfig {
  dependencies?: unknown[]
  scope?: RefObject<HTMLElement | null>
  revertOnUpdate?: boolean
}

interface ScrollRevealConfig {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
  once?: boolean
}

interface StaggerConfig {
  selector: string
  y?: number
  opacity?: number
  duration?: number
  stagger?: number | { amount: number; from?: string }
  ease?: string
  start?: string
  once?: boolean
}

interface ParallaxConfig {
  speed?: number
  direction?: 'up' | 'down'
  start?: string
  end?: string
}

interface HoverConfig {
  enter?: Record<string, unknown>
  leave?: Record<string, unknown>
  duration?: number
  ease?: string
}

// ============================================
// SSR CHECK
// ============================================

function isClient(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function prefersReducedMotion(): boolean {
  if (!isClient()) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// ============================================
// INITIALIZATION (CLIENT-SIDE ONLY)
// ============================================

let initialized = false

async function initGSAP() {
  if (!isClient() || initialized) return

  try {
    const gsapModule = await import('gsap')
    const scrollTriggerModule = await import('gsap/ScrollTrigger')
    const reactModule = await import('@gsap/react')

    gsap = gsapModule.gsap
    ScrollTrigger = scrollTriggerModule.ScrollTrigger
    useGSAPModule = reactModule.useGSAP

    // Register plugins
    gsap.registerPlugin(ScrollTrigger)

    initialized = true
  } catch (error) {
    console.warn('GSAP initialization failed:', error)
  }
}

// ============================================
// HOOK: useGSAP
// ============================================

/**

/**
 * Main GSAP hook with automatic cleanup
 * Based on gsap-react skill patterns
 * @see gsap-react skill: useGSAP hook
 */
export function useGSAP(
  callback: (context: { contextSafe: <T extends (...args: unknown[]) => unknown>(fn: T) => T }) => void,
  config: UseGSAPConfig = {}
): void {
  const { dependencies = [], scope, revertOnUpdate = false } = config
  const [ready, setReady] = useState(false)
  const callbackRef = useRef(callback)

  // Keep callback ref updated
  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  // Initialize GSAP on mount
  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  // Main GSAP effect
  useEffect(() => {
    if (!ready || !gsap || !ScrollTrigger) return

    const ctx = gsap.context(() => {
      callbackRef.current({
        contextSafe: (fn) => {
          // Wrap function to be safe after unmount
          return (...args: unknown[]) => {
            if (isClient()) {
              return (fn as (...args: unknown[]) => unknown)(...args)
            }
            return undefined
          }
        },
      })
    }, scope?.current || document.body)

    return () => {
      if (revertOnUpdate) {
        ctx.revert()
      }
    }
  }, [ready, scope, dependencies, revertOnUpdate])
}

// ============================================
// HOOK: useGSAPRef (Direct GSAP access)
// ============================================

/**
 * Direct GSAP access hook for advanced usage
 */
export function useGSAPRef() {
  const [gsapInstance, setGsapInstance] = useState<typeof gsap | null>(null)

  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setGsapInstance(gsap)
    })
  }, [])

  return gsapInstance
}

// ============================================
// HOOK: useScrollReveal
// ============================================

/**
 * Scroll-triggered reveal animation
 * @see gsap-react skill: ScrollTrigger patterns
 */
export function useScrollReveal<T extends HTMLElement>(
  config: ScrollRevealConfig = {}
): [RefObject<T | null>, () => void, () => void] {
  const {
    y = 30,
    opacity = 0,
    duration = 0.6,
    delay = 0,
    stagger = 0,
    ease = 'power3.out',
    start = 'top 85%',
    once = true,
  } = config

  const ref = useRef<T | null>(null)
  const ctxRef = useRef<GSAPContext | null>(null)
  const [ready, setReady] = useState(false)
  const [revealed, setRevealed] = useState(false)

  // Initialize
  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  // Create animation
  useEffect(() => {
    if (!ready || !ref.current || !gsap || !ScrollTrigger) return

    // Check reduced motion
    if (prefersReducedMotion()) {
      gsap.set(ref.current, { opacity: 1, y: 0 })
      setRevealed(true)
      return
    }

    if (revealed) return

    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        ref.current!,
        { opacity, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease,
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once ? 'play none none reverse' : 'play none none none',
          },
        }
      )
    }, ref.current)

    return () => {
      ctxRef.current?.revert()
    }
  }, [ready, revealed, y, opacity, duration, delay, stagger, ease, start, once])

  const reveal = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.kill()
    }
    setRevealed(true)
  }, [])

  const hide = useCallback(() => {
    setRevealed(false)
  }, [])

  return [ref, reveal, hide]
}

// ============================================
// HOOK: useStaggerReveal
// ============================================

/**
 * Staggered children reveal animation
 * @see gsap-react skill: Stagger patterns
 */
export function useStaggerReveal<T extends HTMLElement>(
  selector: string,
  config: Omit<StaggerConfig, 'selector'> = {}
): [RefObject<T | null>, () => void] {
  const {
    y = 20,
    opacity = 0,
    duration = 0.5,
    stagger = { amount: 0.5, from: 'start' },
    ease = 'power3.out',
    start = 'top 80%',
    once = true,
  } = config

  const ref = useRef<T | null>(null)
  const ctxRef = useRef<GSAPContext | null>(null)
  const [ready, setReady] = useState(false)

  // Initialize
  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  // Create animation
  useEffect(() => {
    if (!ready || !ref.current || !gsap || !ScrollTrigger) return

    const children = ref.current.querySelectorAll(selector)
    if (children.length === 0) return

    // Check reduced motion
    if (prefersReducedMotion()) {
      gsap.set(children, { opacity: 1, y: 0 })
      return
    }

    ctxRef.current = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once ? 'play none none reverse' : 'play none none none',
          },
        }
      )
    }, ref.current)

    return () => {
      ctxRef.current?.revert()
    }
  }, [ready, selector, y, opacity, duration, stagger, ease, start, once])

  const reveal = useCallback(() => {
    if (ctxRef.current) {
      ctxRef.current.kill()
    }

    if (!ref.current || !gsap) return

    const children = ref.current.querySelectorAll(selector)
    gsap.fromTo(
      children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
      }
    )
  }, [selector, duration, stagger, ease])

  return [ref, reveal]
}

// ============================================
// HOOK: useParallax
// ============================================

/**
 * Parallax scrolling effect
 */
export function useParallax<T extends HTMLElement>(
  config: ParallaxConfig = {}
): RefObject<T | null> {
  const { speed = 0.5, direction = 'up', start = 'top bottom', end = 'bottom top' } = config

  const ref = useRef<T | null>(null)
  const [ready, setReady] = useState(false)

  // Initialize
  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  // Create animation
  useEffect(() => {
    if (!ready || !ref.current || !gsap || !ScrollTrigger) return

    if (prefersReducedMotion()) return

    const yPercent = direction === 'up' ? -100 * speed : 100 * speed

    gsap.to(ref.current, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start,
        end,
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger?.getAll()
        .filter((st) => st.vars.trigger === ref.current)
        .forEach((st) => st.kill())
    }
  }, [ready, speed, direction, start, end])

  return ref
}

// ============================================
// HOOK: useHover
// ============================================

/**
 * Hover animation hook
 */
export function useHover<T extends HTMLElement>(
  enterConfig: Record<string, unknown> = {},
  leaveConfig: Record<string, unknown> | null = null,
  options: { duration?: number; ease?: string } = {}
): RefObject<T | null> {
  const { duration = 0.2, ease = 'power2.out' } = options

  const ref = useRef<T | null>(null)
  const [ready, setReady] = useState(false)
  const enterTlRef = useRef<{ kill: () => void } | null>(null)
  const leaveTlRef = useRef<{ kill: () => void } | null>(null)

  // Initialize
  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  // Setup animation
  useEffect(() => {
    if (!ready || !ref.current || !gsap) return

    if (prefersReducedMotion()) return

    enterTlRef.current = gsap.to(ref.current, { ...enterConfig, duration, ease })
    enterTlRef.current.pause()

    if (leaveConfig) {
      leaveTlRef.current = gsap.to(ref.current, { ...leaveConfig, duration, ease })
      leaveTlRef.current.pause()
    }

    const handleMouseEnter = () => {
      enterTlRef.current?.play()
    }

    const handleMouseLeave = () => {
      if (leaveConfig && leaveTlRef.current) {
        leaveTlRef.current.play()
      } else {
        enterTlRef.current?.reverse()
      }
    }

    ref.current.addEventListener('mouseenter', handleMouseEnter)
    ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter)
      ref.current?.removeEventListener('mouseleave', handleMouseLeave)
      enterTlRef.current?.kill()
      leaveTlRef.current?.kill()
    }
  }, [ready, enterConfig, leaveConfig, duration, ease])

  return ref
}

// ============================================
// HOOK: useMagnetic
// ============================================

/**
 * Magnetic button effect
 */
export function useMagnetic<T extends HTMLElement>(
  strength = 0.3
): RefObject<T | null> {
  const ref = useRef<T | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!isClient()) return

    initGSAP().then(() => {
      setReady(true)
    })
  }, [])

  useEffect(() => {
    if (!ready || !ref.current || !gsap) return
    if (prefersReducedMotion()) return

    const element = ref.current

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      gsap.to(element, {
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      })
    }

    element.addEventListener('mousemove', handleMove)
    element.addEventListener('mouseleave', handleLeave)

    return () => {
      element.removeEventListener('mousemove', handleMove)
      element.removeEventListener('mouseleave', handleLeave)
    }
  }, [ready, strength])

  return ref
}

// ============================================
// REACT COMPONENTS
// ============================================

/**
 * ScrollReveal component
 */
export function ScrollReveal({
  children,
  className,
  as: Tag = 'div',
  y = 30,
  duration = 0.6,
  delay = 0,
  ...props
}: {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  y?: number
  duration?: number
  delay?: number
} & Omit<React.HTMLAttributes<HTMLElement>, 'className'>) {
  const [ref] = useScrollReveal<HTMLElement>({ y, duration, delay })

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}

/**
 * StaggerReveal component
 */
export function StaggerReveal({
  children,
  className,
  as: Tag = 'div',
  selector = ':scope > *',
  stagger = 0.1,
  duration = 0.5,
  ...props
}: {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  selector?: string
  stagger?: number
  duration?: number
} & Omit<React.HTMLAttributes<HTMLElement>, 'className'>) {
  const [ref] = useStaggerReveal<HTMLElement>(selector, { stagger, duration })

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}

// ============================================
// EXPORTS
// ============================================

export {
  useGSAP,
  useGSAPRef,
  useScrollReveal,
  useStaggerReveal,
  useParallax,
  useHover,
  useMagnetic,
  ScrollReveal,
  StaggerReveal,
}

export default {
  useGSAP,
  useGSAPRef,
  useScrollReveal,
  useStaggerReveal,
  useParallax,
  useHover,
  useMagnetic,
  ScrollReveal,
  StaggerReveal,
}