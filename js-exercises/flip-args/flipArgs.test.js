// write your own test cases

import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should call the function with reversed order", () => {
    expect(flipArgs(1, 2, 3, 4, 5)).toEqual([5, 4, 3, 2, 1]);
    expect(flipArgs("a", "b", "c", "d")).toEqual(["d", "c", "b", "a"]);
    expect(flipArgs("test", 100)).toEqual([100, "test"]);
  });
});