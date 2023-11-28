// ## Loops
// 1. **For Loop Counter**
  for (let i = 1; i <= 5; i++){
    console.log(i);
    };

// 2.  **While Loop Usage**
  let j = 5;  
  while (j >= 1){
    console.log(j);
    j--;
  }
// 3.  **Loop Through Array**:
  const fruit = ["apple", "banana", "cherry"];
  for (let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);

  }

// 4.  **Find the Sum Using Loop**:
  const arrSum = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let i = 0; i < arrSum.length; i++){
    sum += arrSum[i];
  }
  console.log("Total of elements:", sum);
