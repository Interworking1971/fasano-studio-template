'use client'

import { useState } from 'react'
import { site } from '@/content/site'
import { useScrollLock } from '@/lib/hooks'
import Button from '@/components/ui/Button'
import styles from './Header.module.css'

/**
 * Fixed header.
 *
 * Measured from the live site, and structurally not the usual arrangement:
 *
 *  · A **three-column grid** — trigger left, wordmark centred via
 *    `margin: auto` at exactly 88×28, CTA right. Not logo-left/nav-centre.
 *  · `position: fixed`, `padding-top: 30px`, starting at `opacity: 0` and
 *    fading in over 1s on `--ease-custom-1` once the intro has cleared.
 *  · The trigger's hover is a **two-axis text roll**: the label lifts by
 *    100% over 0.8s while a duplicate arrives from the left over 1s. The
 *    different durations are what stops it feeling mechanical.
 *  · The menu overlay scales from `transform-origin: top`, carries
 *    `--font-header`-scale serif links, and drifts two large circles of
 *    accent at 4% opacity behind them on a 16s loop.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollLock(menuOpen)

  const { nav, brand, contact, footer } = site

  return (
    <>
      <header className={styles.header} data-open={menuOpen}>
        <div className={styles.top}>
          {/* ---------- Trigger ---------- */}
          <button
            type="button"
            className={styles.trigger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
          >
            <span className={styles.inner}>
              <span className={styles.menuText}>
                <span className={styles.label}>{menuOpen ? 'Close' : 'Menu'}</span>
                <span className={styles.copy} aria-hidden="true">
                  {menuOpen ? 'Close' : 'Menu'}
                </span>
              </span>
            </span>
          </button>

          {/* ---------- Wordmark, centred ---------- */}
          <a href="/" className={styles.logo} aria-label={brand.fullName}>
            <span className={styles.brandMark}>{brand.name}</span>
          </a>

          {/* ---------- CTA ---------- */}
          <div className={styles.aside}>
            <Button href={nav.cta.href} className={styles.headerCta}>
              <i>Start your</i> {nav.cta.label}
            </Button>
          </div>
        </div>
      </header>

      {/* ---------------- Fullscreen menu ---------------- */}
      <div
        id="site-menu"
        className={styles.content}
        data-open={menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <div className={styles.overflow}>
          <div className={styles.wrapper}>
            <nav className={styles.primary} aria-label="Main">
              {nav.primary.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.link}
                  style={{ '--i': i } as React.CSSProperties}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className={styles.linkMask}>
                    <span className={styles.linkLabel}>{item.label}</span>
                  </span>
                </a>
              ))}
            </nav>

            <div className={styles.secondary}>
              <div className={styles.contact}>
                <a href={contact.phoneHref}>{contact.phone}</a>
                <a href={contact.emailHref}>{contact.email}</a>
              </div>
              <address className={styles.address}>
                {contact.address.street}
                <br />
                {contact.address.city}
              </address>
              <ul className={styles.legals}>
                {footer.legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
