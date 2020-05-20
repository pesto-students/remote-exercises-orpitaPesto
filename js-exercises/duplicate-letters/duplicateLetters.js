
function duplicateLetters(string) {
  let frequency = {};
  let numberOfRepititions = 0;
  for (let i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (frequency[character]) {
         frequency[character]++;
      } else {
         frequency[character] = 1;
      }

      if(1 < frequency[character] &&  frequency[character] > numberOfRepititions )
      {
        numberOfRepititions = frequency[character];
      }
  }
  if (numberOfRepititions != 0)
  {
    return numberOfRepititions;
  }
  return false;
}
export {
  duplicateLetters,
};
