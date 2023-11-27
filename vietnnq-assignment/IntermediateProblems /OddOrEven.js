function checkOddOrEven(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

const inputNumber = 4;
const result = checkOddOrEven(inputNumber);
console.log(result);