'use client'

import { useEffect, useState } from 'react'
import { site } from '@/content/site'
import { usePrefersReducedMotion } from '@/lib/hooks'
import styles from './Loader.module.css'

const SESSION_KEY = 'forma:intro-seen'
const TOTAL_MS = 2800

/**
 * The intro.
 *
 * A solid plate covers the page. A viewport-shaped window is then punched
 * through it and grown in two beats — first to a small keyhole, then out to
 * full bleed — using an animated two-layer CSS mask with `exclude`
 * compositing. The page underneath is real the whole time; nothing is
 * duplicated or faked.
 *
 * It runs once per session, and not at all under reduced-motion.
 */
export default function Loader() {
  const reduced = usePrefersReducedMotion()
  const [state, setState] = useState<'idle' | 'running' | 'done'>('idle')

  useEffect(() => {
    if (reduced) {
      setState('done')
      return
    }

    let seen = false
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === '1'
    } catch {
      // Private mode — just play it.
    }

    if (seen) {
      setState('done')
      return
    }

    setState('running')
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      setState('done')
      document.body.style.overflow = ''
      try {
        sessionStorage.setItem(SESSION_KEY, '1')
      } catch {
        /* ignore */
      }
    }, TOTAL_MS)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [reduced])

  if (state === 'done') return null

  return (
    <div className={styles.loader} data-state={state} aria-hidden="true">
      <div className={styles.plate} />
      <div className={styles.center}>
        <span className={styles.kicker}>{site.loader.kicker}</span>
        <span className={styles.word}>{site.loader.word}</span>
      </div>
    </div>
  )
}
