import { html, icons } from '../lib.mjs';
import { layout, physicianSchema, bookingForm } from '../layout.mjs';
import { site, timeline, credentials } from '../data/site.mjs';
import { twoTone, pageHero, sectionHead, steps, faqSection, ctaPanel, photo, crumbsNav } from '../components.mjs';

// ───────────────────────────── Über mich

export function about() {
  const crumbs = [['Über mich', '/ueber-mich/']];
  const body = html`
<section class="page-hero about-hero">
  <div class="wrap">
    ${crumbsNav(crumbs)}
    <div class="about-hero__grid">
      <div>
        <h1 class="page-hero__title display" data-split>${twoTone(site.name, 'Facharzt für Orthopädie und Unfallchirurgie.')}</h1>
        <p class="page-hero__lead" data-reveal>Chirurg, Sportmediziner und seit 2001 Notarzt. Geboren in München, zu Hause in Salzburg – und überzeugt davon, dass gute Medizin mit Zuhören beginnt.</p>
        <div class="btn-row" data-reveal>
          <a class="btn btn--dark" href="/kontakt/#termin" data-booking-open>Termin anfragen</a>
          <a class="btn btn--ghost" href="#werdegang">Werdegang</a>
        </div>
      </div>
      <div class="about-hero__photo" data-reveal>${photo({ label: 'Porträt Thomas Schrader', ratio: '4/5', src: '/assets/img/portrait-thomas-schrader.jpg' })}</div>
    </div>
  </div>
</section>

<section class="section quote-section">
  <div class="wrap">
    <div class="quote-stage" data-reveal>
      <img class="quote-stage__img" src="/assets/img/op-saal.jpg" alt="" width="1717" height="916" loading="lazy" decoding="async">
      <blockquote class="big-quote">
        <p>„Während meiner Weiterbildung zum Facharzt wurde mir klar, dass meine Patientenbetreuung immer auf Augenhöhe und in ehrlicher, souveräner Art und Weise stattfinden soll.“</p>
        <footer>${site.name}</footer>
      </blockquote>
    </div>
    <div class="philosophy">
      <div class="philosophy__item" data-reveal><p class="philosophy__title">Ich höre zu, bevor ich untersuche.</p><p>Ihre Geschichte – wo, wann, wobei es schmerzt – ist oft der wichtigste Teil der Diagnose.</p></div>
      <div class="philosophy__item" data-reveal><p class="philosophy__title">Ich erkläre, bevor ich behandle.</p><p>Befunde zeige ich Ihnen am Ultraschall und erkläre sie verständlich. Sie entscheiden mit.</p></div>
      <div class="philosophy__item" data-reveal><p class="philosophy__title">Ich empfehle, was zu Ihnen passt.</p><p>Weil ich ohne und mit Operation behandle, kann ich Ihnen beide Wege erklären. Die Entscheidung treffen wir gemeinsam.</p></div>
    </div>
  </div>
</section>

<section class="section timeline-section" id="werdegang">
  <div class="wrap timeline__grid">
    <div class="timeline__head">
      ${sectionHead({ title: 'Werdegang', tone: 'von München nach Salzburg.', align: 'stack', text: 'Über 25 Jahre in Chirurgie, Orthopädie und Notfallmedizin – mit Stationen in München, Wien, Basel, Port of Spain, Freilassing und Berchtesgaden.' })}
    </div>
    <ol class="timeline" data-timeline>
      <span class="timeline__line" aria-hidden="true"><span data-timeline-fill></span></span>
      ${timeline.map(([year, title, text]) => html`<li class="timeline__item" data-reveal>
        <span class="timeline__year">${year}</span>
        <div><p class="timeline__title">${title}</p><p class="timeline__text">${text}</p></div>
      </li>`)}
    </ol>
  </div>
</section>

<section class="section creds">
  <div class="wrap">
    ${sectionHead({ title: 'Qualifikationen', tone: 'und Mitgliedschaften.' })}
    <div class="creds__grid">
      <div class="cred-card" data-reveal><p class="cred-card__label">${icons.shield} Diplome &amp; Zertifikate</p><ul>${credentials.diplomas.map((d) => html`<li>${d}</li>`)}</ul></div>
      <div class="cred-card" data-reveal><p class="cred-card__label">${icons.layers} Mitgliedschaften</p><ul>${credentials.memberships.map((d) => html`<li>${d}</li>`)}</ul></div>
      <div class="cred-card" data-reveal><p class="cred-card__label">${icons.user} Sprachen</p><ul>${credentials.languages.map((d) => html`<li>${d}</li>`)}</ul></div>
    </div>
  </div>
</section>

<section class="section personal">
  <div class="wrap personal__grid">
    ${photo({ label: 'Thomas Schrader in den Bergen oder am Rad', ratio: '5/4', className: 'personal__photo' })}
    <div>
      <h2 class="display" data-reveal>${twoTone('Als Sportler', 'verstehe ich Sportler:innen.')}</h2>
      <p data-reveal>Mit meiner Frau und unseren drei Kindern lebe ich seit vielen Jahren in der Stadt Salzburg. Ausgleich finde ich dort, wo ich auch meine Patient:innen wieder hinbringen möchte: in der Bewegung – am Rennrad, am Mountainbike und im Winter auf Skiern.</p>
      <p data-reveal>Wer selbst trainiert, weiß, was eine Verletzung bedeutet. Und wenn die Berge ruhen, gehören meine Abende der Musik zwischen Klassik und Jazz – und dem Kochen für Familie und Freunde.</p>
    </div>
  </div>
</section>

${ctaPanel()}
`;
  return layout({
    path: '/ueber-mich/',
    title: 'Über mich | Thomas Schrader, Orthopäde in Salzburg',
    description: 'Thomas Schrader, Facharzt für Orthopädie und Unfallchirurgie, Sportmediziner und Notarzt: Werdegang und Arbeitsweise. Wahlarzt im healthlab Salzburg.',
    body,
    crumbs,
    schema: [physicianSchema()],
    bodyClass: 'page-about',
  });
}

