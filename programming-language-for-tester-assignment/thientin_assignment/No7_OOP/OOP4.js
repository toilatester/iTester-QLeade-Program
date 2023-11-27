class MyClass {
    #privateProperty;
  
    constructor(value) {
      this.#privateProperty = value;
    }
    getPrivateProperty() {
        return this.#privateProperty;
      }

      setPrivateProperty(newValue) {
        this.#privateProperty = newValue;
      }
}
const object_1 = new MyClass("Test 1st time");
console.log(object_1.getPrivateProperty());
object_1.setPrivateProperty("Test 2nd time ");
console.log(object_1.getPrivateProperty());