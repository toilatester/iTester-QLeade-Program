const prompt = require("prompt-sync")();
var name=prompt("Input name: ");

function greet(input){
    console.log('Hello, '+input)
}

greet(name)


