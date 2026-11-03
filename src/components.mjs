// Reusable page sections.

import { html, icons, art, treatmentArt, figure, figPos, miniFigure } from './lib.mjs';
import { site, regions, reviews } from './data/site.mjs';
import { treatmentBySlug, extras } from './data/treatments.mjs';
import { conditionBySlug } from './data/conditions.mjs';

export const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));

export const artFor = (slug) => art(treatmentArt[slug]);

export function crumbsNav(crumbs) {
  return html`<nav class="crumbs" aria-label="Brotkrumen"><ol>
    <li><a href="/">Startseite</a></li>
    ${crumbs.map(([name, path], i) => (i === crumbs.length - 1 ? html`<li aria-current="page">${name}</li>` : html`<li><a href="${path}">${name}</a></li>`))}
  </ol></nav>`;
}

// Two-tone headline: first phrase in ink, second phrase in the muted tone.
// Long compounds ("Ellenbogenschmerzen") get a soft hyphen so large type can break at the joint instead of overflowing.
const tt = (x) => (typeof x === 'string' ? softBreak(x) : x);
export const twoTone = (a, b) => html`<span class="tt-a">${tt(a)}</span>${b ? html` <span class="tt-b">${tt(b)}</span>` : ''}`;

export function pageHero({ crumbs, title, tone, lead, ticks = [], ctas = true, aside }) {
  return html`<section class="page-hero">
  <div class="wrap">
    ${crumbs ? crumbsNav(crumbs) : ''}
    <div class="page-hero__grid">
      <h1 class="page-hero__title display" data-split>${twoTone(title, tone)}</h1>
      <div class="page-hero__side" data-reveal>
        ${lead ? html`<p class="page-hero__lead">${lead}</p>` : ''}
        ${ticks.length ? html`<ul class="ticks">${ticks.map(([icon, text]) => html`<li><span class="ticks__icon">${icons[icon]}</span>${text}</li>`)}</ul>` : ''}
        ${aside ?? ''}
        ${ctas ? html`<div class="btn-row">
          <a class="btn btn--dark" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
          <a class="btn btn--ghost" href="${site.phoneHref}">${icons.phone}<span>${site.phone}</span></a>
        </div>` : ''}
      </div>
    </div>
  </div>
</section>`;
}

export function sectionHead({ title, tone, text, id, align = 'split', link }) {
  return html`<header class="section-head section-head--${align}"${id ? ` id="${id}"` : ''}>
    <h2 class="section-head__title display" data-reveal>${twoTone(title, tone)}</h2>
    ${text || link ? html`<div class="section-head__side" data-reveal>${text ? html`<p>${text}</p>` : ''}${link ?? ''}</div>` : ''}
  </header>`;
}

// Long compound names may only break at their natural joint (Eigenblut-therapie, not Eigenblutthera-pie).
export const softBreak = (name) => name.replace(/(Eigenblut|Stoßwellen|Hyaluron|Knie|Hüft|Fuß|Hand|Ellenbogen|Schulter|Rücken)(therapie|säure|arthroskopie|arthrose|prothese|chirurgie|schmerzen)/g, '$1\u00AD$2');

export function treatmentTile(slug, { size = 'sm', tone = 'light' } = {}) {
  const t = treatmentBySlug[slug];
  const x = extras[slug] ?? {};
  return html`<a class="tile tile--${size} tile--${tone}" href="/behandlungen/${slug}/">
    <span class="tile__badges">${(x.badges ?? []).map((b) => html`<span class="badge">${b}</span>`)}</span>
    <span class="tile__art">${artFor(slug)}</span>
    <span class="tile__body">
      <span class="tile__title">${softBreak(t.name)}</span>
      ${size !== 'sm' ? html`<span class="tile__text">${t.teaser}</span>` : ''}
    </span>
    <span class="tile__go" aria-hidden="true">${icons.arrow}</span>
  </a>`;
}

