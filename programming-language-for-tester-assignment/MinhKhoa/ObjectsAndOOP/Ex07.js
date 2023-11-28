const prompt = require("prompt-sync")();
let key = prompt("Enter key: ");
let value = prompt("Enter value: ");

let map = {
    [key]:value
}
console.log(map)