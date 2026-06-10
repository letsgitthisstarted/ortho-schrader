#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generates the subpages of ortho-schrader-website with shared header/footer.
index.html is maintained by hand; run `python3 build.py` after editing PAGES."""

import os

OUT = os.path.dirname(os.path.abspath(__file__))

HEAD = """<!DOCTYPE html>
<html lang="de-AT">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>@TITLE@</title>
  <meta name="description" content="@DESC@">
  <link rel="canonical" href="https://www.ortho-schrader.com/@FILE@">
  <meta property="og:title" content="@TITLE@">
  <meta property="og:description" content="@DESC@">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_AT">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='8' fill='%230F2A43'/%3E%3Ctext x='32' y='45' font-family='Georgia,serif' font-size='38' fill='%23B59A6B' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header class="site-header" id="siteHeader">
    <div class="container header-inner">
      <a href="index.html" class="brand">
        <span class="brand-name">Dr. Thomas Schrader</span>
        <span class="brand-sub">Orthop&auml;die &amp; Unfallchirurgie &middot; Salzburg</span>
      </a>
      <nav class="main-nav" id="mainNav" aria-label="Hauptnavigation">
        <ul>
          <li><a href="dr-thomas-schrader.html"@A_UEBER@>&Uuml;ber mich</a></li>
          <li class="has-dropdown">
            <a href="leistungen.html"@A_LEISTUNGEN@>Leistungen <span class="caret" aria-hidden="true"></span></a>
            <ul class="dropdown">
              <li><a href="arthrose-gelenkerhalt.html">Gelenkerhalt &amp; Arthrosetherapie</a></li>
              <li><a href="gelenkchirurgie-endoprothetik.html">Gelenkchirurgie &amp; Endoprothetik</a></li>
              <li><a href="wirbelsaeule-schmerztherapie.html">Wirbels&auml;ule &amp; Schmerztherapie</a></li>
              <li><a href="sportmedizin-unfallchirurgie.html">Sportmedizin &amp; Unfallchirurgie</a></li>
            </ul>
          </li>
          <li><a href="wahlarzt-salzburg.html"@A_WAHLARZT@>Wahlarzt-Vorteile</a></li>
          <li><a href="ordination-anfahrt.html"@A_ORDINATION@>Ordination</a></li>
          <li><a href="kontakt.html"@A_KONTAKT@>Kontakt</a></li>
        </ul>
      </nav>
      <a href="kontakt.html" class="btn btn-primary header-cta">Termin vereinbaren</a>
      <button class="nav-toggle" id="navToggle" aria-label="Men&uuml; &ouml;ffnen" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>
"""

FOOTER = """  </main>

  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <span class="brand-name serif">Dr. Thomas Schrader</span>
        <span class="brand-sub">Orthop&auml;die &amp; Unfallchirurgie &middot; Salzburg</span>
        <blockquote>&bdquo;Behandeln wie man selbst behandelt werden will.&ldquo;</blockquote>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul class="footer-contact">
          <li><span class="mini">&#10038;</span> healthlab Salzburg<br>Alpenstra&szlig;e 99, 5020 Salzburg</li>
          <li><span class="mini">&#10038;</span> <a href="tel:+436608574000">+43 660 8574000</a></li>
          <li><span class="mini">&#10038;</span> <a href="mailto:schrader@healthlab.at">schrader@healthlab.at</a></li>
        </ul>
      </div>
      <div>
        <h4>Leistungen</h4>
        <ul>
          <li><a href="arthrose-gelenkerhalt.html">Gelenkerhalt &amp; Arthrose</a></li>
          <li><a href="gelenkchirurgie-endoprothetik.html">Gelenkchirurgie &amp; Endoprothetik</a></li>
          <li><a href="wirbelsaeule-schmerztherapie.html">Wirbels&auml;ule &amp; Schmerztherapie</a></li>
          <li><a href="sportmedizin-unfallchirurgie.html">Sportmedizin &amp; Unfallchirurgie</a></li>
        </ul>
      </div>
      <div>
        <h4>Ordination</h4>
        <ul>
          <li>Termine nach Vereinbarung &mdash;<br>auch kurzfristig</li>
          <li>healthlab: Mo&ndash;Fr 7&ndash;21 Uhr,<br>Sa 6&ndash;14 Uhr</li>
          <li>Notf&auml;lle auch an Wochenenden<br>und Feiertagen: <a href="tel:+436608574000">+43 660 8574000</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>&copy; <span id="year">2025</span> Dr. Thomas Schrader &middot; Facharzt f&uuml;r Orthop&auml;die und Orthop&auml;dische Chirurgie, Unfallchirurgie</span>
        <nav>
          <a href="impressum.html">Impressum</a>
          <a href="datenschutz.html">Datenschutz</a>
        </nav>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
"""


def closer(h2, p, btn="Termin vereinbaren"):
    return """
    <section class="section closer">
      <div class="container reveal">
        <h2>""" + h2 + """</h2>
        <p class="lead">""" + p + """</p>
        <div class="closer-actions">
          <a href="kontakt.html" class="btn btn-primary">""" + btn + """</a>
          <a href="tel:+436608574000" class="closer-phone">+43 660 8574000</a>
        </div>
      </div>
    </section>
"""


def page_header(crumb, h1, lead):
    return """
    <section class="page-header">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">Startseite</a> <span>/</span> """ + crumb + """</nav>
        <h1>""" + h1 + """</h1>
        <p class="lead">""" + lead + """</p>
      </div>
    </section>
"""


PAGES = []

