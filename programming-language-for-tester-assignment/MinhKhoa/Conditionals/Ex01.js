const prompt = require("prompt-sync")();
var number = prompt("Nhập số: ");
var message;
if(number > 10){
    message = "Greater than 10";
}
console.log(message);