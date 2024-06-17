const prompt = require("prompt-sync")();
const number = prompt("Enter number: ");

function checkOddOrEven(number){
    if(number %2 == 0 ? console.log("Even") : console.log("Odd"));
}

checkOddOrEven(number);