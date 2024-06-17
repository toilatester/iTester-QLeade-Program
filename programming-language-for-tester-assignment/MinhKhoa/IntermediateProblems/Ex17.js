const prompt = require("prompt-sync")();
const array = prompt("Enter array: ").split(",");

array.sort(function(a,b){
    return b-a;
})
let max = array[0];
console.log(max);