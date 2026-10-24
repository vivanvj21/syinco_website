import https from 'https';
import fs from 'fs';

function fetchUrl(urlStr: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(urlStr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching /en-uk/our-products ...');
  const body = await fetchUrl('https://www.edwardsvacuum.com/en-uk/our-products');
  console.log('Length:', body.length);
  fs.writeFileSync('scripts/edwards-our-products.html', body);

  // Extract links
  const regex = /href="([^"]+)"/g;
  const links = new Set<string>();
  let m;
  while ((m = regex.exec(body)) !== null) {
    if (m[1].startsWith('/en-uk/')) {
      links.add(m[1]);
    }
  }

  const sorted = Array.from(links).sort();
  console.log(`Found ${sorted.length} /en-uk/ links:`);
  console.log(sorted);
}

run();
