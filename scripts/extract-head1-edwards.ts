import { execSync } from 'child_process';
import fs from 'fs';

// Get edwards.ts content at HEAD~1
const rawAtHead1 = execSync('git show HEAD~1:src/data/products/edwards.ts', { maxBuffer: 50 * 1024 * 1024 }).toString('utf8');

// Also get nxds.ts at HEAD~1
const nxdsAtHead1 = execSync('git show HEAD~1:src/data/products/nxds.ts', { maxBuffer: 10 * 1024 * 1024 }).toString('utf8');

fs.writeFileSync('scripts/edwards-head1.ts', rawAtHead1);
fs.writeFileSync('scripts/nxds-head1.ts', nxdsAtHead1);

console.log('Saved edwards-head1.ts and nxds-head1.ts');
