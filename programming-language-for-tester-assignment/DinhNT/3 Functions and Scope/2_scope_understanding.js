var a = "a";
let b = "b";
const c = "c";

function print(){
    a = a + 1;
    b = b + 1;
    let c = "c" + 1;

    console.log(a, b, c);
}

console.log(a, b, c);

print();

console.log(a, b, c);