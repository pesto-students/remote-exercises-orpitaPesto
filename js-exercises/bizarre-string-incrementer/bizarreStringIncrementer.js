// Start your implementation here
const bizarreStringIncrementer = item => 
{

    let extractedNumber = item.match(/\d+$/);
    if(extractedNumber != null)
    {
        let length = item.length -1;
        let remainder= 1;
        while(remainder == 1)
        {
            if(isNaN(item[length]))
            {
                item = item.substring(0, length) + (item[length] +'1') + item.substring(length + 1);
                remainder = 0;
            }
            else{
                let increment = +item[length] + 1;
                if(+item[length] <= 8)
                {
                    remainder = 0;
                    item = item.substring(0, length) + increment + item.substring(length + 1);
                }
                else{
                    item = item.substring(0, length) + 0 + item.substring(length + 1);
                    
                    length = length -1;
                }
            }
            
        }
    }
    else{
        item = item + 1
    }
    return item;
}

export {bizarreStringIncrementer}