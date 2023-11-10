class MyClass {
    #privateVar;
  
    constructor(privatePropertyValue) {
      this.#privateVar = privatePropertyValue;
    }
  
    getPrivateProperty() {
      return this.#privateVar;
    }
  }
  

  const myInstance = new MyClass("Private Value");
  

  console.log(myInstance.getPrivateProperty()); 
  console.log(myInstance.privatePropertyValue);