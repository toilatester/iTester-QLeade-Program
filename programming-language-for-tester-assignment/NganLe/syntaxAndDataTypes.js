/**
 * Assignment to practice learning JavaScript
   Syntax and Data Types
   1. **Hello, World!**
   - Write a JavaScript program that prints "Hello, World!" to the console.
   - Example output: `Hello, World!`
   - Explanation: This problem helps understand the basic syntax of console output.
 */
console.log("Hello, World!");

/**
 * 2. **Variable Declaration**
   - Declare a variable `name` and assign it your name as a string.
   - Example output: `John`
   - Explanation: Demonstrates variable declaration and string data type.
 */
var name = 'Ngan';
console.log(name);

/**
 * 3. **Math Operations**
   - Calculate and log the result of 7 added to 3, then multiplied by 2.
   - Example output: `20`
   - Explanation: Shows the order of arithmetic operations.
 */
function calculate (a, b, c){
  return (a + b) * c;
}
console.log( calculate(7, 3, 2));

/**
 * 4. **Type Conversion**
   - Convert the string "123" to an integer and add 7 to it.
   - Example output: `130`
   - Explanation: Introduces type conversion from string to integer.
 */
function convertToIntergerAndAdd(a, b){
  return parseInt(a) + b;
}
console.log(convertToIntergerAndAdd('123', 7));