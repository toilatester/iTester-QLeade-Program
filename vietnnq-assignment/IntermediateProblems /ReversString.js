function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

const inputString = 'hello';
const result = reverseString(inputString);
console.log(result);