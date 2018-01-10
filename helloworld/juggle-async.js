const http = require('http')
const urls = [process.argv[2], process.argv[3],process.argv[4]]
let results = [];
let count = 0;
const numOfUrls = process.argv.length - 2;

const printResults = (numOfUrls) => {
	for (var i = 0; i < numOfUrls; i++) {
    console.log(results[i])
	}
}


const getHttp = (index) => {
	http.get(urls[index], function (response) {
	  let dataSent = ''
	  response.on('data', function (chunk) {
	    dataSent += chunk
	  })
	  response.on('error', console.log)
	  response.on('end', function () {
	   	results[index] = dataSent;
	   	count++;
	   	if (count === numOfUrls) {
	   		printResults(numOfUrls);
	   	};
	  })
	})	
}

for (var i = 0; i < numOfUrls; i++){
  getHttp(i)
}


