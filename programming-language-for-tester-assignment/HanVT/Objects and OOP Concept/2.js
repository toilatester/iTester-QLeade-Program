class person{
    constructor(nameInput, ageInput){
        this.name=nameInput
        this.age=ageInput
    }


    printInfo(){
        console.log("Name: "+ this.name)
        console.log("Age: "+ this.age)
    }

    printName(){
        console.log(this.name)
    }
}

const John=new person("John",30)


John.printName()

console.log(John)