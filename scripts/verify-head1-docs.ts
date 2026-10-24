import { edwardsProducts } from './edwards-head1';

console.log('Total products in edwards-head1:', edwardsProducts.length);

let totalDocs = 0;
let brochuresCount = 0;
let datasheetsCount = 0;

for (const p of edwardsProducts) {
  totalDocs += p.documents.length;
  for (const d of p.documents) {
    if (d.type === 'brochure') brochuresCount++;
    if (d.type === 'datasheet') datasheetsCount++;
  }
}

console.log(`Total original documents: ${totalDocs}`);
console.log(`Brochures: ${brochuresCount}`);
console.log(`Datasheets: ${datasheetsCount}`);
