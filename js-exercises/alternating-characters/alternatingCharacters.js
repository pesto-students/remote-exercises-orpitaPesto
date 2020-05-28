function getNumberOfDeleted(element)
{
    let characters = element.split('');
    let uniqueCharacter = characters[0];
    characters = characters.filter((item) =>{
        if(item != uniqueCharacter)
        {
            uniqueCharacter = item;
            return item;
        }
    });
    return element.length -[element.charAt(0), ...characters].length; 
}


function alternatingCharacters(arr) {
    let deletedNumbers= [];
    arr.forEach(element => {
        let returnNumerOfDeleted = getNumberOfDeleted(element);
        deletedNumbers.push(returnNumerOfDeleted);
    });
    return deletedNumbers;
}

export { alternatingCharacters };
