import Media from '@/components/ui/Media'
import { Reveal } from '@/components/motion/Reveal'
import type { MediaSlot } from '@/content/site'
import styles from './PeopleGrid.module.css'

export type Person = {
  name: string
  role: string
  bio: string
  slot: MediaSlot
}

/**
 * Portrait grid.
 *
 * Names sit *under* the portrait rather than over it — overlaid captions
 * are the fastest way to make a considered photograph look like a stock
 * card. The role is the accent colour; the bio only appears from tablet up,
 * so the mobile grid stays a wall of faces.
 */
export default function PeopleGrid({ people }: { people: readonly Person[] }) {
  return (
    <section className={`${styles.people} section`}>
      <div className="container">
        <ul className={styles.grid}>
          {people.map((person, i) => (
            <Reveal as="li" key={person.name} index={i % 3} className={styles.cell}>
              <Media slot={person.slot} className={styles.portrait} />
              <div className={styles.meta}>
                <h2 className={styles.name}>{person.name}</h2>
                <p className={styles.role}>{person.role}</p>
                <p className={styles.bio}>{person.bio}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
