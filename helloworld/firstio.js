const fs = require('fs');
const fileName = process.argv[2];

const file = fs.readFileSync(, 'utf8');
const newLinesInFile = (file.split("\n").length)-1;
console.log(newLinesInFile);


