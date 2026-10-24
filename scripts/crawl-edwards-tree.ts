import https from 'https';
import fs from 'fs';

function fetchWithRedirects(urlStr: string): Promise<{ url: string; body: string }> {
  return new Promise((resolve, reject) => {
    const url = new URL(urlStr);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let nextUrl = res.headers.location;
        if (nextUrl.startsWith('/')) {
          nextUrl = 'https://www.edwardsvacuum.com' + nextUrl;
        }
        console.log(`Redirecting to: ${nextUrl}`);
        return fetchWithRedirects(nextUrl).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve({ url: urlStr, body }));
    }).on('error', reject);
  });
}

async function run() {
  const res = await fetchWithRedirects('https://www.edwardsvacuum.com/en-uk/vacuum-pumps/our-products');
  console.log('Final URL:', res.url);
  console.log('Body length:', res.body.length);
  fs.writeFileSync('scripts/edwards-vacuum-pumps-our-products.html', res.body);

  // Extract all links
  const regex = /href="([^"]+)"/g;
  const links = new Set<string>();
  let m;
  while ((m = regex.exec(res.body)) !== null) {
    if (m[1].includes('/en-uk/')) {
      links.add(m[1]);
    }
  }

  const sorted = Array.from(links).sort();
  console.log(`Found ${sorted.length} links on our-products:`);
  fs.writeFileSync('scripts/edwards-crawled-products-links.json', JSON.stringify(sorted, null, 2));
  console.log(sorted.slice(0, 50));
}

run();
