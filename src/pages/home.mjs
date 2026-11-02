import { html, icons, art } from '../lib.mjs';
import { layout, physicianSchema } from '../layout.mjs';
import { site, regions, homeFaq } from '../data/site.mjs';
import { conditions, diagnoses } from '../data/conditions.mjs';
import { twoTone, sectionHead, treatmentTile, pillTile, regionPill, bodyMap, faqSection, ctaPanel, photo, reviewsSection } from '../components.mjs';

const regionById = Object.fromEntries(regions.map((r) => [r.id, r]));

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
      <h1 class="hero__title display" data-split>${twoTone('Orthopädie in Salzburg,', 'mit Zeit für Sie.')}</h1>
      <div class="hero__side" data-reveal>
        <ul class="ticks">
          <li><span class="ticks__icon">${icons.calendar}</span>Ohne Überweisung, Termine in der Regel zeitnah</li>
          <li><span class="ticks__icon">${icons.user}</span>Ein ausführliches Gespräch – ich nehme mir Zeit für Sie</li>
          <li><span class="ticks__icon">${icons.layers}</span>Behandlung ohne und mit Operation aus einer Hand</li>
        </ul>
        <div class="btn-row">
          <a class="btn btn--dark" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
          <a class="btn btn--ghost" href="#bodymap">Wo tut es weh?</a>
        </div>
      </div>
    </div>
  </div>

  <div class="wrap hero__photo" data-reveal>
    ${photo({ label: 'Thomas Schrader im Gespräch mit einem Patienten', ratio: '21/9' })}
  </div>
</section>

<section class="section about-home">
  <div class="wrap about-home__grid">
    <div class="doctor-card" data-reveal>
      ${photo({ label: 'Porträt Thomas Schrader', ratio: '4/5' })}
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
          <div class="story__orb"></div>
          ${journey.map(([, , a], i) => html`<div class="story__art${i === 0 ? ' is-active' : ''}" data-story-art>${art(a)}</div>`)}
        </div>
      </div>
      <ol class="story__index" aria-hidden="true">
        ${journey.map(([t], i) => html`<li class="${i === 0 ? 'is-active' : ''}" data-story-dot>${t}</li>`)}
      </ol>
    </div>
  </div>
</section>

<section class="section diagnoses">
  <div class="wrap diagnoses__grid">
    <div class="diagnoses__reel" aria-hidden="true">
      <div class="diagnoses__track">
        ${[0, 1].map(() => html`<ul>${diagnoses.map((d) => html`<li>${d}</li>`)}</ul>`)}
      </div>
      <div class="diagnoses__float">
        <span class="diagnoses__float-art">${art('speech')}</span>
        <span class="diagnoses__float-label">Zuhören. Erklären. Gemeinsam entscheiden.</span>
      </div>
    </div>
    <div class="diagnoses__copy">
      <h2 class="display" data-reveal>${twoTone('Von Arthrose bis Zerrung.', 'Zuerst höre ich zu.')}</h2>
      <p data-reveal>Kniearthrose, Fersensporn, Kalkschulter oder Karpaltunnelsyndrom: Hinter jeder Diagnose steht ein Mensch mit eigenen Fragen und Zielen. Ich nehme mir die Zeit, Ihnen zuzuhören, alles verständlich zu erklären und gemeinsam mit Ihnen den passenden Weg zu finden.</p>
      <div class="btn-row" data-reveal>
        <a class="btn btn--dark" href="/beschwerden/">Beschwerden finden</a>
        <a class="btn btn--ghost" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
      </div>
    </div>
  </div>
</section>

${bodyMap()}

<section class="section treatments-home" id="behandlungen">
  <div class="wrap">
    ${sectionHead({
      title: 'Erst erhalten,', tone: 'dann ersetzen.',
      text: 'Viele Beschwerden lassen sich ohne Operation behandeln. Ist eine Operation der bessere Weg, operiere ich selbst – und begleite Sie bis zur Nachsorge.',
      link: html`<a class="text-link" href="/behandlungen/">Alle Behandlungen ${icons.arrow}</a>`,
    })}

    <div class="bento-label" data-reveal><span>Ohne Operation</span></div>
    <div class="bento">
      ${treatmentTile('stosswellentherapie', { size: 'lg', tone: 'light' })}
      ${treatmentTile('kortison-infiltration', { tone: 'light' })}
      ${treatmentTile('hyaluronsaeure', { tone: 'light' })}
      ${treatmentTile('eigenbluttherapie', { tone: 'light' })}
      ${treatmentTile('wirbelsaeulen-infiltration', { tone: 'light' })}
    </div>
    <div class="pill-row">
      ${pillTile({ href: '/behandlungen/arthrosetherapie/', title: 'Arthrose', tone: 'ohne OP behandeln', art: html`<span class="pill-tile__ico">${art('joint')}</span>` })}
      ${pillTile({ href: '/behandlungen/ultraschall/', title: 'Ultraschall', tone: 'beim ersten Termin', art: html`<span class="pill-tile__ico">${art('probe')}</span>` })}
    </div>

    <div class="bento-label" data-reveal><span>Mit Operation</span></div>
    <div class="bento bento--flip">
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

${reviewsSection()}

<section class="wahlarzt-home">
  <div class="wahlarzt-home__panel">
    <div class="wahlarzt-home__head">
      <h2 class="display" data-reveal>${twoTone('Wahlarzt heißt:', 'Zeit für Ihr Anliegen.')}</h2>
      <p data-reveal>Als Wahlarzt kann ich mir für jeden Termin die Zeit nehmen, die Ihr Anliegen braucht. Einen Teil des Honorars erhalten Sie von Ihrer Krankenkasse zurück.</p>
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
    title: 'Orthopäde in Salzburg – Thomas Schrader | Wahlarzt für Orthopädie & Unfallchirurgie',
    description: 'Wahlarzt für Orthopädie und Unfallchirurgie in Salzburg: Stoßwelle, Infiltrationen, Arthrosetherapie, Hüft- und Knieprothesen, Kniearthroskopie. Termine ohne Überweisung im healthlab Salzburg.',
    body,
    faq: homeFaq,
    schema: [physicianSchema()],
    bodyClass: 'page-home',
  });
}
