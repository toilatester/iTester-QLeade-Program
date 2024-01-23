function returnFunction() {
    return function () {
        console.log("Hello, World!");
    };
}

const returnFunc = returnFunction();
returnFunc();