const a=[1,2,3,4,5]
var sum

function sumArr(a){
    sum=0;
    sum=a.reduce((sumold,index)=>{
    return sumold+index})
    return sum;
}

console.log(sumArr(a))