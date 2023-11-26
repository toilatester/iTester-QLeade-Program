const globalVariable = "DataGlobalVariable";
class FunctionAndScope {
    constructor(name) {
        // Property of the class
        this.name = name;
    }
    // Method of the class
    greet() {
        console.log(`1.Writing a Function ---> Hello, ${this.name}!`);
    }
    logGlobalVariable() {
        console.log("2.Scope Understanding ---> ", globalVariable);
    }
    calcSquare(a) {
        let output = Math.pow(a, 2);
        console.log("3.Function to square ---> ", Math.floor(output));
    }
}
const go = new FunctionAndScope('John');
go.greet();
go.logGlobalVariable();
go.calcSquare(4);
