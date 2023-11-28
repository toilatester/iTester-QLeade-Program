// ## Functions and Scope
    function greet(name){
        console.log("Hello, " + name + "!");
        
    }
    greet("Alice");

// 2. **Scope Understanding**
    var name2 = "Alice"; 
    function globalName(){
        console.log("Hello, " + name2 + "!");
    };
    globalName();

// 3. **Function to Square**:
    function number(){
        var x = 4;
        console.log("The square of x is: " + x**2);
        
    }; 
    number();