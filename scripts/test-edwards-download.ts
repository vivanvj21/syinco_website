import https from 'https';

const testUrl = 'https://www.edwardsvacuum.com/content/dam/brands/edwards-vacuum/general-vacuum/downloads/chemical-dry-pumps/3602120401-CDX1000-1300-EN-Web.pdf';

https.get(testUrl, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('Content-Length:', res.headers['content-length']);
  console.log('Location:', res.headers.location);
  let bytes = 0;
  res.on('data', chunk => bytes += chunk.length);
  res.on('end', () => {
    console.log('Total bytes received:', bytes);
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
