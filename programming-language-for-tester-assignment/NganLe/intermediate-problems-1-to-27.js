/**
 * ## Intermediate Problems
    1.  **Switch Statement**
    - Use a switch statement to log a greeting based on the current day of the week.
    - Explanation: Teaches the switch case control structure.
 */
let today = new Date().getDay();
let greeting;
switch (today) {
    case 0:
        greeting = 'Hello Sunday';
        break;
    case 1:
        greeting = 'Hello Monday';
        break;
    case 2:
        greeting = 'Hello Tuesday';
        break;
    case 3:
        greeting = 'Hello Wednesday';
        break;
    case 4:
        greeting = 'Hello Thursday';
        break;
    case 5:
        greeting = 'Hello Friday';
        break;
    case 6:
        greeting = 'Hello Saturday';
        break;
    default:
        greeting = 'Invalid day';
}
console.log(greeting);

/**
 * 2.  **Ternary Operator**
    - Write a one-liner that uses the ternary operator to log "Yes" if a variable is true, and "No" if false.
    - Explanation: Introduces the ternary operator for conditional expressions.
 */
function checkVar(variable) {
    return variable ? 'Yes' : 'No';
}
console.log(checkVar(true));

/**
 * 3. **Function Returning a Function**
    - Write a function that returns another function which logs "Hello, World!".
    - Explanation: Goes into higher-order functions and closures.
 */
function returnFunc() {
    return function () {
        console.log('Hello, World!');
    }
}
const sayHello = returnFunc();
sayHello();

/**
 * 4. **Callback Functions**
    - Write a function that takes a callback and calls it with a sample argument.
    - Explanation: Teaches about callback functions and how they work.
 */
function sum(a, b) {
    return a + b;
}
function calculate(a, b, sum) {
    return sum(a, b);
}
console.log(calculate(1, 2, sum));

/**
 * 5. **Array.filter Usage**
    - Use `filter` to create a new array with elements that are numbers from the original array.
    - Example input: `[1, 'a', 2]`
    - Example output: `[1, 2]`
    - Explanation: Introduces the `filter` method.
 */
function filterNumber(arr) {
    return arr.filter((value) => typeof value === 'number' && !isNaN(value));
}
console.log(filterNumber([1, 'a', 2]));

/**
 * 6. **Array.reduce Method**
    - Use `reduce` to sum all the numbers in an array.
    - Example input: `[1, 2, 3, 4]`
    - Example output: `10`
    - Explanation: Teaches the `reduce` method for arrays.
 */
function returnTotal(arr) {
    return arr.reduce((total, currentValue) => total + currentValue);
}
console.log(returnTotal([1, 2, 3, 4]));

/**
 * 7. **Creating and Using a Class**
    - Create a class `Car` with properties like `model` and `year`, and a method that logs the model to the console.
    - Explanation: Introduces classes and methods.

 */
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    logInfo() {
        console.log(`Info Car: Model-${this.model}, Year-${this.year}`);
    }
}
let car = new Car('CX5', 2022);
car.logInfo();

/**
 * 8. **Error Handling with Try-Catch**
    - Write a function that throws an error if the argument is not a number, otherwise, it logs the number.
    - Explanation: Teaches error handling with try-catch blocks.
 */
function throwError(value) {
    try {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error(`${value} is not a number`);
        }
        console.log(value);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}
throwError('a');

/**
 * 9. **Destructuring Assignment**
    - Given an object, use destructuring to create variables for its properties.
    - Explanation: Introduces destructuring assignment syntax.
 */
const user = {
    name: 'Na',
    age: 18
}
const { name, age } = user;
console.log(`Name: ${name} - Age: ${age}`);


/**
 * 10. **Spread Operator**
    - Use the spread operator to combine two arrays into one.
    - Explanation: Teaches the use of the spread operator for arrays.
 */
function combineArr(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(combineArr([1, 2, 3], [4, 5, 6]));

/**
 * 11. **Rest Parameters**
    - Write a function that takes an unlimited number of arguments and logs the total number of arguments passed.
    - Explanation: Demonstrates the use of rest parameters in functions.
 */
function totalNumberRest(...args) {
    return args.length;
}
console.log(totalNumberRest(1, 23, 3, 4, 5, 'a', { d: 1 }, NaN, true));

/**
 * 12. **Default Parameters**
    - Write a function with default parameters and log the parameters to understand how they work.
    - Explanation: Teaches how to set default parameter values.
 */
function sumDefaultParam(a = 1, b = 2) {
    return a + b;
}
console.log(sumDefaultParam(undefined, 20));

/**
 * 13. **Template Literals**
    - Use template literals to log a personalized greeting.
    - Explanation: Introduces template literals for string interpolation.
 */
const nickName = 'Na Na';
console.log(`Hello! My name is ${nickName}`);

/**
 * 14. **Promises and Async/Await**
    - Write a simple promise that resolves with "Success!" after 2 seconds, then log the result. Also, implement this using async/await.
    - Explanation: Teaches about promises and the async/await syntax for asynchronous operations.
 */
simplePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Success!');
    }, 2000);
})
simplePromise
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.error(error);
    });
async function useAsyncAwait() {
    try {
        const message = await new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve('Success!');
            }, 2000);
        })
        console.log(message);
    } catch (error) {
        console.error(error);
    }
}
useAsyncAwait()
/**
 * 15. **String Concatenation** 
   - Problem: Create a function that concatenates two strings with a space between them.
   - Example Input: `('Hello', 'World')`
   - Example Output: `Hello World`
   - Explanation: The function joins two strings with a space.
 */