// ───────────────────────────── Wahlarzt & Kosten

const wahlarztFaq = [
  ['Wie viel bekomme ich von der Krankenkasse zurück?', 'Die Kasse erstattet bis zu 80 % des Betrags, den sie einem Vertragsarzt für dieselbe Leistung bezahlen würde. Wie viel das in Euro ist, hängt von der Leistung und Ihrer Kasse ab – das Honorar ist in der Regel höher als dieser Tarif.'],
  ['Wie reiche ich die Honorarnote ein?', 'Bezahlte Honorarnoten können mit Ihrer Zustimmung über WAHonline direkt von einer Wahlarztpraxis an die Krankenversicherung übermittelt werden. Fragen Sie bei Ihrem Termin nach, wie die Einreichung für Sie erfolgt. Falls Sie selbst einreichen, nutzen Sie das Portal Ihrer Kasse oder den Postweg. Bereits übermittelte Rechnungen bitte nicht doppelt einreichen.'],
  ['Übernimmt meine private Zusatzversicherung die Kosten?', 'Viele ambulante Zusatzversicherungen übernehmen den Rest des Wahlarzthonorars ganz oder teilweise. Operationen an der Privatklinik werden über die Sonderklasse abgerechnet. Fragen Sie am besten vorab bei Ihrer Versicherung nach.'],
  ['Brauche ich eine Überweisung?', 'Nein. Sie können direkt zu mir kommen. Für bestimmte Untersuchungen wie ein MRT stelle ich Ihnen bei Bedarf eine Zuweisung aus.'],
  ['Was kostet ein Termin?', 'Das Honorar richtet sich nach Dauer und Umfang der Untersuchung und Behandlung. Auf Wunsch nenne ich Ihnen die Kosten vorab – bei Injektionen und Stoßwelle bekommen Sie immer eine Aufstellung vor Behandlungsbeginn.'],
  ['Ich bin in Deutschland versichert – geht das?', 'Privat Versicherte reichen die Rechnung wie gewohnt bei ihrer Versicherung ein. Gesetzlich Versicherte aus Bayern behandle ich auch in der OUCC-Gemeinschaftspraxis, die mit allen Kassen abrechnet.'],
];

