// Page shell: <head>, header with mega menus, footer, floating CTA and the booking dialog.

import { html, esc, icons, miniFigure, art } from './lib.mjs';
import { site, regions, groups, credentials } from './data/site.mjs';
import { treatments } from './data/treatments.mjs';
import { conditions, conditionBySlug } from './data/conditions.mjs';
import { guides } from './data/guides.mjs';

const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));

const personId = `${site.domain}/#person`;
const praxisId = `${site.domain}/#praxis`;

// Short reference to the doctor, used as author/reviewer of every medical page.
export const personRef = { '@type': 'Person', '@id': personId, name: site.name, jobTitle: site.role, url: `${site.domain}/ueber-mich/` };

// The doctor as a person: training, credentials and memberships, so the pages can point to one identity.
export const personSchema = () => ({
  '@context': 'https://schema.org',
  ...personRef,
  description: `${site.name} ist ${site.role} und Wahlarzt im ${site.ordination.name}. Er operiert als Belegarzt an der ${site.clinic.name}.`,
  image: `${site.domain}/assets/img/portrait-thomas-schrader.jpg`,
  worksFor: { '@id': praxisId },
  affiliation: [
    { '@type': 'Hospital', name: site.clinic.name, url: site.clinic.url },
    { '@type': 'MedicalOrganization', name: site.bavaria.name, url: site.bavaria.url },
  ],
  alumniOf: credentials.education.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
  hasCredential: [site.role, ...credentials.diplomas].map((name) => ({ '@type': 'EducationalOccupationalCredential', name })),
  memberOf: credentials.societies.map(([name, url]) => ({ '@type': 'Organization', name, url })),
  knowsLanguage: ['de', 'en'],
  sameAs: site.profiles.map((p) => p.url),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.domain}/#website`,
  url: `${site.domain}/`,
  name: `${site.name} – ${site.roleShort}`,
  inLanguage: site.lang,
  publisher: { '@id': praxisId },
});

// Medical page wrapper: what the page is about, who answers for it, when it was last updated and its sources.
// reviewedBy/lastReviewed only once the texts are approved (site.content.medicallyReviewed).
export const medicalPageSchema = ({ path, name, description, about, sources = [] }) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  '@id': `${site.domain}${path}#webpage`,
  url: `${site.domain}${path}`,
  name,
  description,
  inLanguage: site.lang,
  isPartOf: { '@id': `${site.domain}/#website` },
  about,
  author: personRef,
  dateModified: site.content.updated,
  ...(site.content.medicallyReviewed ? { reviewedBy: personRef, lastReviewed: site.content.reviewed } : {}),
  ...(sources.length ? { citation: sources.map((s) => ({ '@type': 'CreativeWork', name: s.title, url: s.url })) } : {}),
});

export const physicianSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Physician', 'MedicalClinic'],
  '@id': praxisId,
  name: `${site.name} – ${site.roleShort}`,
  image: `${site.domain}/assets/img/portrait-thomas-schrader.jpg`,
  employee: { '@id': personId },
  description: 'Wahlarzt-Ordination für Orthopädie und Unfallchirurgie in Salzburg: konservative Therapie, Injektionen, Stoßwelle, Hüft- und Knieprothetik, Arthroskopie, Hand- und Fußchirurgie.',
  url: site.domain + '/',
  telephone: site.phone.replace(/\s/g, ''),
  email: site.email,
  medicalSpecialty: ['Orthopedic', 'Musculoskeletal', 'SportsMedicine'],
  isAcceptingNewPatients: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.ordination.street,
    postalCode: site.ordination.zip,
    addressLocality: site.ordination.city,
    addressCountry: site.ordination.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.ordination.geo.lat, longitude: site.ordination.geo.lng },
  hasMap: site.ordination.maps,
  areaServed: ['Salzburg', 'Salzburger Land', 'Flachgau', 'Tennengau', 'Berchtesgadener Land', 'Rupertiwinkel'],
  availableService: treatments.map((t) => ({ '@type': 'MedicalProcedure', name: t.name, url: `${site.domain}/behandlungen/${t.slug}/` })),
  sameAs: [site.clinic.url, site.bavaria.url],
});

