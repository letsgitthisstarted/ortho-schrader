import { html, icons, art, figure } from '../lib.mjs';
import { layout, medicalPageSchema } from '../layout.mjs';
import { sourcesFor } from '../data/sources.mjs';
import { guidesFor } from '../data/guides.mjs';
import { regions } from '../data/site.mjs';
import { conditions } from '../data/conditions.mjs';
import { treatmentBySlug } from '../data/treatments.mjs';
import { twoTone, pageHero, sectionHead, bodyMap, faqSection, ctaPanel, regionPill, artFor, softBreak, pageSources } from '../components.mjs';

const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));

const treatmentLink = (slug) => {
  const t = treatmentBySlug[slug];
  return html`<li><a class="option-link" href="/behandlungen/${slug}/"><span class="option-link__art">${artFor(slug)}</span><span class="option-link__text"><span class="option-link__title">${softBreak(t.name)}</span><span class="option-link__desc">${t.teaser}</span></span>${icons.arrow}</a></li>`;
};

export function conditionPage(c) {
  const region = regionById[c.region];
  const crumbs = [['Beschwerden', '/beschwerden/'], [c.name, `/beschwerden/${c.slug}/`]];

  const body = html`
${pageHero({ crumbs, title: c.h1, tone: c.h1b, lead: c.lead })}

<section class="finder" data-finder>
  <div class="finder__panel">
    <div class="finder__intro">
      <h2 class="display" data-reveal>${twoTone('Wo oder wann', 'schmerzt es?')}</h2>
      <p data-reveal>Eine erste Orientierung. Sie ersetzt keine Untersuchung – hilft aber, Ihre Beschwerden einzuordnen.</p>
    </div>
    <div class="finder__stage">
      <div class="finder__options" role="tablist" aria-label="Wo oder wann schmerzt es?">
        ${c.finder.map(([q], i) => html`<button class="finder__opt${i === 0 ? ' is-active' : ''}" role="tab" id="fd-tab-${i}" aria-selected="${i === 0}" aria-controls="fd-panel-${i}" tabindex="${i === 0 ? 0 : -1}" data-finder-opt="${i}">${q}</button>`)}
      </div>
      <div class="finder__answer">
        ${c.finder.map(([q, a], i) => html`<div class="finder__card${i === 0 ? ' is-active' : ''}" role="tabpanel" id="fd-panel-${i}" aria-labelledby="fd-tab-${i}" data-finder-card="${i}"${i === 0 ? '' : ' hidden'}>
          <p class="finder__card-q">${q}</p>
          <p class="finder__card-a">${a}</p>
        </div>`)}
      </div>
      <div class="finder__figure" aria-hidden="true">
        ${figure({ id: 'cfig', regions, lit: [c.region], marks: [c.region] })}
      </div>
    </div>
  </div>
</section>

<section class="section causes">
  <div class="wrap">
    ${sectionHead({ title: 'Häufige Ursachen', tone: 'und was dahintersteckt.', text: 'Die genaue Ursache kläre ich mit Gespräch, Untersuchung und Ultraschall – meist schon beim ersten Termin.' })}
    <ol class="cause-list">
      ${c.causes.map((x, i) => html`<li class="cause" data-reveal>
        <span class="cause__num">${String(i + 1).padStart(2, '0')}</span>
        <div class="cause__body">
          <h3 class="cause__title">${x.name}</h3>
          <p>${x.text}</p>
        </div>
        <div class="chips">${x.treatments.map((s) => html`<a class="chip chip--outline" href="/behandlungen/${s}/">${treatmentBySlug[s].name}</a>`)}</div>
      </li>`)}
    </ol>
    ${guidesFor(c.slug).map((g) => html`<a class="guide-link" href="/beschwerden/${g.slug}/" data-reveal>
      <span class="guide-link__label">Ausführlich erklärt</span>
      <span class="guide-link__title">${g.name}: Beschwerden, Diagnose und Behandlung</span>
      <span class="guide-link__go" aria-hidden="true">${icons.arrow}</span>
    </a>`)}
  </div>
</section>

<section class="section options">
  <div class="wrap">
    ${sectionHead({ title: 'Ihre Behandlung:', tone: 'so viel wie nötig, so schonend wie möglich.' })}
    <div class="options__grid">
      <div class="options__col options__col--light" data-reveal>
        <p class="options__label">Ohne Operation</p>
        <ul>${c.conservative.map(treatmentLink)}</ul>
        ${c.extraConservative ? html`<ul class="options__extra">${c.extraConservative.map((e) => html`<li>${icons.check}${e}</li>`)}</ul>` : ''}
      </div>
      <div class="options__col options__col--dark" data-reveal>
        <p class="options__label">Mit Operation</p>
        ${c.operative.length ? html`<ul>${c.operative.map(treatmentLink)}</ul>` : ''}
        ${c.network ? html`<div class="options__network"><span class="options__network-art">${art('network')}</span><p>${c.network}</p></div>` : ''}
      </div>
    </div>
  </div>
</section>
${faqSection(c.faq, { title: 'Häufige Fragen', tone: `zu ${c.name}` })}

<div class="wrap page-sources">${pageSources(sourcesFor[c.slug])}</div>

${ctaPanel({ title: `${c.name}?`, tone: 'Lassen Sie es abklären, bevor es chronisch wird.' })}
`;

  return layout({
    path: `/beschwerden/${c.slug}/`,
    title: c.seoTitle,
    description: c.description,
    body,
    crumbs,
    faq: c.faq,
    schema: [medicalPageSchema({
      path: `/beschwerden/${c.slug}/`,
      name: c.seoTitle,
      description: c.description,
      about: c.causes.map((x) => ({ '@type': 'MedicalCondition', name: x.name })),
      sources: sourcesFor[c.slug],
    })],
    bodyClass: 'page-condition',
  });
}

