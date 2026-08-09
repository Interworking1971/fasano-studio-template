/* ==========================================================================
   SITE CONTENT — the only file you edit to re-skin this template.
   --------------------------------------------------------------------------
   Every word, link, image slot and data row on the site comes from here.
   No component hardcodes copy. Change this file + app/styles/tokens.css and
   you have a different client's site.

   Copy is written in Italian for ASD Corpus Wellness, Fasano (BR), Puglia. Each display line carries an `EN:` gloss so a non-Italian reviewer
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
    name: 'CORPUS',
    fullName: 'ASD Corpus Wellness — Fasano',
    /** Sits in the <title> after every page name. */
    titleSuffix: 'ASD Corpus Wellness',
    description:
      'ASD Corpus Wellness, Fasano. Karate, ju-jitsu, gym boxe, difesa personale, funzionale, posturale, pilates e floor barre — otto discipline, una sala, maestri che ti seguono per nome.',
    locale: 'it-IT',
    lang: 'it',
  },

  /* ------------------------------------------------------------------ */
  /* CONTACT  ⚠︎ REPLACE — all invented                                  */
  /* ------------------------------------------------------------------ */
  contact: {
    phone: '+39 080 442 1907',
    phoneHref: 'tel:+390804421907',
    email: 'info@asdcorpusfasano.it',
    emailHref: 'mailto:info@asdcorpusfasano.it',
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
    // EN: "Fasano — Puglia"
    kicker: 'Fasano — Puglia',
    word: 'CORPUS',
  },

  /* ------------------------------------------------------------------ */
  /* 02 — MAIN HERO                                                     */
  /* ------------------------------------------------------------------ */
  hero: {
    // EN: "where the body becomes discipline"
    line1: 'dove il corpo',
    line2Em: 'diventa',
    line3: 'disciplina',
    // EN: "Eight disciplines, one room, in the heart of Fasano."
    standfirst:
      'Otto discipline nel cuore di Fasano. Dal karate al ju-jitsu, dal funzionale al pilates. Una sala sola, maestri che ti seguono per nome.',
    cta: { label: 'Prenota la prova', href: '#prova' },
    scrollCue: 'Scorri',
    background: media('Sala principale · 16:9', '16 / 9', 'La sala principale di ASD Corpus'),
  },

  /* ------------------------------------------------------------------ */
  /* 03 — DISCOVER (animated statement)                                 */
  /* ------------------------------------------------------------------ */
  discover: {
    // EN: "the essence of corpus"
    eyebrow: 'L’essenza di Corpus',
    // EN: "your body deserves a method, not a machine park"
    title: 'il tuo corpo merita un metodo',
    titleEm: 'non una sala attrezzi',
    body: 'ASD Corpus è una palestra di quartiere con l’anima di un dojo: pochi iscritti, sale a numero chiuso, maestri che ti chiamano per nome. Ogni percorso parte da una valutazione e finisce con un programma tuo — che tu venga per il karate, per il ju-jitsu o semplicemente per tornare in forma.',
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
        media: media('Prova · accoglienza · 3:4', '3 / 4', 'Prima lezione di prova'),
      },
      {
        index: '02',
        title: 'La disciplina',
        body: 'Scegli la strada — karate, ju-jitsu, gym boxe, funzionale — o combinale. Il programma resta uno, coerente, aggiornato ogni sei settimane.',
        media: media('Ju-Jitsu · tatami · 3:4', '3 / 4', 'Allenamento di ju-jitsu'),
      },
      {
        index: '03',
        title: 'La forma',
        body: 'Non un traguardo ma una condizione: un corpo che regge, si muove bene e non si fa male. Misurata, non promessa.',
        media: media('Posturale · 3:4', '3 / 4', 'Lavoro posturale in sala piccola'),
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
    media: media('Sala grande · panoramica · 21:9', '21 / 9', 'La sala grande in allenamento'),
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
    body: 'Un tatami per karate, ju-jitsu e difesa personale. Una sala grande per gym boxe e funzionale. Una sala piccola per pilates, posturale e floor barre. Tre ambienti separati perché otto discipline non si allenano nello stesso rumore.',
    media: media('Tatami · verticale · 4:5', '4 / 5', 'La sala tatami'),
  },

  /* ------------------------------------------------------------------ */
  /* 08 — DIPTYCHS (alternating image / text pairs)                     */
  /* ------------------------------------------------------------------ */
  diptychs: {
    sticky: {
      eyebrow: 'Karate',
      title: 'La strada lunga',
      body: 'Karate per adulti e bambini, dal principiante alla cintura nera. Con Pino e Giacomo: kata, kumite ed esami federali. La disciplina che insegna tutte le altre.',
      points: ['Bambini', 'Ragazzi', 'Adulti tutti i livelli', 'Esami federali'],
      cta: { label: 'Orari karate', href: '#orari' },
      media: media('Karate · tatami · 3:4', '3 / 4', 'Lezione di karate sul tatami'),
    },
    doubleMask: {
      eyebrow: 'Ju-Jitsu e difesa personale',
      title: 'Il lavoro a terra',
      body: 'Ju-Jitsu con Angelo Vinci e Oronzo Pinto, due veterani della disciplina: proiezioni, leve, controllo. Accanto, un corso di difesa personale aperto a tutti — situazioni reali, risposte semplici, nessuna base richiesta.',
      mediaA: media('Ju-Jitsu · presa · 1:1', '1 / 1', 'Dettaglio di una presa a terra'),
      mediaB: media('Difesa personale · 4:5', '4 / 5', 'Esercitazione di difesa personale'),
    },
    mainEdito: {
      eyebrow: 'Il metodo',
      // EN: "The base is the body. Everything else is built on top."
      title: 'La base è il corpo.',
      titleEm: 'Il resto ci si appoggia sopra.',
      body: 'Chi fa karate e chi fa ju-jitsu si allena comunque nel funzionale e nel posturale: è quello che tiene insieme le articolazioni e allunga la carriera sportiva. L’impianto è lo stesso per tutti — cambia il dosaggio, non la logica.',
      cta: { label: 'Parla con un maestro', href: '#prova' },
    },
    singleMask: {
      eyebrow: 'Pilates, posturale e floor barre',
      title: 'Il lavoro silenzioso',
      body: 'Tre corsi nella sala piccola, a numero chiuso. Pilates con Angela, posturale con Alfredo, floor barre con Francesca Petrarca — tecnica posturale costruita sull’essenzialità del movimento, in gruppo o personal.',
      cta: { label: 'Richiedi disponibilità', href: '#prova' },
      media: media('Sala piccola · 16:10', '16 / 10', 'Lezione nella sala piccola'),
    },
  },

  /* ------------------------------------------------------------------ */
  /* 09 — DISCIPLINES GRID                                              */
  /* ------------------------------------------------------------------ */
  /*
    The eight disciplines ASD Corpus actually runs, with the instructor
    credited on each — taken from the club's own discipline cards.
    Instructors are listed by the first names the club publishes; confirm
    full names and spellings before launch.
  */
  disciplines: {
    eyebrow: 'Discipline',
    title: 'Otto strade, una sala',
    items: [
      { name: 'Karate', meta: 'Tatami · con Pino e Giacomo', body: 'Kata, kumite e disciplina. Dalla prima cintura fino agli esami federali.' },
      { name: 'Ju-Jitsu', meta: 'Tatami · con Angelo e Oronzo', body: 'Proiezioni, leve e lavoro a terra con due veterani della disciplina.' },
      { name: 'Gym boxe', meta: 'Sala grande · con Ciccio', body: 'Guantoni, sacco e condizionamento. Tecnica vera, ritmo da allenamento.' },
      { name: 'Difesa personale', meta: 'Tatami · con Oronzo', body: 'Situazioni reali, risposte semplici. Aperto a tutti, nessuna base richiesta.' },
      { name: 'Funzionale', meta: 'Sala grande · con Ciccio', body: 'Circuiti a corpo libero e sovraccarico. La base che regge tutte le altre.' },
      { name: 'Posturale', meta: 'Sala piccola · con Alfredo', body: 'Per chi sta seduto tutto il giorno o torna da un infortunio.' },
      { name: 'Pilates', meta: 'Sala piccola · con Angela', body: 'Controllo, respiro e centro. Lezioni a numero chiuso.' },
      { name: 'Floor barre', meta: 'Sala piccola · con Francesca Petrarca', body: 'Tecnica posturale sull’essenzialità del movimento. Gruppo e personal, total body.' },
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
          // Confirmed from the club's own Floor barre card.
          { time: '11:30', name: 'Floor barre — Francesca Petrarca', room: 'Sala piccola' },
          { time: '18:00', name: 'Karate bambini', room: 'Tatami' },
          { time: '19:15', name: 'Karate adulti', room: 'Tatami' },
          { time: '20:30', name: 'Gym boxe', room: 'Sala grande' },
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
        body: 'Karate, ju-jitsu, gym boxe, funzionale, pilates, posturale, floor barre o difesa personale. Accesso a tutti i turni della disciplina scelta.',
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
    title: 'Dentro Corpus',
    cta: { label: 'Vieni a vederlo', href: '#prova' },
    items: [
      media('Gym boxe · sacco · 3:4', '3 / 4', 'Allenamento al sacco'),
      media('Cintura · dettaglio · 1:1', '1 / 1', 'Dettaglio di una cintura annodata'),
      media('Funzionale · 4:5', '4 / 5', 'Circuito funzionale in sala grande'),
      media('Guantoni · dettaglio · 1:1', '1 / 1', 'Guantoni appoggiati a bordo sala'),
      media('Pilates · 3:4', '3 / 4', 'Lezione di pilates'),
      media('Gruppo · tatami · 4:5', '4 / 5', 'Il gruppo schierato sul tatami'),
      media('Sala grande · 16:10', '16 / 10', 'La sala grande vista dall’ingresso'),
      media('Ingresso · 3:4', '3 / 4', 'L’ingresso della palestra'),
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 13 — LARGE QUOTE                                                   */
  /* ------------------------------------------------------------------ */
  /*
    ⚠︎ REPLACE — PLACEHOLDER WORDING, NOT A REAL QUOTE.
    Angelo Vinci and Oronzo Pinto are real people. Do not publish this line
    under either name, or any other, until they have actually said it and
    signed it off. Get one sentence from a maestro and drop it in here.
  */
  quote: {
    // EN: "Technique is what's left when strength runs out."
    text: 'La tecnica è quello che resta quando la forza finisce.',
    attribution: '⚠︎ Nome del maestro',
    role: '⚠︎ Raccogliere una frase reale prima della pubblicazione',
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
          { label: 'Lavora con noi', href: 'mailto:info@asdcorpusfasano.it' },
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
    company: 'ASD Corpus Wellness · P.IVA ⚠︎ REPLACE · Fasano (BR)',
    credits: {
      label: 'Design system',
      text: 'Interworking Design',
      href: '#',
    },
  },
} as const

export type Site = typeof site