const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: site.domain + path })),
});

const faqSchema = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export function layout({ path, title, description, body, crumbs, faq, schema = [], theme = 'light', bodyClass = '', head = '' }) {
  const ld = [...schema];
  if (crumbs) ld.push(breadcrumbSchema([['Startseite', '/'], ...crumbs]));
  if (faq?.length) ld.push(faqSchema(faq));
  return html`<!doctype html>
<html lang="de-AT">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${site.domain}${path}">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_AT">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${site.domain}${path}">
<meta property="og:image" content="${site.domain}/assets/img/social-card.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Thomas Schrader – Orthopädie und Unfallchirurgie, Wahlarzt im healthlab Salzburg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/Newsreader-opsz.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/Geist-Variable.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/main.css">
${ld.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)}
<script>document.documentElement.classList.add('js')</script>
${head}
</head>
<body class="${bodyClass}" data-theme="${theme}">
<a class="skip" href="#main">Zum Inhalt springen</a>
${header(path)}
<main id="main" tabindex="-1">
${body}
</main>
${footer()}
${floatingCta()}
${bookingDialog()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

function header(path) {
  const is = (p) => (path.startsWith(p) ? ' aria-current="page"' : '');
  return html`<header class="site-header" data-header>
  <div class="site-header__bar">
    <a class="brand" href="/" aria-label="${site.name} – Startseite">
      <span class="brand__name">${site.name}</span>
      <span class="brand__role">${site.roleShort} · Salzburg</span>
    </a>
    <nav class="nav" aria-label="Hauptnavigation">
      <ul class="nav__list">
        <li class="nav__item" data-mega>
          <span class="nav__split"><a class="nav__link" href="/beschwerden/"${is('/beschwerden')}>Beschwerden</a><button class="nav__toggle" aria-expanded="false" aria-controls="mega-beschwerden"><span class="sr">Menü Beschwerden</span>${icons.chevron}</button></span>
          ${megaConditions()}
        </li>
        <li class="nav__item" data-mega>
          <span class="nav__split"><a class="nav__link" href="/behandlungen/"${is('/behandlungen')}>Behandlungen</a><button class="nav__toggle" aria-expanded="false" aria-controls="mega-behandlungen"><span class="sr">Menü Behandlungen</span>${icons.chevron}</button></span>
          ${megaTreatments()}
        </li>
        <li class="nav__item"><a class="nav__link" href="/ueber-mich/"${is('/ueber-mich')}>Über mich</a></li>
        <li class="nav__item"><a class="nav__link" href="/wahlarzt-kosten/"${is('/wahlarzt')}>Wahlarzt &amp; Kosten</a></li>
        <li class="nav__item"><a class="nav__link" href="/kontakt/"${is('/kontakt')}>Kontakt</a></li>
      </ul>
    </nav>
    <div class="site-header__actions">
      <a class="header-phone" href="${site.phoneHref}" aria-label="Ordination anrufen: ${site.phone}">${icons.phone}<span>${site.phone}</span></a>
      <a class="btn btn--dark btn--cta" href="/kontakt/#termin" data-booking-open><span>Termin<span class="btn__more"> anfragen</span></span><span class="btn__swap" aria-hidden="true">${icons.calendar}${icons.arrow}</span></a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle><span class="sr">Menü</span>${icons.menu}</button>
    </div>
  </div>
</header>
${mobileMenu()}`;
}

function megaConditions() {
  return html`<div class="mega" id="mega-beschwerden" hidden>
  <div class="mega__inner">
    <div class="mega__intro">
      <p class="mega__title">Wo haben Sie Beschwerden?</p>
      <p class="mega__text">Wählen Sie die Körperregion – Sie finden häufige Ursachen und Ihre Behandlungsmöglichkeiten.</p>
      <a class="text-link" href="/beschwerden/">Alle Beschwerden ${icons.arrow}</a>
    </div>
    <ul class="mega__regions">
      ${conditions.map((c) => html`<li><a class="region-link" href="/beschwerden/${c.slug}/">${miniFigure(regionById[c.region])}<span>${c.name}</span></a></li>`)}
    </ul>
  </div>
</div>`;
}

function megaTreatments() {
  return html`<div class="mega" id="mega-behandlungen" hidden>
  <div class="mega__inner mega__inner--cols">
    ${groups.map((g) => html`<div class="mega__col">
      <p class="mega__label">${g.label}</p>
      <ul>${treatments.filter((t) => t.group === g.id).map((t) => html`<li><a class="mega__link" href="/behandlungen/${t.slug}/">${t.name}</a></li>`)}</ul>
    </div>`)}
    <a class="mega__feature" href="/behandlungen/">
      <span class="mega__feature-art">${art('network')}</span>
      <span class="mega__feature-title">Alle Behandlungen im Überblick</span>
      <span class="mega__feature-text">Von der Injektion bis zum Gelenkersatz – alle Behandlungen auf einen Blick.</span>
    </a>
    <a class="mega__all" href="/behandlungen/">Alle Behandlungen im Überblick ${icons.arrow}</a>
  </div>
</div>`;
}

function mobileMenu() {
  return html`<div class="mobile-menu" id="mobile-menu" hidden data-mobile-menu>
  <nav aria-label="Mobile Navigation">
    <details class="mm-group"><summary>Beschwerden ${icons.chevron}</summary>
      <ul>${conditions.map((c) => html`<li><a href="/beschwerden/${c.slug}/">${c.name}</a></li>`)}<li><a class="mm-all" href="/beschwerden/">Alle Beschwerden ${icons.arrow}</a></li></ul>
    </details>
    <details class="mm-group"><summary>Behandlungen ${icons.chevron}</summary>
      <ul>${treatments.map((t) => html`<li><a href="/behandlungen/${t.slug}/">${t.name}</a></li>`)}<li><a class="mm-all" href="/behandlungen/">Alle Behandlungen ${icons.arrow}</a></li></ul>
    </details>
    <a class="mm-link" href="/ueber-mich/">Über mich</a>
    <a class="mm-link" href="/wahlarzt-kosten/">Wahlarzt &amp; Kosten</a>
    <a class="mm-link" href="/kontakt/">Kontakt &amp; Anfahrt</a>
  </nav>
  <div class="mobile-menu__foot">
    <a class="btn btn--dark btn--block" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
    <a class="btn btn--ghost btn--block" href="${site.phoneHref}">${icons.phone} ${site.phone}</a>
  </div>
</div>`;
}

function footer() {
  return html`<footer class="site-footer">
  <div class="wrap">
    <div class="site-footer__top">
      <p class="site-footer__mark">${site.name}</p>
      <p class="site-footer__motto">„${site.motto}“</p>
    </div>
    <div class="site-footer__grid">
      <div>
        <p class="site-footer__label">Ordination</p>
        <address>${site.ordination.name}<br>${site.ordination.street}<br>${site.ordination.zip} ${site.ordination.city}</address>
        <p><a href="${site.phoneHref}">${site.phone}</a><br><a href="mailto:${site.email}">${site.email}</a></p>
        <p class="site-footer__small">Termine nach Vereinbarung.</p>
      </div>
      <div>
        <p class="site-footer__label">Beschwerden</p>
        <ul>${conditions.map((c) => html`<li><a href="/beschwerden/${c.slug}/">${c.name}</a></li>`)}${guides.map((g) => html`<li><a href="/beschwerden/${g.slug}/">${g.name}</a></li>`)}</ul>
      </div>
      <div>
        <p class="site-footer__label">Behandlungen</p>
        <ul>${treatments.slice(0, 8).map((t) => html`<li><a href="/behandlungen/${t.slug}/">${t.name}</a></li>`)}<li><a href="/behandlungen/">Alle Behandlungen</a></li></ul>
      </div>
      <div>
        <p class="site-footer__label">Praxis</p>
        <ul>
          <li><a href="/ueber-mich/">Über mich</a></li>
          <li><a href="/wahlarzt-kosten/">Wahlarzt &amp; Kosten</a></li>
          <li><a href="/operation/">Ihre Operation</a></li>
          <li><a href="/kontakt/">Kontakt &amp; Anfahrt</a></li>
          <li><a href="/impressum/">Impressum</a></li>
          <li><a href="/datenschutz/">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <div class="site-footer__bottom">
      <p>© <span data-year>2026</span> ${site.name}, ${site.role}</p>
      <p>Die Inhalte dieser Website informieren und ersetzen keine ärztliche Untersuchung.</p>
    </div>
  </div>
</footer>`;
}

function floatingCta() {
  return html`<div class="float-cta" data-float-cta>
  <a class="float-cta__btn" href="/kontakt/#termin" data-booking-open>Termin anfragen ${icons.arrow}</a>
  <a class="float-cta__call" href="${site.phoneHref}" aria-label="Ordination anrufen: ${site.phone}">${icons.phone}<span>Anrufen</span></a>
</div>`;
}

// Multi-step appointment request. Works as a <dialog> on every page and inline on /kontakt/.
export function bookingForm({ inline = false } = {}) {
  const areas = [...conditions.map((c) => [c.region, regionById[c.region].label]), ['andere', 'Andere']];
  const reasons = [
    ['abklaerung', 'Abklärung von Beschwerden', 'Schmerzen, die ich untersuchen lassen möchte'],
    ['zweitmeinung', 'Zweitmeinung zu einer Operation', 'Mir wurde eine OP empfohlen'],
    ['injektion', 'Injektion oder Stoßwelle', 'Ich weiß schon, welche Behandlung ich möchte'],
    ['verletzung', 'Sportverletzung oder Unfall', 'Es ist vor Kurzem passiert'],
    ['kontrolle', 'Kontrolle oder Nachsorge', 'Ich war schon in Behandlung'],
  ];
  const p = inline ? 'bk-inline' : 'bk';
  return html`<form class="booking${inline ? ' booking--inline' : ''}" data-booking novalidate>
  <div class="booking__head">
    <button type="button" class="booking__back" data-bk-back aria-label="Zurück" hidden>${icons.back}</button>
    <div class="booking__progress" aria-hidden="true"><span data-bk-progress></span></div>
    ${inline ? '' : html`<button type="button" class="booking__close" data-booking-close aria-label="Schließen">${icons.close}</button>`}
  </div>
  <p class="booking__step-count" data-bk-count>Schritt 1 von 3</p>

  <fieldset class="booking__step is-active" data-bk-step="1">
    <legend class="booking__q" tabindex="-1">Wobei kann ich Ihnen helfen?</legend>
    <div class="booking__options">
      ${reasons.map(([v, l, d]) => html`<label class="option"><input type="radio" name="anliegen" value="${l}" data-bk-auto><span class="option__box"><span class="option__label">${l}</span><span class="option__desc">${d}</span></span></label>`)}
    </div>
    <div class="booking__actions booking__actions--keys"><button type="button" class="btn btn--dark btn--block" data-bk-next>Weiter</button></div>
  </fieldset>

  <!-- Step 2 is where a real slot picker goes once the practice has a calendar backend. -->
  <fieldset class="booking__step" data-bk-step="2">
    <legend class="booking__q" tabindex="-1">Wo und wann?</legend>
    <p class="booking__sub" id="${p}-region-label">Körperregion <span class="field__opt">optional</span></p>
    <div class="booking__chips" role="group" aria-labelledby="${p}-region-label">
      ${areas.map(([v, l]) => html`<label class="chip-check"><input type="checkbox" name="region" value="${l}"><span>${l}</span></label>`)}
    </div>
    <p class="booking__sub" id="${p}-when-label">Wunschtermin <span class="field__opt">optional</span></p>
    <div class="booking__chips" role="radiogroup" aria-labelledby="${p}-when-label">
      ${['So bald wie möglich', 'Diese Woche', 'Nächste Woche', 'Flexibel'].map((l) => html`<label class="chip-check"><input type="radio" name="wann" value="${l}"><span>${l}</span></label>`)}
    </div>
    <div class="booking__chips" role="radiogroup" aria-label="Tageszeit">
      ${['Vormittag', 'Nachmittag', 'Egal'].map((l) => html`<label class="chip-check chip-check--soft"><input type="radio" name="tageszeit" value="${l}"><span>${l}</span></label>`)}
    </div>
    <div class="booking__actions"><button type="button" class="btn btn--dark btn--block" data-bk-next>Weiter</button></div>
  </fieldset>

  <fieldset class="booking__step" data-bk-step="3">
    <legend class="booking__q" tabindex="-1">Wie erreiche ich Sie?</legend>
    <p class="booking__summary" data-bk-summary></p>
    <div class="field"><label for="${p}-name">Vor- und Nachname</label><input id="${p}-name" name="name" autocomplete="name" autocapitalize="words" enterkeyhint="next" required aria-describedby="${p}-name-error"><p class="field__error" id="${p}-name-error" data-field-error="name" hidden></p></div>
    <div class="field"><label for="${p}-tel">Telefon</label><input id="${p}-tel" name="telefon" type="tel" inputmode="tel" autocomplete="tel" enterkeyhint="next" placeholder="+43 …" required aria-describedby="${p}-tel-error"><p class="field__error" id="${p}-tel-error" data-field-error="telefon" hidden></p></div>
    <details class="booking__more">
      <summary>${icons.plus}<span>E-Mail oder Nachricht hinzufügen <span class="field__opt">optional</span></span></summary>
      <div class="field"><label for="${p}-mail">E-Mail <span class="field__opt">optional</span></label><input id="${p}-mail" name="email" type="email" inputmode="email" autocomplete="email" enterkeyhint="done" aria-describedby="${p}-mail-error"><p class="field__error" id="${p}-mail-error" data-field-error="email" hidden></p></div>
      <div class="field"><label for="${p}-msg">Kurz zu Ihren Beschwerden</label><textarea id="${p}-msg" name="nachricht" rows="3" placeholder="Zum Beispiel: Knieschmerzen rechts seit drei Wochen, vor allem beim Stiegensteigen." aria-describedby="${p}-msg-hint"></textarea><p class="field__hint" id="${p}-msg-hint">Ein, zwei Sätze genügen. Befunde und Bilder schicken Sie bitte nicht hier mit – bringen Sie sie zum Termin.</p></div>
    </details>
    <label class="consent"><input type="checkbox" name="consent" required aria-describedby="${p}-consent-error"><span>Meine Angaben dürfen zur Terminvereinbarung verwendet werden (<a href="/datenschutz/">Datenschutz</a>).</span></label>
    <p class="field__error" id="${p}-consent-error" data-field-error="consent" hidden></p>
    <p class="booking__error" data-bk-error role="alert" aria-atomic="true"></p>
    <div class="booking__actions"><button type="submit" class="btn btn--dark btn--block">Anfrage senden</button></div>
  </fieldset>

  <div class="booking__step booking__done" data-bk-step="4">
    <span class="booking__done-icon">${icons.check}</span>
    <p class="booking__q" tabindex="-1">Danke<span data-bk-name></span>.</p>
    <p class="booking__text">Ihre Anfrage ist in Ihrem E-Mail-Programm vorbereitet. Schicken Sie sie ab – ich melde mich so bald wie möglich mit einem Terminvorschlag.</p>
    <p class="booking__text">Eilig? Rufen Sie direkt an: <a href="${site.phoneHref}">${site.phone}</a></p>
  </div>
</form>`;
}

function bookingDialog() {
  return html`<dialog class="booking-dialog" id="booking" aria-label="Termin anfragen" data-booking-dialog>${bookingForm()}</dialog>`;
}

export { regionById, conditionBySlug };
