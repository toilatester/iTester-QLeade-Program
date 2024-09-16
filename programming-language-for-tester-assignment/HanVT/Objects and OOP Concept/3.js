class Rectangle{
    constructor(width,height){
        this.width=width
        this.height=height
    }
    area(){
        console.log(this.width*this.height)
    }
}
class Square extends Rectangle{
    constructor(input){
        super(input,input)
    }
}

const newSquare=new Square(5)

newSquare.area()

