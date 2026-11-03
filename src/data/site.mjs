// Practice-wide facts. Everything a patient might need to reach the practice lives here,
// so phone numbers or addresses only ever change in one place.

export const site = {
  name: 'Thomas Schrader',
  role: 'Facharzt für Orthopädie und Unfallchirurgie',
  roleShort: 'Orthopädie & Unfallchirurgie',
  motto: 'Behandeln, wie man selbst behandelt werden will.',
  domain: 'https://www.ortho-schrader.com',
  lang: 'de-AT',

  phone: '+43 660 857 40 00',
  phoneHref: 'tel:+436608574000',
  phoneReception: '+43 662 42 29 60',
  phoneReceptionHref: 'tel:+43662422960',
  email: 'schrader@healthlab.at',

  ordination: {
    name: 'healthlab Salzburg',
    street: 'Alpenstraße 99',
    zip: '5020',
    city: 'Salzburg',
    country: 'AT',
    geo: { lat: 47.7753442, lng: 13.0696156 },
    maps: 'https://www.google.com/maps/search/?api=1&query=healthlab+Alpenstra%C3%9Fe+99+5020+Salzburg',
    houseHours: [
      ['Montag – Freitag', '7 – 21 Uhr'],
      ['Samstag', '6 – 14 Uhr'],
    ],
    url: 'https://www.healthlab.at/',
  },

  clinic: {
    name: 'Privatklinik Wehrle-Diakonissen',
    city: 'Salzburg',
    url: 'https://www.privatklinik-wehrle-diakonissen.at/de/arzt/thomas-schrader',
  },

  bavaria: {
    name: 'OUCC Orthopädie Unfallchirurgie Chiemgau Berchtesgadener Land',
    short: 'OUCC Gemeinschaftspraxis',
    // TODO(Clemens): bitte prüfen, an welchem OUCC-Standort Papa aktuell Sprechstunde hat.
    location: 'Berchtesgadener Land, Bayern',
    phone: '+49 861 35 34',
    phoneHref: 'tel:+498613534',
    url: 'https://www.oucc.de/oucc-aerzte-team/thomas-schrader/',
  },

  // Who answers for the medical pages, shown under each of them and in the structured data.
  // Set medicallyReviewed to true (and update reviewed) only after Thomas has read and approved the texts –
  // only then do the pages say "Medizinisch geprüft" and tell search engines who reviewed them when.
  content: {
    updated: '2026-11-03',
    reviewed: '2026-11-03',
    medicallyReviewed: true, // PREVIEW ONLY: switched on to show Thomas the final look – he has not reviewed the texts yet. Set back to false if the site goes live before his review.
  },

  // Independent pages where patients can check who he is. Add the Ärzteliste/DocFinder entries once known.
  profiles: [
    { label: 'Arztprofil der Privatklinik Wehrle-Diakonissen', host: 'privatklinik-wehrle-diakonissen.at', url: 'https://www.privatklinik-wehrle-diakonissen.at/de/arzt/thomas-schrader' },
    { label: 'Ärzteteam der OUCC Orthopädie Unfallchirurgie', host: 'oucc.de', url: 'https://www.oucc.de/oucc-aerzte-team/thomas-schrader/' },
    { label: 'Patientenbewertungen auf Jameda', host: 'jameda.de', url: 'https://www.jameda.de/profil/thomas-schrader-2' },
  ],
};

