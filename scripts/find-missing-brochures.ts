import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';
import { getProductOemCategory } from '../src/data/oem-categories';

const all = [nxdsProductData, ...edwardsProducts];

console.log(`Loaded ${all.length} products from HEAD~1`);

for (const p of all) {
  const cat = getProductOemCategory(p);
  const docTypes = p.documents.map((d: any) => d.type);
  const titles = p.documents.map((d: any) => d.title);
  if (!docTypes.includes('brochure')) {
    console.log(`Product without brochure: [${p.id}] ${p.name} (cat: ${cat}) - Existing docs: ${titles.join(' | ')}`);
  }
}
