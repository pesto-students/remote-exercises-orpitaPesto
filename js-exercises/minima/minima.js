function minima(numberOfElements, array){
    let sortedArray = array.sort(function(a, b){return a-b})
    return sortedArray.slice(0, numberOfElements);
   }
export { minima };
