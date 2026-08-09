import { home } from '@/content/home'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Reassurance.module.css'

/** Four short answers to the objections that stop people signing up. */
export default function Reassurance() {
  const { reassurance } = home

  return (
    <section className={styles.reassurance}>
      <div className="container">
        <ul className={styles.list}>
          {reassurance.items.map((item, i) => (
            <Reveal as="li" key={item.title} index={i} className={styles.item}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
