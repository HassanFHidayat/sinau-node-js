let fs = require('fs');

// delete file
fs.unlink('writeMe.txt', function(err, data){});

// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/writeMe.txt', data, function(err, data){});
//     });
// });
fs.unlink('./stuff/writeMe.txt', function(err, data){});
fs.rmdir('stuff', function(err, data){});