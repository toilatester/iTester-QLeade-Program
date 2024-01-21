function arrMap(arr) {
    const res = arr.map((element) => element*2);
    return res;
}

const arr = [1, 2, 3];
const res = arrMap(arr);
console.log(res);