function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function addBigIntegers(intString) {
    let numbersInArray = intString.split("\n");
    let maximumDigitsBe = 0; 
    let digitsArray = [];
    numbersInArray.forEach(key => {
        let splitKey =key.split('');
        if(splitKey.length > maximumDigitsBe){
        maximumDigitsBe = splitKey.length;
        }
        digitsArray.push(splitKey);
    });

    let sum = '';
    let carryOver = 0;
    for(let i=0; i < maximumDigitsBe; i++)
    {
        let digitsum = carryOver;
        digitsArray.forEach(key => {
            if(key[(key.length-(i+1))])
            {
                digitsum = digitsum + (+key[(key.length-(i+1))]);
            }
        });
        if(digitsum >= 10 ){
        carryOver = ~~(digitsum / 10);

            if(isInt(digitsum / 10)){
                carryOver = digitsum / 10;
                sum = 0+'' + sum
            }
            else{
            sum = ~~(digitsum % 10) +'' + sum;
            }
        
        
        }
        else{
            carryOver=0;
            sum = digitsum +'' + sum;
        }
    }
    if(carryOver != 0){sum = carryOver + '' +sum}
    return sum;
}

export { addBigIntegers };