# Assignment to practice learning JavaScript
## Syntax and Data Types
1. **Hello, World!**
   - Write a JavaScript program that prints "Hello, World!" to the console.
   - Example output: `Hello, World!`
   - Explanation: This problem helps understand the basic syntax of console output.

2. **Variable Declaration**
   - Declare a variable `name` and assign it your name as a string.
   - Example output: `John`
   - Explanation: Demonstrates variable declaration and string data type.

3. **Math Operations**
   - Calculate and log the result of 7 added to 3, then multiplied by 2.
   - Example output: `20`
   - Explanation: Shows the order of arithmetic operations.

4. **Type Conversion**
   - Convert the string "123" to an integer and add 7 to it.
   - Example output: `130`
   - Explanation: Introduces type conversion from string to integer.

## Conditionals
1. **Basic If Statement**
   - Write a program that checks if a number stored in a variable is greater than 10. If so, log "Greater than 10".
   - Example output: `Greater than 10` (if the number is 12)
   - Explanation: Teaches the if statement and comparison.

2. **If-Else Condition**
   - Given a variable `age`, log "Adult" if `age` is 18 or more, otherwise log "Minor".
   - Example output: `Adult` (if age is 18)
   - Explanation: Introduces the if-else statement.

## Functions and Scope
1. **Writing a Function**
   - Create a function `greet` that takes a name as an argument and logs "Hello, [name]!".
   - Example input: `greet("Alice")`
   - Example output: `Hello, Alice!`
   - Explanation: Demonstrates function creation and argument passing.

2. **Scope Understanding**
   - Define a variable outside of a function and try to log it inside the function.
   - Explanation: Helps understand global and local scope.
  
3. **Function to Square**:
    - Problem: Write a function that takes a number and returns its square.
    - Input: 4.
    - Output: 16.
    - Explanation: The function should multiply the number by itself.
  
## Arrays
1. **Array Manipulation**
   - Given an array, write a function that returns the array in reverse order.
   - Example input: `[1, 2, 3]`
   - Example output: `[3, 2, 1]`
   - Explanation: Teaches array manipulation methods.

2.  **Accessing Array Elements**
    - Create an array of five numbers and log the third element.
    - Example output: `3` (if the array is `[1, 2, 3, 4, 5]`)
    - Explanation: Introduces indexing in arrays.

3.  **Array Filtering**:
    - Problem: Use `.filter()` to create a new array that only contains numbers greater than 10.
    - Input: [5, 12, 18, 1, 24].
    - Output: [12, 18, 24].
    - Explanation: `.filter()` creates a new array with all elements that pass the test implemented by the provided function.

4.  **Array Reduction**:
    - Problem: Use `.reduce()` to sum the values of an array.
    - Input: [1, 2, 3, 4, 5].
    - Output: 15.
    - Explanation: `.reduce()` applies a function against an accumulator and each element in the array to reduce it to a single value.
  
5.  **Filter Array**
    - Problem: Create a function that filters out all values from an array that are less than a given value.
    - Example Input: `([1, 4, 6, 7, -3], 5)`
    - Example Output: `[6, 7]`
    - Explanation: The function returns an array with elements greater than 5.

6.  **Map Array**
    - Problem: Write a function that takes an array of numbers and returns a new array with each number squared.
    - Example Input: `[1, 2, 3]`
    - Example Output: `[1, 4, 9]`
    - Explanation: The function squares each element of the array.
  
## Loops
1. **For Loop Counter**
    - Write a for loop that counts from 1 to 5, logging each number to the console.
    - Example output: `1 2 3 4 5`
    - Explanation: Teaches the basic for loop structure.

2.  **While Loop Usage**
    - Use a while loop to decrement a variable from 5 to 1, logging each number.
    - Example output: `5 4 3 2 1`
    - Explanation: Demonstrates a while loop and decrementing.

3.  **Loop Through Array**:
    - Problem: Use a loop to iterate through an array and print each element.
    - Input: ["apple", "banana", "cherry"].
    - Output: "apple" "banana" "cherry"
    - Explanation: Use any loop for iteration.

4.  **Find the Sum Using Loop**:
    - Problem: Calculate the sum of numbers in an array using a loop.
    - Input: [1, 2, 3, 4, 5].
    - Output: 15.
    - Explanation: Iterate through the array and sum the elements.
  
## Iterators
1.  **Array.forEach Method**
    - Use `forEach` to log each element of an array.
    - Example input: `[ 'a', 'b', 'c' ]`
    - Example output: `a b c`
    - Explanation: Teaches the `forEach` method for arrays.

2.  **Array.map Usage**
    - Use `map` to create a new array that doubles each element in the original array.
    - Example input: `[1, 2, 3]`
    - Example output: `[2, 4, 6]`
    - Explanation: Introduces the `map` method.

