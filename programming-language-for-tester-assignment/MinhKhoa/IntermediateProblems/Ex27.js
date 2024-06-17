const prompt = require("prompt-sync")();
const string = (prompt("Enter string: "));

function reverseString (string){
    var newString = string.split('').reverse().join('');
    return newString;
}
console.log(reverseString(string));