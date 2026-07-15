// Downloads all image/favicon assets from the Photofolio target site into /public.
// Preserves the original directory structure under /public/images.
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const BASE = "https://demo.mobanwang.com/mb/lo202602/202602109/html";
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
const PUBLIC_DIR = join(process.cwd(), "public");

// src path (relative to BASE) -> dest path (relative to PUBLIC_DIR)
const assets = [
  ["assets/images/ico-photofolio.png", "images/ico-photofolio.png"],
  ["assets/images/logo-photofolio.png", "images/logo-photofolio.png"],
  ["assets/images/hero/slide1.png", "images/hero/slide1.png"],
  ["assets/images/hero/slide2.png", "images/hero/slide2.png"],
  ["assets/images/hero/slide3.png", "images/hero/slide3.png"],
  ["assets/images/hero/slide4.png", "images/hero/slide4.png"],
  ["assets/images/hero/slide5.png", "images/hero/slide5.png"],
  ["assets/images/backgrounds/about-me-herobg.png", "images/backgrounds/about-me-herobg.png"],
  ["assets/images/backgrounds/about-me-presentation.png", "images/backgrounds/about-me-presentation.png"],
  ["assets/images/testimonials/face-01.png", "images/testimonials/face-01.png"],
  ["assets/images/testimonials/face-02.png", "images/testimonials/face-02.png"],
  ["assets/images/testimonials/face-03.png", "images/testimonials/face-03.png"],
  ["assets/images/gallery/01.jpg", "images/gallery/01.jpg"],
  ["assets/images/gallery/02.jpg", "images/gallery/02.jpg"],
  ["assets/images/gallery/03.jpg", "images/gallery/03.jpg"],
  ["assets/images/gallery/04.jpg", "images/gallery/04.jpg"],
  ["assets/images/gallery/05.jpg", "images/gallery/05.jpg"],
  ["assets/images/gallery/06.jpg", "images/gallery/06.jpg"],
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

// Batched parallel downloads (4 at a time)
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
