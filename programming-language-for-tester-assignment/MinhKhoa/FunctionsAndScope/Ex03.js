function square(number){
    return number * number;
}

const prompt = require("prompt-sync")();
let input = prompt("Input: ");
let result = square(input);
console.log(result);