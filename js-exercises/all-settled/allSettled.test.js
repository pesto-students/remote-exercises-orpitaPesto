import { allSettled } from './allSettled';

describe('allSettled', () => {
    test('return a Promise', () => {
      expect(allSettled([Promise.resolve('test')]) instanceof Promise).toBe(true);
    });
  
    test('get List Of Promise success and failures', () => {
      const p1 = Promise.resolve(33);
      const p2 = Promise.reject(4);
      const p3 = 99;
      
      return expect(allSettled([p1, p2, p3])).resolves.toEqual([
        {
          status: 'fulfilled',
          value: 33,
        },
        {
          status: 'fulfilled',
          value: 99,
        },
        
        {
          status: 'rejected',
          reason: 4,
        },
      ]);
    });
    test('check execution of promises', () => {
        const promise1 = Promise.resolve(3);
        const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
        const promises = [promise1, promise2];


        return expect(allSettled(promises)).resolves.toEqual([
          {
            status: 'fulfilled',
            value: 3,
          },
          {
            status: 'rejected',
            reason: 'foo',
          },
        ]);
      });
  });
