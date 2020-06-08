function compare(a,b) {
    var firstAlphabeticalOrder = a.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
    var secondAlphabeticalOrder = b.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
        return (firstAlphabeticalOrder === secondAlphabeticalOrder) ? firstAlphabeticalOrder : false;
}
const countingAnagrams = string => {
    const arrayOfStrings = string.split(' ');
    let removeSingleLetters = [];
    arrayOfStrings.forEach((element,i) => {
        if(element.length > 1 )
        {
            removeSingleLetters.push(element);
        }
    });
    let counter = 0;
    let present = {occurence:0, items:[]};
    while(counter < removeSingleLetters.length)
    {
        for(let item of removeSingleLetters)
        {
            if(counter != removeSingleLetters.indexOf(item))
            {
                let resultOfComparison = compare(removeSingleLetters[counter], item);
                if(resultOfComparison && present.items.indexOf(resultOfComparison) === -1)
                {
                    ++present.occurence;
                    present.items.push(resultOfComparison);
                }
            }
            
        }
        counter++;
    }
    return present.occurence;

};

export { countingAnagrams };
