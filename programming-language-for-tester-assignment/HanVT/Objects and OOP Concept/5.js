class Animal{
    sound(){
        console.log("Animal sound")
    }
}
class Dog extends Animal{
    sound() {
        console.log("Gâu")
    }
}

const newDog=new Dog()

newDog.sound()

