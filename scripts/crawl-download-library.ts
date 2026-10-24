import https from 'https';
import fs from 'fs';

function fetchUrl(urlStr: string): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(urlStr, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let nextUrl = res.headers.location;
        if (nextUrl.startsWith('/')) nextUrl = 'https://www.edwardsvacuum.com' + nextUrl;
        return fetchUrl(nextUrl).then(resolve).catch(reject);
      }
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching download-library...');
  const body = await fetchUrl('https://www.edwardsvacuum.com/en-uk/vacuum-pumps/download-library');
  console.log('Length:', body.length);
  fs.writeFileSync('scripts/edwards-download-library.html', body);

  const pdfs = body.match(/href="([^"]*\.pdf)"/gi) || [];
  console.log('PDFs found:', pdfs.length);
  const cleaned = Array.from(new Set(pdfs.map(p => p.replace(/href="/i, '').replace(/"$/, ''))));
  console.log('Cleaned PDFs:', cleaned.slice(0, 30));
}

run();
