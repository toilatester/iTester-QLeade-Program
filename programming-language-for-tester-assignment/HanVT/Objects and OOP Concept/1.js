class car{
    constructor(){
        this.make='Toyota'
        this.model='Corolla'
        this.color='white'
    }

    setColor(newColor){
        this.color=newColor
    }

    printInfo(){
        console.log("Make: "+ this.make)
        console.log("Model: "+ this.model)
        console.log("Color: "+ this.color)
    }
}

const newCar=new car()

newCar.setColor('red')
newCar.printInfo()