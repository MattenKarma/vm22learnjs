const fs = require('fs');

let files = fs.readdirSync('.');
console.log(files); 

fs.writeFileSync('hello.txt', 'Hello!', {flag: 'a'});

let html = fs.readFileSync('index.html');

console.log(html.toString());