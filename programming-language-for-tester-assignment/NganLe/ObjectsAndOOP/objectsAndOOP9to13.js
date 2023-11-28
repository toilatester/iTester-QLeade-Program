/**
 * 9.  **Class Definition**:
    - Problem: Define a class to represent a rectangle with properties for width and height and a method to calculate the area.
    - Input: Rectangle(3, 4).
    - Output: 12.
    - Explanation: Class instantiation and method usage should be demonstrated.
 */
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    }
}
var rectangle = new Rectangle(3,4);
console.log('Ex9-----------')
console.log(rectangle.calculateArea());

/**
 * 10.  **Template Literals**:
    - Problem: Use template literals to concatenate strings with variables.
    - Input: 'world'.
    - Output: "Hello, world!"
    - Explanation: Demonstrate the use of backticks and `${}` syntax.
 */
function templateLiterals(input){
    console.log(`Hello, ${input}!`);
}
console.log('Ex10-----------')
templateLiterals('world')

/**
 * 11.  **Destructuring Assignment**:
    - Problem: Use destructuring to extract values from an array or object.
    - Input: { x: 3, y: 4 }.
    - Output: 3, 4.
    - Explanation: Show how to unpack values from objects.
 */
function destructure(input){
    var {x,y} = input;
    console.log(`${x},${y}`)
}
console.log('Ex11-----------')
destructure({ x: 3, y: 4});

/**
 * 12.  **Spread Operator**:
    - Problem: Use the spread operator to merge two arrays.
    - Input: [1, 2], [3, 4].
    - Output: [1, 2, 3, 4].
    - Explanation: Show how `...` can expand an array into another.
 */
function spreadOperator(arr1, arr2){
    return [...arr1,...arr2];
}
console.log('Ex12-----------')
console.log(spreadOperator([1, 2], [3, 4]));

/**
 * 13.  **Rest Parameters**:
    - Problem: Create a function that takes a variable number of arguments and prints them.
    - Input: 'a', 'b', 'c'.
    - Output: 'a', 'b', 'c'.
    - Explanation: Use `...` to gather all arguments into an array.
 */
function restParam(...input){
    console.log(input);
}
console.log('Ex13-----------')
restParam('a', 'b', 'c')