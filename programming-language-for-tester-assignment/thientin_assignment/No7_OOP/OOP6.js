class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error("Cannot instantiate abstract class");
      }
    }
  
    calculateArea() {
      throw new Error("Abstract method 'calculateArea' must be overridden");
    }
}

class Square extends Shape{
    constructor(size){
        super();
        this.size = size;
    }
    calculateArea(){
        console.log(this.size* this.size);
    }
}
const square_1 = new Square(6);
square_1.calculateArea();