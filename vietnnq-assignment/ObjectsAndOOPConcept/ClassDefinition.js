class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    formulaRectangle() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(3, 4);
const result = rectangle.formulaRectangle();

console.log(result);