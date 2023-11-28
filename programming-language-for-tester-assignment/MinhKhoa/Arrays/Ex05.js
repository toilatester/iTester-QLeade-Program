const prompt = require("prompt-sync")();
let array = prompt("Enter a list of items separated by commas: ").split(",");
var givenNumber = prompt("Enter number: ")

for(let i =0; i< array.length; i++){
    array[i] = parseInt(array[i]);
}

let result = array.filter((num)=>num>givenNumber);
console.log(result);