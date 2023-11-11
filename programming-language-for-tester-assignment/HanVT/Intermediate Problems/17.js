const a = [1, 2, 3, 4, 5]
var max

function returnMaxInArr(a) {
    max=a[0];
    for (let i = 1; i <= a.length; i++) {
        if (a[i] >= max) { max = a[i] }
    }
}

console.log(max)