## Objects and OOP Concept
1.  **Object Properties**:
    - Problem: Create an object representing a car with properties like make, model, and color. Then change the color property.
    - Input: { make: 'Toyota', model: 'Corolla', color: 'white' }.
    - Output: { make: 'Toyota', model: 'Corolla', color: 'red' }.
    - Explanation: Show how to access and change object properties.
  
2.  **Object Properties**
    - Create an object representing a person with properties for name and age. Log the name.
    - Example output: `John` (if the object is `{ name: "John", age: 30 }`)
    - Explanation: Teaches object creation and property access.

3.  **Inheritance**:
    - Problem: Create a class `Square` that inherits from `Rectangle` and uses its constructor to set both width and height.
    - Input: Square(5).
    - Output: 25.
    - Explanation: Demonstrate how inheritance works in JavaScript.

4.  **Encapsulation**:
    - Problem: Create a class with private properties and provide a public method to access them.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Use closures or the new `#` syntax for private fields.

5.  **Polymorphism**:
    - Problem: Override a method in a subclass to provide different functionality from the parent class.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Show how the same method name can do different things in different classes.

6.  **Abstract Class**:

    - Problem: Create an abstract class `Shape` with an abstract method `calculateArea` and extend it in subclasses.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Explain that JavaScript does not have native abstract classes but can be simulated.

7.  **Dynamic Object Keys**:
    - Problem: Use a variable as a key name in an object literal.
    - Input: 'color', 'blue'.
    - Output: { color: 'blue' }.
    - Explanation: Show bracket notation for dynamic keys.

8.  **Nested Objects**
    - Given an object with a nested object as a property, access a property of the nested object.
    - Explanation: Demonstrates accessing properties in nested objects.

9.  **Class Definition**:
    - Problem: Define a class to represent a rectangle with properties for width and height and a method to calculate the area.
    - Input: Rectangle(3, 4).
    - Output: 12.
    - Explanation: Class instantiation and method usage should be demonstrated.

10.  **Template Literals**:
    - Problem: Use template literals to concatenate strings with variables.
    - Input: 'world'.
    - Output: "Hello, world!"
    - Explanation: Demonstrate the use of backticks and `${}` syntax.

11.  **Destructuring Assignment**:
    - Problem: Use destructuring to extract values from an array or object.
    - Input: { x: 3, y: 4 }.
    - Output: 3, 4.
    - Explanation: Show how to unpack values from objects.

12.  **Spread Operator**:
    - Problem: Use the spread operator to merge two arrays.
    - Input: [1, 2], [3, 4].
    - Output: [1, 2, 3, 4].
    - Explanation: Show how `...` can expand an array into another.

13.  **Rest Parameters**:
    - Problem: Create a function that takes a variable number of arguments and prints them.
    - Input: 'a', 'b', 'c'.
    - Output: 'a', 'b', 'c'.
    - Explanation: Use `...` to gather all arguments into an array.


## Intermediate Problems
1.  **Switch Statement**
    - Use a switch statement to log a greeting based on the current day of the week.
    - Explanation: Teaches the switch case control structure.

2.  **Ternary Operator**
    - Write a one-liner that uses the ternary operator to log "Yes" if a variable is true, and "No" if false.
    - Explanation: Introduces the ternary operator for conditional expressions.

3. **Function Returning a Function**
    - Write a function that returns another function which logs "Hello, World!".
    - Explanation: Goes into higher-order functions and closures.

4. **Callback Functions**
    - Write a function that takes a callback and calls it with a sample argument.
    - Explanation: Teaches about callback functions and how they work.

5. **Array.filter Usage**
    - Use `filter` to create a new array with elements that are numbers from the original array.
    - Example input: `[1, 'a', 2]`
    - Example output: `[1, 2]`
    - Explanation: Introduces the `filter` method.

6. **Array.reduce Method**
    - Use `reduce` to sum all the numbers in an array.
    - Example input: `[1, 2, 3, 4]`
    - Example output: `10`
    - Explanation: Teaches the `reduce` method for arrays.

7. **Creating and Using a Class**
    - Create a class `Car` with properties like `model` and `year`, and a method that logs the model to the console.
    - Explanation: Introduces classes and methods.

8. **Error Handling with Try-Catch**
    - Write a function that throws an error if the argument is not a number, otherwise, it logs the number.
    - Explanation: Teaches error handling with try-catch blocks.

9. **Destructuring Assignment**
    - Given an object, use destructuring to create variables for its properties.
    - Explanation: Introduces destructuring assignment syntax.

10. **Spread Operator**
    - Use the spread operator to combine two arrays into one.
    - Explanation: Teaches the use of the spread operator for arrays.

