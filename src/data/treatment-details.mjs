// "Ausführlich erklärt": in-depth patient information per treatment page, shown as expandable topics.
// Each entry is [title, html]; the html is trusted, hand-written markup.
//
// Same wording rules as treatments.mjs: factual, no promises or superlatives, no comparisons,
// no brand names, and no fixed numbers for doses, repetitions or recovery times.

export const details = {
  'kortison-infiltration': [
    ['Welche Stellen behandelt werden können', `<p>Kortison wirkt dort, wo eine Entzündung die Beschwerden auslöst. Typische Ziele sind:</p>
<ul>
<li><strong>Gelenke</strong> bei einer aktivierten, also entzündlich gereizten Arthrose</li>
<li><strong>Schleimbeutel</strong>, etwa an Schulter, Hüfte oder Ellenbogen</li>
<li><strong>Sehnenscheiden</strong>, zum Beispiel beim schnellenden Finger</li>
<li><strong>Engstellen um Nerven</strong>, etwa im frühen Stadium eines Karpaltunnelsyndroms</li>
</ul>`],
    ['Warum ich mit Ultraschall arbeite', `<p>Mit dem Ultraschall sehe ich Sehnen, Schleimbeutel und Gelenkspalt während der Injektion. So gelangt das Medikament gezielt an die gereizte Stelle, und empfindliche Strukturen wie Sehnen oder Nerven lassen sich besser schonen. Den Befund sehen Sie dabei am Bildschirm mit.</p>`],
    ['Kortison – was dran ist an den Vorbehalten', `<p>Viele kennen Kortison als Tablette mit Wirkung auf den ganzen Körper. Bei einer Infiltration wird eine kleine Menge gezielt an eine Stelle gebracht; der Körper wird dadurch deutlich weniger belastet. Trotzdem ist Kortison kein Mittel, das man beliebig oft wiederholt. Wie häufig eine Infiltration sinnvoll ist, entscheiden wir anhand Ihres Verlaufs – und kombinieren sie mit Bewegung und Therapie, damit die Wirkung nicht nur von der Spritze abhängt.</p>`],
    ['Was Sie vorher und nachher beachten', `<ul>
<li>Sagen Sie mir vorab, ob Sie <strong>blutverdünnende Medikamente</strong> nehmen, an <strong>Diabetes</strong> leiden oder einen Infekt haben.</li>
<li>Bei Diabetes kann der Blutzucker vorübergehend ansteigen – messen Sie in den Tagen danach etwas häufiger.</li>
<li>Schonen Sie die behandelte Stelle kurz und steigern Sie die Belastung dann schrittweise.</li>
<li>Rötung, Überwärmung oder zunehmende Schmerzen sind selten. Melden Sie sich in diesem Fall bitte umgehend.</li>
</ul>`],
  ],

  hyaluronsaeure: [
    ['Wie Hyaluronsäure im Gelenk wirkt', `<p>Gesunde Gelenkflüssigkeit ist zäh und elastisch: Sie schmiert die Knorpelflächen und federt Stöße ab. Bei Arthrose wird sie dünner. Eine Injektion soll diese Eigenschaften unterstützen und das Gleiten im Gelenk erleichtern. Am meisten Erfahrung gibt es mit leichter bis mittlerer Kniearthrose.</p>`],
    ['Welche Präparate es gibt', `<p>Hyaluronsäure-Präparate unterscheiden sich vor allem in Molekülgröße und Vernetzung. Davon hängt ab, ob eine einzelne Gabe oder eine kurze Serie vorgesehen ist. Welches Präparat und welcher Ablauf zu Ihrem Gelenk passt, besprechen wir vor Behandlungsbeginn – inklusive der Kosten.</p>`],
    ['Mehr als eine Spritze', `<p>Hyaluronsäure wirkt am besten als Teil eines Plans: gezieltes Kräftigen der Muskulatur, gelenkschonende Bewegung und, wenn sinnvoll, Gewichtsreduktion. Physiotherapie und medizinisches Training finden Sie im selben Haus. So behandeln wir nicht nur das Gelenk, sondern auch das, was es entlastet.</p>`],
    ['Was Sie vorher und nachher beachten', `<ul>
<li>Bei einem frisch geschwollenen, entzündeten Gelenk beruhigen wir zuerst die Entzündung.</li>
<li>Nach der Injektion ist normale Alltagsbewegung meist gut möglich; größere Belastungen planen wir individuell.</li>
<li>Ein leichtes Druckgefühl kann vorkommen und klingt in der Regel rasch ab.</li>
</ul>`],
  ],

  eigenbluttherapie: [
    ['Wie das Plasma gewonnen wird', `<p>Zuerst wird Ihnen eine kleine Menge Blut abgenommen, wie bei einer Blutabnahme. In einer Zentrifuge trennen sich die Bestandteile; das plättchenreiche Plasma wird abgenommen und noch in derselben Sitzung gezielt injiziert, bei Sehnen ultraschallgezielt.</p>`],
    ['Wofür die Studienlage spricht', `<p>Am besten untersucht ist die Eigenbluttherapie bei <strong>beginnender Kniearthrose</strong>. Bei Sehnenbeschwerden wie dem Tennisellenbogen sind die Ergebnisse gemischt. Ich sage Ihnen offen, wie gut die Behandlung für Ihre Beschwerden untersucht ist – damit Sie in Ruhe abwägen können.</p>`],
    ['Was Sie vorher und nachher beachten', `<ul>
<li>Entzündungshemmende Schmerzmittel können die Wirkung abschwächen. Ob und wann Sie sie pausieren, besprechen wir vorab.</li>
<li>Trinken Sie am Behandlungstag ausreichend.</li>
<li>Nach der Injektion kann die Stelle für kurze Zeit empfindlicher sein. Die Belastung steigern wir danach schrittweise, abgestimmt auf Ihre Beschwerden.</li>
</ul>`],
  ],

  'wirbelsaeulen-infiltration': [
    ['Woher Rückenschmerzen kommen können', `<p>Hinter Rückenschmerzen stecken sehr unterschiedliche Ursachen: verspannte Muskulatur, gereizte kleine Wirbelgelenke, das Kreuz-Darmbein-Gelenk, eine Bandscheibe oder eine gereizte Nervenwurzel. Oft wirken mehrere zusammen. Deshalb steht am Anfang eine gründliche Untersuchung von Haltung, Beweglichkeit und Nervenfunktion – und erst danach die Frage, ob eine Infiltration sinnvoll ist.</p>`],
    ['Behandlung und Diagnose zugleich', `<p>Eine Infiltration kann Schmerzen lindern und zugleich Hinweise geben, woher sie kommen: Lässt der Schmerz nach der gezielten Betäubung eines Wirbelgelenks deutlich nach, spricht das dafür, dass dieses Gelenk beteiligt ist. Zusammen mit der Untersuchung hilft das, den weiteren Weg zu planen.</p>`],
    ['Was Sie vorher und nachher beachten', `<ul>
<li>Informieren Sie mich über <strong>blutverdünnende Medikamente</strong>, Allergien und einen bestehenden Diabetes.</li>
<li>Das Betäubungsmittel kann ein Bein vorübergehend schwer oder taub machen. Kommen Sie deshalb am besten mit Begleitung und fahren Sie an diesem Tag nicht selbst.</li>
<li>Die schmerzärmere Zeit danach ist ideal, um mit Physiotherapie und Training zu beginnen.</li>
</ul>`],
  ],

  stosswellentherapie: [
    ['Typische Einsatzgebiete', `<ul>
<li><strong>Fersensporn</strong> und Reizung der Fußsohlensehne</li>
<li><strong>Kalkschulter</strong> – Kalkablagerungen in der Sehne</li>
<li><strong>Tennis- und Golferellenbogen</strong></li>
<li><strong>Achillessehne</strong> und <strong>Patellasehne</strong> bei chronischer Reizung</li>
<li>Schmerzen an der <strong>Hüftaußenseite</strong> durch gereizte Sehnenansätze</li>
</ul>`],
    ['Radiale und fokussierte Stoßwelle', `<p>Es gibt zwei Formen: Die <strong>radiale</strong> Stoßwelle verteilt sich flächig und eignet sich für oberflächlich gelegene, größere Areale. Die <strong>fokussierte</strong> Stoßwelle bündelt ihre Energie in der Tiefe, etwa an einem Kalkdepot. Welche Form zu Ihrem Befund passt, besprechen wir nach der Untersuchung.</p>`],
    ['Ist die Behandlung schmerzhaft?', `<p>Die Stoßwelle kann an der gereizten Stelle unangenehm sein. Die Intensität wird an Ihr Empfinden angepasst und im Verlauf gesteigert. Eine Betäubung ist in der Regel nicht nötig – so können Sie rückmelden, wo genau es schmerzt, und die Behandlung trifft die richtige Stelle.</p>`],
    ['Wann die Stoßwelle nicht infrage kommt', `<p>Nicht angewendet wird sie unter anderem in der Schwangerschaft, bei bestimmten Gerinnungsstörungen oder gerinnungshemmenden Medikamenten, bei akuten Entzündungen oder Infektionen im Behandlungsgebiet und über offenen Wachstumsfugen. Das klären wir vorab im Gespräch.</p>`],
  ],

  arthrosetherapie: [
    ['Typische Anzeichen einer Arthrose', `<ul>
<li><strong>Anlaufschmerz:</strong> Das Gelenk ist morgens oder nach längerem Sitzen steif, die ersten Schritte schmerzen.</li>
<li><strong>Belastungsschmerz:</strong> Beschwerden beim Treppensteigen, längeren Gehen oder auf unebenem Boden.</li>
<li><strong>Eingeschränkte Beweglichkeit:</strong> Das Gelenk lässt sich nicht mehr ganz beugen oder strecken.</li>
<li><strong>Schwellung und Überwärmung:</strong> Das Gelenk ist zeitweise entzündlich gereizt („aktivierte Arthrose“).</li>
<li><strong>Ruhe- und Nachtschmerz</strong> in fortgeschrittenen Stadien.</li>
</ul>`],
    ['Wie Arthrose entsteht', `<p>Meist ist es nicht eine einzelne Ursache, sondern ein Zusammenspiel über viele Jahre. Neben Veranlagung und Alter spielen Fehlstellungen wie O- oder X-Beine, Übergewicht, einseitige Belastung, frühere Verletzungen an Meniskus, Bändern oder Knochen sowie entzündliche Gelenkerkrankungen eine Rolle. Diese Faktoren zu kennen hilft, gezielt gegenzusteuern.</p>`],
    ['Was Sie selbst tun können', `<ul>
<li>Regelmäßige, gelenkschonende Bewegung wie Radfahren, Schwimmen oder Gehen</li>
<li>Kräftigung der Muskulatur, die das Gelenk führt und entlastet</li>
<li>Gewichtsreduktion, wenn Übergewicht das Gelenk belastet</li>
<li>Passendes Schuhwerk und, wenn sinnvoll, Einlagen oder Bandagen</li>
</ul>
<p>Was davon für Sie am meisten bringt, erarbeiten wir gemeinsam – Physiotherapie und Training gibt es im selben Haus.</p>`],
  ],

  ultraschall: [
    ['Was der Ultraschall zeigt – und was nicht', `<p>Der Ultraschall zeigt Weichteile sehr gut: Sehnen, Muskeln, Bänder, Schleimbeutel, Gelenkergüsse und Kalkablagerungen. Das Innere von Knochen und tief liegende Knorpelflächen sieht er dagegen nicht. Dafür veranlasse ich, wenn es für die Entscheidung nötig ist, ein Röntgen oder MRT.</p>`],
    ['Untersuchung in Bewegung', `<p>Anders als ein Standbild kann der Ultraschall Strukturen in Bewegung zeigen: Gleitet die Sehne frei? Springt sie über? Klemmt etwas ein, wenn Sie den Arm heben? So lassen sich Beschwerden oft genau dort finden, wo sie im Alltag auftreten.</p>`],
    ['Ultraschallgezielte Injektionen', `<p>Ist eine Injektion sinnvoll, nutze ich den Ultraschall auch dafür. Das Medikament gelangt so gezielt an die gereizte Stelle, etwa in einen Schleimbeutel oder an eine Sehnenscheide.</p>`],
    ['Vorbereitung', `<p>Eine besondere Vorbereitung ist nicht nötig. Tragen Sie Kleidung, mit der sich die betroffene Region gut freimachen lässt, und bringen Sie vorhandene Befunde und Bilder mit.</p>`],
  ],

  hueftprothese: [
    ['Typische Anzeichen einer fortgeschrittenen Hüftarthrose', `<ul>
<li>Schmerzen in der Leiste, die oft bis zum Knie ausstrahlen</li>
<li>Anlaufschmerz und Steifigkeit nach dem Sitzen</li>
<li>Eine kürzer werdende Gehstrecke, Hinken</li>
<li>Mühe beim Anziehen von Socken und Schuhen oder beim Einsteigen ins Auto</li>
<li>Schmerzen in Ruhe und in der Nacht</li>
</ul>`],
    ['Aus welchen Teilen ein künstliches Hüftgelenk besteht', `<p>Bei einer Hüft-Totalendoprothese werden beide Gelenkpartner ersetzt: Eine <strong>Pfanne</strong> mit Gleitfläche („Inlay“) wird im Becken verankert, ein <strong>Schaft</strong> im Oberschenkelknochen, darauf sitzt ein <strong>Kopf</strong>. Pfanne und Kopf bilden zusammen das neue, glatte Gelenk.</p>`],
    ['Welche Prothese zu Ihnen passt', `<p>Es gibt unterschiedliche Bauformen. <strong>Kurzschaftprothesen</strong> werden knochensparend verankert, <strong>Standardschäfte</strong> sind seit Langem bewährt. Bei verminderter Knochenqualität kann der Schaft <strong>einzementiert</strong> werden, sonst wächst er zementfrei ein. Welche Variante passt, hängt von Ihrer Anatomie und Knochenqualität ab – das legen wir bei der Planung am Röntgenbild fest, ebenso Größe, Position und Beinlänge.</p>`],
    ['Gut vorbereitet in die Operation', `<ul>
<li>Kräftigende Übungen schon vor der Operation erleichtern die Zeit danach.</li>
<li>Entzündungsherde, etwa an den Zähnen, sollten vorab behandelt sein.</li>
<li>Planen Sie Unterstützung für die ersten Wochen zu Hause und denken Sie an Hilfsmittel wie Greifzange oder Sitzerhöhung.</li>
<li>Die Narkoseform – Vollnarkose oder Teilnarkose – besprechen Sie im Narkosegespräch.</li>
</ul>`],
  ],

  knieprothese: [
    ['Typische Anzeichen, wenn ein Kniegelenk verschleißt', `<ul>
<li><strong>Anlaufschmerz:</strong> Steifigkeit am Morgen oder nach längerem Sitzen, die sich nach einigen Schritten bessert</li>
<li><strong>Belastungsschmerz,</strong> besonders beim Treppab-Gehen und auf unebenem Boden</li>
<li><strong>Ruhe- und Nachtschmerz,</strong> der den Schlaf stört</li>
<li><strong>Bewegungseinschränkung:</strong> Das Knie lässt sich nicht mehr ganz strecken oder beugen</li>
<li><strong>Unsicherheit</strong> oder das Gefühl, dass das Knie wegknickt</li>
<li>Zunehmende <strong>O- oder X-Bein-Stellung</strong> und wiederkehrende <strong>Schwellungen</strong></li>
</ul>`],
    ['Mögliche Ursachen', `<p>Die häufigste Ursache ist eine fortgeschrittene Kniearthrose. Sie entsteht meist über viele Jahre aus einem Zusammenspiel von Veranlagung, Achsfehlstellungen, Übergewicht oder beruflicher Belastung – etwa viel Arbeit im Knien. Auch frühere Verletzungen an Kreuzband, Meniskus oder Knochen und entzündliche Erkrankungen wie Rheuma können ein Gelenk vorzeitig verschleißen lassen.</p>`],
    ['Woraus eine Knieprothese besteht', `<p>Ein künstliches Kniegelenk überzieht die verschlissenen Gelenkflächen wie eine Kappe: Eine Metallkomponente am Oberschenkel, ein Metallplateau am Schienbein und dazwischen eine Gleitfläche aus Kunststoff. Bei der Teilprothese wird nur der betroffene Abschnitt ersetzt, die Bänder bleiben erhalten. Ob die Rückfläche der Kniescheibe mitversorgt wird, entscheiden wir je nach Befund.</p>`],
    ['Gut vorbereitet in die Operation', `<ul>
<li>Übungen für Streckung und Oberschenkelmuskulatur schon vor der Operation zahlen sich in der Reha aus.</li>
<li>Entzündungsherde, etwa an den Zähnen, sollten vorab behandelt sein.</li>
<li>Planen Sie Unterstützung für die erste Zeit zu Hause ein.</li>
<li>Die Narkoseform besprechen Sie im Narkosegespräch.</li>
</ul>`],
  ],

  kniearthroskopie: [
    ['Wann eine Arthroskopie sinnvoll ist – und wann nicht', `<p>Eine Arthroskopie hilft vor allem bei klaren <strong>mechanischen Ursachen</strong>: einem eingeschlagenen Meniskusriss, der das Knie richtig blockiert, einem frischen Riss, der sich nähen lässt, oder einem freien Gelenkkörper. Bei Arthrose und verschleißbedingten Meniskusrissen – auch wenn das Knie gelegentlich hakt oder knackt – bringt der Eingriff nach heutigem Wissen meist keinen dauerhaften Vorteil gegenüber gezielter Physiotherapie. Deshalb empfehle ich den Eingriff nur, wenn Befund und Beschwerden zusammenpassen.</p>`],
    ['Meniskus erhalten', `<p>Der Meniskus schützt den Knorpel. Wo es der Riss zulässt, wird er deshalb genäht statt entfernt. Ist das nicht möglich, wird nur so viel geglättet oder entfernt wie nötig. Was bei Ihnen möglich ist, zeigt sich oft erst während des Eingriffs – die Möglichkeiten besprechen wir vorher.</p>`],
    ['Ablauf des Eingriffs', `<p>Über kleine Schnitte werden eine Kamera und feine Instrumente ins Knie eingeführt. Der Eingriff erfolgt in Narkose oder Teilnarkose und häufig ambulant oder mit kurzem Aufenthalt. Die Bilder aus dem Gelenk erkläre ich Ihnen bei der Nachkontrolle.</p>`],
    ['Nach dem Eingriff', `<p>Wie stark Sie das Knie anfangs belasten dürfen, hängt davon ab, was gemacht wurde: Nach einer Meniskusnaht ist die Schonung länger als nach einer Glättung. Physiotherapie hilft, Beweglichkeit und Kraft zurückzugewinnen. Einen Plan für Arbeit und Sport besprechen wir gemeinsam.</p>`],
  ],

  handchirurgie: [
    ['Woran Sie ein Karpaltunnelsyndrom erkennen', `<ul>
<li>Kribbeln oder Einschlafen von Daumen, Zeige- und Mittelfinger, oft nachts</li>
<li>Besserung durch Ausschütteln der Hand</li>
<li>Später Taubheit und Ungeschicklichkeit, etwa beim Knöpfen</li>
<li>In fortgeschrittenen Fällen ein Muskelschwund am Daumenballen</li>
</ul>
<p>Eine Nervenmessung zeigt, wie stark der Nerv eingeengt ist, und hilft bei der Entscheidung für oder gegen einen Eingriff.</p>`],
    ['Ablauf eines Eingriffs an der Hand', `<p>Die Eingriffe erfolgen ambulant in örtlicher Betäubung – Sie sind wach, spüren aber keinen Schmerz. Über einen kleinen Schnitt wird das einengende Band gespalten oder das Ganglion entfernt. Danach gehen Sie mit einem Verband nach Hause.</p>`],
    ['Was Sie nach dem Eingriff selbst tun können', `<ul>
<li>Die Hand in den ersten Tagen hochlagern</li>
<li>Die Finger von Beginn an regelmäßig bewegen</li>
<li>Den Verband trocken halten, bis die Wunde verheilt ist</li>
</ul>
<p>Wann Sie wieder arbeiten oder Sport treiben können, hängt vom Eingriff und Ihrem Beruf ab – das planen wir gemeinsam.</p>`],
  ],

  fusschirurgie: [
    ['Häufige Beschwerden am Vorfuß', `<ul>
<li><strong>Hallux valgus:</strong> Die Großzehe weicht zur Seite ab, am Ballen entsteht eine schmerzhafte Vorwölbung.</li>
<li><strong>Hammer- und Krallenzehen:</strong> gekrümmte Zehen mit Druckstellen im Schuh.</li>
<li><strong>Morton-Neurom:</strong> brennender, einschießender Schmerz zwischen den Zehen.</li>
<li><strong>Schmerzen unter dem Vorfußballen</strong>, oft durch Fehlbelastung.</li>
</ul>`],
    ['Ursachen und Vorbeugung', `<p>Veranlagung, enges oder hohes Schuhwerk, ein Spreiz- oder Senkfuß und Überlastung spielen häufig zusammen. Gut passende Schuhe mit ausreichend Platz für die Zehen, Einlagen zur Entlastung und Übungen für die Fußmuskulatur können Beschwerden deutlich lindern. Eine bestehende Fehlstellung korrigieren sie nicht – das kann, wenn sie stark stört, nur eine Operation.</p>`],
    ['Wann eine Operation sinnvoll ist', `<p>Nicht die Optik entscheidet, sondern Ihr Leidensdruck: Wenn Schmerzen trotz passender Schuhe, Einlagen und Therapie bleiben, kann ein Eingriff helfen. Welche Methode infrage kommt, hängt von Ausmaß der Fehlstellung und Zustand des Gelenks ab. Das besprechen wir anhand von Untersuchung und Röntgenbild in Ruhe.</p>`],
  ],

  sportmedizin: [
    ['Nach einer Verletzung zurück in den Sport', `<p>Die Rückkehr in den Sport erfolgt am besten Schritt für Schritt: von der Heilung über gezieltes Aufbautraining bis zur sportartspezifischen Belastung. Jeder Schritt richtet sich nach Kraft, Stabilität und Beschwerden – nicht nach dem Kalender. So sinkt das Risiko, sich erneut zu verletzen.</p>`],
    ['Überlastung früh erkennen', `<p>Viele Sportbeschwerden entstehen schleichend: an Sehnenansätzen, an der Achillessehne, an der Kniescheibe oder am Schienbein. Wer früh kommt, kann oft mit kleinen Anpassungen bei Training, Technik und Ausrüstung weitermachen, statt lange pausieren zu müssen.</p>`],
    ['Ganzheitlich betrachtet', `<p>Ich schaue nicht nur auf die schmerzende Stelle, sondern auf Trainingsumfang, Bewegungsabläufe, Schuhwerk und Erholung. Physiotherapie, Trainingstherapie und Orthopädietechnik im selben Haus machen es leicht, alles aufeinander abzustimmen.</p>`],
  ],
};
