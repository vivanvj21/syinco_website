import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';
import fs from 'fs';

const lib: string[] = JSON.parse(fs.readFileSync('scripts/edwards-official-library-pdfs.json', 'utf8'));
const all = [nxdsProductData, ...edwardsProducts];

console.log('Total products:', all.length);

const missingBrochures: any[] = [];
const missingDatasheets: any[] = [];

for (const p of all) {
  const ds = p.documents.filter((d: any) => d.type === 'datasheet');
  const br = p.documents.filter((d: any) => d.type === 'brochure');
  
  if (br.length === 0) {
    missingBrochures.push({ id: p.id, name: p.name, dsCount: ds.length, docs: p.documents });
  }
  if (ds.length === 0) {
    missingDatasheets.push({ id: p.id, name: p.name, brCount: br.length, docs: p.documents });
  }
}

console.log(`Products without brochure in HEAD~1: ${missingBrochures.length}`);
console.log(`Products without datasheet in HEAD~1: ${missingDatasheets.length}`);

console.log('\n--- Products without brochure in HEAD~1 ---');
for (const m of missingBrochures) {
  console.log(`- [${m.id}] ${m.name}`);
}

console.log('\n--- Products without datasheet in HEAD~1 ---');
for (const m of missingDatasheets) {
  console.log(`- [${m.id}] ${m.name}`);
}
