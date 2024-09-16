// ## Intermediate Problems
// 1.  **Switch Statement**: so sánh giá trị biểu thức vs các giá trị của từng case. if khớp, thực thi code bên trong case x:
//     - Use a switch statement to log a greeting based on the current day of the week.
//     - Explanation: Teaches the switch case control structure.
let today = new Date().getDay();    
switch (today) {
        case 0:
            console.log("Hello, Sunday!");
            break;
        case 1:
            console.log("Hello, Monday!");
            break;
        case 2:
            console.log("Hello, Tuesday!");
            break;
        case 3:
            console.log("Hello, Wednesday!");
            break;
        case 4:
            console.log("Hello, Thursday!");
            break;
        case 5:
            console.log("Hello, Friday!");
            break;
        case 6:
            console.log("Hello, Saturday!");
            break;
        
    }

// 2.  **Ternary Operator**: là toán tử dkien, thực hiện khối code khác nhau dựa vào dkien đó
//     - Write a one-liner that uses the ternary operator to log "Yes" if a variable is true, and "No" if false.
//     - Explanation: Introduces the ternary operator for conditional expressions.
    let variable = true;
    console.log(variable ? "Yes" : "No");
   
// 3. **Function Returning a Function**: 1 hàm có thể trả về 1 hàm như là kq
//     - Write a function that returns another function which logs "Hello, World!".
//     - Explanation: Goes into higher-order functions and closures.
    function returnFunc(a) {
        return function(b){
            return a + b;
        }
    }
    const input_a = returnFunc("Hello, "); //gọi hàm tạo hàm với a = "Hello! " => kq: tạo hàm mới
    console.log(input_a("World!")); // gọi hàm mới với b = "World!" => kq: "Hello! World!"

// 4. **Callback Functions**: hàm đc truyền vào hàm #, để tạo ra hàm linh hoạt tái sd
//     - Write a function that takes a callback and calls it with a sample argument.
//     - Explanation: Teaches about callback functions and how they work.
    function calSquare(x, callback){ // là hàm nhận vào 1 số và 1 callback func
        return callback(x);
    }
    function Square(x) { //là callback func: nhận vào 1 số và trả về bình phương của số đó
        return x*x;

    }
    console.log(calSquare(5, Square)); //gọi calSquare, trong đó: truyền gtri x = 5 và callback Square (x*x)

// 5. **Array.filter Usage**
//     - Use `filter` to create a new array with elements that are numbers from the original array.
//     - Example input: `[1, 'a', 2]`
//     - Example output: `[1, 2]`
//     - Explanation: Introduces the `filter` method.
    const newArray = [1, "a", 2];
    const fil_arr = newArray.filter(element => typeof element === "number");
    console.log(fil_arr);

// 6. **Array.reduce Method**
//     - Use `reduce` to sum all the numbers in an array.
//     - Example input: `[1, 2, 3, 4]`
//     - Example output: `10`
//     - Explanation: Teaches the `reduce` method for arrays.
    const calArray = [1, 2, 3, 4];
    const sum_arr = calArray.reduce((num_be, num_af) => num_be + num_af);
    console.log(sum_arr);

// 7. **Creating and Using a Class**
//     - Create a class `Car` with properties like `model` and `year`, and a method that logs the model to the console.
//     - Explanation: Introduces classes and methods.
    class Car {
        constructor(model, year) {
            this.model = model;
            this.year = year;
        }
        logModel() {
            console.log(`This car's model: ${this.model}.`);
          }
    }
    const myCar = new Car("BMW", 2023);
    myCar.logModel();

// 8. **Error Handling with Try-Catch**
//     - Write a function that throws an error if the argument is not a number, otherwise, it logs the number.
//     - Explanation: Teaches error handling with try-catch blocks.
    function logNum(num){
        try {
            if (typeof num !== "number" ){
                throw new Error('The value must be a number!');
            }
            console.log("The number: ", num);
        }
        catch (error) {
            console.error("Error:", error.message);
        }
    }
    logNum(2112);
    logNum("Hieu");
    
// 9. **Destructuring Assignment**: là biểu thức, dùng trích các xuất các gtri/thuộc tính từ mảng/obj vào biến riêng => tạo gói dữ liệu
//     - Given an object, use destructuring to create variables for its properties.
//     - Explanation: Introduces destructuring assignment syntax.
    const Car_collection = {
        car1: "BMW",
        car2: "Audi",
        car3: "Lexus"
    }
    const {car1, car2, car3} = Car_collection;
    console.log(car2);

// 10. **Spread Operator**
//     - Use the spread operator to combine two arrays into one.
//     - Explanation: Teaches the use of the spread operator for arrays.
    const array_1 = [1, 2, 3, 4];
    const array_2 = [5, 6];
    const combine_arr = [...array_1, ...array_2];
    console.log(combine_arr);

