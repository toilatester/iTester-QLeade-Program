arr=[1,2,3,4,5]
b=[]

function reverseArray(a){
    for (let i=arr.length-1;i>=0;i--)
    {
        b.push(a[i])
    }
}

reverseArray(arr)
console.log(b)