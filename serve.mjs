// Minimal static server for dist/ with live rebuild: edits in src/ rebuild the site.
// Usage: node serve.mjs [port]

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { watch } from 'node:fs';
import { join, extname, dirname } from 'node:path';
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

const build = () => new Promise((resolve) => {
  const p = spawn(process.execPath, [join(root, 'build.mjs')], { stdio: 'inherit' });
  p.on('exit', resolve);
});

await build();

let timer;
watch(join(root, 'src'), { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(build, 120);
});

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (path.endsWith('/')) path += 'index.html';
  let file = join(dist, path);
  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(await readFile(join(dist, '404.html')).catch(() => 'Not found'));
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
