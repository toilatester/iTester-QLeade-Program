//1. **For Loop Counter**
let resultForLoop = " ";
for(let i = 1; i <= 5; i++)
{
    /*In default xuong tung dong*/
    // console.log(i);
    resultForLoop += i + " ";
}
console.log("1. Result For loop:" + resultForLoop);

//2.  **While Loop Usage**
let number = 5;
let resultWhileLoop = " ";
while (number >= 1) {
  resultWhileLoop += number + " ";
  number --;
}
console.log("2. Result While loop:" + resultWhileLoop);

//3.  **Loop Through Array**:
let fruitArray = ["apple", "banana", "cherry"];
let resultFruit = " ";
for (let i = 0; i < fruitArray.length; i++) {
resultFruit += `"${fruitArray[i]}" `;
}
console.log("3. Loop Through Array:" + resultFruit);

//4.  **Find the Sum Using Loop**
const inputArray = [1, 2, 3, 4, 5]
let sum = 0;
for(let i = 0; i < inputArray.length; i++)
{
sum += inputArray[i];
}
console.log("4. Sum Using Loop: " + sum);