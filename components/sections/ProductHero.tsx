'use client'

import { useState } from 'react'
import Media from '@/components/ui/Media'
import Button from '@/components/ui/Button'
import Parallax from '@/components/motion/Parallax'
import { Reveal } from '@/components/motion/Reveal'
import type { MediaSlot } from '@/content/site'
import styles from './ProductHero.module.css'

export type Choice = { value: string; label: string; note?: string }
export type OptionSet = { name: string; choices: readonly Choice[] }

/**
 * Product / commission detail.
 *
 * The media column scrolls a stack of plates while the buy column pins
 * beside it — the standard e-commerce arrangement, but with the plates at
 * full width and a parallax on each, so it reads as an editorial spread
 * rather than a shop.
 *
 * Options are a native radio group under the hood: real inputs, real
 * keyboard behaviour, labels wrapping the control. The styling is entirely
 * `:has()` and `:checked` — no state is mirrored into JS except the
 * selection we actually need to report.
 */
export default function ProductHero({
  eyebrow,
  name,
  price,
  lede,
  medias,
  options,
  cta,
}: {
  eyebrow: string
  name: string
  price: string
  lede: string
  medias: readonly MediaSlot[]
  options: readonly OptionSet[]
  cta: { label: string; href: string }
}) {
  const [selection, setSelection] = useState<Record<string, string>>(() =>
    Object.fromEntries(options.map((o) => [o.name, o.choices[0]?.value ?? '']))
  )

  return (
    <section className={styles.product}>
      <div className="container">
        <div className={styles.grid}>
          {/* ---------- Media column ---------- */}
          <div className={styles.medias}>
            {medias.map((slot, i) => (
              <Reveal key={slot.label ?? i} index={i % 2} className={styles.plate}>
                <Parallax speed={i % 2 === 0 ? 0.1 : 0.16}>
                  <Media slot={slot} priority={i === 0} />
                </Parallax>
              </Reveal>
            ))}
          </div>

          {/* ---------- Buy column ---------- */}
          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <p className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</p>
              <h1 className={styles.name}>{name}</h1>
              <p className={styles.price}>{price}</p>
              <p className={styles.lede}>{lede}</p>

              {options.map((option) => (
                <fieldset key={option.name} className={styles.option}>
                  <legend className={styles.optionName}>{option.name}</legend>
                  <div className={styles.choices}>
                    {option.choices.map((choice) => (
                      <label key={choice.value} className={styles.choice}>
                        <input
                          type="radio"
                          name={option.name}
                          value={choice.value}
                          checked={selection[option.name] === choice.value}
                          onChange={() =>
                            setSelection((s) => ({ ...s, [option.name]: choice.value }))
                          }
                        />
                        <span className={styles.choiceBody}>
                          <span className={styles.choiceLabel}>{choice.label}</span>
                          {choice.note && <span className={styles.choiceNote}>{choice.note}</span>}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              ))}

              <Button href={cta.href} className={styles.cta}>
                {cta.label}
              </Button>

              <p className={styles.reassure}>
                No payment taken online — every commission starts with a conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
