import fs from 'fs';
const data = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));

for (const p of data) {
  if (!p.tables) continue;
  for (let tIdx = 0; tIdx < p.tables.length; tIdx++) {
    const table = p.tables[tIdx];
    const rowLengths = table.map((r: any[]) => r.length);
    const minL = Math.min(...rowLengths);
    const maxL = Math.max(...rowLengths);
    if (minL !== maxL) {
      console.log(`Product ${p.slug} table ${tIdx} row lengths differ: min=${minL}, max=${maxL}. Header: ${table[0]}`);
      console.log('Rows:', table);
    }
  }
}
