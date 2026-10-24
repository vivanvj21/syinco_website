import { edwardsProducts } from '../src/data/products/edwards';

for (const p of edwardsProducts) {
  const totalRows = p.specifications.reduce((sum, g) => sum + g.rows.length, 0);
  if (totalRows < 2) {
    console.log(`Product ${p.id} has only ${totalRows} spec rows:`, p.specifications);
  }
}
