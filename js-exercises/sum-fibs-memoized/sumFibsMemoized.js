function sumFibs(number) {
  var sum = 0;
  var FibonnacciNumber1 = 0;
  var FibonnacciNumber2 = 1;

  while ( FibonnacciNumber2 <= number){
    if (FibonnacciNumber2 % 2 == 1) {
        sum += FibonnacciNumber2;
    }
    
    FibonnacciNumber2 = FibonnacciNumber1 + FibonnacciNumber2;
    FibonnacciNumber1 = FibonnacciNumber2 - FibonnacciNumber1;
  }

  return sum;
}

function cacheFunction(functionCache) 
{
  let cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    else {
      let result = functionCache(n);
      cache[n] = result;
      return result;
    }
  }
}

export { sumFibs, cacheFunction };
