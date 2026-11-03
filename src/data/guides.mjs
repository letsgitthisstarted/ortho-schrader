// In-depth pages for the two most common reasons for a joint replacement, rendered under /beschwerden/<slug>/.
// Same wording rules as treatments.mjs: factual, cautious, no fixed numbers, doses or recovery times, no promises.
// parent: the region page they belong to (breadcrumb and back link).

export const guides = [
  {
    slug: 'kniearthrose',
    parent: 'knieschmerzen',
    region: 'knie',
    name: 'Kniearthrose',
    h1: 'Kniearthrose',
    h1b: 'erkennen, einordnen, behandeln.',
    seoTitle: 'Kniearthrose (Gonarthrose): Symptome & Behandlung | Salzburg',
    description: 'Kniearthrose verstehen: typische Beschwerden, Diagnose, Behandlung ohne Operation und wann ein künstliches Kniegelenk infrage kommt. Orthopäde in Salzburg.',
    lead: 'Bei einer Kniearthrose (Gonarthrose) wird der Knorpel im Kniegelenk nach und nach dünner. Sie ist eine der häufigsten Ursachen für Knieschmerzen ab der Lebensmitte – und lässt sich oft über lange Zeit ohne Operation gut behandeln.',
    sections: [
      {
        id: 'was', title: 'Was bei einer Arthrose im Knie passiert',
        html: `<p>Knorpel überzieht die Gelenkflächen von Oberschenkel, Schienbein und Kniescheibe und lässt sie reibungsarm aufeinander gleiten. Bei einer Arthrose verliert er an Dicke und Elastizität. Der Knochen darunter reagiert, an den Rändern bilden sich knöcherne Anbauten, und die Gelenkschleimhaut kann sich entzünden.</p>
<p>Betroffen sein kann die Innenseite des Knies (häufig bei O-Beinen), die Außenseite (bei X-Beinen) oder das Gleitlager hinter der Kniescheibe. Neben dem Alter spielen frühere Verletzungen, Fehlstellungen, Übergewicht und familiäre Veranlagung eine Rolle.</p>`,
      },
      {
        id: 'beschwerden', title: 'Typische Beschwerden',
        html: `<ul>
<li><strong>Anlaufschmerz</strong> – nach dem Aufstehen oder längerem Sitzen, er lässt nach einigen Schritten nach.</li>
<li><strong>Belastungsschmerz</strong> – beim Gehen längerer Strecken, beim Stiegensteigen oder bergab.</li>
<li><strong>Steifigkeit</strong> – das Knie lässt sich nicht mehr ganz strecken oder beugen.</li>
<li><strong>Schwellung</strong> – ein Erguss im Gelenk, oft nach stärkerer Belastung.</li>
<li><strong>Schmerzen in Ruhe oder nachts</strong> – eher in späteren Stadien.</li>
</ul>
<p>Die Beschwerden kommen oft in Schüben: Phasen mit wenig Schmerz wechseln sich mit Phasen ab, in denen das Gelenk gereizt ist.</p>`,
      },
      {
        id: 'diagnose', title: 'Wie ich die Diagnose stelle',
        html: `<p>Am Anfang steht das Gespräch: Wo genau schmerzt es, seit wann, wobei? Danach untersuche ich Beweglichkeit, Stabilität, Beinachse und Gangbild. Mit dem <a href="/behandlungen/ultraschall/">Ultraschall</a> sehe ich direkt in der Ordination, ob ein Erguss oder eine Baker-Zyste vorliegt.</p>
<p>Ein Röntgenbild im Stehen zeigt, wie weit der Gelenkspalt schon verschmälert ist. Ein MRT ist für die Diagnose einer Arthrose meist nicht nötig – sinnvoll ist es, wenn andere Ursachen wie ein Meniskusriss geklärt werden sollen.</p>`,
      },
      {
        id: 'stadien', title: 'Stadien – und warum das Röntgenbild nicht alles sagt',
        html: `<p>Im Röntgen wird die Arthrose in Stadien eingeteilt: von einer leichten Verschmälerung des Gelenkspalts mit kleinen Randanbauten bis dahin, dass der Gelenkspalt kaum noch zu sehen ist und Knochen auf Knochen trifft.</p>
<p>Wichtig für Sie: Bild und Beschwerden passen nicht immer zusammen. Manche Menschen haben im Röntgen eine deutliche Arthrose und kommen gut zurecht, andere haben bei geringen Veränderungen starke Schmerzen. Für die Behandlung zählt deshalb vor allem, wie sehr das Knie Ihren Alltag einschränkt.</p>`,
      },
      {
        id: 'ohne-op', title: 'Behandlung ohne Operation',
        html: `<p>Die Grundlage ist fast immer dieselbe – und sie wirkt am besten, wenn sie zu Ihrem Alltag passt:</p>
<ul>
<li><strong>Bewegung und Kräftigung</strong> – gezieltes Training der Oberschenkel- und Hüftmuskulatur entlastet das Gelenk. Physiotherapie und Trainingstherapie sind im healthlab im selben Haus.</li>
<li><strong>Gewicht</strong> – jedes Kilo weniger entlastet das Knie bei jedem Schritt.</li>
<li><strong>Medikamente</strong> – gezielt und zeitlich begrenzt, wenn Schmerzen die Bewegung verhindern.</li>
<li><strong>Injektionen</strong> – <a href="/behandlungen/kortison-infiltration/">Kortison</a> kann einen akuten Reizzustand beruhigen; <a href="/behandlungen/hyaluronsaeure/">Hyaluronsäure</a> oder <a href="/behandlungen/eigenbluttherapie/">Eigenblut</a> besprechen wir je nach Befund.</li>
<li><strong>Hilfsmittel</strong> – Einlagen, Bandagen oder eine entlastende Orthese, angepasst von der Orthopädietechnik.</li>
</ul>
<p>Mehr zu den einzelnen Bausteinen finden Sie unter <a href="/behandlungen/arthrosetherapie/">Arthrose ohne Operation behandeln</a>.</p>`,
      },
      {
        id: 'gelenkersatz', title: 'Wann ein künstliches Kniegelenk infrage kommt',
        html: `<p>Ein Gelenkersatz ist dann ein Thema, wenn mehreres zusammenkommt:</p>
<ul>
<li>Die Schmerzen bestehen über längere Zeit und schränken Gehstrecke, Schlaf oder Alltag deutlich ein.</li>
<li>Die Arthrose ist im Röntgenbild klar zu sehen.</li>
<li>Die Behandlung ohne Operation hat nicht mehr ausreichend geholfen.</li>
<li>Ihr allgemeiner Gesundheitszustand erlaubt die Operation.</li>
<li>Sie selbst möchten diesen Schritt gehen.</li>
</ul>
<p>Diese Punkte entsprechen den Kriterien der Leitlinie zur Indikation der Knieendoprothese. Ich gehe sie mit Ihnen gemeinsam durch – ohne Zeitdruck. Wenn eine Operation der bessere Weg ist, setze ich das künstliche Gelenk selbst ein: <a href="/behandlungen/knieprothese/">Knieprothese</a> und <a href="/operation/">So läuft Ihre Operation ab</a>.</p>`,
      },
    ],
    faq: [
      ['Kann man Kniearthrose ohne Operation behandeln?', 'Ja, oft über viele Jahre. Bewegung, Kräftigung, Gewicht und – wenn sinnvoll – Injektionen sind die Grundlage. Wie gut das wirkt, hängt vom Stadium und Ihrem Alltag ab.'],
      ['Darf ich mit Kniearthrose Sport machen?', 'In der Regel ja. Gelenkschonende Bewegung wie Radfahren, Schwimmen oder Walking ist meist hilfreich. Welche Belastung für Sie passt, besprechen wir nach der Untersuchung.'],
      ['Brauche ich ein MRT?', 'Für die Diagnose einer Arthrose meist nicht – dafür reichen Untersuchung und Röntgen. Ein MRT kann sinnvoll sein, wenn andere Ursachen geklärt werden sollen.'],
      ['Wann ist der richtige Zeitpunkt für ein künstliches Kniegelenk?', 'Wenn die Schmerzen Ihr Leben trotz Behandlung stark einschränken und Sie diesen Schritt gehen möchten. Das Röntgenbild allein entscheidet das nicht.'],
    ],
    treatments: ['arthrosetherapie', 'kortison-infiltration', 'hyaluronsaeure', 'knieprothese'],
  },

  {
    slug: 'hueftarthrose',
    parent: 'hueftschmerzen',
    region: 'huefte',
    name: 'Hüftarthrose',
    h1: 'Hüftarthrose',
    h1b: 'erkennen, einordnen, behandeln.',
    seoTitle: 'Hüftarthrose (Coxarthrose): Symptome & Behandlung | Salzburg',
    description: 'Hüftarthrose verstehen: Leistenschmerz, Steifigkeit, Diagnose, Behandlung ohne Operation und wann eine Hüftprothese infrage kommt. Orthopäde in Salzburg.',
    lead: 'Bei einer Hüftarthrose (Coxarthrose) nutzt sich der Knorpel zwischen Hüftkopf und Hüftpfanne ab. Typisch sind Schmerzen in der Leiste und eine Hüfte, die steifer wird. Am Anfang steht fast immer eine Behandlung ohne Operation.',
    sections: [
      {
        id: 'was', title: 'Was bei einer Arthrose in der Hüfte passiert',
        html: `<p>Im Hüftgelenk sitzt der Kopf des Oberschenkelknochens in der Pfanne des Beckens. Beide sind mit Knorpel überzogen. Bei einer Arthrose wird dieser Knorpel dünner, der Knochen darunter verdichtet sich, und an den Rändern entstehen knöcherne Anbauten, die die Beweglichkeit einschränken.</p>
<p>Neben dem Alter können eine angeborene Fehlform von Hüftkopf oder Pfanne, frühere Verletzungen, starke Belastung und familiäre Veranlagung eine Rolle spielen.</p>`,
      },
      {
        id: 'beschwerden', title: 'Typische Beschwerden',
        html: `<ul>
<li><strong>Schmerzen in der Leiste</strong> – oft ausstrahlend an die Vorderseite des Oberschenkels, manchmal bis zum Knie.</li>
<li><strong>Anlaufschmerz</strong> – nach dem Aufstehen oder längerem Sitzen.</li>
<li><strong>Steifigkeit</strong> – Socken anziehen, Schuhe binden oder ins Auto steigen fällt schwerer.</li>
<li><strong>Belastungsschmerz und Hinken</strong> – beim Gehen längerer Strecken.</li>
<li><strong>Schmerzen in Ruhe oder nachts</strong> – eher in späteren Stadien.</li>
</ul>
<p>Weil Hüftschmerzen bis ins Knie ziehen können, untersuche ich bei Knieschmerzen immer auch die Hüfte – und umgekehrt den Rücken, der ähnliche Beschwerden machen kann.</p>`,
      },
      {
        id: 'diagnose', title: 'Wie ich die Diagnose stelle',
        html: `<p>Nach dem Gespräch untersuche ich die Beweglichkeit der Hüfte – vor allem die Drehung nach innen ist bei einer Arthrose früh eingeschränkt – sowie Gangbild, Beinlänge, Rücken und Knie. Mit dem <a href="/behandlungen/ultraschall/">Ultraschall</a> sehe ich, ob das Gelenk gereizt ist oder ein Erguss vorliegt.</p>
<p>Ein Röntgenbild des Beckens zeigt den Gelenkspalt und die Form von Hüftkopf und Pfanne. Ein MRT ist nur in bestimmten Fällen nötig, etwa wenn andere Ursachen ausgeschlossen werden sollen.</p>`,
      },
      {
        id: 'stadien', title: 'Stadien – und warum das Röntgenbild nicht alles sagt',
        html: `<p>Im Röntgen reicht die Einteilung von einer leichten Verschmälerung des Gelenkspalts bis zu einem Gelenk, in dem Kopf und Pfanne direkt aufeinandertreffen.</p>
<p>Auch an der Hüfte gilt: Bild und Beschwerden passen nicht immer zusammen. Für die Behandlung ist entscheidend, wie sehr die Hüfte Ihren Alltag einschränkt – nicht allein das Stadium im Röntgen.</p>`,
      },
      {
        id: 'ohne-op', title: 'Behandlung ohne Operation',
        html: `<ul>
<li><strong>Bewegung und Kräftigung</strong> – gezieltes Training der Hüft- und Gesäßmuskulatur und Übungen für die Beweglichkeit. Physiotherapie und Trainingstherapie sind im healthlab im selben Haus.</li>
<li><strong>Gelenkschonender Sport</strong> – Radfahren, Schwimmen oder Aquagymnastik sind meist gut verträglich.</li>
<li><strong>Gewicht</strong> – weniger Körpergewicht entlastet das Gelenk.</li>
<li><strong>Medikamente</strong> – gezielt und zeitlich begrenzt, wenn Schmerzen die Bewegung verhindern.</li>
<li><strong>Injektionen</strong> – ultraschallgezielt ins Hüftgelenk: <a href="/behandlungen/kortison-infiltration/">Kortison</a> bei einem Reizzustand, <a href="/behandlungen/hyaluronsaeure/">Hyaluronsäure</a> je nach Befund.</li>
</ul>
<p>Mehr dazu unter <a href="/behandlungen/arthrosetherapie/">Arthrose ohne Operation behandeln</a>.</p>`,
      },
      {
        id: 'gelenkersatz', title: 'Wann eine Hüftprothese infrage kommt',
        html: `<p>Ein künstliches Hüftgelenk ist dann ein Thema, wenn mehreres zusammenkommt:</p>
<ul>
<li>Die Schmerzen bestehen über längere Zeit und schränken Gehstrecke, Schlaf oder Alltag deutlich ein.</li>
<li>Die Arthrose ist im Röntgenbild klar zu sehen.</li>
<li>Die Behandlung ohne Operation hat nicht mehr ausreichend geholfen.</li>
<li>Ihr allgemeiner Gesundheitszustand erlaubt die Operation.</li>
<li>Sie selbst möchten diesen Schritt gehen.</li>
</ul>
<p>Diese Punkte entsprechen den Indikationskriterien der Leitlinie zur Hüfttotalendoprothese. Wir gehen sie gemeinsam durch. Wenn der Gelenkersatz der bessere Weg ist, operiere ich Sie selbst: <a href="/behandlungen/hueftprothese/">Hüftprothese</a> und <a href="/operation/">So läuft Ihre Operation ab</a>.</p>`,
      },
    ],
    faq: [
      ['Warum tut die Hüfte in der Leiste weh?', 'Das Hüftgelenk liegt tief in der Leiste. Schmerzen dort – oft ausstrahlend in den Oberschenkel – sind deshalb typisch für eine Hüftarthrose. Seitliche Schmerzen haben häufiger andere Ursachen, etwa einen gereizten Schleimbeutel.'],
      ['Kann man Hüftarthrose ohne Operation behandeln?', 'Ja, oft über lange Zeit. Training, Bewegung und – wenn sinnvoll – Injektionen lindern Beschwerden. Wie gut das wirkt, hängt vom Stadium und Ihrem Alltag ab.'],
      ['Kann eine Hüftarthrose Knieschmerzen machen?', 'Ja. Hüftschmerzen strahlen häufig bis zum Knie aus. Deshalb untersuche ich immer beide Gelenke und den Rücken.'],
      ['Wann ist der richtige Zeitpunkt für eine Hüftprothese?', 'Wenn die Schmerzen Ihr Leben trotz Behandlung stark einschränken und Sie diesen Schritt gehen möchten. Das Röntgenbild allein entscheidet das nicht.'],
    ],
    treatments: ['arthrosetherapie', 'kortison-infiltration', 'hyaluronsaeure', 'hueftprothese'],
  },
];

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]));
export const guidesFor = (conditionSlug) => guides.filter((g) => g.parent === conditionSlug);