export function pillTile({ href, title, tone, art: pic, attrs = '' }) {
  return html`<a class="pill-tile" href="${href}"${attrs}>
    <span class="pill-tile__text">${twoTone(title, tone)}</span>
    <span class="pill-tile__art">${pic}</span>
    <span class="pill-tile__go" aria-hidden="true">${icons.chevronRight}</span>
  </a>`;
}

export function regionPill(region, condSlug) {
  return pillTile({ href: `/beschwerden/${condSlug}/`, title: region.label, tone: '', art: miniFigure(region) });
}

// Floating label positioned over a figure at a region's chip anchor.
export const figChip = (r, extra = '') => {
  const [x, y, side] = r.chip;
  const p = figPos([x, y]);
  return html`<span class="float-chip float-chip--${side}${extra}" style="left:${p.left}%;top:${p.top}%" data-chip="${r.id}">${r.label}</span>`;
};

// The signature piece: tap where it hurts to see causes and treatments.
export function bodyMap({ id = 'bodymap', heading = true } = {}) {
  return html`<section class="bodymap" id="${id}" data-bodymap>
  <div class="bodymap__panel">
    ${heading ? html`<header class="bodymap__head">
      <h2 class="display" data-reveal>${twoTone('Wo tut es weh?', 'Wählen Sie eine Stelle.')}</h2>
      <p data-reveal>Tippen Sie auf die Stelle am Körper oder wählen Sie eine Region. Sie sehen häufige Ursachen und passende Behandlungen.</p>
    </header>` : ''}
    <p class="sr" data-bodymap-status role="status" aria-live="polite" aria-atomic="true"></p>
    <div class="bodymap__stage">
      <ul class="bodymap__list" role="tablist" aria-label="Körperregionen">
        ${regions.map((r, i) => html`<li role="presentation"><button class="bodymap__region" role="tab" id="${id}-tab-${r.id}" aria-selected="false" aria-controls="${id}-panel-${r.id}" data-region="${r.id}" tabindex="${i === 0 ? 0 : -1}">
          <span class="bodymap__region-label">${r.label}</span>${icons.arrow}
        </button></li>`)}
      </ul>
      <div class="bodymap__figure">
        <p class="bodymap__hint" aria-hidden="true">${icons.tap}<span>Auf eine Stelle tippen</span></p>
        <div class="bodymap__canvas">
          ${figure({ id: `${id}-fig`, regions, marks: regions.map((r) => r.id), interactive: true })}
          <div class="bodymap__chips" aria-hidden="true">${regions.map((r) => figChip(r))}</div>
        </div>
      </div>
      <div class="bodymap__cards">
        <div class="bodymap__card bodymap__card--intro is-active" data-card="intro">
          <p class="bodymap__card-title">Wo haben Sie Beschwerden?</p>
          <p>Wählen Sie Knie, Hüfte, Rücken, Schulter, Ellenbogen, Hand oder Fuß. Für jede Region finden Sie häufige Ursachen und die Behandlungen, die ich anbiete.</p>
        </div>
        ${regions.map((r) => html`<div class="bodymap__card" role="tabpanel" id="${id}-panel-${r.id}" aria-labelledby="${id}-tab-${r.id}" data-card="${r.id}" hidden>
          <p class="bodymap__card-title">${r.label}</p>
          <p class="bodymap__card-blurb">${r.blurb}</p>
          <p class="bodymap__card-label">Häufige Ursachen</p>
          <ul class="bodymap__causes">${r.causes.map((c) => html`<li>${c}</li>`)}</ul>
          <p class="bodymap__card-label">Behandlungen</p>
          <div class="chips">${r.treatments.map((s) => html`<a class="chip" href="/behandlungen/${s}/">${treatmentBySlug[s].name}</a>`)}</div>
          <a class="btn btn--light btn--block" href="/beschwerden/${r.condition}/">Mehr zu ${conditionBySlug[r.condition].name} ${icons.arrow}</a>
        </div>`)}
      </div>
    </div>
  </div>
</section>`;
}

