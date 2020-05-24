function chunkArrayInGroups(array, chunkSize) {
  let arrayOfArrays = [];
  for (var i=0; i<array.length; i+=chunkSize) {
       arrayOfArrays.push(array.slice(i,i+chunkSize));
  }
  return arrayOfArrays;
}

export {
  chunkArrayInGroups,
};
