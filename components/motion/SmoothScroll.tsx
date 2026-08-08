'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePrefersReducedMotion } from '@/lib/hooks'

/**
 * Lenis smooth scroll — the substrate every other scroll effect sits on.
 *
 * Mounted once in the root layout. Skipped entirely when the visitor has
 * asked for reduced motion, so native scrolling takes over.
 */
export default function SmoothScroll() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.1,
      // Matches --ease-out-expo: fast start, long settle.
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // In-page anchors go through Lenis so the easing is consistent.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement)?.closest?.('a[href^="#"]')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target as HTMLElement, { offset: -80 })
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [reduced])

  return null
}
