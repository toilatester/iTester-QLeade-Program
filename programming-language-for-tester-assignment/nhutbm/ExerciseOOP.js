//1.  Object Properties
const car = {
    make: "Toyota",
    model: "Corolla",
    color: "white"
}
console.log(car);
car.color = "red";
console.log("1. Attribute color after changed:", car);

const person = {
    name: "John",
    age: 30
}
console.log("2. Name is: " + person.name);

//3. Inheritance
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let mySquare = new Square(5);

let areaSquare = mySquare.calculateArea();
console.log("3. Square area: " + areaSquare);

//4. Encapsulation
class privateProperties{
  #name;
  constructor(name){
    this.#name = name;
  }
  getName(){
    return this.#name;
  }
}
const personPrivateProperties = new privateProperties("Nidalee");
console.log("4.1 The new '#' syntax for private field: " + personPrivateProperties.getName());
console.log("4.2 " + personPrivateProperties.name);

//5. Polymorphism
class Circle extends Rectangle{
  constructor(radius){
    super(radius);
    this.radius = radius;
  }

calculateArea(){
  return Math.PI * this.radius **2;
}
}
let myCircle = new Circle(3);
let circleArea = myCircle.calculateArea();
console.log("5. Circle area: " + circleArea);

//6. Abstract Class
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Class is of abstract type and can't be instantiated");
    }

    if (this.calculateArea === undefined) {
      throw new Error('calculateArea method must be implemented');
    }
  }
}
class Circlee extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}
class Rectanglee extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
}
const smallCircle = new Circlee(4);
const smallRectangle = new Rectanglee(3, 5);

console.log(`6.1 SmallCircle: ` + smallCircle.calculateArea());
console.log("6.2 SmallRectangle: " + smallRectangle.calculateArea());

//7. Dynamic Object Keys
function createObject(key, value) {
  const obj = {};
  obj[key] = value;
  return obj;
}

const inputKey = 'color';
const inputValue = 'blue';

const dynamicObject = createObject(inputKey, inputValue);

console.log("7. Bracket notation for dynamic keys:", dynamicObject);

//8. Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// Coi cac sub-property cua Nested Object
const gloveBoxContents = myStorage.car.outside;
console.log("8. Accessing properties in nested objects:",gloveBoxContents);

//9. Class Definition
class newestRectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  calculateRectangle() {
    return this.width * this.height;
  }
}
const myRectangle = new newestRectangle(3,4);
const result = myRectangle.calculateRectangle();
console.log("9. CalculateRectangle:",result)

//10. Template Literals
let inputWord = "world";
let outputWord = `Hello, ${inputWord}!`;
console.log("10. Demonstrate the use of backticks and '${}' syntax:", outputWord);

//11. Destructuring Assignment
const inputValuee = { x: 3, y: 4 };
const {x, y} = inputValuee;
console.log("11. Unpack values from objects:", x, y);

//12. Spread Operator
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log("12. Array after merge:",mergedArray);

//13. Rest Parameters
function printArguments(...args) {
  console.log(...args);
}
printArguments("13. All arguments into an array:",'a', 'b', 'c');
