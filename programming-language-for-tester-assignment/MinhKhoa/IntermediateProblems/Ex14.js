function resolveAfterPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Successfully');
        }, 2000);
    });
}

async function asyncCall(){
    console.log('Calling');
    const result = await resolveAfterPromise();
    console.log(result);
}

asyncCall();