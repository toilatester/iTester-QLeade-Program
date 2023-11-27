function printArguments(...args) {
    console.log('Các biến đối số là:');
    for (const arg of args) {
      console.log(arg);
    }
  }
  printArguments('a', 'b', 'c');
  printArguments('1', 2, 'Thientin');