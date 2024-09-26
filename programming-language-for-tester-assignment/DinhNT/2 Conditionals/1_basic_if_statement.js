// Method 1
var num = 12

if(num > 10){
  console.log(`Greater than 10`);
}


// Method 2
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input number: \n ", function (num) {
  if(num > 10){
    console.log(`Greater than 10`);
  }
  rl.close();
});