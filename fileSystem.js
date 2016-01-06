var fs = require('fs');
fs = fs.readFileSync(process.argv[2]);
var str = fs.toString();
var arr = str.split("\n");
var newLines = arr.length - 1;
console.log(newLines);
