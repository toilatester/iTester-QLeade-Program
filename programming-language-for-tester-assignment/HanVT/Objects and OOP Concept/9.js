class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}

newRectangle = new Rectangle(3,4)
var areaOfNewRec=newRectangle.area()

console.log(areaOfNewRec)