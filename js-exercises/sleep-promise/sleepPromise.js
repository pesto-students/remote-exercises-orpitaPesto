function sleep(ms) {
    const promise_function = new Promise((resolve) => setTimeout(() => resolve(), ms)).then((args) => args);
    const promise = (args) => promise_function.then(() => args);
    promise.then = function (onSuccess) {
      return promise_function.then(onSuccess);
    };
    promise.catch = function (onRejected) {
      return promise_function.catch(onRejected);
    };
    return promise;
  }
export { sleep };
