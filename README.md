# Thomas Schrader – Orthopädie & Unfallchirurgie (Website)

Static website for the Wahlarzt practice in Salzburg. No framework, no dependencies – just Node.

## Run it

```bash
npm run dev        # builds and serves http://localhost:4321, rebuilds when src/ changes
npm run build      # writes the finished site into dist/
npm run check      # checks generated pages, links, anchors, ARIA references and share image
```

Another port: `node serve.mjs 4400`.

For hosting in a sub-folder (e.g. GitHub Pages under `/ortho-schrader/`):

```bash
BASE=/ortho-schrader/ npm run build
```

Upload the contents of `dist/` to any static host (GitHub Pages, Netlify, Cloudflare Pages, a classic webspace).

### Preview on GitHub Pages

```bash
npm run deploy     # builds a no-index preview and publishes it to the gh-pages branch
```

The preview tells search engines not to index it (`noindex`), so draft content is not intended for search indexing. For the real launch, build without `NOINDEX` and point the domain to the host.

## Where things live

| What | File |
|---|---|
| Phone, e-mail, addresses, CV, body regions, home FAQ, patient reviews | `src/data/site.mjs` |
| The 13 treatment pages (text, facts, FAQs) | `src/data/treatments.mjs` |
| The 7 "Beschwerden" pages (symptom finder, causes, FAQs) | `src/data/conditions.mjs` |
| Page layouts | `src/pages/*.mjs` |
| Header, footer, appointment request | `src/layout.mjs` |
| Body figure, icons, illustrations | `src/lib.mjs` |
| Design (colours, type, all components) | `src/assets/css/main.css` |
| Interactions (body map, booking, filters, menus) | `src/assets/js/main.js` |

Adding a treatment = one new entry in `treatments.mjs` (plus a claim/badges entry in `extras` at the bottom). The page, navigation, footer, sitemap and structured data update automatically.

## Wording rules for medical content

The site follows § 53 Ärztegesetz and the ÖÄK-Verordnung „Arzt und Öffentlichkeit 2014“:

- factual and in line with current medical knowledge – no promises of success, no superlatives
- no comparisons with or criticism of other doctors (also not implicitly, e.g. "bei mir statt monatelang warten")
- no product or brand names for drugs or medical devices (e.g. say "PRP", not a brand)
- **no fixed numbers for doses, repetitions or recovery times** – always "individuell", "nach Befund", "besprechen wir gemeinsam"
- names or photos of patients only with their documented consent (§ 5 Abs. 4)

## Patient reviews

The sample-review section has been removed from the homepage. `reviewsSection()` also refuses to render entries while `placeholder: true`, so examples cannot accidentally become testimonials by calling the component. Add genuine feedback only after consent and approval; then set `placeholder: false` and deliberately add the section back to the page.

## Photos

Every photo slot uses `photo({ label, … })` and shows a calm placeholder that says "Foto folgt: …". To use a real picture, put it in `src/assets/img/` and pass `src: '/assets/img/name.jpg'`, e.g. in `src/pages/home.mjs`:

```js
photo({ label: 'Porträt Thomas Schrader', ratio: '4/5', src: '/assets/img/portrait.jpg' })
```

In use: `portrait-thomas-schrader.jpg` (home + Über mich; low resolution, replace with a larger original when available) and `op-saal.jpg` (operating room, behind the quote on Über mich – confirm it is a real photo of Thomas and that everyone shown agreed to its use).

Still needed: Thomas with a patient / at the ultrasound, the treatment room at healthlab, one personal photo (bike, mountains or skiing).

## Design notes

- Type: **Newsreader** for headlines (variable, optical sizes) and **Geist** for text. Both are self-hosted (no Google Fonts, GDPR-friendly) under the SIL Open Font License. Compare alternatives at `/schriften/` (internal page, not linked and not indexed). To switch, change `--ff-serif` in `main.css`.
- Colours: navy `#16293d`, ink `#14202e`, slate `#526675`, sky `#a9c3d6`, sand `#f4f1eb`, mist `#e8eef2`; a muted red only to highlight a body region.
- Signature element: the "Wo tut es weh?" body figure. Paired joints light up together, the spine shows as a dotted line, and tap areas are large. It appears on the home page, the Beschwerden overview, every treatment page and every condition page.
- Motion: native scrolling (no smooth-scroll library); quick fade-ins, a word-by-word hero headline, page transitions, the pinned "Ihr Weg" story, and card grids (`data-stagger`) whose cards rise in one after another. Clickable cards grow slightly and take a deeper shade on hover. `main.js` adds the `motion` class itself, so content stays visible if the script fails; everything is off with `prefers-reduced-motion`.
- Header: "Beschwerden" and "Behandlungen" open their overview pages; hovering or the small arrow opens the dropdown.
- Homepage: hero and practice details → introduction (face first) → interactive body map → "Ihr Weg" story → treatments → network → Wahlarzt & Kosten → FAQ.
- Mobile body-map results appear immediately after the region selector, above the figure (which then shrinks to at most 300px).
- Contact map: `src/assets/img/map-healthlab.jpg` is a static OpenStreetMap excerpt served from this site, so visitors' browsers contact no map service (no cookie banner or privacy-policy entry needed). The page shows the required OpenStreetMap attribution. Regenerate it only if the address changes: `clang -fobjc-arc -framework AppKit scripts/generate-map.m -o /tmp/ortho-map && /tmp/ortho-map` (macOS).
- Treatment pages: an "Ausführlich erklärt" section of expandable topics (`src/data/treatment-details.mjs`), then notes for related complaints, "Ohne Zeitdruck, ganzheitlich" and costs.
- SEO: titles about 60 characters and descriptions up to about 155, main search term first; structured data for physician, procedures, breadcrumbs and FAQs.
- Social cards use the checked-in `src/assets/img/social-card.png`. The optional macOS generator is `scripts/generate-social-card.m`; normal builds need no image tooling.

