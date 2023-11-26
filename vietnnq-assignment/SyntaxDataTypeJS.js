const firstWorld = 'Hello, World!', nameOfPerson = 'John';
class syntaxDataTypeJS {
    print() {
        console.log(`1.Hello, World ! ---> , ${firstWorld}`);
        console.log(`2.Variable Declaration ! ---> , ${nameOfPerson}`);
    }
    calculate(a, b, c) {
        let result = (a + b) * c;
        console.log("3.Math Operations ! ---> " + result);
    }
    convertDataType(data, a) {
        let output = parseInt(data) + a;
        console.log("4.Type Conversion ! ---> " + output);
    }
}
const start = new syntaxDataTypeJS();
start.print();
start.calculate(7, 3, 2);
start.convertDataType('123', 7);
