function factorialOfNumber(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialOfNumber(n - 1);
    }
  }

  console.log(factorialOfNumber(5));
  console.log(factorialOfNumber(10));
  