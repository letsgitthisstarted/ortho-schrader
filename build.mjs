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

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const BASE = process.env.BASE ?? '/';

const pages = [
  ['/', home()],
  ['/behandlungen/', treatmentsIndex()],
  ...treatments.map((t) => [`/behandlungen/${t.slug}/`, treatmentPage(t)]),
  ['/beschwerden/', conditionsIndex()],
  ...conditions.map((c) => [`/beschwerden/${c.slug}/`, conditionPage(c)]),
  ['/ueber-mich/', about()],
  ['/wahlarzt-kosten/', wahlarzt()],
  ['/kontakt/', kontakt()],
  ['/impressum/', impressum()],
  ['/datenschutz/', datenschutz()],
  ['/schriften/', fonts()],
];

// Root-relative links are written as "/…"; rebase them when hosting under a sub-path.
const rebase = (s) => (BASE === '/' ? s : s.replace(/(href|src)="\/(?!\/)/g, `$1="${BASE}`));

// Preview builds (NOINDEX=1) ask search engines to stay away until the site goes live.
const NOINDEX = !!process.env.NOINDEX;
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

const today = new Date().toISOString().slice(0, 10);
await writeFile(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.filter(([p]) => !['/impressum/', '/datenschutz/', '/schriften/'].includes(p)).map(([p]) => `  <url><loc>${site.domain}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`);
await writeFile(join(out, 'robots.txt'), NOINDEX ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);

console.log(`Built ${pages.length + 1} pages into dist/ (base ${BASE}${NOINDEX ? ', noindex' : ''})`);
