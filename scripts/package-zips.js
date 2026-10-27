const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

console.log('1. Creating syinco-core.zip (website without large PDFs)...');
const outItems = fs.readdirSync('out')
  .filter(f => f !== 'documents')
  .map(f => path.join('out', f));

const corePaths = outItems.map(p => `"${p}"`).join(',');
spawnSync('powershell', ['-Command', `Compress-Archive -Path ${corePaths} -DestinationPath d:\\Syinco\\syinco-core.zip -Force`], { stdio: 'inherit' });

const coreSize = fs.statSync('d:/Syinco/syinco-core.zip').size;
console.log('syinco-core.zip size:', (coreSize / 1024 / 1024).toFixed(2), 'MB');

console.log('2. Measuring Edwards PDFs in out/documents/edwards...');
const docDir = 'out/documents/edwards';
if (fs.existsSync(docDir)) {
  const pdfs = fs.readdirSync(docDir).map(f => ({
    name: f,
    path: path.join(docDir, f),
    size: fs.statSync(path.join(docDir, f)).size
  })).sort((a, b) => b.size - a.size);

  let part1 = [];
  let part2 = [];
  let part3 = [];
  let s1 = 0, s2 = 0, s3 = 0;

  for (const pdf of pdfs) {
    if (s1 <= s2 && s1 <= s3) {
      part1.push(pdf.path);
      s1 += pdf.size;
    } else if (s2 <= s1 && s2 <= s3) {
      part2.push(pdf.path);
      s2 += pdf.size;
    } else {
      part3.push(pdf.path);
      s3 += pdf.size;
    }
  }

  // Create temporary folders for documents parts so directory structure is preserved: documents/edwards/...
  const makePartZip = (partFiles, zipName) => {
    const tempDir = path.join('out', 'temp_pack');
    const targetDir = path.join(tempDir, 'documents', 'edwards');
    if (fs.existsSync(tempDir)) fs.rmSync(tempDir, { recursive: true, force: true });
    fs.mkdirSync(targetDir, { recursive: true });
    for (const f of partFiles) {
      fs.copyFileSync(f, path.join(targetDir, path.basename(f)));
    }
    spawnSync('powershell', ['-Command', `Compress-Archive -Path "${tempDir}\\*" -DestinationPath "d:\\Syinco\\${zipName}" -Force`], { stdio: 'inherit' });
    fs.rmSync(tempDir, { recursive: true, force: true });
    const sz = fs.statSync(`d:/Syinco/${zipName}`).size;
    console.log(`${zipName} size:`, (sz / 1024 / 1024).toFixed(2), 'MB');
  };

  console.log('Packaging documents part 1...');
  makePartZip(part1, 'syinco-documents-part1.zip');
  console.log('Packaging documents part 2...');
  makePartZip(part2, 'syinco-documents-part2.zip');
  console.log('Packaging documents part 3...');
  makePartZip(part3, 'syinco-documents-part3.zip');
}
