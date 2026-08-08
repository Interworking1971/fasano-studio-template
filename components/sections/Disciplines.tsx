import { site } from '@/content/site'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Disciplines.module.css'

/**
 * Discipline index.
 *
 * A ruled list rather than a card grid — on hover the row's accent bar
 * wipes in from the left and the name shifts with it, so the whole line
 * behaves as one target.
 */
export default function Disciplines() {
  const { disciplines } = site

  return (
    <section className={`${styles.disciplines} section`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {disciplines.eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {disciplines.title}
          </Reveal>
        </div>

        <ul className={styles.list}>
          {disciplines.items.map((item, i) => (
            <Reveal as="li" key={item.name} index={i % 3} className={styles.row}>
              <span className={styles.bar} aria-hidden="true" />
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.meta}>{item.meta}</p>
              <p className={styles.body}>{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
