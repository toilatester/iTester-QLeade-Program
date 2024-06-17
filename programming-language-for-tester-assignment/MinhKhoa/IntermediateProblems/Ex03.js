let first = function() {
    return function(){
        console.log("Hello, World!");
    }
}
let second = first();
second();