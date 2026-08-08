'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { site } from '@/content/site'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Timetable.module.css'

/**
 * Weekly schedule.
 *
 * Radix accordion so keyboard and screen-reader behaviour is correct out of
 * the box; the open/close height animation runs off Radix's
 * --radix-accordion-content-height variable rather than a JS measurement.
 *
 * Defaults to Monday open so the section never reads as an empty stack.
 */
export default function Timetable() {
  const { timetable } = site

  return (
    <section className={`${styles.timetable} section`} id="orari">
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {timetable.eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {timetable.title}
          </Reveal>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue={timetable.days[0]?.day}
          className={styles.root}
        >
          {timetable.days.map((day) => (
            <Accordion.Item key={day.day} value={day.day} className={styles.item}>
              <Accordion.Header className={styles.header}>
                <Accordion.Trigger className={styles.trigger}>
                  <span className={styles.day}>{day.day}</span>
                  <span className={styles.count}>
                    {day.slots.length} {day.slots.length === 1 ? 'turno' : 'turni'}
                  </span>
                  <span className={styles.icon} aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className={styles.content}>
                <ul className={styles.slots}>
                  {day.slots.map((slot) => (
                    <li key={`${day.day}-${slot.time}-${slot.name}`} className={styles.slot}>
                      <span className={styles.time}>{slot.time}</span>
                      <span className={styles.name}>{slot.name}</span>
                      <span className={styles.room}>{slot.room}</span>
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        <p className={styles.note}>{timetable.note}</p>
      </div>
    </section>
  )
}
