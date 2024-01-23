const arr = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

arr.forEach((letter) => {
    console.log("1.Array.forEach Method ---> " + letter)
});

const squaredNumbers = numbers.map(numberOfElement => numberOfElement * 2);
console.log("2.Array.map Usage ---> " + squaredNumbers);