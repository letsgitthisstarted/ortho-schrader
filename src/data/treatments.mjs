// Treatment pages. Each entry renders /behandlungen/<slug>/.
// sections[].html is trusted, hand-written markup; sections with `steps` render as a sequence.
//
// Wording rules (Ärztegesetz § 53, ÖÄK-Verordnung "Arzt und Öffentlichkeit 2014"):
// factual and evidence-based, no promises, no comparisons with colleagues, no product or brand names,
// and no fixed numbers for doses, repetitions or recovery times – those are decided individually.

export const treatments = [
  // ───────────────────────────── Injektionen
  {
    slug: 'kortison-infiltration',
    group: 'injektion',
    name: 'Kortison-Infiltration',
    h1: 'Kortison-Infiltration',
    seoTitle: 'Kortison-Infiltration (Kortisonspritze) in Salzburg | Orthopäde Thomas Schrader',
    description: 'Gezielte Kortison-Infiltration bei entzündlichen Gelenk-, Schleimbeutel- und Sehnenscheidenbeschwerden – auf Wunsch ultraschallgezielt. Wahlarzt-Ordination für Orthopädie in Salzburg.',
    teaser: 'Gezielt gegen Entzündung – im Gelenk, im Schleimbeutel oder an der Sehnenscheide.',
    regions: ['schulter', 'ellenbogen', 'hand', 'huefte', 'knie', 'fuss'],
    lead: 'Bei einer Kortison-Infiltration – oft einfach „Kortisonspritze“ genannt – bringe ich ein entzündungshemmendes Medikament genau dorthin, wo die Beschwerden entstehen: in ein gereiztes Gelenk, einen entzündeten Schleimbeutel oder eine verengte Sehnenscheide. So kann die Entzündung zur Ruhe kommen, und Bewegung und Therapie werden wieder leichter möglich.',
    facts: [['Ort', 'ambulant in der Ordination'], ['Betäubung', 'örtlich'], ['Präzision', 'bei Bedarf ultraschallgezielt'], ['Planung', 'individuell nach Befund']],
    sections: [
      {
        id: 'wann', title: 'Wann eine Kortison-Infiltration infrage kommt',
        html: `<p>Kortison wirkt stark entzündungshemmend. Als Infiltration wirkt es dort, wo es gebraucht wird – ohne den ganzen Körper zu belasten wie eine Tablettenkur. Infrage kommt es, wenn eine Entzündung die Beschwerden antreibt, zum Beispiel bei:</p>
<ul>
<li><strong>Arthrose mit Reizzustand</strong> an Knie, Hüfte, Schulter oder Daumensattelgelenk</li>
<li><strong>Schleimbeutelentzündung</strong> an Schulter, Hüfte oder Ellenbogen</li>
<li><strong>Schnellendem Finger</strong> und Sehnenscheidenentzündung</li>
<li><strong>Karpaltunnelsyndrom</strong> im frühen Stadium</li>
<li><strong>Engpass-Syndrom der Schulter</strong> und Schultersteife</li>
<li><strong>Fersensporn</strong> und Nervenreizung am Vorfuß</li>
</ul>
<p>Ob eine Infiltration in Ihrem Fall sinnvoll ist, entscheiden wir gemeinsam nach der Untersuchung. Für den Rücken gibt es eigene Techniken – mehr unter <a href="/behandlungen/wirbelsaeulen-infiltration/">Infiltrationen an der Wirbelsäule</a>.</p>`,
      },
      {
        id: 'ablauf', title: 'So läuft die Behandlung ab',
        steps: [
          ['Untersuchung', 'Gespräch, Untersuchung und meist ein Ultraschall: Ist eine Infiltration hier wirklich der richtige Schritt?'],
          ['Infiltration', 'Nach sorgfältiger Desinfektion mit einer feinen Nadel – bei tiefen oder kleinen Zielen unter Ultraschallsicht.'],
          ['Kurze Pause', 'Sie bleiben ein paar Minuten in der Ordination und können danach nach Hause gehen.'],
          ['Weiter in Bewegung', 'Wie Sie das Gelenk in den Tagen danach belasten, besprechen wir individuell – ebenso, welche Übungen die Wirkung unterstützen.'],
        ],
      },
      {
        id: 'erwarten', title: 'Was Sie erwarten können',
        html: `<p>Viele Patient:innen spüren nach einigen Tagen eine deutliche Erleichterung. Wie stark und wie lange die Wirkung anhält, ist allerdings sehr unterschiedlich. Kortison beruhigt die Entzündung – Knorpel aufbauen oder eine Sehne reparieren kann es nicht. Deshalb gehört die Infiltration meist zu einem Plan mit Bewegung, Physiotherapie oder anderen Bausteinen wie <a href="/behandlungen/stosswellentherapie/">Stoßwelle</a>.</p>
<p>Ob und wann eine Infiltration wiederholt werden kann, entscheide ich individuell und zurückhaltend.</p>`,
      },
      {
        id: 'risiken', title: 'Mögliche Nebenwirkungen',
        html: `<p>Wie jeder medizinische Eingriff hat auch eine Infiltration Risiken – etwa eine vorübergehende Reizung, Hautveränderungen an der Einstichstelle oder sehr selten eine Infektion. Bei Diabetes kann der Blutzucker vorübergehend ansteigen. Ihre persönlichen Risiken bespreche ich vor der Behandlung ausführlich mit Ihnen.</p>`,
      },
    ],
    faq: [
      ['Tut eine Kortisonspritze weh?', 'Die meisten empfinden sie als gut erträglich – ähnlich wie eine Blutabnahme. Häufig wird ein örtliches Betäubungsmittel beigemischt.'],
      ['Wie oft kann man Kortison spritzen?', 'Das lässt sich nicht pauschal beantworten. Es hängt vom Gelenk, vom Befund und davon ab, wie gut die Infiltration gewirkt hat. Ich setze Kortison zurückhaltend ein und entscheide jede Wiederholung gemeinsam mit Ihnen.'],
      ['Kortison oder Hyaluronsäure?', 'Beide haben unterschiedliche Aufgaben: Kortison beruhigt eine akute Entzündung, Hyaluronsäure soll die Gleitfähigkeit eines arthrotischen Gelenks verbessern. Was für Sie passt, hängt vom Befund ab.'],
    ],
    conditions: ['knieschmerzen', 'hueftschmerzen', 'schulterschmerzen', 'handschmerzen', 'fussschmerzen', 'ellenbogenschmerzen'],
    related: ['hyaluronsaeure', 'eigenbluttherapie', 'stosswellentherapie'],
  },

  {
    slug: 'hyaluronsaeure',
    group: 'injektion',
    name: 'Hyaluronsäure',
    h1: 'Hyaluronsäure-Injektion',
    seoTitle: 'Hyaluronsäure-Injektion bei Arthrose in Salzburg | Knie, Hüfte, Daumen',
    description: 'Hyaluronsäure bei Arthrose von Knie, Hüfte und kleinen Gelenken: Wirkung, Ablauf und Kosten. Wahlarzt-Ordination für Orthopädie Thomas Schrader in Salzburg.',
    teaser: 'Für mehr Gleitfähigkeit in arthrotischen Gelenken – an Knie, Hüfte und kleinen Gelenken.',
    regions: ['knie', 'huefte', 'hand', 'fuss', 'schulter'],
    lead: 'Hyaluronsäure ist ein natürlicher Bestandteil der Gelenkflüssigkeit – sie macht sie zäh, elastisch und gleitfähig. Bei Arthrose nimmt ihre Qualität ab. Eine Hyaluronsäure-Injektion („Hyaluronspritze“) soll die Gleitfähigkeit im Gelenk verbessern und so Schmerzen bei Bewegung lindern – vor allem bei leichter bis mittlerer Arthrose.',
    facts: [['Ort', 'ambulant in der Ordination'], ['Geeignet für', 'Knie, Hüfte und kleine Gelenke'], ['Präzision', 'bei Bedarf ultraschallgezielt'], ['Planung', 'individuell nach Stadium']],
    sections: [
      {
        id: 'fuer-wen', title: 'Für wen Hyaluronsäure infrage kommt',
        html: `<p>Typische Zeichen einer Arthrose sind Anlaufschmerzen am Morgen, Schmerzen nach längerem Gehen oder beim Stiegensteigen und ein Gelenk, das sich steif anfühlt. Vor allem in frühen und mittleren Stadien kann Hyaluronsäure ein sinnvoller Baustein sein – auch für Menschen, die eine Operation möglichst lange vermeiden möchten.</p>
<p>Bei weit fortgeschrittener Arthrose sind die Möglichkeiten begrenzt. Das bespreche ich offen mit Ihnen, bevor wir mit einer Behandlung beginnen.</p>`,
      },
      {
        id: 'ablauf', title: 'So läuft die Behandlung ab',
        steps: [
          ['Befund klären', 'Untersuchung, Ultraschall und – falls vorhanden – Ihr Röntgenbild zeigen, wie weit die Arthrose fortgeschritten ist.'],
          ['Gelenk vorbereiten', 'Ist das Gelenk geschwollen, wird ein Erguss bei Bedarf zuerst entlastet.'],
          ['Gezielte Injektion', 'An tiefen Gelenken wie der Hüfte und an kleinen Gelenken unter Ultraschallsicht.'],
          ['Individueller Plan', 'Wie viele Injektionen sinnvoll sind, hängt vom Präparat und von Ihrem Befund ab – das legen wir gemeinsam fest.'],
        ],
      },
      {
        id: 'erwarten', title: 'Was Sie erwarten können',
        html: `<p>Hyaluronsäure wirkt nicht sofort; eine mögliche Besserung baut sich über einige Wochen auf. Wie gut und wie lange sie wirkt, ist von Mensch zu Mensch verschieden – manche profitieren deutlich, andere weniger. Am besten wirkt sie als Teil eines Gesamtplans mit Bewegung und Muskelaufbau. Mehr dazu unter <a href="/behandlungen/arthrosetherapie/">Arthrose ohne Operation behandeln</a>.</p>`,
      },
      {
        id: 'kosten', title: 'Kosten',
        html: `<p>Hyaluronsäure wird von den gesetzlichen Krankenkassen in der Regel nicht übernommen; manche private Zusatzversicherungen erstatten einen Teil. Sie erhalten vor Beginn eine transparente Aufstellung.</p>`,
      },
    ],
    faq: [
      ['Wie schnell wirkt Hyaluronsäure?', 'Eine mögliche Besserung entwickelt sich meist über einige Wochen. Wie ausgeprägt sie ist, ist individuell verschieden.'],
      ['Muss die Behandlung wiederholt werden?', 'Das hängt davon ab, wie gut und wie lange sie bei Ihnen wirkt. Ob und wann eine Auffrischung sinnvoll ist, besprechen wir gemeinsam.'],
      ['Zahlt die Krankenkasse Hyaluronsäure?', 'In der Regel nicht. Private Zusatzversicherungen erstatten je nach Tarif einen Teil – am besten vorab nachfragen.'],
    ],
    conditions: ['knieschmerzen', 'hueftschmerzen', 'handschmerzen', 'fussschmerzen'],
    related: ['arthrosetherapie', 'eigenbluttherapie', 'kortison-infiltration'],
  },

  {
    slug: 'eigenbluttherapie',
    group: 'injektion',
    name: 'Eigenbluttherapie (PRP)',
    h1: 'Eigenbluttherapie (PRP)',
    seoTitle: 'Eigenbluttherapie (PRP) in Salzburg | Arthrose & Sehnenreizungen – Orthopäde',
    description: 'Eigenbluttherapie mit plättchenreichem Plasma (PRP) bei beginnender Arthrose, Tennisellenbogen und Sehnenreizungen: Ablauf, Studienlage und Kosten. Orthopädie Thomas Schrader, Salzburg.',
    teaser: 'Plasma aus dem eigenen Blut – bei beginnender Arthrose und hartnäckigen Sehnenreizungen.',
    regions: ['knie', 'ellenbogen', 'fuss', 'huefte', 'schulter'],
    lead: 'Bei der Eigenbluttherapie wird aus einer kleinen Menge Ihres eigenen Blutes plättchenreiches Plasma (PRP) gewonnen und gezielt injiziert. Die darin enthaltenen Wachstumsfaktoren sollen Entzündungen dämpfen und körpereigene Heilungsprozesse unterstützen. Verwendet wird ausschließlich Material aus Ihrem eigenen Körper.',
    facts: [['Ort', 'ambulant in der Ordination'], ['Material', 'ausschließlich körpereigen'], ['Präzision', 'bei Sehnen ultraschallgezielt'], ['Planung', 'individuell nach Befund']],
    sections: [
      {
        id: 'einsatz', title: 'Wann die Eigenbluttherapie infrage kommt',
        html: `<ul>
<li><strong>Beginnende Arthrose</strong> an Knie, Hüfte oder Sprunggelenk</li>
<li><strong>Tennis- und Golferellenbogen</strong>, wenn Schonung und Übungen nicht ausreichen</li>
<li><strong>Reizungen von Patella- und Achillessehne</strong></li>
<li><strong>Fersenschmerz</strong> durch eine gereizte Sehnenplatte (Plantarfasziitis)</li>
</ul>
<p>Gerade an Sehnen, an denen andere Injektionen ungünstig sein können, ist das Eigenblut eine mögliche Alternative.</p>`,
      },
      {
        id: 'ablauf', title: 'So läuft die Behandlung ab',
        steps: [
          ['Blutabnahme', 'Eine kleine Menge Blut aus der Armvene – wie beim Hausarzt.'],
          ['Aufbereitung', 'In einer Zentrifuge wird das plättchenreiche Plasma vom übrigen Blut getrennt.'],
          ['Injektion', 'Das Plasma wird gezielt in das Gelenk oder an die gereizte Sehne gegeben.'],
          ['Individueller Plan', 'Ob und wie oft die Behandlung wiederholt wird, legen wir gemeinsam fest.'],
        ],
      },
      {
        id: 'studien', title: 'Was die Studien sagen',
        html: `<p>Die Datenlage hat sich in den letzten Jahren deutlich erweitert, besonders bei beginnender Kniearthrose und beim Tennisellenbogen. Die Ergebnisse sind aber nicht einheitlich, und nicht alle sprechen gleich gut an. Ich empfehle die Eigenbluttherapie dort, wo sie nach aktuellem Wissen sinnvoll erscheint – und sage Ihnen auch, wenn ein anderer Weg mehr verspricht.</p>`,
      },
      {
        id: 'kosten', title: 'Kosten',
        html: `<p>Die Eigenbluttherapie ist eine Privatleistung; manche private Zusatzversicherungen erstatten einen Teil. Die Kosten erhalten Sie vorab schriftlich.</p>`,
      },
    ],
    faq: [
      ['Ist die Eigenbluttherapie schmerzhaft?', 'Die Blutabnahme kennen Sie. Die Injektion selbst ist kurz; an Sehnen kann danach für einige Zeit ein Druckgefühl bestehen.'],
      ['Wann merke ich eine Wirkung?', 'Eine mögliche Besserung entwickelt sich über Wochen, weil sich das Gewebe erst umbauen muss. Wie stark sie ausfällt, ist individuell verschieden.'],
      ['Gibt es Nebenwirkungen?', 'Da nur körpereigenes Material verwendet wird, sind Unverträglichkeiten sehr unwahrscheinlich. Eine vorübergehende Reizung an der Injektionsstelle ist möglich.'],
    ],
    conditions: ['knieschmerzen', 'ellenbogenschmerzen', 'fussschmerzen', 'hueftschmerzen'],
    related: ['hyaluronsaeure', 'stosswellentherapie', 'kortison-infiltration'],
  },

  {
    slug: 'wirbelsaeulen-infiltration',
    group: 'injektion',
    name: 'Infiltrationen an der Wirbelsäule',
    h1: 'Infiltrationen an der Wirbelsäule',
    seoTitle: 'Wirbelsäulen-Infiltration & Facetteninfiltration in Salzburg | Rückenschmerzen',
    description: 'Facetten- und ISG-Infiltration bei Rückenschmerzen: Schmerzen gezielt an der Quelle behandeln, kombiniert mit Physiotherapie und Training. Orthopädie Thomas Schrader, Salzburg.',
    teaser: 'Facetten- und ISG-Infiltrationen – Rückenschmerzen gezielt an der Quelle behandeln.',
    regions: ['ruecken'],
    lead: 'Rückenschmerzen gehen häufig von kleinen Strukturen aus: den Wirbelgelenken (Facettengelenken), dem Kreuz-Darmbein-Gelenk (ISG) oder einer gereizten Nervenwurzel. Bei einer Infiltration – umgangssprachlich „Spritze in den Rücken“ – wird ein Betäubungsmittel, je nach Befund mit einem entzündungshemmenden Zusatz, gezielt an diese Stelle gebracht. Das kann Schmerzen lindern und gleichzeitig zeigen, woher sie tatsächlich kommen.',
    facts: [['Ort', 'ambulant in der Ordination'], ['Ziel', 'Schmerz an der Quelle behandeln'], ['Kombination', 'mit Physiotherapie und Training'], ['Planung', 'individuell nach Befund']],
    sections: [
      {
        id: 'arten', title: 'Welche Infiltrationen es gibt',
        html: `<ul>
<li><strong>Facetteninfiltration</strong> – an den kleinen Wirbelgelenken der Lendenwirbelsäule, typisch bei tiefem Kreuzschmerz, der beim Zurückbeugen zunimmt</li>
<li><strong>ISG-Infiltration</strong> – am Kreuz-Darmbein-Gelenk, wenn der Schmerz einseitig über dem Gesäß sitzt</li>
<li><strong>Infiltrationen an Muskeln und Sehnenansätzen</strong> – bei schmerzhaften Verhärtungen</li>
</ul>
<p>Wenn eine bildgesteuerte Technik an der Nervenwurzel nötig ist, arbeite ich mit spezialisierten Kolleg:innen zusammen.</p>`,
      },
      {
        id: 'ablauf', title: 'So läuft die Behandlung ab',
        steps: [
          ['Genaue Untersuchung', 'Gezielte Tests grenzen ein, woher der Schmerz kommt. Vorhandene MRT- oder Röntgenbilder sehen wir uns gemeinsam an.'],
          ['Infiltration', 'Im Liegen und nach Desinfektion – meist in wenigen Minuten erledigt.'],
          ['Kurze Nachbeobachtung', 'Sie bleiben kurz in der Ordination, bevor Sie nach Hause gehen.'],
          ['Aktiv werden', 'Die schmerzärmere Zeit nutzen wir für Physiotherapie und Training – im healthlab direkt im selben Haus.'],
        ],
      },
      {
        id: 'plan', title: 'Mehr als eine Spritze',
        html: `<p>Eine Infiltration ersetzt keinen kräftigen, beweglichen Rücken. Ihr Wert liegt darin, den Schmerzkreislauf zu unterbrechen und Bewegung wieder möglich zu machen. Deshalb ist sie bei mir Teil eines Plans aus Physiotherapie, Training und – wo nötig – medikamentöser Behandlung. Ob und wann eine Wiederholung sinnvoll ist, entscheiden wir individuell.</p>`,
      },
      {
        id: 'operation', title: 'Wenn eine Operation zu besprechen ist',
        html: `<p>Die meisten Rückenschmerzen – auch viele Bandscheibenvorfälle – bessern sich ohne Operation. Ist eine Operation zu überlegen, arbeite ich mit erfahrenen Wirbelsäulen- und Neurochirurg:innen zusammen, unter anderem direkt im healthlab.</p>`,
      },
    ],
    faq: [
      ['Ist eine Facetteninfiltration schmerzhaft?', 'Die meisten empfinden sie als gut erträglich: ein kurzer Einstich, örtlich betäubt, ambulant durchgeführt.'],
      ['Wie lange hält die Wirkung?', 'Das ist sehr unterschiedlich. Entscheidend ist, was in der schmerzärmeren Zeit passiert – aktive Therapie trägt viel dazu bei, dass die Besserung anhält.'],
      ['Hilft eine Infiltration beim Bandscheibenvorfall?', 'Sie kann Nervenschmerzen lindern und so die Zeit überbrücken, in der sich der Vorfall zurückbildet. Ob sie in Ihrem Fall sinnvoll ist, klären wir in der Untersuchung.'],
    ],
    conditions: ['rueckenschmerzen', 'hueftschmerzen'],
    related: ['kortison-infiltration', 'arthrosetherapie', 'stosswellentherapie'],
  },

  // ───────────────────────────── Ohne Operation
  {
    slug: 'stosswellentherapie',
    group: 'konservativ',
    name: 'Stoßwellentherapie',
    h1: 'Stoßwellentherapie (ESWT)',
    seoTitle: 'Stoßwellentherapie (ESWT) in Salzburg | Fersensporn, Kalkschulter, Tennisellenbogen',
    description: 'Extrakorporale Stoßwellentherapie bei Fersensporn, Kalkschulter, Tennisellenbogen und Sehnenreizungen – ohne Spritze und ohne Operation. Orthopädie Thomas Schrader, Salzburg.',
    teaser: 'Schallwellen von außen regen die Heilung an – ohne Spritze und ohne Schnitt.',
    regions: ['schulter', 'ellenbogen', 'huefte', 'knie', 'fuss'],
    lead: 'Bei der Stoßwellentherapie (ESWT) werden energiereiche Schallwellen von außen über die Haut in das schmerzende Gewebe geleitet. Sie sollen die Durchblutung und den Stoffwechsel anregen, Kalkablagerungen lockern und chronische Reizungen an Sehnenansätzen beruhigen – ohne Spritze, ohne Schnitt, ambulant in der Ordination.',
    facts: [['Ort', 'ambulant in der Ordination'], ['Ohne', 'Spritze und Schnitt'], ['Im Alltag', 'meist ohne Ausfallzeit'], ['Planung', 'mehrere Sitzungen, individuell']],
    sections: [
      {
        id: 'einsatz', title: 'Wann die Stoßwelle infrage kommt',
        html: `<ul>
<li><strong>Fersensporn</strong> und Fersenschmerz am Morgen (Plantarfasziitis)</li>
<li><strong>Kalkschulter</strong></li>
<li><strong>Tennis- und Golferellenbogen</strong></li>
<li><strong>Reizungen von Achilles- und Patellasehne</strong></li>
<li><strong>Schmerzen an der Hüftaußenseite</strong> durch gereizte Sehnenansätze</li>
</ul>
<p>Für einige dieser Beschwerden ist die Wirksamkeit in Studien gut untersucht – vor allem, wenn Schonung, Einlagen und Übungen allein nicht ausreichen.</p>`,
      },
      {
        id: 'ablauf', title: 'So läuft eine Sitzung ab',
        steps: [
          ['Stelle finden', 'Mit Ultraschall und Tastbefund lokalisiere ich die schmerzhafte Stelle.'],
          ['Behandlung', 'Über ein Kontaktgel gibt das Gerät die Impulse ab. Das ist spürbar – die Intensität passe ich laufend an Sie an.'],
          ['Danach', 'Sie können in der Regel gleich wieder Ihrem Alltag nachgehen. Wie viele Sitzungen sinnvoll sind, legen wir gemeinsam fest.'],
        ],
      },
      {
        id: 'erwarten', title: 'Was Sie erwarten können',
        html: `<p>Die Stoßwelle setzt einen Reiz – der Körper braucht danach Zeit, um das Gewebe umzubauen. Eine mögliche Besserung entwickelt sich daher oft erst über Wochen nach der Behandlung. Nicht in jedem Fall ist die Stoßwelle geeignet, etwa in der Schwangerschaft oder bei bestimmten Vorerkrankungen. Das klären wir vorab.</p>`,
      },
    ],
    faq: [
      ['Ist die Stoßwellentherapie schmerzhaft?', 'Sie ist spürbar und kann unangenehm sein. Ich beginne mit geringer Energie und passe die Stärke laufend an.'],
      ['Wie viele Sitzungen brauche ich?', 'Meist sind mehrere Sitzungen nötig. Wie viele, hängt von Ihren Beschwerden und vom Verlauf ab.'],
      ['Zahlt die Kasse die Stoßwellentherapie?', 'In der Regel nicht. Manche private Zusatzversicherungen übernehmen einen Teil.'],
    ],
    conditions: ['fussschmerzen', 'schulterschmerzen', 'ellenbogenschmerzen', 'hueftschmerzen', 'knieschmerzen'],
    related: ['eigenbluttherapie', 'kortison-infiltration', 'ultraschall'],
  },

  {
    slug: 'arthrosetherapie',
    group: 'konservativ',
    name: 'Arthrose ohne OP',
    h1: 'Arthrose behandeln – ohne Operation',
    seoTitle: 'Arthrose ohne Operation behandeln | Konservative Arthrosetherapie in Salzburg',
    description: 'Konservative Arthrosetherapie an Knie, Hüfte, Schulter, Hand und Fuß: Bewegung, Injektionen, Hilfsmittel und Medikamente zu einem individuellen Plan kombiniert. Orthopäde in Salzburg.',
    teaser: 'Bewegung, Injektionen und Hilfsmittel – damit das eigene Gelenk möglichst lange hält.',
    regions: ['knie', 'huefte', 'schulter', 'hand', 'fuss'],
    lead: 'Arthrose – also Gelenkverschleiß – ist nicht heilbar, aber gut behandelbar. Oft lassen sich Schmerzen lindern und eine Operation hinausschieben, manchmal sogar vermeiden. Entscheidend ist ein Plan, der zu Ihrem Gelenk, Ihrem Alltag und Ihren Zielen passt.',
    facts: [['Ziel', 'weniger Schmerz, mehr Bewegung'], ['Gelenke', 'Knie, Hüfte, Schulter, Hand, Fuß'], ['Im Haus', 'Physiotherapie und Training'], ['Planung', 'individuell, Schritt für Schritt']],
    sections: [
      {
        id: 'bausteine', title: 'Die Bausteine',
        html: `<ul>
<li><strong>Bewegung und Muskelaufbau</strong> – einer der wichtigsten Bausteine. Kräftige Muskeln entlasten das Gelenk.</li>
<li><strong>Injektionen</strong> – <a href="/behandlungen/kortison-infiltration/">Kortison</a> bei Reizzuständen, <a href="/behandlungen/hyaluronsaeure/">Hyaluronsäure</a> oder <a href="/behandlungen/eigenbluttherapie/">Eigenblut</a>, je nach Befund.</li>
<li><strong>Medikamente</strong> – gezielt und zeitlich begrenzt, wenn Schmerzen Bewegung verhindern.</li>
<li><strong>Hilfsmittel</strong> – Einlagen, Bandagen oder Orthesen, angepasst von der Orthopädietechnik im healthlab.</li>
<li><strong>Gewicht</strong> – weniger Körpergewicht entlastet vor allem Knie und Hüfte.</li>
</ul>`,
      },
      {
        id: 'stadien', title: 'Was in welchem Stadium hilft',
        html: `<p>In frühen Stadien stehen Training und Gewicht im Vordergrund, ergänzt durch Injektionen, wenn sie sinnvoll sind. Bei fortgeschrittener Arthrose geht es darum, Beschwerden zu lindern und Beweglichkeit zu erhalten – und gemeinsam abzuwägen, ob und wann ein Gelenkersatz infrage kommt.</p>`,
      },
      {
        id: 'op', title: 'Und wann eine Operation?',
        html: `<p>Wenn Schmerzen trotz aller Maßnahmen Schlaf, Gehstrecke und Alltag bestimmen, kann ein Gelenkersatz der nächste Schritt sein. Weil ich konservativ behandle und selbst operiere, kann ich Ihnen beide Wege nebeneinander erklären: <a href="/behandlungen/hueftprothese/">Hüftprothese</a> und <a href="/behandlungen/knieprothese/">Knieprothese</a>.</p>`,
      },
    ],
    faq: [
      ['Kann man Arthrose rückgängig machen?', 'Verlorener Knorpel wächst nicht nach. Schmerzen und Beweglichkeit lassen sich aber häufig deutlich verbessern.'],
      ['Ist Bewegung bei Arthrose schädlich?', 'In der Regel nicht – gelenkschonende Bewegung wie Radfahren oder Schwimmen ist meist sogar hilfreich. Was für Sie passt, besprechen wir individuell.'],
      ['Wann ist der richtige Zeitpunkt für eine Prothese?', 'Das entscheiden Sie – nicht das Röntgenbild. Wenn Sie Ihr Leben wegen des Gelenks stark einschränken müssen, wägen wir die Möglichkeiten gemeinsam ab.'],
    ],
    conditions: ['knieschmerzen', 'hueftschmerzen', 'handschmerzen', 'fussschmerzen', 'schulterschmerzen'],
    related: ['hyaluronsaeure', 'kortison-infiltration', 'knieprothese'],
  },

  {
    slug: 'ultraschall',
    group: 'konservativ',
    name: 'Ultraschall-Diagnostik',
    h1: 'Ultraschall des Bewegungsapparates',
    seoTitle: 'Ultraschall (Sonografie) des Bewegungsapparates in Salzburg | Orthopäde',
    description: 'Muskeln, Sehnen, Bänder, Schleimbeutel und Gelenkergüsse direkt sichtbar machen: Ultraschall beim ersten Termin in der Wahlarzt-Ordination Thomas Schrader, Salzburg.',
    teaser: 'Sehnen, Muskeln und Ergüsse direkt sichtbar – beim ersten Termin, ohne Strahlung.',
    regions: ['schulter', 'ellenbogen', 'hand', 'huefte', 'knie', 'fuss'],
    lead: 'Der Ultraschall (Sonografie) zeigt Sehnen, Muskeln, Bänder, Schleimbeutel und Gelenkergüsse in Echtzeit – ohne Strahlung und direkt während der Untersuchung. Viele Fragen lassen sich so schon beim ersten Termin klären. Ein Röntgen oder MRT veranlasse ich gezielt, wenn es für die Entscheidung nötig ist.',
    facts: [['Strahlung', 'keine'], ['Ergebnis', 'direkt während der Untersuchung'], ['Vorteil', 'Untersuchung in Bewegung'], ['Qualifikation', 'Diplom Sonografie']],
    sections: [
      {
        id: 'sichtbar', title: 'Was der Ultraschall zeigt',
        html: `<ul>
<li>Sehnenreizungen und -risse, etwa an Schulter oder Achillessehne</li>
<li>Entzündete Schleimbeutel</li>
<li>Gelenkergüsse und Zysten in der Kniekehle</li>
<li>Muskelverletzungen und Blutergüsse nach Sportverletzungen</li>
<li>Ganglien („Überbeine“) und Verkalkungen</li>
</ul>`,
      },
      {
        id: 'dynamisch', title: 'Untersuchung in Bewegung',
        html: `<p>Der Ultraschall zeigt Strukturen, während Sie sich bewegen – etwa ob eine Sehne unter dem Schulterdach einklemmt. Den Befund sehen Sie dabei gemeinsam mit mir am Bildschirm. Das macht ihn verständlich.</p>`,
      },
      {
        id: 'gezielt', title: 'Ultraschallgezielte Injektionen',
        html: `<p>Bei tiefen oder kleinen Zielen führe ich Injektionen unter Ultraschallsicht durch. So kommt das Medikament möglichst genau dort an, wo es wirken soll.</p>`,
      },
      {
        id: 'mrt', title: 'Wann zusätzlich Röntgen oder MRT?',
        html: `<p>Knochen, tiefe Knorpelschäden und Teile des Meniskus zeigt der Ultraschall nur eingeschränkt. Röntgen und MRT veranlasse ich dann gezielt, wenn sie die Behandlung beeinflussen.</p>`,
      },
    ],
    faq: [
      ['Brauche ich vor dem Termin ein MRT?', 'Nein. Ob ein MRT nötig ist, entscheiden wir nach der Untersuchung. Vorhandene Bilder bringen Sie gerne mit.'],
      ['Ersetzt der Ultraschall das MRT?', 'Nicht immer. Für Sehnen, Muskeln und Schleimbeutel ist er oft sehr aussagekräftig, für Knochen, Knorpel und Bandscheiben braucht es Röntgen oder MRT.'],
    ],
    conditions: ['schulterschmerzen', 'knieschmerzen', 'hueftschmerzen', 'ellenbogenschmerzen', 'fussschmerzen', 'handschmerzen'],
    related: ['kortison-infiltration', 'sportmedizin', 'stosswellentherapie'],
  },

  // ───────────────────────────── Operationen
  {
    slug: 'hueftprothese',
    group: 'operativ',
    name: 'Hüftprothese',
    h1: 'Hüftprothese (Hüft-TEP)',
    seoTitle: 'Hüftprothese in Salzburg | Künstliches Hüftgelenk (Hüft-TEP) – Orthopäde Thomas Schrader',
    description: 'Künstliches Hüftgelenk bei fortgeschrittener Hüftarthrose: wann eine Hüft-TEP infrage kommt, Ablauf, Aufenthalt und Reha. Operation an der Privatklinik Wehrle-Diakonissen in Salzburg.',
    teaser: 'Wenn die Hüfte den Alltag bestimmt: ein künstliches Gelenk, sorgfältig geplant und persönlich begleitet.',
    regions: ['huefte'],
    lead: 'Wenn eine Hüftarthrose so weit fortgeschritten ist, dass Schmerzen Gehen, Schlaf und Alltag bestimmen, kann ein künstliches Hüftgelenk (Hüft-TEP) Beweglichkeit und Lebensqualität zurückbringen. Der Gelenkersatz ist seit meiner Ausbildung ein operativer Schwerpunkt. Ich operiere an der Privatklinik Wehrle-Diakonissen in Salzburg.',
    facts: [['Ort', 'Privatklinik Wehrle-Diakonissen'], ['Planung', 'individuell, am Röntgenbild'], ['Begleitung', 'von der Beratung bis zur Nachsorge'], ['Reha', 'stationär oder ambulant']],
    sections: [
      {
        id: 'wann', title: 'Wann eine Hüftprothese infrage kommt',
        html: `<p>Typische Zeichen einer fortgeschrittenen Hüftarthrose sind Leistenschmerzen, eine kürzer werdende Gehstrecke, Schmerzen in der Nacht und Schwierigkeiten beim Anziehen von Socken und Schuhen. Wenn die <a href="/behandlungen/arthrosetherapie/">Behandlung ohne Operation</a> nicht mehr ausreicht, kann der Gelenkersatz der nächste Schritt sein.</p>
<p>Den Zeitpunkt bestimmen Sie. Ich empfehle eine Operation, wenn der Leidensdruck es rechtfertigt – und sage Ihnen auch, wenn es dafür noch zu früh ist.</p>`,
      },
      {
        id: 'weg', title: 'Ihr Weg zum neuen Hüftgelenk',
        steps: [
          ['Beratung', 'Ausführliches Gespräch, Untersuchung und gemeinsame Abwägung: Ist jetzt der richtige Zeitpunkt?'],
          ['Planung', 'Implantatplanung am Röntgenbild, Narkosegespräch und alle Fragen zu Aufenthalt und Kosten.'],
          ['Operation', 'An der Privatklinik Wehrle-Diakonissen. Ich operiere Sie selbst und betreue Sie während des Aufenthalts.'],
          ['Rehabilitation', 'Stationär oder ambulant – im healthlab gibt es auch eine ambulante Reha im selben Haus.'],
          ['Nachsorge', 'Kontrollen in meiner Ordination, bis Sie Ihre Ziele erreicht haben.'],
        ],
      },
      {
        id: 'danach', title: 'Nach der Operation',
        html: `<p>Die Mobilisation beginnt in der Regel bald nach der Operation mit Unterstützung der Physiotherapie. Wann Sie wieder Auto fahren, arbeiten oder Sport treiben können, hängt vom Verlauf ab – einen realistischen Plan besprechen wir vor der Operation gemeinsam.</p>`,
      },
    ],
    faq: [
      ['Wie lange hält eine Hüftprothese?', 'Moderne Hüftprothesen halten bei vielen Patient:innen viele Jahre. Wie lange im Einzelfall, hängt unter anderem von Implantat, Knochenqualität und Belastung ab.'],
      ['Kann ich mit einer Hüftprothese Sport machen?', 'Gelenkschonende Sportarten wie Radfahren, Schwimmen oder Wandern sind häufig wieder gut möglich. Was für Sie passt, besprechen wir individuell.'],
      ['Wer übernimmt die Kosten?', 'Operationen an der Privatklinik werden in der Regel über eine private Zusatzversicherung (Sonderklasse) abgerechnet. Die Details klären wir vorab – auch, wenn Sie keine Zusatzversicherung haben.'],
    ],
    conditions: ['hueftschmerzen'],
    related: ['knieprothese', 'arthrosetherapie', 'hyaluronsaeure'],
  },

  {
    slug: 'knieprothese',
    group: 'operativ',
    name: 'Knieprothese',
    h1: 'Knieprothese (Knie-TEP)',
    seoTitle: 'Knieprothese in Salzburg | Künstliches Kniegelenk & Teilprothese – Orthopäde',
    description: 'Künstliches Kniegelenk bei fortgeschrittener Kniearthrose: Teil- oder Totalprothese, Planung, Operation an der Privatklinik Wehrle-Diakonissen und Nachsorge. Thomas Schrader, Salzburg.',
    teaser: 'Teil- oder Totalprothese: Gelenkersatz am Knie, individuell geplant und persönlich begleitet.',
    regions: ['knie'],
    lead: 'Bei fortgeschrittener Kniearthrose kann ein künstliches Kniegelenk Schmerzen lindern und Beweglichkeit zurückbringen. Je nachdem, wie viel des Gelenks betroffen ist, kommt eine Teilprothese (Schlittenprothese) oder eine Totalprothese (Knie-TEP) infrage. Die Knie-Endoprothetik ist einer meiner Schwerpunkte an der Privatklinik Wehrle-Diakonissen.',
    facts: [['Ort', 'Privatklinik Wehrle-Diakonissen'], ['Art', 'Teil- oder Totalprothese'], ['Begleitung', 'von der Beratung bis zur Nachsorge'], ['Reha', 'aktiv und individuell']],
    sections: [
      {
        id: 'art', title: 'Teil- oder Totalprothese?',
        html: `<p>Ist nur ein Teil des Knies verschlissen und sind die Bänder intakt, kann eine <strong>Teilprothese</strong> genügen – sie ersetzt nur den betroffenen Abschnitt. Ist das ganze Gelenk betroffen, ist meist eine <strong>Totalprothese</strong> die passendere Lösung. Welche für Sie infrage kommt, entscheiden wir anhand von Untersuchung und Röntgen gemeinsam.</p>`,
      },
      {
        id: 'weg', title: 'Ihr Weg zum neuen Kniegelenk',
        steps: [
          ['Beratung', 'Untersuchung, Röntgen und gemeinsame Einschätzung, ob und welche Prothese sinnvoll ist.'],
          ['Planung', 'Implantatplanung, Narkosegespräch und Vorbereitung – auch mit Übungen schon vor der Operation.'],
          ['Operation', 'An der Privatklinik Wehrle-Diakonissen, durchgeführt von mir persönlich.'],
          ['Rehabilitation', 'Das Knie braucht aktive Reha: Beugung, Streckung und Kraft werden gezielt trainiert.'],
          ['Nachsorge', 'Kontrollen in meiner Ordination, bis das Knie wieder gut belastbar ist.'],
        ],
      },
      {
        id: 'danach', title: 'Realistische Erwartungen',
        html: `<p>Ein künstliches Knie braucht Zeit, bis es sich vertraut anfühlt – oft länger als eine Hüfte. Wie schnell es vorangeht, hängt von Ausgangslage, Reha und Verlauf ab. Einen realistischen Zeitplan besprechen wir vor der Operation.</p>`,
      },
    ],
    faq: [
      ['Teilprothese oder Totalprothese?', 'Das hängt davon ab, wie viel des Gelenks verschlissen ist und ob die Bänder intakt sind. Die Teilprothese ist kleiner, passt aber nicht für jedes Knie.'],
      ['Wie lange hält eine Knieprothese?', 'Moderne Knieprothesen halten bei vielen Patient:innen viele Jahre. Wie lange im Einzelfall, hängt von mehreren Faktoren ab.'],
      ['Wann kann ich wieder Rad fahren oder wandern?', 'Das ist individuell verschieden und hängt vom Verlauf der Reha ab. Gelenkschonende Aktivitäten sind häufig wieder gut möglich.'],
    ],
    conditions: ['knieschmerzen'],
    related: ['hueftprothese', 'kniearthroskopie', 'arthrosetherapie'],
  },

  {
    slug: 'kniearthroskopie',
    group: 'operativ',
    name: 'Kniearthroskopie',
    h1: 'Kniearthroskopie (Kniespiegelung)',
    seoTitle: 'Kniearthroskopie (Kniespiegelung) in Salzburg | Meniskus – Orthopäde Thomas Schrader',
    description: 'Kniearthroskopie bei eingeklemmtem Meniskusriss, freien Gelenkkörpern und Blockaden – mit sorgfältiger Indikation. Operation an der Privatklinik Wehrle-Diakonissen, Salzburg.',
    teaser: 'Gelenkspiegelung über kleine Zugänge – bei Meniskusriss, freien Gelenkkörpern und Blockaden.',
    regions: ['knie'],
    lead: 'Bei einer Kniearthroskopie – auch Kniespiegelung genannt – wird das Kniegelenk über kleine Hautschnitte mit einer Kamera untersucht und behandelt. Typische Gründe sind ein Meniskusriss, der das Knie blockiert, oder freie Gelenkkörper. Wichtig ist eine sorgfältige Indikation: Nicht jedes schmerzende Knie profitiert von einer Arthroskopie.',
    facts: [['Ort', 'Privatklinik Wehrle-Diakonissen'], ['Zugang', 'über kleine Hautschnitte'], ['Ziel', 'so viel Meniskus wie möglich erhalten'], ['Planung', 'individuell nach Befund']],
    sections: [
      {
        id: 'wann', title: 'Wann eine Arthroskopie infrage kommt',
        html: `<ul>
<li>Das Knie <strong>blockiert</strong> oder klemmt – häufig durch einen eingeschlagenen Meniskusriss</li>
<li>Ein <strong>frischer Meniskusriss</strong>, der sich möglicherweise nähen lässt</li>
<li><strong>Freie Gelenkkörper</strong>, die das Gelenk reizen</li>
<li>Bestimmte <strong>umschriebene Knorpelschäden</strong></li>
</ul>`,
      },
      {
        id: 'nicht', title: 'Wann eher nicht',
        html: `<p>Bei Kniearthrose ohne Blockaden zeigt eine Arthroskopie nach heutigem Wissen meist keinen Vorteil gegenüber gezielter Physiotherapie. In diesem Fall bespreche ich mit Ihnen, welche <a href="/behandlungen/arthrosetherapie/">Behandlungen ohne Operation</a> sinnvoll sind.</p>`,
      },
      {
        id: 'meniskus', title: 'Meniskus: erhalten, wo es geht',
        html: `<p>Der Meniskus dämpft und stabilisiert das Knie – so viel wie möglich davon soll erhalten bleiben. Je nach Rissform und Lage kann er genäht oder sparsam geglättet werden. Was in Ihrem Fall infrage kommt, besprechen wir vorab.</p>`,
      },
      {
        id: 'kreuzband', title: 'Kreuzbandverletzungen',
        html: `<p>Nach einer Kreuzbandverletzung untersuche ich Sie zeitnah, kläre Begleitverletzungen und berate Sie zu Operation oder konservativer Behandlung. Den Kreuzbandersatz selbst übernehmen spezialisierte Kniechirurg:innen aus meinem Netzwerk; Vorbereitung und Nachbehandlung können bei mir bleiben.</p>`,
      },
    ],
    faq: [
      ['Muss ein Meniskusriss operiert werden?', 'Nicht immer. Viele, vor allem verschleißbedingte Risse lassen sich ohne Operation behandeln. Eine Operation kommt eher bei Blockaden oder bestimmten Rissformen infrage.'],
      ['Wie lange bin ich nach einer Kniearthroskopie im Krankenstand?', 'Das hängt vom Eingriff und von Ihrer Tätigkeit ab. Einen realistischen Zeitraum besprechen wir vor der Operation.'],
      ['Wer operiert mein Kreuzband?', 'Spezialisierte Kolleg:innen aus meinem Netzwerk in Salzburg und Bayern. Ich begleite Sie von der Diagnose bis zur Rückkehr in den Alltag und Sport.'],
    ],
    conditions: ['knieschmerzen'],
    related: ['knieprothese', 'sportmedizin', 'ultraschall'],
  },

  {
    slug: 'handchirurgie',
    group: 'operativ',
    name: 'Handchirurgie',
    h1: 'Handchirurgie: Karpaltunnel & schnellender Finger',
    seoTitle: 'Karpaltunnelsyndrom-OP & schnellender Finger in Salzburg | Handchirurgie – Orthopäde',
    description: 'Karpaltunnelsyndrom, schnellender Finger, Ganglion: zuerst Schiene und Infiltration, wenn nötig ein ambulanter Eingriff in örtlicher Betäubung. Orthopäde Thomas Schrader, Salzburg.',
    teaser: 'Kleine, ambulante Eingriffe bei Karpaltunnel, schnellendem Finger und Ganglion.',
    regions: ['hand'],
    lead: 'Eingeschlafene Finger in der Nacht oder ein Finger, der hängen bleibt und dann springt: Viele Beschwerden an der Hand lassen sich zunächst mit Schiene oder Infiltration behandeln. Reicht das nicht, kann ein kurzer, ambulanter Eingriff in örtlicher Betäubung helfen.',
    facts: [['Setting', 'ambulant'], ['Betäubung', 'örtlich'], ['Zuerst', 'Schiene oder Infiltration'], ['Planung', 'individuell nach Befund']],
    sections: [
      {
        id: 'karpaltunnel', title: 'Karpaltunnelsyndrom',
        html: `<p>Im Karpaltunnel am Handgelenk verläuft der Mittelnerv. Wird es dort eng, kribbeln oder schlafen Daumen, Zeige- und Mittelfinger ein – oft nachts. Im frühen Stadium können eine Nachtschiene oder eine <a href="/behandlungen/kortison-infiltration/">Infiltration</a> helfen. Bleiben die Beschwerden oder zeigt die Nervenmessung eine deutliche Einengung, wird in einem kurzen Eingriff das einengende Band durchtrennt, damit der Nerv wieder Platz hat.</p>`,
      },
      {
        id: 'finger', title: 'Schnellender Finger',
        html: `<p>Eine verdickte Beugesehne bleibt an einem Ringband hängen, der Finger schnappt beim Strecken. Häufig wird zuerst eine Infiltration an der Sehnenscheide versucht. Kehren die Beschwerden zurück, kann das Ringband in einem kurzen Eingriff gespalten werden.</p>`,
      },
      {
        id: 'ganglion', title: 'Ganglion und Daumensattelgelenk',
        html: `<p>Ganglien („Überbeine“) sind gutartig und müssen nicht immer entfernt werden – nur, wenn sie stören oder auf einen Nerv drücken. Bei Arthrose des Daumensattelgelenks stehen Schiene, Infiltrationen und <a href="/behandlungen/hyaluronsaeure/">Hyaluronsäure</a> an erster Stelle.</p>`,
      },
      {
        id: 'danach', title: 'Nach dem Eingriff',
        html: `<p>Die Hand wird anfangs hochgelagert, die Finger werden von Beginn an bewegt. Wann Sie die Hand wieder voll belasten können, hängt vom Eingriff und vom Heilungsverlauf ab. Kontrollen und Fadenentfernung erfolgen in meiner Ordination.</p>`,
      },
    ],
    faq: [
      ['Ist eine Karpaltunnel-OP schmerzhaft?', 'Der Eingriff erfolgt in örtlicher Betäubung. Danach reichen meist einfache Schmerzmittel.'],
      ['Wann kann ich die Hand wieder benutzen?', 'Leichte Tätigkeiten sind oft bald wieder möglich. Wann Sie die Hand voll belasten können, ist individuell und hängt vom Heilungsverlauf ab.'],
      ['Muss ein schnellender Finger operiert werden?', 'Nicht immer. Eine Infiltration kann ausreichen. Wenn nicht, ist der Eingriff kurz und ambulant.'],
    ],
    conditions: ['handschmerzen'],
    related: ['kortison-infiltration', 'fusschirurgie', 'hyaluronsaeure'],
  },

  {
    slug: 'fusschirurgie',
    group: 'operativ',
    name: 'Fußchirurgie',
    h1: 'Fußchirurgie',
    seoTitle: 'Fußchirurgie in Salzburg | Hammerzehe, Hallux valgus, Morton-Neurom – Orthopäde',
    description: 'Fußschmerzen und Fehlstellungen: zuerst konservativ mit Einlagen, Stoßwelle und Infiltrationen, wenn nötig mit kleineren Eingriffen am Vorfuß. Orthopäde Thomas Schrader, Salzburg.',
    teaser: 'Kleinere Eingriffe am Vorfuß – und davor alle Möglichkeiten ohne Operation.',
    regions: ['fuss'],
    lead: 'Unsere Füße tragen uns jeden Tag – und machen sich meist erst bemerkbar, wenn jeder Schritt schmerzt. Als Mitglied der Deutschen Assoziation für Fuß und Sprunggelenk (DAF) behandle ich Fehlstellungen und Schmerzen am Fuß zuerst ohne Operation und, wenn nötig, mit kleineren Eingriffen.',
    facts: [['Zuerst', 'Einlagen, Stoßwelle, Infiltration'], ['Eingriffe', 'kleinere Eingriffe am Vorfuß'], ['Betäubung', 'örtlich oder Teilnarkose'], ['Mitglied', 'DAF – Fuß und Sprunggelenk']],
    sections: [
      {
        id: 'konservativ', title: 'Zuerst ohne Operation',
        html: `<p>Viele Fußprobleme lassen sich ohne Operation behandeln: mit Einlagen und Schuhanpassungen über die Orthopädietechnik im Haus, mit <a href="/behandlungen/stosswellentherapie/">Stoßwelle</a> beim Fersensporn, mit gezielten <a href="/behandlungen/kortison-infiltration/">Infiltrationen</a> und mit Übungen für die Fußmuskulatur.</p>`,
      },
      {
        id: 'eingriffe', title: 'Häufige Eingriffe',
        html: `<ul>
<li><strong>Hammer- und Krallenzehen</strong>, wenn Druckstellen und Schmerzen im Schuh nicht anders zu lösen sind</li>
<li><strong>Morton-Neurom</strong> – ein gereizter, verdickter Nerv zwischen den Zehen</li>
<li><strong>Knöcherne Vorsprünge</strong> und Ganglien am Fuß</li>
<li><strong>Hallux valgus</strong> – Beratung und, je nach Ausprägung, operative Korrektur</li>
</ul>
<p>Für größere Rekonstruktionen am Rück- und Mittelfuß arbeite ich mit spezialisierten Fußchirurg:innen zusammen.</p>`,
      },
      {
        id: 'danach', title: 'Nach dem Eingriff',
        html: `<p>Je nach Eingriff tragen Sie für einige Zeit einen speziellen Entlastungsschuh. Wie lange, und wann Sie wieder normale Schuhe tragen können, besprechen wir individuell. Kontrollen erfolgen in meiner Ordination.</p>`,
      },
    ],
    faq: [
      ['Wann sollte ein Hallux valgus operiert werden?', 'Nicht wegen der Optik, sondern wenn er trotz passender Schuhe und Einlagen Beschwerden macht. Die Entscheidung treffen wir gemeinsam.'],
      ['Hilft Stoßwelle bei Fersensporn?', 'Die Stoßwellentherapie ist beim Fersensporn gut untersucht und für viele eine Möglichkeit ohne Operation.'],
    ],
    conditions: ['fussschmerzen'],
    related: ['stosswellentherapie', 'handchirurgie', 'sportmedizin'],
  },

  // ───────────────────────────── Sport & Unfall
  {
    slug: 'sportmedizin',
    group: 'sport',
    name: 'Sportmedizin & Unfallchirurgie',
    h1: 'Sportmedizin & Sportverletzungen',
    seoTitle: 'Sportmediziner & Unfallchirurg in Salzburg | Sportverletzungen abklären – Orthopäde',
    description: 'Abklärung nach Sportverletzung oder Unfall mit Untersuchung und Ultraschall, ein klarer Plan und eine schrittweise Rückkehr zum Sport. Wahlarzt Thomas Schrader, Salzburg.',
    teaser: 'Rasche Abklärung nach Sportverletzung oder Unfall – und ein Plan zurück zum Sport.',
    regions: ['knie', 'fuss', 'schulter'],
    lead: 'Ein Verdrehtrauma beim Skifahren, ein Stich in der Wade beim Laufen oder eine Schulter nach dem Sturz vom Rad: Nach einer Verletzung zählt eine rasche, genaue Diagnose. Als Sportmediziner und Unfallchirurg mit langjähriger notärztlicher Erfahrung sehe ich Sie nach Möglichkeit kurzfristig.',
    facts: [['Termine', 'nach Möglichkeit kurzfristig'], ['Diagnose', 'Untersuchung und Ultraschall'], ['Erfahrung', 'Notarzt seit 2001'], ['Qualifikation', 'Diplom Sportmedizin']],
    sections: [
      {
        id: 'verletzungen', title: 'Typische Verletzungen',
        html: `<ul>
<li><strong>Knie</strong> – Meniskus-, Innenband- und Kreuzbandverletzungen</li>
<li><strong>Sprunggelenk</strong> – Bänderverletzung nach dem Umknicken</li>
<li><strong>Muskel</strong> – Zerrung und Muskelfaserriss</li>
<li><strong>Schulter</strong> – Prellung, Schultereckgelenk und Auskugeln nach einem Sturz</li>
<li><strong>Sehnen</strong> – Reizungen an Achilles- und Patellasehne</li>
</ul>`,
      },
      {
        id: 'diagnose', title: 'Rasche Diagnose',
        html: `<p>Untersuchung und <a href="/behandlungen/ultraschall/">Ultraschall</a> klären viele Verletzungen schon beim ersten Termin. Röntgen oder MRT veranlasse ich gezielt, wenn sie für die Entscheidung gebraucht werden.</p>`,
      },
      {
        id: 'return', title: 'Zurück zum Sport',
        steps: [
          ['Schützen', 'Die erste Phase: Schwellung und Schmerz kontrollieren, das Gewebe schützen.'],
          ['Aufbauen', 'Beweglichkeit und Kraft zurückgewinnen – mit Physiotherapie und Training im healthlab.'],
          ['Testen', 'Die Rückkehr richtet sich nach Kraft, Stabilität und Belastbarkeit – nicht nach dem Kalender.'],
          ['Zurückkehren', 'Schrittweise Steigerung bis zum gewohnten Training.'],
        ],
      },
    ],
    faq: [
      ['Brauche ich nach einer Verletzung zuerst ein MRT?', 'Nein. Mit Untersuchung und Ultraschall lässt sich vieles direkt klären. Ein MRT veranlasse ich gezielt, wenn es gebraucht wird.'],
      ['Wann darf ich wieder Sport machen?', 'Wenn Kraft, Beweglichkeit und Stabilität es erlauben. Den Weg dorthin planen wir Schritt für Schritt.'],
    ],
    conditions: ['knieschmerzen', 'fussschmerzen', 'schulterschmerzen'],
    related: ['ultraschall', 'kniearthroskopie', 'eigenbluttherapie'],
  },
];

