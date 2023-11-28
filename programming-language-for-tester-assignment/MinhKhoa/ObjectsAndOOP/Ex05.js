class House {
    buildHouse(){
        return "Villa";
    }
}
class Apartment extends House{
    buildHouse(){
        return "Penthouse";
    }
}
let largeHouse = new House();
let house = new Apartment();
console.log(largeHouse.buildHouse());
console.log(house.buildHouse());