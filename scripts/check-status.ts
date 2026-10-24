import https from 'https';

https.get('https://www.edwardsvacuum.com/en-uk/our-products', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, (res) => {
  console.log('Status:', res.statusCode);
  console.log('Location:', res.headers.location);
  console.log('Headers:', res.headers);
});
