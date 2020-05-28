import { map, filter
    // filter, invert, merge, all, some
 } from './objectUtils';

// write your own test cases

describe("Testing Object Utils", () => {
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
        const actorsInMovie = [
            {actor: 'Daniel Radcliffe', movie:'Harry Potter'},
            {actor: 'Emma Watson', salary:'Harry Potter'},
            {actor: 'Leonardo DiCaprio', salary:'Titanic'},
            {actor: 'Leonardo DiCaprio', salary:'This Boy\'s Life'},
            {actor: 'Leonardo DiCaprio', salary:'Once Upon a Time in Hollywood'},
        ]
        const moviesOfActor = filter(actorsInMovie, ([key, val]) => key === val);
        expect(moviesOfActor)
        .toStrictEqual([
            {actor: 'Leonardo DiCaprio', salary:'Titanic'},
            {actor: 'Leonardo DiCaprio', salary:'This Boy\'s Life'},
            {actor: 'Leonardo DiCaprio', salary:'Once Upon a Time in Hollywood'}
        ]);
  });
});