export function steps(items, { compact = false } = {}) {
  return html`<ol class="steps${compact ? ' steps--compact' : ''}">
    ${items.map(([title, text], i) => html`<li class="steps__item" data-reveal>
      <span class="steps__num">${i + 1}</span>
      <div><p class="steps__title">${title}</p><p class="steps__text">${text}</p></div>
    </li>`)}
  </ol>`;
}

export function faqSection(faq, { title = 'Häufige Fragen', tone = '', id = 'faq' } = {}) {
  return html`<section class="faq" id="${id}">
  <div class="wrap faq__grid">
    <h2 class="faq__title display" data-reveal>${twoTone(title, tone)}</h2>
    <div class="faq__list">
      ${faq.map(([q, a]) => html`<details class="acc" data-acc>
        <summary><span>${q}</span><span class="acc__icon" aria-hidden="true">${icons.plus}</span></summary>
        <div class="acc__body"><p>${a}</p></div>
      </details>`)}
    </div>
  </div>
</section>`;
}

// Horizontally scrolling patient voices. Placeholder texts are visibly marked until real,
// consented reviews replace them.
export function reviewsSection() {
  const { items, placeholder, source } = reviews;
  if (placeholder || !items.length) return '';
  return html`<section class="section reviews" data-carousel>
  <div class="wrap reviews__head">
    <h2 class="display" data-reveal>${twoTone('Was Patient:innen', 'über die Behandlung sagen.')}</h2>
    <div class="reviews__side" data-reveal>
      <a class="text-link" href="${source.url}" target="_blank" rel="noopener">${source.label} ${icons.arrowUpRight}</a>
      <div class="reviews__nav">
        <button class="round-btn" type="button" data-carousel-prev aria-label="Vorherige Bewertungen">${icons.arrowLeft}</button>
        <button class="round-btn" type="button" data-carousel-next aria-label="Weitere Bewertungen">${icons.arrow}</button>
      </div>
    </div>
  </div>
  <div class="reviews__viewport" data-carousel-track tabindex="0" aria-label="Patientenstimmen">
    <ul class="reviews__track">
      ${items.map((r) => html`<li class="review">
        ${placeholder ? html`<span class="review__flag">Beispieltext</span>` : ''}
        <span class="review__mark" aria-hidden="true">${icons.quote}</span>
        <blockquote class="review__quote">${r.quote}</blockquote>
        <div class="review__who">
          <span class="review__avatar" aria-hidden="true">${r.photo ? html`<img src="${r.photo}" alt="">` : icons.user}</span>
          <span><span class="review__name">${r.who}</span><span class="review__topic">${r.topic}</span></span>
        </div>
      </li>`)}
      <li class="review review--cta">
        <p class="review__cta-title">Sie waren bei mir in Behandlung?</p>
        <p>Ich freue mich über Ihre Rückmeldung – sie hilft anderen Patient:innen bei der Wahl.</p>
        <a class="btn btn--light" href="${source.url}" target="_blank" rel="noopener">Bewertung schreiben ${icons.arrowUpRight}</a>
      </li>
    </ul>
  </div>
</section>`;
}

export function ctaPanel({ title = 'Lernen wir uns kennen.', tone = 'Ich nehme mir Zeit für Sie.', text = 'Termine ohne Überweisung, in der Regel zeitnah. Rufen Sie an oder schicken Sie mir eine Terminanfrage.' } = {}) {
  return html`<section class="cta">
  <div class="cta__panel">
    <div class="cta__grid">
      <div>
        <h2 class="cta__title display" data-reveal>${twoTone(title, tone)}</h2>
        <p class="cta__text" data-reveal>${text}</p>
        <div class="btn-row" data-reveal>
          <a class="btn btn--light" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
          <a class="btn btn--ghost-light" href="${site.phoneHref}">${icons.phone}<span>${site.phone}</span></a>
        </div>
      </div>
      <div class="cta__card" data-reveal>
        <p class="cta__card-label">${icons.pin} Ordination</p>
        <p class="cta__card-title">${site.ordination.name}</p>
        <p>${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city}</p>
        <a class="text-link text-link--light" href="${site.ordination.maps}" target="_blank" rel="noopener">Route planen ${icons.arrowUpRight}</a>
      </div>
    </div>
  </div>
</section>`;
}

