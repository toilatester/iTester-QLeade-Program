const prompt = require("prompt-sync")();
var num = prompt("Input number: ");
var arr=[];


function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if ((i%3===0)&&(i%5===0)) {arr.push("FizzBuzz")}
        else if (i%3===0) {arr.push("Fizz")}
        else if (i%5===0) {arr.push("Fizz")}
        else arr.push(i);
    }
    return arr;
}

console.log(fizzBuzz(num))
