const prompt = require("prompt-sync")();
var num = prompt("Input number: ");

function checkOddEven(num) {
    try {
        if (num % 2 === 1) { console.log('Odd') }
        else if (num % 2 == 1) { console.log('Even') }
        else console.log('Number input invalid')

    }
    catch (error) { console.error('Error: Input invalid') }
}

checkOddEven(num)