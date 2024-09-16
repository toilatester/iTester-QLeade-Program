const prompt = require("prompt-sync")();
var num = prompt("Input number: ");

function checkPrime(num){
    for (let i=2;i<num;i++){
        if (num%i==0) return "false"
    }
    return "true";
}

console.log(checkPrime(num))