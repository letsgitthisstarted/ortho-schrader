// Internal comparison page for the headline typeface (not linked, not indexed).
import { html } from '../lib.mjs';
import { layout } from '../layout.mjs';
import { twoTone } from '../components.mjs';

const candidates = [
  ['Newsreader', 'Aktuell gewählt. Klassisch-zeitgemäße Antiqua mit optischen Größen – ruhig, gut lesbar, nicht verspielt.', "'Newsreader'", 420],
  ['Source Serif 4', 'Sachlicher und etwas technischer. Wirkt sehr seriös, weniger „Magazin“.', "'Source Serif 4'", 450],
  ['Libre Caslon Text', 'Traditionelle Buchschrift. Elegant, aber etwas konservativer.', "'Libre Caslon Text'", 400],
  ['Playfair Display', 'Die Schrift der alten Website – stark kontrastreich, eher „Luxus“.', "'Playfair Display'", 450],
  ['Geist Serif', 'Die erste Version dieses Entwurfs.', "'Geist Serif Plain'", 400],
];

export function fonts() {
  const head = `<meta name="robots" content="noindex">
<style>
@font-face { font-family: 'Source Serif 4'; src: url('/assets/fonts/SourceSerif4-opsz.woff2') format('woff2'); font-weight: 200 900; font-display: swap; }
@font-face { font-family: 'Libre Caslon Text'; src: url('/assets/fonts/LibreCaslonText-400.woff2') format('woff2'); font-weight: 400; font-display: swap; }
@font-face { font-family: 'Playfair Display'; src: url('/assets/fonts/PlayfairDisplay-wght.woff2') format('woff2'); font-weight: 400 900; font-display: swap; }
@font-face { font-family: 'Geist Serif Plain'; src: url('/assets/fonts/GeistSerif-Regular.woff2') format('woff2'); font-weight: 400; font-display: swap; }
.spec { display: grid; gap: 12px; }
.spec__item { padding: clamp(24px, 4vw, 48px); border-radius: var(--r-xl); background: var(--sand); display: grid; gap: 18px; }
.spec__meta { display: flex; flex-wrap: wrap; gap: 8px 16px; align-items: baseline; color: var(--slate); font-size: .95rem; }
.spec__name { font-weight: 600; color: var(--ink); font-size: 1.05rem; }
.spec__h { font-size: clamp(2.6rem, 6vw, 5rem); line-height: 1; letter-spacing: -0.025em; color: var(--ink); }
.spec__h2 { font-size: clamp(1.6rem, 3vw, 2.4rem); line-height: 1.1; color: var(--ink); }
.spec__item--dark { background: var(--navy); }
.spec__item--dark .spec__h, .spec__item--dark .spec__h2 { color: #fff; }
.spec__item--dark .tt-b { color: var(--sky); }
</style>`;
  const body = html`<section class="page-hero"><div class="wrap">
  <h1 class="page-hero__title display">${twoTone('Schriftvergleich', 'für die Überschriften.')}</h1>
  <p class="page-hero__lead" style="margin-top:20px">Interne Seite zum Vergleichen. Der Fließtext bleibt überall Geist Sans.</p>
</div></section>
<section class="section" style="padding-top:0"><div class="wrap spec">
  ${candidates.map(([name, note, family, w], i) => html`<article class="spec__item${i % 2 ? ' spec__item--dark' : ''}">
    <p class="spec__meta"><span class="spec__name">${name}</span><span>${note}</span></p>
    <p class="spec__h" style="font-family:${family};font-weight:${w}">${twoTone('Zuhören. Verstehen.', 'Behandeln.')}</p>
    <p class="spec__h2" style="font-family:${family};font-weight:${w}">Kniearthroskopie · Hüftprothese · Stoßwellentherapie · Schulterschmerzen</p>
  </article>`)}
</div></section>`;
  return layout({ path: '/schriften/', title: 'Schriftvergleich', description: 'Interne Vergleichsseite.', body, head, bodyClass: 'page-fonts' });
}
