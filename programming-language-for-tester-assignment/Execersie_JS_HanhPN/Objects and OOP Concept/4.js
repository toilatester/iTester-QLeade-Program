class MyClass {
    #privateProperty;

    constructor(initialValue) {
        this.#privateProperty = initialValue;
    }

    getPrivateProperty() {
        return this.#privateProperty;
    }

    setPrivateProperty(newValue) {
        this.#privateProperty = newValue;
    }
}

const myObject = new MyClass('Initial Value');
console.log(myObject.getPrivateProperty());

myObject.setPrivateProperty('New Value');
console.log(myObject.getPrivateProperty());