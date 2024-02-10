let fs = require('fs');

// let readMe = fs.readFileSync('readMe.txt', 'utf-8');
fs.readFile('readMe.txt', 'utf8', function(err, data){
    // console.log(data);
    fs.writeFile('writeMe.txt', data, function(err, data){});
});
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);