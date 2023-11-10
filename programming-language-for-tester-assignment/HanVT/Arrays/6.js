const prompt = require("prompt-sync")();

let input=prompt("Input list of array number (with , for listing): ")
let array=input.split(",")

for (let i=0;i<array.length;i++){
    array[i]=parseInt(array[i])*parseInt(array[i])
}

console.log(array)