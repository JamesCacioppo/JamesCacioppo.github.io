import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'parse5';

// Check the generated site offline, including same-site absolute links,
// images, scripts, stylesheets, and fragment identifiers.
const root = path.resolve(process.argv[2] ?? 'public');
const site = new URL(process.env.SITE_URL ?? 'https://jamescacioppo.github.io/');
const pages = new Map();

async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else if (entry.name.endsWith('.html')) {
      const ids = new Set();
      const links = [];
      function walk(node) {
        for (const { name, value } of node.attrs ?? []) {
          if (name === 'id' || (node.tagName === 'a' && name === 'name')) ids.add(value);
          if (['href', 'src', 'poster'].includes(name) && value) links.push(value);
        }
        for (const child of node.childNodes ?? []) walk(child);
      }
      walk(parse(await readFile(file, 'utf8')));
      pages.set(file, { ids, links });
    }
  }
}

await collect(root);
if (!pages.size) throw new Error(`No HTML found in ${root}; run npm run build first.`);

const errors = new Set();
let checked = 0;
for (const [file, { links }] of pages) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  const pageURL = new URL(relative.replace(/index\.html$/, ''), site);
  for (const link of links) {
    let url;
    try {
      url = new URL(link, pageURL);
    } catch {
      errors.add(`${relative}: invalid URL ${link}`);
      continue;
    }
    if (!['http:', 'https:'].includes(url.protocol) || url.origin !== site.origin) continue;
    checked++;
    const pathname = decodeURIComponent(url.pathname);
    let target = path.resolve(root, `.${pathname}`);
    if (!target.startsWith(`${root}${path.sep}`) && target !== root) {
      errors.add(`${relative}: link escapes the output directory: ${link}`);
      continue;
    }
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      if (!(await stat(target)).isFile()) throw new Error('Not a file');
    } catch {
      errors.add(`${relative}: missing target ${link}`);
      continue;
    }
    // Empty fragments and browser text fragments don't identify HTML elements.
    const fragment = decodeURIComponent(url.hash.slice(1).split(':~:text=')[0]);
    if (fragment && pages.has(target) && !pages.get(target).ids.has(fragment)) {
      errors.add(`${relative}: missing fragment ${link}`);
    }
  }
}

if (errors.size) {
  console.error([...errors].sort().join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.size} HTML files and ${checked} internal links and assets.`);
}
