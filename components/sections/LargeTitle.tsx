'use client'

import { home } from '@/content/home'
import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { Reveal, RevealLines } from '@/components/motion/Reveal'
import styles from './LargeTitle.module.css'

/**
 * The giant statement.
 *
 * Rebuilt from the live site, where it is the opposite of the obvious
 * treatment:
 *
 *  · It sits on the **cream** background, not a dark band. No scrim, no
 *    white-on-photo.
 *  · A serif eyebrow mixes italic connectives with roman caps —
 *    *the* ESSENCE *of* VERO.
 *  · The statement runs to ~110px across two centred lines, mixing
 *    **italic lowercase joining words** with **roman caps nouns**:
 *    *where* INNOVATION / *meets* CRAFTSMANSHIP.
 *  · A centred media plate sits **in front of** the type and occludes the
 *    second line. That overlap is the whole idea — the plate is not a
 *    background, it interrupts the headline.
 *
 * `emphasis` on a line segment marks the italic run.
 */
export default function LargeTitle() {
  const { largeTitle } = home

  return (
    <section className={styles.largeTitle}>
      <div className={`container ${styles.inner}`}>
        {largeTitle.eyebrow && (
          <Reveal as="p" className={`eyebrow ${styles.eyebrow}`}>
            <i>{largeTitle.eyebrow.lead}</i> {largeTitle.eyebrow.roman}{' '}
            <i>{largeTitle.eyebrow.tail}</i> {largeTitle.eyebrow.subject}
          </Reveal>
        )}

        <h2 className={styles.title}>
          <span className={styles.line}>
            <i className={styles.em}>{largeTitle.line1Em}</i> {largeTitle.line1}
          </span>
          <span className={styles.line}>
            <i className={styles.em}>{largeTitle.line2Em}</i> {largeTitle.line2}
          </span>
        </h2>

        {/* Sits above the type on purpose — it interrupts the second line. */}
        <Reveal className={styles.plate}>
          <Parallax speed={0.1}>
            <Media slot={largeTitle.media} />
          </Parallax>
        </Reveal>
      </div>
    </section>
  )
}
