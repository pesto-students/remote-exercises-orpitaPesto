import { allPromises } from './allPromises';

describe('allPromises', () => {
  test('The function should return a Promise', () => {
    expect(allPromises() instanceof Promise).toBe(true);
  });

  test('Promise call should return an array of values from promises', () => {
    const p1 = new Promise(res => res(1));
    const p2 = 2;
    const p3 = Promise.resolve(3);
    const p4 = Promise.reject(5);
    return expect(allPromises([p1, p2, p3, p4])).resolves.toEqual([1, 2, 3, 5]);
  });
});
