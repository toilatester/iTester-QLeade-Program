//1.  **Array.forEach Method**
const arrayInput = ['a', 'b', 'c'];
let output = '';
arrayInput.forEach((element, index) => {
  output += element + (index === arrayInput.length - 1 ? '' : ' ');
});
console.log("- Result Array.forEach Method: " + output);

//2.  **Array.map Usage**
const inputArray = [1, 2, 3];
const outputdArray = inputArray.map(element => {
  return element * 2;
});
console.log("- Array.map Usage: " + outputdArray);




