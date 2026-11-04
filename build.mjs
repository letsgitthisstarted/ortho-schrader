// Static site build: renders every page into dist/ and copies assets.
// Usage: node build.mjs            → links start at "/"
//        BASE=/ortho-schrader/ node build.mjs   → for hosting in a sub-folder (e.g. GitHub Pages)

import { mkdir, writeFile, rm, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { site } from './src/data/site.mjs';
import { treatments } from './src/data/treatments.mjs';
import { conditions } from './src/data/conditions.mjs';
import { home } from './src/pages/home.mjs';
import { treatmentPage, treatmentsIndex } from './src/pages/treatments.mjs';
import { conditionPage, conditionsIndex } from './src/pages/conditions.mjs';
import { about, wahlarzt, kontakt, impressum, datenschutz, notFound } from './src/pages/misc.mjs';
import { fonts } from './src/pages/fonts.mjs';
import { guides } from './src/data/guides.mjs';
import { guidePage, operationPage } from './src/pages/guides.mjs';

const root = dirname(fileURLToPath(import.meta.url));

// Environment flags: only "1", "true" or "yes" switch them on (NOINDEX=0 stays off).
const flag = (name) => /^(1|true|yes)$/i.test(process.env[name] ?? '');
// Preview builds (NOINDEX=1 for GitHub Pages, PREVIEW=1 for the dev server) show the final look to Thomas.
const NOINDEX = flag('NOINDEX');
const PREVIEW = NOINDEX || flag('PREVIEW');

// "Medizinisch geprüft von" is shown only once Thomas has really approved the texts (site.content.medicallyReviewed),
// or in a preview with previewAsReviewed. A normal build for going live therefore never claims a review that did not happen.
site.content.showReviewed = site.content.medicallyReviewed || (PREVIEW && !!site.content.previewAsReviewed);
if (!PREVIEW && !site.content.medicallyReviewed) console.warn('Note: texts not yet medically reviewed – pages say "Inhaltlich verantwortlich".');
const out = join(root, 'dist');
const BASE = process.env.BASE ?? '/';

const pages = [
  ['/', home()],
  ['/behandlungen/', treatmentsIndex()],
  ...treatments.map((t) => [`/behandlungen/${t.slug}/`, treatmentPage(t)]),
  ['/beschwerden/', conditionsIndex()],
  ...conditions.map((c) => [`/beschwerden/${c.slug}/`, conditionPage(c)]),
  ...guides.map((g) => [`/beschwerden/${g.slug}/`, guidePage(g)]),
  ['/operation/', operationPage()],
  ['/ueber-mich/', about()],
  ['/wahlarzt-kosten/', wahlarzt()],
  ['/kontakt/', kontakt()],
  ['/impressum/', impressum()],
  ['/datenschutz/', datenschutz()],
  ['/schriften/', fonts()],
];

// Root-relative links are written as "/…"; rebase them when hosting under a sub-path (also url('/…') in inline CSS).
const rebase = (s) => (BASE === '/' ? s : s.replace(/(href|src)="\/(?!\/)/g, `$1="${BASE}`).replace(/url\((['"]?)\/(?!\/)/g, `url($1${BASE}`));

// Preview builds (NOINDEX=1) ask search engines not to index the pages until the site goes live.
const finalize = (html) => {
  const out = rebase(html);
  return NOINDEX ? out.replace('<meta charset="utf-8">', '<meta charset="utf-8">\n<meta name="robots" content="noindex, nofollow">') : out;
};

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const [path, htmlText] of pages) {
  const file = join(out, path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, finalize(htmlText));
}
await writeFile(join(out, '404.html'), finalize(notFound()));

await cp(join(root, 'src/assets'), join(out, 'assets'), { recursive: true });

// lastmod is the date the texts were last changed (site.content.updated), not the build date.
const lastmod = site.content.updated;
await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(([p]) => !['/impressum/', '/datenschutz/', '/schriften/'].includes(p)).map(([p]) => `  <url><loc>${site.domain}${p}</loc><lastmod>${lastmod}</lastmod></url>`).join('\n')}
</urlset>
`);
// The preview must stay crawlable: a crawler blocked by robots.txt never sees the pages' noindex.
await writeFile(join(out, 'robots.txt'), NOINDEX ? 'User-agent: *\nAllow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);

console.log(`Built ${pages.length + 1} pages into dist/ (base ${BASE}${NOINDEX ? ', noindex' : ''})`);