# ============================================================ Über mich
PAGES.append({
    "file": "dr-thomas-schrader.html",
    "title": "Über mich | Dr. Thomas Schrader – Orthopäde in Salzburg",
    "desc": "Facharzt für Orthopädie, Orthopädische Chirurgie und Unfallchirurgie: Werdegang, Philosophie und Qualifikationen von Dr. Thomas Schrader, Wahlarzt in Salzburg.",
    "active": "UEBER",
    "body": page_header(
        "<span>Über mich</span>",
        "Dr. Thomas Schrader",
        "Facharzt für Orthopädie und Orthopädische Chirurgie, Unfallchirurgie — und überzeugt davon, dass gute Medizin mit Zuhören beginnt.") + """
    <section class="section">
      <div class="container split">
        <!-- TODO Livegang: Editorial-Porträt Dr. Schrader (4:5) -->
        <div class="visual visual-grey ratio-45 reveal" aria-hidden="true">
          <div class="visual-inner">
            <div class="monogram">TS</div>
            <div class="visual-label">Porträt Dr. Schrader</div>
          </div>
        </div>
        <div class="reveal">
          <p class="eyebrow">Meine Philosophie</p>
          <h2>Behandeln, wie man selbst behandelt werden will.</h2>
          <p>Dieser Satz ist mehr als ein Leitspruch — er ist der Maßstab, an dem ich jede Entscheidung in meiner Ordination messe. Patientenbetreuung findet bei mir immer auf Augenhöhe statt: ehrlich, souverän und ohne Zeitdruck.</p>
          <p>In über zwei Jahrzehnten als Chirurg, Orthopäde und Notarzt habe ich gelernt: Die beste Behandlung ist die, die zum Menschen passt — nicht die, die am schnellsten geht. Deshalb erkläre ich Befunde verständlich, zeige Ihnen alle Wege auf und empfehle eine Operation nur dann, wenn sie wirklich der beste Weg für Sie ist.</p>
          <a href="leistungen.html" class="text-link">Meine Leistungen im Überblick <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Werdegang</p>
          <h2>Ein Weg, geprägt von Chirurgie, Orthopädie und Notfallmedizin.</h2>
        </div>
        <div class="container-narrow">
          <div class="timeline">
            <div class="timeline-item reveal">
              <div class="timeline-year">1970</div>
              <h3>Geboren in München</h3>
              <p>Gymnasialzeit am musischen Gabrieli-Gymnasium in Eichstätt, anschließend Zivildienst in der Unfallchirurgie des Klinikums Großhadern der LMU München — die erste prägende Begegnung mit dem Fach.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">1992</div>
              <h3>Medizinstudium in München und Wien</h3>
              <p>Studium der Humanmedizin an der LMU München, 1995 ein Studienjahr an der Universität Wien.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">1998–1999</div>
              <h3>Praktisches Jahr mit internationalen Stationen</h3>
              <p>Innere Medizin am Krankenhaus München-Harlaching, Kinderorthopädie an der Universitätsklinik Basel unter Prof. Dr. Fritz Hefti und Prof. Dr. Lutz von Laer sowie Allgemeinchirurgie am General Hospital Port of Spain, Trinidad &amp; Tobago.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">1999–2000</div>
              <h3>Klinikum rechts der Isar, TU München</h3>
              <p>Ärztliche Tätigkeit im Zentrum für Orthopädie und Sportorthopädie unter der Leitung von Prof. Dr. R. Gradinger — mit regelmäßiger sportmedizinischer Betreuung von Hobby- und Profisportlern.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">ab 2000</div>
              <h3>Chirurgische &amp; traumatologische Ausbildung, Freilassing</h3>
              <p>Langjährige allgemeinchirurgische Ausbildung mit breitem OP-Katalog am Kreiskrankenhaus Freilassing. Seit 2001 Mitglied der ortsansässigen Notarztgemeinschaft, zeitweise als deren 2. Vorsitzender.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">2005</div>
              <h3>Zentrum für Orthopädie und Sportorthopädie Berchtesgaden</h3>
              <p>Orthopädische Weiterbildung mit besonderem Schwerpunkt auf den operativen Bereichen der Endoprothetik.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">2009</div>
              <h3>Facharztanerkennung</h3>
              <p>Anerkennung als Facharzt für Orthopädie im Oktober 2009.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">2010</div>
              <h3>Funktionsoberarzt &amp; Praxispartner, OUCC Berchtesgaden</h3>
              <p>Partner der orthopädischen Gemeinschaftspraxis OUCC am Standort Kreisklinik Berchtesgaden — operative und konservative Orthopädie auf Oberarztniveau.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">2019</div>
              <h3>Eigene Wahlarzt-Ordination in Salzburg</h3>
              <p>Eröffnung der Wahlarzt-Ordination für Orthopädie und Unfallchirurgie in der Stadt Salzburg.</p>
            </div>
            <div class="timeline-item reveal">
              <div class="timeline-year">seit 2024</div>
              <h3>Ordination im healthlab Salzburg</h3>
              <p>Ordination im healthlab Salzburg, Alpenstraße 99 — Operationen als Belegarzt an der Privatklinik Wehrle-Diakonissen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Qualifikation</p>
          <h2>Diplome, Zertifikate &amp; Mitgliedschaften</h2>
        </div>
        <div class="split" style="align-items:start;">
          <div class="reveal">
            <h3>Diplome &amp; Zertifikate</h3>
            <ul class="checklist">
              <li><span><strong>Sportmedizin</strong> — Diplom</span></li>
              <li><span><strong>Sonografie des Bewegungsapparates</strong> — Diplom</span></li>
              <li><span><strong>Notfallmedizin</strong> — Diplom, langjährige aktive Notarzttätigkeit</span></li>
              <li><span><strong>TÜV-zertifizierter Wundexperte (ICW)</strong></span></li>
            </ul>
          </div>
          <div class="reveal">
            <h3>Mitgliedschaften</h3>
            <ul class="checklist">
              <li><span>Deutsche Gesellschaft für Orthopädie und Unfallchirurgie (DGOU)</span></li>
              <li><span>Gesellschaft für Orthopädie und Orthopädische Chirurgie (DGOC)</span></li>
              <li><span>Deutsche Assoziation für Fuß und Sprunggelenk (DAF)</span></li>
              <li><span>Arbeitsgemeinschaft der in Bayern tätigen Notärzte</span></li>
            </ul>
            <h3 style="margin-top:2rem;">Sprachen</h3>
            <ul class="checklist">
              <li><span>Deutsch &middot; Englisch</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container split reverse">
        <!-- TODO Livegang: Foto privat/sportlich (Rennrad, Berge) -->
        <div class="visual ratio-32 reveal" aria-hidden="true">
          <div class="visual-inner">
            <div class="visual-label">Salzburg &middot; Berge &middot; Bewegung</div>
          </div>
        </div>
        <div class="reveal">
          <p class="eyebrow">Persönlich</p>
          <h2>Als Sportler verstehe ich Sportler.</h2>
          <p>Mit meiner Frau und unseren drei Kindern lebe ich seit vielen Jahren in der Stadt Salzburg. Den Ausgleich zur Medizin finde ich dort, wo ich auch meine Patienten wieder hinbringen möchte: in der Bewegung — am Rennrad, auf dem Mountainbike und im Winter auf Skiern.</p>
          <p>Wer selbst trainiert, weiß, was eine Verletzung bedeutet — körperlich wie mental. Dieses Verständnis fließt in jede Behandlung ein. Und wenn die Berge ruhen, gehören meine Abende der Musik zwischen Klassik und Jazz sowie dem Kochen für Familie und Freunde.</p>
        </div>
      </div>
    </section>
""" + closer("Lernen wir uns kennen.",
             "Im persönlichen Erstgespräch nehmen wir uns Zeit für Ihre Beschwerden, Ihre Fragen und Ihre Ziele.",
             "Erstgespräch vereinbaren"),
})