export function wahlarzt() {
  const crumbs = [['Wahlarzt & Kosten', '/wahlarzt-kosten/']];
  const body = html`
${pageHero({
  crumbs,
  title: 'Wahlarzt & Kosten',
  tone: 'einfach erklärt.',
  lead: 'Als Wahlarzt arbeite ich ohne Kassenvertrag. Sie können direkt zu mir kommen, und ich kann mir für jeden Termin die Zeit nehmen, die Ihr Anliegen braucht. Für erstattungsfähige Leistungen erhalten Sie einen Teil nach dem Tarif Ihrer Krankenkasse zurück.',
})}

<section class="section">
  <div class="wrap">
    <div class="perks">
      ${[
        ['calendar', 'Zeitnahe Termine', 'In der Regel zeitnah – bei akuten Beschwerden bemühe ich mich um einen kurzfristigen Termin.'],
        ['clock', 'Zeit für Ihr Anliegen', 'Ein ausführliches Erstgespräch und eine gründliche Untersuchung, bei Bedarf mit Ultraschall.'],
        ['user', 'Ein Arzt, ein Weg', 'Ein Ansprechpartner für Diagnose und Nachsorge – bei spezialisierten Eingriffen gemeinsam mit meinem Netzwerk.'],
        ['door', 'Ohne Überweisung', 'Sie können direkt zu mir kommen.'],
      ].map(([i, t, d]) => html`<div class="perk" data-reveal><span class="perk__icon">${icons[i]}</span><p class="perk__title">${t}</p><p>${d}</p></div>`)}
    </div>
  </div>
</section>

<section class="section refund">
  <div class="wrap refund__grid">
    <div>
      ${sectionHead({ title: 'So funktioniert', tone: 'die Rückerstattung.', align: 'stack', text: 'Von der Honorarnote bis zur Erstattung – wir besprechen, welcher Weg für Sie passt.' })}
      <div class="refund__calc" data-reveal>
        <p class="refund__calc-label">Rechenbeispiel</p>
        <p>Würde eine Untersuchung beim Vertragsarzt der Kasse <strong>50 €</strong> kosten, erstattet die Kasse Ihnen davon bis zu <strong>40 €</strong> (80 %) – unabhängig davon, wie hoch das Wahlarzthonorar ist.</p>
        <p class="refund__calc-note">Beispielwerte zur Veranschaulichung, keine tatsächlichen Tarife.</p>
      </div>
    </div>
    ${steps([
      ['Termin vereinbaren', 'Telefonisch, per E-Mail oder über die Terminanfrage.'],
      ['Behandlung', 'Ausführliches Gespräch, gründliche Untersuchung und ein Plan, den Sie verstehen.'],
      ['Honorarnote bezahlen', 'Sie erhalten eine transparente Honorarnote mit allen Leistungen.'],
      ['Einreichung klären', 'Über WAHonline kann die Praxis die bezahlte Honorarnote mit Ihrer Zustimmung übermitteln. Klären Sie bei Ihrem Termin, ob noch eine eigene Einreichung nötig ist.'],
    ])}
    <p class="refund__source">WAHonline ermöglicht die direkte Einreichung durch die Praxis. <a href="https://www.oegk.at/cdscontent/?contentid=10007.880165&amp;portal=oegkvpportal" target="_blank" rel="noopener">Informationen der ÖGK zu WAHonline</a></p>
  </div>
</section>

${faqSection(wahlarztFaq, { title: 'Fragen zu', tone: 'Kosten und Kasse' })}
${ctaPanel()}
`;
  return layout({
    path: '/wahlarzt-kosten/',
    title: 'Wahlarzt in Salzburg: Kosten & Rückerstattung | Orthopädie',
    description: 'Was ist ein Wahlarzt, was kostet ein Termin und wie funktioniert die Rückerstattung durch ÖGK, BVAEB und SVS? Antworten für Ihren Termin in Salzburg.',
    body,
    crumbs,
    faq: wahlarztFaq,
    bodyClass: 'page-wahlarzt',
  });
}

