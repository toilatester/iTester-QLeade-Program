const sample="hello"
const check="l"
var count

function countAppear(sample,check){
    count=0;
    for (let i=0;i<sample.length;i++){
        if (sample[i]===check) {count=count+1}
    }
    return count
}


console.log(countAppear(sample,check))
