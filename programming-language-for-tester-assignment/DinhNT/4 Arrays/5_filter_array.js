function filter_arr(arr, std){
    return arr.filter(function (num){return num > std});
}

console.log(filter_arr([1, 4, 6, 7, -3], 5));