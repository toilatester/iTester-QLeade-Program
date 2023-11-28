//Syntax and Data Types
console.log("## Syntax and Data Types ##");
//1. **Hello, World!**
console.log("1. Hello World!!!");

//2. **Variable Declaration**
function printFullname(){
var name = "Bui Minh Nhut";
console.log("2. My full name is " + name);
}
printFullname();

//3. **Math Operations**
function mathOperation(){
var a = 7;
var b = 3;
var result;
result = (a+b)*2;
console.log("3. Result= " + result);
}
mathOperation();

//4. **Type Conversion**
function typeConversion()
{
    var text= "123";
    var result = parseInt(text);
    var sum = result + 7;
    console.log("4. Result after parse: " + sum);
}
typeConversion();

//Conditionals
console.log("## Conditionals ##");
//1. **Basic If Statement**
function ifStatement(a){
    var result;
    if(a > 10)
    {
    result = "Greater than 10";
    }else
    {
        result = "Invalid"
    }
    return result;

}
console.log("1. Basic If Statement: " + ifStatement(15));

//2. **If-Else Condition**
function ifElseStatement(age)
{
    var result;
    if(age >= 18)
        result = "Adult!!!";
    else
        result = "Minor";
    return result;
}
console.log("2. If-Else Condition: " + ifElseStatement(17));

//Functions and Scope
console.log("## Functions and Scope ##")
//1. **Writing a Function**
function greet(name){
    return name;
}
console.log("- Hello, " + greet("Nhutbm"));

//3. **Function to Square**
function mathSquare(x){
    var result, y;
    y = 2;
    return result = Math.pow(x,2);
}
console.log("- Result square: "+ mathSquare(10));

function reverseArray(arr){
    return arr.reverse();
}
const inputArray = [-21, -5, -3, 1, 2, 6, 18, 26, 4, 15, 30, 39, 11, 10];
const expect = reverseArray(inputArray);
//Tra ve object bat buoc phai parse tu json
console.log("- Result after reverse: " +JSON.stringify(expect));

function getArrayPositionElement(arr, i){
    const getTheThirdElement = arr[i];
    return getTheThirdElement;
}
console.log("- Log the third element: "+ getArrayPositionElement(inputArray,2));

function checkValueGreater10(number){
    return number > 10;  
}
const numberValid = inputArray.filter(checkValueGreater10);
console.log("- Array numbers greater than 10: "+JSON.stringify(numberValid));

function sumArray(arr){
    const sum = arr.reduce((accumulator, currentValue) =>{
        return accumulator + currentValue;
    });
    return sum;
}
console.log("- Array Reduction = "+ sumArray(inputArray));

function squareArray(numbers){
    return numbers.map(number => number *number);
}

const resultMapArray = squareArray(inputArray)
console.log("- Map array output: " + JSON.stringify(resultMapArray));

