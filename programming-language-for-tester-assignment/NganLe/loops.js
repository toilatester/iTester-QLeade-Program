/**
 * Loops
 * 1. **For Loop Counter**
    - Write a for loop that counts from 1 to 5, logging each number to the console.
    - Example output: `1 2 3 4 5`
    - Explanation: Teaches the basic for loop structure.
 */
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/**
 * 2.  **While Loop Usage**
    - Use a while loop to decrement a variable from 5 to 1, logging each number.
    - Example output: `5 4 3 2 1`
    - Explanation: Demonstrates a while loop and decrementing.
 */
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}

/**
 * 3.  **Loop Through Array**:
    - Problem: Use a loop to iterate through an array and print each element.
    - Input: ["apple", "banana", "cherry"].
    - Output: "apple" "banana" "cherry"
    - Explanation: Use any loop for iteration.
 */
function printEachElement(array) {
    arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        console.log(array[i]);
    }
}
//Cách này cũng trả về chuỗi element nhưng lại không có dấu ""
// function printEachElement(input){
//     console.log(input.join(' '));
// }
printEachElement(["apple", "banana", "cherry"]);

/**
 * 4.  **Find the Sum Using Loop**:
    - Problem: Calculate the sum of numbers in an array using a loop.
    - Input: [1, 2, 3, 4, 5].
    - Output: 15.
    - Explanation: Iterate through the array and sum the elements.
 */
function sum(array) {
    var sum = 0;
    arrLength = array.length;
    for (let i = 0; i < arrLength; i++) {
        sum += array[i];
    }
    console.log(sum);
}
sum([1, 2, 3, 4, 5]);