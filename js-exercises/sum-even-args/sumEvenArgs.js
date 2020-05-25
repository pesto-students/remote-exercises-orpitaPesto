const sumEvenArgs = (...args) => {
  let sum = 0;
  for(let item of args)
  {
    if(item % 2 == 0)
    {
      sum = sum + item;
    }
  }
  return sum;
};

export { sumEvenArgs };
