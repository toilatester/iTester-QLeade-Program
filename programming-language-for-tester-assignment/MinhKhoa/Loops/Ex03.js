const prompt = require("prompt-sync")();
var array = prompt("Enter array: ").split(",");

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
}