// Body regions for the interactive body map, in figure units (the figure is 300 × 640, centre x = 150).
// points: one or two joints that light up together; line: the spine; chip: where the label sits.
export const regions = [
  {
    id: 'schulter', label: 'Schulter', points: [[226, 138], [74, 138]], r: 38, chip: [226, 138, 'right'],
    condition: 'schulterschmerzen',
    blurb: 'Schmerzen beim Heben des Arms, nachts beim Liegen oder nach einem Sturz.',
    causes: ['Engpass-Syndrom (Impingement)', 'Kalkschulter', 'Sehnenreizung oder -riss', 'Schultersteife'],
    treatments: ['kortison-infiltration', 'stosswellentherapie', 'ultraschall'],
  },
  {
    id: 'ellenbogen', label: 'Ellenbogen', points: [[239, 220], [61, 220]], r: 32, chip: [61, 220, 'left'],
    condition: 'ellenbogenschmerzen',
    blurb: 'Schmerzen an der Außen- oder Innenseite, beim Greifen, Tragen oder Schrauben.',
    causes: ['Tennisellenbogen', 'Golferellenbogen', 'Schleimbeutelentzündung', 'Eingeengter Nerv'],
    treatments: ['stosswellentherapie', 'eigenbluttherapie', 'kortison-infiltration'],
  },
  {
    id: 'hand', label: 'Hand', points: [[276, 334], [24, 334]], r: 34, chip: [24, 334, 'left'],
    condition: 'handschmerzen',
    blurb: 'Eingeschlafene Finger, ein schnappender Finger oder Schmerzen am Daumen.',
    causes: ['Karpaltunnelsyndrom', 'Schnellender Finger', 'Daumenarthrose', 'Ganglion'],
    treatments: ['handchirurgie', 'kortison-infiltration', 'hyaluronsaeure'],
  },
  {
    id: 'ruecken', label: 'Rücken', line: [[150, 104], [150, 300]], r: 26, chip: [150, 214, 'right'],
    condition: 'rueckenschmerzen',
    blurb: 'Kreuzschmerzen, Schmerzen mit Ausstrahlung ins Bein oder ein steifer Nacken.',
    causes: ['Wirbelgelenke', 'Kreuz-Darmbein-Gelenk (ISG)', 'Bandscheibenvorfall', 'Muskuläre Verspannung'],
    treatments: ['wirbelsaeulen-infiltration', 'arthrosetherapie'],
  },
  {
    id: 'huefte', label: 'Hüfte', points: [[188, 338], [112, 338]], r: 36, chip: [188, 338, 'right'],
    condition: 'hueftschmerzen',
    blurb: 'Leistenschmerz, Schmerzen an der Außenseite oder ein Anlaufschmerz nach dem Sitzen.',
    causes: ['Hüftarthrose', 'Gereizte Sehnenansätze', 'Ausstrahlung aus dem Rücken'],
    treatments: ['hueftprothese', 'hyaluronsaeure', 'stosswellentherapie'],
  },
  {
    id: 'knie', label: 'Knie', points: [[178, 472], [122, 472]], r: 30, chip: [122, 472, 'left'],
    condition: 'knieschmerzen',
    blurb: 'Schmerzen beim Stiegensteigen, ein blockierendes Knie oder Schwellung nach dem Sport.',
    causes: ['Kniearthrose', 'Meniskusriss', 'Kniescheibenschmerz', 'Bandverletzung'],
    treatments: ['kniearthroskopie', 'knieprothese', 'hyaluronsaeure', 'kortison-infiltration'],
  },
  {
    id: 'fuss', label: 'Fuß', points: [[174, 608], [126, 608]], r: 28, chip: [174, 608, 'right'],
    condition: 'fussschmerzen',
    blurb: 'Fersenschmerz am Morgen, Schmerzen am Ballen oder ein Sprunggelenk, das nachgibt.',
    causes: ['Fersensporn', 'Achillessehnenreizung', 'Hallux valgus', 'Bänderverletzung'],
    treatments: ['stosswellentherapie', 'fusschirurgie', 'sportmedizin'],
  },
];

export const groups = [
  { id: 'injektion', label: 'Injektionen', blurb: 'Gezielte Infiltrationen an Gelenk, Sehne oder Wirbelsäule – bei Bedarf ultraschallgezielt.' },
  { id: 'konservativ', label: 'Ohne Operation', blurb: 'Stoßwelle, Arthrosetherapie und genaue Diagnostik mit Ultraschall.' },
  { id: 'operativ', label: 'Operationen', blurb: 'Gelenkersatz an Hüfte und Knie, Arthroskopie und kleinere Eingriffe an Hand und Fuß.' },
  { id: 'sport', label: 'Sport & Unfall', blurb: 'Rasche Abklärung nach Verletzungen und ein klarer Weg zurück zum Sport.' },
];

// The CV as a sequence – rendered as a timeline on the about page.
export const timeline = [
  ['1970', 'Geboren in München', 'Schulzeit am musischen Gabrieli-Gymnasium in Eichstätt, danach Zivildienst in der Unfallchirurgie am Klinikum Großhadern der LMU München – die erste Begegnung mit dem Fach.'],
  ['1992', 'Medizinstudium in München und Wien', 'Studium der Humanmedizin an der LMU München, 1995 ein Studienjahr an der Universität Wien.'],
  ['1998', 'Praktisches Jahr in drei Ländern', 'Innere Medizin in München-Harlaching, Kinderorthopädie an der Universitätsklinik Basel und Allgemeinchirurgie am General Hospital in Port of Spain, Trinidad und Tobago.'],
  ['1999', 'Klinikum rechts der Isar, TU München', 'Zentrum für Orthopädie und Sportorthopädie – mit regelmäßiger Betreuung von Hobby- und Profisportler:innen.'],
  ['2000', 'Chirurgie und Unfallchirurgie in Freilassing', 'Allgemeinchirurgische und traumatologische Ausbildung mit breitem OP-Katalog. Ab 2001 Mitglied der Notarztgemeinschaft Freilassing, zeitweise deren zweiter Vorsitzender.'],
  ['2005', 'Orthopädie und Endoprothetik in Berchtesgaden', 'Weiterbildung am Zentrum für Orthopädie, Orthopädische Chirurgie und Sportorthopädie – mit Schwerpunkt auf dem künstlichen Gelenkersatz.'],
  ['2009', 'Facharzt', 'Anerkennung als Facharzt für Orthopädie im Oktober 2009.'],
  ['2010', 'Facharzt an der OUCC', 'Funktionsoberarzt in der orthopädischen Gemeinschaftspraxis OUCC am Standort Kreisklinik Berchtesgaden.'],
  ['2019', 'Wahlarzt-Ordination in Salzburg', 'Eröffnung der eigenen Ordination für Orthopädie und Unfallchirurgie in der Stadt Salzburg.'],
  ['2024', 'healthlab Salzburg', 'Ordination im healthlab an der Alpenstraße, Operationen an der Privatklinik Wehrle-Diakonissen.'],
];

