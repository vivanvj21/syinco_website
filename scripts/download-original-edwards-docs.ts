import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const docs = JSON.parse(fs.readFileSync('scripts/edwards-original-docs.json', 'utf8'));
const outDir = path.join(process.cwd(), 'public', 'documents', 'edwards');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function fetchStream(urlStr: string): Promise<{ statusCode: number; headers: any; stream?: any }> {
  return new Promise((resolve, reject) => {
    try {
      const url = new URL(urlStr);
      const client = url.protocol === 'https:' ? https : http;
      client.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
        }
      }, (res) => {
        if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchStream(res.headers.location).then(resolve).catch(reject);
        }
        resolve({ statusCode: res.statusCode || 0, headers: res.headers, stream: res });
      }).on('error', reject);
    } catch (err) {
      reject(err);
    }
  });
}

function downloadToFile(urlStr: string, destPath: string): Promise<{ success: boolean; bytes: number; error?: string }> {
  return new Promise(async (resolve) => {
    try {
      const res = await fetchStream(urlStr);
      if (res.statusCode !== 200 || !res.stream) {
        resolve({ success: false, bytes: 0, error: `HTTP ${res.statusCode}` });
        return;
      }

      const file = fs.createWriteStream(destPath);
      let bytes = 0;
      res.stream.on('data', (chunk: Buffer) => {
        bytes += chunk.length;
      });
      res.stream.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ success: true, bytes });
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        resolve({ success: false, bytes: 0, error: err.message });
      });
    } catch (err: any) {
      resolve({ success: false, bytes: 0, error: err.message });
    }
  });
}

async function run() {
  console.log(`Starting download of ${docs.length} original Edwards documents...`);

  // First delete any previous generated files in public/documents/edwards
  const existingFiles = fs.readdirSync(outDir);
  for (const f of existingFiles) {
    if (f.endsWith('-datasheet.pdf') || f.endsWith('-brochure.pdf')) {
      fs.unlinkSync(path.join(outDir, f));
    }
  }
  console.log(`Cleared previous generated PDFs from ${outDir}`);

  const results: any[] = [];

  for (let i = 0; i < docs.length; i++) {
    const doc = docs[i];
    if (doc.fileUrl.startsWith('/documents/')) {
      results.push({ ...doc, localPath: doc.fileUrl, status: 'already-local' });
      continue;
    }

    // Determine clean local filename from URL or title
    const urlParts = doc.fileUrl.split('/');
    let filename = urlParts[urlParts.length - 1].split('?')[0];
    if (!filename.toLowerCase().endsWith('.pdf')) {
      filename = `${doc.docId}.pdf`;
    }
    // Clean filename
    filename = decodeURIComponent(filename).replace(/[^a-zA-Z0-9._-]/g, '_');
    const localDest = path.join(outDir, filename);

    process.stdout.write(`[${i + 1}/${docs.length}] Downloading ${filename}... `);
    const dl = await downloadToFile(doc.fileUrl, localDest);

    if (dl.success) {
      console.log(`OK (${(dl.bytes / 1024).toFixed(0)} KB)`);
      results.push({
        ...doc,
        localPath: `/documents/edwards/${filename}`,
        fileSizeBytes: dl.bytes,
        status: 'downloaded'
      });
    } else {
      console.log(`FAILED (${dl.error}) - keeping original URL`);
      results.push({
        ...doc,
        localPath: doc.fileUrl,
        status: 'failed'
      });
    }
  }

  fs.writeFileSync('scripts/edwards-download-results.json', JSON.stringify(results, null, 2));
  console.log('Finished. Results saved to scripts/edwards-download-results.json');
}

run();
