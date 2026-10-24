import { edwardsProducts } from '../src/data/products/edwards';

const p3 = edwardsProducts.find(p => p.id === 'edwards-p3');
console.log('P3 Specs:', JSON.stringify(p3?.specifications, null, 2));

const gxs = edwardsProducts.find(p => p.id === 'edwards-gxs-series');
console.log('GXS Variants sample:', JSON.stringify(gxs?.variants?.slice(0, 3), null, 2));