export const credentials = {
  diplomas: [
    'Diplom Sportmedizin',
    'Diplom Sonografie des Bewegungsapparates',
    'TÜV-zertifizierter Wundexperte (ICW)',
    'Diplom Notfallmedizin – Notarzt seit 2001',
  ],
  memberships: [
    'Deutsche Gesellschaft für Orthopädie und Unfallchirurgie (DGOU)',
    'Deutsche Gesellschaft für Orthopädie und Orthopädische Chirurgie (DGOOC)',
    'Deutsche Assoziation für Fuß und Sprunggelenk (DAF)',
    'Arbeitsgemeinschaft der in Bayern tätigen Notärzte',
  ],
  languages: ['Deutsch', 'Englisch'],
  // Structured data only: where he studied (from the timeline above).
  education: ['Ludwig-Maximilians-Universität München', 'Universität Wien'],
  societies: [
    ['Deutsche Gesellschaft für Orthopädie und Unfallchirurgie', 'https://dgou.de/'],
    ['Deutsche Gesellschaft für Orthopädie und Orthopädische Chirurgie', 'https://dgooc.de/'],
    ['Deutsche Assoziation für Fuß und Sprunggelenk', 'https://www.daf-online.de/'],
  ],
};

export const homeFaq = [
  ['Brauche ich eine Überweisung?', 'Nein. In eine Wahlarzt-Ordination können Sie direkt kommen. Vorhandene Befunde, Röntgen- oder MRT-Bilder bringen Sie bitte mit.'],
  ['Wie schnell bekomme ich einen Termin?', 'In der Regel zeitnah. Bei akuten Beschwerden bemühe ich mich um einen kurzfristigen Termin – rufen Sie am besten an.'],
  ['Was zahlt die Krankenkasse?', 'Sie bezahlen die Honorarnote zunächst selbst. Für erstattungsfähige Leistungen ist eine Einreichung bei Ihrer Krankenkasse möglich – über die Praxis mit WAHonline oder, falls nötig, durch Sie selbst. Den Ablauf klären wir bei Ihrem Termin. Die Kasse erstattet bis zu 80 % des Betrags, den sie einem Vertragsarzt für dieselbe Leistung bezahlen würde. Private Zusatzversicherungen übernehmen je nach Tarif einen Teil oder den Rest.'],
  ['Operieren Sie selbst?', 'Ja. Hüft- und Knieprothesen, Kniearthroskopien sowie kleinere Eingriffe an Hand und Fuß führe ich selbst an der Privatklinik Wehrle-Diakonissen in Salzburg durch – von der Beratung bis zur Nachsorge.'],
  ['Was, wenn ich eine Schulter- oder Wirbelsäulenoperation brauche?', 'Für Operationen an Schulter, Ellenbogen und Wirbelsäule sowie für den Kreuzbandersatz arbeite ich mit spezialisierten Kolleg:innen in Salzburg und Bayern zusammen. Abklärung, Vorbereitung und Nachbehandlung können bei mir bleiben.'],
  ['Behandeln Sie auch Patient:innen aus Deutschland?', 'Ja. In Salzburg als Wahlarzt – privat Versicherte reichen die Rechnung bei ihrer Versicherung ein. Gesetzlich Versicherte aus Bayern behandle ich auch in der OUCC-Gemeinschaftspraxis, die mit allen Kassen abrechnet.'],
];

// Patient voices for the reviews carousel.
// PLATZHALTER: Diese Texte sind Beispiele, angelehnt an Themen aus öffentlichen Bewertungen – keine echten Zitate.
// Vor Veröffentlichung durch echte Rückmeldungen ersetzen – mit Zustimmung der Patient:innen
// (§ 5 Abs. 4 ÖÄK-Verordnung „Arzt und Öffentlichkeit 2014“). Optional: photo: '/assets/img/…'.
export const reviews = {
  placeholder: true,
  source: { label: 'Bewertungen auf Jameda lesen', url: 'https://www.jameda.de/profil/thomas-schrader-2' },
  items: [
    { quote: 'Er hat sich Zeit genommen und mir jede Frage so beantwortet, dass ich sie wirklich verstanden habe.', who: 'Patientin', topic: 'Erstgespräch' },
    { quote: 'Von der Vorbesprechung bis zur Kontrolle nach der Operation habe ich mich gut aufgehoben gefühlt.', who: 'Patient', topic: 'Operation' },
    { quote: 'Ruhig, freundlich und fachlich kompetent – gerade in einem Moment, in dem ich große Sorge hatte.', who: 'Patientin', topic: 'Akute Beschwerden' },
    { quote: 'Er war offen für meine Fragen und Ideen und hat mir die Möglichkeiten nachvollziehbar erklärt.', who: 'Patient', topic: 'Behandlungsplan' },
    { quote: 'Alles wurde erklärt, bevor etwas gemacht wurde. So wünscht man sich das.', who: 'Patientin', topic: 'Behandlung' },
  ],
};
