async function asyncFunction() {
    try {
        const result = await asyncOperation();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Successfully!');
        }, 2000);
    });
}

asyncFunction();