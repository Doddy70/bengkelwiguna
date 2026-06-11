/**
 * GSAP Plugins Integration for Bengkel Wiguna
 * Based on gsap-plugins skill patterns
 *
 * Includes:
 * - ScrollToPlugin
 * - Flip
 * - Draggable + Inertia
 * - Observer
 * - SplitText
 * - MotionPath
 * - CustomEase
 */

'use client'

import { gsap as gsapInstance } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Flip } from 'gsap/Flip'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import { Observer } from 'gsap/Observer'
import { SplitText } from 'gsap/SplitText'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { CustomEase } from 'gsap/CustomEase'
import { CustomBounce } from 'gsap/CustomBounce'
import { CustomWiggle } from 'gsap/CustomWiggle'

// ============================================
// PLUGIN REGISTRATION
// ============================================

// Register all plugins once
if (typeof window !== 'undefined') {
  gsapInstance.registerPlugin(
    ScrollTrigger,
    ScrollToPlugin,
    Flip,
    Draggable,
    InertiaPlugin,
    Observer,
    SplitText,
    MotionPathPlugin,
    CustomEase,
    CustomBounce,
    CustomWiggle
  )
}

// ============================================
// SCROLL TO
// ============================================

/**
 * Scroll to element with offset
 * @see gsap-plugins skill: ScrollToPlugin
 */
export function scrollToElement(
  target: string | Element,
  options: {
    offset?: number
    duration?: number
    ease?: string
  } = {}
) {
  const { offset = 0, duration = 1, ease = 'power3.inOut' } = options

  return gsapInstance.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY: offset,
    },
    ease,
  })
}

/**
 * Scroll to position
 */
export function scrollToPosition(
  y: number,
  options: { duration?: number; ease?: string } = {}
) {
  const { duration = 1, ease = 'power3.inOut' } = options

  return gsapInstance.to(window, {
    duration,
    scrollTo: { y },
    ease,
  })
}

/**
 * Scroll to top
 */
export function scrollToTop(options?: { duration?: number }) {
  return scrollToPosition(0, options)
}

/**
 * Scroll to bottom
 */
export function scrollToBottom(options?: { duration?: number }) {
  return scrollToPosition('max', options)
}

// ============================================
// FLIP ANIMATIONS
// ============================================

/**
 * Capture state and animate to new state
 * @see gsap-plugins skill: Flip
 */
export function flipAnimate(
  targets: string | Element | Element[],
  options: {
    duration?: number
    ease?: string
    absolute?: boolean
    scale?: boolean
  } = {}
) {
  const { duration = 0.5, ease = 'power2.inOut', absolute = false, scale = true } = options

  // Capture current state
  const state = Flip.getState(targets)

  // Apply changes to DOM (user should do this before or after calling this)

  // Animate from old state to new state
  Flip.from(state, {
    duration,
    ease,
    absolute,
    scale,
    gsapInstance: gsapInstance,
  })
}

// ============================================
// DRAGGABLE
// ============================================

/**
 * Create draggable element
 * @see gsap-plugins skill: Draggable
 */
export function createDraggable(
  target: string | Element | Element[],
  options: {
    type?: 'x' | 'y' | 'x,y' | 'rotation'
    bounds?: string | Element
    inertia?: boolean
    edgeResistance?: number
    onDragStart?: () => void
    onDrag?: () => void
    onDragEnd?: () => void
  } = {}
) {
  const {
    type = 'x,y',
    bounds,
    inertia = false,
    edgeResistance = 0.65,
    onDragStart,
    onDrag,
    onDragEnd,
  } = options

  const draggableOptions: Draggable.Vars = {
    type,
    bounds,
    edgeResistance,
    inertia: inertia ? true : false,
    onDragStart: onDragStart ? () => onDragStart() : undefined,
    onDrag: onDrag ? () => onDrag() : undefined,
    onDragEnd: onDragEnd ? () => onDragEnd() : undefined,
  }

  if (inertia) {
    gsapInstance.registerPlugin(InertiaPlugin)
  }

  return Draggable.create(target, draggableOptions)
}

/**
 * Create slider with inertia
 */
