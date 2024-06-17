function greet (name){
    console.log(`Hello, ` + name + `!`);
}
const prompt = require("prompt-sync")();
let input = prompt("Nhập tên: ");
greet(input);
