var sum = 0;
const prompt = require("prompt-sync")();
const array = prompt("Enter array: ").split(",");

function sumArray(array) {
    for(let i =0; i< array.length; i++){
        array[i] = parseInt(array[i]);
        sum += array[i];
    }
    return sum;
}

console.log(sumArray(array));