function displayFunc(callback) {
    const data = "Practice with call back function";
    callback(data);
}
function callBackFunction(input) {
    console.log("Display call back:", input);
}

displayFunc(callBackFunction);