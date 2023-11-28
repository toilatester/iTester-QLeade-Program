//1. Switch Statement
const today = new Date().getDay();
let buaNay = "";

switch (today) {
  case 0:
    buaNay = "Sunday";
    break;
  case 1:
    buaNay = "Monday";
    break;
  case 2:
    buaNay = "Tuesday";
    break;
  case 3:
    buaNay = "Wednesday";
    break;
  case 4:
    buaNay = "Thursday";
    break;
  case 5:
    buaNay = "Friday";
    break;
  case 6:
    buaNay = "Saturday";
    break;
  default:
    buaNay = "Error: Invalid day!";
}
console.log("1. Today is:",buaNay);

//2.  Ternary Operator
const isTrue = true;
console.log("2. Result:",isTrue ? "Yes" : "No");

//3. Function Returning a Function
function newHelloWorldLogger() {
    return function() {
      console.log("3. Hello, World!");
    };
  }
  const helloWorldLogger = newHelloWorldLogger();
  helloWorldLogger();
  
//4. Callback Functions
function createMultiplier(x) {
    return function(y) {
       return x * y;
    };
 }
 
 let double = createMultiplier(2);
 console.log("4. Result callback functions:",double(5));

 //5. Array.filter Usage
const inputArray = [1, "a", 2];
const outputArray = inputArray.filter(item => typeof item === "number");
console.log("5. Output Array:",outputArray);

//6. Array.reduce Method
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("6. Result:",sum);

//7. Creating and Using a Class
class Car {
    constructor(model, year) {
      this.model = model;
      this.year = year;
    }
    displayModel() {
      console.log(`The car model is ${this.model}`);
    }
  }
  
  const myCar = new Car("Tesla", 2022);
  console.log("7. Name car:", myCar.model);
  myCar.displayModel();
  
//8. Error Handling with Try-Catch
function processNumber(input) {
    try {
      if (typeof input !== "number" || isNaN(input)) {
        throw new Error("Input is not a valid number.");
      } else {
        console.log("The number is:", input);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
  processNumber(10);
  processNumber("Hello");
  
//9. Destructuring Assignment
  const aboutMe = {
    name: "Nhut",
    age: 16,
    country: "Vn"
  };
  const {name, age, country} = aboutMe;
  console.log(name);
  console.log("9. Information:",aboutMe)
  
//10. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log("10. Spread operator for arrays:",combinedArray);

//11. 
function countArguments(...args) {
    console.log(`Total number of arguments passed: ${args.length}`);
  }
  countArguments();
  countArguments(1, 2);
  countArguments("a", true, 5, "hello");

//14. Promises and Async/Await
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise Success!");
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result);
  });
  
  async function myAsyncFunction() {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Async Success!");
      }, 2000);
    });
    console.log(result);
  }
  myAsyncFunction();
  
//15. String Concatenation
function concatenateStrings(str1, str2) {
    return `${str1} ${str2}`;
  }
  const result = concatenateStrings("Hello", "World");
  console.log("15. Print text:", result);
  
//16.
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
  }
  const arrayInput = [1, 2, 3, 4];
  const arrayOutput = sumArray(arrayInput);
  console.log("16. Result:", arrayOutput); // Output: 10

//17.
function findNumberMax(numbers) {
    return Math.max(...numbers);
  }
  const input = [1, 3, 2];
  const maxNumber = findNumberMax(input);
  console.log("17. Max number is:", maxNumber);

//18. Odd or Even
function checkOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  const inputNumber = 5;
  const resultCheck = checkOddOrEven(inputNumber);
  console.log("18.", `${inputNumber}`, "is", resultCheck);

//19. Factorial
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
  const inputValue = 5;
  const outputValue = calculateFactorial(inputValue);
  console.log("19. Factorial of",`${inputValue}`, "is", outputValue);

//20. Palindrome Checker
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  const inputStringValid = "aabaa";
  const inputStringInvalid = "mirotic";
  const outputStringValid = isPalindrome(inputStringValid);
  const outputStringInvalid = isPalindrome(inputStringInvalid);
  console.log("20.1:", outputStringValid);
  console.log("20.2:", outputStringInvalid);

//21. Count Characters
function countOccurrences(str, char) {
    const regex = new RegExp(char, "g");
    const matches = str.match(regex);
    return matches ? matches.length : 0;
  }
  const inputString = "hello";
  const characterToCount = "l";
  const outputString = countOccurrences(inputString, characterToCount);
  console.log("21. Count character:", outputString);
  
//22. Convert Temperature
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  const celsiusValue = 0;
  const resultTemperature = celsiusToFahrenheit(celsiusValue);
  console.log("22. Temperature:", resultTemperature, "độ F");

//23. Sort Array
function sortNumbersAscending(numbers) {
    return numbers.slice().sort((a, b) => a - b);
  }
  const inputArrayy = [3, 1, 4, 1, 5];
  const sortedArray = sortNumbersAscending(inputArrayy);
  console.log("23. Array after sort:", sortedArray);

//24. Check Prime Number
function isPrime(number) {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  const inputValueNumber = 7;
  const outputValueNumber = isPrime(inputValueNumber);
  console.log("24.",outputValueNumber,"---", `${inputValueNumber}`, "is a Prime Number ---");
  
//25. Find Longest Word
function findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  const inputSentence = "JavaScript is awesome";
  const outputSentence = findLongestWord(inputSentence);
  console.log("25. Longest Word is:", outputSentence);

//26. FizzBuzz
function fizzBuzz(limit) {
    let result = "";
  
    for (let i = 1; i <= limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += "FizzBuzz";
      } else if (i % 3 === 0) {
        result += "Fizz";
      } else if (i % 5 === 0) {
        result += "Buzz";
      } else {
        result += i;
      }
  
      if (i !== limit) {
        result += ", ";
      }
    }
  
    return result;
  }
  
  const limit = 15;
  const output = fizzBuzz(limit);
  console.log("26. Result:",output);

//27. Reverse String
function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const inputStringValue = "hello";
  const reversedString = reverseString(inputStringValue);
  console.log(`27. String ${inputStringValue} after reversed is:`,reversedString); // Output: "olleh"
  
//28. Grocery List Manager
const groceryList = [];

function add(item) {
  if (!groceryList.includes(item)) {
    groceryList.push(item);
    console.log(`Added ${item} to the list.`);
  } else {
    console.log(`${item} is already in the list.`);
  }
}

function remove(item) {
  const index = groceryList.indexOf(item);
  if (index !== -1) {
    groceryList.splice(index, 1);
    console.log(`Removed ${item} from the list.`);
  } else {
    console.log(`${item} is not in the list.`);
  }
}

function display() {
  console.log("28. Current Grocery List:", groceryList);
}

add("apples");
remove("oranges");
display();

