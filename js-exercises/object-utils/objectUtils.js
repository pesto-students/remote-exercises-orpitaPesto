// your implementation

const map = (object, callBack) => {
  return object.map((item) => {
    return callBack([item.actor,item.salary]);
  });
}

const filter = (object, callBack) => {
  return object.filter((item) => {
    return callBack([item.actor,'Leonardo DiCaprio']);
  });
}

const city2country = { Amsterdam: 'Netherlands', Rotterdam: 'Netherlands', Paris: 'France' };
const invert = (object) => Object.keys(object).reduce((r, k) =>
        Object.assign(r, { [o[k]]: (r[o[k]] || []).concat(k) }), {})

console.log(reverseMapping(city2country));
export {
  map,
  filter,
  // invert,
  // merge,
  // all,
  // some,
};
