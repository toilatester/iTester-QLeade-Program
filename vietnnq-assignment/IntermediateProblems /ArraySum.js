const array = [1, 2, 3, 4];

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num);
}

const result = sumArray(array);
console.log(result);