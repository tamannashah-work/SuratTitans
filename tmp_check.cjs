const fs = require('fs');
const content = fs.readFileSync('src/pages/Home.jsx', 'utf-8');
const missing = [];
const regex = /src:\s*'([^']+)'/g;
let match;
while ((match = regex.exec(content)) !== null) {
  let p = match[1];
  if (p.startsWith('/')) p = p.substring(1);
  if (!fs.existsSync('public/' + p)) {
    missing.push(match[1]);
  }
}
const regex2 = /src="([^"]+)"/g;
while ((match = regex2.exec(content)) !== null) {
  let p = match[1];
  if (p.startsWith('/')) p = p.substring(1);
  if (!fs.existsSync('public/' + p)) {
    missing.push(match[1]);
  }
}
console.log(JSON.stringify(missing, null, 2));
