'use client'

import { useState } from 'react'
import Media from '@/components/ui/Media'
import type { MediaSlot } from '@/content/site'
import styles from './GalleryFilter.module.css'

export type ArchiveItem = {
  filter: string
  caption: string
  year: string
  slot: MediaSlot
}

/**
 * Filterable archive grid.
 *
 * Filtering keeps every item mounted and toggles a data attribute instead
 * of unmounting — so the browser can cross-fade the outgoing set while the
 * incoming one rises, and images that are already decoded never reload.
 * Hidden items are removed from layout *and* from the accessibility tree.
 *
 * The stagger is index-driven, so a filter change re-cascades rather than
 * snapping.
 */
export default function GalleryFilter({
  filters,
  items,
}: {
  filters: readonly string[]
  items: readonly ArchiveItem[]
}) {
  const [active, setActive] = useState(filters[0] ?? 'All')

  const matches = (item: ArchiveItem) => active === filters[0] || item.filter === active
  const visibleCount = items.filter(matches).length

  return (
    <section className={`${styles.archive} section`}>
      <div className="container">
        <div className={styles.bar} role="group" aria-label="Filter the archive">
          <div className={styles.filters}>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={styles.filter}
                data-active={filter === active}
                aria-pressed={filter === active}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <p className={styles.count} aria-live="polite">
            {visibleCount} {visibleCount === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <ul className={styles.grid}>
          {items.map((item, i) => {
            const shown = matches(item)
            return (
              <li
                key={item.caption}
                className={styles.cell}
                data-shown={shown}
                aria-hidden={!shown}
                style={{ '--index': i % 6 } as React.CSSProperties}
              >
                <Media slot={item.slot} />
                <div className={styles.caption}>
                  <span className={styles.name}>{item.caption}</span>
                  <span className={styles.year}>{item.year}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
