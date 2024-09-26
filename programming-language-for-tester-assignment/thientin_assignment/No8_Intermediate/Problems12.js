function hello(name = 'pikachu',  age= '2') {
    console.log(`Hello, i am ${name} and ${age} years old`);
  }

  hello();
  hello("doraemon");
  hello(undefined, "10");
  hello("nobita", "13");