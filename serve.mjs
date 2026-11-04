// Minimal static server for dist/ with live rebuild: edits in src/ rebuild the site.
// Usage: node serve.mjs [port]

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { join, extname, dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root = dirname(fileURLToPath(import.meta.url));
const dist = join(root, 'dist');
const port = Number(process.argv[2] ?? process.env.PORT ?? 4321);

const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.json': 'application/json',
};

// The dev server builds a preview (PREVIEW=1): it shows the final look, e.g. the "Medizinisch geprüft" line.
const build = () => new Promise((done) => {
  const p = spawn(process.execPath, [join(root, 'build.mjs')], { stdio: 'inherit', env: { ...process.env, PREVIEW: '1' } });
  p.on('exit', done);
});

await build();

let timer;
watch(join(root, 'src'), { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(build, 120);
});

const notFound = async (res) => {
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(await readFile(join(dist, '404.html')).catch(() => 'Not found'));
};

createServer(async (req, res) => {
  try {
    let path;
    try {
      path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Bad request');
      return;
    }
    if (path.endsWith('/')) path += 'index.html';
    let file = resolve(dist, `.${path}`);
    // Only files inside dist/ are served – "/..%2fpackage.json" and the like end up as 404.
    if (file !== dist && !file.startsWith(dist + sep)) return await notFound(res);
    try {
      const s = await stat(file);
      if (s.isDirectory()) file = join(file, 'index.html');
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(body);
    } catch {
      await notFound(res);
    }
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.writeHead(500);
    res.end();
  }
}).listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}`));
