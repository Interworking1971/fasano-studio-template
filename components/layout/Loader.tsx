'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/content/site'
import { usePrefersReducedMotion } from '@/lib/hooks'
import styles from './Loader.module.css'

const SESSION_KEY = 'intro-seen'

/**
 * The intro.
 *
 * Four beats, all measured from the reference build:
 *
 *  1. A solid beige plate covers the page. Two display lines sit above the
 *     centre and two below, at 14% opacity — barely-there watermarks, not
 *     a headline.
 *  2. From 0.5s a viewport-shaped keyhole is punched through the plate and
 *     grown over 1.4s on `in-out-quint`. At the same time the four lines
 *     slide apart to sit tight above and below the opening, and the content
 *     layer's clip-path opens a matching notch.
 *  3. A hairline progress bar tracks real load progress along the bottom,
 *     with a percentage that travels the full width as it fills.
 *  4. On completion the keyhole expands to full bleed over 0.75s
 *     (`in-out-quart`) while the lines slide off vertically.
 *
 * The page underneath is real throughout — nothing is duplicated or faked.
 * Runs once per session, and not at all under reduced motion.
 */
export default function Loader() {
  const reduced = usePrefersReducedMotion()
  const [state, setState] = useState<'idle' | 'running' | 'loaded' | 'done'>('idle')
  const [progress, setProgress] = useState(0)
  const raf = useRef(0)

  useEffect(() => {
    if (reduced) return setState('done')

    let seen = false
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      /* private mode — just play it */
    }
    if (seen) return setState('done')

    setState('running')
    document.body.style.overflow = 'hidden'

    /*
      Progress ramps toward 90% on its own so the bar always moves, then
      snaps to 100% when the window actually finishes loading. A bar that
      only reflects real events sits still on a warm cache.
     */
    const start = performance.now()
    let settled = false

    const tick = (now: number) => {
      const elapsed = now - start
      const eased = 1 - Math.pow(2, -elapsed / 420)
      setProgress((p) => (settled ? 1 : Math.max(p, Math.min(0.9, eased))))
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const finish = () => {
      settled = true
      setProgress(1)
    }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })

    // Never hold the page hostage to a slow asset.
    const failsafe = window.setTimeout(finish, 4000)

    return () => {
      cancelAnimationFrame(raf.current)
      window.clearTimeout(failsafe)
      window.removeEventListener('load', finish)
      document.body.style.overflow = ''
    }
  }, [reduced])

  /*
    Once full, play the exit then unmount.

    The timers deliberately live in a ref and are only cleared on unmount.
    Cleaning them up per-render would cancel the exit the instant `state`
    flips to 'loaded' — the effect would re-run, its cleanup would kill the
    pending 'done' timer, and the overlay would sit there forever with
    body scroll still locked.
  */
  const exiting = useRef(false)
  const timers = useRef<number[]>([])

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  useEffect(() => {
    if (state !== 'running' || progress < 1 || exiting.current) return
    exiting.current = true

    timers.current.push(window.setTimeout(() => setState('loaded'), 180))
    timers.current.push(
      window.setTimeout(() => {
        setState('done')
        document.body.style.overflow = ''
        try {
          sessionStorage.setItem(SESSION_KEY, '1')
        } catch {
          /* ignore */
        }
      }, 1100)
    )
  }, [state, progress])

  if (state === 'done' || state === 'idle') return null

  const { top, bottom } = site.loader

  return (
    <div
      className={styles.loader}
      data-loaded={state === 'loaded'}
      style={{ '--progress': progress } as React.CSSProperties}
      aria-hidden="true"
    >
      <div className={styles.container}>
        <div className={styles.top}>
          {top.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className={styles.bottom}>
          {bottom.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div className={styles.progress} />
      <span className={styles.indicator}>{Math.round(progress * 100)}</span>
    </div>
  )
}