// ───────────────────────────── Kontakt

export function kontakt() {
  const crumbs = [['Kontakt', '/kontakt/']];
  const body = html`
${pageHero({
  crumbs,
  title: 'Kontakt',
  tone: 'und Terminanfrage.',
  lead: 'Am schnellsten erreichen Sie mich telefonisch. Oder Sie schicken mir Ihre Anfrage in vier kurzen Schritten – ich melde mich so bald wie möglich bei Ihnen.',
  ctas: false,
})}

<section class="section contact" id="termin">
  <div class="wrap contact__grid">
    <div class="contact__form" data-reveal>
      <h2 class="contact__form-title">Terminanfrage</h2>
      ${bookingForm({ inline: true })}
    </div>
    <div class="contact__cards">
      <a class="contact-card contact-card--dark" href="${site.phoneHref}" data-reveal>
        <span class="contact-card__icon">${icons.phone}</span>
        <span class="contact-card__label">Telefon</span>
        <span class="contact-card__value">${site.phone}</span>
      </a>
      <a class="contact-card" href="${site.phoneReceptionHref}" data-reveal>
        <span class="contact-card__icon">${icons.door}</span>
        <span class="contact-card__label">Empfang healthlab</span>
        <span class="contact-card__value">${site.phoneReception}</span>
      </a>
      <a class="contact-card" href="mailto:${site.email}" data-reveal>
        <span class="contact-card__icon">${icons.mail}</span>
        <span class="contact-card__label">E-Mail</span>
        <span class="contact-card__value">${site.email}</span>
      </a>
      <div class="contact-card contact-card--note" data-reveal>
        <span class="contact-card__icon">${icons.clock}</span>
        <span class="contact-card__label">Termine</span>
        <span class="contact-card__text">Nach Vereinbarung. Bei akuten Beschwerden rufen Sie am besten an – ich bemühe mich um einen kurzfristigen Termin.</span>
      </div>
    </div>
  </div>
</section>

<section class="section locations">
  <div class="wrap">
    ${sectionHead({ title: 'So finden', tone: 'Sie mich.' })}
    <figure class="map-photo" data-reveal>
      <a class="map-photo__link" href="${site.ordination.maps}" target="_blank" rel="noopener" aria-label="${site.ordination.name}, ${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city} – in Google Maps öffnen">
        <img src="/assets/img/map-healthlab.jpg" alt="Kartenausschnitt von Salzburg-Süd mit dem healthlab an der Alpenstraße" width="1800" height="640" loading="lazy" decoding="async">
      </a>
      <span class="map__pin" style="left:50%;top:50%" aria-hidden="true"><span></span></span>
      <span class="map-photo__label" aria-hidden="true"><strong>${site.ordination.name}</strong>${site.ordination.street}</span>
      <a class="btn btn--dark map-photo__btn" href="${site.ordination.maps}" target="_blank" rel="noopener">Route in Google Maps ${icons.arrowUpRight}</a>
      <figcaption class="map-photo__credit">Kartendaten © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap-Mitwirkende</a></figcaption>
    </figure>
    <div class="locations__grid">
      <article class="location location--main" data-reveal>
        <div class="arrival">
          <p class="location__kicker">Ihr Weg zur Ordination</p>
          <h3>${site.ordination.street}<br>${site.ordination.zip} ${site.ordination.city}</h3>
          <p>Planen Sie Ihre Anfahrt zum healthlab über den Routenlink. Den Termin in meiner Ordination vereinbaren Sie bitte vorab.</p>
          <p>Fragen zu Eingang oder Zugang? Der healthlab-Empfang hilft Ihnen unter <a href="${site.phoneReceptionHref}">${site.phoneReception}</a>.</p>
        </div>
        <div class="location__body">
          <p class="location__kicker">Ordination</p>
          <h3 class="location__title">${site.ordination.name}</h3>
          <p>${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city}</p>
          <ul class="location__list">
            <li>${icons.check} Parkplätze direkt vor dem Haus</li>
            <li>${icons.check} Obus-Haltestellen entlang der Alpenstraße</li>
            <li>${icons.check} Barrierefrei erreichbar</li>
          </ul>
          <p class="location__hours">Hausöffnungszeiten: ${site.ordination.houseHours.map(([d, h]) => `${d} ${h}`).join(', ')}. Diese Zeiten sind keine Sprechzeiten der Ordination; Arzttermine nur nach Vereinbarung.</p>
          <a class="btn btn--dark" href="${site.ordination.maps}" target="_blank" rel="noopener">Route in Google Maps ${icons.arrowUpRight}</a>
        </div>
      </article>
      <article class="location" data-reveal>
        <p class="location__kicker">Operationen</p>
        <h3 class="location__title">${site.clinic.name}</h3>
        <p>Operationen führe ich als Belegarzt an der Privatklinik Wehrle-Diakonissen in Salzburg durch. Alle Details zu Aufenthalt und Versicherung besprechen wir bei der Planung.</p>
        <a class="text-link" href="${site.clinic.url}" target="_blank" rel="noopener">Profil an der Klinik ${icons.arrowUpRight}</a>
      </article>
      <article class="location" data-reveal>
        <p class="location__kicker">Bayern</p>
        <h3 class="location__title">${site.bavaria.short}</h3>
        <p>In der orthopädischen Gemeinschaftspraxis OUCC im ${site.bavaria.location} behandle ich alle Kassen und privat Versicherte.</p>
        <p><a href="${site.bavaria.phoneHref}">${site.bavaria.phone}</a></p>
        <a class="text-link" href="${site.bavaria.url}" target="_blank" rel="noopener">Zur OUCC ${icons.arrowUpRight}</a>
      </article>
    </div>
  </div>
</section>
`;
  return layout({
    path: '/kontakt/',
    title: 'Kontakt & Termin | Orthopäde Thomas Schrader, Salzburg',
    description: 'Termin beim Orthopäden in Salzburg anfragen: Telefon +43 660 857 40 00, E-Mail oder Online-Anfrage. Ordination im healthlab, Alpenstraße 99, 5020 Salzburg.',
    body,
    crumbs,
    schema: [physicianSchema()],
    bodyClass: 'page-contact',
  });
}