// 11. **Rest Parameters**
//     - Write a function that takes an unlimited number of arguments and logs the total number of arguments passed.
//     - Explanation: Demonstrates the use of rest parameters in functions.
    function unlmt_args(...args) {
        console.log(args.length); // length: dùng để lấy số lượng tham số
    }
    unlmt_args(1, 2, 3, 4, "a");

// 12. **Default Parameters**: gán giá trị mặc định cho tham số, có thể thay đổi
//     - Write a function with default parameters and log the parameters to understand how they work.
//     - Explanation: Teaches how to set default parameter values.
    function def_para(x, y = 2) {
        return x + y;
    }
    console.log("Don't change the default parameters x + 2 =:", def_para(8));
    console.log("Update a new value for the default 6 + 8 =", def_para(6, 8));

// 13. **Template Literals**: cú pháp khai báo chỗi mới, cho phép ghép/cộng chuỗi
//     - Use template literals to log a personalized greeting.
//     - Explanation: Introduces template literals for string interpolation.
    const myName = "Duy Hieu"
    let message = `Hello, ${myName}! Welcome to America!`;
    console.log(message);

// 14. **Promises and Async/Await**
//     - Write a simple promise that resolves with "Success!" after 2 seconds, then log the result. Also, implement this using async/await.
//     - Explanation: Teaches about promises and the async/await syntax for asynchronous operations.
"XXXXXXXXXXXXXXXXXX"

// 15. **String Concatenation**
//    - Problem: Create a function that concatenates two strings with a space between them.
//    - Example Input: `('Hello', 'World')`
//    - Example Output: `Hello World`
//    - Explanation: The function joins two strings with a space.
    function spaceString(str1, str2) {
        return str1 + " " + str2;
    }
    let str1 = "Goodbye,";
    let str2 = "See you again!"
    let mess = spaceString(str1, str2); 
    console.log(mess);
// 16. **Array Sum**
//    - Problem: Write a function that sums all the numbers in an array.
//    - Example Input: `[1, 2, 3, 4]`
//    - Example Output: `10`
//    - Explanation: The function adds up all elements of the array to return 10.
    function sumArr(arr) {
        const sum = arr.reduce((be_num, af_num) => be_num + af_num);
        return sum;
    }
    const myArr = [1, 2, 3, 4];
    const result = sumArr(myArr);
    console.log(result);

// 17. **Find Maximum Value**
//    - Problem: Create a function that finds the maximum number in an array of numbers.
//    - Example Input: `[1, 3, 2]`
//    - Example Output: `3`
//    - Explanation: The function returns the highest number in the array.
    function findthebest(Barr) {
        const theBest = Math.max(...Barr);
        return theBest
    }
    const f_arr = [1, 2, 3];
    const numBest = findthebest(f_arr);
    console.log(numBest);

// 18. **Odd or Even**
//    - Problem: Write a function that checks if a number is odd or even.
//    - Example Input: `4`
//    - Example Output: `Even`
//    - Explanation: The function determines that 4 is even.
    function checkNum(iNum) {
        if (iNum % 2 === 0){
            console.log("Even");
        }
        else {
            console.log("Odd");
        }
    }
    checkNum(4);

// 19. **Factorial**
//    - Problem: Create a function that calculates the factorial of a number.
//    - Example Input: `5`
//    - Example Output: `120`
//    - Explanation: The function calculates 5! which equals 120.

// 20. **Palindrome Checker**
//    - Problem: Write a function that checks if a string is a palindrome.
//    - Example Input: `'racecar'`
//    - Example Output: `true`
//    - Explanation: The string is a palindrome because it reads the same backward as forward.

// 21. **Count Characters**
//     - Problem: Create a function that counts the number of occurrences of a character in a string.
//     - Example Input: `('hello', 'l')`
//     - Example Output: `2`
//     - Explanation: The letter 'l' appears twice in the word "hello".

// 22. **Convert Temperature**
//     - Problem: Write a function that converts Celsius to Fahrenheit.
//     - Example Input: `0`
//     - Example Output: `32`
//     - Explanation: The function converts 0°C to 32°F.

// 23. **Sort Array**
//     - Problem: Create a function that sorts an array of numbers in ascending order.
//     - Example Input: `[3, 1, 4, 1, 5]`
//     - Example Output: `[1, 1, 3, 4, 5]`
//     - Explanation: The function sorts the array elements from lowest to highest.

// 24. **Check Prime Number**
//     - Problem: Write a function to check if a number is a prime number.
//     - Example Input: `7`
//     - Example Output: `true`
//     - Explanation: The number 7 is prime because it has no divisors other than 1 and itself.

