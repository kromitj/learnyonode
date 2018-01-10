const http = require('http');

const url = process.argv[2];

http.get(url, (resp) => {
  resp.setEncoding('utf8')
  resp.on('data', console.log);
}).on("error", console.error);