// ───────────────────────────── Rechtliches

const legal = (path, title, h1, content) => layout({
  path,
  title: `${title} – ${site.name}`,
  description: `${title} der Website von ${site.name}, ${site.role}, Salzburg.`,
  crumbs: [[h1, path]],
  bodyClass: 'page-legal',
  body: html`<section class="page-hero page-hero--plain"><div class="wrap">${crumbsNav([[h1, path]])}<h1 class="page-hero__title display">${h1}</h1></div></section>
<section class="section legal"><div class="wrap"><div class="prose prose--legal">${content}</div></div></section>`,
});

const todo = (s) => `<mark class="todo">${s}</mark>`;

export const impressum = () => legal('/impressum/', 'Impressum', 'Impressum', `
<p>Angaben gemäß § 5 E-Commerce-Gesetz, § 25 Mediengesetz und § 14 Unternehmensgesetzbuch.</p>
<h2>Medieninhaber und Herausgeber</h2>
<p>${site.name}<br>${site.role}<br>Wahlarzt-Ordination im ${site.ordination.name}<br>${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city}, Österreich</p>
<p>Telefon: <a href="${site.phoneHref}">${site.phone}</a><br>E-Mail: <a href="mailto:${site.email}">${site.email}</a></p>
<h2>Berufsrechtliche Angaben</h2>
<p>Berufsbezeichnung: ${todo('Facharzt für … – genaue Bezeichnung und verleihender Staat bitte prüfen')}<br>
Zuständige Kammer: Ärztekammer für Salzburg, Faberstraße 10, 5020 Salzburg<br>
Berufsrechtliche Vorschriften: Ärztegesetz 1998, abrufbar unter <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener">www.ris.bka.gv.at</a><br>
UID-Nummer: ${todo('falls vorhanden ergänzen')}</p>
<h2>Blattlinie</h2>
<p>Information über die Leistungen der Ordination sowie allgemeine Informationen zu orthopädischen Erkrankungen und Behandlungen.</p>
<h2>Haftungsausschluss</h2>
<p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Sie dienen der allgemeinen Information und ersetzen keine persönliche ärztliche Beratung, Untersuchung oder Behandlung. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.</p>
<h2>Bildnachweise und Schriften</h2>
<p>Schriften: Newsreader und Geist (SIL Open Font License), lokal eingebunden. ${todo('Bildnachweise ergänzen, sobald Fotos eingesetzt sind')}</p>`);

