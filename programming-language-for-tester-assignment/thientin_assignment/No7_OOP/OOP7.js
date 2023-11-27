class Car{
    constructor(key, value) {
        this.info = {[key]: value};
      }
}
const car_1 = new Car("color", "blue");
console.log(car_1.info);