import { site } from '@/content/site'
import Button from '@/components/ui/Button'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Memberships.module.css'

/** Pricing. Three plans, the middle one carried by weight rather than colour. */
export default function Memberships() {
  const { memberships } = site

  return (
    <section className={`${styles.memberships} section`} id="abbonamenti">
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {memberships.eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {memberships.title}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {memberships.plans.map((plan, i) => (
            <Reveal
              key={plan.name}
              index={i}
              className={styles.plan}
              // data attribute drives the featured treatment in CSS
            >
              <article data-featured={plan.featured} className={styles.card}>
                <header className={styles.cardHead}>
                  <h3 className={styles.name}>{plan.name}</h3>
                  <p className={styles.priceRow}>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                  </p>
                </header>

                <p className={styles.body}>{plan.body}</p>

                <ul className={styles.includes}>
                  {plan.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>

                <Button
                  href={site.nav.cta.href}
                  variant={plan.featured ? 'solid' : 'outline'}
                  className={styles.cta}
                >
                  {site.nav.cta.label}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <p className={styles.note}>{memberships.note}</p>
      </div>
    </section>
  )
}
