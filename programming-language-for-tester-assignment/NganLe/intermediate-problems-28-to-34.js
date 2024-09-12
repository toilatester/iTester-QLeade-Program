/**
 * 28.  **Grocery List Manager**
   - Problem: Write a JavaScript program that can add items to a grocery list, remove items, and display the list. Ensure that the list maintains unique items.
   - Example Input: `add('apples'), remove('oranges'), display()`
   - Example Output: `['apples']`
   - Explanation: After adding 'apples' and attempting to remove 'oranges' which is not in the list, the display should show the current list containing only 'apples'.
 */
var grocery = [];
function add(item) {
    return grocery.push(item);
}
function remove(item) {
    const index = grocery.indexOf(item);
    if (index != -1) {
        grocery.splice(index, 1);
    }
}
function display() {
    console.log(grocery);
}
add('apples');
remove('oranges');
display();

/**
 * 29.  **Bank Account Object**
   - Problem: Create a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Include methods for `deposit(amount)`, `withdraw(amount)`, and `getBalance()`.
   - Example Input: `let account = new BankAccount('123456', 'John Doe', 1000), account.deposit(500), account.withdraw(200), account.getBalance()`
   - Example Output: `1300`
   - Explanation: The account starts with a balance of 1000. After depositing 500 and withdrawing 200, the balance is 1300.
 */
class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else console.log('Invalid amount')
    }
    withdraw(amount) {
        if (amount > 0 && this.balance > amount) {
            this.balance -= amount;
        }
        else console.log('invalid amount/balance is not enough')
    }
    getBalance() {
        console.log(this.balance);
    }
}
let account = new BankAccount('123456', 'John Doe', 1000);
account.deposit(500);
account.withdraw(200);
account.getBalance();

/**
 * 30.  **Simple Interest Calculator**
   - Problem: Write a function that calculates simple interest given the principal, rate of interest per year, and time in years.
   - Example Input: `(1000, 5, 2)` // Principal = 1000, Rate = 5%, Time = 2 years
   - Example Output: `100`
   - Explanation: The simple interest for two years is calculated as `(1000 * 5 * 2) / 100`.
 */
function calculateSimpleInterest(principal, rate, time) {
    if (principal > 0 && rate > 0 && time > 0) {
        return (principal * rate * time) / 100;
    } else {
        return 'Invalid info';
    }
}
console.log(calculateSimpleInterest(1000, 5, 2));

/**
 * 31.  **Event Scheduler**
   - Problem: Create a JavaScript function that schedules an event after a given number of minutes. The function should take the event name and the minutes as arguments and then logs out a reminder message with the event name after the specified time.
   - Example Input: `scheduleEvent('Doctor Appointment', 30)`
   - Example Output: (After 30 minutes) `Reminder: You have a Doctor Appointment`
   - Explanation: The function uses `setTimeout` to log a reminder to the console after a delay of 30 minutes.
 */
function scheduleEvent(eventName, minutes) {
    if (minutes < 0) {
        console.log('invalid time');
        return;
    }
    let ms = minutes * 60 * 1000;
    setTimeout(() => {
        console.log(`Reminder: You have a ${eventName}`);
    }, ms);
}
scheduleEvent('Doctor Appointment', 1);

/**
 * 32.  **Library Management System**
   - Problem: Design a simple library management system with JavaScript objects where you can add books, remove books, and search for a book by title. Each book has a `title`, `author`, and `ISBN` number.
   - Example Input: `addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748'), searchBook('JavaScript: The Good Parts')`
   - Example Output: `{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', ISBN: '9780596517748' }`
   - Explanation: The `addBook` function adds a new book to the system, and `searchBook` returns the details of the book if found.
 */
var libManagementSys = [];
function addBook(title, author, ISBN) {
    let book = {
        title: title,
        author: author,
        ISBN: ISBN
    }
    libManagementSys.push(book);
}
function removeBook(title) {
    for (let i = 0; i < libManagementSys.length; i++) {
        if (libManagementSys[i].title == title) {
            libManagementSys.splice(i, 1);
        }
    }
    console.log(libManagementSys);
}
function searchBook(title) {
    for (let i = 0; i < libManagementSys.length; i++) {
        if (libManagementSys[i].title == title) {
            console.log(libManagementSys[i]);
        }
    }
}
addBook('JavaScript: The Good Parts', 'Douglas Crockford', '9780596517748');
addBook('JavaScript: The Good Parts1', 'Douglas Crockford1', '97805965177481');
addBook('JavaScript: The Good Parts2', 'Douglas Crockford2', '97805965177482');
addBook('JavaScript: The Good Parts3', 'Douglas Crockford3', '97805965177483');
console.log(libManagementSys);
removeBook('JavaScript: The Good Parts');
searchBook('JavaScript: The Good Parts1');

/**
 * 33. **Write a JavaScript function filterActiveUsers that takes a JSON array of user objects and returns a new array containing only the objects where the isActive property is true.**
    - Write a function to filter the list of active profile from the file "person.json" and create a new file "active_persons.json" to append all the active profile to that file
 */
function filterActiveUsers(arrUsers) {
    return arrUsers.filter(function (user) {
        return user.isActive === true;
    })
}
console.log(filterActiveUsers([
    {
        "id": 166,
        "name": "ewuvri",
        "age": 24,
        "email": "mrx@example.com",
        "isActive": false
    },
    {
        "id": 699,
        "name": "tfmmfv",
        "age": 54,
        "email": "eeh@example.com",
        "isActive": true
    },
    {
        "id": 101,
        "name": "madnqx",
        "age": 59,
        "email": "xol@example.com",
        "isActive": true
    }]));
function filterActiveProfile(arrProfiles) {
    return arrProfiles.filter(function (profile) {
        return profile.isActive === true;
    })
}
function createActiveProfileFile() {
    const fs = require('fs');
    try {
        const readFile = fs.readFileSync('./persons.json', 'utf-8');
        let parsedData = JSON.parse(readFile);
        const writeFile = JSON.stringify(filterActiveProfile(parsedData), null, 4);
        fs.writeFileSync('./NganLe/active_persons.json', writeFile, 'utf8');
        console.log(`File is written successfully!`);
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
    }
}
createActiveProfileFile();

/**
 * 34. **Find the nearby country and city**
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
 */
function returnGroupNearbyCity1(arrCity) {
    for (let i = 0; i < arrCity.length; i++) {
        var nearByArr = { rootLocation: '', nearByLocations: [] };
        nearByArr.rootLocation = {
            country: arrCity[i].country,
            city: arrCity[i].city,
            geo: {
                lat: arrCity[i].geo.lat,
                long: arrCity[i].geo.long
            }
        }
        for (let j = 0; j < arrCity.length; j++) {
            if (i != j && (Math.abs(arrCity[i].geo.lat - arrCity[j].geo.lat) <= 10 ||
                Math.abs(arrCity[i].geo.long - arrCity[j].geo.long) <= 10)) {
                nearByArr.nearByLocations.push({
                    country: arrCity[j].country,
                    city: arrCity[j].city,
                    geo: {
                        lat: arrCity[j].geo.lat,
                        long: arrCity[j].geo.long
                    }
                })
            }
        }
        console.log(`${i + 1} - ${(JSON.stringify(nearByArr, null, 2))}`);
    }
}
function createNearbyCityFile() {
    const fs = require('fs');
    try {
        const readFile = fs.readFileSync('./countries_with_cities.json', 'utf-8');
        let parsedData = JSON.parse(readFile);
        returnGroupNearbyCity1(parsedData);
    } catch (error) {
        console.error('Error reading JSON file:', error.message);
    }
}
createNearbyCityFile();