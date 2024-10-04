const { path, fs } = require('./h.js');

console.log(path.join(__dirname, 'h.cjs'));
console.log(fs.readFileSync('h.cjs', 'utf-8'));