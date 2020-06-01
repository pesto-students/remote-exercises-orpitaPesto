import { map, filter, invert,  merge, all, some
 } from './objectUtils';

// write your own test cases

describe("Testing Object Utils", () => {
    const actorsInMovie = [
        {actor: 'Daniel Radcliffe', movie:'Harry Potter'},
        {actor: 'Emma Watson', salary:'Harry Potter'},
        {actor: 'Leonardo DiCaprio', salary:'Titanic'},
        {actor: 'Leonardo DiCaprio', salary:'This Boy\'s Life'},
        {actor: 'Leonardo DiCaprio', salary:'Once Upon a Time in Hollywood'},
    ]
        it("Map transforms object as per the desired callback function", () => {
            const actorsSalaryInPreviousYear = [
                {actor: 'Daniel Radcliffe', salary:'110'},
                {actor: 'Emma Watson', salary:'60'}
            ]
            const actorsSalaryInCurrentYear = map(actorsSalaryInPreviousYear, ([key, val]) => { return [key.toUpperCase(), val * 10]});
            expect(actorsSalaryInCurrentYear)
            .toStrictEqual([
                ["DANIEL RADCLIFFE", 1100],
                ["EMMA WATSON", 600]
            ]);
      });

      //filter(obj, ([key, val]) => key === 'name');
      it("Filters transforms object as per the desired callback function", () => {
        const moviesOfActor = filter(actorsInMovie, ([key, val]) => key === val);
        expect(moviesOfActor)
        .toStrictEqual([
            {actor: 'Leonardo DiCaprio', salary:'Titanic'},
            {actor: 'Leonardo DiCaprio', salary:'This Boy\'s Life'},
            {actor: 'Leonardo DiCaprio', salary:'Once Upon a Time in Hollywood'}
        ]);
    });

    it("Inverts object as per the desired callback function", () => {
        const actorsInMovieList = [
            {'Daniel Radcliffe':'Harry Potter',  'Emma Watson':'Harry Potter','Leonardo DiCaprio':'Titanic', 'Leonardo DiCaprio':'This Boy\'s Life','Leonardo DiCaprio':'Once Upon a Time in Hollywood'}
        ]
        const moviesOfActors = invert(actorsInMovieList);
        expect(moviesOfActors)
        .toStrictEqual([{"Daniel Radcliffe":"Harry Potter","Emma Watson":"Harry Potter","Leonardo DiCaprio":"Once Upon a Time in Hollywood"}]);
    });

    it('should merge multiple objects into one single large object', () => {
        const actorsInMovieList = [
            {'Daniel Radcliffe':'Harry Potter'},  {'Emma Watson':'Harry Potter'},{'Leonardo DiCaprio':'Titanic'}
        ]
        expect(merge(actorsInMovieList)).toStrictEqual({'Daniel Radcliffe':'Harry Potter', 'Emma Watson':'Harry Potter', 'Leonardo DiCaprio':'Titanic'});
          });
      it('should return true if every value in the array is below a given value, else false', () => {
        function isGreaterThan5(element, index, array) 
        {
        return element > 5;
        }
        expect(all([34,98,76,24,29,899,456,898,999,1000], isGreaterThan5)).toBe(true);
        expect(all([1,2,3,4])).toBe(false);
      });
      it('should return true if some/any value in the array is below a given value, else false', () => {
        expect(some([675,900,879,879,876,656,545,990])).toBe(false);
        expect(some([67,900,89,879,876,656,545,90])).toBe(true);
      });
});