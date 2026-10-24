import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';

const all = [nxdsProductData, ...edwardsProducts];

for (const p of all) {
  console.log(`\nProduct: ${p.name} (${p.modelSeries})`);
  for (const d of p.documents) {
    console.log(`  - [${d.type.toUpperCase()}] ${d.title}`);
    console.log(`    URL: ${d.fileUrl}`);
  }
}
