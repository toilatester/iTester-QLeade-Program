function calculateSimpleInterest(principal, rate, time) {
    if (principal >= 0 && rate >= 0 && time >= 0) {
        const interest = (principal * rate * time) / 100;
        console.log('Simple Interest:', interest);
        return interest;
    } else {
        console.log('Invalid input');
        return null;
    }
}

calculateSimpleInterest(1000, 5, 2);
calculateSimpleInterest(1000, -5, 2);
