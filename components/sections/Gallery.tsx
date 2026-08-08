import { site } from '@/content/site'
import Media from '@/components/ui/Media'
import Button from '@/components/ui/Button'
import Parallax from '@/components/motion/Parallax'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Gallery.module.css'

/**
 * Studio gallery.
 *
 * A deliberately uneven grid — spans and offsets vary per index — so eight
 * images read as a spread rather than a contact sheet. Each plate rises on
 * its own stagger and carries a light parallax.
 */
export default function Gallery() {
  const { gallery } = site

  return (
    <section className={`${styles.gallery} section`}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {gallery.eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {gallery.title}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {gallery.items.map((item, i) => (
            <Reveal
              key={`${item.label}-${i}`}
              index={i % 3}
              className={styles.cell}
              threshold={0.05}
            >
              <Parallax speed={i % 2 === 0 ? 0.1 : 0.18}>
                <Media slot={item} />
              </Parallax>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.action}>
          <Button href={gallery.cta.href} variant="outline" size="lg">
            {gallery.cta.label}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
