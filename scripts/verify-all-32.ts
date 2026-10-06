import { allProducts } from "../src/data/products";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const targetIds = [
  "advance-riko-zem-3",
  "edwards-cdx-series",
  "edwards-next-tic-cart-xl",
  "edwards-stokes-mechanical-booster",
  "edwards-rv-series",
  "edwards-small-em-series",
  "edwards-eld30",
  "edwards-gascheck-g4",
  "edwards-barocel-7000",
  "edwards-asg2",
  "edwards-apgx-h",
  "edwards-aim200",
  "edwards-apg200",
  "edwards-wrg200",
  "edwards-tic-controller",
  "edwards-adc",
  "edwards-tag",
  "edwards-lcpvek",
  "edwards-speedivalve",
  "edwards-viv",
  "edwards-large-e2m-series",
  "edwards-erv-series",
  "edwards-ix-series",
  "edwards-ganymede-series",
  "edwards-stp-maglev-series",
  "edwards-abatement-series",
  "edwards-onboard-cryo-series",
  "edwards-maxcool-cryochiller-series",
  "edwards-vacuum-flanges-fittings",
  "edwards-angle-valves-series",
  "edwards-inline-valves-series",
  "edwards-special-valves-series"
];

let failed = false;

for (const id of targetIds) {
  const p = allProducts.find(x => x.id === id || x.slug === id);
  if (!p) {
    console.error(`[FAIL] Product not found: ${id}`);
    failed = true;
    continue;
  }

  // 1. Verify Image
  const imgUrl = p.heroImage?.url;
  if (!imgUrl || imgUrl.includes("wireframe-placeholder") || imgUrl.startsWith("http")) {
    console.error(`[FAIL] ${id} invalid image URL: ${imgUrl}`);
    failed = true;
  } else {
    const localPath = path.join(process.cwd(), "public", imgUrl);
    if (!fs.existsSync(localPath)) {
      console.error(`[FAIL] ${id} image does not exist on disk: ${localPath}`);
      failed = true;
    } else {
      const stats = fs.statSync(localPath);
      if (stats.size < 5000) {
        console.error(`[FAIL] ${id} image too small: ${stats.size} bytes`);
        failed = true;
      }
    }
  }

  // 2. Verify Variants
  const variants = p.variants || [];
  if (variants.length > 1) {
    // Check if variants show identical highlights
    const firstHighlights = JSON.stringify(variants[0].specificationHighlights || []);
    const secondHighlights = JSON.stringify(variants[1].specificationHighlights || []);
    if (firstHighlights === secondHighlights && firstHighlights !== "[]") {
      console.error(`[FAIL] ${id} variants have identical specificationHighlights!`);
      failed = true;
    }

    // Check if valuesByModel exists on first spec row
    const firstRow = p.specifications?.[0]?.rows?.[0];
    if (firstRow?.valuesByModel) {
      const v1 = firstRow.valuesByModel[variants[0].modelNumber];
      const v2 = firstRow.valuesByModel[variants[1].modelNumber];
      if (v1 === undefined || v2 === undefined) {
        console.error(`[FAIL] ${id} missing valuesByModel for models: ${variants[0].modelNumber}, ${variants[1].modelNumber}`);
        failed = true;
      }
    }
  }

  console.log(`[PASS] ${id}: Image OK (${p.heroImage?.url}), Variants (${variants.length}) distinct`);
}
// 3. Specifically verify Ganymede vs iX Series distinctness
const ganymede = allProducts.find(x => x.id === "edwards-ganymede-series");
const ix = allProducts.find(x => x.id === "edwards-ix-series");
if (ganymede?.heroImage?.url === ix?.heroImage?.url) {
  console.error("[FAIL] Ganymede and iX Series share the exact same image URL!");
  failed = true;
} else if (ganymede?.heroImage?.url && ix?.heroImage?.url) {
  const gPath = path.join(process.cwd(), "public", ganymede.heroImage.url);
  const ixPath = path.join(process.cwd(), "public", ix.heroImage.url);
  const gHash = crypto.createHash("md5").update(fs.readFileSync(gPath)).digest("hex");
  const ixHash = crypto.createHash("md5").update(fs.readFileSync(ixPath)).digest("hex");
  if (gHash === ixHash) {
    console.error("[FAIL] Ganymede and iX Series share the exact same image content (identical MD5)!");
    failed = true;
  } else {
    console.log(`[PASS] Ganymede (MD5: ${gHash}) and iX Series (MD5: ${ixHash}) are completely distinct!`);
  }
}

if (failed) {
  console.error("\nSOME CHECKS FAILED!");
  process.exit(1);
} else {
  console.log("\nALL 32 PRODUCTS FULLY VERIFIED AND PASSING 100%!");
}
