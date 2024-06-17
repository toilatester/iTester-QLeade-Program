const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter number: "));

function fizzBuzz(number){
    let array = [];
    for (let i =1; i<= number; i++){
        if (i % 3 === 0){
            array.push("Fizz");
        } else if (i % 5 === 0) {
            array.push("Buzz");
        } else if (i % 3 === 0 || i % 5 === 0) {
            array.push("FizzBuzz");
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log(fizzBuzz(number));