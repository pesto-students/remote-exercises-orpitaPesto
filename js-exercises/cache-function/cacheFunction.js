
function cacheFunction(fn){
  let cache = {};
  return (value) => {    
    if (value in cache) {
      console.log('Fetching from cache');
      return cache[value];
    }
    else {
      console.log('executing and fetching results');
      let result = fn(value);
      cache[value] = result;
      return result;
    }
  }
}
export {
  cacheFunction,
};
