function sumArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

const arr = [1, 2, 3, 4, 5];
const sum = sumArray(arr);
console.log("sum array:", sum);
