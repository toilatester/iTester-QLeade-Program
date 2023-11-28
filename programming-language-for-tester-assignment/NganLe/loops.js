/**
 * Loops
 * 1. **For Loop Counter**
    - Write a for loop that counts from 1 to 5, logging each number to the console.
    - Example output: `1 2 3 4 5`
    - Explanation: Teaches the basic for loop structure.
 */
var str = "";
for(let i = 1; i <= 5; i++){
    str = str + ' ' + i;
}
console.log(str.trim());

/**
 * 2.  **While Loop Usage**
    - Use a while loop to decrement a variable from 5 to 1, logging each number.
    - Example output: `5 4 3 2 1`
    - Explanation: Demonstrates a while loop and decrementing.
 */
var str1 = "";
var count = 5;
while (count > 0){
    str1 = str1 + ' ' + count;
    count--;
}
console.log(str1.trim());

/**
 * 3.  **Loop Through Array**:
    - Problem: Use a loop to iterate through an array and print each element.
    - Input: ["apple", "banana", "cherry"].
    - Output: "apple" "banana" "cherry"
    - Explanation: Use any loop for iteration.
 */
function printEachElement(input){
    var str = "";
    for(let i = 0; i < input.length; i++){
        str = str + ' ' + '"' + input[i] + '"';
    }
    console.log(str.trim());
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
function sum(input){
    var sum = 0;
    for(let i = 0; i < input.length; i++){
        sum += input[i];
    }
    console.log(sum);
}
sum([1, 2, 3, 4, 5]);