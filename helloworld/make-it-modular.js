const filter = require('./filter-module');

const mydir = process.argv[2];
const ext = process.argv[3];
const regExFileExt = new RegExp(`(.${ext})`);


filter(mydir, ext, regExFileExt, function(err, list) {
    if (err) {
    	return console.error("Error: ", err);
    }
    console.log(list.join("\n"))
});

   