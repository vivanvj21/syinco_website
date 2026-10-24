import fs from 'fs';

const html = fs.readFileSync('scripts/edwards-vacuum-pumps-our-products.html', 'utf8');

// Search for product category headings or links
const catLinks = html.match(/href="(\/en-uk\/vacuum-pumps\/[^"#]+)"/g) || [];
const unique = Array.from(new Set(catLinks.map(c => c.replace(/^href="/, '').replace(/"$/, '')))).sort();

console.log('Categories / product links in /vacuum-pumps/:', unique.length);
console.log(unique);
