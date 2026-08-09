import { Reveal } from '@/components/motion/Reveal'
import styles from './LegalProse.module.css'

export type ProseSection = {
  heading: string
  body: string
}

/**
 * Long-form legal text.
 *
 * A single measured column with a sticky contents rail on desktop. The one
 * place in the system where readability beats composition outright — no
 * parallax, no masks, generous leading and a hard 68ch measure.
 */
export default function LegalProse({
  updated,
  sections,
}: {
  updated: string
  sections: readonly ProseSection[]
}) {
  return (
    <section className={`${styles.legal} section`}>
      <div className="container">
        <div className={styles.grid}>
          <nav className={styles.toc} aria-label="Contents">
            <p className={styles.tocTitle}>Contents</p>
            <ol className={styles.tocList}>
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s${i + 1}`}>{s.heading}</a>
                </li>
              ))}
            </ol>
            <p className={styles.updated}>{updated}</p>
          </nav>

          <div className={styles.prose}>
            {sections.map((s, i) => (
              <Reveal key={s.heading} as="section" index={i % 3} className={styles.block}>
                <h2 id={`s${i + 1}`} className={styles.heading}>
                  {s.heading}
                </h2>
                <p className={styles.body}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
