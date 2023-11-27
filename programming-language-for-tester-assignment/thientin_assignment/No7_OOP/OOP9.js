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
const rectangle_1 = new Rectangle(10, 4);
const area_1 = rectangle_1.calculateArea();
console.log(`Rectangle with Width ${rectangle_1.width} and Height ${rectangle_1.height}`);
console.log(`Area of this rectangle is ${area_1}`);