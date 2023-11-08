1. **Hello, World!**
   - Problem: Write a JavaScript function that prints "Hello, World!" to the console.
   - Example Output: `Hello, World!`
   - Explanation: The output demonstrates how to print text to the console.

2. **Data Type Identification**
   - Problem: Create a function that takes an input and returns the type of the input (e.g., 'string', 'number', 'boolean').
   - Example Input: `true`
   - Example Output: `boolean`
   - Explanation: The output identifies the data type of the input value.

3. **Basic Arithmetic Calculator**
   - Problem: Write a function that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.
   - Example Input: `(5, 3, '+')`
   - Example Output: `8`
   - Explanation: The function adds 5 and 3 to return 8.

4. **String Concatenation**
   - Problem: Create a function that concatenates two strings with a space between them.
   - Example Input: `('Hello', 'World')`
   - Example Output: `Hello World`
   - Explanation: The function joins two strings with a space.

5. **Array Sum**
   - Problem: Write a function that sums all the numbers in an array.
   - Example Input: `[1, 2, 3, 4]`
   - Example Output: `10`
   - Explanation: The function adds up all elements of the array to return 10.

6. **Find Maximum Value**
   - Problem: Create a function that finds the maximum number in an array of numbers.
   - Example Input: `[1, 3, 2]`
   - Example Output: `3`
   - Explanation: The function returns the highest number in the array.

7. **Odd or Even**
   - Problem: Write a function that checks if a number is odd or even.
   - Example Input: `4`
   - Example Output: `Even`
   - Explanation: The function determines that 4 is even.

8. **Factorial**
   - Problem: Create a function that calculates the factorial of a number.
   - Example Input: `5`
   - Example Output: `120`
   - Explanation: The function calculates 5! which equals 120.

9. **Palindrome Checker**
   - Problem: Write a function that checks if a string is a palindrome.
   - Example Input: `'racecar'`
   - Example Output: `true`
   - Explanation: The string is a palindrome because it reads the same backward as forward.

10. **Count Characters**
    - Problem: Create a function that counts the number of occurrences of a character in a string.
    - Example Input: `('hello', 'l')`
    - Example Output: `2`
    - Explanation: The letter 'l' appears twice in the word "hello".

11. **Convert Temperature**
    - Problem: Write a function that converts Celsius to Fahrenheit.
    - Example Input: `0`
    - Example Output: `32`
    - Explanation: The function converts 0°C to 32°F.

12. **Sort Array**
    - Problem: Create a function that sorts an array of numbers in ascending order.
    - Example Input: `[3, 1, 4, 1, 5]`
    - Example Output: `[1, 1, 3, 4, 5]`
    - Explanation: The function sorts the array elements from lowest to highest.

13. **Check Prime Number**
    - Problem: Write a function to check if a number is a prime number.
    - Example Input: `7`
    - Example Output: `true`
    - Explanation: The number 7 is prime because it has no divisors other than 1 and itself.

14. **Find Longest Word**
    - Problem: Create a function that finds the longest word in a sentence.
    - Example Input: `'JavaScript is awesome'`
    - Example Output: `JavaScript`
    - Explanation: "JavaScript" is the longest word in the input sentence.

15. **FizzBuzz**
    - Problem: Write a function that prints 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5, and 'FizzBuzz' for numbers divisible by both 3 and 5, up to a given limit.
    - Example Input: `15`
    - Example Output: `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`
    - Explanation: The function prints a sequence based on divisibility.

16. **Reverse String**
    - Problem: Create a function

 that reverses a given string.
    - Example Input: `'hello'`
    - Example Output: `'olleh'`
    - Explanation: The function returns the input string in reverse order.

17. **Simple Object Manipulation**
    - Problem: Write a function that takes an object with a name and age property and returns a string stating the person's name and age.
    - Example Input: `{ name: 'Alice', age: 25 }`
    - Example Output: `'Alice is 25 years old.'`
    - Explanation: The function constructs a sentence from the object properties.

18. **Filter Array**
    - Problem: Create a function that filters out all values from an array that are less than a given value.
    - Example Input: `([1, 4, 6, 7, -3], 5)`
    - Example Output: `[6, 7]`
    - Explanation: The function returns an array with elements greater than 5.

19. **Map Array**
    - Problem: Write a function that takes an array of numbers and returns a new array with each number squared.
    - Example Input: `[1, 2, 3]`
    - Example Output: `[1, 4, 9]`
    - Explanation: The function squares each element of the array.

20. **Simple Class Creation**
    - Problem: Define a class `Car` with properties like `model` and `year`, and a method that prints out "I drive a `year` `model`".
    - Example Input: `let myCar = new Car('Toyota', 2021)`
    - Example Output: `'I drive a 2021 Toyota'`
    - Explanation: The `Car` class instance method outputs a string describing the car based on its properties.

21. **Grocery List Manager**
   - Problem: Write a JavaScript program that can add items to a grocery list, remove items, and display the list. Ensure that the list maintains unique items.
   - Example Input: `add('apples'), remove('oranges'), display()`
   - Example Output: `['apples']`
   - Explanation: After adding 'apples' and attempting to remove 'oranges' which is not in the list, the display should show the current list containing only 'apples'.

22. **Bank Account Object**
   - Problem: Create a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Include methods for `deposit(amount)`, `withdraw(amount)`, and `getBalance()`.
   - Example Input: `let account = new BankAccount('123456', 'John Doe', 1000), account.deposit(500), account.withdraw(200), account.getBalance()`
   - Example Output: `1300`
   - Explanation: The account starts with a balance of 1000. After depositing 500 and withdrawing 200, the balance is 1300.

23. **Simple Interest Calculator**
   - Problem: Write a function that calculates simple interest given the principal, rate of interest per year, and time in years.
   - Example Input: `(1000, 5, 2)` // Principal = 1000, Rate = 5%, Time = 2 years
   - Example Output: `100`
   - Explanation: The simple interest for two years is calculated as `(1000 * 5 * 2) / 100`.

24. **Event Scheduler**
   - Problem: Create a JavaScript function that schedules an event after a given number of minutes. The function should take the event name and the minutes as arguments and then logs out a reminder message with the event name after the specified time.
   - Example Input: `scheduleEvent('Doctor Appointment', 30)`
   - Example Output: (After 30 minutes) `Reminder: You have a Doctor Appointment`
   - Explanation: The function uses `setTimeout` to log a reminder to the console after a delay of 30 minutes.

25. **Library Management System**
   - Problem: Design a simple library management system with JavaScript objects where you can add books, remove books, and search for a book by title. Each book has a `title`, `author`, and `ISBN` number.
   - Example Input: `addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'), searchBook('JavaScript: The Good Parts')`
   - Example Output: `{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: '9780596517748' }`
   - Explanation: The `addBook` function adds a new book to the system, and `searchBook` returns the details of the book if found.