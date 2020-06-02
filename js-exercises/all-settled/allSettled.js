async function allSettled(array) {
    let result = [];
    let count = array.length;
   return new Promise((resolve, reject) => {
        array.forEach((promise) => {
            Promise.resolve(promise)
            .then(value => {
                result.push({status: 'fulfilled', value});
                if(result.length == count)
                {
                    resolve(result);
                }
            })
            .catch(err => {
                result.push({status: 'rejected', reason: err});
                if(result.length == count)
                {
                    resolve(result);
                }
            })
        });
        
    });
    
}
export { allSettled };
