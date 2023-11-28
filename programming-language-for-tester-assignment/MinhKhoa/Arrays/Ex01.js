function reverseArray(array){
    return array.reverse();
}
const prompt = require("prompt-sync")();
let input = prompt("Enter a list of items separated by commas:");
let array = input.split(",");

let finalArray = reverseArray(array);
console.log(finalArray);
