const fibonacciIter = {
    [Symbol.iterator]() {
      let n1 = 1, n2 = 2, value;
      return {
        next() {
          // Parallel assignment using destructuring value = n1; n1 = n2; n2 = n1 + n2;
          [value, n1, n2] = [n1, n2, n1 + n2];
   
          // The next line is equivalent to return {value: value, done: bool};
          return {value, 'done':true};
        }
      };
    }
  };

export { fibonacciIter };
