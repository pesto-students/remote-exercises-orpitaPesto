
	function  reverse(str)
  {
    var charArray = [];
    for (var i = 0; i < str.length; i++)
      {
        if (i+1 < str.length)
          {
            var value = str.charCodeAt(i);
            var nextValue = str.charCodeAt(i+1);
            if (   (   value >= 0xD800 && value <= 0xDBFF
                    && (nextValue & 0xFC00) == 0xDC00) 
                || (nextValue >= 0x0300 && nextValue <= 0x036F))
              {
                charArray.unshift(str.substring(i, i+2));
                i++; 
                continue;
              }
          }
          charArray.unshift(str[i]);
      }
  
    return charArray.join('');
  }
  
  function  equal(str1, str2)
  {
    return !str1.localeCompare(str2);
  }
export {
  reverse,
  equal
};
