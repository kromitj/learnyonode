const fs = require('fs');

const mydir = process.argv[2];
const ext = process.argv[3];
const regExFileExt = new RegExp(`(.${ext})`);

fs.readdir(mydir, function(err, files){
  if(err){ return  console.error(err)}
  files.forEach(filename => {    
    if(regExFileExt.test(filename)){
      console.log(filename);
    }
  });
});