import fs from 'fs';

const files = [
  'scripts/edwards-vacuum-pumps-our-products.html',
  'scripts/edwards-uk-home.html',
  'scripts/edwards-home.html',
];

const allPdfUrls = new Set<string>();

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.match(/https?:\/\/[^"'\s>]+\.pdf/gi) || [];
  matches.forEach(m => allPdfUrls.add(m));

  // Also relative dam links
  const relMatches = content.match(/\/content\/dam\/[^"'\s>]+\.pdf/gi) || [];
  relMatches.forEach(m => allPdfUrls.add('https://www.edwardsvacuum.com' + m));
}

console.log(`Found ${allPdfUrls.size} unique PDF links from scraped HTML pages`);
const sorted = Array.from(allPdfUrls).sort();
console.log(sorted.slice(0, 30));
fs.writeFileSync('scripts/edwards-all-scraped-pdfs.json', JSON.stringify(sorted, null, 2));
