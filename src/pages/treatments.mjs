import { html, icons, art, figure } from '../lib.mjs';
import { layout, medicalPageSchema } from '../layout.mjs';
import { sourcesFor } from '../data/sources.mjs';
import { site, regions, groups } from '../data/site.mjs';
import { treatments, treatmentBySlug, extras } from '../data/treatments.mjs';
import { conditionBySlug } from '../data/conditions.mjs';
import { details } from '../data/treatment-details.mjs';
import { twoTone, pageHero, sectionHead, treatmentTile, steps, faqSection, ctaPanel, artFor, figChip, pageSources } from '../components.mjs';

const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));
const groupById = Object.fromEntries(groups.map((g) => [g.id, g]));
// Injections pass through the skin; shockwave, ultrasound and the advisory pages do not.
const percutaneous = ['kortison-infiltration', 'hyaluronsaeure', 'eigenbluttherapie', 'wirbelsaeulen-infiltration'];

export function treatmentPage(t) {
  const x = extras[t.slug] ?? {};
  const group = groupById[t.group];
  const costText = t.slug === 'hyaluronsaeure'
    ? 'Hyaluronsäure wird von gesetzlichen Krankenkassen in der Regel nicht übernommen. Eine mögliche Erstattung durch Ihre private Zusatzversicherung klären Sie bitte vorab. Sie erhalten vor Behandlungsbeginn eine Kostenaufstellung.'
    : t.slug === 'eigenbluttherapie'
      ? 'Die Eigenbluttherapie ist eine Privatleistung. Eine mögliche Erstattung durch Ihre private Zusatzversicherung klären Sie bitte vorab. Sie erhalten die Kosten vor Beginn schriftlich.'
      : t.group === 'operativ'
        ? 'Die Kosten für Operation, Klinikaufenthalt und Nachsorge besprechen wir vorab. Ob Ihre Versicherung diese übernimmt und welcher Eigenanteil bleibt, muss vor dem Eingriff geklärt werden.'
        : 'Das Honorar und mögliche Zusatzkosten besprechen wir vor Behandlungsbeginn. Ob Ihre Krankenkasse einen Teil erstattet, hängt von der Leistung und Ihrem Versicherungsschutz ab.';
  const crumbs = [['Behandlungen', '/behandlungen/'], [t.name, `/behandlungen/${t.slug}/`]];
  const more = details[t.slug] ?? [];
  const toc = [...t.sections.map((s) => [s.id, s.title]), ...(more.length ? [['mehr-wissen', 'Ausführlich erklärt']] : []), ['faq', 'Häufige Fragen']];

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
      ${more.length ? html`<section class="prose-block" id="mehr-wissen">
        <h2 class="prose-block__title" data-reveal>Ausführlich erklärt</h2>
        <p class="prose-block__intro" data-reveal>Für alle, die es genauer wissen möchten. Öffnen Sie die Themen, die Sie interessieren.</p>
        <div class="more-list">
          ${more.map(([title, body]) => html`<details class="acc acc--more" data-acc>
            <summary><h3>${title}</h3><span class="acc__icon" aria-hidden="true">${icons.plus}</span></summary>
            <div class="acc__body prose">${body}</div>
          </details>`)}
        </div>
      </section>` : ''}
      <div class="notes">
      ${t.conditions?.length ? html`<aside class="note note--conditions" data-reveal>
        <span class="note__icon">${icons.pin}</span>
        <div><p class="note__title">Hilft unter anderem bei</p>
          <div class="chips">${t.conditions.map((c) => html`<a class="chip chip--outline" href="/beschwerden/${c}/">${conditionBySlug[c].name}</a>`)}</div>
        </div>
      </aside>` : ''}
      <aside class="note" data-reveal>
        <span class="note__icon">${icons.clock}</span>
        <div><p class="note__title">Ohne Zeitdruck, ganzheitlich betrachtet</p><p>Für Ihre Entscheidung gibt es keinen Zeitdruck. Ich betrachte nicht nur die schmerzende Stelle, sondern auch Haltung, Bewegung, Alltag und Ihre Ziele – und erkläre Ihnen alle Möglichkeiten, ohne und mit Operation. Fragen sind jederzeit willkommen, auch nach dem Termin.</p></div>
      </aside>
      <aside class="note" data-reveal>
        <span class="note__icon">${icons.euro}</span>
        <div><p class="note__title">Kosten und Kasse</p><p>${costText} <a href="/wahlarzt-kosten/">So funktioniert die Rückerstattung</a>.</p></div>
      </aside>
      ${t.group === 'operativ' ? html`<aside class="note" data-reveal>
        <span class="note__icon">${icons.layers}</span>
        <div><p class="note__title">Ihre Operation Schritt für Schritt</p><p>Von der Entscheidung über die Operation an der ${site.clinic.name} bis zur Nachsorge in der Ordination. <a href="/operation/">So läuft Ihre Operation ab</a>.</p></div>
      </aside>` : ''}
      </div>
      ${pageSources(sourcesFor[t.slug])}
    </div>
  </div>
</section>

${faqSection(t.faq, { title: 'Häufige Fragen', tone: `zu ${t.name}` })}

<section class="section related">
  <div class="wrap">
    ${sectionHead({ title: 'Das könnte Sie', tone: 'auch interessieren.' })}
    <div class="tile-row" data-stagger>
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
    schema: [medicalPageSchema({
      path: `/behandlungen/${t.slug}/`,
      name: t.seoTitle,
      description: t.description,
      about: { '@id': `${site.domain}/behandlungen/${t.slug}/#procedure` },
      sources: sourcesFor[t.slug],
    }), {
      '@context': 'https://schema.org',
      '@type': 'MedicalProcedure',
      '@id': `${site.domain}/behandlungen/${t.slug}/#procedure`,
      name: t.h1,
      description: t.description,
      howPerformed: t.lead,
      procedureType: t.group === 'operativ' ? 'https://schema.org/SurgicalProcedure' : percutaneous.includes(t.slug) ? 'https://schema.org/PercutaneousProcedure' : 'https://schema.org/NoninvasiveProcedure',
      bodyLocation: t.regions.map((id) => regionById[id].label).join(', '),
      relevantSpecialty: 'https://schema.org/Musculoskeletal',
      url: `${site.domain}/behandlungen/${t.slug}/`,
    }],
    bodyClass: 'page-treatment',
  });
}

