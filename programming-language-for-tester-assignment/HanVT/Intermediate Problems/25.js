const a='JavaScript is awesome'
const strArr=a.split(" ")

var temp

function returnLongestArr(arr){
    temp=0
    for (let i=1;i<a.length;i++){
        if (a[i].length>a[temp].length) {temp=i}
    }
    return arr[temp]
}


console.log(returnLongestArr(strArr))