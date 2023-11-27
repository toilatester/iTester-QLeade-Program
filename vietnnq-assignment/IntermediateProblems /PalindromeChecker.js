function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

const inputString = 'racecar';
const result = isPalindrome(inputString);
console.log(result);