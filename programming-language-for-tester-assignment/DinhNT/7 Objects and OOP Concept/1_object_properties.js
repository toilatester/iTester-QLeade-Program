class Car {
    constructor (){
        this.make = 'Toyota';
        this.model = 'Corolla';
        this.color = 'white';
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Color: " + this.color);
    }
}

let car = new Car;
car.setColor = 'red';

car.toString();