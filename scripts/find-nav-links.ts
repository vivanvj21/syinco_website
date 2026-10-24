import fs from 'fs';

const html = fs.readFileSync('scripts/edwards-uk-home.html', 'utf8');

// Search for product category links
const matches = html.match(/href="([^"]*product[^"]*)"/gi) || [];
console.log('Matches with "product":', matches.length);
const unique = Array.from(new Set(matches.map(m => m.replace(/href="/i, '').replace(/"$/, ''))));
console.log('Unique "product" links:', unique);

// Search for pump links
const pumpMatches = html.match(/href="([^"]*(?:vacuum|pump|valve|gauge)[^"]*)"/gi) || [];
console.log('Matches with vacuum/pump/valve/gauge:', pumpMatches.length);
const uniquePumps = Array.from(new Set(pumpMatches.map(m => m.replace(/href="/i, '').replace(/"$/, ''))));
console.log('Sample pump/vacuum links:', uniquePumps.slice(0, 30));
