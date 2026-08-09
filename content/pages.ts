import { media } from './site'

/* ==========================================================================
   INNER-PAGE CONTENT
   One export per route. Neutral placeholder copy — the template ships as a
   system, not as a client's site.
   ========================================================================== */

/* -------------------------------------------------------------- /product */
export const product = {
  eyebrow: 'Commission',
  name: 'The Vessel',
  price: 'From £2,400',
  lede: 'A single object, made once, to a brief that is yours. Cast, turned and hand-finished over roughly eleven weeks.',
  medias: [
    media('Product · front · 3:4', '3 / 4', 'The piece, front'),
    media('Product · detail · 3:4', '3 / 4', 'Surface detail'),
    media('Product · in situ · 3:4', '3 / 4', 'The piece in a room'),
    media('Product · base · 3:4', '3 / 4', 'The base and maker’s mark'),
  ],
  options: [
    {
      name: 'Material',
      choices: [
        { value: 'stone', label: 'Stoneware', note: 'Matte, unglazed. Marks with use.' },
        { value: 'porcelain', label: 'Porcelain', note: 'Translucent at the rim. +£300' },
        { value: 'bronze', label: 'Cast bronze', note: 'Patinated by hand. +£1,100' },
      ],
    },
    {
      name: 'Scale',
      choices: [
        { value: 'sm', label: 'Small — 180mm' },
        { value: 'md', label: 'Medium — 260mm' },
        { value: 'lg', label: 'Large — 340mm', note: '+£400' },
      ],
    },
  ],
  cta: { label: 'Begin a commission', href: '/registry/' },
  details: [
    {
      title: 'Materials & making',
      summary: 'Four processes',
      rows: [
        { key: '01', label: 'Thrown or slip-cast to the agreed profile', meta: 'Week 1—2' },
        { key: '02', label: 'Dried slowly, then bisque-fired', meta: 'Week 3—5' },
        { key: '03', label: 'Surface worked by hand', meta: 'Week 6—9' },
        { key: '04', label: 'Final firing, documented and catalogued', meta: 'Week 10—11' },
      ],
    },
    {
      title: 'Dimensions',
      summary: 'Three scales',
      rows: [
        { key: 'S', label: 'Height 180mm · Ø 140mm', meta: '1.1 kg' },
        { key: 'M', label: 'Height 260mm · Ø 190mm', meta: '2.4 kg' },
        { key: 'L', label: 'Height 340mm · Ø 240mm', meta: '4.0 kg' },
      ],
    },
    {
      title: 'Delivery & care',
      summary: 'Read before ordering',
      rows: [
        { label: 'Delivered by hand within the UK, insured door to door.' },
        { label: 'Wipe with a damp cloth. No detergents, never a dishwasher.' },
        { label: 'Repairs and restoration offered for the life of the piece.' },
      ],
    },
  ],
  related: {
    eyebrow: 'Also in the collection',
    title: 'Three more',
    items: [
      media('Related 01 · 4:5', '4 / 5', 'Related piece one'),
      media('Related 02 · 4:5', '4 / 5', 'Related piece two'),
      media('Related 03 · 4:5', '4 / 5', 'Related piece three'),
    ],
  },
} as const

/* -------------------------------------------------------------- /gallery */
export const gallery = {
  eyebrow: 'Archive',
  title: 'Everything made,',
  titleEm: 'in order',
  lede: 'A complete record of the studio’s output. Filter by material, or scroll the whole thing.',
  filters: ['All', 'Stoneware', 'Porcelain', 'Bronze'] as const,
  items: [
    { filter: 'Stoneware', caption: 'Vessel 001', year: '2024', slot: media('Archive 01 · 3:4', '3 / 4', 'Archive plate one') },
    { filter: 'Porcelain', caption: 'Vessel 002', year: '2024', slot: media('Archive 02 · 4:5', '4 / 5', 'Archive plate two') },
    { filter: 'Bronze', caption: 'Study 003', year: '2024', slot: media('Archive 03 · 1:1', '1 / 1', 'Archive plate three') },
    { filter: 'Stoneware', caption: 'Vessel 004', year: '2025', slot: media('Archive 04 · 3:4', '3 / 4', 'Archive plate four') },
    { filter: 'Porcelain', caption: 'Pair 005', year: '2025', slot: media('Archive 05 · 4:5', '4 / 5', 'Archive plate five') },
    { filter: 'Bronze', caption: 'Study 006', year: '2025', slot: media('Archive 06 · 1:1', '1 / 1', 'Archive plate six') },
    { filter: 'Stoneware', caption: 'Vessel 007', year: '2025', slot: media('Archive 07 · 3:4', '3 / 4', 'Archive plate seven') },
    { filter: 'Porcelain', caption: 'Vessel 008', year: '2026', slot: media('Archive 08 · 4:5', '4 / 5', 'Archive plate eight') },
    { filter: 'Bronze', caption: 'Study 009', year: '2026', slot: media('Archive 09 · 1:1', '1 / 1', 'Archive plate nine') },
    { filter: 'Stoneware', caption: 'Vessel 010', year: '2026', slot: media('Archive 10 · 3:4', '3 / 4', 'Archive plate ten') },
    { filter: 'Porcelain', caption: 'Vessel 011', year: '2026', slot: media('Archive 11 · 4:5', '4 / 5', 'Archive plate eleven') },
    { filter: 'Bronze', caption: 'Study 012', year: '2026', slot: media('Archive 12 · 1:1', '1 / 1', 'Archive plate twelve') },
  ],
} as const

