const prompt = require("prompt-sync")();
const array = prompt("Input array: ").split(",");
let text = "";

for(const i of array){
    console.log(i);
}