import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

console.log(`Total Edwards products: ${edwards.length}`);

const summary = edwards.map(p => ({
  id: p.id,
  name: p.name,
  modelSeries: p.modelSeries,
  sourceUrl: p.sourceUrl,
  oemSourceUrl: p.oemSourceUrl,
  variantsCount: p.variants?.length || 0,
  specsGroupsCount: p.specifications?.length || 0,
  totalSpecRows: p.specifications?.reduce((sum, g) => sum + g.rows.length, 0) || 0,
  documentsCount: p.documents?.length || 0,
}));

console.log('Sample summary (first 10):', summary.slice(0, 10));

// Check how many have sourceUrl or oemSourceUrl
const withSourceUrl = summary.filter(s => s.sourceUrl || s.oemSourceUrl);
console.log(`With source URL: ${withSourceUrl.length} / ${edwards.length}`);

// Check unique source URLs
const uniqueUrls = new Set(summary.map(s => s.sourceUrl || s.oemSourceUrl).filter(Boolean));
console.log(`Unique source URLs: ${uniqueUrls.size}`);
