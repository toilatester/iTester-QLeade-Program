function findMaximumNumber(arr) {
    if (!arr.length) {
      return null; 
    }
  
    let maxNumber = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
  
    return maxNumber;
  }
  
  const inputArray = [1, 3, 2];
  const result = findMaximumNumber(inputArray);
  console.log(result);