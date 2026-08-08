'use client'

import type { ReactNode } from 'react'
import { useScrollProgress } from '@/lib/hooks'
import styles from './Parallax.module.css'

/**
 * Scroll-linked parallax.
 *
 * The hook writes --scroll-progress (0→1) onto the wrapper; the CSS turns
 * that into a translate. No inline transforms, no layout thrash — the
 * browser only ever animates a compositor property.
 *
 * `speed` is the fraction of the container height the child travels.
 * 0.12 is a whisper; 0.4 is theatrical.
 */
export default function Parallax({
  children,
  speed = 0.15,
  direction = 'up',
  className,
}: {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down'
  className?: string
}) {
  const ref = useScrollProgress<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={[styles.parallax, className].filter(Boolean).join(' ')}
      style={
        {
          '--speed': speed,
          '--parallax-direction': direction === 'up' ? -1 : 1,
        } as React.CSSProperties
      }
    >
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
