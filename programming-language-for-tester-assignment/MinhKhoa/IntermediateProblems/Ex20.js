const prompt = require("prompt-sync")();
const string = (prompt("Enter string: "));

function checkPalindromeString(string){
    if (string == string.split('').reverse().join('')){
        return console.log('True');
    } else{
        return console.log('False');;
    }
}
checkPalindromeString(string);