# ============================================================ Leistungen Übersicht
PAGES.append({
    "file": "leistungen.html",
    "title": "Leistungen | Orthopädie & Chirurgie – Dr. Schrader Salzburg",
    "desc": "Von gelenkerhaltender Arthrosetherapie bis Kreuzband-OP: das gesamte Spektrum moderner Orthopädie in Salzburg – konservativ, wenn möglich. Operativ, wenn nötig.",
    "active": "LEISTUNGEN",
    "body": page_header(
        "<span>Leistungen</span>",
        "Orthopädische Leistungen in Salzburg",
        "Bewegung ist Lebensqualität. Wenn Schmerzen Sie einschränken, verdienen Sie eine Medizin, die genau hinsieht — und einen Behandlungsplan, der zu Ihnen passt. Hier finden Sie mein gesamtes Leistungsspektrum: von der gelenkerhaltenden Therapie bis zum endoprothetischen Gelenkersatz.") + """
    <section class="section">
      <div class="container split">
        <!-- TODO Livegang: Foto ultraschallgezielte Injektion -->
        <div class="visual visual-grey ratio-32 reveal" aria-hidden="true">
          <div class="visual-inner"><div class="visual-label">Gelenkerhalt &amp; Arthrosetherapie</div></div>
        </div>
        <div class="reveal">
          <p class="eyebrow">01 — Gelenkerhalt &amp; Arthrosetherapie</p>
          <h2>Ihr Gelenk erhalten — solange es möglich ist.</h2>
          <p>Arthrose ist kein Schicksal, mit dem man sich abfinden muss. In vielen Fällen lässt sich der Gelenkverschleiß bremsen, der Schmerz deutlich lindern und eine Operation um Jahre hinausschieben — oder ganz vermeiden.</p>
          <ul class="checklist">
            <li><span>Gelenkerhaltende Arthrose-Behandlung &amp; konservative Arthrosetherapie</span></li>
            <li><span>ACP-Eigenbluttherapie — körpereigene Regeneration für Gelenke und Sehnen</span></li>
            <li><span>Hyaluronbehandlungen für kleine und große Gelenke</span></li>
            <li><span>Sonografie des Bewegungsapparates — präzise Diagnostik direkt in der Ordination</span></li>
          </ul>
          <a href="arthrose-gelenkerhalt.html" class="text-link">Mehr zum Gelenkerhalt <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container split reverse">
        <!-- TODO Livegang: Foto OP-Umfeld Wehrle-Diakonissen -->
        <div class="visual ratio-32 reveal" aria-hidden="true">
          <div class="visual-inner"><div class="visual-label">Gelenkchirurgie &amp; Endoprothetik</div></div>
        </div>
        <div class="reveal">
          <p class="eyebrow">02 — Gelenkchirurgie &amp; Endoprothetik</p>
          <h2>Wenn operiert werden muss: Präzision, der Sie vertrauen können.</h2>
          <p>Manchmal ist eine Operation der beste — und ehrlichste — Weg zurück zu einem schmerzfreien Leben. Dann zählt die Erfahrung des Chirurgen und eine Technik, die Ihr Gewebe schont.</p>
          <ul class="checklist">
            <li><span>Arthroskopische Gelenkchirurgie — minimalinvasiv an Knie und Schulter</span></li>
            <li><span>Kreuzbandersatz &amp; Rotatorenmanschettennaht</span></li>
            <li><span>Endoprothetischer Gelenkersatz — Knie- und Hüftprothesen, individuell geplant</span></li>
            <li><span>Handchirurgie sowie Fuß- und Sprunggelenkchirurgie</span></li>
          </ul>
          <a href="gelenkchirurgie-endoprothetik.html" class="text-link">Mehr zur Gelenkchirurgie <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split">
        <!-- TODO Livegang: Foto Beratung am Wirbelsäulenmodell -->
        <div class="visual visual-grey ratio-32 reveal" aria-hidden="true">
          <div class="visual-inner"><div class="visual-label">Wirbelsäule &amp; Schmerztherapie</div></div>
        </div>
        <div class="reveal">
          <p class="eyebrow">03 — Wirbelsäule &amp; Schmerztherapie</p>
          <h2>Rückenschmerzen verstehen. Und gezielt behandeln.</h2>
          <p>Kaum ein Leiden raubt so viel Lebensqualität wie chronischer Rückenschmerz — und kaum eines wird so oft pauschal behandelt. Mein Ansatz: erst die präzise Diagnose, dann ein Plan aus wirksamen Bausteinen.</p>
          <ul class="checklist">
            <li><span>Wirbelsäulenbehandlung &amp; Wirbelsäulenchirurgie — konservativ und operativ</span></li>
            <li><span>Facetteninfiltrationen — gezielte Injektionen an die kleinen Wirbelgelenke</span></li>
            <li><span>Multimodale Schmerztherapie</span></li>
            <li><span>Stoßwellentherapie (ESWT) bei Schmerzen und Reizzuständen</span></li>
          </ul>
          <a href="wirbelsaeule-schmerztherapie.html" class="text-link">Mehr zur Wirbelsäulenbehandlung <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container split reverse">
        <!-- TODO Livegang: Foto sportlicher Kontext / Salzburger Berge -->
        <div class="visual ratio-32 reveal" aria-hidden="true">
          <div class="visual-inner"><div class="visual-label">Sportmedizin &amp; Unfallchirurgie</div></div>
        </div>
        <div class="reveal">
          <p class="eyebrow">04 — Sportmedizin &amp; Unfallchirurgie</p>
          <h2>Schneller zurück in Bewegung. Sicher zurück zum Sport.</h2>
          <p>Eine Sportverletzung wirft Sie aus der Bahn — und jede Woche ohne die richtige Behandlung kostet Fitness, Form und Freude. Als Sportarzt und Unfallchirurg weiß ich, was Athleten brauchen.</p>
          <ul class="checklist">
            <li><span>Unfallchirurgische Versorgung von Verletzungen des Bewegungsapparates</span></li>
            <li><span>Sportmedizin — vom Hobby- bis zum Leistungssportler</span></li>
            <li><span>Notfallmedizinische Kompetenz aus langjähriger Notarzttätigkeit</span></li>
            <li><span>Sonografie — Muskel-, Sehnen- und Bänderverletzungen sofort sichtbar</span></li>
          </ul>
          <a href="sportmedizin-unfallchirurgie.html" class="text-link">Mehr zur Sportmedizin <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section section-navy closer">
      <div class="container reveal">
        <h2>Nicht sicher, welche Behandlung die richtige ist?</h2>
        <p class="lead" style="color:rgba(255,255,255,0.75); margin:0 auto 2.2rem;">Genau dafür gibt es das Erstgespräch. Wir sehen uns Ihre Beschwerden gemeinsam an — gründlich, ehrlich und ohne Zeitdruck.</p>
        <div class="closer-actions">
          <a href="kontakt.html" class="btn btn-light">Jetzt kontaktieren</a>
          <a href="tel:+436608574000" class="closer-phone">+43 660 8574000</a>
        </div>
      </div>
    </section>
""",
})

