class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
      calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
class Square extends Rectangle{
    constructor(size) {
        super(size, size);
        this.width = size;
        this.height = size;
      }
  }

  const square_1 = new Square(5);
  console.log( square_1.calculateArea());