const inputString = 'hello';
const check = 'l';

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

const result = countOccurrences(inputString, check);
console.log("Number of character " + check + " need to check is: " + result);