export const datenschutz = () => legal('/datenschutz/', 'Datenschutzerklärung', 'Datenschutz', `
<p>${todo('Entwurf – vor Veröffentlichung rechtlich prüfen lassen.')}</p>
<h2>Verantwortlicher</h2>
<p>${site.name}, ${site.ordination.street}, ${site.ordination.zip} ${site.ordination.city}, ${site.email}</p>
<h2>Welche Daten wir verarbeiten</h2>
<p>Beim Besuch dieser Website werden technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite) vom Hosting-Anbieter verarbeitet, um die Website sicher bereitzustellen. Es werden keine Analyse- oder Marketing-Cookies eingesetzt. Schriften werden lokal ausgeliefert; es findet keine Verbindung zu Google Fonts statt.</p>
<h2>Terminanfrage</h2>
<p>Wenn Sie die Terminanfrage nutzen, wird aus Ihren Angaben eine E-Mail in Ihrem eigenen E-Mail-Programm vorbereitet. Die Daten werden erst übermittelt, wenn Sie diese E-Mail selbst absenden. Wir verwenden sie ausschließlich zur Terminvereinbarung (Art. 6 Abs. 1 lit. b DSGVO). Bitte senden Sie keine Befunde per E-Mail.</p>
<h2>Externe Links</h2>
<p>Links zu Google Maps, zur Privatklinik und zur OUCC führen auf Websites anderer Anbieter, für deren Datenverarbeitung diese verantwortlich sind.</p>
<h2>Ihre Rechte</h2>
<p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei der österreichischen Datenschutzbehörde einbringen (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>).</p>`);

export const notFound = () => layout({
  path: '/404.html',
  title: `Seite nicht gefunden – ${site.name}`,
  description: 'Diese Seite gibt es nicht.',
  bodyClass: 'page-404',
  body: html`<section class="page-hero"><div class="wrap"><h1 class="page-hero__title display">${twoTone('Diese Seite', 'gibt es nicht.')}</h1>
  <p class="page-hero__lead">Vielleicht hilft Ihnen einer dieser Wege weiter.</p>
  <div class="btn-row"><a class="btn btn--dark" href="/">Zur Startseite</a><a class="btn btn--ghost" href="/beschwerden/">Beschwerden finden</a></div></div></section>`,
});
