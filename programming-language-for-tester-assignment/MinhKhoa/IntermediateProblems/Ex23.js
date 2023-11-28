const prompt = require("prompt-sync")();
const array = prompt("Enter array: ").split(",");

array.sort(function(a,b){
    return a-b;
})
console.log(array);