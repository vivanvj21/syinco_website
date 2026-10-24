import fs from 'fs';
import https from 'https';

https.get('https://www.edwardsvacuum.com/en', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    fs.writeFileSync('scripts/edwards-home.html', body);
    console.log('Saved edwards-home.html, length:', body.length);

    // Find all hrefs
    const hrefs = body.match(/href="([^"]+)"/g) || [];
    console.log('Total href attributes:', hrefs.length);
    const cleaned = Array.from(new Set(hrefs.map(h => h.replace(/^href="/, '').replace(/"$/, ''))));
    console.log('Sample hrefs:', cleaned.slice(0, 20));
  });
});
