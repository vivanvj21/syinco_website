import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const docs = JSON.parse(fs.readFileSync('scripts/edwards-original-docs.json', 'utf8'));

function downloadFile(urlStr: string): Promise<{ success: boolean; bytes: number; error?: string }> {
  return new Promise((resolve) => {
    if (urlStr.startsWith('/documents/')) {
      resolve({ success: true, bytes: 0 });
      return;
    }
    try {
      const url = new URL(urlStr);
      const client = url.protocol === 'https:' ? https : http;
      const req = client.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return downloadFile(res.headers.location).then(resolve);
        }
        if (res.statusCode !== 200) {
          resolve({ success: false, bytes: 0, error: `HTTP ${res.statusCode}` });
          return;
        }
        let total = 0;
        res.on('data', chunk => total += chunk.length);
        res.on('end', () => resolve({ success: true, bytes: total }));
      });
      req.on('error', err => resolve({ success: false, bytes: 0, error: err.message }));
      req.setTimeout(8000, () => {
        req.destroy();
        resolve({ success: false, bytes: 0, error: 'Timeout' });
      });
    } catch (e: any) {
      resolve({ success: false, bytes: 0, error: e.message });
    }
  });
}

async function testAll() {
  console.log(`Testing download of ${docs.length} documents...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < Math.min(docs.length, 15); i++) {
    const d = docs[i];
    process.stdout.write(`[${i+1}/${15}] ${d.title.slice(0, 40)}... `);
    const res = await downloadFile(d.fileUrl);
    if (res.success) {
      successCount++;
      console.log(`OK (${(res.bytes / 1024).toFixed(0)} KB)`);
    } else {
      console.log(`FAILED: ${res.error}`);
      failCount++;
    }
  }

  console.log(`\nSample result: ${successCount} succeeded, ${failCount} failed.`);
}

testAll();
