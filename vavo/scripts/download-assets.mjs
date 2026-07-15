// Downloads all image + icon-font assets for the Vavo clone into /public.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://demo.mobanwang.com/mb/lo202504/202504055/html";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const PUBLIC_DIR = join(process.cwd(), "public");

// [src relative to BASE, dest relative to PUBLIC_DIR]
const assets = [
  // logos
  ["img/logo/dark.png", "img/logo/dark.png"],
  ["img/logo/logo.png", "img/logo/logo.png"],
  // fixed hero bg + mobile hero
  ["img/about/1.jpg", "img/about/1.jpg"],
  ["img/slider/1920x1080.jpg", "img/slider/1920x1080.jpg"],
  ["img/slider/3.jpg", "img/slider/3.jpg"],
  // portfolio (1-1 = placeholder thumb; 1,3,4,7 = main via data-img-url)
  ["img/portfolio/1-1.jpg", "img/portfolio/1-1.jpg"],
  ["img/portfolio/1.jpg", "img/portfolio/1.jpg"],
  ["img/portfolio/3.jpg", "img/portfolio/3.jpg"],
  ["img/portfolio/4.jpg", "img/portfolio/4.jpg"],
  ["img/portfolio/7.jpg", "img/portfolio/7.jpg"],
  ["img/portfolio/4-3.jpg", "img/portfolio/4-3.jpg"],
  // partners
  ["img/partners/1.png", "img/partners/1.png"],
  ["img/partners/2.png", "img/partners/2.png"],
  ["img/partners/3.png", "img/partners/3.png"],
  ["img/partners/4.png", "img/partners/4.png"],
  ["img/partners/5.png", "img/partners/5.png"],
  // news
  ["img/news/1.jpg", "img/news/1.jpg"],
  ["img/news/2.jpg", "img/news/2.jpg"],
  // xcon icon font (re-pointed @font-face -> /fonts/xcon.*)
  ["font/xcon.woff2", "fonts/xcon.woff2"],
  ["font/xcon.ttf", "fonts/xcon.ttf"],
];

async function downloadOne([src, dest]) {
  const url = `${BASE}/${src}`;
  const outPath = join(PUBLIC_DIR, dest);
  await mkdir(dirname(outPath), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(outPath, buf);
  return `${dest} (${(buf.length / 1024).toFixed(1)} KB)`;
}

const CONCURRENCY = 4;
const results = [];
for (let i = 0; i < assets.length; i += CONCURRENCY) {
  const batch = assets.slice(i, i + CONCURRENCY);
  const settled = await Promise.allSettled(batch.map(downloadOne));
  for (const s of settled) {
    if (s.status === "fulfilled") results.push(s.value);
    else console.error("FAILED:", s.reason?.message || s.reason);
  }
}
console.log(`Downloaded ${results.length}/${assets.length} assets:`);
results.forEach((r) => console.log("  - " + r));
