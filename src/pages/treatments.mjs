import { html, icons, art, figure } from '../lib.mjs';
import { layout } from '../layout.mjs';
import { site, regions, groups } from '../data/site.mjs';
import { treatments, treatmentBySlug, extras } from '../data/treatments.mjs';
import { conditionBySlug } from '../data/conditions.mjs';
import { twoTone, pageHero, sectionHead, treatmentTile, steps, faqSection, ctaPanel, artFor, figChip } from '../components.mjs';

const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));
const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));

export function treatmentPage(t) {
  const x = extras[t.slug] ?? {};
  const group = groupById[t.group];
  const crumbs = [['Behandlungen', '/behandlungen/'], [t.name, `/behandlungen/${t.slug}/`]];
  const toc = [...t.sections.map((s) => [s.id, s.title]), ['faq', 'Häufige Fragen']];

  const body = html`
${pageHero({
  crumbs,
  title: t.h1,
  tone: x.claim,
  lead: t.lead,
})}

<section class="t-visual">
  <div class="t-visual__panel">
    <div class="t-visual__figure">
      ${figure({ id: 'tfig', regions, lit: t.regions, marks: t.regions })}
      <div class="t-visual__chips" aria-label="Behandelte Regionen">${t.regions.map((id) => figChip(regionById[id]))}</div>
    </div>
    <div class="t-visual__art" aria-hidden="true">${artFor(t.slug)}</div>
    <dl class="t-visual__facts">
      ${t.facts.map(([k, v]) => html`<div class="fact-card fact-card--glass" data-reveal><dt>${k}</dt><dd>${v}</dd></div>`)}
    </dl>
  </div>
</section>

<section class="section article">
  <div class="wrap article__grid">
    <aside class="article__toc" aria-label="Auf dieser Seite">
      <p class="article__toc-label">Auf dieser Seite</p>
      <ol>${toc.map(([id, title]) => html`<li><a href="#${id}" data-toc>${title}</a></li>`)}</ol>
      <a class="btn btn--dark btn--block" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
    </aside>
    <div class="article__body">
      ${t.sections.map((s) => html`<section class="prose-block" id="${s.id}">
        <h2 class="prose-block__title" data-reveal>${s.title}</h2>
        ${s.steps ? steps(s.steps) : html`<div class="prose" data-reveal>${s.html}</div>`}
      </section>`)}
      <aside class="note" data-reveal>
        <span class="note__icon">${icons.euro}</span>
        <div><p class="note__title">Kosten und Kasse</p><p>Als Wahlarzt stelle ich eine Honorarnote, die Sie bei Ihrer Krankenkasse einreichen können. Alle Kosten erfahren Sie vorab. <a href="/wahlarzt-kosten/">So funktioniert die Rückerstattung</a>.</p></div>
      </aside>
    </div>
  </div>
</section>

${faqSection(t.faq, { title: 'Häufige Fragen', tone: `zu ${t.name}` })}

<section class="section related">
  <div class="wrap">
    ${t.conditions?.length ? html`<div class="related__conditions" data-reveal>
      <p class="related__label">Hilft unter anderem bei</p>
      <div class="chips chips--lg">${t.conditions.map((c) => html`<a class="chip" href="/beschwerden/${c}/">${conditionBySlug[c].name}</a>`)}</div>
    </div>` : ''}
    ${sectionHead({ title: 'Das könnte Sie', tone: 'auch interessieren.' })}
    <div class="tile-row">
      ${t.related.map((s) => treatmentTile(s, { size: 'md', tone: treatmentBySlug[s].group === 'operativ' ? 'dark' : 'light' }))}
    </div>
  </div>
</section>

${ctaPanel({ title: 'Ist das der richtige Weg für Sie?', tone: 'Klären wir es gemeinsam.' })}
`;

  return layout({
    path: `/behandlungen/${t.slug}/`,
    title: t.seoTitle,
    description: t.description,
    body,
    crumbs,
    faq: t.faq,
    schema: [{
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      name: t.h1,
      description: t.description,
      howPerformed: t.lead,
      procedureType: t.group === 'operativ' ? 'https://schema.org/SurgicalProcedure' : 'https://schema.org/NoninvasiveProcedure',
      url: `${site.domain}/behandlungen/${t.slug}/`,
    }],
    bodyClass: 'page-treatment',
  });
}

