// One-time asset pipeline: optimize + rename client photos into /public.
// Run from project root: node scripts/process-assets.mjs
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const RAW = path.resolve("..", "_assets_raw");
const OUT = path.resolve("public");

// Find a file case-insensitively within a directory tree.
async function findFile(dir, predicate) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      const found = await findFile(full, predicate);
      if (found) return found;
    } else if (predicate(e.name.toLowerCase())) {
      return full;
    }
  }
  return null;
}

async function emit(srcAbs, outRel, width, quality = 82) {
  if (!srcAbs) {
    console.warn("  MISSING source for", outRel);
    return;
  }
  const outAbs = path.join(OUT, outRel);
  await fs.mkdir(path.dirname(outAbs), { recursive: true });
  await sharp(srcAbs)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outAbs);
  console.log("  ✓", outRel);
}

// model => raw subdir, filename token for front/back
const models = {
  basics: { dir: path.join(RAW, "Polo Basics", "Polo Basics"), token: "pb" },
  zipper: { dir: path.join(RAW, "Polo Zipper", "Polo Zipper"), token: "zp" },
};
const colors = ["black", "green", "grey", "navyblue"];

const run = async () => {
  console.log("Products:");
  for (const [model, cfg] of Object.entries(models)) {
    for (const color of colors) {
      const front = await findFile(cfg.dir, (n) => n.includes(color) && n.includes(cfg.token) && n.includes("front"));
      const back = await findFile(cfg.dir, (n) => n.includes(color) && n.includes(cfg.token) && n.includes("back"));
      const close = await findFile(cfg.dir, (n) => n.includes(color) && n.includes("closeup"));
      await emit(front, `products/${model}/${color}-front.webp`, 1200);
      await emit(back, `products/${model}/${color}-back.webp`, 1200);
      await emit(close, `products/${model}/${color}-closeup.webp`, 1500, 84);
    }
  }

  console.log("Bundles:");
  const bundleBasics = path.join(RAW, "Polo Basics Bundle", "Polo Basics Bundle");
  const bundleZipper = path.join(RAW, "Polo Zipper Bundle", "Polo Zipper Bundle");
  await emit(await findFile(bundleBasics, (n) => n.includes("front")), "products/bundle-basics/front.webp", 1200);
  await emit(await findFile(bundleBasics, (n) => n.includes("back")), "products/bundle-basics/back.webp", 1200);
  await emit(await findFile(bundleZipper, (n) => n.includes("front")), "products/bundle-zipper/front.webp", 1200);
  await emit(await findFile(bundleZipper, (n) => n.includes("back")), "products/bundle-zipper/back.webp", 1200);

  console.log("Lookbook + brand:");
  const polo3 = path.join(RAW, "polo3");
  await emit(await findFile(polo3, (n) => n === "creative shoots0419.jpg"), "lookbook/longsleeve-trio.webp", 1600, 85);
  await emit(await findFile(polo3, (n) => n === "creative shoots0421.jpg"), "lookbook/editorial-2.webp", 1600, 85);
  await emit(await findFile(polo3, (n) => n === "creative shoots0642.jpg"), "lookbook/navy-pedestal.webp", 1600, 85);
  await emit(await findFile(polo3, (n) => n === "banner canva.jpg"), "lookbook/banner.webp", 1800, 85);
  await emit(await findFile(polo3, (n) => n === "bracelet.jpg"), "brand/bracelet.webp", 900, 85);
  // size guides
  await emit(await findFile(polo3, (n) => n.includes("basic polo dimension")), "size/basics.webp", 1100, 88);
  await emit(await findFile(polo3, (n) => n.includes("zipper polo dimension")), "size/zipper.webp", 1100, 88);

  console.log("Bracelet promo:");
  const braceletDir = path.join(RAW, "Bracelet picture and offer_Elemental Episodes");
  await emit(await findFile(braceletDir, (n) => n === "1.post.png"), "brand/bracelet-offer-1.webp", 1080, 85);
  await emit(await findFile(braceletDir, (n) => n === "2.post.png"), "brand/bracelet-offer-2.webp", 1080, 85);
  await emit(await findFile(braceletDir, (n) => n === "3.post.png"), "brand/bracelet-offer-3.webp", 1080, 85);

  console.log("Done.");
};

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