/* ------------------------------------------------------------- /registry */
export const registry = {
  eyebrow: 'Registry',
  title: 'Three ways in',
  lede: 'Whether it is one object or a whole room, it starts the same way — a conversation, then a written proposal.',
  plans: [
    {
      name: 'Single piece',
      price: 'From £2,400',
      period: 'per object',
      body: 'One object, one brief. The most common way people start.',
      includes: ['Opening conversation', 'Written proposal', 'One free revision'],
      featured: false,
    },
    {
      name: 'Full commission',
      price: 'From £9,000',
      period: 'per project',
      body: 'A set, a room, or a series. Scoped together before anything is quoted.',
      includes: ['Everything above', 'Site visit', 'Material sampling', 'Full documentation'],
      featured: true,
    },
    {
      name: 'Consultation',
      price: '£180',
      period: 'per session',
      body: 'Ninety minutes on a brief you are still shaping. Deducted if you commission.',
      includes: ['Ninety minutes', 'Written summary', 'No obligation'],
      featured: false,
    },
  ],
  note: 'Prices exclude VAT and delivery. A 30% deposit confirms a slot in the schedule.',
  cta: { label: 'Start the conversation', href: '#enquire' },
  services: {
    eyebrow: 'Also available',
    title: 'Beyond commissions',
    items: [
      { name: 'Restoration', meta: 'By assessment', body: 'Repair and conservation of existing pieces, ours or otherwise.' },
      { name: 'Editions', meta: 'Limited runs', body: 'Small numbered runs for galleries and retailers.' },
      { name: 'Teaching', meta: 'Two places a year', body: 'Long-form apprenticeship in the studio.' },
      { name: 'Licensing', meta: 'On request', body: 'Use of existing designs in production contexts.' },
    ],
  },
} as const

/* ------------------------------------------------------------- /featured */
export const people = {
  eyebrow: 'The studio',
  title: 'Who makes it',
  lede: 'A small permanent team, and the makers we work with repeatedly.',
  members: [
    { name: 'A. Placeholder', role: 'Founder, lead maker', bio: 'Trained in ceramics, twenty years at the wheel.', slot: media('Portrait 01 · 4:5', '4 / 5', 'Team portrait one') },
    { name: 'B. Placeholder', role: 'Studio manager', bio: 'Runs the schedule and every conversation with clients.', slot: media('Portrait 02 · 4:5', '4 / 5', 'Team portrait two') },
    { name: 'C. Placeholder', role: 'Maker', bio: 'Surface, glaze and the long finishing work.', slot: media('Portrait 03 · 4:5', '4 / 5', 'Team portrait three') },
    { name: 'D. Placeholder', role: 'Maker', bio: 'Casting, moulds and the cold work.', slot: media('Portrait 04 · 4:5', '4 / 5', 'Team portrait four') },
    { name: 'E. Placeholder', role: 'Photography', bio: 'Documents every finished piece for the archive.', slot: media('Portrait 05 · 4:5', '4 / 5', 'Team portrait five') },
    { name: 'F. Placeholder', role: 'Apprentice', bio: 'Two-year placement, second year.', slot: media('Portrait 06 · 4:5', '4 / 5', 'Team portrait six') },
  ],
} as const

/* -------------------------------------------------------------- /process */
export const process = {
  eyebrow: 'Process',
  title: 'Eleven weeks,',
  titleEm: 'start to finish',
  lede: 'Nothing here is secret. This is the whole method, in the order it happens.',
  hero: media('Process hero · 21:9', '21 / 9', 'The workshop'),
  steps: [
    { index: '01', title: 'The conversation', duration: 'Week 0', body: 'Forty minutes, in the studio or on a call. We establish the brief, the constraints, the budget and what the object actually has to do. Nothing is charged and nothing is committed.', slot: media('Process 01 · 4:5', '4 / 5', 'The opening conversation') },
    { index: '02', title: 'Drawing', duration: 'Week 1—2', body: 'The piece is resolved entirely on paper before a material is touched. Slower at the start, far faster afterwards, and the reason nothing leaves here as a compromise.', slot: media('Process 02 · 4:5', '4 / 5', 'Drawings on the bench') },
    { index: '03', title: 'Material tests', duration: 'Week 3', body: 'Small samples in the chosen material, fired alongside your piece’s eventual schedule. You see and handle them before we commit.', slot: media('Process 03 · 4:5', '4 / 5', 'Material test tiles') },
    { index: '04', title: 'Making', duration: 'Week 4—9', body: 'One maker, start to finish. You get progress photographs at each stage and can change course at any of them, up to the final firing.', slot: media('Process 04 · 4:5', '4 / 5', 'The piece being made') },
    { index: '05', title: 'Finishing', duration: 'Week 10', body: 'Surface work, the maker’s mark, and the slow cool. This is where most of the character arrives and none of it can be rushed.', slot: media('Process 05 · 4:5', '4 / 5', 'Finishing work') },
    { index: '06', title: 'Delivery', duration: 'Week 11', body: 'Photographed for the archive, catalogued, then delivered by hand by someone who worked on it.', slot: media('Process 06 · 4:5', '4 / 5', 'Packing for delivery') },
  ],
} as const

