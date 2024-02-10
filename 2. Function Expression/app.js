// normal function expression
// function sayHi(){
//     console.log('hi');
// }

// sayHi();

function callFunction(fun){
    fun();
}


//function expression
let sayBye = function(){
    console.log('bye');
};

// sayBye();
callFunction(sayBye);