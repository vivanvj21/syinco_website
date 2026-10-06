import { allProducts } from "../src/data/products";
import fs from "fs";

const queryTerms = [
  "zem-3",
  "cdx",
  "next-tic-cart-xl",
  "stokes-mechanical-booster",
  "rv-series",
  "small-em",
  "eld30",
  "gascheck-g4",
  "barocel-7000",
  "asg2",
  "apgx-h",
  "aim200",
  "apg200",
  "wrg200",
  "tic-controller",
  "adc",
  "tag",
  "lcpvek",
  "speedivalve",
  "viv",
  "large-e2m",
  "erv-series",
  "ix-series",
  "ganymede",
  "stp-series",
  "atlas",
  "on-board",
  "maxcool",
  "pipework",
  "pvek",
  "in-line",
  "specialty-valves"
];

for (const term of queryTerms) {
  const matches = allProducts.filter(p => p.id.toLowerCase().includes(term) || p.slug.toLowerCase().includes(term));
  if (matches.length === 0) {
    console.log(`NOT FOUND: ${term}`);
  } else {
    for (const p of matches) {
      const heroUrl = p.heroImage?.url;
      const fileExists = heroUrl?.startsWith("/") ? fs.existsSync(`public${heroUrl}`) : "remote/unknown";
      const variantCount = p.variants?.length || 0;
      const variantModels = p.variants?.map(v => v.modelNumber) || [];
      const specRows = p.specifications?.flatMap(g => g.rows) || [];
      const rowsWithValuesByModel = specRows.filter(r => r.valuesByModel && Object.keys(r.valuesByModel).length > 1).length;
      
      console.log(`\n[${p.id}]`);
      console.log(`  Name: ${p.name}`);
      console.log(`  Hero: ${heroUrl} (exists: ${fileExists}, status: ${p.assetStatus})`);
      console.log(`  Variants (${variantCount}): ${variantModels.join(", ")}`);
      console.log(`  Spec rows: ${specRows.length} total, ${rowsWithValuesByModel} have valuesByModel`);
      if (variantCount > 0 && p.variants) {
        console.log(`  Sample variant 0 keySpecs:`, JSON.stringify(p.variants[0]?.keySpecs));
        if (p.variants[1]) {
          console.log(`  Sample variant 1 keySpecs:`, JSON.stringify(p.variants[1]?.keySpecs));
        }
      }
    }
  }
}
