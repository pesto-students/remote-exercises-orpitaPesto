
function removeFalsyValues(array) {
  let newArray = [];
    for(let index in array)
    {
      let item = array[index];
      if(item )
      {
        newArray.push(item);
      }
    }
    return newArray;
  
  }

export {
  removeFalsyValues,
};
