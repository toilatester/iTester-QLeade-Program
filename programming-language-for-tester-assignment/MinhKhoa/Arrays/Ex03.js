function filterArray(number){
    return number > 10
}

const prompt = require("prompt-sync")();
let input = prompt("Enter a list of items separated by commas: ");
let array = input.split(",");

let result = array.filter(filterArray);
console.log(result);