# ============================================================ Arthrose & Gelenkerhalt
PAGES.append({
    "file": "arthrose-gelenkerhalt.html",
    "title": "Arthrose-Behandlung Salzburg | Gelenkerhalt – Dr. Schrader",
    "desc": "Gelenkerhaltende Arthrosetherapie in Salzburg: ACP-Eigenbluttherapie, Hyaluron, konservative Behandlung. Schmerzen lindern, Operationen vermeiden – Wahlarzt Dr. Schrader.",
    "active": "LEISTUNGEN",
    "body": page_header(
        '<a href="leistungen.html">Leistungen</a> <span>/</span> <span>Gelenkerhalt &amp; Arthrosetherapie</span>',
        "Gelenkerhalt &amp; Arthrosetherapie",
        "Ihr Gelenk schmerzt — aber es ist noch nicht verloren. Moderne konservative Therapien können den Verschleiß bremsen, Schmerzen deutlich lindern und eine Operation oft um Jahre hinausschieben.") + """
    <section class="section">
      <div class="container split" style="align-items:start;">
        <div class="reveal">
          <p class="eyebrow">Wann Sie zu mir kommen sollten</p>
          <h2>Arthrose früh behandeln heißt: Möglichkeiten erhalten.</h2>
          <p>Je früher eine Arthrose erkannt und gezielt behandelt wird, desto mehr lässt sich erreichen. Typische Anzeichen, die Sie ernst nehmen sollten:</p>
          <ul class="checklist">
            <li><span><strong>Anlaufschmerz</strong> — die ersten Schritte am Morgen schmerzen, dann wird es besser</span></li>
            <li><span><strong>Belastungsschmerz</strong> — Stiegensteigen, längeres Gehen oder Sport bereiten zunehmend Probleme</span></li>
            <li><span><strong>Steifigkeit und Schwellung</strong> — das Gelenk fühlt sich dick, warm oder unbeweglich an</span></li>
            <li><span><strong>Diagnose Arthrose</strong> — und der Wunsch, eine Operation zu vermeiden oder hinauszuzögern</span></li>
          </ul>
        </div>
        <!-- TODO Livegang: Foto Untersuchung/Sonografie -->
        <div class="visual visual-grey ratio-45 reveal" aria-hidden="true">
          <div class="visual-inner"><div class="visual-label">Diagnostik &amp; Therapie</div></div>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Behandlungen</p>
          <h2>Meine gelenkerhaltenden Therapien im Detail</h2>
        </div>
        <div class="treatment-list">
          <article class="treatment reveal">
            <h3>Konservative Arthrosetherapie</h3>
            <p>Der individuelle Behandlungsplan ohne Skalpell: Aus gezielter Bewegungstherapie, entzündungshemmender Behandlung und begleitenden Maßnahmen entsteht ein Konzept, das Ihre Schmerzen reduziert und die Funktion Ihres Gelenks erhält — abgestimmt auf Befund, Alltag und Anspruch.</p>
          </article>
          <article class="treatment reveal">
            <h3>ACP-Eigenbluttherapie</h3>
            <p>Bei der ACP-Therapie (Autologes Conditioniertes Plasma) werden konzentrierte Wachstumsfaktoren aus Ihrem eigenen Blut gewonnen und direkt in das betroffene Gelenk oder an die gereizte Sehne injiziert. Das regt körpereigene Reparaturprozesse an — gut verträglich, ohne körperfremde Substanzen.</p>
          </article>
          <article class="treatment reveal">
            <h3>Hyaluronbehandlungen — kleine und große Gelenke</h3>
            <p>Hyaluronsäure ist der natürliche Schmierstoff Ihres Gelenks. Bei Arthrose nimmt seine Qualität ab — die Injektion hochwertiger Hyaluronpräparate verbessert die Gleitfähigkeit, dämpft Stöße und lindert Schmerzen. Ich behandle damit sowohl große Gelenke wie Knie und Hüfte als auch kleine Gelenke an Hand und Fuß.</p>
          </article>
          <article class="treatment reveal">
            <h3>Sonografie des Bewegungsapparates</h3>
            <p>Der Ultraschall macht Gelenkergüsse, Entzündungen und Sehnenveränderungen unmittelbar sichtbar — strahlenfrei, direkt in der Ordination. Zudem führe ich Injektionen ultraschallgezielt durch: millimetergenau dort, wo sie wirken sollen.</p>
          </article>
        </div>
        <div class="advantage-box reveal">
          <h3>Ihr Vorteil bei Dr. Schrader</h3>
          <p>Als Facharzt für Orthopädie <em>und</em> Chirurgie kenne ich beide Seiten — und kann Ihnen deshalb ehrlich sagen, wann konservative Therapie die bessere Wahl ist und wann nicht. Sie erhalten keine Empfehlung „von der Stange", sondern die Behandlung, die Ihr Gelenk wirklich braucht.</p>
        </div>
      </div>
    </section>
""" + closer("Lassen Sie Ihre Gelenke abklären — bevor die Arthrose entscheidet.",
             "Im Erstgespräch klären wir Ursache, Stadium und Ihre Möglichkeiten. Gründlich, ehrlich und ohne Zeitdruck.",
             "Termin zur Arthrose-Abklärung"),
})

# ============================================================ Gelenkchirurgie & Endoprothetik
PAGES.append({
    "file": "gelenkchirurgie-endoprothetik.html",
    "title": "Kniespezialist Salzburg | Gelenkchirurgie & Endoprothetik",
    "desc": "Arthroskopische Gelenkchirurgie, Kreuzband-OP, Knie- und Hüftprothese in Salzburg. Präzise Chirurgie an der Privatklinik Wehrle-Diakonissen – Dr. Thomas Schrader.",
    "active": "LEISTUNGEN",
    "body": page_header(
        '<a href="leistungen.html">Leistungen</a> <span>/</span> <span>Gelenkchirurgie &amp; Endoprothetik</span>',
        "Gelenkchirurgie &amp; Endoprothetik",
        "Manchmal ist eine Operation der beste — und ehrlichste — Weg zurück zu einem schmerzfreien Leben. Dann zählt zweierlei: die Erfahrung des Chirurgen und eine Technik, die Ihr Gewebe schont.") + """
    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Operative Leistungen</p>
          <h2>Vom arthroskopischen Eingriff bis zum Gelenkersatz</h2>
          <p>Als Kniespezialist in Salzburg operiere ich bevorzugt arthroskopisch, also minimalinvasiv: kleinere Zugänge, weniger Schmerzen, schnellere Genesung. Alle Eingriffe führe ich an der Privatklinik Wehrle-Diakonissen durch.</p>
        </div>
        <div class="treatment-list">
          <article class="treatment reveal">
            <h3>Arthroskopische Gelenkchirurgie</h3>
            <p>Über wenige Millimeter kleine Zugänge behandle ich Schäden an Meniskus, Knorpel und Gelenkschleimhaut — schonend, präzise und mit deutlich kürzerer Erholungszeit als bei offenen Eingriffen. Schwerpunkte: Knie- und Schultergelenk.</p>
          </article>
          <article class="treatment reveal">
            <h3>Kreuzbandersatz (Kreuzband-OP)</h3>
            <p>Ein gerissenes Kreuzband destabilisiert das Knie — und gefährdet auf Dauer Meniskus und Knorpel. Mit modernen Operationstechniken rekonstruiere ich das Band anatomisch, damit Ihr Knie wieder belastbar wird: für den Alltag genauso wie für die Rückkehr auf Piste, Platz oder Trail.</p>
          </article>
          <article class="treatment reveal">
            <h3>Rotatorenmanschettennaht</h3>
            <p>Risse der Schultersehnen schmerzen, schwächen den Arm und schreiten unbehandelt fort. Durch die Rekonstruktion der Rotatorenmanschette stelle ich Kraft und Beweglichkeit Ihrer Schulter wieder her — bevorzugt minimalinvasiv.</p>
          </article>
          <article class="treatment reveal">
            <h3>Endoprothetischer Gelenkersatz — Knie &amp; Hüfte</h3>
            <p>Wenn das Gelenk nicht mehr zu erhalten ist, gibt ein modernes Kunstgelenk Lebensqualität zurück. Die Endoprothetik begleitet mich seit meiner Ausbildung als operativer Schwerpunkt: von der individuellen Planung über die präzise Implantation bis zur strukturierten Nachsorge.</p>
          </article>
          <article class="treatment reveal">
            <h3>Handchirurgie</h3>
            <p>Die Hand ist unser feinstes Werkzeug — Eingriffe an ihr verlangen besondere Sorgfalt. Ich behandle unter anderem Engpasssyndrome wie das Karpaltunnelsyndrom, schnellende Finger und arthrotische Veränderungen der Fingergelenke.</p>
          </article>
          <article class="treatment reveal">
            <h3>Fuß- und Sprunggelenkchirurgie</h3>
            <p>Vom Hallux valgus bis zur Sprunggelenksinstabilität: Als Mitglied der Deutschen Assoziation für Fuß und Sprunggelenk (DAF) korrigiere ich Fehlstellungen und Verletzungen mit dem Ziel, Ihnen ein schmerzfreies, belastbares Gangbild zurückzugeben.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Ihr Weg zur Operation</p>
          <h2>Ein Ansprechpartner. Von der Planung bis zur Nachsorge.</h2>
        </div>
        <div class="steps">
          <div class="step reveal">
            <h3>Beratung &amp; Planung</h3>
            <p>Ausführliches Gespräch, exakte Diagnostik und ehrliche Abwägung: Operieren — oder gibt es einen besseren Weg?</p>
          </div>
          <div class="step reveal">
            <h3>Eingriff an der Privatklinik</h3>
            <p>Ihre Operation an der Privatklinik Wehrle-Diakonissen — moderne OP-Infrastruktur, persönliche Betreuung, Komfort.</p>
          </div>
          <div class="step reveal">
            <h3>Betreuter Aufenthalt</h3>
            <p>Ich begleite Sie während des stationären Aufenthalts persönlich — kein anonymer Klinikbetrieb.</p>
          </div>
          <div class="step reveal">
            <h3>Nachsorge in der Ordination</h3>
            <p>Kontrollen, Fadenzug und Reha-Steuerung in meiner Ordination im healthlab — bis Sie Ihr Ziel erreicht haben.</p>
          </div>
        </div>
        <div class="advantage-box reveal" style="background:var(--white);">
          <h3>Ihr Vorteil bei Dr. Schrader</h3>
          <p>Diagnose, Operation und Nachsorge aus einer Hand — durchgängig bei demselben Arzt. Sie wissen jederzeit, wer Sie operiert, wer Sie betreut und wen Sie fragen können. Als TÜV-zertifizierter Wundexperte (ICW) lege ich zudem besonderes Augenmerk auf eine komplikationsfreie Wundheilung.</p>
        </div>
      </div>
    </section>
""" + closer("Operieren oder nicht? Holen Sie sich eine ehrliche Einschätzung.",
             "Gerne auch als Zweitmeinung: Wir besprechen Befunde, Optionen und Risiken — verständlich und ohne Zeitdruck.",
             "Operative Zweitmeinung einholen"),
})

