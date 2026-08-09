'use client'

import { useState } from 'react'
import { site } from '@/content/site'
import { useScrollDirection, useScrollLock } from '@/lib/hooks'
import InlineButton from '@/components/ui/InlineButton'
import Button from '@/components/ui/Button'
import styles from './Header.module.css'

/**
 * Sticky header.
 *
 * Three behaviours, all CSS-driven off data attributes:
 *   · entrance — each row is offset down by (i+1) × 60px and released on load
 *   · hide on scroll down / reveal on scroll up
 *   · fullscreen menu with staggered link reveal and a scroll lock
 */
export default function Header() {
  const { direction, scrolled } = useScrollDirection()
  const [menuOpen, setMenuOpen] = useState(false)

  useScrollLock(menuOpen)

  const hidden = direction === 'down' && !menuOpen

  return (
    <>
      <header
        className={styles.header}
        data-hidden={hidden}
        data-scrolled={scrolled}
        data-menu-open={menuOpen}
      >
        <div className={styles.bar}>
          {/* Logo */}
          <a href="#top" className={styles.logo} style={{ '--i': 0 } as React.CSSProperties}>
            <span className={styles.logoMark}>{site.brand.name}</span>
            {site.brand.locality && <span className={styles.logoPlace}>{site.brand.locality}</span>}
          </a>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Principale">
            {site.nav.primary.map((item, i) => (
              <span
                key={item.href}
                className={styles.navItem}
                style={{ '--i': i + 1 } as React.CSSProperties}
              >
                <InlineButton href={item.href}>{item.label}</InlineButton>
              </span>
            ))}
          </nav>

          {/* Contact + CTA */}
          <div className={styles.aside} style={{ '--i': 6 } as React.CSSProperties}>
            <a href={site.contact.phoneHref} className={styles.phone}>
              {site.contact.phone}
            </a>
            <Button href={site.nav.cta.href} variant="outline" className={styles.headerCta}>
              {site.nav.cta.label}
            </Button>
            <button
              type="button"
              className={styles.menuToggle}
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
            >
              {menuOpen ? 'Chiudi' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen menu */}
      <div
        id="site-menu"
        className={styles.menu}
        data-open={menuOpen}
        data-theme="dark"
        inert={!menuOpen ? true : undefined}
      >
        <nav className={styles.menuNav} aria-label="Menu completo">
          {site.nav.primary.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.menuLink}
              style={{ '--i': i } as React.CSSProperties}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.menuIndex}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.menuLabel}>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className={styles.menuFoot}>
          <div className={styles.menuContact}>
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>
            <a href={site.contact.emailHref}>{site.contact.email}</a>
          </div>
          <address className={styles.menuAddress}>
            {site.contact.address.street}
            <br />
            {site.contact.address.city}
          </address>
        </div>
      </div>
    </>
  )
}
