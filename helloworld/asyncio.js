const fs = require('fs');
const fileToLoad = process.argv[2];

fs.readFile(fileToLoad, 'utf8', (err, data) => {
	console.log(data.split('\n').length-1);
})
