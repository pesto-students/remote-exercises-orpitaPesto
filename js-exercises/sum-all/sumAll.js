function getRangeOfNumbers(start,end) {
  let array = [];
  for (let i = start; i <= end; i++) {
        array.push(i);
      }
      return array;
  
  }
  function getSum(arrayOfNumbers)
  {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum = sum + arrayOfNumbers[i];
    }
    return sum;
  }
  
  function sumAll(arrayOfNumbers) {
    let startNumber = arrayOfNumbers[0];
    let endNumber = arrayOfNumbers[1];  
      if(startNumber > endNumber)
      {
          startNumber = arrayOfNumbers[1];
          endNumber = arrayOfNumbers[0];
      }
      let range = getRangeOfNumbers(startNumber,endNumber);
      let sum = getSum(range);
  return sum;
      
  }

export {
  sumAll,
};
