const numbersArrReverse = [];
class Arrays {
    orderReverseArr(numbers) {
        for (let i = numbers.length - 1; i >= 0; i--) {
            numbersArrReverse.push(numbers[i]);
        }
        console.log("1.Array Manipulation --> " + numbersArrReverse.toString());
    }
    accessArrElement(numbers, index) {
        console.log("2.Accessing Array Elements ---> " + "index at: " + index + " value " + numbers[index]);
    }
    arrFiltering(numbersArr) {
        let dataFilter = numbersArr.filter(numbersArr => numbersArr > 10);
        console.log("3.Array Filtering ---> " + dataFilter);
    }
    arrReduce(numbersArr) {
        let dataReduce = numbersArr.reduce((acc, val) => acc + val, 0);
        console.log("4.Array Reduction ---> " + dataReduce);
    }
    filterArray(numbersArr, value) {
        let dataFilterArr = numbersArr.filter(numbersArr => numbersArr > value);
        console.log("5.Filter Array ---> " + dataFilterArr);
    }
    mapArray(numbersArr) {
        let mapArr = numbersArr.map(numbersArr => numbersArr ** 2);
        console.log("6.Map Array ---> " + mapArr);
    }
}
const arrays = new Arrays();
arrays.orderReverseArr([1, 2, 3, 4, 5]);
arrays.accessArrElement([1, 2, 3, 4, 5], 3);
arrays.arrFiltering([1, 2, 5, 10, 15]);
arrays.arrReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
arrays.filterArray([1, 4, 6, 7, -3], 5);
arrays.mapArray([1, 2, 3]);
