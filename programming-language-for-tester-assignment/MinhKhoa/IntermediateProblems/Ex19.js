const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter number: "));

function factorial(number){
    if (number<0){
        console.log('Error');
    } else if (number===0){
        console.log(`The factorial of ${number} is 1`);
    } else if (number>0){
        let fact = 1;
        for(let i = 1; i <= number; i++){
            fact *= i;
        }
        console.log(`The factorial of ${number} is ${fact}`);
    }
}
factorial(number);