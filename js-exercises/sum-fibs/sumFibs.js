function generateFibonacciSeries(number) {
  var number1  = 1, number2 = 0, temporaryNumber;
  let fibonacci_array = [];
  while (number1  < number){
    fibonacci_array.push(number1);
    temporaryNumber = number1;
    number1 = number1 + number2;
    number2 = temporaryNumber;
  }

  return fibonacci_array;
}

function fetchSumOfOddNumbersInArray(fibonacciSeries)
{
  let sum = 0;
  for(let i=0; i < fibonacciSeries.length ;i++)
  {
    let number = fibonacciSeries[i];
    if(number % 2 == 1 )
    {
      sum = sum + number;
    }
  }
  return sum;
}


function sumFibs(number) {
  let fibonacciSeries = generateFibonacciSeries(number);
  let sumOfOddFibonacciSeries= fetchSumOfOddNumbersInArray(fibonacciSeries);
  return sumOfOddFibonacciSeries;
}

export {
  sumFibs,
};
