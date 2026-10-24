import fs from 'fs';
import { allProducts } from '../src/data/products/index';

const ar = allProducts.filter(p => p.manufacturer.id === 'advance-riko');
console.log('Total AR products:', ar.length);

const outDir = 'public/documents/advance-riko';
const existingPdfs = fs.readdirSync(outDir);

const mapping: any[] = [];
const missing: string[] = [];

for (const p of ar) {
  const baseId = p.id.replace('advance-riko-', '');
  const candidates = [
    `${baseId}-datasheet.pdf`,
    `${p.slug}-datasheet.pdf`,
    `${p.id}-datasheet.pdf`,
    baseId.replace('micro', 'u') + '-datasheet.pdf'
  ];
  const ds = candidates.find(c => existingPdfs.includes(c));
  
  const bCandidates = [
    `${baseId}-brochure.pdf`,
    `${p.slug}-brochure.pdf`,
    `${p.id}-brochure.pdf`,
    baseId.replace('micro', 'u') + '-brochure.pdf'
  ];
  const br = bCandidates.find(c => existingPdfs.includes(c));

  if (!ds || !br) {
    missing.push(p.id);
  } else {
    mapping.push({
      id: p.id,
      slug: p.slug,
      datasheet: ds,
      brochure: br,
    });
  }
}

console.log('Successfully mapped:', mapping.length);
console.log('Missing mapping count:', missing.length);
if (missing.length > 0) {
  console.log('Missing:', missing);
}
