const simplePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});
async function asyncExample() {
    try {
        const result = await simplePromise;
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

asyncExample();