function concatStr(str1, str2) {
    return str1.concat(' ', str2);
}
console.log(concatStr('Hello', 'World'));

/**
 * 16. **Array Sum**
   - Problem: Write a function that sums all the numbers in an array.
   - Example Input: `[1, 2, 3, 4]`
   - Example Output: `10`
   - Explanation: The function adds up all elements of the array to return 10.
 */
function sumArr(arr) {
    return arr.reduce((sum, currentValue) => sum + currentValue);
}
console.log(sumArr([1, 2, 3, 4]));

/**
 * 17. **Find Maximum Value**
   - Problem: Create a function that finds the maximum number in an array of numbers.
   - Example Input: `[1, 3, 2]`
   - Example Output: `3`
   - Explanation: The function returns the highest number in the array.
 */
//Co the dung cach nay:
// function findMax(arr){
//     return Math.max(...arr);
// }
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([1, 3, 2]));

/**
 * 18. **Odd or Even**
   - Problem: Write a function that checks if a number is odd or even.
   - Example Input: `4`
   - Example Output: `Even`
   - Explanation: The function determines that 4 is even.
 */
function checkOddEven(input) {
    if (typeof input !== 'number' || isNaN(input)) {
        return 'Invalid input';
    }
    if (input % 2 === 0) {
        return 'Even';
    }
    else return 'Odd';
}
console.log(checkOddEven(4));

/**
 * 19. **Factorial**
   - Problem: Create a function that calculates the factorial of a number.
   - Example Input: `5`
   - Example Output: `120`
   - Explanation: The function calculates 5! which equals 120.
 */
// Co the dung cach nay
// function factorial(number) {
//     if (number > 1) {
//         return number * factorial(number - 1);
//     }
//     return 1;
// }
function factorial(number) {
    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial(5));

/**
 * 20. **Palindrome Checker**
   - Problem: Write a function that checks if a string is a palindrome.
   - Example Input: `'racecar'`
   - Example Output: `true`
   - Explanation: The string is a palindrome because it reads the same backward as forward.
 */
function isPalindrome(str) {
    let re = /[^A-Za-z0–9]/g;
    str = str.toLowerCase().replace(re, '');
    let strSplit = str.split('');
    let reverseStr = strSplit.reverse().join('');
    return str === reverseStr;
}
console.log(isPalindrome('racecar'));

/**
 * 21. **Count Characters**
    - Problem: Create a function that counts the number of occurrences of a character in a string.
    - Example Input: `('hello', 'l')`
    - Example Output: `2`
    - Explanation: The letter 'l' appears twice in the word "hello".
 */
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) count++;
    }
    return count;
}
console.log(countChar('hello', 'l'));

/**
 * 22. **Convert Temperature**
    - Problem: Write a function that converts Celsius to Fahrenheit.
    - Example Input: `0`
    - Example Output: `32`
    - Explanation: The function converts 0°C to 32°F.
 */
function convertTemCToF(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(convertTemCToF(0));

/**
 * 23. **Sort Array**
    - Problem: Create a function that sorts an array of numbers in ascending order.
    - Example Input: `[3, 1, 4, 1, 5]`
    - Example Output: `[1, 1, 3, 4, 5]`
    - Explanation: The function sorts the array elements from lowest to highest.
 */
function sortAsc(arr) {
    return arr.sort();
}
console.log(sortAsc([3, 1, 4, 1, 5]));

/**
 * 24. **Check Prime Number**
    - Problem: Write a function to check if a number is a prime number.
    - Example Input: `7`
    - Example Output: `true`
    - Explanation: The number 7 is prime because it has no divisors other than 1 and itself.
 */
function checkPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
console.log(checkPrime(7));

/**
 * 25. **Find Longest Word**
    - Problem: Create a function that finds the longest word in a sentence.
    - Example Input: `'JavaScript is awesome'`
    - Example Output: `JavaScript`
    - Explanation: "JavaScript" is the longest word in the input sentence.
 */
function findLongestWord(sentence) {
    let sentenceArr = sentence.split(' ');
    let longestWord = sentenceArr[0];
    for (let i = 1; i < sentenceArr.length; i++) {
        if (sentenceArr[i].length > longestWord.length) {
            longestWord = sentenceArr[i];
        }
    }
    return longestWord;
}
console.log(findLongestWord('JavaScript is awesome'))

/**
 * 26. **FizzBuzz**
    - Problem: Write a function that prints 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5, and 'FizzBuzz' for numbers divisible by both 3 and 5, up to a given limit.
    - Example Input: `15`
    - Example Output: `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`
    - Explanation: The function prints a sequence based on divisibility.
 */
function replaceDivisible(number) {
    let outputStr = '';
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            outputStr += 'Fizz';
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            outputStr += 'Buzz';
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            outputStr += 'FizzBuzz';
        }
        else outputStr += i;
        if (i < number) outputStr += ', '
    }
    return outputStr;
}
console.log(replaceDivisible(15));

/**
 * 27. **Reverse String**
    - Problem: Create a function that reverses a given string.
    - Example Input: `'hello'`
    - Example Output: `'olleh'`
    - Explanation: The function returns the input string in reverse order.
 */
function reverseStr(str) {
    let strSplitToArr = str.split('');
    let reverseArr = strSplitToArr.reverse();
    let toStr = reverseArr.join('');
    return toStr;
}
console.log(reverseStr('hello'));