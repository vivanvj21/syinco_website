import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

let totalVariants = 0;
let totalSpecRows = 0;

for (const p of edwards) {
  totalVariants += p.variants?.length || 0;
  for (const g of p.specifications) {
    totalSpecRows += g.rows.length;
  }
}

console.log(`Edwards Products: ${edwards.length}`);
console.log(`Total Model Variants across Edwards: ${totalVariants}`);
console.log(`Total Specification Rows across Edwards: ${totalSpecRows}`);
