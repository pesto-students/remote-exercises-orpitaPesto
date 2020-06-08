const alphabeticShift = input => {
  var string = '';
  for(let i =0; i< input.length; i++)
  {
    var charCode = input[i].charCodeAt(0);
    if(charCode == 90)
    {
      string = string + 'A';
    }
    else if(charCode == 122)
    {
      string = string + 'a';
    }
    else {
      string = string + String.fromCharCode(charCode +1);
    }
    
  }
  return string;
};

export { alphabeticShift };