## Before going live

- [x] Remove sample patient reviews from the homepage.
- [ ] Appointment delivery: deliberately deferred. The form still prepares an e-mail; no request is stored or sent by the website. See the booking discussion below.
- [ ] Impressum: exact specialist title (as registered with the Ärztekammer) + issuing country, UID number (marked yellow on the page).
- [ ] Datenschutz: confirm the actual hosting provider, processing/retention details and health-data handling with legal review (still visibly marked as a draft).
- [ ] Real photos (see above). The remaining portrait/personal-image slots are still placeholders; do not substitute invented photos of the doctor or patients.
- [ ] Thomas to approve medical wording before public launch, including the cost notes per treatment (e.g. "Hyaluronsäure wird von gesetzlichen Krankenkassen in der Regel nicht übernommen").
- [ ] Decide with Thomas whether any emergency hint (e.g. 144) is wanted. Urgent-care boxes on every complaint page were tried and removed (branch `codex-audit`).
- [ ] Confirm the actual WAHonline process, prices, OUCC contact/location, and procedures listed below. No prices or practice-specific electronic submission promises have been invented.
- [ ] Domain `ortho-schrader.com` → host; submit `sitemap.xml` in Google Search Console.
- [ ] Google Business Profile for healthlab / Alpenstraße 99, docfinder.at, herold.at – same name/address/phone everywhere.

## Open questions for Thomas

Facts marked as assumptions in the content – please confirm or correct:

1. **OUCC location in Bavaria** – currently "Berchtesgadener Land" (`site.bavaria` in `site.mjs`). Which site and phone number should patients use?
2. **Hallux valgus** – the foot surgery page says "Beratung und, je nach Ausprägung, operative Korrektur". Does he operate this himself, or only smaller forefoot procedures?
3. **Spinal injections** – facet and ISG infiltrations are described as done in the practice; nerve-root injections "in cooperation". Correct?
4. **Online booking** – is there a healthlab booking link we should add?
5. **Prices** – show prices (e.g. first appointment) or keep "on request"?
6. **English version** – useful for international patients in Salzburg?
7. **Stoßwelle** – the page explains radial and focused shockwave. Which device(s) does the practice have?
8. **"Ausführlich erklärt" topics** – please review the new in-depth texts on all treatment pages (prosthesis types, knee arthroscopy indications, before/after advice).


## Appointment system — discussion pending

Per the 2 November 2026 decision, keep appointment delivery unchanged until the practice chooses a workflow. Validation and keyboard accessibility have been improved independently.

Two possible directions to discuss with Thomas:

1. **Patient books an available slot:** an appointment service or practice calendar exposes suitable slots, reserves the selection, and confirms it. Decide appointment types, durations, buffers, and which calendar is authoritative.
2. **Practice proposes a slot:** a private request inbox lets Thomas or reception review a request and propose a time. The patient accepts or asks for an alternative; a proposal only becomes a confirmed appointment after acceptance.

Before implementation, decide who handles requests, how patients receive proposals, and what existing practice software can support. No backend, calendar integration, inbox, patient database, or outbound messaging has been added.

## Content references for the audit changes

- Reimbursement workflow: [ÖGK — WAHonline](https://www.oegk.at/cdscontent/?contentid=10007.880165&portal=oegkvpportal). The page explains direct transmission without asserting that this practice already uses it; confirm that before launch.

Verified in the local browser: skip-link focus, mobile menu Escape/Tab handling, body-map selection, explicit form steps, required-field feedback, invalid email/phone handling, and inline form focus. No appointment was sent. `npm run check` covers the generated site's internal references and structural checks; it is not a clinical or legal sign-off.