11. **Rest Parameters**
    - Write a function that takes an unlimited number of arguments and logs the total number of arguments passed.
    - Explanation: Demonstrates the use of rest parameters in functions.

12. **Default Parameters**
    - Write a function with default parameters and log the parameters to understand how they work.
    - Explanation: Teaches how to set default parameter values.

13. **Template Literals**
    - Use template literals to log a personalized greeting.
    - Explanation: Introduces template literals for string interpolation.

14. **Promises and Async/Await**
    - Write a simple promise that resolves with "Success!" after 2 seconds, then log the result. Also, implement this using async/await.
    - Explanation: Teaches about promises and the async/await syntax for asynchronous operations.

15. **String Concatenation**
   - Problem: Create a function that concatenates two strings with a space between them.
   - Example Input: `('Hello', 'World')`
   - Example Output: `Hello World`
   - Explanation: The function joins two strings with a space.

16. **Array Sum**
   - Problem: Write a function that sums all the numbers in an array.
   - Example Input: `[1, 2, 3, 4]`
   - Example Output: `10`
   - Explanation: The function adds up all elements of the array to return 10.

17. **Find Maximum Value**
   - Problem: Create a function that finds the maximum number in an array of numbers.
   - Example Input: `[1, 3, 2]`
   - Example Output: `3`
   - Explanation: The function returns the highest number in the array.

18. **Odd or Even**
   - Problem: Write a function that checks if a number is odd or even.
   - Example Input: `4`
   - Example Output: `Even`
   - Explanation: The function determines that 4 is even.

19. **Factorial**
   - Problem: Create a function that calculates the factorial of a number.
   - Example Input: `5`
   - Example Output: `120`
   - Explanation: The function calculates 5! which equals 120.

20. **Palindrome Checker**
   - Problem: Write a function that checks if a string is a palindrome.
   - Example Input: `'racecar'`
   - Example Output: `true`
   - Explanation: The string is a palindrome because it reads the same backward as forward.

21. **Count Characters**
    - Problem: Create a function that counts the number of occurrences of a character in a string.
    - Example Input: `('hello', 'l')`
    - Example Output: `2`
    - Explanation: The letter 'l' appears twice in the word "hello".

22. **Convert Temperature**
    - Problem: Write a function that converts Celsius to Fahrenheit.
    - Example Input: `0`
    - Example Output: `32`
    - Explanation: The function converts 0°C to 32°F.

23. **Sort Array**
    - Problem: Create a function that sorts an array of numbers in ascending order.
    - Example Input: `[3, 1, 4, 1, 5]`
    - Example Output: `[1, 1, 3, 4, 5]`
    - Explanation: The function sorts the array elements from lowest to highest.

24. **Check Prime Number**
    - Problem: Write a function to check if a number is a prime number.
    - Example Input: `7`
    - Example Output: `true`
    - Explanation: The number 7 is prime because it has no divisors other than 1 and itself.

25. **Find Longest Word**
    - Problem: Create a function that finds the longest word in a sentence.
    - Example Input: `'JavaScript is awesome'`
    - Example Output: `JavaScript`
    - Explanation: "JavaScript" is the longest word in the input sentence.

26. **FizzBuzz**
    - Problem: Write a function that prints 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5, and 'FizzBuzz' for numbers divisible by both 3 and 5, up to a given limit.
    - Example Input: `15`
    - Example Output: `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`
    - Explanation: The function prints a sequence based on divisibility.

27. **Reverse String**
    - Problem: Create a function that reverses a given string.
    - Example Input: `'hello'`
    - Example Output: `'olleh'`
    - Explanation: The function returns the input string in reverse order.

28.  **Grocery List Manager**
   - Problem: Write a JavaScript program that can add items to a grocery list, remove items, and display the list. Ensure that the list maintains unique items.
   - Example Input: `add('apples'), remove('oranges'), display()`
   - Example Output: `['apples']`
   - Explanation: After adding 'apples' and attempting to remove 'oranges' which is not in the list, the display should show the current list containing only 'apples'.

29.  **Bank Account Object**
   - Problem: Create a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Include methods for `deposit(amount)`, `withdraw(amount)`, and `getBalance()`.
   - Example Input: `let account = new BankAccount('123456', 'John Doe', 1000), account.deposit(500), account.withdraw(200), account.getBalance()`
   - Example Output: `1300`
   - Explanation: The account starts with a balance of 1000. After depositing 500 and withdrawing 200, the balance is 1300.

30.  **Simple Interest Calculator**
   - Problem: Write a function that calculates simple interest given the principal, rate of interest per year, and time in years.
   - Example Input: `(1000, 5, 2)` // Principal = 1000, Rate = 5%, Time = 2 years
   - Example Output: `100`
   - Explanation: The simple interest for two years is calculated as `(1000 * 5 * 2) / 100`.

