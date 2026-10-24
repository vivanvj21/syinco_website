import { edwardsProducts } from '../src/data/products/edwards';

for (const p of edwardsProducts) {
  if (!p.variants) continue;
  for (let i = 0; i < p.variants.length; i++) {
    const v = p.variants[i];
    if (!v.keySpecs || Object.keys(v.keySpecs).length === 0) {
      console.log(`Product ${p.id} variant #${i} (${v.modelNumber}) has empty/missing keySpecs:`, v);
    }
  }
}
