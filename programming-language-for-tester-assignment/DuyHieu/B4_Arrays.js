// ## Arrays
// 1. **Array Manipulation**
// Hàm reverse() đảo ngược vị trí các phần tử trong mảng
function rever_arr(){
    const x_arr = [1, 2, 3];
    x_arr.reverse();
    console.log(x_arr);
}
rever_arr();

// 2.  **Accessing Array Elements**
// Phần từ đầu tiên sẽ có vị trí là 0
    const a = [1, 2, 3, 4, 5];
    console.log(a[2]);

// 3.  **Array Filtering**:
//     - Problem: Use `.filter()` to create a new array that only contains numbers greater than 10.
//     - Input: [5, 12, 18, 1, 24].
//     - Output: [12, 18, 24].
//     - Explanation: `.filter()` creates a new array with all elements that pass the test implemented by the provided function.
    const b = [5, 12, 18, 1, 24];
    const over10 = b.filter(number => number >10);
    console.log(over10);

// 4.  **Array Reduction**:
// Hàm reduce() sử dụng để tính toán, tìm giá trị lớn nhất/nhỏ nhất,... trên mảng. 
    const c = [1, 2, 3, 4, 5];
    const sum = c.reduce((cur, fut) => cur + fut);
    console.log(sum)
// 5.  **Filter Array**
// Hàm filter() trả về mảng mới chứa các phần tử thỏa điều kiện.
    function filterValue(arr, given) {
        // Use the filter method to create a new array with values greater than the threshold
        return arr.filter(value => value > given);
      }
      
      const arrValue = [1, 4, 6, 7, -3];
      const givenValue = 5;
      
      const result = filterValue(arrValue, givenValue);
      console.log(result); 
// 6.  **Map Array**
// hàm map() sử dụng để xác định lên từng phần tử của mảng và tạo ra một mảng mới.
      const arr1 = [1, 2, 3];
      const squareArr = arr1.map(function(num){
        return num**2;
      });
      console.log(squareArr);