const array = [1, 3, 2];

function findMaxNumberInArr(numbers) {
    let maxNumber = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}

const result = findMaxNumberInArr(array);
console.log(result);