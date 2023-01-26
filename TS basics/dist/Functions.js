"use strict";
function add1(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result:-" + num);
}
printResult(add1(2, 1));
// function print(num:number):undefined            //we can only use undefined as return type when we have return statement but doesn't return anything otherwise it gives error
// {
//     console.log("hi");
//     return;
// }
const a = Function; //we can assign type function so that it only takes functions
//if we have to specify which type of functions are accepted into the variable
let combineValues;
//should take only 2 parameters of type of number and return type is also number
//CALLBACK FUNCTIONS TYPE SPECIFYING
function addAndHandle(n1, n2, cb) {
    const res = n1 + n2;
    cb(res);
}
addAndHandle(2, 2, (res) => {
    console.log(res);
});
