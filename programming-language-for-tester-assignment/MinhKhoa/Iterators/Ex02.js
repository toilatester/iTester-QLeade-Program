const prompt = require("prompt-sync")();
let array = prompt("Enter a list of items separated by commas: ").split(",");

const square = array.map(
    (number) => {
       return number*2
    }
)

console.log(square);
    