class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    displayModel() {
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }
}

const myCar = new Car('Roll Royce', 2022);
myCar.displayModel();