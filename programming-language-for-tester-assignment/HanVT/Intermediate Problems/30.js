const prompt = require("prompt-sync")();
var prin = prompt("Input principal: ");
var rate = prompt("Input rate (percent): ");
var time = prompt("Input time (year): ");


function simpleInterest(prin,rate,time){
    return prin*rate*time/100
}

console.log("Simple interest is calculated: "+simpleInterest(prin,rate,time))