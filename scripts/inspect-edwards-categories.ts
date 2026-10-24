import { allProducts } from '../src/data/products/index';
import { getProductOemCategory, OEM_CATEGORIES } from '../src/data/oem-categories';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

const counts: Record<string, any[]> = {};
for (const p of edwards) {
  const cat = getProductOemCategory(p);
  if (!counts[cat]) counts[cat] = [];
  counts[cat].push({
    id: p.id,
    name: p.name,
    model: p.modelSeries,
    variants: p.variants?.length || 0,
    specs: p.specifications.length,
    specRows: p.specifications.reduce((sum, g) => sum + g.rows.length, 0),
    docs: p.documents.length,
  });
}

console.log('Edwards products count by OEM category:');
for (const [cat, prods] of Object.entries(counts)) {
  console.log(`\n=== Category: ${cat} (${prods.length} products) ===`);
  prods.forEach(pr => console.log(`  - [${pr.id}] ${pr.name} (model: ${pr.model}, variants: ${pr.variants}, specs: ${pr.specRows}, docs: ${pr.docs})`));
}