export function conditionsIndex() {
  const crumbs = [['Beschwerden', '/beschwerden/']];
  const body = html`
${pageHero({
  crumbs,
  title: 'Beschwerden',
  tone: 'von Kopf bis Fuß.',
  lead: 'Wählen Sie die Region, in der es schmerzt. Sie finden häufige Ursachen und Ihre Behandlungsmöglichkeiten – ohne und mit Operation.',
  ctas: false,
})}
${bodyMap({ id: 'bodymap', heading: false })}
<section class="section">
  <div class="wrap">
    ${sectionHead({ title: 'Alle Regionen', tone: 'im Überblick.' })}
    <div class="region-grid" data-stagger>
      ${conditions.map((c) => html`<a class="region-card" href="/beschwerden/${c.slug}/">
        <span class="region-card__fig">${figure({ id: `rc-${c.slug}`, regions, lit: [c.region], marks: [c.region] })}</span>
        <span class="region-card__body">
          <span class="region-card__title">${softBreak(c.name)}</span>
          <span class="region-card__text">${c.causes.slice(0, 3).map((x) => x.name.replace(/\s*\(.*\)/, '')).join(', ')} und mehr</span>
        </span>
        <span class="tile__go" aria-hidden="true">${icons.arrow}</span>
      </a>`)}
      <a class="region-card region-card--more" href="/kontakt/#termin" data-booking-open>
        <span class="region-card__fig">${figure({ id: 'rc-andere', regions, marks: [] })}</span>
        <span class="region-card__body">
          <span class="region-card__title">Andere Beschwerden</span>
          <span class="region-card__text">Nicht dabei? Beschreiben Sie es kurz in Ihrer Terminanfrage.</span>
        </span>
        <span class="tile__go" aria-hidden="true">${icons.arrow}</span>
      </a>
    </div>
  </div>
</section>
${ctaPanel()}
`;
  return layout({
    path: '/beschwerden/',
    title: 'Beschwerden von Knie bis Rücken | Orthopäde Salzburg',
    description: 'Knie-, Hüft-, Rücken- und Schulterschmerzen, Tennisellenbogen, Karpaltunnel, Fersensporn: Ursachen und Behandlung beim Orthopäden in Salzburg.',
    body,
    crumbs,
    bodyClass: 'page-conditions',
  });
}
