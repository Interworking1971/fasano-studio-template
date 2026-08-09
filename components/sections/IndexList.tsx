import { Reveal } from '@/components/motion/Reveal'
import styles from './IndexList.module.css'

export type IndexRow = {
  name: string
  meta: string
  body: string
}

/**
 * A ruled index — the system's alternative to a card grid.
 *
 * On hover an accent bar wipes down the left edge and the row shifts with
 * it, so the whole line behaves as one target rather than a box with a
 * clickable title. Used for collections, disciplines, services, anything
 * that is a list of named things.
 *
 * Props-driven on purpose: this is a system component, so it never reaches
 * into the content layer itself.
 */
export default function IndexList({
  eyebrow,
  title,
  items,
  id,
}: {
  eyebrow: string
  title: string
  items: readonly IndexRow[]
  id?: string
}) {
  return (
    <section className={`${styles.disciplines} section`} id={id}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {title}
          </Reveal>
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => (
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
