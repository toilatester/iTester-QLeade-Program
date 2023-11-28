const prompt = require("prompt-sync")();
const number = parseInt(prompt("Enter number: "));
let isPrime = true;

function primeNumber(number){
    if (number===1) {
        console.log("1 is neither prime nor composite number");
    } else if (number > 1){
        for(i=2; i<number; i++){
            if (number % i === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(`${number} is a prime number.`)
        } else {          
            console.log(`${number} is not a prime number.`)
        }
    } else {
        console.log("The number is not a prime number.");
    }
}
primeNumber(number);