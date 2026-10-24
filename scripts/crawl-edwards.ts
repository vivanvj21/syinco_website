import https from 'https';
import fs from 'fs';

function fetchUrl(url: string): Promise<{ statusCode: number; headers: any; body: string }> {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      }
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (redirectUrl.startsWith('/')) {
          redirectUrl = 'https://www.edwardsvacuum.com' + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode || 0, headers: res.headers, body }));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function run() {
  console.log('Fetching https://www.edwardsvacuum.com/en ...');
  try {
    const res = await fetchUrl('https://www.edwardsvacuum.com/en');
    console.log(`Status: ${res.statusCode}, Body length: ${res.body.length}`);

    // Extract all links starting with /en/
    const regex = /href=["'](\/en\/[^"']+)["']/g;
    const links = new Set<string>();
    let m;
    while ((m = regex.exec(res.body)) !== null) {
      links.add(m[1].split('?')[0].split('#')[0]);
    }

    console.log(`Found ${links.size} total links on /en:`);
    const sorted = Array.from(links).sort();
    fs.writeFileSync('scripts/edwards-en-links.json', JSON.stringify(sorted, null, 2));
    
    // Look for product-like sections
    const productSections = sorted.filter(l => !l.includes('/about-us') && !l.includes('/news') && !l.includes('/careers') && !l.includes('/contact'));
    console.log('Product sections count:', productSections.length);
    console.log('Sample product sections:', productSections.slice(0, 30));
  } catch (err: any) {
    console.error('Error:', err.message);
  }
}

run();
