class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    brand(){
        console.log(model,year);
    }
}

const prompt = require("prompt-sync")();
let model = prompt("Enter model: ");
let year = prompt("Enter year: ");

let car = new Car(model, year);
car.brand();