// Small rendering toolkit: an html`` tag, icons, illustrations and the body figure.

export const html = (strings, ...values) =>
  strings.reduce((out, s, i) => out + s + (i < values.length ? render(values[i]) : ''), '');

const render = (v) => (v == null || v === false ? '' : Array.isArray(v) ? v.map(render).join('') : String(v));

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ───────────────────────────── Icons (24px, 1.6 stroke)

const ico = (body, extra = '') =>
  `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${body}</svg>`;

export const icons = {
  arrow: ico('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowLeft: ico('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  arrowUpRight: ico('<path d="M7 17 17 7M8 7h9v9"/>'),
  chevron: ico('<path d="m6 9 6 6 6-6"/>'),
  chevronRight: ico('<path d="m9 6 6 6-6 6"/>'),
  back: ico('<path d="M19 12H5M11 18l-6-6 6-6"/>'),
  phone: ico('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
  mail: ico('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  pin: ico('<path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>'),
  clock: ico('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  calendar: ico('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  close: ico('<path d="M6 6l12 12M18 6 6 18"/>'),
  menu: ico('<path d="M4 8h16M4 16h16"/>'),
  plus: ico('<path d="M12 5v14M5 12h14"/>'),
  check: ico('<path d="m5 12 4.5 4.5L19 7"/>'),
  scan: ico('<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><path d="M7 12h10"/>'),
  door: ico('<path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><circle cx="14.5" cy="12" r=".8" fill="currentColor"/>'),
  layers: ico('<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/>'),
  user: ico('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  shield: ico('<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>'),
  euro: ico('<path d="M17 6.5A7 7 0 1 0 17 17.5"/><path d="M4 10h9M4 14h9"/>'),
  sparkle: ico('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/>'),
  tap: ico('<path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-1.5a1.5 1.5 0 0 1 3 0V11m0-1a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1-6 6h-.6a5 5 0 0 1-3.9-1.9L5 15.4a1.6 1.6 0 0 1 2.4-2.1L9 15"/>'),
  quote: ico('<path d="M10 7H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v1a3 3 0 0 1-3 3M20 7h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v1a3 3 0 0 1-3 3"/>'),
};

// ───────────────────────────── Illustrations (160px canvas)
// Soft, tonal objects: a gradient body in currentColor, a fine outline and a few highlight strokes.
// Every call gets its own gradient ids, so the same drawing can appear on light and dark tiles.

let uid = 0;
const illo = (draw) => () => {
  const id = `il${++uid}`;
  const g = `url(#${id}g)`;
  const s = `url(#${id}s)`;
  return `<svg class="art" viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
<defs>
<linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity=".34"/><stop offset="1" stop-color="currentColor" stop-opacity=".06"/></linearGradient>
<radialGradient id="${id}s" cx=".35" cy=".3" r=".75"><stop offset="0" stop-color="currentColor" stop-opacity=".08"/><stop offset=".7" stop-color="currentColor" stop-opacity=".3"/><stop offset="1" stop-color="currentColor" stop-opacity=".45"/></radialGradient>
</defs>${draw(g, s)}</svg>`;
};

// Shared knee bones (front view): femur above, tibia below.
const kneeBones = (g) => `
  <path d="M66 8v34c0 10-17 15-19 28-2 12 8 20 18 19 6-1 10-4 15-4s9 3 15 4c10 1 20-7 18-19-2-13-19-18-19-28V8" fill="${g}"/>
  <path d="M47 112c0-6 6-9 13-9h40c7 0 13 3 13 9 0 9-14 12-17 21l-2 19H66l-2-19c-3-9-17-12-17-21Z" fill="${g}"/>
  <path d="M72 20v20M88 20v20M76 126v18" opacity=".3"/>`;

export const illustrations = {
  // Natural joint with smooth cartilage and two protective arcs – "Gelenk erhalten".
  joint: illo((g) => `${kneeBones(g)}
    <path d="M52 92c9 6 19 7 28 4 9 3 19 2 28-4" stroke-width="2.6" opacity=".55"/>
    <path d="M30 56c-12 18-12 50 2 70M130 56c12 18 12 50-2 70" stroke-width="2" opacity=".5"/>
    <path d="M22 66c-7 14-7 34 2 50M138 66c7 14 7 34-2 50" opacity=".25"/>`),

  // Hip prosthesis: cup, small ball head, neck and a long tapered stem.
  hip: illo((g, s) => `
    <path d="M42.5 56.3A18.5 18.5 0 0 1 73.5 36.1L70.2 38.5A14.5 14.5 0 0 0 45.9 54.3Z" fill="${g}"/>
    <circle cx="58.5" cy="47" r="11" fill="${s}"/>
    <path d="M66 55 85 74" stroke-width="9" opacity=".22"/>
    <path d="M64.5 58.5 81 75.5M68.5 53 85.5 70" />
    <path d="M80 70c6-8 21-7 25 3l3 15c2 18 0 40-4 62-1 6-9 6-10 0l-6-56c-1-8-4-15-8-20Z" fill="${g}"/>
    <path d="M101 86c1 18 0 38-3 56" opacity=".35"/>
    <circle cx="55" cy="43" r="2.6" fill="currentColor" stroke="none" opacity=".35"/>`),

  // Knee prosthesis: femoral component with two condyles, insert, tray and keel.
  knee: illo((g) => `
    <path d="M42 40c0-5 4-8 9-8h58c5 0 9 3 9 8v24c0 20-11 31-24 31-7 0-11-3-14-7-3 4-7 7-14 7-13 0-24-11-24-31Z" fill="${g}"/>
    <path d="M54 34v26c0 13 6 21 15 22M106 34v26c0 13-6 21-15 22" opacity=".35"/>
    <rect x="44" y="102" width="72" height="11" rx="5" fill="${g}"/>
    <rect x="40" y="116" width="80" height="7" rx="3.5" fill="currentColor" fill-opacity=".28"/>
    <path d="M72 123l1.5 22a6.5 6.5 0 0 0 13 0L88 123" fill="${g}"/>`),

  // Arthroscopy: knee joint with two slim instruments entering at the joint line, light at the tip.
  scope: illo((g) => `${kneeBones(g)}
    <circle cx="80" cy="97" r="16" fill="currentColor" fill-opacity=".12" stroke="none"/>
    <path d="M14 140 64 99" stroke-width="4" opacity=".22"/><path d="M14 140 64 99"/>
    <path d="M146 140 98 100" stroke-width="3" opacity=".22"/><path d="M146 140 98 100"/>
    <circle cx="64" cy="99" r="2.5" fill="currentColor" stroke="none"/>`),

  // Open hand, palm facing forward, fingers touching.
  hand: illo((g) => `
    <path d="M63 150v-12c-6-6-12-14-16-24L31 92c-5-6-5-14 1-17 5-3 10 1 14 7l7 10V40c0-8 12-8 12 0v-8c0-8 14-8 14 0v4c0-8 14-8 14 0v10c0-7 11-7 11 0v52c1 14-1 26-7 36v16Z" fill="${g}"/>
    <path d="M65 40v38M79 36v40M93 46v32" opacity=".28"/>
    <path d="M61 112c10-8 26-9 40-2" opacity=".35"/>`),

  // Foot in side view with lower leg, arch and ankle.
  foot: illo((g) => `
    <path d="M66 10C63 40 60 62 60 80c0 12 10 20 30 28 20 8 42 12 52 20 8 6 4 18-6 18H56c-16 0-26-10-24-24 2-10 8-16 8-30 0-24-6-52-10-82Z" fill="${g}"/>
    <path d="M60 146c14-10 36-12 56-4" opacity=".4"/>
    <circle cx="51" cy="94" r="5" opacity=".35"/>
    <path d="M132 128c5 4 8 9 9 15" opacity=".3"/>`),

  // Shockwave: applicator on the skin, waves spreading into the tissue below.
  waves: illo((g) => `
    <rect x="14" y="88" width="132" height="58" rx="12" fill="${g}" stroke-opacity=".5"/>
    <rect x="68" y="14" width="24" height="48" rx="11" fill="${g}"/>
    <path d="M58 62h44v12a8 8 0 0 1-8 8H66a8 8 0 0 1-8-8Z" fill="currentColor" fill-opacity=".25"/>
    <path d="M66 96a14 10 0 0 0 28 0" stroke-width="1.8"/>
    <path d="M56 98a24 18 0 0 0 48 0" opacity=".65"/>
    <path d="M46 100a34 26 0 0 0 68 0" opacity=".4"/>
    <path d="M36 102a44 34 0 0 0 88 0" opacity=".2"/>
    <circle cx="80" cy="126" r="4" fill="currentColor" stroke="none" opacity=".5"/>`),

  // Targeted infiltration: concentric rings with a drop at the centre – precision, not a needle.
  target: illo((g) => `
    <circle cx="80" cy="80" r="58" opacity=".18"/>
    <circle cx="80" cy="80" r="42" fill="${g}" opacity=".9"/>
    <circle cx="80" cy="80" r="26" opacity=".55"/>
    <path d="M80 8v14M80 138v14M8 80h14M138 80h14" opacity=".45"/>
    <path d="M80 62s-11 13-11 21a11 11 0 0 0 22 0c0-8-11-21-11-21Z" fill="currentColor" fill-opacity=".35"/>`),

  // Hyaluronic acid: a drop with a soft molecule chain inside.
  droplet: illo((g) => `
    <path d="M80 16s-44 50-44 82a44 44 0 0 0 88 0c0-32-44-82-44-82Z" fill="${g}"/>
    <path d="M58 116a24 24 0 0 1-5-18" opacity=".4"/>
    <path d="M62 102c6-10 12-10 18 0s12 10 18 0" opacity=".55"/>
    <circle cx="62" cy="102" r="4" fill="currentColor" fill-opacity=".3"/><circle cx="80" cy="102" r="4" fill="currentColor" fill-opacity=".3"/><circle cx="98" cy="102" r="4" fill="currentColor" fill-opacity=".3"/>`),

  // Platelet-rich plasma: a tube with a separated plasma layer.
  tube: illo((g) => `
    <rect x="58" y="14" width="44" height="13" rx="5" fill="currentColor" fill-opacity=".25"/>
    <path d="M64 27v92a16 16 0 0 0 32 0V27" fill="${g}"/>
    <path d="M65 76h30v43a15 15 0 0 1-30 0Z" fill="currentColor" fill-opacity=".26" stroke="none"/>
    <path d="M64 76h32" />
    <path d="M71 38v26" opacity=".35"/>`),

  // Spine: stacked vertebrae with discs.
  spine: illo((g) => `${[0, 1, 2, 3, 4].map((i) => {
      const y = 14 + i * 27; const w = 38 + i * 3.5; const x = 80 - w / 2;
      return `<rect x="${x}" y="${y}" width="${w}" height="18" rx="7" fill="${g}"/>
      <path d="M${x - 2} ${y + 9}h-10M${x + w + 2} ${y + 9}h10" opacity=".45"/>
      ${i < 4 ? `<ellipse cx="80" cy="${y + 22.5}" rx="${w / 2 - 5}" ry="2.4" fill="currentColor" fill-opacity=".3" stroke="none"/>` : ''}`;
    }).join('')}`),

  // Ultrasound: probe with its scan fan.
  probe: illo((g) => `
    <path d="M60 66 36 136a96 96 0 0 0 88 0L100 66Z" fill="${g}" stroke-opacity=".6"/>
    <path d="M48 106a62 62 0 0 0 64 0M42 122a80 80 0 0 0 76 0" opacity=".35"/>
    <ellipse cx="86" cy="108" rx="8" ry="6" fill="currentColor" fill-opacity=".3" stroke="none"/>
    <rect x="58" y="14" width="44" height="54" rx="14" fill="${g}"/>
    <path d="M66 28h28" opacity=".4"/>`),

  // Mountains with a ski trail – sport and accidents in the Salzburg region.
  mountains: illo((g) => `
    <path d="M10 132 58 52l22 34 18-26 52 72Z" fill="${g}"/>
    <path d="M48 68l10-16 10 16-5-3-5 5-5-5Z" fill="currentColor" fill-opacity=".35"/>
    <path d="M91 70l7-10 7 10-4-2-3 3-3-3Z" fill="currentColor" fill-opacity=".35"/>
    <path d="M60 128c10-14 26-18 30-30s16-14 22-20" stroke-dasharray="2 6" opacity=".6"/>`),

  // Two speech bubbles – listening.
  speech: illo((g) => `
    <path d="M20 44a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14v34a14 14 0 0 1-14 14H58l-18 16V92h-6a14 14 0 0 1-14-14Z" fill="${g}"/>
    <path d="M122 70h4a14 14 0 0 1 14 14v26a14 14 0 0 1-14 14h-2v14l-16-14H86a14 14 0 0 1-14-14v-6" opacity=".55"/>
    <path d="M40 52h52M40 66h34" opacity=".45"/>`),

  // A route with stops – accompanying the way back.
  route: illo((g) => `
    <path d="M28 132c34 0 20-46 54-46s22-48 52-48" stroke-dasharray="3 7" opacity=".6"/>
    <circle cx="28" cy="132" r="8" fill="${g}"/>
    <circle cx="82" cy="86" r="8" fill="${g}"/>
    <path d="M128 52V22l22 9-22 9" fill="currentColor" fill-opacity=".3"/>`),

  // Network of colleagues.
  network: illo((g) => `
    <circle cx="80" cy="80" r="17" fill="${g}"/>
    <circle cx="32" cy="42" r="11" fill="${g}"/><circle cx="130" cy="38" r="11" fill="${g}"/><circle cx="30" cy="124" r="11" fill="${g}"/><circle cx="128" cy="124" r="11" fill="${g}"/>
    <path d="m42 50 23 18M120 45 96 69M40 116l26-24M118 115 95 91" stroke-dasharray="3 5" opacity=".6"/>`),
};

export const treatmentArt = {
  'kortison-infiltration': 'target',
  hyaluronsaeure: 'droplet',
  eigenbluttherapie: 'tube',
  'wirbelsaeulen-infiltration': 'spine',
  stosswellentherapie: 'waves',
  arthrosetherapie: 'joint',
  ultraschall: 'probe',
  hueftprothese: 'hip',
  knieprothese: 'knee',
  kniearthroskopie: 'scope',
  handchirurgie: 'hand',
  fusschirurgie: 'foot',
  sportmedizin: 'mountains',
};

export const art = (name) => (illustrations[name] ?? illustrations.network)();

// ───────────────────────────── Body figure
// One continuous outline, traced from a natural standing figure (arms slightly away from the body,
// open hands). Right half is listed top → crotch; the left half is its mirror. Points marked 'c' stay sharp.

const RIGHT = [
  [150, 10], [167, 13], [177, 23], [181, 39], [183.5, 45], [186, 54], [183, 63], [178.5, 66], [175.5, 72], [172, 81.5],
  [172.5, 97], [183, 103.5], [200, 108.5], [218, 112.5], [232.5, 118], [240, 131], [243, 150],
  [244.5, 178], [253, 207.5], [270.5, 242.5], [285, 273],
  [297, 301], [310, 318.5], [311.5, 326], [303, 327.5], [292.5, 317, 'c'],
  [293.5, 340.5], [287, 358], [272, 361], [261, 355], [259, 328], [256, 302.5],
  [247, 280.5], [235, 255], [224, 229.5], [215, 204], [210.7, 178, 'c'],
  [207.7, 200], [207, 229], [210, 258.5], [214.3, 288], [215.8, 317],
  [213, 368], [205.6, 412], [199.7, 445], [197.5, 465], [199.7, 492.5], [198.2, 533], [188.7, 569], [180.7, 593],
  [183.6, 603.6], [192.4, 616.7], [194.6, 627], [183, 632], [165.4, 632], [158, 625.5],
  [158.8, 609.4], [160.2, 593.3], [161.7, 558.3], [162.4, 521.7], [159.5, 488.8], [157.3, 464.7], [155.8, 426.7], [153.7, 382.8], [151.5, 350],
  [150, 344.8, 'c'],
];

const OUTLINE = [...RIGHT, ...RIGHT.slice(1, -1).reverse().map(([x, y, c]) => [+(300 - x).toFixed(1), y, c])];

// Closed Catmull-Rom spline through the outline points → cubic Bézier path.
function smooth(pts) {
  const n = pts.length;
  const f = (v) => +v.toFixed(1);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const k = 1 / 6;
    const c1 = p1[2] ? p1 : [p1[0] + (p2[0] - p0[0]) * k, p1[1] + (p2[1] - p0[1]) * k];
    const c2 = p2[2] ? p2 : [p2[0] - (p3[0] - p1[0]) * k, p2[1] - (p3[1] - p1[1]) * k];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}

export const BODY = smooth(OUTLINE);
export const FIG_BOX = { x: -24, y: -4, w: 348, h: 648 };
const VIEWBOX = `${FIG_BOX.x} ${FIG_BOX.y} ${FIG_BOX.w} ${FIG_BOX.h}`;

const spineDots = (r) => {
  const [[x, y1], [, y2]] = r.line;
  const out = [];
  for (let y = y1; y <= y2; y += 14) out.push([x, y]);
  return out;
};

// Glow shape(s) for a region, drawn inside the body clip.
const glowFor = (r, fill) => r.line
  ? `<rect class="figure__glow" data-glow="${r.id}" x="${r.line[0][0] - r.r}" y="${r.line[0][1] - 14}" width="${r.r * 2}" height="${r.line[1][1] - r.line[0][1] + 28}" rx="${r.r}" fill="${fill}"/>`
  : r.points.map(([x, y]) => `<circle class="figure__glow" data-glow="${r.id}" cx="${x}" cy="${y}" r="${r.r * 1.35}" fill="${fill}"/>`).join('');

const marksFor = (r) => r.line
  ? spineDots(r).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.6"/>`).join('')
  : r.points.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="5.5"/>`).join('');

const hitsFor = (r) => r.line
  ? `<rect class="figure__hit" data-hit="${r.id}" x="${r.line[0][0] - 20}" y="${r.line[0][1] - 10}" width="40" height="${r.line[1][1] - r.line[0][1] + 20}" rx="20"/>`
  : r.points.map(([x, y]) => `<circle class="figure__hit" data-hit="${r.id}" cx="${x}" cy="${y}" r="${r.r + 8}"/>`).join('');

// The body figure. `lit` lists regions to highlight; `marks` which regions show their markers;
// `interactive` adds large invisible hit areas for pointer selection.
export function figure({ id = 'fig', regions = [], lit = [], marks = [], interactive = false } = {}) {
  const shown = regions.filter((r) => marks.includes(r.id));
  return html`<svg class="figure${interactive ? ' figure--interactive' : ''}" viewBox="${VIEWBOX}" role="img" aria-label="Schematische Darstellung des Körpers" data-figure>
  <defs>
    <linearGradient id="${id}-skin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" style="stop-color:var(--fig-top)"/><stop offset="1" style="stop-color:var(--fig-bottom)"/>
    </linearGradient>
    <radialGradient id="${id}-light"><stop offset="0" style="stop-color:var(--fig-light);stop-opacity:.75"/><stop offset=".55" style="stop-color:var(--fig-light);stop-opacity:.28"/><stop offset="1" style="stop-color:var(--fig-light);stop-opacity:0"/></radialGradient>
    <filter id="${id}-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="8"/></filter>
    <filter id="${id}-halo" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="20"/></filter>
    <clipPath id="${id}-clip"><path d="${BODY}"/></clipPath>
  </defs>
  <path class="figure__halo" d="${BODY}" filter="url(#${id}-halo)"/>
  <path class="figure__body" d="${BODY}" fill="url(#${id}-skin)"/>
  <g clip-path="url(#${id}-clip)">
    <path class="figure__shade" d="${BODY}" filter="url(#${id}-blur)"/>
    ${regions.map((r) => html`<g class="figure__lit${lit.includes(r.id) ? ' is-lit' : ''}" data-lit="${r.id}">${glowFor(r, `url(#${id}-light)`)}</g>`)}
  </g>
  ${shown.map((r) => html`<g class="figure__marks${lit.includes(r.id) ? ' is-lit' : ''}${r.line ? ' figure__marks--line' : ''}" data-mark="${r.id}">${marksFor(r)}</g>`)}
  ${interactive ? html`<g class="figure__hits" aria-hidden="true">${regions.map((r) => hitsFor(r))}</g>` : ''}
</svg>`;
}

// Position helpers for HTML labels placed over a figure (percent of the viewBox).
export const figPos = ([x, y]) => ({
  left: (((x - FIG_BOX.x) / FIG_BOX.w) * 100).toFixed(2),
  top: (((y - FIG_BOX.y) / FIG_BOX.h) * 100).toFixed(2),
});

// Tiny figure used as an icon on region tiles: same silhouette, the region marked.
export function miniFigure(region) {
  const r = region;
  const mark = !r ? '' : r.line
    ? `<path class="mini-fig__line" d="M${r.line[0][0]} ${r.line[0][1]}V${r.line[1][1]}"/>`
    : r.points.map(([x, y]) => `<circle class="mini-fig__dot" cx="${x}" cy="${y}" r="24"/>`).join('');
  return html`<svg class="mini-fig" viewBox="${VIEWBOX}" aria-hidden="true"><path class="mini-fig__body" d="${BODY}"/>${mark}</svg>`;
}