31.  **Event Scheduler**
   - Problem: Create a JavaScript function that schedules an event after a given number of minutes. The function should take the event name and the minutes as arguments and then logs out a reminder message with the event name after the specified time.
   - Example Input: `scheduleEvent('Doctor Appointment', 30)`
   - Example Output: (After 30 minutes) `Reminder: You have a Doctor Appointment`
   - Explanation: The function uses `setTimeout` to log a reminder to the console after a delay of 30 minutes.

32.  **Library Management System**
   - Problem: Design a simple library management system with JavaScript objects where you can add books, remove books, and search for a book by title. Each book has a `title`, `author`, and `ISBN` number.
   - Example Input: `addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'), searchBook('JavaScript: The Good Parts')`
   - Example Output: `{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: '9780596517748' }`
   - Explanation: The `addBook` function adds a new book to the system, and `searchBook` returns the details of the book if found.

33. **Write a JavaScript function filterActiveUsers that takes a JSON array of user objects and returns a new array containing only the objects where the isActive property is true.**
    - Write a function to filter the list of active profile from the file "person.json" and create a new file "active_persons.json" to append all the active profile to that file

33. **Find the nearby country and city**
    - Write a function to filter the nearby city in the file countries_with_cities.json. The nearby city is the country has a long value or lat value has distance is less than or equal 10
    - Create a list of each group country has nearby 
    - for example :
    ```{
            "country": "Algeria",
            "city": "Algiers",
            "geo": {
            "lat": 36.72222791981175,
            "long": 3.0234475145605
            }
        },
          {
            "country": "Afghanistan",
            "city": "Kabul",
            "geo": {
            "lat": 34.5553,
            "long": 69.2075
            }
        }
    ``` 
    The above country is neary becasue the lat value of algeria is 36.72222791981175 and the lat value of Afghanistan is 34.5553. The distance between to country is 36.72222791981175 - 34.5553 < 10

    ```
    {
        "country": "Zambia",
        "city": "Lusaka",
        "geo": {
        "lat": -15.453630341948767,
        "long": 28.32388887816563
        }
    },
    {
        "country": "Zimbabwe",
        "city": "Harare",
        "geo": {
        "lat": -17.72870261965665,
        "long": 31.00387096064526
        }
    }
    ```
    
    The above country is neary becasue the long value of Zambia is 28.32388887816563 and the long value of Zimbabwe is 31.00387096064526. The distance between to country is 31.00387096064526 - 28.3238888781656 < 10

## Asynchronous Problems

### JavaScript Exercise: Weather Service with Different REST Clients

#### Background
You need to fetch weather data using the OpenWeatherMap One Call API (https://openweathermap.org/api/one-call-3) in a Node.js environment. This exercise focuses on using different REST client libraries to handle asynchronous requests using callbacks, promises, and async/await.

#### Task
1. **Setup**
   - Create a Node.js project.
   - Install the required libraries:
     - `npm install axios` for Promises.
     - `npm install request` for Callbacks (Note: As of my last update, 'request' is deprecated, but still useful for educational purposes).
     - `npm install node-fetch` for Async/Await.

2. **API Key**
   - Register on OpenWeatherMap and obtain an API key.

3. **Asynchronous Requests Using Different Libraries**
   - **Part 1: Callbacks with `request`**
     - Create a function `fetchWeatherWithRequest(lat, lon, callback)` that makes an HTTP request using the `request` library.
     - Handle the asynchronous operation using the traditional callback pattern.

   - **Part 2: Promises with `axios`**
     - Create a function `fetchWeatherWithAxios(lat, lon)` that returns a promise.
     - Utilize `axios` to make the HTTP request.
     - Use `.then()` and `.catch()` for handling the promise.

   - **Part 3: Async/Await with `node-fetch`**
     - Create an `async` function `fetchWeatherWithFetch(lat, lon)` for the task.
     - Use `node-fetch` for making the HTTP request.
     - Employ `try...catch` for error handling.

4. **Testing**
   - Test each function with the same set of latitude and longitude coordinates.
   - Console log the results or errors for each approach.

5. **Comparison**
   - Write a brief comparison of your experience using the different libraries and asynchronous patterns.

#### Deliverables
- A JavaScript file containing all three functions, each utilizing a different library.
- A text file with your insights and comparison of the different libraries and asynchronous handling techniques.

#### Notes
- Properly handle errors in each method.
- Comment your code for better understanding.

#### Bonus Challenge
- Extend the exercise by integrating a feature to format the date and time from the Unix timestamp provided by the API response.
