# ASD Corpus Wellness — photography brief

Everything the site needs, mapped to the exact image slots in
`content/site.ts`. **18 photo slots + 1 optional hero video + 3 brand assets.**

You do not need 18 unique photographs. **12 strong ones covers the site**, with a
few reused across the gallery. 18 unique is the ideal.

---

## Delivery specs

| | |
|---|---|
| Resolution | Full camera res. **Minimum 2400px on the long edge**; 3500px+ for the hero and the 21:9 band |
| Format | JPEG or PNG straight from camera. **Do not pre-crop to the ratios** — I need headroom to crop |
| Colour | Unretouched, correct white balance. No filters, no Instagram presets |
| Orientation | Shoot the portrait slots **vertically in camera** — don't crop landscape down |
| Naming | `karate-tatami-01.jpg`, `gymboxe-sacco-03.jpg` — discipline first |

I handle cropping, compression and WebP/AVIF derivatives. Send the originals.

### Why the existing Facebook images won't work

The club's Facebook is mostly designed discipline cards and event flyers, not
photography. The handful of real photos are low-resolution, mixed white balance
and shot under flat overhead gym lighting — Facebook also re-compresses hard. At
2560px wide in a full-bleed band they will look visibly soft. Useful as
reference for naming and discipline mix; not usable as site imagery.

### Lighting note

Gym overheads are the enemy: green-tinted fluorescents, hard top-down shadows,
flat faces. Two options that cost nothing:

- **Shoot near the windows** in daylight, side-on, with the overheads switched
  off where possible.
- If the room has no daylight, embrace it: shoot **darker and more contrasty**
  rather than fighting for bright and even. The site's design is warm-neutral
  and editorial — moody works, muddy doesn't.

---

## The 18 slots

Grouped by room so the shoot runs in one efficient pass, not by page order.

### Session A — empty rooms, before class (30 min)

| # | Slot | Ratio | The shot |
|---|---|---|---|
| 1 | Hero background | **16:9** | The main room, wide, from the doorway. Ideally one or two people mid-training, small in the frame — the display type sits over the left third, so **keep the left side uncluttered** |
| 5 | Sala grande panoramic | **21:9** | Very wide, letterbox. Room in use. Goes behind white text on a dark scrim, so mid-tones are fine |
| 17 | Sala grande | **16:10** | Same room, eye level, further in |
| 6 | Tatami vertical | **4:5** | The tatami room shot portrait — mats, wall, light |
| 10 | Sala piccola | **16:10** | The small room set up for pilates/floor barre |
| 18 | Ingresso | **3:4** | The entrance. Signage, door, the way in from the street |

### Session B — tatami (karate, ju-jitsu, difesa personale)

| # | Slot | Ratio | The shot |
|---|---|---|---|
| 7 | Karate | **3:4** | Kata or kumite, portrait. One or two figures, full body, mid-movement |
| 3 | Ju-jitsu | **3:4** | Ground work, portrait, from a low angle |
| 8 | Ju-jitsu detail | **1:1** | Tight — a grip, a lapel, hands. Square crop |
| 9 | Difesa personale | **4:5** | A drill in progress. Two people, clear intent |
| 16 | Gruppo | **4:5** | The class lined up on the tatami. The group shot the club will want anyway |
| 12 | Cintura detail | **1:1** | A knotted belt, close. Shot against the gi, shallow depth of field |

### Session C — sala grande (gym boxe, funzionale)

| # | Slot | Ratio | The shot |
|---|---|---|---|
| 11 | Gym boxe | **3:4** | At the bag, portrait, mid-strike. Freeze the motion |
| 13 | Funzionale | **4:5** | Circuit in progress — several people, layered depth |
| 14 | Guantoni detail | **1:1** | Gloves resting at the edge of the room. Still life |

### Session D — sala piccola (pilates, posturale, floor barre)

| # | Slot | Ratio | The shot |
|---|---|---|---|
| 15 | Pilates | **3:4** | Mid-exercise, portrait. Calm, controlled |
| 4 | Posturale | **3:4** | Instructor correcting a position — hands-on, the human moment |
| 2 | Prova / accoglienza | **3:4** | Someone being welcomed or shown around. Warm, face visible, eye contact |

---

## Hero video — optional

Replaces the hero still with a silent loop.

- **10–20 seconds**, seamless loop (start and end frames should match)
- **1920×1080 minimum**, 2560×1440 preferred
- **No audio** — it autoplays muted
- H.264 MP4 **plus** a WebM, and a poster JPEG for the first frame
- Target **under 3 MB** after compression
- Content: slow push through the main room during a class, or 3–4 static shots
  of different disciplines cut together. Avoid fast cuts and camera shake

Static site, so it drops straight into `/public` — no streaming service needed.

---

## Brand assets

| Asset | Spec |
|---|---|
| Logo | The "ASD CORPUS WELLNESS" wordmark as **SVG**, or transparent PNG ≥1000px |
| OG share image | 1200×630 — I can build this from the hero shot |
| Favicon | 512×512 square mark |

---

## Recommended addition: instructor portraits

Every one of the club's own discipline cards is credited to a person — *by
Ciccio*, *by Angela*, *by Pino & Giacomo*. The instructors are clearly the
selling point, and the site currently has no section for them.

**8 portraits**, one per instructor, **4:5 vertical**, shot against a plain wall
in the same light: Ciccio, Alfredo, Angela, Angelo, Oronzo, Pino, Giacomo,
Francesca Petrarca.

That's ~15 extra minutes on the day and it would likely convert better than half
the gallery. Say the word and I'll add the section.

---

## Still outstanding from the client

Not photography, but needed before launch — all currently `⚠︎ REPLACE` in
`content/site.ts`:

- Real address, phone, email, VAT / codice fiscale
- Full weekly timetable (only Floor barre — Mon/Wed 11:30, Tue/Thu 13:30 — is confirmed)
- Membership prices and joining fee
- Full names and correct spellings for all eight instructors
- **One real quote from a maestro.** The current line is placeholder wording and
  must not be published under anyone's name until they've actually said it
