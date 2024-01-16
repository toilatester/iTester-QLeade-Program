class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    printName(name){
        console.log(name);
    }
};

let p = new person('John', 30);
console.log(p.name);