import Media from '@/components/ui/Media'
import Parallax from '@/components/motion/Parallax'
import { Reveal } from '@/components/motion/Reveal'
import type { MediaSlot } from '@/content/site'
import styles from './AboutBody.module.css'

export type Stat = { figure: string; label: string }

/**
 * Editorial story block.
 *
 * A measured prose column with a figures rail beside it, then a three-plate
 * spread. The figures are set in the display serif at a size that competes
 * with the headings — they are the argument, not decoration.
 */
export default function AboutBody({
  body,
  stats,
  gallery,
}: {
  body: readonly string[]
  stats: readonly Stat[]
  gallery: readonly MediaSlot[]
}) {
  return (
    <section className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.prose}>
            {body.map((paragraph, i) => (
              <Reveal as="p" key={i} index={i} className={styles.paragraph}>
                {paragraph}
              </Reveal>
            ))}
          </div>

          <Reveal as="dl" index={1} className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.figure}>{stat.figure}</dt>
                <dd className={styles.label}>{stat.label}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className={styles.plates}>
          {gallery.map((slot, i) => (
            <Reveal key={slot.label ?? i} index={i} className={styles.plate}>
              <Parallax speed={i === 1 ? 0.18 : 0.1}>
                <Media slot={slot} />
              </Parallax>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
