import fs from 'fs';
import path from 'path';
import { allProducts } from '../src/data/products/index';

const scraped = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));
const arProducts = allProducts.filter(p => p.manufacturer.id === 'advance-riko');
const existingPdfs = fs.readdirSync('public/documents/advance-riko');

function cleanText(str: string): string {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
}

for (const p of arProducts) {
  const baseId = p.id.replace('advance-riko-', '');
  let sc = scraped.find((s: any) => s.slug === baseId);
  if (!sc) sc = scraped.find((s: any) => s.slug.replace(/%ce%bc/g, 'micro') === baseId);
  if (!sc) sc = scraped.find((s: any) => s.slug === p.slug.replace('advance-riko-', ''));
  if (!sc) sc = scraped.find((s: any) => p.name.toLowerCase().includes(s.title.toLowerCase()) || s.title.toLowerCase().includes(p.name.toLowerCase()));

  if (!sc) {
    console.error(`Missing scraped entry for ${p.id}`);
    continue;
  }

  const tables = sc.tables || [];
  console.log(`\n=== [${p.id}] Tables: ${tables.length} ===`);

  // Analyze table 0
  if (tables.length > 0) {
    const t0 = tables[0];
    const headerRow = t0[0] || [];
    console.log(`Table 0 dimensions: ${t0.length} rows, max cols: ${Math.max(...t0.map((r: any[]) => r.length))}`);
    console.log(`Header row:`, headerRow);
  } else {
    console.log(`No tables! (Custom furnace)`);
  }
}
