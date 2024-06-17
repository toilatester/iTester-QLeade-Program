const prompt = require("prompt-sync")();
const array = prompt("Input array: ").split(",");
var sum = 0;

for(let i =0; i<array.length; i++){
    array[i] = parseInt(array[i]);
    sum = sum + array[i];
}

console.log(sum);
