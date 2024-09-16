class Car{
    constructor(model,year) {
        this.model=model
        this.year=year
    }

    printModel() {
        console.log(this.model)
    }
}

newCar=new Car('Toyota',2023)

newCar.printModel()