class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    show_info() {
        console.log(`Model:  ${this.model}`);
    }
}

var NewCar = new Car( "Corolla", 2022);
NewCar.show_info();
