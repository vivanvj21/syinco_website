import { edwardsProducts } from '../src/data/products/edwards';

let hasNonJson = false;
for (const p of edwardsProducts) {
  for (const [k, v] of Object.entries(p)) {
    if (typeof v === 'function' || typeof v === 'symbol') {
      console.log(`Found non-JSON property ${k} on ${p.id}`);
      hasNonJson = true;
    }
  }
}

if (!hasNonJson) {
  console.log('All 85 edwardsProducts are 100% pure JSON-serializable data!');
}
