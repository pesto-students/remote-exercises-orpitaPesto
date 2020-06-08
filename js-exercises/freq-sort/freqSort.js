
function frequencySort(array) {
  return array.sort().filter((item, index, originalArray) => !index || item != originalArray[index-1]).reverse();
}

export {
  frequencySort,
};
