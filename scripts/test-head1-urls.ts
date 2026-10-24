import { edwardsProducts } from './edwards-head1';
import { nxdsProductData } from './nxds-head1';

const all = [nxdsProductData, ...edwardsProducts];
const urls: { product: string; title: string; url: string; type: string }[] = [];

for (const p of all) {
  for (const d of p.documents) {
    if (d.fileUrl.startsWith('http')) {
      urls.push({ product: p.id, title: d.title, url: d.fileUrl, type: d.type });
    }
  }
}

console.log(`Testing ${urls.length} remote URLs...`);

async function testAll() {
  const results = {
    ok: 0,
    fail: 0,
    failures: [] as any[]
  };

  for (let i = 0; i < urls.length; i++) {
    const item = urls[i];
    try {
      const res = await fetch(item.url, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        signal: AbortSignal.timeout(6000)
      });
      if (res.ok) {
        results.ok++;
      } else {
        results.fail++;
        results.failures.push({ ...item, status: res.status });
      }
    } catch (e: any) {
      results.fail++;
      results.failures.push({ ...item, error: e.message });
    }
    if ((i + 1) % 20 === 0 || i === urls.length - 1) {
      console.log(`Progress: ${i + 1}/${urls.length} (OK: ${results.ok}, Fail: ${results.fail})`);
    }
  }

  console.log('\nFinal Results:');
  console.log(`OK: ${results.ok}, Fail: ${results.fail}`);
  if (results.failures.length > 0) {
    console.log('Failures:', JSON.stringify(results.failures, null, 2));
  }
}

testAll();
