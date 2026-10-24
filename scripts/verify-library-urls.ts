import fs from 'fs';

const lib: string[] = JSON.parse(fs.readFileSync('scripts/edwards-official-library-pdfs.json', 'utf8'));

async function testLib() {
  console.log(`Testing all ${lib.length} library URLs...`);
  const okList: string[] = [];
  const failList: string[] = [];

  for (let i = 0; i < lib.length; i++) {
    const url = lib[i];
    try {
      const res = await fetch(url, {
        method: 'HEAD',
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(5000)
      });
      if (res.ok) {
        okList.push(url);
      } else {
        failList.push(url);
      }
    } catch (e) {
      failList.push(url);
    }
  }

  console.log(`Results: ${okList.length} OK, ${failList.length} Fail`);
  fs.writeFileSync('scripts/valid-library-urls.json', JSON.stringify(okList, null, 2));
}

testLib();
