function limitFunctionCallCount(call_function, maximum_calls)
{
  let countForCalls = 0;
  return function (...input) {
    countForCalls += 1;
    return ( countForCalls <= maximum_calls) ? call_function(...input) : null;
  }
}

export {
  limitFunctionCallCount,
};