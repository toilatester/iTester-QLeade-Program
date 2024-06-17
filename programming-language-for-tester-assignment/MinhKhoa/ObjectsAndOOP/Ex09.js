class Rectangle {
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    calculateArea(){
        return this.width*this.height;
    }
}
const prompt = require("prompt-sync")();
let width = prompt("Enter width: ");
let height = prompt("Enter height: ");
let rectangle = new Rectangle(width,height);
let result = rectangle.calculateArea();
console.log(result);