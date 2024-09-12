/**
 * Functions and Scope
 * 1. **Writing a Function**
   - Create a function `greet` that takes a name as an argument and logs "Hello, [name]!".
   - Example input: `greet("Alice")`
   - Example output: `Hello, Alice!`
   - Explanation: Demonstrates function creation and argument passing.
 *  */
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet('Alice');

/**
 * 2. **Scope Understanding**
   - Define a variable outside of a function and try to log it inside the function.
   - Explanation: Helps understand global and local scope.
 */
const school = 'UIT';
function greetAndIntroduce(name) {
  console.log(`Hello, ${name}!, I study at ${school}`);
}
greetAndIntroduce('Alice');

/**
 * 3. **Function to Square**:
    - Problem: Write a function that takes a number and returns its square.
    - Input: 4.
    - Output: 16.
    - Explanation: The function should multiply the number by itself.
 */
function square(number) {
  return number * number;
}
console.log(square(4));