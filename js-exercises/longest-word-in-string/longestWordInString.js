function longestWordInString(strings) {

  let longestWord = '';
  const arrayOfWords = strings.split(' ');
  for (const word of arrayOfWords) 
  {
    if(word.length > longestWord.length)
    {
      longestWord = word;
    }
  }
  return longestWord;
}

export { longestWordInString };
