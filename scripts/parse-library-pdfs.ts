import fs from 'fs';

const html = fs.readFileSync('scripts/edwards-download-library.html', 'utf8');

// Extract all hrefs ending with .pdf
const regex = /href="([^"]*\.pdf)"/gi;
const matches = new Set<string>();
let m;
while ((m = regex.exec(html)) !== null) {
  let url = m[1];
  if (url.startsWith('/')) {
    url = 'https://www.edwardsvacuum.com' + url;
  }
  matches.add(url);
}

const list = Array.from(matches).sort();
console.log(`Found ${list.length} official Edwards PDFs from download library!`);
fs.writeFileSync('scripts/edwards-official-library-pdfs.json', JSON.stringify(list, null, 2));

// Categorize by brochure vs datasheet
const brochures = list.filter(u => /brochure|leaflet|catalog/i.test(u));
const datasheets = list.filter(u => /datasheet|data-sheet/i.test(u));
const others = list.filter(u => !brochures.includes(u) && !datasheets.includes(u));

console.log(`Brochures: ${brochures.length}`);
console.log(`Datasheets: ${datasheets.length}`);
console.log(`Others / Manuals: ${others.length}`);

console.log('\nSample brochures:');
brochures.slice(0, 20).forEach(b => console.log(' - ' + b));
