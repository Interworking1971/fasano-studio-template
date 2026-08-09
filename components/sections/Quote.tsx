import { home } from '@/content/home'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Quote.module.css'

/** Pull quote. One idea, set large, with nothing else on the screen. */
export default function Quote() {
  const { quote } = home

  return (
    <section className={`${styles.quote} section`}>
      <div className="container">
        <figure className={styles.figure}>
          <Reveal as="blockquote" className={styles.text}>
            <span className={styles.mark} aria-hidden="true">
              “
            </span>
            {quote.text}
          </Reveal>

          <Reveal as="figcaption" index={2} className={styles.caption}>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.name}>{quote.attribution}</span>
            <span className={styles.role}>{quote.role}</span>
          </Reveal>
        </figure>
      </div>
    </section>
  )
}