export function treatmentsIndex() {
  const crumbs = [['Behandlungen', '/behandlungen/']];
  const filters = [['alle', 'Alle'], ...groups.map((g) => [g.id, g.label])];
  const network = [
    ['Schulterchirurgie', 'Rotatorenmanschettennaht, Stabilisierung, Gelenkersatz', 'shoulder'],
    ['Ellenbogenchirurgie', 'Eingriffe an Sehnen, Nerven und Gelenk', 'elbow'],
    ['Wirbelsäulenchirurgie', 'Bandscheibe, Spinalkanal, Stabilisierung – unter anderem mit der Neurochirurgie im healthlab', 'spine'],
    ['Kreuzbandersatz', 'Rekonstruktion nach Kreuzbandriss', 'acl'],
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
    <div class="filter" role="group" aria-label="Behandlungen filtern">
      ${filters.map(([id, label], i) => html`<button class="filter__btn${i === 0 ? ' is-active' : ''}" aria-pressed="${i === 0}" data-filter="${id}">${label}</button>`)}
      <span class="filter__ink" aria-hidden="true" data-filter-ink></span>
    </div>
    ${groups.map((g) => html`<div class="t-group" id="${g.id}" data-group="${g.id}">
      <header class="t-group__head" data-reveal>
        <h2 class="t-group__title display">${g.label}</h2>
        <p>${g.blurb}</p>
        ${g.id === 'operativ' ? html`<a class="text-link" href="/operation/">So läuft Ihre Operation ab ${icons.arrow}</a>` : ''}
      </header>
      ${((items) => html`<div class="tile-grid" data-count="${items.length}" data-stagger>
        ${items.map((t) => treatmentTile(t.slug, { size: 'md', tone: g.id === 'operativ' ? 'dark' : 'light' }))}
      </div>`)(treatments.filter((t) => t.group === g.id))}
    </div>`)}
  </div>
</section>

<section class="section network-index" id="netzwerk">
  <div class="wrap network-index__grid">
    <div>
      ${sectionHead({ title: 'Im Netzwerk', tone: 'mit Spezialist:innen.', align: 'stack', text: 'Nicht jede Operation gehört in jede Hand. Für die folgenden Eingriffe arbeite ich mit spezialisierten Kolleg:innen in Salzburg und in der OUCC in Bayern zusammen. Die Abklärung, die Entscheidung und die Nachbehandlung können bei mir bleiben – Sie haben einen Ansprechpartner.' })}
    </div>
    <ul class="network-index__list">
      ${network.map(([t, d, a]) => html`<li data-reveal><span class="network-index__art">${art(a)}</span><div><p class="network-index__title">${t}</p><p>${d}</p></div></li>`)}
    </ul>
  </div>
</section>

${ctaPanel({ title: 'Nicht sicher, was Sie brauchen?', tone: 'Genau dafür ist das Erstgespräch da.' })}
`;
  return layout({
    path: '/behandlungen/',
    title: 'Behandlungen | Orthopäde Thomas Schrader, Salzburg',
    description: 'Injektionen, Stoßwelle, Ultraschall, Hüft- und Knieprothese, Kniearthroskopie, Hand- und Fußchirurgie: alle Behandlungen beim Orthopäden in Salzburg.',
    body,
    crumbs,
    bodyClass: 'page-treatments',
  });
}
