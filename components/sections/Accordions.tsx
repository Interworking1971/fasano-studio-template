'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Accordions.module.css'

export type AccordionRow = {
  /** Left-hand label inside the panel — a time, a code, a short key. */
  key?: string
  label: string
  /** Right-hand meta inside the panel. */
  meta?: string
}

export type AccordionGroup = {
  title: string
  /** Shown next to the title when collapsed. Falls back to the row count. */
  summary?: string
  rows: readonly AccordionRow[]
}

/**
 * Collapsible groups.
 *
 * Radix so keyboard and screen-reader behaviour is correct out of the box;
 * the open/close height animation runs off Radix's own measured
 * `--radix-accordion-content-height` rather than a JS measurement.
 *
 * Used for FAQs, schedules, specifications — anything that is a list of
 * groups each holding a list of rows. The first group opens by default so
 * the section never reads as an empty stack.
 */
export default function Accordions({
  eyebrow,
  title,
  groups,
  note,
  id,
}: {
  eyebrow: string
  title: string
  groups: readonly AccordionGroup[]
  note?: string
  id?: string
}) {
  return (
    <section className={`${styles.timetable} section`} id={id}>
      <div className="container">
        <div className={styles.head}>
          <Reveal as="p" className="eyebrow">
            {eyebrow}
          </Reveal>
          <Reveal as="h2" index={1} className={styles.title}>
            {title}
          </Reveal>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue={groups[0]?.title}
          className={styles.root}
        >
          {groups.map((group) => (
            <Accordion.Item key={group.title} value={group.title} className={styles.item}>
              <Accordion.Header className={styles.header}>
                <Accordion.Trigger className={styles.trigger}>
                  <span className={styles.day}>{group.title}</span>
                  <span className={styles.count}>
                    {group.summary ?? `${group.rows.length} items`}
                  </span>
                  <span className={styles.icon} aria-hidden="true">
                    <i />
                    <i />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className={styles.content}>
                <ul className={styles.slots}>
                  {group.rows.map((row, i) => (
                    <li key={`${group.title}-${i}`} className={styles.slot}>
                      {row.key && <span className={styles.time}>{row.key}</span>}
                      <span className={styles.name}>{row.label}</span>
                      {row.meta && <span className={styles.room}>{row.meta}</span>}
                    </li>
                  ))}
                </ul>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>

        {note && <p className={styles.note}>{note}</p>}
      </div>
    </section>
  )
}
