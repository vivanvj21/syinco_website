import https from 'https';

function checkRedirect(urlStr: string) {
  const url = new URL(urlStr);
  https.get(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  }, (res) => {
    console.log(`URL: ${urlStr}`);
    console.log(`Status: ${res.statusCode}`);
    console.log(`Location: ${res.headers.location}`);
    if (res.headers.location) {
      checkRedirect(res.headers.location);
    }
  });
}

checkRedirect('https://www.edwardsvacuum.com/en');
