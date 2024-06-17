const prompt = require("prompt-sync")();
const string = (prompt("Enter string: "));

function findLongestWorld(string){
    let array = string.split(' ');
    let temp = 0;
    for (let i =1; i< array.length; i++){
        if(array[i].length > array[temp].length){
            temp = array[i];
        }
    }
    return array[temp];
}
console.log(findLongestWorld(string));