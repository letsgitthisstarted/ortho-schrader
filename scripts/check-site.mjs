// Check the generated site's routes, anchors, accessibility references and metadata.
// Usage: npm run build && npm run check   (for a sub-folder build: BASE=/name/ node scripts/check-site.mjs)
import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';

const root = resolve('dist');
const BASE = process.env.BASE ?? '/';
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((e) => e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)))).flat();
}
const files = (await walk(root)).filter((f) => f.endsWith('.html'));
const pages = new Map();
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs: ${file}`);
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `Expected one h1: ${file}`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  for (const [, refs] of html.matchAll(/\baria-(?:controls|labelledby|describedby)="([^"]+)"/g)) {
    for (const id of refs.split(/\s+/)) assert(ids.includes(id), `Missing accessibility target ${id}: ${file}`);
  }
  assert(html.includes('property="og:image"'), `Missing share image: ${file}`);
  pages.set(file, { html, ids });
}
let references = 0;
for (const [file, { html }] of pages) {
  for (const [, raw] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(?:[a-z]+:|\/\/)/i.test(raw)) continue;
    const [pathname, fragment] = raw.split('#');
    const local = BASE !== '/' && pathname.startsWith(BASE) ? pathname.slice(BASE.length - 1) : pathname;
    let target = local ? (local.startsWith('/') ? join(root, decodeURIComponent(local)) : resolve(dirname(file), decodeURIComponent(local))) : file;
    const info = await stat(target).catch(() => null);
    assert(info, `Missing target ${raw}: ${file}`);
    if (info.isDirectory()) target = join(target, 'index.html');
    assert(await stat(target).catch(() => null), `Missing index ${raw}: ${file}`);
    if (fragment && pages.has(target)) assert(pages.get(target).ids.includes(decodeURIComponent(fragment)), `Missing anchor ${raw}: ${file}`);
    references++;
  }
}
const home = pages.get(join(root, 'index.html')).html;
assert(home.indexOf('class="section about-home"') < home.indexOf('id="bodymap"'), 'The doctor introduction should precede the body map');
assert(!home.includes('Beispieltext'), 'Draft reviews are still rendered');
const png = await readFile(join(root, 'assets/img/social-card.png'));
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
console.log(`Passed: ${files.length} pages, ${references} local references, metadata and accessibility references.`);
