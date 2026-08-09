'use client'

import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import { useScrollProgress } from '@/lib/hooks'
import styles from './Stepper.module.css'

/**
 * Full-size scroller stepper.
 *
 * The largest section on the page — roughly four viewports of scroll that
 * are consumed while the visuals stay pinned. Rebuilt from the reference's
 * measured CSS, where three things happen at once:
 *
 *  1. **The stack is sticky.** Every item is `position: sticky; top: 0` at
 *     `height: 100lvh`, so they pile up in place rather than scrolling past.
 *
 *  2. **Each item wipes in from the right.** A clip-path polygon whose left
 *     edge travels from 100% to 0 as that item's progress runs 0→1. The
 *     first item is unclipped — it is already there.
 *
 *  3. **The second item un-crops.** Its container's `aspect-ratio` is
 *     animated from 1 (square) to the viewport's own ratio, while the media
 *     inside scales from 0.5 to 1 about a point 25% below centre and its own
 *     clip opens from a 30% inset. The result reads as a small plate growing
 *     into full bleed, not as a zoom.
 *
 * Section progress is split into equal bands, one per item, so each gets its
 * own 0→1 without a scroll listener per element.
 */
export default function Stepper() {
  const { stepper } = home
  const items = stepper.steps

  const ref = useScrollProgress<HTMLElement>({
    property: '--scroll-progress',
    anchor: 'top',
  })

  return (
    <section
      ref={ref}
      className={styles.stepper}
      id="process"
      style={{ '--count': items.length } as React.CSSProperties}
    >
      {/* Pinned visual stack. */}
      <div className={styles.masks}>
        {items.map((step, i) => (
          <div
            key={step.index}
            className={styles.item}
            data-first={i === 0 ? 'true' : undefined}
            data-morph={i === 1 ? 'true' : undefined}
            style={{ '--i': i } as React.CSSProperties}
          >
            <div className={styles.container}>
              <Media slot={step.media} priority={i === 0} tone="dark" className={styles.media} />
            </div>
          </div>
        ))}

        {/* Sits over the stack, absolutely placed at a measured 165px. */}
        <div className={styles.largeTitleContainer}>
          <div className={styles.largeTitle}>
            <p className={styles.text}>{stepper.caption}</p>
          </div>
        </div>
      </div>

      {/*
        Scroll length. One viewport per item — this is what the pinned
        stack consumes. Nothing is rendered here.
      */}
      <div className={styles.track} aria-hidden="true">
        {items.map((step) => (
          <div key={step.index} className={styles.beacon} />
        ))}
      </div>
    </section>
  )
}
