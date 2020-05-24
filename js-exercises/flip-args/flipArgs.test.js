// write your own test cases

import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should call the function with reversed order", () => {
    expect(flipArgs(1, 2, 3, 4, 5)).toStrictEqual([5, 4, 3, 2, 1]);
    expect(flipArgs("a", "b", "c", "d")).toStrictEqual(["d", "c", "b", "a"]);
    expect(flipArgs("test", 100)).toStrictEqual(["test", 100]);
  });
});