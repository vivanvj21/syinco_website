import fs from 'fs';
import { allProducts } from '../src/data/products/index';

const official = JSON.parse(fs.readFileSync('scripts/advance-riko-official.json', 'utf8'))
  .filter((p: any) => p.slug !== 'feed');

const localAr = allProducts.filter(p => p.manufacturer.id === 'advance-riko');

console.log(`Official count: ${official.length}`);
console.log(`Local count: ${localAr.length}`);

// Map them
const report: any[] = [];

for (const off of official) {
  // Find match in local
  let match = localAr.find(l => l.id === `advance-riko-${off.slug}`);
  if (!match) {
    match = localAr.find(l => l.modelSeries.toLowerCase() === off.slug.toLowerCase());
  }
  if (!match) {
    match = localAr.find(l => l.name.toLowerCase().includes(off.title.toLowerCase()) || off.title.toLowerCase().includes(l.name.toLowerCase()));
  }

  report.push({
    officialSlug: off.slug,
    officialTitle: off.title,
    officialUrl: off.url,
    matchedLocalId: match?.id || null,
    matchedLocalName: match?.name || null,
    localModelSeries: match?.modelSeries || null,
    localCategory: match?.categorySlug || null,
    localVariantsCount: match?.variants?.length || 0,
    localSpecsGroups: match?.specifications?.length || 0,
    localDocsCount: match?.documents?.length || 0,
  });
}

console.log(JSON.stringify(report, null, 2));

const unmatched = report.filter(r => !r.matchedLocalId);
console.log(`Unmatched Count: ${unmatched.length}`);
if (unmatched.length > 0) {
  console.log('Unmatched:', unmatched);
}
