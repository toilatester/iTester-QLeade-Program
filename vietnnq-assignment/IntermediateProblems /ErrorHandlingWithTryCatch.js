function logNumber(inputNumber) {
    try {
        if (typeof inputNumber !== 'number' || isNaN(inputNumber)) {
            throw new Error('Invalid argument - must be a number');
        }

        console.log('Number:', inputNumber);
    } catch (error) {
        console.error(error.message);
    }
}

logNumber(42);
logNumber('number');