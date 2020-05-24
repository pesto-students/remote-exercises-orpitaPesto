// write your own test cases

import { flipArgs } from "./flipArgs";

describe("flipArgs", () => {
  it("should call the function with reversed args", () => {
    expect(flipArgs(1, 2, 3, 4)).toStrictEqual([4, 3, 2, 1]);
    expect(flipArgs("a", 2, "b", 4)).toStrictEqual([4, "b", 2, "a"]);
  });
});