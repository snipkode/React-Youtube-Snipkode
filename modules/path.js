const path = require('path');

// Mengembalikan hanya nama filenya saja
// console.log(path.basename(__filename));

// Mengembalikan Ektensi File ".js"
// console.log(path.extname(__filename));

// Mengembalikan hanya nama directory
// console.log(path.dirname(__filename));

// Membuat Object
// console.log(path.parse(__filename));

// Mengambil Salah Satu Object
// console.log(path.parse(__filename).base);

// join ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));