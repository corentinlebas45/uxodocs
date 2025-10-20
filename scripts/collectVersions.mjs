import fs from 'fs';
import path from 'path';

const products = ['fast2', 'flower', 'arender'];
const base = path.join(process.cwd(), 'docs');

const out = {};
for (const id of products) {
    const p = path.join(base, id);
    let versions = [];
    if (fs.existsSync(p)) {
        versions = fs.readdirSync(p, { withFileTypes: true })
            .filter(d => d.isDirectory() && d.name.startsWith('v'))
            .map(d => d.name)
            .sort(); // tri simple
    }
    out[id] = versions;
}

fs.writeFileSync('versions.manifest.json', JSON.stringify(out, null, 2));
console.log('versions.manifest.json written:', out);
