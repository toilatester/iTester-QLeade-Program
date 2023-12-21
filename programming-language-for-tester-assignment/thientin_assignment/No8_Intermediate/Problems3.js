function parentFunction() {
    return function () {
        console.log("Hello world!");
    };
}

const childFunction = parentFunction();

childFunction();