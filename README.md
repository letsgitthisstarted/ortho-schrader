# Thomas Schrader – Orthopädie & Unfallchirurgie (Website)

Static website for the Wahlarzt practice in Salzburg. No framework, no dependencies – just Node.

## Run it

```bash
npm run dev        # builds and serves http://localhost:4321, rebuilds when src/ changes
npm run build      # writes the finished site into dist/
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

The preview tells search engines not to index it (`noindex`), so placeholders and sample reviews never end up in Google. For the real launch, build without `NOINDEX` and point the domain to the host.

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
| Interactions (body map, carousel, sticky story, booking, menus) | `src/assets/js/main.js` |

Adding a treatment = one new entry in `treatments.mjs` (plus a claim/badges entry in `extras` at the bottom). The page, navigation, footer, sitemap and structured data update automatically.

## Wording rules for medical content

The site follows § 53 Ärztegesetz and the ÖÄK-Verordnung „Arzt und Öffentlichkeit 2014“:

- factual and in line with current medical knowledge – no promises of success, no superlatives
- no comparisons with or criticism of other doctors (also not implicitly, e.g. "bei mir statt monatelang warten")
- no product or brand names for drugs or medical devices (e.g. say "PRP", not a brand)
- **no fixed numbers for doses, repetitions or recovery times** – always "individuell", "nach Befund", "besprechen wir gemeinsam"
- names or photos of patients only with their documented consent (§ 5 Abs. 4)

## Patient reviews

The carousel on the home page currently shows **sample texts**, each marked "Beispieltext". They paraphrase themes from public reviews and are not real quotes. Before going live, replace them in `reviews` in `src/data/site.mjs` with real feedback, with each patient's consent, and set `placeholder: false`. Ask the Ärztekammer Salzburg first whether patient testimonials are fine on the site. A photo per review is optional (`photo: '/assets/img/…'`).

## Photos

Every photo slot uses `photo({ label, … })` and shows a calm placeholder that says "Foto folgt: …". To use a real picture, put it in `src/assets/img/` and pass `src: '/assets/img/name.jpg'`, e.g. in `src/pages/home.mjs`:

```js
photo({ label: 'Porträt Thomas Schrader', ratio: '4/5', src: '/assets/img/portrait.jpg' })
```

Needed: portrait (2–3 variants), Thomas with a patient / at the ultrasound, the treatment room at healthlab, one personal photo (bike, mountains or skiing).

## Design notes

- Type: **Newsreader** for headlines (variable, optical sizes) and **Geist** for text. Both are self-hosted (no Google Fonts, GDPR-friendly) under the SIL Open Font License. Compare alternatives at `/schriften/` (internal page, not linked and not indexed). To switch, change `--ff-serif` in `main.css`.
- Colours: navy `#16293d`, ink `#14202e`, slate `#6f8394`, sky `#a9c3d6`, sand `#f4f1eb`, mist `#e8eef2`; a muted red only to highlight a body region.
- Signature element: the "Wo tut es weh?" body figure. Paired joints light up together, the spine shows as a dotted line, and tap areas are large. It appears on the home page, the Beschwerden overview, every treatment page and every condition page.
- Motion respects `prefers-reduced-motion`. Smooth scrolling via Lenis (`src/assets/lib/`).

## Before going live

- [ ] Patient reviews: real texts with consent (see above), or remove the section.
- [ ] Contact form: currently prepares an e-mail in the visitor's mail program (no server needed). For a real form use Formspree, Netlify Forms or a booking link.
- [ ] Impressum: exact specialist title (as registered with the Ärztekammer) + issuing country, UID number (marked yellow on the page).
- [ ] Datenschutz: legal review (marked yellow).
- [ ] Real photos (see above).
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
