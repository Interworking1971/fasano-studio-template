/* ==========================================================================
   GLOBAL CONTENT — brand, navigation, contact, footer.
   --------------------------------------------------------------------------
   Shared by every page. Page-specific copy lives in its own file alongside
   this one (home.ts, product.ts, gallery.ts, …).

   This is deliberately NEUTRAL placeholder content. The template ships as a
   reusable system, not as any one client's site. For a worked example of it
   re-skinned for a real client, see examples/asd-corpus/.
   ========================================================================== */

export type MediaSlot = {
  /** Path under /public/media, or a full URL. Leave '' for the designed placeholder. */
  src: string
  alt: string
  /** width / height — reserves the box so nothing shifts on load. */
  ratio: string
  /** Printed inside the placeholder while there is no real image. */
  label?: string
}

export const media = (label: string, ratio: string, alt: string): MediaSlot => ({
  src: '',
  alt,
  ratio,
  label,
})

export const site = {
  brand: {
    name: 'STUDIO',
    /** Sits beside the wordmark in the header. Set to '' to hide it. */
    locality: 'London',
    fullName: 'Studio — Editorial Template',
    titleSuffix: 'Studio',
    description:
      'An editorial design system and multi-page site template: token-driven, motion-first, statically exported.',
    locale: 'en-GB',
    lang: 'en',
  },

  contact: {
    phone: '+44 20 7946 0000',
    phoneHref: 'tel:+442079460000',
    email: 'hello@example.com',
    emailHref: 'mailto:hello@example.com',
    address: {
      street: '12 Example Street',
      city: 'London EC1A 1AA',
      region: 'United Kingdom',
    },
    mapsHref: 'https://maps.google.com/',
    hours: [
      { days: 'Monday — Friday', time: '09:00 — 18:00' },
      { days: 'Saturday', time: '10:00 — 16:00' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },

  /* Intro overlay — plays once per session. */
  loader: {
    kicker: 'Editorial template',
    word: 'STUDIO',
  },

  /* Primary navigation — one entry per page type in the template. */
  nav: {
    primary: [
      { label: 'Product', href: '/product/' },
      { label: 'Gallery', href: '/gallery/' },
      { label: 'Process', href: '/process/' },
      { label: 'People', href: '/featured/' },
      { label: 'About', href: '/about/' },
    ],
    cta: { label: 'Enquire', href: '/registry/' },
  },

  footer: {
    emailCapture: {
      title: 'Stay in touch',
      body: 'Occasional notes on new work and openings. One email a month, no more.',
      placeholder: 'Your email',
      submitLabel: 'Subscribe',
      successMessage: 'Thank you — you have been added to the list.',
      errorMessage: 'Please check the address and try again.',
    },
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Product', href: '/product/' },
          { label: 'Gallery', href: '/gallery/' },
          { label: 'Process', href: '/process/' },
          { label: 'People', href: '/featured/' },
        ],
      },
      {
        title: 'Information',
        links: [
          { label: 'About', href: '/about/' },
          { label: 'Registry', href: '/registry/' },
          { label: 'FAQ', href: '/legal/faq/' },
          { label: 'Design system', href: '/system/' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/', handle: '@example' },
      { label: 'Pinterest', href: 'https://pinterest.com/' },
    ],
    legal: [
      { label: 'Privacy', href: '/legal/privacy/' },
      { label: 'Terms', href: '/legal/terms/' },
      { label: 'FAQ', href: '/legal/faq/' },
    ],
    company: 'Example Studio Ltd · Company No. 00000000',
    credits: {
      label: 'Built with',
      text: 'Editorial Template',
      href: '/system/',
    },
  },
} as const

export type Site = typeof site
