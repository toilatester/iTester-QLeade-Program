var _array = new Array(1,2,3,4,5,6,7,8,9,10);
function get_array_less_than_key(_array, _key){
    var output_array = _array.filter(number => {
        return number < _key
    });
    return output_array;
}
var _array_2 = get_array_less_than_key(_array, 7);
console.log(_array_2);