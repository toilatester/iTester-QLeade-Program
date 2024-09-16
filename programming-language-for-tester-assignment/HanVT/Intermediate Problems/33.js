const fs = require('fs');

class Person {
    constructor(id, name, age, email, isActive) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.isActive = isActive;
    }
}
class PersonList {
    constructor() {
        this.people = []
    }
    addPerson(person) {
        this.people[this.people.length] = person
    }
    filterActive() {
        return this.people.filter((person) => person.isActive === true)
    }
}



const filePath = '../../persons.json'
const filePathOut = 'active_persons.json'

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    var newPersonList = new PersonList()
    const jsonData = JSON.parse(data);

    const people = jsonData.map(data => new Person(data.id, data.name, data.age, data.email, data.isActive));

    people.forEach(person => {
        newPersonList.addPerson(person)
    });
    const modifiedJsonData = JSON.stringify(newPersonList.filterActive(), null, 2);
    fs.writeFile(filePathOut, modifiedJsonData, (err) => {
        if (err) {
            console.error('Error writing to the file:', err);
            return;
        }
        console.log("success")
    });
})

