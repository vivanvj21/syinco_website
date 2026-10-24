import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

let placeholderCount = 0;
let zeroVariantsCount = 0;
let zeroSpecsCount = 0;

for (const p of edwards) {
  if (!p.variants || p.variants.length === 0) zeroVariantsCount++;
  if (!p.specifications || p.specifications.length === 0) zeroSpecsCount++;

  for (const g of p.specifications) {
    for (const r of g.rows) {
      if (String(r.value).toLowerCase().includes('contact syinco') || String(r.value).toLowerCase().includes('tbd')) {
        placeholderCount++;
        console.log(`Placeholder spec in ${p.id}: ${r.parameter} = ${r.value}`);
      }
    }
  }
}

console.log(`Audited ${edwards.length} Edwards products:`);
console.log(`- Zero variants: ${zeroVariantsCount}`);
console.log(`- Zero specifications: ${zeroSpecsCount}`);
console.log(`- Placeholder specs found: ${placeholderCount}`);
