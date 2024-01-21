class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width*this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const square = new Square(5);
const area = square.calculateArea();
console.log(area);
