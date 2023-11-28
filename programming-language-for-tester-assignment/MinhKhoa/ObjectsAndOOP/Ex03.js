class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    multiple(){
        return width*height;
    }
}

class Square extends Rectangle{
    constructor(width, height){
        super(width,height);
    }
}

const prompt = require("prompt-sync")();
let width = prompt("Enter width: ");
let height = prompt("Enter height: ");
let result = new Square(width, height);
console.log(result.multiple());