import { site } from '@/content/site'
import Media from '@/components/ui/Media'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Stepper.module.css'

/**
 * Three-beat narrative.
 *
 * On desktop the images are sticky and the copy scrolls past them, so the
 * three steps read as one continuous move rather than three cards. On
 * mobile it collapses to a straightforward stack.
 */
export default function Stepper() {
  const { stepper } = site

  return (
    <section className={`${styles.stepper} section`} id="metodo">
      <div className="container">
        <Reveal as="p" className={styles.caption}>
          {stepper.caption}
        </Reveal>

        <ol className={styles.steps}>
          {stepper.steps.map((step, i) => (
            <li key={step.index} className={styles.step}>
              <Reveal index={i} className={styles.stepMedia}>
                <Media slot={step.media} />
              </Reveal>
              <Reveal index={i} className={styles.stepText}>
                <span className={styles.stepIndex}>{step.index}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
