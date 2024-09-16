const prompt = require("prompt-sync")();
var num = prompt("Input number: ");
var result;

function factNumber(num) {
    result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i;
    }
    return result
}

console.log(factNumber(num))


