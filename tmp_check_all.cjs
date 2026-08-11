const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const missing = [];
  let match;
  
  const regex = /src:\s*'([^']+)'/g;
  while ((match = regex.exec(content)) !== null) {
    let p = match[1];
    if (p.startsWith('/')) p = p.substring(1);
    if (!fs.existsSync(path.join('public', p))) {
      missing.push({ file: filePath, src: match[1] });
    }
  }

  const regex2 = /src="([^"]+)"/g;
  while ((match = regex2.exec(content)) !== null) {
    let p = match[1];
    if (p.startsWith('/')) p = p.substring(1);
    if (!p.startsWith('http') && !p.startsWith('data:') && !fs.existsSync(path.join('public', p))) {
      missing.push({ file: filePath, src: match[1] });
    }
  }

  const regex3 = /url\(['"]?([^'"\)]+)['"]?\)/g;
  while ((match = regex3.exec(content)) !== null) {
    let p = match[1];
    if (p.startsWith('/')) p = p.substring(1);
    if (!p.startsWith('http') && !p.startsWith('data:') && !fs.existsSync(path.join('public', p))) {
      missing.push({ file: filePath, src: match[1] });
    }
  }
  return missing;
}

function checkDir(dir) {
  let missing = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      missing = missing.concat(checkDir(fullPath));
    } else if (fullPath.endsWith('.jsx')) {
      missing = missing.concat(checkFile(fullPath));
    }
  }
  return missing;
}

const allMissing = checkDir('src');
console.log(JSON.stringify(allMissing, null, 2));
