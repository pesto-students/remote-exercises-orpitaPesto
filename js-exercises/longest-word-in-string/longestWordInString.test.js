import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  // write your own test cases
  it('should return largest word in string', () => {
    expect(longestWordInString('JavaScript Unit Tests are usually run in the browser or on the frontend')).toBe('JavaScript');
  })
});
