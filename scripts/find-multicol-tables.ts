import fs from 'fs';
const data = JSON.parse(fs.readFileSync('scripts/advance-riko-scraped-specs.json', 'utf8'));

for (const p of data) {
  if (!p.tables) continue;
  for (let tIdx = 0; tIdx < p.tables.length; tIdx++) {
    const table = p.tables[tIdx];
    const maxCols = Math.max(...table.map((r: any[]) => r.length));
    if (maxCols > 2) {
      console.log(`Product ${p.slug} (${p.title}) Table ${tIdx} has ${maxCols} columns! Rows: ${table.length}`);
      console.log('Sample rows:', JSON.stringify(table.slice(0, 3), null, 2));
    }
  }
}
