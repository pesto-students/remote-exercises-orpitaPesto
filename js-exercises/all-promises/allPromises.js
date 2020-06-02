const allPromises = (arrayOfPromises) => {
let result = [];
let count = arrayOfPromises?arrayOfPromises.length:0 ;
    return new Promise((resolve, reject) =>{
    arrayOfPromises.forEach(promise => {
        Promise.resolve(promise)
        .then(value => {
            result.push(value);
            if(result.length == count)
            {
                resolve(result);
            }
        })
        .catch(err => {
            result.push(err);
            if(result.length == count)
            {
                resolve(result);
            }
        })
    });
});

};

export { allPromises };
