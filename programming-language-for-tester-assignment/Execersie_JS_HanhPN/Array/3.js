const numbers= [5, 12, 18, 1, 24, 30];
const over10= numbers.filter(myfunction)
function myfunction (value){
    return value>10;

}
console.log(over10);