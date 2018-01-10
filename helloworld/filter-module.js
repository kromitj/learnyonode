const fs = require('fs');
    
module.exports = function (mydir, ext, regExFileExt, callback) {
  fs.relea	addir(mydir, function (err, files) {
    if (err) {
      return callback(err)
    }
    list = files.filter(function (file) {
      return regExFileExt.test(file)
    })
    callback(err, list)
  })
}