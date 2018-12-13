import { headers } from ".";

describe("Headers", () => {
  it("should return proper header", () => {
    localStorage.setItem("token", "testtoken");
    const expected = {
      headers: { Authorization: "testtoken" }
    };
    expect(headers()).toEqual(expected);
  });
});
