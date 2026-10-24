import https from 'https';
import fs from 'fs';

function fetchUrl(urlStr: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(urlStr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function run() {
  const body = await fetchUrl('https://www.edwardsvacuum.com/en-uk');
  console.log('Body length:', body.length);
  fs.writeFileSync('scripts/edwards-uk-home.html', body);

  // Find all links containing /en-uk/products or /products
  const regex = /href="([^"]+)"/g;
  const links = new Set<string>();
  let m;
  while ((m = regex.exec(body)) !== null) {
    const l = m[1];
    if (l.includes('products') || l.includes('pumps') || l.includes('vacuum')) {
      links.add(l);
    }
  }

  console.log(`Found ${links.size} relevant links:`);
  console.log(Array.from(links).slice(0, 30));
}

run();
