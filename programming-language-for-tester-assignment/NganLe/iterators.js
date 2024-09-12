/**
 * Iterators
 * 1.  **Array.forEach Method**
    - Use `forEach` to log each element of an array.
    - Example input: `[ 'a', 'b', 'c' ]`
    - Example output: `a b c`
    - Explanation: Teaches the `forEach` method for arrays.
    array.forEach(function(currentValue, index, arr), thisValue)
 */
['a', 'b', 'c'].forEach((currentValue) => console.log(currentValue));

/**
 * 2.  **Array.map Usage**
    - Use `map` to create a new array that doubles each element in the original array.
    - Example input: `[1, 2, 3]`
    - Example output: `[2, 4, 6]`
    - Explanation: Introduces the `map` method.
 */
console.log([1, 2, 3].map((currentValue) => currentValue * 2));