export const treatmentBySlug = Object.fromEntries(treatments.map((t) => [t.slug, t]));

// Second headline line (two-tone) and the short badges shown on tiles.
export const extras = {
  'kortison-infiltration': { claim: 'Gezielt gegen Entzündung.', badges: ['ambulant', 'ultraschallgezielt'] },
  hyaluronsaeure: { claim: 'Für mehr Gleitfähigkeit im Gelenk.', badges: ['bei Arthrose', 'ambulant'] },
  eigenbluttherapie: { claim: 'Mit Plasma aus dem eigenen Blut.', badges: ['körpereigen', 'ambulant'] },
  'wirbelsaeulen-infiltration': { claim: 'Rückenschmerzen an der Quelle behandeln.', badges: ['ambulant', 'mit Training kombiniert'] },
  stosswellentherapie: { claim: 'Ohne Spritze, ohne Schnitt.', badges: ['ohne Spritze', 'ambulant'] },
  arthrosetherapie: { claim: 'Das eigene Gelenk möglichst lange erhalten.', badges: ['ohne OP', 'individueller Plan'] },
  ultraschall: { claim: 'Der Befund, direkt beim Termin.', badges: ['strahlenfrei', 'beim ersten Termin'] },
  hueftprothese: { claim: 'Sorgfältig geplant, persönlich begleitet.', badges: ['Privatklinik', 'persönlich begleitet'] },
  knieprothese: { claim: 'Teil- oder Totalprothese, individuell geplant.', badges: ['Privatklinik', 'persönlich begleitet'] },
  kniearthroskopie: { claim: 'Über kleine Zugänge ins Gelenk.', badges: ['kleine Schnitte', 'Meniskus erhalten'] },
  handchirurgie: { claim: 'Kleine Eingriffe an der Hand.', badges: ['örtliche Betäubung', 'ambulant'] },
  fusschirurgie: { claim: 'Für schmerzfreies Auftreten.', badges: ['DAF-Mitglied', 'zuerst ohne OP'] },
  sportmedizin: { claim: 'Rasch zur Diagnose, schrittweise zurück zum Sport.', badges: ['Ultraschall', 'kurzfristige Termine'] },
};
