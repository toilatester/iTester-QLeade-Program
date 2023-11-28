// ## Iterators
// 1.  **Array.forEach Method**
// Hàm forEach() lặp qua từng phần tử của mảng và thực hiện một hàm xác định lên từng phần tử.
    const alphabet = ['a', 'b', 'c'];
    alphabet.forEach(function(getElement) {
        console.log(getElement);
    });

// 2.  **Array.map Usage**
//     - Use `map` to create a new array that doubles each element in the original array.
//     - Example input: `[1, 2, 3]`
//     - Example output: `[2, 4, 6]`
//     - Explanation: Introduces the `map` method.
    const arrNum = [1, 2, 3];
    const doubleArr = arrNum.map((num) => num*2);
    console.log(doubleArr);