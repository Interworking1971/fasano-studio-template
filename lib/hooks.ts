'use client'

import { useEffect, useRef, useState, type RefObject } from 'react'

/** True once the component has mounted on the client. */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

/** Respects the OS "reduce motion" setting, live. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

/**
 * Fires once when the element first enters the viewport.
 * Used by every scroll reveal in the template.
 */
export function useInView<T extends HTMLElement>(
  options: { threshold?: number; rootMargin?: string; once?: boolean } = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}

/**
 * Writes the element's 0→1 scroll progress to a CSS custom property
 * (`--scroll-progress`) on every frame it is visible.
 *
 * Everything scroll-driven in this template reads that variable from CSS
 * rather than setting styles from JS — it keeps the work on the compositor
 * and means a section can be re-choreographed without touching the React.
 */
export function useScrollProgress<T extends HTMLElement>(
  options: {
    property?: string
    startOffset?: number
    endOffset?: number
    /**
     * `enter` (default) — 0 when the element's top reaches the bottom of the
     * viewport, 1 when its bottom reaches the top. Right for anything that
     * scrolls past, e.g. parallax.
     *
     * `top` — 0 when the element's top is at the top of the viewport, 1 after
     * scrolling its own height. Right for a full-height hero pinned at the
     * top of the page, which under `enter` would already read ~0.5 at rest.
     */
    anchor?: 'enter' | 'top'
  } = {}
): RefObject<T | null> {
  const {
    property = '--scroll-progress',
    startOffset = 0,
    endOffset = 0,
    anchor = 'enter',
  } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    let visible = true

    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight

      let progress: number
      if (anchor === 'top') {
        progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)))
      } else {
        // 0 when the element's top hits the bottom of the viewport,
        // 1 when its bottom hits the top.
        const total = rect.height + vh - startOffset - endOffset
        const travelled = vh - rect.top - startOffset
        progress = Math.min(1, Math.max(0, travelled / total))
      }

      el.style.setProperty(property, progress.toFixed(4))
    }

    const onScroll = () => {
      if (!visible || frame) return
      frame = requestAnimationFrame(update)
    }

    // Only listen while the section is anywhere near the viewport.
    const gate = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) update()
      },
      { rootMargin: '100% 0px 100% 0px' }
    )
    gate.observe(el)

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      gate.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [property, startOffset, endOffset, anchor])

  return ref
}

/** Locks body scroll — used by the fullscreen menu. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

/**
 * Reports scroll direction + whether the page has been scrolled at all.
 * Drives the header's hide-on-scroll-down / show-on-scroll-up behaviour.
 */
export function useScrollDirection(threshold = 12) {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let frame = 0

    const update = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 24)
      if (Math.abs(y - last) < threshold) return
      setDirection(y > last && y > 120 ? 'down' : 'up')
      last = y
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return { direction, scrolled }
}
