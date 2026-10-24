import fs from 'fs';
import { allProducts } from '../src/data/products/index';

const scraped = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));
const arProducts = allProducts.filter(p => p.manufacturer.id === 'advance-riko');

console.log(`AR Products in codebase: ${arProducts.length}`);
console.log(`Scraped specs entries: ${scraped.length}`);

interface MatchedItem {
  productId: string;
  productName: string;
  modelSeries: string;
  sourceFile: string;
  scrapedSlug: string;
  scrapedTitle: string;
  tableCount: number;
  totalRows: number;
  datasheetPdf: string;
  brochurePdf: string;
}

const matched: MatchedItem[] = [];
const unmatched: string[] = [];

const existingPdfs = fs.readdirSync('public/documents/advance-riko');

for (const p of arProducts) {
  const baseId = p.id.replace('advance-riko-', '');
  
  // Find scraped entry
  let sc = scraped.find((s: any) => s.slug === baseId);
  if (!sc) {
    sc = scraped.find((s: any) => s.slug.replace(/%ce%bc/g, 'micro') === baseId);
  }
  if (!sc) {
    sc = scraped.find((s: any) => s.slug === p.slug.replace('advance-riko-', ''));
  }
  if (!sc) {
    sc = scraped.find((s: any) => p.name.toLowerCase().includes(s.title.toLowerCase()) || s.title.toLowerCase().includes(p.name.toLowerCase()));
  }

  if (!sc) {
    unmatched.push(p.id);
    continue;
  }

  // Find PDFs
  const candidatesDs = [
    `${baseId}-datasheet.pdf`,
    `${p.slug}-datasheet.pdf`,
    `${p.id}-datasheet.pdf`,
    baseId.replace('micro', 'u') + '-datasheet.pdf',
    sc.slug.replace(/%ce%bc/g, 'u').replace(/[^a-zA-Z0-9-_]/g, '-') + '-datasheet.pdf'
  ];
  const ds = candidatesDs.find(c => existingPdfs.includes(c));

  const candidatesBr = [
    `${baseId}-brochure.pdf`,
    `${p.slug}-brochure.pdf`,
    `${p.id}-brochure.pdf`,
    baseId.replace('micro', 'u') + '-brochure.pdf',
    sc.slug.replace(/%ce%bc/g, 'u').replace(/[^a-zA-Z0-9-_]/g, '-') + '-brochure.pdf'
  ];
  const br = candidatesBr.find(c => existingPdfs.includes(c));

  let totalRows = 0;
  if (sc.tables) {
    for (const t of sc.tables) {
      totalRows += t.length;
    }
  }

  matched.push({
    productId: p.id,
    productName: p.name,
    modelSeries: p.modelSeries,
    sourceFile: p.catalogStatus === 'wave-1-flagship' ? (p.id === 'advance-riko-zem-3' ? 'zem3.ts' : 'wave1-flagships.ts') : (p.catalogStatus === 'held-for-clarification' ? 'held-back.ts' : 'catalogue-families.ts'),
    scrapedSlug: sc.slug,
    scrapedTitle: sc.title,
    tableCount: sc.tables?.length || 0,
    totalRows,
    datasheetPdf: ds || 'NOT FOUND',
    brochurePdf: br || 'NOT FOUND'
  });
}

console.log(`Matched count: ${matched.length}`);
console.log(`Unmatched count: ${unmatched.length}`);
if (unmatched.length > 0) {
  console.log('Unmatched:', unmatched);
}

// Print summary by source file
const byFile: Record<string, number> = {};
for (const m of matched) {
  byFile[m.sourceFile] = (byFile[m.sourceFile] || 0) + 1;
}
console.log('Matched counts by file:', byFile);

// Check if any PDF is missing
const missingPdf = matched.filter(m => m.datasheetPdf === 'NOT FOUND' || m.brochurePdf === 'NOT FOUND');
console.log('Items missing PDF:', missingPdf.length);
