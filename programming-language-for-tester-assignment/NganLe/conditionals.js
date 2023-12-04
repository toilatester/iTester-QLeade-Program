/**
 *  Conditionals
    1. **Basic If Statement**
   - Write a program that checks if a number stored in a variable is greater than 10. If so, log "Greater than 10".
   - Example output: `Greater than 10` (if the number is 12)
   - Explanation: Teaches the if statement and comparison.
 */
function checkGreaterThan10(number) {
    if (number > 10) {
        console.log('Greater than 10');
    }
}
checkGreaterThan10(12);

/**
 * 2. **If-Else Condition**
   - Given a variable `age`, log "Adult" if `age` is 18 or more, otherwise log "Minor".
   - Example output: `Adult` (if age is 18)
   - Explanation: Introduces the if-else statement.
 */
function checkAge(age) {
    if (age >= 18) {
        console.log('Adult');
    } else {
        console.log('Minor');
    }
}
checkAge(18);