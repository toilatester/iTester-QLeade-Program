a = [3, 1, 4, 1, 5]
var temp;

function sort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++)
        {
            if (a[i]>a[j]) {
                temp=a[i];
                a[i]=a[j];
                a[j]=temp
            }
        }
    }
    return a
}

console.log(sort(a))