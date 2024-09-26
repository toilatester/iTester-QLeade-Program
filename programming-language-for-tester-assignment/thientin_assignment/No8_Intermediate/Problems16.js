function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
  }
  
  const inputArray = [1, 2, 3, 4, 8];
  
  const result = sumArray(inputArray);
  console.log(result); 