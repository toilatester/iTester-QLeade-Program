// ## Objects and OOP Concept
// 1.  **Object Properties**:
//     - Problem: Create an object representing a car with properties like make, model, and color. Then change the color property.
//     - Input: { make: 'Toyota', model: 'Corolla', color: 'white' }.
//     - Output: { make: 'Toyota', model: 'Corolla', color: 'red' }.
//     - Explanation: Show how to access and change object properties.
    const car = {
        make: "Toyota",
        model: "Corolla",
        color: "white"
    };
    car.color = "red";
    console.log(car);

// 2.  **Object Properties**
//     - Create an object representing a person with properties for name and age. Log the name.
//     - Example output: `John` (if the object is `{ name: "John", age: 30 }`)
//     - Explanation: Teaches object creation and property access.
    const person = {
        name: "John",
        age: "30"
    };
    console.log(person.name);

// 3.  **Inheritance**: tính kế thừa
//     - Problem: Create a class `Square` that inherits from `Rectangle` and uses its constructor to set both width and height.
//     - Input: Square(5).
//     - Output: 25.
//     - Explanation: Demonstrate how inheritance works in JavaScript.
    class Rectangle {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        Cal_Area() {
            return this.width * this.height;
        }
    }
    class Square extends Rectangle {
        constructor(length){
            super(length, length);
        }
    }
    const mySquare = new Square(5);
    console.log(mySquare.Cal_Area());

    // 4.  **Encapsulation**: Tính đónng gói
//     - Problem: Create a class with private properties and provide a public method to access them.
//     - Input: None.
//     - Output: Explanatory text.
//     - Explanation: Use closures or the new `#` syntax for private fields.
    class encap_car {
        #name;
        #year;
        constructor(name){
            this.#name = name;
        }
        getCar() {
            return this.#name;
        }
    }
    const mCar = new encap_car("Lexus");
    console.log(mCar.getCar());

// 5.  **Polymorphism**: tính đa hình
//     - Problem: Override a method in a subclass to provide different functionality from the parent class.
//     - Input: None.
//     - Output: Explanatory text.
//     - Explanation: Show how the same method name can do different things in different classes.
class Player {
    constructor(name){
        this.name = name;
    }
    getPlayer(){
        console.log(`${this.name} is the football player`);
    }
}
class Portugal extends Player {
    getPlayer(){
        console.log(`${this.name} is the GOAT!`);
    }
}
class AiNasser extends Player {
    getPlayer(){
        console.log(`${this.name} is the best player`);
    }
}
const player1 = new Portugal("Cristiano Ronaldo");
player1.getPlayer();
const player2 = new AiNasser("Talisca");
player2.getPlayer();

// 6.  **Abstract Class**: Tính trừu tượng

//     - Problem: Create an abstract class `Shape` with an abstract method `calculateArea` and extend it in subclasses.
//     - Input: None.
//     - Output: Explanatory text.
//     - Explanation: Explain that JavaScript does not have native abstract classes but can be simulated.

"xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

// 7.  **Dynamic Object Keys**:
//     - Problem: Use a variable as a key name in an object literal.
//     - Input: 'color', 'blue'.
//     - Output: { color: 'blue' }.
//     - Explanation: Show bracket notation for dynamic keys.
    const mkey = "color";
    const mvalue = "blue";
    
    function newKey(key, value){
        const obj = {};
        obj[key] = value;
        return obj;
    }
    const result = newKey(mkey, mvalue);
    console.log(result);

// 8.  **Nested Objects**
//     - Given an object with a nested object as a property, access a property of the nested object.
//     - Explanation: Demonstrates accessing properties in nested objects.
    const carModel = {
        nameCar: "BMW",
        date: 2023,
        location: {
            district: "Tan Phu",
            city: "TPHCM",
            country: "Vietname"
        }
    }
    console.log(carModel.location.city); //Cach 1
    //console.log(carModel["location"]["city"]); //Cach 2

// 9.  **Class Definition**:
//     - Problem: Define a class to represent a rectangle with properties for width and height and a method to calculate the area.
//     - Input: Rectangle(3, 4).
//     - Output: 12.
//     - Explanation: Class instantiation and method usage should be demonstrated.
    class areaRectangle {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        calArea() {
            console.log(this.width*this.height);
        }
    }
    const resultArea = new areaRectangle(3, 4);
    resultArea.calArea();
// 10.  **Template Literals**:
//     - Problem: Use template literals to concatenate strings with variables.
//     - Input: 'world'.
//     - Output: "Hello, world!"
//     - Explanation: Demonstrate the use of backticks and `${}` syntax.
    const letter = "world";
    console.log(`Hello, ${letter}!`);

// 11.  **Destructuring Assignment**: sd để trích xuất các giá trị từ 1 mảng hoặc object
//     - Problem: Use destructuring to extract values from an array or object.
//     - Input: { x: 3, y: 4 }.
//     - Output: 3, 4.
//     - Explanation: Show how to unpack values from objects.
    const ex_num = {x: 3, y: 4};
    const {x, y} = ex_num;
    console.log(x);
    console.log(y);

// 12.  **Spread Operator**: để mở rộng các mảng thành các phần tử riêng lẻ
//     - Problem: Use the spread operator to merge two arrays.
//     - Input: [1, 2], [3, 4].
//     - Output: [1, 2, 3, 4].
//     - Explanation: Show how `...` can expand an array into another.
    const arr_1 = [1, 2];
    const arr_2 = [3, 4];
    const merge = [...arr_1, ...arr_2];
    console.log(merge);

// 13.  **Rest Parameters**: Sử dụng spread operator để thu thập tất cả các tham số vào một mảng
//     - Problem: Create a function that takes a variable number of arguments and prints them.
//     - Input: 'a', 'b', 'c'.
//     - Output: 'a', 'b', 'c'.
//     - Explanation: Use `...` to gather all arguments into an array.
    function printLetter(...args) {      
        
        for (let arg of args) { //Vòng lặp for...of được sử dụng để duyệt qua các phần tử của args
            console.log(arg);
        }
    }
    printLetter("a", "b", "c");