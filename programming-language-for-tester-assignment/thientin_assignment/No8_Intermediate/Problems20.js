function isPalindrome(str) {
    if (!(/^[a-zA-Z]+$/.test(str)))
        return false;
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Ví dụ sử dụng hàm
const inputString = 'racecar';
const result = isPalindrome(inputString);
console.log(result);

const inputString2 = '!racecar!';
const result2 = isPalindrome(inputString2);
console.log(result2);