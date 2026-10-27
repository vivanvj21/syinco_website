process.env.NEXT_EXPORT = 'true';
const { spawnSync } = require('child_process');
const result = spawnSync('npx', ['next', 'build'], { stdio: 'inherit', shell: true });
process.exit(result.status || 0);
