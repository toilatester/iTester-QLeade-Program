class Car {
    constructor(make, model, color) {
      this.make = make;
      this.model = model;
      this.color = color;
    }
  
    show_info() {
      console.log(`Make: ${this.make}, Model:  ${this.model} and Color: ${this.color}`);
    }
  }

  var NewCar = new Car("Toyota", "Corolla", "Red");
  NewCar.show_info();
  NewCar.color = "Blue";
  NewCar.show_info();