// 25. **Find Longest Word**
//     - Problem: Create a function that finds the longest word in a sentence.
//     - Example Input: `'JavaScript is awesome'`
//     - Example Output: `JavaScript`
//     - Explanation: "JavaScript" is the longest word in the input sentence.

// 26. **FizzBuzz**
//     - Problem: Write a function that prints 'Fizz' for numbers divisible by 3, 'Buzz' for numbers divisible by 5, and 'FizzBuzz' for numbers divisible by both 3 and 5, up to a given limit.
//     - Example Input: `15`
//     - Example Output: `1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`
//     - Explanation: The function prints a sequence based on divisibility.

// 27. **Reverse String**
//     - Problem: Create a function

//  that reverses a given string.
//     - Example Input: `'hello'`
//     - Example Output: `'olleh'`
//     - Explanation: The function returns the input string in reverse order.

// 28.  **Grocery List Manager**
//    - Problem: Write a JavaScript program that can add items to a grocery list, remove items, and display the list. Ensure that the list maintains unique items.
//    - Example Input: `add('apples'), remove('oranges'), display()`
//    - Example Output: `['apples']`
//    - Explanation: After adding 'apples' and attempting to remove 'oranges' which is not in the list, the display should show the current list containing only 'apples'.

// 29.  **Bank Account Object**
//    - Problem: Create a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Include methods for `deposit(amount)`, `withdraw(amount)`, and `getBalance()`.
//    - Example Input: `let account = new BankAccount('123456', 'John Doe', 1000), account.deposit(500), account.withdraw(200), account.getBalance()`
//    - Example Output: `1300`
//    - Explanation: The account starts with a balance of 1000. After depositing 500 and withdrawing 200, the balance is 1300.

// 30.  **Simple Interest Calculator**
//    - Problem: Write a function that calculates simple interest given the principal, rate of interest per year, and time in years.
//    - Example Input: `(1000, 5, 2)` // Principal = 1000, Rate = 5%, Time = 2 years
//    - Example Output: `100`
//    - Explanation: The simple interest for two years is calculated as `(1000 * 5 * 2) / 100`.

// 31.  **Event Scheduler**
//    - Problem: Create a JavaScript function that schedules an event after a given number of minutes. The function should take the event name and the minutes as arguments and then logs out a reminder message with the event name after the specified time.
//    - Example Input: `scheduleEvent('Doctor Appointment', 30)`
//    - Example Output: (After 30 minutes) `Reminder: You have a Doctor Appointment`
//    - Explanation: The function uses `setTimeout` to log a reminder to the console after a delay of 30 minutes.

// 32.  **Library Management System**
//    - Problem: Design a simple library management system with JavaScript objects where you can add books, remove books, and search for a book by title. Each book has a `title`, `author`, and `ISBN` number.
//    - Example Input: `addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'), searchBook('JavaScript: The Good Parts')`
//    - Example Output: `{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: '9780596517748' }`
//    - Explanation: The `addBook` function adds a new book to the system, and `searchBook` returns the details of the book if found.

// 33. **Write a JavaScript function filterActiveUsers that takes a JSON array of user objects and returns a new array containing only the objects where the isActive property is true.**
//     - Write a function to filter the list of active profile from the file "person.json" and create a new file "active_persons.json" to append all the active profile to that file

// 33. **Find the nearby country and city**
//     - Write a function to filter the nearby city in the file countries_with_cities.json. The nearby city is the country has a long value or lat value has distance is less than or equal 10
//     - Create a list of each group country has nearby 
//     - for example :
//     ```{
//             "country": "Algeria",
//             "city": "Algiers",
//             "geo": {
//             "lat": 36.72222791981175,
//             "long": 3.0234475145605
//             }
//         },
//           {
//             "country": "Afghanistan",
//             "city": "Kabul",
//             "geo": {
//             "lat": 34.5553,
//             "long": 69.2075
//             }
//         }
//     ``` 
//     The above country is neary becasue the lat value of algeria is 36.72222791981175 and the lat value of Afghanistan is 34.5553. The distance between to country is 36.72222791981175 - 34.5553 < 10

//     ```
//     {
//         "country": "Zambia",
//         "city": "Lusaka",
//         "geo": {
//         "lat": -15.453630341948767,
//         "long": 28.32388887816563
//         }
//     },
//     {
//         "country": "Zimbabwe",
//         "city": "Harare",
//         "geo": {
//         "lat": -17.72870261965665,
//         "long": 31.00387096064526
//         }
//     }
//     ```
    
//     The above country is neary becasue the long value of Zambia is 28.32388887816563 and the long value of Zimbabwe is 31.00387096064526. The distance between to country is 31.00387096064526 - 28.3238888781656 < 10