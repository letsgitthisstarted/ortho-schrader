import { html, icons, figure } from '../lib.mjs';
import { layout, medicalPageSchema } from '../layout.mjs';
import { site, regions } from '../data/site.mjs';
import { treatments, treatmentBySlug } from '../data/treatments.mjs';
import { conditionBySlug } from '../data/conditions.mjs';
import { operation } from '../data/guides.mjs';
import { sourcesFor, focusFor } from '../data/sources.mjs';
import { pageHero, sectionHead, treatmentTile, steps, faqSection, ctaPanel, pageSources, tocMobile } from '../components.mjs';

// In-depth condition page (Kniearthrose, Hüftarthrose): article with table of contents, like the treatment pages.
export function guidePage(g) {
  const parent = conditionBySlug[g.parent];
  const crumbs = [['Beschwerden', '/beschwerden/'], [parent.name, `/beschwerden/${parent.slug}/`], [g.name, `/beschwerden/${g.slug}/`]];
  const toc = [...g.sections.map((s) => [s.id, s.title]), ['faq', 'Häufige Fragen']];

  const body = html`
${pageHero({ crumbs, title: g.h1, tone: g.h1b, lead: g.lead })}

<section class="section article">
  <div class="wrap article__grid">
    <aside class="article__toc" aria-label="Auf dieser Seite">
      <span class="article__toc-fig" aria-hidden="true">${figure({ id: `gfig-${g.slug}`, regions, lit: [g.region], marks: [g.region] })}</span>
      <p class="article__toc-label">Auf dieser Seite</p>
      <ol>${toc.map(([id, title]) => html`<li><a href="#${id}" data-toc>${title}</a></li>`)}</ol>
      <a class="btn btn--dark btn--block" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
    </aside>
    <div class="article__body">
      ${tocMobile(toc)}
      ${g.sections.map((s) => html`<section class="prose-block" id="${s.id}">
        <h2 class="prose-block__title" data-reveal>${s.title}</h2>
        <div class="prose" data-reveal>${s.html}</div>
      </section>`)}
      <aside class="note note--conditions" data-reveal>
        <span class="note__icon">${icons.pin}</span>
        <div><p class="note__title">Andere Ursachen für ${parent.name}</p><p>Nicht jeder Schmerz ist Arthrose. <a href="/beschwerden/${parent.slug}/">Alle häufigen Ursachen für ${parent.name}</a></p></div>
      </aside>
      ${pageSources(sourcesFor[g.slug], { focus: focusFor(g.slug) })}
    </div>
  </div>
</section>

${faqSection(g.faq, { title: 'Häufige Fragen', tone: `zur ${g.name}` })}

<section class="section related">
  <div class="wrap">
    ${sectionHead({ title: 'Behandlungen', tone: `bei ${g.name}.` })}
    <div class="tile-row" data-stagger>
      ${g.treatments.map((s) => treatmentTile(s, { size: 'md', tone: treatmentBySlug[s].group === 'operativ' ? 'dark' : 'light' }))}
    </div>
  </div>
</section>

${ctaPanel({ title: `${g.name}?`, tone: 'Klären wir, was Ihrem Gelenk hilft.' })}
`;

  return layout({
    path: `/beschwerden/${g.slug}/`,
    title: g.seoTitle,
    description: g.description,
    body,
    crumbs,
    faq: g.faq,
    schema: [medicalPageSchema({
      path: `/beschwerden/${g.slug}/`,
      name: g.seoTitle,
      description: g.description,
      about: { '@type': 'MedicalCondition', name: g.name, alternateName: g.slug === 'kniearthrose' ? 'Gonarthrose' : 'Coxarthrose' },
      sources: sourcesFor[g.slug],
    })],
    bodyClass: 'page-guide',
  });
}

// "Ihre Operation": the surgical path from decision to aftercare.
export function operationPage() {
  const crumbs = [['Behandlungen', '/behandlungen/'], ['Ihre Operation', '/operation/']];
  const own = treatments.filter((t) => t.group === 'operativ');

  const body = html`
${pageHero({ crumbs, title: 'Ihre Operation', tone: 'von der Entscheidung bis zur Nachsorge.', lead: operation.lead })}

<section class="section op-path">
  <div class="wrap op-path__grid">
    ${sectionHead({ title: 'Ein Weg,', tone: 'ein Ansprechpartner.', align: 'stack', text: 'Sie müssen nicht zwischen Ordination, Klinik und Nachsorge vermitteln. Wer Sie berät, operiert Sie auch – und sieht Sie danach wieder.' })}
    ${steps(operation.steps)}
  </div>
</section>

<section class="section op-own">
  <div class="wrap">
    ${sectionHead({ title: 'Diese Eingriffe', tone: 'führe ich selbst durch.', link: html`<a class="text-link" href="/behandlungen/#netzwerk">Andere Eingriffe im Netzwerk ${icons.arrow}</a>` })}
    <div class="tile-grid" data-count="${own.length}" data-stagger>
      ${own.map((t) => treatmentTile(t.slug, { size: 'md', tone: 'dark' }))}
    </div>
  </div>
</section>

<section class="section op-places">
  <div class="wrap op-places__grid">
    <a class="op-place" href="${site.clinic.url}" target="_blank" rel="noopener" data-reveal>
      <span class="op-place__label">Operation</span>
      <span class="op-place__title">${site.clinic.name}</span>
      <span class="op-place__text">${site.clinic.city} – hier operiere ich als Belegarzt.</span>
      <span class="op-place__go" aria-hidden="true">${icons.arrowUpRight}</span>
    </a>
    <a class="op-place" href="/kontakt/#anfahrt" data-reveal>
      <span class="op-place__label">Beratung und Nachsorge</span>
      <span class="op-place__title">${site.ordination.name}</span>
      <span class="op-place__text">${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city} – mit Physiotherapie und Trainingstherapie im Haus.</span>
      <span class="op-place__go" aria-hidden="true">${icons.arrow}</span>
    </a>
  </div>
</section>

${faqSection(operation.faq, { title: 'Fragen', tone: 'rund um die Operation' })}

<div class="wrap page-sources">${pageSources([], { focus: focusFor('operation') })}</div>

${ctaPanel({ title: 'Eine Operation steht im Raum?', tone: 'Besprechen wir Ihre Möglichkeiten.' })}
`;

  return layout({
    path: '/operation/',
    title: 'Ihre Operation: Ablauf & Nachsorge | Orthopäde Salzburg',
    description: 'Hüft- und Knieprothese, Arthroskopie, Hand- und Fußchirurgie: So läuft Ihre Operation ab – von der Entscheidung bis zur Nachsorge in Salzburg.',
    body,
    crumbs,
    faq: operation.faq,
    schema: [medicalPageSchema({
      path: '/operation/',
      name: 'Ihre Operation – von der Entscheidung bis zur Nachsorge',
      description: 'Ablauf einer Operation bei Thomas Schrader an der Privatklinik Wehrle-Diakonissen.',
      about: own.map((t) => ({ '@type': 'MedicalProcedure', name: t.name, url: `${site.domain}/behandlungen/${t.slug}/` })),
    })],
    bodyClass: 'page-operation',
  });
}
