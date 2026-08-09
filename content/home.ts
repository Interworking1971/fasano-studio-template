import { media } from './site'

/* Homepage copy. Neutral placeholder — swap wholesale per client. */
export const home = {
  hero: {
    line1: 'where material',
    line2Em: 'becomes',
    line3: 'memory',
    standfirst:
      'A studio working at the edge of craft and industry. One room, one method, a small number of pieces each year.',
    cta: { label: 'Start a commission', href: '/registry/' },
    scrollCue: 'Scroll',
    background: media('Hero · 16:9', '16 / 9', 'The studio, wide'),
  },

  discover: {
    eyebrow: 'The essence',
    title: 'your object deserves a method',
    titleEm: 'not a production line',
    body: 'Every commission begins with a conversation and ends with a single object. Nothing is batched, nothing is repeated. What arrives is the result of a process you were part of from the first sketch.',
    cta: { label: 'See the process', href: '/process/' },
  },

  stepper: {
    caption: 'From conversation, to making, to the object itself.',
    steps: [
      {
        index: '01',
        title: 'The conversation',
        body: 'Forty minutes to understand the brief, the constraints and what the object has to mean. No commitment before this.',
        media: media('Step one · 3:4', '3 / 4', 'The opening conversation'),
      },
      {
        index: '02',
        title: 'The making',
        body: 'Drawings, then material tests, then the work itself. You see each stage and can change course at any of them.',
        media: media('Step two · 3:4', '3 / 4', 'Work in progress'),
      },
      {
        index: '03',
        title: 'The object',
        body: 'Finished, documented and delivered by hand. Made once, meant to outlast everyone involved.',
        media: media('Step three · 3:4', '3 / 4', 'The finished object'),
      },
    ],
  },

  /*
    The giant statement. Italic runs are the joining words, roman caps are
    the subject — "<i>where</i> INNOVATION / <i>meets</i> CRAFTSMANSHIP".
    Keep each line short: it sets at up to ~110px on one line, nowrap.
  */
  largeTitle: {
    eyebrow: { lead: 'the', roman: 'ESSENCE', tail: 'of', subject: 'STUDIO' },
    line1Em: 'where',
    line1: 'INNOVATION',
    line2Em: 'meets',
    line2: 'CRAFTSMANSHIP',
    media: media('Statement plate · 4:3', '4 / 3', 'A finished piece'),
  },

  bulletPoints: {
    eyebrow: 'Included in every commission',
    title: 'What you always get',
    items: [
      { title: 'Opening conversation', body: 'Brief, constraints and intent, understood before anything is drawn.' },
      { title: 'Written proposal', body: 'A document of your own, revised with you at each stage.' },
      { title: 'Limited intake', body: 'A small number of commissions a year. Always.' },
      { title: 'Full documentation', body: 'The finished piece photographed and catalogued.' },
      { title: 'Free revision', body: 'One full change of direction, at any point before making begins.' },
      { title: 'Delivered by hand', body: 'Anywhere in the country, by someone who worked on it.' },
    ],
  },

  secondaryHero: {
    eyebrow: 'The studio',
    title: 'Four hundred square metres,',
    titleEm: 'twelve pieces a year',
    body: 'A drawing room, a workshop and a finishing room. Three spaces kept apart, because three kinds of work do not belong in the same noise.',
    media: media('Studio interior · 4:5', '4 / 5', 'Inside the studio'),
  },

  diptychs: {
    sticky: {
      eyebrow: 'Craft',
      title: 'The long road',
      body: 'Techniques that take years to learn and minutes to ruin. We use them because nothing faster produces the same result, and because the difference is visible at arm’s length.',
      points: ['Hand-finished', 'Single maker per piece', 'Materials traced to source', 'Documented at every stage'],
      cta: { label: 'See the process', href: '/process/' },
      media: media('Craft · 3:4', '3 / 4', 'Hands at work'),
    },
    doubleMask: {
      eyebrow: 'Material',
      title: 'The honest surface',
      body: 'Nothing is coated to look like something else. Where a material marks, it marks — that record is the point, not a defect to be polished away.',
      mediaA: media('Detail · 1:1', '1 / 1', 'Material detail'),
      mediaB: media('Surface · 4:5', '4 / 5', 'Surface study'),
    },
    mainEdito: {
      eyebrow: 'The method',
      title: 'The base is the drawing.',
      titleEm: 'Everything rests on it.',
      body: 'Every piece begins on paper and is resolved there before a material is touched. It is slower at the start and far faster afterwards — and it is why nothing leaves the studio as a compromise.',
      cta: { label: 'Talk to the studio', href: '/registry/' },
    },
    singleMask: {
      eyebrow: 'Commissions',
      title: 'One to one',
      body: 'For a specific object, a specific room, or a specific occasion. Sessions by appointment, and a proposal within two weeks of the first conversation.',
      cta: { label: 'Check availability', href: '/registry/' },
      media: media('Commission · 16:10', '16 / 10', 'A commission in progress'),
    },
  },

  gallery: {
    eyebrow: 'The studio',
    title: 'Inside the room',
    cta: { label: 'See the full gallery', href: '/gallery/' },
    items: [
      media('Plate 01 · 3:4', '3 / 4', 'Studio plate one'),
      media('Plate 02 · 1:1', '1 / 1', 'Studio plate two'),
      media('Plate 03 · 4:5', '4 / 5', 'Studio plate three'),
      media('Plate 04 · 1:1', '1 / 1', 'Studio plate four'),
      media('Plate 05 · 3:4', '3 / 4', 'Studio plate five'),
      media('Plate 06 · 4:5', '4 / 5', 'Studio plate six'),
      media('Plate 07 · 16:10', '16 / 10', 'Studio plate seven'),
      media('Plate 08 · 3:4', '3 / 4', 'Studio plate eight'),
    ],
  },

  quote: {
    text: 'Technique is what remains when the material stops cooperating.',
    attribution: 'Placeholder Name',
    role: '⚠︎ REPLACE — use a real, attributed quote',
  },

  reassurance: {
    items: [
      { title: 'No obligation', body: 'The first conversation costs nothing.' },
      { title: 'Fixed proposal', body: 'A price agreed before work begins.' },
      { title: 'Insured delivery', body: 'Handled and covered door to door.' },
      { title: 'Aftercare', body: 'Repairs and restoration, for as long as it exists.' },
    ],
  },

  finalCta: {
    line1: 'Come and see.',
    line2Em: 'Then decide.',
    body: 'Write or call, and we will find a time within the week.',
    cta: { label: 'Start a commission', href: '/registry/' },
  },
} as const
