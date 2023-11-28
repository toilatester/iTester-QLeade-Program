function indexOfArray(array){
    return array[2];
}
const prompt = require("prompt-sync")();
let input = prompt("Enter a list of items separated by commas: ");
let array = input.split(",");
let index = indexOfArray(array);
console.log(index);