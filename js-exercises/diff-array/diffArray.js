function diffArray(array1, array2) {
  var combinedArray = array1.concat(array2);
  let distinctValue = [];
  for(let item of combinedArray)
  {
    if((array1.includes(item) && !array2.includes(item)) || (!array1.includes(item) && array2.includes(item) ) ) 
    {
      distinctValue.push(item) ;
    }
  }
  return distinctValue;
}

export {
  diffArray,
};
