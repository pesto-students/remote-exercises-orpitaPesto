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

// const city2country = { Amsterdam: 'Netherlands', Rotterdam: 'Netherlands', Paris: 'France' };

const invert = (object) => Array.prototype.reverse.apply(object);

const merge = input => {
  const object = {};
  for (const item of input) {
    Object.assign(object, item);
  }
  return object;
};

const all = (inputArray, callBack) => inputArray.every(callBack);

const some = inputArray => inputArray.some(el => el <= 500);

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};
