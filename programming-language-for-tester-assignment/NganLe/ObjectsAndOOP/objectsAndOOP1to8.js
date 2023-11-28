/**
 * Objects and OOP Concept
 * 1.  **Object Properties**:
    - Problem: Create an object representing a car with properties like make, model, and color. Then change the color property.
    - Input: { make: 'Toyota', model: 'Corolla', color: 'white' }.
    - Output: { make: 'Toyota', model: 'Corolla', color: 'red' }.
    - Explanation: Show how to access and change object properties.
 */
var car = {
   make: 'Toyota', 
   model: 'Corolla', 
   color: 'white'
}
console.log('Ex1-----------')
console.log(car)

/**
 * 2.  **Object Properties**
    - Create an object representing a person with properties for name and age. Log the name.
    - Example output: `John` (if the object is `{ name: "John", age: 30 }`)
    - Explanation: Teaches object creation and property access.
 */
var person = {
   name: "John",
   age: 30 
}
console.log('Ex2-----------')
console.log(person.name)

/**
 * 3.  **Inheritance**:
    - Problem: Create a class `Square` that inherits from `Rectangle` and uses its constructor to set both width and height.
    - Input: Square(5).
    - Output: 25.
    - Explanation: Demonstrate how inheritance works in JavaScript.
*/

class Rectangle{
   constructor(width,height){
      this.width = width;
      this.height = height;
   }
   getArea(){
      return this.width * this.height;
   }
}
class Square extends Rectangle{
   constructor(side){
      super(side,side);
   }
}
var square = new Square(5);
console.log('Ex3-----------')
console.log(square.getArea());

/**
 * 4.  **Encapsulation**:
    - Problem: Create a class with private properties and provide a public method to access them.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Use closures or the new `#` syntax for private fields.
 */
class Encapsulation{
   #privateProperties;
   constructor(privateProperties){
      this.#privateProperties = privateProperties
   }
   getPrivateProperties(){
      return this.#privateProperties;
   }
}
var input = new Encapsulation('Hello');
console.log('Ex4-----------')
console.log(input.getPrivateProperties());

/**
 * 5.  **Polymorphism**:
    - Problem: Override a method in a subclass to provide different functionality from the parent class.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Show how the same method name can do different things in different classes.
 */
class ParentClass{
   constructor(value1, value2){
      this.value1 = value1;
      this.value2 = value2;
   }
   calculate(){
      return this.value1 + this.value2;
   }
}
class ChildClass extends ParentClass{
   constructor(value1,value2){
      super(value1,value2);
   }
   calculate(){
      return this.value1 - this.value2;
   }
}
var poly1 = new ParentClass(2,3)
var poly2 = new ChildClass(2,3)
console.log('Ex5-----------')
console.log(poly1.calculate());
console.log(poly2.calculate());

/**
 * 6.  **Abstract Class**:

    - Problem: Create an abstract class `Shape` with an abstract method `calculateArea` and extend it in subclasses.
    - Input: None.
    - Output: Explanatory text.
    - Explanation: Explain that JavaScript does not have native abstract classes but can be simulated.
 */
//abstract class 
class Shape{
   constructor(){
      if (this.constructor == Shape) {
         throw new Error("Abstract classes can't be instantiated.");
      }
   }
   calculateArea(){
   }
}
class Triangle extends Shape{
   calculateArea(width, height){
      this.width = width;
      this.height = height;
      return (this.width*this.height)/2;
   }
}
var triangle = new Triangle();
console.log('Ex6-----------')
console.log(triangle.calculateArea(3,4));

/**
 * 7.  **Dynamic Object Keys**:
    - Problem: Use a variable as a key name in an object literal.
    - Input: 'color', 'blue'.
    - Output: { color: 'blue' }.
    - Explanation: Show bracket notation for dynamic keys.
 */
// var key = 'color';
// var value = 'blue';
function getDynamicObjectKeys(key, value){
   var object = {
      [key]:`${value}`
   }
   return object;
}
console.log('Ex7-----------')
console.log(getDynamicObjectKeys('color', 'blue'));

/**
 * 8.  **Nested Objects**
    - Given an object with a nested object as a property, access a property of the nested object.
    - Explanation: Demonstrates accessing properties in nested objects.
 */
var person = {
   name: 'Ngan',
   contact: {
      phone: '1234234',
      address: {
         city: 'HCM',
         country: 'VN'
      }
   }
}
console.log('Ex8-----------')
console.log(person.contact.address.country);