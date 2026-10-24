import fs from 'fs';

const specs = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));
const slugs = ['superlix', 'tcn-2omega', 'rmp-1', 'rhl-e-vht-p-series', 'rta', 'tms', 'wet-1200'];

for (const s of slugs) {
  const p = specs.find((x: any) => x.slug === s);
  console.log(`\n========================================`);
  console.log(`=== ${s.toUpperCase()} ===`);
  console.log(`Title: ${p?.title}`);
  console.log(`Tables:`, JSON.stringify(p?.tables, null, 2));
}
