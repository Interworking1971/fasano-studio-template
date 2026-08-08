/* ==========================================================================
   SITE CONTENT — the only file you edit to re-skin this template.
   --------------------------------------------------------------------------
   Every word, link, image slot and data row on the site comes from here.
   No component hardcodes copy. Change this file + app/styles/tokens.css and
   you have a different client's site.

   Copy is written in Italian for the demo client (a boutique gym in Fasano,
   Puglia). Each display line carries an `EN:` gloss so a non-Italian reviewer
   can edit confidently — delete the comments once the copy is signed off.

   PLACEHOLDER DATA is marked with  ⚠︎ REPLACE  — address, phone, VAT,
   federation numbers and social handles are invented and must be swapped
   before this goes live.
   ========================================================================== */

export type MediaSlot = {
  /** Path under /public/media, or a full URL. Leave '' to render the designed placeholder. */
  src: string
  alt: string
  /** width / height — drives the reserved box so nothing shifts on load. */
  ratio: string
  /** Shown inside the placeholder while there is no real photo. */
  label?: string
}

const media = (label: string, ratio: string, alt: string): MediaSlot => ({
  src: '',
  alt,
  ratio,
  label,
})

export const site = {
  /* ------------------------------------------------------------------ */
  /* BRAND                                                              */
  /* ------------------------------------------------------------------ */
  brand: {
    name: 'FORMA',
    fullName: 'FORMA — Studio Fasano',
    /** Sits in the <title> after every page name. */
    titleSuffix: 'FORMA — Studio Fasano',
    description:
      'Palestra boutique a Fasano. Karate, pugilato, forza e condizionamento in un unico studio, con programmi seguiti uno a uno.',
    locale: 'it-IT',
    lang: 'it',
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT  ⚠︎ REPLACE — all invented                                  */
  /* ------------------------------------------------------------------ */
  contact: {
    phone: '+39 080 442 1907',
    phoneHref: 'tel:+390804421907',
    email: 'ciao@formafasano.it',
    emailHref: 'mailto:ciao@formafasano.it',
    address: {
      street: 'Via Nazionale dei Trulli 42',
      city: '72015 Fasano (BR)',
      region: 'Puglia, Italia',
    },
    mapsHref: 'https://maps.google.com/?q=Fasano+Puglia',
    hours: [
      { days: 'Lunedì — Venerdì', time: '06:30 — 22:00' },
      { days: 'Sabato', time: '08:00 — 18:00' },
      { days: 'Domenica', time: '09:00 — 13:00' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* NAVIGATION                                                         */
  /* ------------------------------------------------------------------ */
  nav: {
    primary: [
      { label: 'Studio', href: '#studio' },
      { label: 'Discipline', href: '#discipline' },
      { label: 'Metodo', href: '#metodo' },
      { label: 'Orari', href: '#orari' },
      { label: 'Abbonamenti', href: '#abbonamenti' },
    ],
    cta: { label: 'Prova gratuita', href: '#prova' },
  },

  /* ------------------------------------------------------------------ */
  /* 01 — LOADER                                                        */
  /* ------------------------------------------------------------------ */
  loader: {
    // EN: "Fasano — since 1998"
    kicker: 'Fasano — dal 1998',
    word: 'FORMA',
  },

  /* ------------------------------------------------------------------ */
  /* 02 — MAIN HERO                                                     */
  /* ------------------------------------------------------------------ */
  hero: {
    // EN: "where the body becomes discipline"
    line1: 'dove il corpo',
    line2Em: 'diventa',
    line3: 'disciplina',
    // EN: "A boutique studio in Fasano. Karate, boxing, strength — one room, one method."
    standfirst:
      'Uno studio boutique nel cuore di Fasano. Karate, pugilato, forza. Una sala sola, un metodo solo.',
    cta: { label: 'Prenota la prova', href: '#prova' },
    scrollCue: 'Scorri',
    background: media('Sala principale · 16:9', '16 / 9', 'La sala principale dello studio FORMA'),
  },

  /* ------------------------------------------------------------------ */
  /* 03 — DISCOVER (animated statement)                                 */
  /* ------------------------------------------------------------------ */
  discover: {
    // EN: "the essence of forma"
    eyebrow: 'L’essenza di FORMA',
    // EN: "your body deserves a method, not a machine park"
    title: 'il tuo corpo merita un metodo',
    titleEm: 'non una sala attrezzi',
    body: 'FORMA è una palestra boutique: pochi iscritti, sale piccole, allenatori che ti chiamano per nome. Ogni percorso parte da una valutazione fisica e finisce con un programma scritto su di te — che tu venga per il karate, per il pugilato o semplicemente per tornare in forma.',
    cta: { label: 'Scopri il metodo', href: '#metodo' },
  },

  /* ------------------------------------------------------------------ */
  /* 04 — SCROLLER STEPPER (three-beat narrative)                       */
  /* ------------------------------------------------------------------ */
  stepper: {
    // EN: "from assessment, to discipline, to form"
    caption: 'Dalla valutazione, alla disciplina, alla forma.',
    steps: [
      {
        index: '01',
        title: 'La valutazione',
        body: 'Quaranta minuti con un allenatore: mobilità, postura, forza di base, obiettivi. Nessun abbonamento prima di questo.',
        media: media('Valutazione · 3:4', '3 / 4', 'Valutazione fisica iniziale'),
      },
      {
        index: '02',
        title: 'La disciplina',
        body: 'Scegli la strada — karate, pugilato, forza — o combinale. Il programma resta uno, coerente, aggiornato ogni sei settimane.',
        media: media('Disciplina · 3:4', '3 / 4', 'Allenamento di disciplina'),
      },
      {
        index: '03',
        title: 'La forma',
        body: 'Non un traguardo ma una condizione: un corpo che regge, si muove bene e non si fa male. Misurata, non promessa.',
        media: media('Forma · 3:4', '3 / 4', 'Risultato del percorso'),
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 05 — LARGE TITLE + PARALLAX MEDIA                                  */
  /* ------------------------------------------------------------------ */
  largeTitle: {
    // EN: "trained once. Never meant to stop."
    line1: 'Allenati una volta.',
    line2Em: 'Poi non smetti più.',
    media: media('Sala pesi · 21:9', '21 / 9', 'La sala pesi vista dall’ingresso'),
  },

  /* ------------------------------------------------------------------ */
  /* 06 — BULLET POINTS (what a membership includes)                    */
  /* ------------------------------------------------------------------ */
  bulletPoints: {
    eyebrow: 'Compreso in ogni percorso',
    title: 'Quello che trovi, sempre',
    items: [
      { title: 'Valutazione iniziale', body: 'Mobilità, postura e forza misurate prima di iniziare.' },
      { title: 'Programma scritto', body: 'Un foglio tuo, aggiornato ogni sei settimane con l’allenatore.' },
      { title: 'Sale a numero chiuso', body: 'Massimo dodici persone per turno. Sempre.' },
      { title: 'Spogliatoi e docce', body: 'Armadietti personali, asciugamano incluso nei percorsi annuali.' },
      { title: 'Sospensione libera', body: 'Fermi l’abbonamento fino a otto settimane l’anno, senza motivare.' },
      { title: 'Prima lezione gratuita', body: 'In qualsiasi disciplina, anche se non ti iscrivi.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 07 — SECONDARY HERO                                                */
  /* ------------------------------------------------------------------ */
  secondaryHero: {
    eyebrow: 'Lo studio',
    // EN: "four hundred square metres, twelve people at a time"
    title: 'Quattrocento metri quadri,',
    titleEm: 'dodici persone alla volta',
    body: 'Una sala tatami per il karate, un ring regolamentare per il pugilato, una sala forza con pedane e rack. Tre ambienti separati perché tre discipline non si allenano nello stesso rumore.',
    media: media('Interno studio · 4:5', '4 / 5', 'Interno dello studio FORMA'),
  },

  /* ------------------------------------------------------------------ */
  /* 08 — DIPTYCHS (alternating image / text pairs)                     */
  /* ------------------------------------------------------------------ */
  diptychs: {
    sticky: {
      eyebrow: 'Karate',
      title: 'La strada lunga',
      body: 'Karate Shotokan per adulti e bambini, dal principiante alla cintura nera. Due maestri, esami federali, kata e kumite. La disciplina che insegna tutte le altre.',
      points: ['Bambini 5—11 anni', 'Ragazzi 12—17', 'Adulti tutti i livelli', 'Esami federali due volte l’anno'],
      cta: { label: 'Orari karate', href: '#orari' },
      media: media('Karate · 3:4', '3 / 4', 'Lezione di karate sul tatami'),
    },
    doubleMask: {
      eyebrow: 'Pugilato',
      title: 'Il lavoro pulito',
      body: 'Pugilato tecnico, non fitness boxing. Si impara a stare in guardia, a muovere i piedi e a colpire bene prima di colpire forte. Sparring solo su base volontaria.',
      mediaA: media('Boxe · guantoni · 1:1', '1 / 1', 'Guantoni appesi al ring'),
      mediaB: media('Boxe · ring · 4:5', '4 / 5', 'Il ring dello studio'),
    },
    mainEdito: {
      eyebrow: 'Il metodo',
      // EN: "Strength is the base. Everything else is built on top."
      title: 'La forza è la base.',
      titleEm: 'Il resto ci si appoggia sopra.',
      body: 'Chi fa karate e chi fa pugilato si allena comunque con i pesi: è quello che tiene insieme le articolazioni e allunga la carriera sportiva. Il programma di forza è lo stesso impianto per tutti — cambia il dosaggio, non la logica.',
      cta: { label: 'Parla con un allenatore', href: '#prova' },
    },
    singleMask: {
      eyebrow: 'Personal training',
      title: 'Uno a uno',
      body: 'Se preferisci allenarti da solo, o hai un infortunio da gestire, o vuoi semplicemente andare più veloce. Sessioni da cinquanta minuti, su appuntamento, dalle 06:30.',
      cta: { label: 'Richiedi disponibilità', href: '#prova' },
      media: media('Personal training · 16:10', '16 / 10', 'Sessione di personal training'),
    },
  },

  /* ------------------------------------------------------------------ */
  /* 09 — DISCIPLINES GRID                                              */
  /* ------------------------------------------------------------------ */
  disciplines: {
    eyebrow: 'Discipline',
    title: 'Sei strade, una sala',
    items: [
      { name: 'Karate Shotokan', meta: 'Tatami · tutti i livelli', body: 'Kata, kumite ed esami federali con due maestri cintura nera.' },
      { name: 'Pugilato', meta: 'Ring · principianti e agonisti', body: 'Tecnica, footwork e preparazione. Sparring facoltativo.' },
      { name: 'Forza e condizionamento', meta: 'Sala pesi · a numero chiuso', body: 'Pedane, rack e programmi progressivi scritti a mano.' },
      { name: 'Mobilità e postura', meta: 'Sala piccola · 45 min', body: 'Per chi sta seduto tutto il giorno o torna da un infortunio.' },
      { name: 'Karate Kids', meta: 'Tatami · 5—11 anni', body: 'Coordinazione, rispetto e disciplina prima della tecnica.' },
      { name: 'Personal training', meta: 'Su appuntamento · 50 min', body: 'Uno a uno, dalle 06:30, in qualsiasi disciplina.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 10 — TIMETABLE                                                     */
  /* ------------------------------------------------------------------ */
  timetable: {
    eyebrow: 'Orari',
    title: 'La settimana',
    note: 'Gli orari valgono da settembre a giugno. In luglio e agosto lo studio passa all’orario estivo. ⚠︎ REPLACE con gli orari reali.',
    days: [
      {
        day: 'Lunedì',
        slots: [
          { time: '07:00', name: 'Forza — turno mattina', room: 'Sala pesi' },
          { time: '13:00', name: 'Mobilità e postura', room: 'Sala piccola' },
          { time: '18:00', name: 'Karate Kids', room: 'Tatami' },
          { time: '19:15', name: 'Karate adulti', room: 'Tatami' },
          { time: '20:30', name: 'Pugilato — tecnica', room: 'Ring' },
        ],
      },
      {
        day: 'Martedì',
        slots: [
          { time: '07:00', name: 'Forza — turno mattina', room: 'Sala pesi' },
          { time: '18:00', name: 'Pugilato principianti', room: 'Ring' },
          { time: '19:15', name: 'Forza — turno sera', room: 'Sala pesi' },
          { time: '20:30', name: 'Karate avanzati', room: 'Tatami' },
        ],
      },
      {
        day: 'Mercoledì',
        slots: [
          { time: '07:00', name: 'Forza — turno mattina', room: 'Sala pesi' },
          { time: '13:00', name: 'Mobilità e postura', room: 'Sala piccola' },
          { time: '18:00', name: 'Karate Kids', room: 'Tatami' },
          { time: '19:15', name: 'Karate adulti', room: 'Tatami' },
          { time: '20:30', name: 'Pugilato — sparring', room: 'Ring' },
        ],
      },
      {
        day: 'Giovedì',
        slots: [
          { time: '07:00', name: 'Forza — turno mattina', room: 'Sala pesi' },
          { time: '18:00', name: 'Pugilato principianti', room: 'Ring' },
          { time: '19:15', name: 'Forza — turno sera', room: 'Sala pesi' },
          { time: '20:30', name: 'Karate avanzati', room: 'Tatami' },
        ],
      },
      {
        day: 'Venerdì',
        slots: [
          { time: '07:00', name: 'Forza — turno mattina', room: 'Sala pesi' },
          { time: '18:00', name: 'Karate Kids', room: 'Tatami' },
          { time: '19:15', name: 'Circuito misto', room: 'Sala pesi' },
        ],
      },
      {
        day: 'Sabato',
        slots: [
          { time: '09:00', name: 'Forza — turno lungo', room: 'Sala pesi' },
          { time: '10:30', name: 'Karate — kata libero', room: 'Tatami' },
          { time: '12:00', name: 'Pugilato — open gym', room: 'Ring' },
        ],
      },
      {
        day: 'Domenica',
        slots: [{ time: '09:30', name: 'Mobilità e respirazione', room: 'Sala piccola' }],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 11 — MEMBERSHIPS  ⚠︎ REPLACE — prices are placeholders             */
  /* ------------------------------------------------------------------ */
  memberships: {
    eyebrow: 'Abbonamenti',
    title: 'Tre modi di stare qui',
    note: 'Prezzi IVA inclusa. Quota associativa annuale di € 30 al primo ingresso. ⚠︎ REPLACE con i prezzi reali.',
    plans: [
      {
        name: 'Una disciplina',
        price: '€ 55',
        period: 'al mese',
        body: 'Karate, pugilato o forza. Accesso a tutti i turni della disciplina scelta.',
        includes: ['Valutazione iniziale', 'Programma scritto', 'Armadietto condiviso'],
        featured: false,
      },
      {
        name: 'Studio completo',
        price: '€ 85',
        period: 'al mese',
        body: 'Tutte le discipline, tutti i turni. Il modo in cui lo studio è pensato per essere usato.',
        includes: [
          'Tutto quello di sopra',
          'Accesso a tutte le sale',
          'Armadietto personale',
          'Due sessioni PT l’anno',
        ],
        featured: true,
      },
      {
        name: 'Uno a uno',
        price: '€ 45',
        period: 'a sessione',
        body: 'Personal training su appuntamento, con o senza abbonamento attivo.',
        includes: ['Cinquanta minuti', 'Programma dedicato', 'Pacchetti da 10 scontati'],
        featured: false,
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 12 — GALLERY GRID                                                  */
  /* ------------------------------------------------------------------ */
  gallery: {
    eyebrow: 'Lo studio',
    title: 'Dentro FORMA',
    cta: { label: 'Vieni a vederlo', href: '#prova' },
    items: [
      media('Tatami · 3:4', '3 / 4', 'La sala tatami'),
      media('Ring · 1:1', '1 / 1', 'Il ring da pugilato'),
      media('Rack · 4:5', '4 / 5', 'Rack e pedane della sala forza'),
      media('Dettaglio · 1:1', '1 / 1', 'Dettaglio delle attrezzature'),
      media('Ingresso · 3:4', '3 / 4', 'L’ingresso dello studio'),
      media('Spogliatoi · 4:5', '4 / 5', 'Gli spogliatoi'),
      media('Corte esterna · 16:10', '16 / 10', 'La corte esterna'),
      media('Fasano · 3:4', '3 / 4', 'Il centro di Fasano'),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 13 — LARGE QUOTE                                                   */
  /* ------------------------------------------------------------------ */
  quote: {
    // EN: "Technique is what's left when strength runs out."
    text: 'La tecnica è quello che resta quando la forza finisce.',
    attribution: 'Massimo Loparco',
    role: 'Maestro di karate, fondatore · ⚠︎ REPLACE',
  },

  /* ------------------------------------------------------------------ */
  /* 14 — REASSURANCE                                                   */
  /* ------------------------------------------------------------------ */
  reassurance: {
    items: [
      { title: 'Prima lezione gratuita', body: 'In ogni disciplina, senza impegno.' },
      { title: 'Nessun vincolo annuale', body: 'Disdetta con trenta giorni di preavviso.' },
      { title: 'Certificato medico', body: 'Ti aiutiamo con la pratica, convenzione in centro.' },
      { title: 'Parcheggio', body: 'Posti riservati nella corte interna.' },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 15 — FINAL CTA                                                     */
  /* ------------------------------------------------------------------ */
  finalCta: {
    // EN: "Come and try it. Then decide."
    line1: 'Vieni a provare.',
    line2Em: 'Poi decidi.',
    body: 'Scrivici o chiama: fissiamo la valutazione e la prima lezione nella stessa settimana.',
    cta: { label: 'Prenota la prova gratuita', href: '#prova' },
  },

  /* ------------------------------------------------------------------ */
  /* 16 — FOOTER                                                        */
  /* ------------------------------------------------------------------ */
  footer: {
    emailCapture: {
      title: 'Resta in contatto',
      body: 'Orari stagionali, stage ed esami federali. Una mail al mese, non di più.',
      placeholder: 'La tua email',
      submitLabel: 'Iscriviti',
      successMessage: 'Grazie — ti abbiamo aggiunto alla lista.',
      errorMessage: 'Controlla l’indirizzo e riprova.',
    },
    columns: [
      {
        title: 'Studio',
        links: [
          { label: 'Discipline', href: '#discipline' },
          { label: 'Metodo', href: '#metodo' },
          { label: 'Orari', href: '#orari' },
          { label: 'Abbonamenti', href: '#abbonamenti' },
        ],
      },
      {
        title: 'Informazioni',
        links: [
          { label: 'Prova gratuita', href: '#prova' },
          { label: 'Certificato medico', href: '#prova' },
          { label: 'Lavora con noi', href: 'mailto:ciao@formafasano.it' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', href: 'https://instagram.com/', handle: '@forma.fasano' },
      { label: 'Facebook', href: 'https://facebook.com/' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Cookie', href: '#' },
      { label: 'Termini', href: '#' },
      { label: 'Accessibilità', href: '#' },
    ],
    // ⚠︎ REPLACE — invented company details
    company: 'FORMA A.S.D. · P.IVA 0000000000 · Fasano (BR)',
    credits: {
      label: 'Design system',
      text: 'Template FORMA',
      href: '#',
    },
  },
} as const

export type Site = typeof site