// Photo slot. Shows a calm, branded placeholder until a real image is dropped in.
export function photo({ label, ratio = '4/5', className = '', src }) {
  if (src) return html`<figure class="photo ${className}" style="aspect-ratio:${ratio}"><img src="${src}" alt="${label}" loading="lazy"></figure>`;
  return html`<figure class="photo photo--placeholder ${className}" style="aspect-ratio:${ratio}" role="img" aria-label="${label}">
    <span class="photo__grain" aria-hidden="true"></span>
    <figcaption class="photo__label">${icons.sparkle}<span>Foto folgt: ${label}</span></figcaption>
  </figure>`;
}

// "Stand: 3. November 2026" – dates are written out the way patients read them.
const longDate = (iso) => new Date(`${iso}T12:00:00`).toLocaleDateString('de-AT', { day: 'numeric', month: 'long', year: 'numeric' });

// Closing block of every medical page: the guidelines it rests on and who answers for it.
// "Medizinisch geprüft von" only appears once site.content.medicallyReviewed is set; until then it says who is responsible.
export function pageSources(list = [], { focus } = {}) {
  const c = site.content;
  return html`<aside class="sources" aria-label="Quellen und medizinische Prüfung">
  ${list.length ? html`<div class="sources__list">
    <p class="sources__label">Quellen &amp; weiterführende Informationen</p>
    <ul>${list.map((s) => html`<li><a href="${s.url}" target="_blank" rel="noopener"><span class="sources__title">${s.title}</span><span class="sources__meta">${s.meta}</span>${icons.arrowUpRight}</a></li>`)}</ul>
  </div>` : ''}
  <div class="byline">
    <img class="byline__photo" src="/assets/img/portrait-thomas-schrader.jpg" alt="" width="76" height="76" loading="lazy">
    <div class="byline__text">
      <p class="byline__label">${c.medicallyReviewed ? 'Medizinisch geprüft von' : 'Inhaltlich verantwortlich'}</p>
      <p class="byline__name"><a href="/ueber-mich/">${site.name}</a></p>
      <p class="byline__meta">${site.role}${focus ? ` · ${focus}` : ''} · Zuletzt aktualisiert am ${longDate(c.medicallyReviewed ? c.reviewed : c.updated)}</p>
    </div>
  </div>
</aside>`;
}

// What to bring to the first appointment – shown on the costs and contact pages.
export const firstVisit = [
  ['E-Card', 'oder Ihre Versicherungskarte – für die Rückerstattung.'],
  ['Befunde und Arztbriefe', 'zu Ihren Beschwerden, auch ältere.'],
  ['Röntgen-, MRT- oder CT-Bilder', 'auf CD oder als Zugangslink, nicht nur den schriftlichen Befund.'],
  ['Ihre Medikamente', 'als Liste, mit bekannten Allergien.'],
  ['Bequeme Kleidung', '– damit sich das betroffene Gelenk gut untersuchen lässt, fürs Knie etwa eine kurze Hose.'],
];

export function firstVisitList({ compact = false } = {}) {
  return html`<ul class="bring${compact ? ' bring--compact' : ''}">
    ${firstVisit.map(([t, d]) => html`<li data-reveal><span class="bring__icon">${icons.check}</span><span><strong>${t}</strong> ${d}</span></li>`)}
  </ul>`;
}
