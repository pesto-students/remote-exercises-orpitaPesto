function isPrime(number) {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number > 1;
}


function sumPrimes(number) {
  let sumOfPrimeNumbers = 0;
  while(number !=0)
  {
    if(isPrime(number)){
      sumOfPrimeNumbers = sumOfPrimeNumbers+ number;
    }
    number--;
  }
  return sumOfPrimeNumbers;
}

export {
  sumPrimes,
};
