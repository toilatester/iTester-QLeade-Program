function concatTwoString(string1, string2){
    return string1.concat(' ', string2);
}

const prompt = require("prompt-sync")();
let string1 = prompt("Enter string 1: ");
let string2 = prompt("Enter string 2: ");
let result = concatTwoString(string1, string2);
console.log(result);