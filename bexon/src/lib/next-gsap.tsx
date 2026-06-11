/**
 * Next.js GSAP Integration for Bengkel Wiguna
 * Based on gsap-frameworks skill patterns + gsap-core
 *
 * Provides Next.js App Router and Pages Router patterns
 * with proper SSR handling, lazy loading, and cleanup
 */

'use client'

import { useEffect, useRef, useState, useCallback, type RefObject } from 'react'
import { gsap as gsapInstance } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

// ============================================
// PLUGIN REGISTRATION
// ============================================

// Register plugins once
if (typeof window !== 'undefined') {
  gsapInstance.registerPlugin(ScrollTrigger, Observer, MotionPathPlugin)
}

// ============================================
// TYPES
// ============================================

interface GSAPContext {
  revert: () => void
  kill: () => void
}

interface UseGSAPOptions {
  scope?: RefObject<HTMLElement | null>
  revertOnUnmount?: boolean
}

interface ScrollRevealOptions {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
  once?: boolean
}

interface StaggerRevealOptions {
  selector: string
  y?: number
  opacity?: number
  duration?: number
  stagger?: number | { amount: number; from?: string }
  ease?: string
  start?: string
  once?: boolean
}

// ============================================
// LAZY LOAD PLUGIN MAP
// ============================================

const LAZY_PLUGINS = {
  Draggable: () => import('gsap/Draggable'),
  Flip: () => import('gsap/Flip'),
  TextPlugin: () => import('gsap/TextPlugin'),
  DrawSVGPlugin: () => import('gsap/DrawSVGPlugin'),
  MotionPathHelper: () => import('gsap/MotionPathHelper'),
  ScrambleTextPlugin: () => import('gsap/ScrambleTextPlugin'),
  CustomEase: () => import('gsap/CustomEase'),
  CustomBounce: () => import('gsap/CustomBounce'),
  CustomWiggle: () => import('gsap/CustomWiggle'),
} as const

type LazyPluginName = keyof typeof LAZY_PLUGINS

// ============================================
// LAZY LOAD HOOK
// ============================================

export function useLazyGSAP() {
  const [loadedPlugins, setLoadedPlugins] = useState<Record<string, unknown>>({})

  const loadPlugin = useCallback(async (name: LazyPluginName) => {
    if (loadedPlugins[name]) return loadedPlugins[name]

    try {
      const loader = LAZY_PLUGINS[name]
      if (!loader) return null

      const module = await loader()
      const plugin = module[name]

      if (plugin) {
        gsapInstance.registerPlugin(plugin)
        setLoadedPlugins((prev) => ({ ...prev, [name]: plugin }))
        return plugin
      }
    } catch (error) {
      console.error(`Failed to load GSAP plugin: ${name}`, error)
    }

    return null
  }, [loadedPlugins])

  return { loadPlugin, loadedPlugins }
}

// ============================================
// NEXT.JS APP ROUTER HOOKS
// ============================================

/**
 * Main useGSAP hook for Next.js App Router
 * Automatically handles SSR and cleanup
 * @see gsap-frameworks skill: Vue patterns (similar for Next.js)
 */
export function useGSAP(options: UseGSAPOptions = {}): GSAPContext | null {
  const { scope, revertOnUnmount = true } = options
  const ctxRef = useRef<GSAPContext | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Handle SSR
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Create GSAP context on mount
  useEffect(() => {
    if (!isClient || typeof window === 'undefined') return null

    const container = scope?.current || document.body

    ctxRef.current = gsapInstance.context(() => {}, container) as GSAPContext

    return () => {
      if (revertOnUnmount && ctxRef.current) {
        ctxRef.current.revert()
      }
    }
  }, [isClient, scope, revertOnUnmount])

  return ctxRef.current
}

/**
 * Scroll reveal animation hook
 * @see gsap-core skill: ScrollTrigger
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
): [RefObject<T | null>, GSAPContext | null] {
  const {
    y = 30,
    opacity = 0,
    duration = 0.6,
    delay = 0,
    stagger = 0,
    ease = 'power3.out',
    start = 'top 85%',
    once = true,
  } = options

  const ref = useRef<T | null>(null)
  const ctx = useGSAP({ scope: ref })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current || !ctx || hasAnimated) return

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsapInstance.set(ref.current, { opacity: 1, y: 0 })
      setHasAnimated(true)
      return
    }

    gsapInstance.fromTo(
      ref.current,
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

    setHasAnimated(true)
  }, [ctx, y, opacity, duration, delay, stagger, ease, start, once, hasAnimated])

  return [ref, ctx]
}

/**
 * Stagger reveal for multiple children
 */
