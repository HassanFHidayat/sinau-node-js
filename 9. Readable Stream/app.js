let http = require('http');
let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});


// let server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url);
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Hey!'); 
// });

// server.listen(3000, '127.0.0.1');
// console.log('Now listening to port 3000');