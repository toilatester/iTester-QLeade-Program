function sortArrNumber(numbers) {
    let temp;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

const inputArray = [3, 1, 4, 1, 5];
const sortedArray = sortArrNumber(inputArray);
console.log(sortedArray);