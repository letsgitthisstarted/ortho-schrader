// Check the generated site's routes, anchors, accessibility references and metadata.
// Usage: npm run build && npm run check
import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';

const root = resolve('dist');
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
  assert(!html.includes('data-bk-auto'), `Unexpected automatic form advance: ${file}`);
  pages.set(file, { html, ids });
}
let references = 0;
for (const [file, { html }] of pages) {
  for (const [, raw] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (/^(?:[a-z]+:|\/\/)/i.test(raw)) continue;
    const [pathname, fragment] = raw.split('#');
    let target = pathname ? (pathname.startsWith('/') ? join(root, decodeURIComponent(pathname)) : resolve(dirname(file), decodeURIComponent(pathname))) : file;
    const info = await stat(target).catch(() => null);
    assert(info, `Missing target ${raw}: ${file}`);
    if (info.isDirectory()) target = join(target, 'index.html');
    assert(await stat(target).catch(() => null), `Missing index ${raw}: ${file}`);
    if (fragment && pages.has(target)) assert(pages.get(target).ids.includes(decodeURIComponent(fragment)), `Missing anchor ${raw}: ${file}`);
    references++;
  }
}
const home = pages.get(join(root, 'index.html')).html;
assert(home.indexOf('id="bodymap"') < home.indexOf('class="section about-home"'), 'Body map should precede the biography');
assert(!home.includes('Beispieltext') && !home.includes('data-story'), 'Draft reviews or scroll story are still rendered');
assert(pages.get(join(root, 'beschwerden/rueckenschmerzen/index.html')).html.includes('tel:144'), 'Missing urgent-care guidance');
const png = await readFile(join(root, 'assets/img/social-card.png'));
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
console.log(`Passed: ${files.length} pages, ${references} local references, metadata and accessibility references.`);
