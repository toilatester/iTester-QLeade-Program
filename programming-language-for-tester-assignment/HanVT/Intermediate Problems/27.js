const a="hello"
var b="";


function reverseString(a){
    for (let i=a.length-1;i>=0;i--){
        b=b+a[i]
    }
    return b
}

console.log(reverseString(a))


