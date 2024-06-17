const prompt = require("prompt-sync")();
const c = parseFloat(prompt("Enter temperature in Celsius: "));

function convertTemperature(c){
    let f = 0;
    f = (c * (9 / 5)) + 32;
    return f;
}
 console.log(convertTemperature(c));