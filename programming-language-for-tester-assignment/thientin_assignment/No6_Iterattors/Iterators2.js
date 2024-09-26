var _array = new Array(1,2,3,4,5,6,7,8,9,10);
function square_array(_array){
    var output_array = _array.map(_number =>{
        return _number * 2;
    })
    return output_array;
}
console.log(_array);
console.log(square_array(_array));