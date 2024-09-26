function square(num){
    return typeof(num) == Number ? num*num : "Not a number";
}

console.log(square("a"));
console.log(square(4));
console.log(square("4"));