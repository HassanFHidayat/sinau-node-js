// method 1
// let counter = function(arr) {
//     return 'There are ' + arr.length + ' elements in this array';
// };

// let adder = function(a,b){
//     return `the sum of the 2 numbers is ${a+b}`;
// };

// let pi = 3.142;

// // console.log(counter(['Hassan','Fasya','Hidayat']));

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// method 2
// module.exports.counter = function(arr) {
//     return 'There are ' + arr.length + ' elements in this array';
// };

// module.exports.adder = function(a,b){
//     return `the sum of the 2 numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;

// console.log(counter(['Hassan','Fasya','Hidayat']));

// method 3
let counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array';
};

let adder = function(a,b){
    return `the sum of the 2 numbers is ${a+b}`;
};

let pi = 3.142;

// console.log(counter(['Hassan','Fasya','Hidayat']));

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};