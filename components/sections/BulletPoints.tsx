import { home } from '@/content/home'
import { Reveal } from '@/components/motion/Reveal'
import styles from './BulletPoints.module.css'

/** What every membership includes — a numbered rule-separated list. */
export default function BulletPoints() {
  const { bulletPoints } = home

  return (
    <section className={`${styles.bullets} section`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {bulletPoints.eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {bulletPoints.title}
          </Reveal>
        </div>

        <ul className={styles.list}>
          {bulletPoints.items.map((item, i) => (
            <Reveal as="li" key={item.title} index={i % 3} className={styles.item}>
              <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
