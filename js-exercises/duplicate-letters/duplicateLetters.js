
function duplicateLetters(text) {
  let textArray = text.split("");
  let numberOfDuplicates = 0;
  for (let i=0; i<textArray.length; i++) 
  {
    let letter = textArray[i];
    let lastIndex = textArray.lastIndexOf(letter);
    if(lastIndex !== i)
    {
      numberOfDuplicates++;
    }
  }
  if(numberOfDuplicates === 0)
  {
    return false;
  }
  
  return numberOfDuplicates;
}

export {
  duplicateLetters,
};
