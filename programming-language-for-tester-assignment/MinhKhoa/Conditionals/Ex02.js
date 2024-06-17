const prompt = require("prompt-sync")();
let age = prompt("Input age: ");
let result;
if (age >= 18){
    result = "Adult";
} else {
    result = "Minor";
}
console.log(result);