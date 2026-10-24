import fs from 'fs';
import path from 'path';
import { allProducts } from '../src/data/products/index';

const edwards = allProducts.filter(p => p.manufacturer.id === 'edwards-vacuum');

let missingFiles = 0;
let existingFiles = 0;
const docTypes: Record<string, number> = {};

for (const p of edwards) {
  for (const doc of p.documents) {
    docTypes[doc.type] = (docTypes[doc.type] || 0) + 1;
    const absPath = path.join(process.cwd(), 'public', doc.fileUrl.replace(/^\//, ''));
    if (fs.existsSync(absPath)) {
      existingFiles++;
    } else {
      missingFiles++;
      console.log(`Missing file for ${p.id}: ${doc.fileUrl} (${doc.title})`);
    }
  }
}

console.log('Document types breakdown:', docTypes);
console.log(`Existing PDF files on disk: ${existingFiles}`);
console.log(`Missing PDF files on disk: ${missingFiles}`);