export function treatmentsIndex() {
  const crumbs = [['Behandlungen', '/behandlungen/']];
  const filters = [['alle', 'Alle'], ...groups.map((g) => [g.id, g.label])];
  const network = [
    ['Schulterchirurgie', 'Rotatorenmanschettennaht, Stabilisierung, Gelenkersatz'],
    ['Ellenbogenchirurgie', 'Eingriffe an Sehnen, Nerven und Gelenk'],
    ['Wirbelsäulenchirurgie', 'Bandscheibe, Spinalkanal, Stabilisierung – unter anderem mit der Neurochirurgie im healthlab'],
    ['Kreuzbandersatz', 'Rekonstruktion nach Kreuzbandriss'],
  ];

  const body = html`
${pageHero({
  crumbs,
  title: 'Behandlungen',
  tone: 'von der Spritze bis zum neuen Gelenk.',
  lead: 'Ich behandle das gesamte Spektrum der Orthopädie und Unfallchirurgie – mit dem Grundsatz: konservativ, so lange es sinnvoll ist, operativ, wenn es der bessere Weg ist. Hier finden Sie alle Behandlungen im Überblick.',
})}

<section class="section t-index" data-filter-root>
  <div class="wrap">
    <div class="filter" role="tablist" aria-label="Behandlungen filtern">
      ${filters.map(([id, label], i) => html`<button class="filter__btn${i === 0 ? ' is-active' : ''}" role="tab" aria-selected="${i === 0}" data-filter="${id}">${label}</button>`)}
      <span class="filter__ink" aria-hidden="true" data-filter-ink></span>
    </div>
    ${groups.map((g) => html`<div class="t-group" id="${g.id}" data-group="${g.id}">
      <header class="t-group__head" data-reveal>
        <h2 class="t-group__title display">${g.label}</h2>
        <p>${g.blurb}</p>
      </header>
      <div class="tile-grid">
        ${treatments.filter((t) => t.group === g.id).map((t) => treatmentTile(t.slug, { size: 'md', tone: g.id === 'operativ' ? 'dark' : 'light' }))}
      </div>
    </div>`)}
  </div>
</section>

<section class="section network-index" id="netzwerk">
  <div class="wrap network-index__grid">
    <div>
      ${sectionHead({ title: 'Im Netzwerk', tone: 'mit Spezialist:innen.', align: 'stack', text: 'Nicht jede Operation gehört in jede Hand. Für die folgenden Eingriffe arbeite ich mit spezialisierten Kolleg:innen in Salzburg und in der OUCC in Bayern zusammen. Die Abklärung, die Entscheidung und die Nachbehandlung können bei mir bleiben – Sie haben einen Ansprechpartner.' })}
    </div>
    <ul class="network-index__list">
      ${network.map(([t, d]) => html`<li data-reveal><span class="network-index__art">${art('network')}</span><div><p class="network-index__title">${t}</p><p>${d}</p></div></li>`)}
    </ul>
  </div>
</section>

${ctaPanel({ title: 'Nicht sicher, was Sie brauchen?', tone: 'Genau dafür ist das Erstgespräch da.' })}
`;
  return layout({
    path: '/behandlungen/',
    title: 'Behandlungen – Orthopädie Salzburg | Injektionen, Stoßwelle, Prothetik, Arthroskopie',
    description: 'Alle Behandlungen der Wahlarzt-Ordination Thomas Schrader in Salzburg: Kortison-, Hyaluron- und Eigenblut-Injektionen, Stoßwelle, Ultraschall, Hüft- und Knieprothese, Kniearthroskopie, Hand- und Fußchirurgie.',
    body,
    crumbs,
    bodyClass: 'page-treatments',
  });
}
