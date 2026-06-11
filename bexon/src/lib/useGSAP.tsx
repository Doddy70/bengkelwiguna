/**
 * GSAP React Hooks for Bengkel Wiguna
 * Based on gsap-core skill patterns
 *
 * Provides React hooks for GSAP animations with proper cleanup
 */

'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap, gsap as gsapInstance } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ============================================
// TYPES
// ============================================

interface UseGSAPOptions {
  scope?: React.RefObject<Element | null>
  revertables?: boolean
}

interface UseScrollRevealOptions {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  once?: boolean
  start?: string
}

interface UseParallaxOptions {
  speed?: number
  direction?: 'up' | 'down'
  start?: string
  end?: string
}

// ============================================
// HOOK: useGSAP
// ============================================

/**
 * Main GSAP hook with automatic cleanup
 * @see gsap-core skill: gsap.context()
 */
export function useGSAP(options: UseGSAPOptions = {}) {
  const { scope, revertables = true } = options
  const ctxRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ctx = gsap.context(() => {}, scope?.current || document.body)
    ctxRef.current = ctx

    return () => {
      ctx.revert()
    }
  }, [scope])

  return ctxRef.current
}

// ============================================
// HOOK: useScrollReveal
// ============================================

/**
 * Animate element when it enters viewport
 * @see gsap-core skill: ScrollTrigger
 */
export function useScrollReveal<T extends Element>(
  options: UseScrollRevealOptions = {}
): [React.RefObject<T | null>, { reveal: () => void; hide: () => void }] {
  const {
    y = 30,
    opacity = 0,
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    once = true,
    start = 'top 85%',
  } = options

  const ref = useRef<T | null>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Skip animation for reduced motion
      gsap.set(ref.current, { opacity: 1, y: 0 })
      return
    }

    tweenRef.current = gsap.fromTo(
      ref.current,
      { opacity, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? 'play none none reverse' : 'play none none none',
        },
      }
    )

    return () => {
      tweenRef.current?.kill()
    }
  }, [y, opacity, duration, delay, stagger, once, start])

  const reveal = useCallback(() => {
    if (tweenRef.current) {
      tweenRef.current.play()
    }
  }, [])

  const hide = useCallback(() => {
    if (tweenRef.current) {
      tweenRef.current.reverse()
    }
  }, [])

  return [ref, { reveal, hide }]
}

// ============================================
// HOOK: useStaggerReveal
// ============================================

/**
 * Staggered reveal animation for child elements
 * @see gsap-core skill: Stagger
 */
export function useStaggerReveal<T extends Element>(
  selector: string,
  options: Omit<UseScrollRevealOptions, 'stagger'> & { staggerAmount?: number; from?: string } = {}
): React.RefObject<T | null> {
  const {
    y = 20,
    opacity = 0,
    duration = 0.5,
    staggerAmount = 0.1,
    from = 'start',
    start = 'top 80%',
    once = true,
  } = options

  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      const children = ref.current.querySelectorAll(selector)
      gsap.set(children, { opacity: 1, y: 0 })
      return
    }

    const children = ref.current.querySelectorAll(selector)

    gsap.fromTo(
      children,
      { opacity, y },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: { amount: staggerAmount, from },
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? 'play none none reverse' : 'play none none none',
        },
      }
    )
  }, [selector, y, opacity, duration, staggerAmount, from, start, once])

  return ref
}

// ============================================
// HOOK: useParallax
// ============================================

/**
 * Parallax scrolling effect
 * @see gsap-core skill: ScrollTrigger scrub
 */
export function useParallax<T extends Element>(
  options: UseParallaxOptions = {}
): React.RefObject<T | null> {
  const { speed = 0.5, direction = 'up', start = 'top bottom', end = 'bottom top' } = options

  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

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
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === ref.current) {
          st.kill()
        }
      })
    }
  }, [speed, direction, start, end])

  return ref
}

// ============================================
// HOOK: useHoverAnimation
// ============================================

/**
 * Hover animation for elements
 * @see gsap-core skill: Transform aliases
 */
export function useHoverAnimation<T extends Element>(
  onEnterVars: gsap.TweenVars,
  onLeaveVars?: gsap.TweenVars
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const enterTl = gsap.to(ref.current, {
      ...onEnterVars,
      duration: 0.2,
      ease: 'power2.out',
    })

    const leaveTl = onLeaveVars
      ? gsap.to(ref.current, {
          ...onLeaveVars,
          duration: 0.2,
          ease: 'power2.out',
        })
      : null

    const handleMouseEnter = () => enterTl.play()
    const handleMouseLeave = () => leaveTl?.play() || enterTl.reverse()

    ref.current.addEventListener('mouseenter', handleMouseEnter)
    ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter)
      ref.current?.removeEventListener('mouseleave', handleMouseLeave)
      enterTl.kill()
      leaveTl?.kill()
    }
  }, [onEnterVars, onLeaveVars])

  return ref
}

// ============================================
// HOOK: useMagneticEffect
// ============================================

/**
 * Magnetic button effect
 * @see gsap-core skill: Transform aliases
 */
export function useMagneticEffect<T extends Element>(strength = 0.3): React.RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

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
  }, [strength])

  return ref
}

// ============================================
// HOOK: useCountUp
// ============================================

/**
 * Animated number counter
 */
export function useCountUp(
  endValue: number,
  options: { duration?: number; startOnView?: boolean; prefix?: string; suffix?: string } = {}
): [React.RefObject<HTMLSpanElement | null>, number] {
  const { duration = 2, startOnView = true, prefix = '', suffix = '' } = options

  const ref = useRef<HTMLSpanElement | null>(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDisplayValue(endValue)
      return
    }

    const counter = { value: 0 }

    gsap.to(counter, {
      value: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayValue(Math.round(counter.value))
      },
      scrollTrigger: startOnView
        ? {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        : undefined,
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === ref.current) {
          st.kill()
        }
      })
    }
  }, [endValue, duration, startOnView])

  return [ref, displayValue]
}

// ============================================
// COMPONENT: AnimatedCounter
// ============================================

export function AnimatedCounter({
  value,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number
  prefix?: string
  suffix?: string
  className?: string
}) {
  const [ref, displayValue] = useCountUp(value, { prefix, suffix })

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

// ============================================
// COMPONENT: ScrollReveal
// ============================================

export function ScrollReveal({
  children,
  className = '',
  y = 30,
  duration = 0.6,
  as: Component = 'div',
  ...props
}: {
  children: React.ReactNode
  className?: string
  y?: number
  duration?: number
  as?: keyof JSX.IntrinsicElements
} & Omit<React.HTMLAttributes<Element>, 'className'>) {
  const [ref] = useScrollReveal<Element>({ y, duration })

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  )
}

// ============================================
// EXPORTS
// ============================================

export { gsap, ScrollTrigger }