# ============================================================ Wirbelsäule & Schmerztherapie
PAGES.append({
    "file": "wirbelsaeule-schmerztherapie.html",
    "title": "Rückenschmerzen Salzburg | Wirbelsäule & Schmerztherapie",
    "desc": "Wirbelsäulenbehandlung in Salzburg: Facetteninfiltrationen, multimodale Schmerztherapie, Stoßwellentherapie (ESWT), Wirbelsäulenchirurgie. Wahlarzt Dr. Schrader.",
    "active": "LEISTUNGEN",
    "body": page_header(
        '<a href="leistungen.html">Leistungen</a> <span>/</span> <span>Wirbelsäule &amp; Schmerztherapie</span>',
        "Wirbelsäule &amp; Schmerztherapie",
        "Kaum ein Leiden raubt so viel Lebensqualität wie chronischer Rückenschmerz — und kaum eines wird so oft pauschal behandelt. Mein Ansatz ist ein anderer: erst verstehen, dann gezielt behandeln.") + """
    <section class="section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Behandlungen</p>
          <h2>Ein Plan statt Schema F</h2>
          <p>Rückenschmerz hat viele mögliche Quellen: Wirbelgelenke, Bandscheiben, Muskulatur, Nerven. Deshalb steht am Anfang immer die präzise Diagnose — und dann ein Therapieplan, der mehrere wirksame Bausteine intelligent kombiniert, statt nur Symptome zu überdecken.</p>
        </div>
        <div class="treatment-list">
          <article class="treatment reveal">
            <h3>Konservative Wirbelsäulenbehandlung</h3>
            <p>Die meisten Rückenleiden brauchen keine Operation. Mit gezielter medikamentöser Einstellung, Bewegungs- und Haltungstherapie sowie begleitenden Verfahren behandle ich die Ursache Ihrer Beschwerden — nicht nur das Symptom.</p>
          </article>
          <article class="treatment reveal">
            <h3>Facetteninfiltrationen</h3>
            <p>Die kleinen Wirbelgelenke — die Facetten — sind eine häufig übersehene Schmerzquelle. Mit gezielten Infiltrationen schalte ich den Schmerz direkt an seinem Ursprung aus: diagnostisch wertvoll und therapeutisch oft eine spürbare, rasche Erleichterung.</p>
          </article>
          <article class="treatment reveal">
            <h3>Multimodale Schmerztherapie</h3>
            <p>Chronischer Schmerz braucht mehr als ein einzelnes Medikament. Die multimodale Schmerztherapie kombiniert Infiltrationen, medikamentöse Einstellung und aktive Bewegungstherapie zu einem abgestimmten Gesamtkonzept — laufend kontrolliert und angepasst.</p>
          </article>
          <article class="treatment reveal">
            <h3>Stoßwellentherapie (ESWT)</h3>
            <p>Fokussierte Stoßwellen regen die Durchblutung und Regeneration an — hochwirksam bei Sehnenansatz-Beschwerden, Fersensporn, Kalkschulter und chronischen Reizzuständen. Ganz ohne Operation, ambulant in der Ordination.</p>
          </article>
          <article class="treatment reveal">
            <h3>Wirbelsäulenchirurgie</h3>
            <p>Wenn konservative Maßnahmen ausgeschöpft sind oder neurologische Ausfälle drohen, berate ich Sie ehrlich zu den operativen Möglichkeiten — und begleite Sie durch den gesamten Behandlungsweg, bei Bedarf in Kooperation mit ausgewiesenen Wirbelsäulenspezialisten.</p>
          </article>
        </div>
        <div class="advantage-box reveal">
          <h3>Ihr Vorteil bei Dr. Schrader</h3>
          <p>Bei mir bekommen Sie keine Therapie nach Schema F, sondern einen Plan, der zu Ihrem Befund, Ihrem Alltag und Ihren Zielen passt — und der laufend angepasst wird, bis Sie Ihr Ziel erreicht haben. Konservativ und operativ aus einer Hand bedeutet: Ich habe kein Interesse daran, Ihnen das eine oder das andere zu „verkaufen".</p>
        </div>
      </div>
    </section>
""" + closer("Ihr Rücken hat eine genaue Diagnose verdient.",
             "Lassen Sie die Ursache Ihrer Beschwerden abklären — gründlich, ehrlich und ohne Zeitdruck.",
             "Rückenschmerz abklären lassen"),
})

