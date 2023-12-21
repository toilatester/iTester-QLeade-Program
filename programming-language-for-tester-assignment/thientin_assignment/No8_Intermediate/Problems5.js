var _array = new Array(1, 'b', 3, '123', 6);
var output_array = _array.filter(number => {
    return !isNaN(number);
}
);
console.log(output_array);