export function createSlider(
  track: string | Element,
  handle: string | Element,
  options: {
    bounds?: { min: number; max: number }
    onChange?: (value: number) => void
  } = {}
) {
  const { bounds, onChange } = options

  const slider = createDraggable(handle, {
    type: 'x',
    bounds: track,
    inertia: true,
    edgeResistance: 0.9,
    onDrag: () => {
      const x = gsapInstance.to(handle, { x: 0 }).vars.x
      const trackWidth = (track as Element).getBoundingClientRect().width
      const handleWidth = (handle as Element).getBoundingClientRect().width
      const value = Math.max(0, Math.min(1, x / (trackWidth - handleWidth))
      onChange?.(value)
    },
  })

  return slider
}

// ============================================
// OBSERVER
// ============================================

/**
 * Create observer for swipe/scroll gestures
 * @see gsap-plugins skill: Observer
 */
export function createObserver(
  target: string | Element,
  options: {
    onUp?: () => void
    onDown?: () => void
    onLeft?: () => void
    onRight?: () => void
    tolerance?: number
    type?: 'touch' | 'pointer' | 'wheel'
  } = {}
) {
  const { onUp, onDown, onLeft, onRight, tolerance = 10, type = 'touch,pointer' } = options

  return Observer.create({
    target,
    type,
    tolerance,
    onUp,
    onDown,
    onLeft,
    onRight,
  })
}

// ============================================
// TEXT ANIMATIONS
// ============================================

/**
 * Split text for animation
 * @see gsap-plugins skill: SplitText
 */
export function splitTextAnimate(
  target: string | Element,
  options: {
    type?: 'chars' | 'words' | 'lines'
    animate?: {
      from?: { opacity?: number; y?: number }
      to?: { opacity?: number; y?: number }
      duration?: number
      stagger?: number
      ease?: string
    }
  } = {}
) {
  const {
    type = 'chars,words',
    animate = {
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      duration: 0.4,
      stagger: 0.03,
      ease: 'power3.out',
    },
  } = options

  // Split text
  const split = SplitText.create(target, { type })

  // Animate
  gsapInstance.fromTo(
    split.chars,
    animate.from,
    {
      ...animate.to,
      duration: animate.duration,
      stagger: animate.stagger,
      ease: animate.ease,
    }
  )

  return split
}

/**
 * Character-by-character reveal
 */
export function revealChars(
  target: string | Element,
  options: { duration?: number; stagger?: number; ease?: string } = {}
) {
  const { duration = 0.4, stagger = 0.03, ease = 'power3.out' } = options

  return splitTextAnimate(target, {
    type: 'chars',
    animate: {
      from: { opacity: 0, y: 20 },
      to: { opacity: 1, y: 0 },
      duration,
      stagger,
      ease,
    },
  })
}

/**
 * Word-by-word reveal
 */
export function revealWords(
  target: string | Element,
  options: { duration?: number; stagger?: number; ease?: string } = {}
) {
  const { duration = 0.4, stagger = 0.1, ease = 'power3.out' } = options

  return splitTextAnimate(target, {
    type: 'words',
    animate: {
      from: { opacity: 0, y: 10 },
      to: { opacity: 1, y: 0 },
      duration,
      stagger,
      ease,
    },
  })
}

// ============================================
// MOTION PATH
// ============================================

/**
 * Animate along SVG path
 * @see gsap-plugins skill: MotionPath
 */
export function animateAlongPath(
  target: string | Element,
  path: string | Element,
  options: {
    duration?: number
    ease?: string
    autoRotate?: boolean
    offset?: number
  } = {}
) {
  const { duration = 2, ease = 'none', autoRotate = false, offset = 0 } = options

  return gsapInstance.to(target, {
    duration,
    ease,
    motionPath: {
      path,
      align: path,
      alignOrigin: [0.5, 0.5],
      autoRotate,
      offset,
    },
  })
}

/**
 * Animate along path with progress control
 */
export function createPathAnimation(
  target: string | Element,
  path: string | Element,
  options?: {
    duration?: number
    ease?: string
    autoRotate?: boolean
  }
) {
  const tween = animateAlongPath(target, path, options)

  return {
    tween,
    play: () => tween.play(),
    pause: () => tween.pause(),
    reverse: () => tween.reverse(),
    restart: () => tween.restart(),
    seek: (progress: number) => tween.seek(progress),
    progress: (p?: number) => (p !== undefined ? tween.progress(p) : tween.progress()),
  }
}

// ============================================
// CUSTOM EASING
// ============================================

// Predefined custom eases
export const CUSTOM_EASES = {
  // Smooth slide
  smoothSlide: CustomEase.create('smoothSlide', '.17,.67,.83,.67'),

  // Bounce
  bigBounce: CustomBounce.create('bigBounce', { strength: 1, endAtStart: true }),

  // Wiggle
  wiggle: CustomWiggle.create('wiggle', { wiggles: 5, type: 'easeOut' }),
}

// ============================================
// SCRAMBLE TEXT
// ============================================

/**
 * Animate text with scramble effect
 */
export function scrambleText(
  target: string | Element,
  newText: string,
  options: {
    duration?: number
    revealDelay?: number
    chars?: string
  } = {}
) {
  const { duration = 1, revealDelay = 0.5, chars = '01' } = options

  return gsapInstance.to(target, {
    duration,
    scramble: {
      text: newText,
      chars,
      revealDelay,
    },
  })
}

// ============================================
// REACT HOOKS
// ============================================

import { useEffect, useRef } from 'react'

/**
 * Hook for scroll-to functionality
 */
export function useScrollTo(options?: Parameters<typeof scrollToElement>[1]) {
  const scrollTo = (target: string | Element) => {
    scrollToElement(target, options)
  }

  return scrollTo
}

/**
 * Hook for Flip animations
 */
export function useFlip(options?: Parameters<typeof flipAnimate>[1]) {
  const ref = useRef<Element[]>([])

  const capture = () => {
    return Flip.getState(ref.current)
  }

  const animate = (state: Flip.FlipState) => {
    Flip.from(state, {
      ...options,
      gsapInstance,
    })
  }

  return { ref, capture, animate }
}

/**
 * Hook for Draggable
 */
export function useDraggable(
  targetRef: React.RefObject<Element | null>,
  options?: Parameters<typeof createDraggable>[1]
) {
  useEffect(() => {
    if (!targetRef.current) return

    const draggable = createDraggable(targetRef.current, options || {})

    return () => {
      draggable.forEach((d) => d.kill())
    }
  }, [targetRef, options])
}

// ============================================
// EXPORTS
// ============================================

export { gsapInstance as gsap, ScrollTrigger, gsapInstance }

export default {
  scrollToElement,
  scrollToPosition,
  scrollToTop,
  scrollToBottom,
  flipAnimate,
  createDraggable,
  createSlider,
  createObserver,
  splitTextAnimate,
  revealChars,
  revealWords,
  animateAlongPath,
  createPathAnimation,
  scrambleText,
  CUSTOM_EASES,
}