# ============================================================ Sportmedizin & Unfallchirurgie
PAGES.append({
    "file": "sportmedizin-unfallchirurgie.html",
    "title": "Sportarzt Salzburg | Sportmedizin & Unfallchirurgie",
    "desc": "Sportverletzungen rasch abklären: Sportmedizin, unfallchirurgische Versorgung und Return-to-Sport-Konzepte in Salzburg. Dr. Thomas Schrader – Diplom-Sportmediziner.",
    "active": "LEISTUNGEN",
    "body": page_header(
        '<a href="leistungen.html">Leistungen</a> <span>/</span> <span>Sportmedizin &amp; Unfallchirurgie</span>',
        "Sportmedizin &amp; Unfallchirurgie",
        "Eine Sportverletzung wirft Sie aus der Bahn — und jede Woche ohne die richtige Behandlung kostet Fitness, Form und Freude. Als Sportarzt und Unfallchirurg in Salzburg weiß ich, was Athleten brauchen.") + """
    <section class="section">
      <div class="container">
        <div class="emergency-strip reveal">
          <strong>Akut verletzt?</strong>
          <span>Behandlungstermine bei Notfällen auch am Wochenende und an Feiertagen: <a href="tel:+436608574000"><strong>+43 660 8574000</strong></a></span>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Leistungen</p>
          <h2>Schnelle Diagnose. Abgestimmte Therapie. Sichere Rückkehr.</h2>
        </div>
        <div class="treatment-list">
          <article class="treatment reveal">
            <h3>Unfallchirurgische Versorgung</h3>
            <p>Knochenbrüche, Bandverletzungen, Sehnenrisse: Als Facharzt für Unfallchirurgie versorge ich Verletzungen des Bewegungsapparates kompetent — konservativ, wo es heilt, operativ, wo es nötig ist.</p>
          </article>
          <article class="treatment reveal">
            <h3>Sportmedizin &amp; Sporttraumatologie</h3>
            <p>Vom Kreuzbandriss auf der Piste bis zur Achillessehnenreizung im Marathontraining: Mit sportmedizinischem Diplom und langjähriger Betreuung von Hobby- und Profisportlern stimme ich die Therapie auf Ihre Sportart, Ihr Leistungsniveau und Ihre Ziele ab.</p>
          </article>
          <article class="treatment reveal">
            <h3>Sonografie des Bewegungsapparates</h3>
            <p>Muskel-, Sehnen- und Bänderverletzungen mache ich per Ultraschall sofort sichtbar — direkt beim ersten Termin, ohne Wartezeit auf externe Bildgebung. So beginnt die richtige Therapie ohne Verzögerung.</p>
          </article>
          <article class="treatment reveal">
            <h3>Return-to-Sport-Begleitung</h3>
            <p>Zu früh zurück ist die häufigste Ursache der Wiederverletzung. Ich begleite Ihre Rückkehr mit klaren Belastungsstufen und Verlaufskontrollen — bis Sie Ihr Niveau sicher wieder erreicht haben.</p>
          </article>
          <article class="treatment reveal">
            <h3>Notfallmedizinische Kompetenz</h3>
            <p>Mit Notfallmedizin-Diplom und über zwei Jahrzehnten aktiver Notarzttätigkeit bringe ich die Routine mit, auf die Sie sich auch in akuten Situationen verlassen können — besonnen, schnell und strukturiert.</p>
          </article>
        </div>
        <div class="advantage-box reveal">
          <h3>Ihr Vorteil bei Dr. Schrader</h3>
          <p>Diagnose, Therapie und — falls nötig — die Operation aus einer Hand, ohne Umwege und ohne lange Wartezeiten. Und weil ich selbst am Rennrad, am Mountainbike und auf Skiern trainiere, weiß ich aus eigener Erfahrung, was eine Verletzung für Sportler bedeutet.</p>
        </div>
      </div>
    </section>
""" + closer("Sportverletzung? Verlieren Sie keine Zeit.",
             "Je früher die exakte Diagnose, desto schneller die richtige Therapie — und desto sicherer Ihre Rückkehr zum Sport.",
             "Sportverletzung abklären lassen"),
})

# ============================================================ Wahlarzt
PAGES.append({
    "file": "wahlarzt-salzburg.html",
    "title": "Wahlarzt Orthopädie Salzburg | Vorteile & Kostenrückerstattung",
    "desc": "Was bedeutet Wahlarzt? Ihre Vorteile bei Dr. Schrader in Salzburg: rasche Termine, Zeit für Diagnose und Therapie, Kostenrückerstattung der Krankenkasse einfach erklärt.",
    "active": "WAHLARZT",
    "body": page_header(
        "<span>Wahlarzt-Vorteile</span>",
        "Wahlarzt — was Sie davon haben",
        "Als Wahlarzt für Orthopädie in Salzburg arbeite ich unabhängig von Kassenvorgaben. Was das für Sie bedeutet — und wie die Kostenrückerstattung funktioniert — erfahren Sie hier.") + """
    <section class="section">
      <div class="container split" style="align-items:start;">
        <div class="reveal">
          <p class="eyebrow">Gut zu wissen</p>
          <h2>Was ist ein Wahlarzt?</h2>
          <p>Ein Wahlarzt ist ein voll ausgebildeter Facharzt, der in keinem Vertragsverhältnis zu den Krankenkassen steht. Das Honorar bezahlen Sie zunächst direkt — <strong>einen Teil davon erhalten Sie von Ihrer Krankenkasse zurück</strong> (in der Regel 80 % des jeweiligen Kassentarifs).</p>
          <p>Der entscheidende Unterschied liegt nicht im Geld, sondern in der Zeit: Ohne Kassenvorgaben bestimme ich selbst, wie lange ein Termin dauert. Bei mir ist das so lange, wie Ihre Anliegen es brauchen.</p>
          <p>Wenn Sie eine <strong>private Zusatzversicherung</strong> haben, übernimmt diese die Kosten in der Regel zur Gänze — sowohl in der Ordination als auch bei Operationen an der Privatklinik Wehrle-Diakonissen.</p>
        </div>
        <div class="reveal">
          <h3 style="margin-bottom:1.4rem;">Ihre Vorteile auf einen Blick</h3>
          <ul class="checklist">
            <li><span><strong>Rasche Termine</strong> — kurzfristige Terminvergabe statt monatelangem Warten, bei Notfällen auch am Wochenende und an Feiertagen</span></li>
            <li><span><strong>Zeit ohne Zeitdruck</strong> — ausführliche Erstgespräche und gründliche Untersuchung inklusive Sonografie</span></li>
            <li><span><strong>Ein Arzt, ein Weg</strong> — Diagnose, Therapie, Operation und Nachsorge durchgängig bei mir</span></li>
            <li><span><strong>Freie Arztwahl</strong> — Sie entscheiden, wem Sie Ihre Gesundheit anvertrauen</span></li>
            <li><span><strong>Kostenrückerstattung</strong> — Unterstützung bei der Einreichung inklusive</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">So einfach geht es</p>
          <h2>Ihr Weg als Wahlarzt-Patient</h2>
        </div>
        <div class="steps">
          <div class="step reveal">
            <h3>Termin vereinbaren</h3>
            <p>Telefonisch, per E-Mail oder online — meist schon innerhalb weniger Tage.</p>
          </div>
          <div class="step reveal">
            <h3>Behandlung genießen</h3>
            <p>Ausführliches Gespräch, gründliche Diagnostik, klarer Therapieplan — ohne Blick auf die Uhr.</p>
          </div>
          <div class="step reveal">
            <h3>Honorarnote erhalten</h3>
            <p>Sie erhalten eine transparente Honorarnote — bequem zu begleichen, ohne versteckte Kosten.</p>
          </div>
          <div class="step reveal">
            <h3>Rückerstattung einreichen</h3>
            <p>Honorarnote bei Ihrer Krankenkasse einreichen — die Rückerstattung erfolgt direkt auf Ihr Konto. Ich helfe gerne dabei.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-navy closer">
      <div class="container reveal">
        <h2>Gönnen Sie Ihrer Gesundheit den Termin, den sie verdient.</h2>
        <p class="lead" style="color:rgba(255,255,255,0.75); margin:0 auto 2.2rem;">Erleben Sie den Unterschied, den Zeit in der Medizin macht.</p>
        <div class="closer-actions">
          <a href="kontakt.html" class="btn btn-light">Jetzt Wahlarzt-Termin vereinbaren</a>
          <a href="tel:+436608574000" class="closer-phone">+43 660 8574000</a>
        </div>
      </div>
    </section>
""",
})

