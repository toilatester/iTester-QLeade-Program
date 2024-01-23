class EncapsulationClass {
    #privateField;

    constructor(privateArgument) {
        this.#privateField = privateArgument;
    }

    getPrivateField() {
        return this.#privateField;
    }
}

const encapsulationClass = new EncapsulationClass('Hello');
console.log(encapsulationClass.getPrivateField());
console.log(encapsulationClass.privateArgument);