/* ---------------------------------------------------------------- /about */
export const about = {
  eyebrow: 'About',
  title: 'A small studio',
  titleEm: 'making few things',
  lede: 'Founded to answer a narrow question: what happens if you remove every constraint except the material and the brief?',
  hero: media('About hero · 16:9', '16 / 9', 'The studio building'),
  body: [
    'The studio takes a small number of commissions each year. That number is not a marketing position — it is the maximum one team can make properly, and it has not changed since the first year.',
    'Everything is made in one room by people who are named on the piece. There is no outsourced stage, no white-labelled component, and no version of the work that exists only in a catalogue.',
    'What that buys is not speed. It buys the ability to change your mind in week eight, and to have someone who actually made the object answer the phone in year ten.',
  ],
  stats: [
    { figure: '12', label: 'Pieces a year' },
    { figure: '6', label: 'People' },
    { figure: '11', label: 'Weeks per commission' },
    { figure: '20', label: 'Years at the wheel' },
  ],
  gallery: [
    media('About 01 · 3:4', '3 / 4', 'Studio detail one'),
    media('About 02 · 1:1', '1 / 1', 'Studio detail two'),
    media('About 03 · 4:5', '4 / 5', 'Studio detail three'),
  ],
} as const

/* ---------------------------------------------------------------- /legal */
export const legal = {
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered',
    groups: [
      {
        title: 'Commissioning',
        summary: 'Four questions',
        rows: [
          { label: 'How long does a commission take?', meta: 'Around eleven weeks from agreed drawing.' },
          { label: 'Can I change the brief once work has started?', meta: 'Yes, until the final firing.' },
          { label: 'Do you work to someone else’s design?', meta: 'Occasionally — ask.' },
          { label: 'Is there a waiting list?', meta: 'Usually two to three months.' },
        ],
      },
      {
        title: 'Payment',
        summary: 'Three questions',
        rows: [
          { label: 'What deposit is required?', meta: '30% to confirm a slot.' },
          { label: 'When is the balance due?', meta: 'On completion, before delivery.' },
          { label: 'Do you offer instalments?', meta: 'Yes, over the making period.' },
        ],
      },
      {
        title: 'Delivery & aftercare',
        summary: 'Three questions',
        rows: [
          { label: 'How is the piece delivered?', meta: 'By hand, insured, within the UK.' },
          { label: 'Do you ship internationally?', meta: 'Yes, by crated freight.' },
          { label: 'What if it is damaged?', meta: 'We repair it. For the life of the piece.' },
        ],
      },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms of sale',
    updated: 'Last updated: placeholder date',
    // ⚠︎ REPLACE — structural placeholder only. Not legal advice; have a
    // solicitor draft the real thing before any client site goes live.
    sections: [
      { heading: '1. Scope', body: 'These terms govern commissions accepted by the studio. Placeholder text for structure only — replace with terms drafted for your jurisdiction.' },
      { heading: '2. Orders and deposits', body: 'A commission is confirmed on receipt of the deposit. Placeholder text for structure only.' },
      { heading: '3. Changes and cancellation', body: 'Changes may be requested up to the point stated in the schedule. Placeholder text for structure only.' },
      { heading: '4. Delivery and risk', body: 'Risk passes on delivery. Placeholder text for structure only.' },
      { heading: '5. Warranty', body: 'Handmade objects vary. Placeholder text for structure only.' },
      { heading: '6. Liability', body: 'Placeholder text for structure only.' },
      { heading: '7. Governing law', body: 'Placeholder text for structure only.' },
    ],
  },
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy policy',
    updated: 'Last updated: placeholder date',
    sections: [
      { heading: '1. What we collect', body: 'Placeholder text for structure only — replace with a policy that reflects what you actually collect.' },
      { heading: '2. Why we collect it', body: 'Placeholder text for structure only.' },
      { heading: '3. Legal basis', body: 'Placeholder text for structure only.' },
      { heading: '4. Sharing', body: 'Placeholder text for structure only.' },
      { heading: '5. Retention', body: 'Placeholder text for structure only.' },
      { heading: '6. Your rights', body: 'Placeholder text for structure only.' },
      { heading: '7. Contact', body: 'Placeholder text for structure only.' },
    ],
  },
} as const

/* ------------------------------------------------------------------- 404 */
export const notFound = {
  code: '404',
  title: 'Nothing here',
  body: 'The page you asked for does not exist, or has moved. The archive is probably where you were going.',
  cta: { label: 'Back to the studio', href: '/' },
  secondary: { label: 'See the archive', href: '/gallery/' },
} as const