# ============================================================ Ordination & Anfahrt
PAGES.append({
    "file": "ordination-anfahrt.html",
    "title": "Ordination Salzburg | Anfahrt – Dr. Thomas Schrader",
    "desc": "Ordination im healthlab Salzburg, Alpenstraße 99: Anfahrt, Parken, Ordinationszeiten. Operationen an der Privatklinik Wehrle-Diakonissen.",
    "active": "ORDINATION",
    "body": page_header(
        "<span>Ordination &amp; Anfahrt</span>",
        "Ordination &amp; Anfahrt",
        "Sie finden meine Ordination im healthlab Salzburg an der Alpenstraße — modern, ruhig und unkompliziert erreichbar. Operationen führe ich an der Privatklinik Wehrle-Diakonissen durch.") + """
    <section class="section">
      <div class="container split" style="align-items:start;">
        <div class="reveal">
          <p class="eyebrow">Ordination</p>
          <h2>healthlab Salzburg</h2>
          <p><strong>Alpenstraße 99, 5020 Salzburg</strong></p>
          <ul class="checklist">
            <li><span><strong>Termine nach Vereinbarung</strong> — auch kurzfristig, bei Notfällen auch am Wochenende und an Feiertagen</span></li>
            <li><span><strong>healthlab-Öffnungszeiten:</strong> Montag bis Freitag 7–21 Uhr, Samstag 6–14 Uhr</span></li>
            <li><span><strong>Parken:</strong> Parkplätze direkt vor Ort</span></li>
            <li><span><strong>Öffentliche Anbindung:</strong> Obus-Haltestellen entlang der Alpenstraße in unmittelbarer Nähe</span></li>
            <li><span><strong>Barrierefrei</strong> erreichbar</span></li>
          </ul>
          <div class="hero-actions" style="margin-top:1.8rem;">
            <a href="https://www.google.com/maps/search/?api=1&amp;query=healthlab+Salzburg+Alpenstra%C3%9Fe+99+5020+Salzburg" class="btn btn-primary" target="_blank" rel="noopener">Route in Google Maps</a>
            <a href="kontakt.html" class="btn btn-outline">Termin vereinbaren</a>
          </div>
        </div>
        <!-- TODO Livegang: Foto healthlab Außenansicht/Empfang -->
        <div class="visual ratio-45 reveal" aria-hidden="true">
          <div class="visual-inner">
            <div class="monogram">TS</div>
            <div class="visual-label">healthlab Salzburg &middot; Alpenstra&szlig;e 99</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container split reverse" style="align-items:start;">
        <!-- TODO Livegang: Foto Privatklinik Wehrle-Diakonissen -->
        <div class="visual ratio-45 reveal" aria-hidden="true">
          <div class="visual-inner">
            <div class="visual-label">Privatklinik Wehrle-Diakonissen</div>
          </div>
        </div>
        <div class="reveal">
          <p class="eyebrow">Operationen</p>
          <h2>Privatklinik Wehrle-Diakonissen</h2>
          <p>Operative Eingriffe führe ich als Belegarzt an der Privatklinik Wehrle-Diakonissen in Salzburg durch — einer der renommierten Privatkliniken der Stadt mit moderner OP-Infrastruktur, persönlicher Pflege und gehobenem Komfort für Ihre Genesung.</p>
          <p>Alle Details zu Aufenthalt, Zimmerkategorien und Zusatzversicherung besprechen wir in Ruhe bei der Operationsplanung in meiner Ordination.</p>
          <a href="https://www.privatklinik-wehrle-diakonissen.at/de/arzt/thomas-schrader" class="text-link" target="_blank" rel="noopener">Zum Profil an der Privatklinik <span class="arrow">→</span></a>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0; padding-bottom:var(--section-pad);">
      <div class="container">
        <div class="emergency-strip reveal" style="margin-top:var(--section-pad);">
          <strong>Bei Notfällen</strong>
          <span>auch am Wochenende und an Feiertagen erreichbar: <a href="tel:+436608574000"><strong>+43 660 8574000</strong></a></span>
        </div>
      </div>
    </section>
""" + closer("Der nächste freie Termin wartet auf Sie.",
             "Rufen Sie an oder schreiben Sie mir — ich melde mich verlässlich und rasch zurück."),
})

# ============================================================ Kontakt
PAGES.append({
    "file": "kontakt.html",
    "title": "Kontakt & Termin | Orthopäde Dr. Schrader Salzburg",
    "desc": "Jetzt Wahlarzt-Termin vereinbaren: telefonisch unter +43 660 8574000, per E-Mail oder online. Ordination im healthlab Salzburg, Alpenstraße 99.",
    "active": "KONTAKT",
    "body": page_header(
        "<span>Kontakt</span>",
        "Kontakt &amp; Terminvereinbarung",
        "Der schnellste Weg zu Ihrem Termin: ein Anruf. Sie erreichen mich aber auch per E-Mail, über das Kontaktformular oder die Online-Buchung des healthlab.") + """
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-card reveal">
            <svg class="icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M10 6h8l4 10-5 4c2 5 6 9 11 11l4-5 10 4v8c0 2-2 4-4 4C20 42 6 28 6 10c0-2 2-4 4-4z"/></svg>
            <h3>Telefon</h3>
            <p>Mobil &amp; Notfälle:<br><a class="big" href="tel:+436608574000">+43 660 8574000</a></p>
            <p style="margin-top:0.6rem;">healthlab Empfang:<br><a href="tel:+43662422960">+43 662 422960</a></p>
          </div>
          <div class="contact-card reveal">
            <svg class="icon" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="10" width="36" height="28" rx="2"/><path d="M6 14l18 12 18-12"/></svg>
            <h3>E-Mail</h3>
            <p>Schreiben Sie mir Ihr Anliegen:<br><a class="big" href="mailto:schrader@healthlab.at">schrader@healthlab.at</a></p>
          </div>
          <div class="contact-card reveal">
            <svg class="icon" viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="8" width="36" height="34" rx="2"/><path d="M6 18h36M16 4v8M32 4v8"/><path d="M15 28l6 6 12-12"/></svg>
            <h3>Online buchen</h3>
            <p>Termin bequem online reservieren über das Buchungssystem des healthlab.</p>
            <a href="https://www.healthlab.at/booking" class="btn btn-gold" style="margin-top:1rem;" target="_blank" rel="noopener">Online-Termin buchen</a>
          </div>
        </div>

        <div class="emergency-strip reveal" style="margin-top:2.5rem;">
          <strong>Notfälle:</strong>
          <span>Behandlungstermine auch am Wochenende und an Feiertagen nach telefonischer Vereinbarung — <a href="tel:+436608574000"><strong>+43 660 8574000</strong></a></span>
        </div>
      </div>
    </section>

    <section class="section section-grey">
      <div class="container split" style="align-items:start;">
        <div class="reveal">
          <p class="eyebrow">Kontaktformular</p>
          <h2>Schildern Sie mir Ihr Anliegen.</h2>
          <p>Ich melde mich verlässlich und rasch bei Ihnen zurück — in der Regel innerhalb eines Werktages.</p>
          <p class="form-note">Bitte übermitteln Sie aus Datenschutzgründen keine sensiblen Befunde über das Formular — diese besprechen wir im persönlichen Termin.</p>
          <h3 style="margin-top:2.2rem;">Ordination</h3>
          <p>healthlab Salzburg<br>Alpenstraße 99, 5020 Salzburg<br>Termine nach Vereinbarung</p>
        </div>
        <form id="contactForm" class="reveal" novalidate>
          <div class="form-grid">
            <div class="form-field">
              <label for="f-name">Name *</label>
              <input type="text" id="f-name" name="name" required autocomplete="name">
            </div>
            <div class="form-field">
              <label for="f-telefon">Telefon</label>
              <input type="tel" id="f-telefon" name="telefon" autocomplete="tel">
            </div>
            <div class="form-field full">
              <label for="f-email">E-Mail *</label>
              <input type="email" id="f-email" name="email" required autocomplete="email">
            </div>
            <div class="form-field full">
              <label for="f-anliegen">Anliegen</label>
              <select id="f-anliegen" name="anliegen">
                <option>Terminanfrage</option>
                <option>Arthrose / Gelenkerhalt</option>
                <option>Operation / Zweitmeinung</option>
                <option>Wirbelsäule / Rückenschmerz</option>
                <option>Sportverletzung / Unfall</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div class="form-field full">
              <label for="f-nachricht">Nachricht *</label>
              <textarea id="f-nachricht" name="nachricht" rows="5" required></textarea>
            </div>
            <div class="form-field full">
              <button type="submit" class="btn btn-primary">Nachricht senden</button>
            </div>
          </div>
        </form>
      </div>
    </section>
""",
})

