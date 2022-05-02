import { formatData } from "./utils";

describe("Groups utils", () => {
  it("should format data correctly", () => {
    const response = formatData([[1], [2], [3]]);

    expect(response).toStrictEqual([
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 3 },
    ]);
  });
});
