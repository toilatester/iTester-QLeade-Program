function mainFunction(callback){
    console.log("Hello...");
    callback("Khoa");
}

function callbackFunction(greeting){
    console.log("People: " + greeting);
}
mainFunction(callbackFunction);