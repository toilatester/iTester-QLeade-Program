const prompt = require("prompt-sync")();

let input=prompt("Input list of array number (with , for listing): ")
let array=input.split(",")
var givenNum=prompt("Input given value to compare: ")
for (let i=0;i<array.length;i++){
    array[i]=parseInt(array[i])
}
const result=array.filter((num)=>num>givenNum)
console.log(result);