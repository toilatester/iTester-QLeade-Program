var _array = new Array(2,4,6,7,8);
var sum_of_array = _array.reduce(function(sum, element) {
    return sum + element;
}, 0);
console.log(sum_of_array);