function a(callback){
    var ex='Hello'
    callback(ex)
}

function b(input){
    console.log(input+", Han")
}


a(b)