import { formatData } from "./utils";

describe("Groups utils", () => {
  it("should format data correctly", () => {
    const response = formatData([1, 2, 3], ["a", "b", "c"]);

    expect(response).toStrictEqual([
      { x: 1, y: "a" },
      { x: 2, y: "b" },
      { x: 3, y: "c" },
    ]);
  });
});
