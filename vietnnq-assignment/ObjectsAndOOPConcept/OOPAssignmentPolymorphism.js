class Animal {
    speak() {
        return 'Generic animal sound';
    }
}

class Dog extends Animal {
    speak() {
        return 'Gâu! Gâu!';
    }
}

class Cat extends Animal {
    // Override the speak method in the subclass
    speak() {
        return 'Meow!';
    }
}

const genericAnimal = new Animal();
const dog = new Dog();
const cat = new Cat();

console.log(genericAnimal.speak());
console.log(dog.speak());
console.log(cat.speak());