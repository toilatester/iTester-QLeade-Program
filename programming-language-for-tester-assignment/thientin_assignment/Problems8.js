function logNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error(`${value} is not number`);
    } else {
        console.log('Is number: ', value);
    }
}

try {
    logNumber(263);
    logNumber('hahaha'); 
} catch (error) {
    console.error('Error:', error.message);
}