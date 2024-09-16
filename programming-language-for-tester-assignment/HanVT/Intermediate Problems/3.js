function funcInFunc(){
    return function() {
        console.log("Hello, World!")
    }
}

var anotherFunc= funcInFunc()

anotherFunc()