const http = require('http')
const url = process.argv[2]

http.get(url, function (response) {
  let dataSent = ''
  response.on('data', function (chunk) {
    dataSent += chunk
  })
  response.on('error', console.log)
  response.on('end', function () {
    console.log(dataSent.length)
    console.log(dataSent)
  })
})