function ToObject(value)
{
  if (typeof value !== 'undefined' || value === null) {
    throw new TypeError(`Expected a function, got ${typeof callBackFunction}`);
  }
  else if( typeof value === 'number'){
    return new Number(value);
  }
  else if( typeof value === 'boolean'){
    return new Boolean(value);
  }
  else if( typeof value === 'string'){
    return new String(value);
  }
  else if( typeof value === 'object'){
    return value;
  }
}

function HasProperty(O, Pk)
{
  if(O.hasOwnProperty(Pk))
  {
    return true;
  }
  return false;
}

const new_forEach = (callBackFunction, thisArg) => {
  const O = ToObject(this);
  const len = O['length'];
  
  if(typeof callBackFunction !== 'function')
  {
    throw new TypeError('Callback is not a function');
  }

  const T = thisArg !== undefined ? thisArg : undefined;

  let k = 0;
  while( k < len )
  {
    const Pk = k.toString();
    const kPresent = HasProperty(O, Pk);
    if (kPresent)
    {
      const kValue = O[Pk];
      const item = callBackFunction(T, kValue, k, O);
    }
    k++;
  }
  return undefined;
}

const new_map = (callBackFunction, thisArg) => {
  const O = ToObject(this);
  const len = O['length'];
  
  if(typeof callBackFunction !== 'function')
  {
    throw new TypeError('Callback is not a function');
  }

  const T = thisArg !== undefined ? thisArg : undefined;

  let k = 0;
  while( k < len )
  {
    const Pk = k.toString();
    const kPresent = HasProperty(O, Pk);
    if (kPresent)
    {
      const kValue = O[Pk];
      const mappedItem = callBackFunction(T, kValue, k, O);
      A[k]= mappedItem;
    }
    k += 1;
  }
  return A;
}
export {
  new_forEach,
  new_map,
  new_filter,
  new_reduce,
}