// "Ihre Operation" page.
export const operation = {
  lead: 'Hüft- und Knieprothesen, Kniearthroskopien und Eingriffe an Hand und Fuß führe ich selbst durch – als Belegarzt an der Privatklinik Wehrle-Diakonissen in Salzburg. Vom ersten Gespräch bis zur letzten Kontrolle haben Sie denselben Ansprechpartner.',
  steps: [
    ['Die Entscheidung', 'Ob eine Operation sinnvoll ist, entscheiden wir gemeinsam – nach Untersuchung, Bildgebung und einem offenen Gespräch über die Möglichkeiten ohne Operation. Sie bekommen die Zeit, die Sie für Ihre Entscheidung brauchen.'],
    ['Die Vorbereitung', 'Ich erkläre Ihnen Ablauf, Nutzen und Risiken des Eingriffs und beantworte Ihre Fragen. Nötige Voruntersuchungen und das Gespräch mit der Anästhesie finden vor dem Operationstermin statt.'],
    ['Die Operation', 'Ich operiere Sie selbst, an der Privatklinik Wehrle-Diakonissen. Während Ihres Aufenthalts in der Klinik bleibe ich Ihr behandelnder Arzt.'],
    ['Die Nachsorge', 'Die Kontrollen danach finden bei mir in der Ordination im healthlab statt. Physiotherapie und Trainingstherapie sind im selben Haus möglich – so greifen Nachsorge und Training ineinander.'],
  ],
  faq: [
    ['Wer operiert mich?', 'Ich selbst. Ich habe Sie vorher untersucht und beraten, operiere Sie und sehe Sie danach zur Kontrolle wieder.'],
    ['Wo findet die Operation statt?', 'An der Privatklinik Wehrle-Diakonissen in Salzburg, an der ich als Belegarzt operiere.'],
    ['Wie lange bin ich in der Klinik?', 'Das hängt vom Eingriff und von Ihrem Verlauf ab. Manche kleineren Eingriffe sind mit einem kurzen Aufenthalt möglich, nach einem Gelenkersatz bleiben Sie länger. Was Sie bei Ihrem Eingriff erwartet, besprechen wir vorab.'],
    ['Brauche ich danach eine Reha?', 'Nach einem Gelenkersatz ist eine Rehabilitation üblich – stationär oder ambulant. Was für Sie passt, planen wir schon vor der Operation.'],
    ['Wer übernimmt die Kosten?', 'Operationen an der Privatklinik werden über die Sonderklasse abgerechnet – in der Regel über eine private Zusatzversicherung. Was Ihre Versicherung übernimmt und ob ein Eigenanteil bleibt, klären wir vor dem Eingriff. Ohne Zusatzversicherung besprechen wir gemeinsam mit der Klinik, welche Möglichkeiten es gibt.'],
  ],
};
