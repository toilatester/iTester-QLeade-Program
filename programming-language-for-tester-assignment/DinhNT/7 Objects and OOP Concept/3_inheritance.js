class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }

    perimeter(){
        return 2 * (this.width + this.height);
    }

    printArea(){
        console.log("Area: " + this.area());
    }

    printPerimeter(){
        console.log("Perimeter: " + this.perimeter());
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side);
    }
}

let square = new Square(5);
square.printArea();
