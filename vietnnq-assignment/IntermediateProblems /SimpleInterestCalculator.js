function calculateInterestRate(principal, rate, time) {
    return (principal * rate * time) / 100;
}

const principalAmount = 1000;
const interestRate = 5;
const timeInYears = 2;

const result = calculateInterestRate(principalAmount, interestRate, timeInYears);
console.log(result);