import { edwardsProducts } from '../src/data/products/edwards';

console.log('Total edwardsProducts:', edwardsProducts.length);
for (const p of edwardsProducts.slice(0, 5)) {
  console.log(`Product ${p.id} (${p.slug}):`);
  console.log('Docs:', JSON.stringify(p.documents, null, 2));
}
