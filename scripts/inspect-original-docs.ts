import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';

const allEdwards = [nxdsProductData, ...edwardsProducts];

console.log(`Total products: ${allEdwards.length}`);

const allDocs: any[] = [];
for (const p of allEdwards) {
  for (const doc of p.documents) {
    allDocs.push({
      productId: p.id,
      productName: p.name,
      modelSeries: p.modelSeries,
      docId: doc.id,
      title: doc.title,
      type: doc.type,
      format: doc.format,
      fileSizeBytes: doc.fileSizeBytes,
      fileUrl: doc.fileUrl,
      isGated: doc.isGated,
    });
  }
}

console.log(`Total original documents: ${allDocs.length}`);
console.log('Sample original docs (first 10):', allDocs.slice(0, 10));

// Check unique URLs
const uniqueUrls = Array.from(new Set(allDocs.map(d => d.fileUrl)));
console.log(`Unique URLs: ${uniqueUrls.length}`);

// Write all docs to a json file
import fs from 'fs';
fs.writeFileSync('scripts/edwards-original-docs.json', JSON.stringify(allDocs, null, 2));
