console.log('node app');

setTimeout(function(){
    console.log('3 seconds have passed');
}, 3000);

let time = 0;
// setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
// }, 2000);

let timer = setInterval(function(){
    time += 2;
    console.log(time + ' seconds have passed');
    if (time > 5) {
        clearInterval(timer);
    }
}, 2000);

console.log('dirname : ' + __dirname);
console.log('filename : ' + __filename);