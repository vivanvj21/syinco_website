import fs from 'fs';
import { allProducts } from '../src/data/products/index';

const official = JSON.parse(fs.readFileSync('scripts/advance-riko-official.json', 'utf8'));
const localAr = allProducts.filter(p => p.manufacturer.id === 'advance-riko');

console.log(`=== ADVANCE RIKO VERIFICATION ===`);
console.log(`Official Advance Riko products online: ${official.length}`);
console.log(`Local codebase Advance Riko products: ${localAr.length}`);

// Compare slugs / IDs
const localSlugs = localAr.map(p => {
  // remove 'advance-riko-' prefix
  return {
    id: p.id,
    cleanSlug: p.id.replace(/^advance-riko-/, ''),
    name: p.name,
    modelSeries: p.modelSeries,
    docsCount: p.documents?.length || 0,
    categorySlug: p.categorySlug
  };
});

console.log('\n--- OFFICIAL PRODUCTS LIST ---');
official.forEach((o: any, i: number) => {
  const match = localSlugs.find(l => 
    l.cleanSlug === o.slug || 
    l.cleanSlug.replace(/-/g, '') === o.slug.replace(/-/g, '') ||
    l.name.toLowerCase().includes(o.slug.replace(/-/g, ' ')) ||
    o.title.toLowerCase().includes(l.cleanSlug.replace(/-/g, ' '))
  );

  const pdfCount = o.pdfs?.length || 0;
  console.log(`${i + 1}. [${o.slug}] "${o.title}" -> Local match: ${match ? match.id : 'MISSING!'} | Official PDFs: ${pdfCount}`);
});

console.log('\n--- CHECK FOR MISSING IN LOCAL ---');
const missingInLocal = official.filter((o: any) => {
  return !localSlugs.some(l => 
    l.cleanSlug === o.slug || 
    l.cleanSlug.replace(/-/g, '') === o.slug.replace(/-/g, '') ||
    l.name.toLowerCase().includes(o.slug.replace(/-/g, ' ')) ||
    o.title.toLowerCase().includes(l.cleanSlug.replace(/-/g, ' '))
  );
});

console.log(`Total Missing in Local Codebase: ${missingInLocal.length}`);
missingInLocal.forEach((m: any) => {
  console.log(`- MISSING: [${m.slug}] ${m.title} (${m.url})`);
});

console.log('\n--- LOCAL PRODUCTS WITHOUT OFFICIAL MATCH ---');
const extraInLocal = localSlugs.filter(l => {
  return !official.some((o: any) => 
    l.cleanSlug === o.slug || 
    l.cleanSlug.replace(/-/g, '') === o.slug.replace(/-/g, '') ||
    l.name.toLowerCase().includes(o.slug.replace(/-/g, ' ')) ||
    o.title.toLowerCase().includes(l.cleanSlug.replace(/-/g, ' '))
  );
});
console.log(`Extra/Different in Local: ${extraInLocal.length}`);
extraInLocal.forEach(e => {
  console.log(`- LOCAL ONLY: [${e.id}] ${e.name}`);
});
