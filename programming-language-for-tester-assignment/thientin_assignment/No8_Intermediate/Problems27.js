function reverseString(inputString) {
    return Array.from(inputString).reverse().join('');
}

function reverseString_2(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

console.log(reverseString("Hello"));
console.log(reverseString_2("pikachu"));