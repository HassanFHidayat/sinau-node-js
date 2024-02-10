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
   if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
   } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
   } else if (req.url === '/api/ninjas') {
    let ninjas = [{name: 'ryu', age: 29},  {name: 'yoshi', age: 32}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
   } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
   }
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');