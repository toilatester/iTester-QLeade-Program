function logOrThrowErr(value) {
    try {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error('The argument must be a valid number.');
        }

        console.log('Number:', value);
    } catch (error) {
        console.error('Error:', error.message);
    }
}


logOrThrowErr(44)
logOrThrowErr("15")