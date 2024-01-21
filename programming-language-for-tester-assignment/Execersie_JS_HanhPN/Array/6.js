function squareArray(arr) {
    let res = [];
    arr.forEach(element => {
        res.push(element*element);
    });
    return res;
}

const arr = [1, 2, 3];
const res = squareArray(arr);
console.log("res:", res);