export function useStaggerReveal<T extends HTMLElement>(
  options: StaggerRevealOptions
): [RefObject<T | null>, GSAPContext | null] {
  const {
    selector,
    y = 20,
    opacity = 0,
    duration = 0.5,
    stagger = { amount: 0.5, from: 'start' },
    ease = 'power3.out',
    start = 'top 80%',
    once = true,
  } = options

  const ref = useRef<T | null>(null)
  const ctx = useGSAP({ scope: ref })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!ref.current || !ctx || hasAnimated) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      const children = ref.current.querySelectorAll(selector)
      gsapInstance.set(children, { opacity: 1, y: 0 })
      setHasAnimated(true)
      return
    }

    const children = ref.current.querySelectorAll(selector)

    gsapInstance.fromTo(
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

    setHasAnimated(true)
  }, [ctx, selector, y, opacity, duration, stagger, ease, start, once, hasAnimated])

  return [ref, ctx]
}

/**
 * Parallax effect hook
 */
export function useParallax<T extends HTMLElement>(
  speed = 0.5,
  direction: 'up' | 'down' = 'up'
): RefObject<T | null> {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const yPercent = direction === 'up' ? -100 * speed : 100 * speed

    gsapInstance.to(ref.current, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
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
  }, [speed, direction])

  return ref
}

/**
 * Hover animation hook
 */
export function useHoverAnimation<T extends HTMLElement>(
  enterVars: gsapInstance.TweenVars,
  leaveVars?: gsapInstance.TweenVars
): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const enterTl = gsapInstance.to(ref.current, { ...enterVars, duration: 0.2, ease: 'power2.out' })
    const leaveTl = leaveVars ? gsapInstance.to(ref.current, { ...leaveVars, duration: 0.2, ease: 'power2.out' }) : null

    const handleMouseEnter = () => enterTl.play()
    const handleMouseLeave = () => (leaveTl ? leaveTl.play() : enterTl.reverse())

    ref.current.addEventListener('mouseenter', handleMouseEnter)
    ref.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      ref.current?.removeEventListener('mouseenter', handleMouseEnter)
      ref.current?.removeEventListener('mouseleave', handleMouseLeave)
      enterTl.kill()
      leaveTl?.kill()
    }
  }, [enterVars, leaveVars])

  return ref
}

/**
 * Magnetic effect hook
 */
export function useMagneticEffect<T extends HTMLElement>(strength = 0.3): RefObject<T | null> {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const element = ref.current

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      gsapInstance.to(element, {
        x: (e.clientX - centerX) * strength,
        y: (e.clientY - centerY) * strength,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleLeave = () => {
      gsapInstance.to(element, {
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
// PAGE TRANSITION UTILITIES
// ============================================

/**
 * Page entrance animation
 */
export function usePageEntrance(stagger = 0.1) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      gsapInstance.set(ref.current.children, { opacity: 1, y: 0 })
      return
    }

    gsapInstance.fromTo(
      ref.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger,
        ease: 'power3.out',
        delay: 0.1,
      }
    )
  }, [stagger])

  return ref
}

// ============================================
// REACT COMPONENTS
// ============================================

export interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  y?: number
  duration?: number
  delay?: number
}

export function ScrollRevealComponent({
  children,
  className = '',
  as: Component = 'div',
  y = 30,
  duration = 0.6,
  delay = 0,
  ...props
}: ScrollRevealProps) {
  const [ref] = useScrollReveal<HTMLDivElement>({ y, duration, delay })

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  )
}

export interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  selector: string
  y?: number
  duration?: number
  staggerAmount?: number
}

export function StaggerRevealComponent({
  children,
  className = '',
  as: Component = 'div',
  selector = ':scope > *',
  y = 20,
  duration = 0.5,
  staggerAmount = 0.1,
  ...props
}: StaggerRevealProps) {
  const [ref] = useStaggerReveal<HTMLDivElement>({
    selector,
    y,
    duration,
    stagger: { amount: staggerAmount, from: 'start' },
  })

  return (
    <Component ref={ref} className={className} {...props}>
      {children}
    </Component>
  )
}

// ============================================
// EXPORTS
// ============================================

export { gsapInstance as gsap, ScrollTrigger, gsapInstance }

export default {
  useGSAP,
  useScrollReveal,
  useStaggerReveal,
  useParallax,
  useHoverAnimation,
  useMagneticEffect,
  usePageEntrance,
  useLazyGSAP,
  ScrollRevealComponent,
  StaggerRevealComponent,
}