const prompt = require("prompt-sync")();
let principalPerYear = parseInt(prompt("Enter principal: "));
let rate = parseInt(prompt("Enter rate: "));
let timeInYear = parseInt(prompt("Enter time: "));

function interestCalculator(principalPerYear, rate, timeInYear){
    return (principalPerYear * rate *  timeInYear)/100;
}

console.log(interestCalculator(principalPerYear, rate, timeInYear));