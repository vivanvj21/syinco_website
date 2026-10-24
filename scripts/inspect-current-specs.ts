import { wave1FlagshipProducts } from '../src/data/products/wave1-flagships';
import { wave2CatalogueFamilyProducts } from '../src/data/products/catalogue-families';
import { wave3HeldBackProducts } from '../src/data/products/held-back';

console.log('--- Flagship Sample ---');
const flagAr = wave1FlagshipProducts.filter(p => p.manufacturer.id === 'advance-riko')[0];
console.log('ID:', flagAr.id);
console.log('Specs groups:', JSON.stringify(flagAr.specifications, null, 2));
console.log('Variants:', JSON.stringify(flagAr.variants, null, 2));
console.log('Docs:', JSON.stringify(flagAr.documents, null, 2));

console.log('--- Catalogue Sample ---');
const catAr = wave2CatalogueFamilyProducts.filter(p => p.manufacturer.id === 'advance-riko')[0];
console.log('ID:', catAr.id);
console.log('Specs groups:', JSON.stringify(catAr.specifications, null, 2));
console.log('Variants:', JSON.stringify(catAr.variants, null, 2));
console.log('Docs:', JSON.stringify(catAr.documents, null, 2));
