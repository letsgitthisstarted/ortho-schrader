import { html, icons, art } from '../lib.mjs';
import { layout, physicianSchema } from '../layout.mjs';
import { site, homeFaq } from '../data/site.mjs';
import { twoTone, sectionHead, treatmentTile, pillTile, bodyMap, faqSection, ctaPanel, photo } from '../components.mjs';

const journey = [
  ['Zuhören', 'Ein ausführliches Erstgespräch: Wo tut es weh, seit wann, wobei? Ihre Geschichte liefert die wichtigsten Hinweise – dafür nehme ich mir Zeit.', 'speech'],
  ['Untersuchen', 'Gründliche Untersuchung und Ultraschall direkt in der Ordination. Den Befund sehen Sie gemeinsam mit mir am Bildschirm.', 'probe'],
  ['Behandeln', 'Ein Plan, der zu Ihnen passt: ohne Operation, wo es möglich ist. Mit Operation, wenn es der bessere Weg ist.', 'joint'],
  ['Begleiten', 'Kontrollen, Nachsorge und Reha, bis Sie Ihr Ziel erreicht haben. Physiotherapie und Training finden Sie im selben Haus.', 'route'],
];

export function home() {
  const body = html`
<section class="hero">
  <div class="wrap">
    <p class="hero__kicker" data-reveal>${site.name}, ${site.role}</p>
    <div class="hero__grid">
      <h1 class="hero__title display" data-split>${twoTone('Ihr Orthopäde in Salzburg.', 'Zuhören. Verstehen. Behandeln.')}</h1>
      <div class="hero__side" data-reveal>
        <ul class="ticks">
          <li><span class="ticks__icon">${icons.calendar}</span>Ohne Überweisung, Termine in der Regel zeitnah</li>
          <li><span class="ticks__icon">${icons.user}</span>Ein ausführliches Gespräch – ich nehme mir Zeit für Sie</li>
          <li><span class="ticks__icon">${icons.layers}</span>Behandlung ohne und mit Operation</li>
        </ul>
        <p class="hero__practice">Wahlarzt · ${site.ordination.name}<br>${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city} · Termine nach Vereinbarung</p>
        <div class="btn-row">
          <a class="btn btn--dark" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
          <a class="btn btn--ghost" href="#bodymap">Wo tut es weh?</a>
        </div>
      </div>
    </div>
  </div>

</section>

<section class="section about-home">
  <div class="wrap about-home__grid">
    <div class="doctor-card" data-reveal>
      ${photo({ label: 'Porträt Thomas Schrader', ratio: '4/5', src: '/assets/img/portrait-thomas-schrader.jpg' })}
      <div class="doctor-card__tag">
        <p class="doctor-card__name">${site.name}</p>
        <ul><li>Orthopädie</li><li>Unfallchirurgie</li><li>Sportmedizin</li><li>Notfallmedizin</li></ul>
      </div>
    </div>
    <div class="about-home__copy">
      <h2 class="display" data-reveal>${twoTone('Chirurg, Sportmediziner, Notarzt.', 'Und jemand, der zuhört.')}</h2>
      <p class="about-home__lead" data-reveal>„Während meiner Weiterbildung zum Facharzt wurde mir klar, dass meine Patientenbetreuung immer auf Augenhöhe und in ehrlicher, souveräner Art und Weise stattfinden soll.“</p>
      <p data-reveal>Seit über 25 Jahren arbeite ich als Arzt, seit 2009 als Facharzt. Weil ich ohne und mit Operation behandle, kann ich Ihnen beide Wege erklären – und wir entscheiden gemeinsam, welcher zu Ihnen passt.</p>
      <dl class="years" data-reveal>
        <div><dt>1999</dt><dd>ärztlich tätig</dd></div>
        <div><dt>2001</dt><dd>Notarzt</dd></div>
        <div><dt>2009</dt><dd>Facharzt</dd></div>
        <div><dt>2019</dt><dd>Ordination Salzburg</dd></div>
      </dl>
      <a class="text-link" href="/ueber-mich/" data-reveal>Mehr über mich ${icons.arrow}</a>
    </div>
  </div>
</section>

${bodyMap()}

<section class="story" data-story style="--steps:${journey.length}">
  <div class="story__sticky">
    <div class="story__panel">
      <div class="story__head">
        <h2 class="display">${twoTone('Ihr Weg', 'in meiner Ordination.')}</h2>
      </div>
      <div class="story__stage">
        <div class="story__texts">
          ${journey.map(([t, x], i) => html`<div class="story__text${i === 0 ? ' is-active' : ''}" data-story-text>
            <p class="story__num">Schritt ${i + 1} von ${journey.length}</p>
            <p class="story__title">${t}</p>
            <p class="story__body">${x}</p>
          </div>`)}
        </div>
        <div class="story__visual" aria-hidden="true">
          <svg class="story__dial" viewBox="0 0 200 200">
            <circle class="story__track" cx="100" cy="100" r="96"/>
            <circle class="story__progress" cx="100" cy="100" r="96" pathLength="${journey.length}" transform="rotate(-90 100 100)" style="stroke-dasharray:1 ${journey.length}" data-story-progress/>
            <circle class="story__dash" cx="100" cy="100" r="82"/>
            ${journey.map((_, i) => { const a = ((i + 1) / journey.length * 360 - 90) * Math.PI / 180; return html`<circle class="story__tick${i === 0 ? ' is-active' : ''}" cx="${(100 + 96 * Math.cos(a)).toFixed(1)}" cy="${(100 + 96 * Math.sin(a)).toFixed(1)}" r="4.5" data-story-tick/>`; })}
          </svg>
          <div class="story__glass"></div>
          ${journey.map(([, , a], i) => html`<div class="story__art${i === 0 ? ' is-active' : ''}" data-story-art>${art(a)}</div>`)}
        </div>
      </div>
      <ol class="story__index" aria-hidden="true">
        ${journey.map(([t], i) => html`<li class="${i === 0 ? 'is-active' : ''}" data-story-dot>${t}</li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="section treatments-home" id="behandlungen">
  <div class="wrap">
    ${sectionHead({
      title: 'Erst erhalten,', tone: 'dann ersetzen.',
      text: 'Viele Beschwerden lassen sich ohne Operation behandeln. Wenn eine Operation sinnvoll ist, planen wir sie gemeinsam und in Ruhe.',
      link: html`<a class="text-link" href="/behandlungen/">Alle Behandlungen ${icons.arrow}</a>`,
    })}

    <div class="bento-label" data-reveal><span>Ohne Operation</span></div>
    <div class="bento" data-stagger>
      ${treatmentTile('stosswellentherapie', { size: 'lg', tone: 'light' })}
      ${treatmentTile('kortison-infiltration', { tone: 'light' })}
      ${treatmentTile('hyaluronsaeure', { tone: 'light' })}
      ${treatmentTile('eigenbluttherapie', { tone: 'light' })}
      ${treatmentTile('wirbelsaeulen-infiltration', { tone: 'light' })}
    </div>
    <div class="pill-row" data-stagger>
      ${pillTile({ href: '/behandlungen/arthrosetherapie/', title: 'Arthrose', tone: 'ohne OP behandeln', art: html`<span class="pill-tile__ico">${art('joint')}</span>` })}
      ${pillTile({ href: '/behandlungen/ultraschall/', title: 'Ultraschall', tone: 'beim ersten Termin', art: html`<span class="pill-tile__ico">${art('probe')}</span>` })}
    </div>

    <div class="bento-label" data-reveal><span>Mit Operation</span></div>
    <div class="bento bento--flip" data-stagger>
      ${treatmentTile('hueftprothese', { size: 'lg', tone: 'dark' })}
      ${treatmentTile('knieprothese', { tone: 'dark' })}
      ${treatmentTile('kniearthroskopie', { tone: 'dark' })}
      ${treatmentTile('handchirurgie', { tone: 'dark' })}
      ${treatmentTile('fusschirurgie', { tone: 'dark' })}
    </div>
  </div>
</section>




<section class="section network" id="netzwerk">
  <div class="wrap">
    ${sectionHead({ title: 'Kurze Wege,', tone: 'gutes Netzwerk.', text: 'Diagnose, Therapie, Operation und Nachsorge greifen ineinander. Wo ein anderes Fachgebiet gefragt ist, arbeite ich mit spezialisierten Kolleg:innen zusammen.' })}
    <div class="network__grid">
      <article class="net-card" data-reveal>
        <p class="net-card__kicker">${icons.door} Ordination</p>
        <h3 class="net-card__title">${site.ordination.name}</h3>
        <p>Medizin, Therapie und Training unter einem Dach: Physiotherapie, medizinische Trainingstherapie, ambulante Reha, Orthopädietechnik und Neurochirurgie im selben Haus.</p>
        <p class="net-card__meta">${site.ordination.street}, ${site.ordination.city}</p>
      </article>
      <article class="net-card" data-reveal>
        <p class="net-card__kicker">${icons.shield} Operationen</p>
        <h3 class="net-card__title">${site.clinic.name}</h3>
        <p>Hüft- und Knieprothesen, Kniearthroskopien und kleinere Eingriffe an Hand und Fuß führe ich hier als Belegarzt selbst durch.</p>
        <a class="text-link" href="${site.clinic.url}" target="_blank" rel="noopener">Zur Klinik ${icons.arrowUpRight}</a>
      </article>
      <article class="net-card" data-reveal>
        <p class="net-card__kicker">${icons.pin} Bayern</p>
        <h3 class="net-card__title">${site.bavaria.short}</h3>
        <p>In der OUCC-Gemeinschaftspraxis im ${site.bavaria.location}, in der ich als Facharzt tätig bin, arbeite ich mit Spezialist:innen für Schulter, Wirbelsäule und Kreuzband zusammen – dort auch für gesetzlich Versicherte aus Deutschland.</p>
        <a class="text-link" href="${site.bavaria.url}" target="_blank" rel="noopener">OUCC-Profil ${icons.arrowUpRight}</a>
      </article>
    </div>
  </div>
</section>

<section class="wahlarzt-home">
  <div class="wahlarzt-home__panel">
    <div class="wahlarzt-home__head">
      <h2 class="display" data-reveal>${twoTone('Wahlarzt & Kosten:', 'vorab gut informiert.')}</h2>
      <p data-reveal>Sie bezahlen die Behandlung zunächst selbst. Für erstattungsfähige Leistungen übernimmt Ihre Krankenkasse einen Teil nach ihrem Tarif. Fragen Sie das Honorar gerne vor Ihrem Termin an.</p>
      <a class="btn btn--light" href="/wahlarzt-kosten/" data-reveal>So funktioniert die Rückerstattung</a>
    </div>
    <div class="wahlarzt-home__facts">
      <div class="fact-card" data-reveal><p class="fact-card__big">Direkt</p><p>Ohne Überweisung – Sie können direkt zu mir kommen.</p></div>
      <div class="fact-card" data-reveal><p class="fact-card__big">bis 80 %</p><p>des Kassentarifs erstattet Ihre Krankenkasse (ÖGK, BVAEB, SVS).</p></div>
      <div class="fact-card" data-reveal><p class="fact-card__big">Zeitnah</p><p>Termine in der Regel zeitnah, bei akuten Beschwerden nach Möglichkeit kurzfristig.</p></div>
    </div>
  </div>
</section>

${faqSection(homeFaq, { title: 'Häufige Fragen', tone: '' })}

${ctaPanel()}
`;

  return layout({
    path: '/',
    title: 'Orthopäde in Salzburg | Thomas Schrader, Wahlarzt im healthlab',
    description: 'Wahlarzt für Orthopädie und Unfallchirurgie in Salzburg: Behandlung ohne und mit Operation, mit Zeit für Sie. Termine ohne Überweisung im healthlab.',
    body,
    faq: homeFaq,
    schema: [physicianSchema()],
    bodyClass: 'page-home',
  });
}
