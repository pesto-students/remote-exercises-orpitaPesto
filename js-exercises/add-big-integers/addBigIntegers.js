function addBigIntegers(intString) {

    
}

export { addBigIntegers };
function isInt(n){
    return Number(n) === n && n % 1 === 0;
}function sum(stringNum)
{
    let numbersInArray = stringNum.split("\n");
    let maximumDigitsBe = 0; 
    console.log('numbersInArray :', numbersInArray);
    let digitsArray = [];
    numbersInArray.forEach(key => {
        let splitKey =key.split('');
        if(splitKey.length > maximumDigitsBe){
        maximumDigitsBe = splitKey.length;
        }
        digitsArray.push(splitKey);
    });
    console.log('maximumDigitsBe :', maximumDigitsBe, ' digitsArray :', digitsArray);
    let sum = '';
    let carryOver = 0;
    for(let i=0; i < maximumDigitsBe; i++)
    {
        let digitsum = carryOver;
        digitsArray.forEach(key => {
            console.log('Keys', key[i] ,i ,key, 'calcilated',key[(key.length-(i+1))]);
            if(key[(key.length-(i+1))])
            {
                digitsum = digitsum + (+key[(key.length-(i+1))]);
            }
        });
        console.log('DigitSum :', digitsum, ' i :', i);
        if(digitsum >= 10 ){
        carryOver = digitsum % 10;
        console.log('YUUUMMM :', ~~(digitsum / 10));
        if(isInt(digitsum / 10)){
            carryOver = digitsum / 10;
            sum = 0+'' + sum
        }
        else{
        sum = ~~(digitsum / 10) +'' + sum;
        }
        
        
        }
        else{
            carryOver=0;
            sum = digitsum +'' + sum;
        }
        console.log('DI44444 :', sum, 'carryOver', carryOver);
    }
    console.log('SUM :', sum);
}
