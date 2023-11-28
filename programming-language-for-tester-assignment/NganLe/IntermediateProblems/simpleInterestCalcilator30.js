/**
 * 30.  **Simple Interest Calculator**
   - Problem: Write a function that calculates simple interest given the principal, rate of interest per year, and time in years.
   - Example Input: `(1000, 5, 2)` // Principal = 1000, Rate = 5%, Time = 2 years
   - Example Output: `100`
   - Explanation: The simple interest for two years is calculated as `(1000 * 5 * 2) / 100`.
 */
function calculateSimpleInterest(principal, rate, time){
    if (principal > 0 && rate > 0 && time >0)
    return (principal * rate * time)/100;
    else
    return 'Invalid info';
}
console.log(calculateSimpleInterest(1000, 5, 2));