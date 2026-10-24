import fs from 'fs';
import path from 'path';

const files = fs.readdirSync('scripts').filter(f => f.endsWith('.html') || f.endsWith('.json') || f.endsWith('.ts'));
const pdfSet = new Set<string>();

for (const f of files) {
  try {
    const text = fs.readFileSync(path.join('scripts', f), 'utf8');
    const matches = text.match(/https?:\/\/[^\s"'<>]+?\.pdf/gi) || [];
    for (const m of matches) {
      if (m.includes('edwards') || m.includes('dam')) {
        pdfSet.add(m);
      }
    }
    const relMatches = text.match(/\/content\/dam\/brands\/edwards-vacuum\/[^\s"'<>]+?\.pdf/gi) || [];
    for (const m of relMatches) {
      pdfSet.add('https://www.edwardsvacuum.com' + m);
    }
  } catch (e) {}
}

console.log('Total unique Edwards PDFs found across scripts dir:', pdfSet.size);
const arr = Array.from(pdfSet);
fs.writeFileSync('scripts/all-extracted-edwards-pdfs.json', JSON.stringify(arr, null, 2));

const brochures = arr.filter(u => /brochure|catalogue|overview/i.test(u));
console.log('Total brochures found:', brochures.length);
for (const b of brochures) {
  console.log(' - ' + b);
}
