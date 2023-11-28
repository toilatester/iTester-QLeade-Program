const prompt = require("prompt-sync")();
let array = prompt("Enter a list of items separated by commas: ").split(",");

function mapArray(number){
    return number * number;
}

let result = array.map(mapArray);
console.log(result)