class Car{
    constructor() {
        this.data = {};
      }
    
      setPropertyValue(key, value) {
        this.data[key] = value;
      }
    
      getPropertyValue(key) {
        return this.data[key];
      }
}
const car_1 = new Car();
car_1.setPropertyValue("color", "blue");
car_1.data["color"] = "red";
console.log(car_1.getPropertyValue("color"));