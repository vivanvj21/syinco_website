import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

console.log('Total Edwards products:', edwards.length);
console.log('Sample IDs and names:');
for (const p of edwards.slice(0, 15)) {
  console.log(`- [${p.id}] ${p.name} (model: ${p.modelSeries}) - variants: ${p.variants?.length || 0}, specs: ${p.specifications.length}, docs: ${p.documents.length}`);
}

const docsCount = edwards.filter(p => p.documents && p.documents.length > 0).length;
console.log(`Edwards products with documents: ${docsCount} / ${edwards.length}`);

const variantsCount = edwards.filter(p => p.variants && p.variants.length > 0).length;
console.log(`Edwards products with variants: ${variantsCount} / ${edwards.length}`);
