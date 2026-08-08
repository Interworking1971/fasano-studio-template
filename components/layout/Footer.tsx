'use client'

import { useState } from 'react'
import { site } from '@/content/site'
import Field from '@/components/ui/Field'
import InlineButton from '@/components/ui/InlineButton'
import { Reveal } from '@/components/motion/Reveal'
import styles from './Footer.module.css'

export default function Footer() {
  const { emailCapture, columns, social, legal, company, credits } = site.footer

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  /**
   * The template ships without a backend on purpose — a static export has
   * nowhere to POST. Wire `onSubmit` to Mailchimp / Resend / a form service
   * and delete the simulated branch. Validation and states already work.
   */
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('sending')
    await new Promise((resolve) => setTimeout(resolve, 700))
    setStatus('done')
    setEmail('')
  }

  return (
    <footer className={styles.footer} data-theme="dark">
      <div className="container">
        {/* ---------- Email capture ---------- */}
        <Reveal className={styles.capture}>
          <div className={styles.captureText}>
            <h2 className={styles.captureTitle}>{emailCapture.title}</h2>
            <p className={styles.captureBody}>{emailCapture.body}</p>
          </div>

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <Field
              label={emailCapture.placeholder}
              name="email"
              type="email"
              placeholder={emailCapture.placeholder}
              value={email}
              onChange={(value) => {
                setEmail(value)
                if (status === 'error') setStatus('idle')
              }}
              error={status === 'error' ? emailCapture.errorMessage : null}
              className={styles.field}
            />
            <button type="submit" className={styles.submit} aria-label={emailCapture.submitLabel}>
              <span>{status === 'sending' ? '…' : emailCapture.submitLabel}</span>
              <svg viewBox="0 0 16 12" aria-hidden="true">
                <path d="M0 6h14M9 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
            <p className={styles.status} role="status">
              {status === 'done' ? emailCapture.successMessage : ''}
            </p>
          </form>
        </Reveal>

        {/* ---------- Columns ---------- */}
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.brandMark}>{site.brand.name}</span>
            <address className={styles.address}>
              {site.contact.address.street}
              <br />
              {site.contact.address.city}
              <br />
              {site.contact.address.region}
            </address>
            <div className={styles.contactLinks}>
              <InlineButton href={site.contact.phoneHref}>{site.contact.phone}</InlineButton>
              <InlineButton href={site.contact.emailHref}>{site.contact.email}</InlineButton>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className={styles.col} aria-label={column.title}>
              <h3 className={styles.colTitle}>{column.title}</h3>
              <ul className={styles.colList}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <InlineButton href={link.href}>{link.label}</InlineButton>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Orari</h3>
            <ul className={styles.hours}>
              {site.contact.hours.map((row) => (
                <li key={row.days}>
                  <span>{row.days}</span>
                  <span className={styles.hoursTime}>{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Social</h3>
            <ul className={styles.colList}>
              {social.map((item) => (
                <li key={item.label}>
                  <InlineButton href={item.href} arrow>
                    {item.label}
                  </InlineButton>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Credits ---------- */}
        <div className={styles.credits}>
          <p className={styles.company}>{company}</p>
          <ul className={styles.legal}>
            {legal.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <p className={styles.credit}>
            <span className={styles.creditLabel}>{credits.label}</span>
            <a href={credits.href}>{credits.text}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
