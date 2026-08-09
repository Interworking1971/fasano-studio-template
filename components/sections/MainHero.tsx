'use client'

import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import ScrollCue from '@/components/ui/ScrollCue'
import { useScrollProgress } from '@/lib/hooks'
import styles from './MainHero.module.css'

/**
 * Full-bleed opening.
 *
 * Rebuilt against the reference's measured layout, which is the opposite of
 * the obvious approach:
 *
 *  · The media fills 100svh and is clipped by a **centre-anchored rectangle
 *    that shrinks as you scroll** — the section's signature move. Progress
 *    is written to a custom property and the clip-path is computed in CSS,
 *    so the main thread never touches a transform.
 *  · The content column is `position: fixed` and centred on both axes, so
 *    it holds still while the mask closes around it.
 *  · The title is **small** — `--font-display-5`, not a display headline.
 *    Restraint here is what makes the mask read as the subject.
 *  · The wordmark is fixed to the top-left at a measured 230×70, stepping
 *    to 250×75 at 930 and 290×90 at 1728.
 *
 * Each title line sits in an overflow-hidden wrapper and releases from
 * translateY(100%) on mount.
 */
export default function MainHero() {
  const { hero } = home

  // 0 → 1 across the hero's own height; drives the clip-path in CSS.
  const ref = useScrollProgress<HTMLElement>({
    property: '--mask-progress',
    anchor: 'top',
  })

  const lines = [hero.line1, hero.line2Em, hero.line3].filter(Boolean)

  return (
    <section ref={ref} className={styles.hero} id="top">
      <div className={styles.mask}>
        <div className={styles.media}>
          <Media slot={hero.background} priority tone="dark" className={styles.mediaInner} />
        </div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          {lines.map((line, i) => (
            <span key={line} className={styles.line}>
              <span
                className={styles.lineInner}
                style={{ '--i': i } as React.CSSProperties}
                data-em={i === 1 ? 'true' : undefined}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className={styles.standfirst}>{hero.standfirst}</p>
      </div>

      <div className={styles.scrollCue}>
        <ScrollCue label={hero.scrollCue} />
      </div>
    </section>
  )
}
