class Shape{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){    
    }
}
class Square extends Shape{
    constructor(width,height){
        super();
    }
    calculateArea(){
        return width*height;
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    calculateArea(){
        return this.radius*this.radius*3.14;
    }
}
const prompt = require("prompt-sync")();
let width = prompt("Enter width: ");
let height = prompt("Enter height: ");
let radius = prompt("Enter radius: ")
let shape = new Shape();
let squareArea = new Square(width, height);
let circleArea = new Circle(radius)
console.log(squareArea.calculateArea());
console.log(circleArea.calculateArea());