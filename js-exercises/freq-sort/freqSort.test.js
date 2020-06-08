import { frequencySort } from './freqSort';

describe('Sorting in descending order', () => {
  test('Sort Test', () => {
    expect(frequencySort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([ 'z', 'b', 'a' ]);
    expect(frequencySort(["a", "b", "1"])).toEqual(["b", "a", "1"]);
  });
});
