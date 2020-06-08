function aperture(number, array) {
    if(number > array.length)
    {
        return [];
    }
    else {
        if(number == array.length)
        {
            return [array];
        }
        else{
            let finalarray = [];
            let firstNum = array[0];
            
            for(let i = 0; i< array.length; i++)
            {
                let tempArray = [];
                let j = 0;
                while (j < number)
                {
                    let tempNum =firstNum + i + j;
                    tempArray.push(tempNum);
                    j = j+1;
                    if(array.indexOf(tempNum)==-1)
                    {
                        tempArray = []; 
                    }
                }
                if(tempArray.length>0)
                {
                    finalarray.push(tempArray);

                }
            }
            return finalarray;
        }

    }
}

export { aperture };
