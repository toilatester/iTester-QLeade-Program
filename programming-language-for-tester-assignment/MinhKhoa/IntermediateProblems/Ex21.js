const prompt = require("prompt-sync")();
const string = (prompt("Enter string: "));
const char = (prompt("Enter character: "));

function countCharacter(string, char){
    let count = 0;
    for(let i =0; i<string.length; i++){
        if(string[i] === char) {
            count += 1;
        }
    }
    return count;
}

console.log(countCharacter(string,char));