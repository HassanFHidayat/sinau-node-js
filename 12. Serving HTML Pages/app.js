let http = require('http');
let fs = require('fs');

// let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// myReadStream.on('data', function(chunk){
//     console.log('new chunk received:');
//     // console.log(chunk);
//     myWriteStream.write(chunk);
// });

// meringkas kode diatas
// myReadStream.pipe(myWriteStream);

let server = http.createServer(function(req, res) {
   console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-Type': 'text/html'});

   let myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//    let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt')

   myReadStream.pipe(res);

//    res.end('Hey!'); 
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');