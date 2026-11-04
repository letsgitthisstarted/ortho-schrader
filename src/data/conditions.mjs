// Condition pages ("Beschwerden"). Each entry renders /beschwerden/<slug>/.
// finder: where/when it hurts → what it often means. causes link to treatment slugs.
// Same wording rules as treatments.mjs: factual, cautious, no fixed numbers, no promises.

export const conditions = [
  {
    slug: 'knieschmerzen',
    region: 'knie',
    name: 'Knieschmerzen',
    h1: 'Knieschmerzen',
    h1b: 'Ursachen verstehen, gezielt behandeln.',
    seoTitle: 'Knieschmerzen: Ursachen & Behandlung | Orthopäde Salzburg',
    description: 'Knieschmerzen innen, vorne oder beim Stiegensteigen? Ursachen wie Arthrose, Meniskusriss oder Kniescheibenschmerz – Abklärung und Behandlung in Salzburg.',
    lead: 'Das Knie trägt uns bei jedem Schritt. Ob es innen, vorne oder in der Kniekehle schmerzt, beim Stiegensteigen oder nach dem Sport – wo und wann die Schmerzen auftreten, gibt oft schon wichtige Hinweise auf die Ursache.',
    finder: [
      ['An der Innenseite', 'Häufig steckt der Innenmeniskus, eine beginnende Arthrose oder ein gereizter Sehnenansatz dahinter.'],
      ['Vorne, rund um die Kniescheibe', 'Oft ist der Knorpel hinter der Kniescheibe gereizt – oder der Ansatz der Kniescheibensehne.'],
      ['Beim Stiegensteigen', 'Spricht häufig für das Gleitlager der Kniescheibe oder für eine Arthrose.'],
      ['Morgens beim Losgehen', 'Ein Anlaufschmerz, der nach einigen Schritten nachlässt, ist ein typisches Zeichen einer Arthrose.'],
      ['Nach einem Verdrehtrauma', 'Möglich sind Verletzungen von Meniskus oder Bändern – das sollte zeitnah untersucht werden.'],
      ['Schwellung in der Kniekehle', 'Oft eine Baker-Zyste, meist als Folge einer Reizung im Gelenk.'],
    ],
    causes: [
      { name: 'Kniearthrose (Gonarthrose)', text: 'Verschleiß des Gelenkknorpels mit Anlauf- und Belastungsschmerz. Lässt sich oft lange ohne Operation behandeln.', treatments: ['arthrosetherapie', 'hyaluronsaeure', 'kortison-infiltration', 'knieprothese'] },
      { name: 'Meniskusriss', text: 'Stechender Schmerz am Gelenkspalt, manchmal mit Blockaden. Nicht jeder Riss muss operiert werden.', treatments: ['ultraschall', 'kniearthroskopie'] },
      { name: 'Kniescheibenschmerz', text: 'Schmerzen vorne am Knie, häufig bei Läufer:innen und bei Sprungsportarten. Meist helfen gezieltes Kräftigen und eine angepasste Belastung; ist die Patellasehne gereizt, kann die Stoßwelle ergänzen.', treatments: ['sportmedizin', 'stosswellentherapie'] },
      { name: 'Bandverletzungen', text: 'Innenband oder Kreuzband nach einem Verdrehtrauma – gründlich untersuchen und den passenden Weg wählen.', treatments: ['sportmedizin'] },
      { name: 'Schleimbeutelentzündung', text: 'Schmerzhafte Schwellung vor der Kniescheibe, oft nach viel Knien.', treatments: ['ultraschall', 'kortison-infiltration'] },
    ],
    conservative: ['arthrosetherapie', 'kortison-infiltration', 'hyaluronsaeure', 'eigenbluttherapie', 'stosswellentherapie'],
    operative: ['kniearthroskopie', 'knieprothese'],
    faq: [
      ['Wann sollte ich mit Knieschmerzen zum Orthopäden?', 'Wenn Schmerzen länger anhalten, das Knie anschwillt, blockiert oder instabil wirkt – und nach einer Verletzung.'],
      ['Was hilft bei Knieschmerzen beim Stiegensteigen?', 'Oft hilft gezieltes Kräftigen der Oberschenkel- und Hüftmuskulatur. Je nach Ursache können weitere Behandlungen sinnvoll sein – das klären wir in der Untersuchung.'],
      ['Ist eine Spritze ins Knie sinnvoll?', 'Das hängt von der Ursache ab. Ob und welche Injektion infrage kommt, entscheiden wir individuell nach dem Befund.'],
      ['Brauche ich eine Überweisung oder ein MRT?', 'Nein. Sie können direkt kommen. Ob ein MRT nötig ist, entscheiden wir nach der Untersuchung.'],
    ],
  },

  {
    slug: 'hueftschmerzen',
    region: 'huefte',
    name: 'Hüftschmerzen',
    h1: 'Hüftschmerzen',
    h1b: 'Hüfte, Sehne oder Rücken?',
    seoTitle: 'Hüftschmerzen: Ursachen & Behandlung | Orthopäde Salzburg',
    description: 'Hüftschmerzen in der Leiste, außen oder im Liegen? Arthrose, Sehnenreizung oder Ausstrahlung vom Rücken – Abklärung und Behandlung in Salzburg.',
    lead: 'Hüftschmerzen sind nicht gleich Hüftschmerzen. Ob es in der Leiste zieht, an der Außenseite drückt oder ins Bein ausstrahlt, macht für Diagnose und Behandlung einen großen Unterschied – manchmal liegt die Ursache gar nicht in der Hüfte.',
    finder: [
      ['In der Leiste', 'Ein typisches Zeichen für das Hüftgelenk selbst, häufig bei Hüftarthrose.'],
      ['An der Außenseite, vor allem im Liegen', 'Meist sind Sehnenansätze oder ein Schleimbeutel gereizt – nicht das Gelenk selbst.'],
      ['Nach dem Sitzen, beim Losgehen', 'Ein Anlaufschmerz kann auf eine beginnende Arthrose hinweisen.'],
      ['Im Gesäß, mit Ausstrahlung ins Bein', 'Hier kommt oft der Rücken als Ursache infrage.'],
      ['Beim Anziehen von Socken und Schuhen', 'Eine eingeschränkte Beweglichkeit der Hüfte – häufig bei fortschreitender Arthrose.'],
    ],
    causes: [
      { name: 'Hüftarthrose (Coxarthrose)', text: 'Leistenschmerz, kürzer werdende Gehstrecke, Steifigkeit. Oft lange ohne Operation behandelbar.', treatments: ['arthrosetherapie', 'kortison-infiltration', 'hyaluronsaeure', 'hueftprothese'] },
      { name: 'Gereizte Sehnenansätze an der Hüftaußenseite', text: 'Schmerz an der Außenseite, besonders beim Liegen auf der Seite.', treatments: ['stosswellentherapie', 'kortison-infiltration', 'eigenbluttherapie'] },
      { name: 'Ausstrahlung aus dem Rücken', text: 'Wirbelgelenke, ISG oder eine gereizte Nervenwurzel können sich wie Hüftschmerz anfühlen.', treatments: ['wirbelsaeulen-infiltration'] },
      { name: 'Leistenschmerz bei Sportler:innen', text: 'Sehnenansätze, Muskeln oder das Gelenk selbst – eine genaue Untersuchung klärt die Ursache.', treatments: ['sportmedizin', 'ultraschall'] },
    ],
    conservative: ['arthrosetherapie', 'kortison-infiltration', 'stosswellentherapie', 'hyaluronsaeure', 'eigenbluttherapie'],
    operative: ['hueftprothese'],
    faq: [
      ['Hüftschmerzen beim Liegen auf der Seite – was ist das?', 'Häufig sind Sehnenansätze oder ein Schleimbeutel an der Hüftaußenseite gereizt. Das lässt sich oft gut ohne Operation behandeln.'],
      ['Kommen meine Schmerzen von der Hüfte oder vom Rücken?', 'Leistenschmerz spricht eher für das Hüftgelenk, Gesäßschmerz mit Ausstrahlung eher für den Rücken. Mit Untersuchung und Ultraschall lässt sich das meist gut unterscheiden.'],
      ['Wann brauche ich eine Hüftprothese?', 'Wenn die Behandlung ohne Operation nicht mehr ausreicht und Schmerzen Ihren Alltag bestimmen. Den Zeitpunkt finden wir gemeinsam.'],
    ],
  },

  {
    slug: 'rueckenschmerzen',
    region: 'ruecken',
    name: 'Rückenschmerzen',
    h1: 'Rückenschmerzen',
    h1b: 'Abklären, aktiv werden, gezielt behandeln.',
    seoTitle: 'Rückenschmerzen: Ursachen & Behandlung | Orthopäde Salzburg',
    description: 'Kreuzschmerzen, Ischias, Bandscheibe, ISG oder Facettengelenke: genaue Abklärung, gezielte Infiltration und Training beim Orthopäden in Salzburg.',
    lead: 'Rückenschmerzen gehören zu den häufigsten Gründen für einen Besuch beim Orthopäden. Infrage kommen sehr unterschiedliche Ursachen: Wirbelgelenke, Bandscheiben, das Kreuz-Darmbein-Gelenk, Muskeln oder Nerven. Oft lässt sich keine einzelne Ursache festmachen – das ist meist kein Grund zur Sorge. Entscheidend ist, in Bewegung zu bleiben; steckt eine bestimmte Ursache dahinter, behandle ich gezielt.',
    finder: [
      ['Tief im Kreuz, schlimmer beim Zurückbeugen', 'Häufig sind die kleinen Wirbelgelenke beteiligt, oft nach langem Stehen.'],
      ['Einseitig über dem Gesäß', 'Oft ist das Kreuz-Darmbein-Gelenk (ISG) beteiligt.'],
      ['Ausstrahlung ins Bein', 'Kann auf eine gereizte Nervenwurzel hinweisen, etwa durch einen Bandscheibenvorfall – besonders mit Kribbeln oder Taubheit.'],
      ['Plötzlich nach dem Heben', 'Der klassische Hexenschuss – meist muskulär, aber sehr schmerzhaft.'],
      ['Morgens lange steif', 'Kann auf eine entzündliche Ursache hinweisen und sollte abgeklärt werden.'],
    ],
    causes: [
      { name: 'Wirbelgelenke (Facettengelenke)', text: 'Verschleiß und Reizung der kleinen Wirbelgelenke. Neben Bewegung und Training kann eine gezielte Infiltration helfen.', treatments: ['wirbelsaeulen-infiltration'] },
      { name: 'Kreuz-Darmbein-Gelenk (ISG)', text: 'Einseitiger Schmerz über dem Gesäß. Eine Infiltration kann lindern und Hinweise auf die Ursache geben.', treatments: ['wirbelsaeulen-infiltration'] },
      { name: 'Bandscheibenvorfall', text: 'Nervenschmerz mit Ausstrahlung ins Bein. Viele Vorfälle bessern sich ohne Operation.', treatments: ['wirbelsaeulen-infiltration'] },
      { name: 'Muskuläre und unspezifische Rückenschmerzen', text: 'Der häufigste Rückenschmerz: Verspannung und Überlastung, oft ohne einzelne erkennbare Ursache. Bewegung, Physiotherapie und Training helfen hier meist mehr als Schonung.', treatments: [] },
    ],
    // Active treatment comes first for back pain; injections support it.
    activeFirst: true,
    conservative: ['wirbelsaeulen-infiltration'],
    extraConservative: ['Physiotherapie und medizinisches Training im healthlab', 'Schmerztherapie, abgestimmt auf Ihre Beschwerden'],
    operative: [],
    network: 'Wirbelsäulen- und Bandscheibenoperationen übernehmen erfahrene Wirbelsäulen- und Neurochirurg:innen aus meinem Netzwerk – unter anderem direkt im healthlab. Ich begleite Sie davor und danach.',
    faq: [
      ['Muss ein Bandscheibenvorfall operiert werden?', 'Oft nicht – viele Bandscheibenvorfälle bessern sich unter konservativer Behandlung. Ob eine Operation zu besprechen ist, hängt von Ihren Beschwerden und Befunden ab.'],
      ['Was hilft bei akuten Kreuzschmerzen?', 'Meist hilft es, in Bewegung zu bleiben. Bessert sich der Schmerz nicht oder strahlt er ins Bein aus, lassen Sie ihn abklären. Kommen Taubheit im Gesäß- oder Genitalbereich, Probleme beim Wasserlassen oder eine zunehmende Schwäche im Bein dazu, fahren Sie bitte sofort in eine Notaufnahme.'],
      ['Bringt ein MRT bei Rückenschmerzen etwas?', 'Nicht immer. Nicht jede Veränderung im MRT erklärt die Schmerzen. Ich veranlasse es gezielt, wenn Untersuchung und Verlauf es nahelegen.'],
    ],
  },

  {
    slug: 'schulterschmerzen',
    region: 'schulter',
    name: 'Schulterschmerzen',
    h1: 'Schulterschmerzen',
    h1b: 'Die Ursache klären, Beweglichkeit fördern.',
    seoTitle: 'Schulterschmerzen: Ursachen & Behandlung | Orthopäde Salzburg',
    description: 'Schulterschmerzen beim Armheben, nachts oder nach einem Sturz: Engpass, Kalkschulter oder Schultersteife – mit Ultraschall abklären, in Salzburg behandeln.',
    lead: 'Die Schulter ist unser beweglichstes Gelenk – und dadurch anfällig. Viele Schulterschmerzen entstehen durch Sehnen, die unter dem Schulterdach eingeengt oder gereizt sind. Viele davon lassen sich ohne Operation behandeln.',
    finder: [
      ['Beim seitlichen Heben des Arms', 'Spricht häufig für ein Engpass-Syndrom (Impingement) unter dem Schulterdach.'],
      ['Nachts, beim Liegen auf der Schulter', 'Typisch für Reizungen der Schultersehnen, des Schleimbeutels oder für Kalkablagerungen.'],
      ['Plötzlich und sehr stark', 'Kann auf eine akut gereizte Kalkschulter hinweisen.'],
      ['Zunehmend steif in alle Richtungen', 'Spricht für eine Schultersteife (Frozen Shoulder).'],
      ['Nach einem Sturz, mit Kraftverlust', 'Kann auf eine Verletzung der Schultersehnen hinweisen – zeitnah abklären lassen.'],
    ],
    causes: [
      { name: 'Engpass-Syndrom und Schleimbeutelentzündung', text: 'Eingeengte Sehnen und ein gereizter Schleimbeutel. Infiltration und gezielte Übungen können helfen.', treatments: ['kortison-infiltration', 'ultraschall'] },
      { name: 'Kalkschulter', text: 'Kalkablagerungen in einer Sehne. Stoßwelle und Infiltration sind mögliche erste Schritte.', treatments: ['stosswellentherapie', 'kortison-infiltration'] },
      { name: 'Sehnenreizung und Sehnenriss', text: 'Reizungen oder Risse der Schultersehnen (Rotatorenmanschette) – im Ultraschall gut sichtbar.', treatments: ['ultraschall', 'eigenbluttherapie'] },
      { name: 'Schultersteife (Frozen Shoulder)', text: 'Schmerzhafte Einsteifung über längere Zeit. Infiltrationen und Physiotherapie können den Verlauf erleichtern.', treatments: ['kortison-infiltration'] },
    ],
    conservative: ['kortison-infiltration', 'stosswellentherapie', 'eigenbluttherapie', 'ultraschall'],
    operative: [],
    network: 'Schulteroperationen – etwa die Naht der Rotatorenmanschette – übernehmen spezialisierte Schulterchirurg:innen aus meinem Netzwerk in Salzburg und Bayern. Ich kläre ab, bereite vor und begleite die Nachbehandlung.',
    faq: [
      ['Was hilft bei Schulterschmerzen?', 'Das hängt von der Ursache ab. Häufig helfen gezielte Übungen, bei Reizzuständen auch eine Infiltration oder Stoßwelle. Was passt, klären wir in der Untersuchung.'],
      ['Hilft Stoßwelle bei Kalkschulter?', 'Die Stoßwellentherapie ist bei der Kalkschulter gut untersucht und kommt oft als Behandlung ohne Operation infrage.'],
      ['Muss eine gerissene Sehne operiert werden?', 'Nicht immer. Alter, Aktivität, Rissgröße und Beschwerden spielen eine Rolle. Ist eine Operation sinnvoll, vermittle ich Sie an spezialisierte Kolleg:innen.'],
    ],
  },

  {
    slug: 'ellenbogenschmerzen',
    region: 'ellenbogen',
    name: 'Ellenbogenschmerzen',
    h1: 'Ellenbogenschmerzen',
    h1b: 'Tennisellenbogen, Golferellenbogen und mehr.',
    seoTitle: 'Tennisellenbogen & Ellenbogenschmerzen | Orthopäde Salzburg',
    description: 'Tennisellenbogen, Golferellenbogen, Schleimbeutelentzündung: Ellenbogenschmerzen gezielt behandeln, etwa mit Stoßwelle oder Eigenblut. Salzburg.',
    lead: 'Schmerzen am Ellenbogen entstehen meist dort, wo die Unterarmmuskeln am Knochen ansetzen – durch Computerarbeit, Werkzeug, Sport oder Gartenarbeit. Sie können hartnäckig sein, lassen sich aber in den meisten Fällen ohne Operation behandeln.',
    finder: [
      ['Außen, beim Greifen und Tragen', 'Das typische Bild des Tennisellenbogens – auch bei Menschen, die nie Tennis spielen.'],
      ['Innen, beim Beugen des Handgelenks', 'Spricht für einen Golferellenbogen.'],
      ['Schwellung an der Ellenbogenspitze', 'Häufig eine Schleimbeutelentzündung, oft nach viel Aufstützen.'],
      ['Kribbeln in Ring- und Kleinfinger', 'Kann auf einen eingeengten Ellennerv hinweisen.'],
    ],
    causes: [
      { name: 'Tennisellenbogen', text: 'Überlastung der Sehnenansätze an der Außenseite. Am wichtigsten sind gezielte Übungen und eine angepasste Belastung; Stoßwelle oder Eigenblut können ergänzen.', treatments: ['stosswellentherapie', 'eigenbluttherapie'] },
      { name: 'Golferellenbogen', text: 'Das Gegenstück an der Innenseite, mit ähnlichen Behandlungsmöglichkeiten.', treatments: ['stosswellentherapie', 'eigenbluttherapie'] },
      { name: 'Schleimbeutelentzündung', text: 'Gefüllter Schleimbeutel an der Ellenbogenspitze. Ultraschall zeigt ihn direkt.', treatments: ['ultraschall', 'kortison-infiltration'] },
    ],
    conservative: ['stosswellentherapie', 'eigenbluttherapie', 'kortison-infiltration', 'ultraschall'],
    operative: [],
    network: 'Eine Operation am Ellenbogen ist selten nötig. Wenn doch, arbeite ich mit spezialisierten Kolleg:innen für Ellenbogen- und Nervenchirurgie zusammen.',
    faq: [
      ['Wie lange dauert ein Tennisellenbogen?', 'Das ist sehr unterschiedlich – manchmal Wochen, manchmal länger. Gezielte Übungen und Behandlungen können den Verlauf unterstützen.'],
      ['Hilft eine Bandage?', 'Eine spezielle Spange kann den Sehnenansatz entlasten – als Ergänzung zu Übungen und Therapie.'],
    ],
  },

  {
    slug: 'handschmerzen',
    region: 'hand',
    name: 'Hand & Handgelenk',
    h1: 'Schmerzen an Hand und Handgelenk',
    h1b: 'Wieder sicher greifen.',
    seoTitle: 'Handschmerzen & Karpaltunnel | Orthopäde Salzburg',
    description: 'Eingeschlafene Finger, schnellender Finger, Daumenschmerzen oder Ganglion: Ursachen und Behandlung von Handbeschwerden in Salzburg.',
    lead: 'Unsere Hände sind feine Werkzeuge – schon kleine Störungen machen sich im Alltag bemerkbar. Viele Beschwerden lassen sich mit Schiene oder Infiltration behandeln, manche mit einem kurzen, ambulanten Eingriff.',
    finder: [
      ['Eingeschlafene Finger in der Nacht', 'Kribbeln in Daumen, Zeige- und Mittelfinger ist typisch für ein Karpaltunnelsyndrom.'],
      ['Ein Finger bleibt hängen und springt', 'Spricht für einen schnellenden Finger.'],
      ['Schmerz an der Daumenbasis', 'Etwa beim Aufdrehen von Flaschen – häufig eine Arthrose des Daumensattelgelenks.'],
      ['Daumenseitig am Handgelenk', 'Kann auf eine Sehnenscheidenentzündung hinweisen.'],
      ['Eine prall-elastische Beule', 'Meist ein Ganglion („Überbein“) – gutartig, aber manchmal störend.'],
    ],
    causes: [
      { name: 'Karpaltunnelsyndrom', text: 'Eingeengter Nerv am Handgelenk. Zuerst Schiene oder Infiltration, bei Bedarf ein kurzer Eingriff.', treatments: ['kortison-infiltration', 'handchirurgie'] },
      { name: 'Schnellender Finger', text: 'Oft hilft eine Infiltration, sonst ein kurzer Eingriff am Ringband.', treatments: ['kortison-infiltration', 'handchirurgie'] },
      { name: 'Daumensattelgelenksarthrose', text: 'Schiene, gezielte Übungen und kleine Anpassungen im Alltag stehen am Anfang; Infiltrationen können ergänzen.', treatments: ['arthrosetherapie', 'kortison-infiltration', 'hyaluronsaeure'] },
      { name: 'Ganglion', text: 'Gutartige Zyste am Handgelenk oder Finger. Entfernung, wenn sie stört.', treatments: ['ultraschall', 'handchirurgie'] },
    ],
    conservative: ['kortison-infiltration', 'hyaluronsaeure', 'arthrosetherapie', 'ultraschall'],
    operative: ['handchirurgie'],
    faq: [
      ['Wann muss ein Karpaltunnelsyndrom operiert werden?', 'Wenn Schiene und Infiltration nicht ausreichen, die Beschwerden wiederkehren oder die Nervenmessung eine deutliche Einengung zeigt. Die Entscheidung treffen wir gemeinsam.'],
      ['Was hilft bei Daumensattelgelenksarthrose?', 'Eine Schiene, gezielte Übungen und – je nach Befund – Infiltrationen. Was sinnvoll ist, besprechen wir individuell.'],
    ],
  },

  {
    slug: 'fussschmerzen',
    region: 'fuss',
    name: 'Fuß & Sprunggelenk',
    h1: 'Schmerzen an Fuß und Sprunggelenk',
    h1b: 'Beschwerden klären, gezielt behandeln.',
    seoTitle: 'Fußschmerzen & Fersensporn | Orthopäde Salzburg',
    description: 'Fersensporn, Achillessehne, Hallux valgus, Morton-Neurom: Fuß- und Sprunggelenksschmerzen in Salzburg behandeln – mit Stoßwelle, Einlagen, Infiltration.',
    lead: 'Unsere Füße tragen uns jeden Tag. Wenn sie schmerzen, leidet die ganze Bewegung. Fersensporn, Achillessehnenreizung oder Ballenschmerz lassen sich häufig ohne Operation behandeln – wichtig ist, die genaue Ursache zu kennen.',
    finder: [
      ['Ferse, beim ersten Schritt am Morgen', 'Typisch für eine gereizte Sehnenplatte an der Fußsohle (Plantarfasziitis), oft mit Fersensporn.'],
      ['Hinten an der Ferse', 'Spricht für eine Reizung der Achillessehne oder ihres Ansatzes.'],
      ['Am Großzehenballen', 'Häufig ein Hallux valgus oder eine Arthrose des Großzehengrundgelenks.'],
      ['Brennend unter den Zehen', 'Kann auf ein Morton-Neurom oder eine Überlastung des Vorfußes hinweisen.'],
      ['Nach dem Umknicken', 'Häufig eine Bänderverletzung am Sprunggelenk.'],
    ],
    causes: [
      { name: 'Fersensporn und Plantarfasziitis', text: 'Der häufigste Fersenschmerz. Meist schmerzt die gereizte Sehnenplatte, nicht der Sporn selbst. Dehnung, Einlagen und Stoßwelle sind wichtige Bausteine.', treatments: ['stosswellentherapie', 'eigenbluttherapie', 'kortison-infiltration'] },
      { name: 'Achillessehnenreizung', text: 'Belastungsschmerz an der Sehne, häufig bei Läufer:innen. Stoßwelle und gezieltes Training können helfen.', treatments: ['stosswellentherapie', 'eigenbluttherapie'] },
      { name: 'Hallux valgus und Zehenfehlstellungen', text: 'Zuerst mit Schuhwerk und Einlagen, bei Beschwerden mit einer Korrektur.', treatments: ['fusschirurgie'] },
      { name: 'Morton-Neurom', text: 'Gereizter Nerv zwischen den Zehen. Einlagen und Infiltration, bei Bedarf ein Eingriff.', treatments: ['kortison-infiltration', 'fusschirurgie'] },
      { name: 'Sprunggelenksverletzung', text: 'Bänderverletzung nach dem Umknicken: untersuchen, stabilisieren, gezielt trainieren.', treatments: ['sportmedizin', 'ultraschall'] },
    ],
    conservative: ['stosswellentherapie', 'eigenbluttherapie', 'kortison-infiltration', 'hyaluronsaeure'],
    extraConservative: ['Einlagen und Schuhanpassung über die Orthopädietechnik im healthlab'],
    operative: ['fusschirurgie'],
    faq: [
      ['Was hilft bei Fersensporn?', 'Häufig eine Kombination aus Dehnübungen, Einlagen und Stoßwellentherapie. Welche Bausteine passen, besprechen wir nach der Untersuchung.'],
      ['Muss ein Bänderriss am Sprunggelenk operiert werden?', 'Meist nicht. Eine Schiene und gezieltes Training sind häufig ausreichend – das entscheiden wir nach der Untersuchung.'],
    ],
  },
];

export const conditionBySlug = Object.fromEntries(conditions.map((c) => [c.slug, c]));

// Names shown in the scrolling diagnoses list on the home page.
export const diagnoses = [
  'Kniearthrose', 'Meniskusriss', 'Fersensporn', 'Kalkschulter', 'Tennisellenbogen', 'Karpaltunnelsyndrom',
  'Hüftarthrose', 'Bandscheibenvorfall', 'Facettengelenke', 'Achillessehne', 'Schleimbeutelentzündung',
  'Hallux valgus', 'Schnellender Finger', 'Daumenarthrose', 'Kniescheibenschmerz', 'Bänderverletzung',
  'Muskelfaserriss', 'ISG-Beschwerden', 'Frozen Shoulder', 'Golferellenbogen', 'Morton-Neurom', 'Baker-Zyste',
  'Impingement', 'Kreuzbandverletzung', 'Ganglion', 'Plantarfasziitis', 'Hexenschuss',
];
