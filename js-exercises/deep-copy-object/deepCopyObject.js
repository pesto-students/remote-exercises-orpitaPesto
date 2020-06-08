const deepCopyObject = (inputObject) => {
    let outputObject, value;
  
    if (typeof inputObject !== "object" || inputObject === null) {
      return inputObject ;
    }
  
    outputObject = Array.isArray(inputObject) ? [] : {}
  
    for (let key in inputObject) {
      value = inputObject[key];
      outputObject[key] = deepCopyObject(value);
    }
  
    return outputObject;
  }
export { deepCopyObject };
