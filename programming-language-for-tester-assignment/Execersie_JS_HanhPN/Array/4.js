const numbers =[1,2,3,4,5];
const x = numbers.reduce(sum);
function sum(total, value){
    return total+value;
}
console.log(x);