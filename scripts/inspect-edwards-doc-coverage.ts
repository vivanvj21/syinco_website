import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';

const all = [nxdsProductData, ...edwardsProducts];

const onlyDatasheet: any[] = [];
const onlyBrochure: any[] = [];
const both: any[] = [];
const neither: any[] = [];

for (const p of all) {
  const hasDs = p.documents.some((d: any) => d.type === 'datasheet');
  const hasBr = p.documents.some((d: any) => d.type === 'brochure');

  if (hasDs && hasBr) {
    both.push(p);
  } else if (hasDs) {
    onlyDatasheet.push(p);
  } else if (hasBr) {
    onlyBrochure.push(p);
  } else {
    neither.push(p);
  }
}

console.log(`Both datasheet & brochure: ${both.length}`);
console.log(`Only datasheet: ${onlyDatasheet.length}`);
console.log(`Only brochure: ${onlyBrochure.length}`);
console.log(`Neither: ${neither.length}`);

console.log('\nProducts with ONLY datasheet (need original brochure added):');
onlyDatasheet.forEach(p => console.log(`- [${p.id}] ${p.name} (docs: ${p.documents.map((d: any) => d.title).join('; ')})`));

console.log('\nProducts with BOTH:');
both.forEach(p => console.log(`- [${p.id}] ${p.name}`));
