function callWithSampleArgument(callback) {
    console.log("HELLOOOO");
    const sampleArgument = "AUTHOR THIENTIN"
    callback(sampleArgument);
    console.log("GOODBYE");
}

function sampleCallback(argument) {
    console.log("I am callback function", argument);
}

callWithSampleArgument(sampleCallback);