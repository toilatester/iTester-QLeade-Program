class Encapsulation {
    #property;
  
    constructor(){
      this.#property = "Explanatory text";
    }
  
    getPrivateMessage() {
        return this.#property;
    }
  }
  
  const instance = new Encapsulation();
  console.log(instance.getPrivateMessage());