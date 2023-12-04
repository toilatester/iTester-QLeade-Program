/**
 * Arrays
 * 1. **Array Manipulation**
   - Given an array, write a function that returns the array in reverse order.
   - Example input: `[1, 2, 3]`
   - Example output: `[3, 2, 1]`
   - Explanation: Teaches array manipulation methods.
 */
function reverseOrder(array) {
  return array.reverse();
}
console.log('Ex1-----------')
console.log(reverseOrder([1, 2, 3]));

/**
 * 2.  **Accessing Array Elements**
    - Create an array of five numbers and log the third element.
    - Example output: `3` (if the array is `[1, 2, 3, 4, 5]`)
    - Explanation: Introduces indexing in arrays.
 */
const arr = [1, 2, 3, 4, 5];
console.log('Ex2-----------')
console.log(arr[2]);

/**
 * 3.  **Array Filtering**:
    - Problem: Use `.filter()` to create a new array that only contains numbers greater than 10.
    - Input: [5, 12, 18, 1, 24].
    - Output: [12, 18, 24].
    - Explanation: `.filter()` creates a new array with all elements that pass the test implemented by the provided function.
    array.filter(function(currentValue, index, arr), thisValue)
 */
function returnNumberGreaterThan10(arr) {
  return arr.filter(function (value) {
    return value > 10;
  })
}
console.log('Ex3-----------')
console.log(returnNumberGreaterThan10([5, 12, 18, 1, 24]));

/**
 * 4.  **Array Reduction**:
    - Problem: Use `.reduce()` to sum the values of an array.
    - Input: [1, 2, 3, 4, 5].
    - Output: 15.
    - Explanation: `.reduce()` applies a function against an accumulator and each element in the array to reduce it to a single value.
    array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
 */
function returnTotal(arr) {
  return arr.reduce(function (total, currentValue) {
    return total + currentValue;
  });
}
console.log('Ex4-----------')
console.log(returnTotal([1, 2, 3, 4, 5]));

/**
 * 5.  **Filter Array**
    - Problem: Create a function that filters out all values from an array that are less than a given value.
    - Example Input: `([1, 4, 6, 7, -3], 5)`
    - Example Output: `[6, 7]`
    - Explanation: The function returns an array with elements greater than 5.
 */
// function filterGreater(input, givenValue){
//   return input.filter((valueGreater) => valueGreater > givenValue);
// }
function filterGreater(input, givenValue) {
  return input.filter(function (valueGreater) {
    return valueGreater > givenValue;
  });
}
console.log('Ex5-----------')
console.log(filterGreater([1, 4, 6, 7, -3], 5));

/**
 * 6.  **Map Array**
    - Problem: Write a function that takes an array of numbers and returns a new array with each number squared.
    - Example Input: `[1, 2, 3]`
    - Example Output: `[1, 4, 9]`
    - Explanation: The function squares each element of the array.
    array.map(function(currentValue, index, arr), thisValue)
 */
function squaredArray(input) {
  return input.map((square) => square * square);
}
console.log('Ex6-----------')
console.log(squaredArray([1, 2, 3]));