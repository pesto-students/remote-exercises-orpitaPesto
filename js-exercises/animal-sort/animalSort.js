const animalSort = function (listOfAnimals)  {
    return listOfAnimals.sort(function(item1, item2){
        return item1.numberOfLegs == item2.numberOfLegs ? 
          (item1.name == item2.name ? (0) : item1.name > item2.name || -1) :
          item1.numberOfLegs > item2.numberOfLegs || -1;
      });
};

export { animalSort };
