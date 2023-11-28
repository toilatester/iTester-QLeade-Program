const prompt = require("prompt-sync")();
let array = prompt("Input number: ").split(",");

for(let i =0; i< array.length; i++){
    array[i] = parseInt(array[i]);
}
let result = array.reduce(
    (sum, all) => sum + all
);
console.log(result);