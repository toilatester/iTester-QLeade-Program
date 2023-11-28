// Method 1
var age = 18

if(age >= 18){
  console.log(`Adult`);
}
else{
    console.log(`Minor`);
}


// Method 2
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input your age: \n ", function (age) {
  if(age >= 18){
    console.log(`Adult`);
  }
  else{
    console.log(`Minor`);
  }
  rl.close();
});