# ============================================================ Impressum
PAGES.append({
    "file": "impressum.html",
    "title": "Impressum | Dr. Thomas Schrader – Orthopäde Salzburg",
    "desc": "Impressum der Wahlarzt-Ordination Dr. Thomas Schrader, Facharzt für Orthopädie und Orthopädische Chirurgie, Unfallchirurgie, Salzburg.",
    "active": "",
    "body": page_header(
        "<span>Impressum</span>",
        "Impressum",
        "Angaben gemäß § 5 ECG, § 25 MedienG und § 63 GewO.") + """
    <section class="section">
      <div class="container-narrow">
        <h2>Medieninhaber &amp; Herausgeber</h2>
        <p><strong>Dr. Thomas Schrader</strong><br>
        Facharzt für Orthopädie und Orthopädische Chirurgie, Unfallchirurgie<br>
        Wahlarzt-Ordination im healthlab Salzburg<br>
        Alpenstraße 99, 5020 Salzburg, Österreich</p>
        <p>Telefon: <a href="tel:+436608574000">+43 660 8574000</a><br>
        E-Mail: <a href="mailto:schrader@healthlab.at">schrader@healthlab.at</a></p>

        <h2 style="margin-top:3rem;">Berufsrechtliche Angaben</h2>
        <p>Berufsbezeichnung: Arzt — Facharzt für Orthopädie und Orthopädische Chirurgie, Unfallchirurgie (verliehen in Österreich)<br>
        Die Tätigkeit unterliegt dem Ärztegesetz 1998 (<a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener">www.ris.bka.gv.at</a>)<br>
        Zuständige Kammer: Ärztekammer für Salzburg, Faberstraße 10, 5020 Salzburg</p>
        <p><em>[PLATZHALTER: UID-Nummer ergänzen, sofern vorhanden]</em></p>

        <h2 style="margin-top:3rem;">Haftungsausschluss</h2>
        <p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt, ersetzen jedoch keine ärztliche Beratung, Diagnose oder Behandlung. Für die Aktualität, Korrektheit und Vollständigkeit der bereitgestellten Informationen wird keine Gewähr übernommen. Haftungsansprüche, die sich auf Schäden materieller oder ideeller Art beziehen, welche durch die Nutzung oder Nichtnutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.</p>
        <p>Für Inhalte externer Links wird keine Haftung übernommen; für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</p>
      </div>
    </section>
""",
})

# ============================================================ Datenschutz
PAGES.append({
    "file": "datenschutz.html",
    "title": "Datenschutz | Dr. Thomas Schrader – Orthopäde Salzburg",
    "desc": "Datenschutzerklärung der Wahlarzt-Ordination Dr. Thomas Schrader, Salzburg.",
    "active": "",
    "body": page_header(
        "<span>Datenschutz</span>",
        "Datenschutzerklärung",
        "Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. Ich verarbeite Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, DSG).") + """
    <section class="section">
      <div class="container-narrow">
        <h2>Verantwortlicher</h2>
        <p>Dr. Thomas Schrader<br>Alpenstraße 99, 5020 Salzburg<br>
        Telefon: <a href="tel:+436608574000">+43 660 8574000</a> · E-Mail: <a href="mailto:schrader@healthlab.at">schrader@healthlab.at</a></p>

        <h2 style="margin-top:3rem;">Kontaktaufnahme</h2>
        <p>Wenn Sie per Formular, E-Mail oder Telefon Kontakt mit mir aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.</p>

        <h2 style="margin-top:3rem;">Patientendaten</h2>
        <p>Im Rahmen der Behandlung verarbeite ich Gesundheitsdaten auf Grundlage von Art. 9 Abs. 2 lit. h DSGVO in Verbindung mit den ärztlichen Dokumentationspflichten nach dem Ärztegesetz 1998. Die gesetzliche Aufbewahrungsfrist für medizinische Dokumentation beträgt 10 Jahre.</p>

        <h2 style="margin-top:3rem;">Webfonts</h2>
        <p>Diese Website verwendet Schriftarten von Google Fonts. Beim Aufruf der Seite wird eine Verbindung zu Servern von Google hergestellt, dabei wird Ihre IP-Adresse übertragen. <em>[EMPFEHLUNG für den Livegang: Fonts lokal einbinden, dann entfällt dieser Abschnitt.]</em></p>

        <h2 style="margin-top:3rem;">Ihre Rechte</h2>
        <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der Datenschutzbehörde (<a href="https://www.dsb.gv.at" target="_blank" rel="noopener">www.dsb.gv.at</a>) beschweren.</p>
        <p><em>[PLATZHALTER: Vor dem Livegang von einem Datenschutz-Experten prüfen und ggf. um Hosting-Provider, Server-Logs und Buchungssystem ergänzen.]</em></p>
      </div>
    </section>
""",
})


def render(p):
    html = HEAD + p["body"] + FOOTER
    html = html.replace("@TITLE@", p["title"]).replace("@DESC@", p["desc"]).replace("@FILE@", p["file"])
    for key in ("UEBER", "LEISTUNGEN", "WAHLARZT", "ORDINATION", "KONTAKT"):
        html = html.replace("@A_" + key + "@", ' class="active"' if p["active"] == key else "")
    return html


for p in PAGES:
    path = os.path.join(OUT, p["file"])
    with open(path, "w", encoding="utf-8") as f:
        f.write(render(p))
    print("wrote", p["file"])

print("done:", len(PAGES), "pages")
