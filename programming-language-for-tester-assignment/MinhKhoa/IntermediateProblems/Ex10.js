const prompt = require("prompt-sync")();
let array1 = prompt("Enter array 1: ").split(",");
let array2 = prompt("Enter array 2: ").split(",");

let mergeArray = [
    ...array1,
    ...array2
]
console.log(mergeArray);