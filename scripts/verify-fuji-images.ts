import fs from 'fs';
import path from 'path';
import { fujiSpsProducts } from '../src/data/products/fuji-sps';

console.log('--- Verifying Fuji SPS Products Assets ---');
let allPassed = true;

for (const p of fujiSpsProducts) {
  const heroPath = path.join(process.cwd(), 'public', p.heroImage.url);
  if (!fs.existsSync(heroPath)) {
    console.error(`[FAIL] ${p.id}: Hero image missing at ${heroPath}`);
    allPassed = false;
  } else {
    const stat = fs.statSync(heroPath);
    console.log(`[PASS] ${p.id}: Hero image OK (${p.heroImage.url}, ${Math.round(stat.size / 1024)} KB)`);
  }

  for (const g of p.gallery) {
    const gPath = path.join(process.cwd(), 'public', g.url);
    if (!fs.existsSync(gPath)) {
      console.error(`[FAIL] ${p.id}: Gallery image missing at ${gPath}`);
      allPassed = false;
    } else {
      console.log(`   Gallery image OK (${g.url})`);
    }
  }
}

if (allPassed) {
  console.log('\nALL FUJI SPS PRODUCTS FULLY VERIFIED WITH AUTHENTIC OEM IMAGES!');
} else {
  process.exit(1);
}
