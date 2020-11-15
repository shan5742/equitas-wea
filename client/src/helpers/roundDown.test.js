const { roundDown } = require("./roundDown");

const testValue = 6.1234;

test("Rounds down 6.1234 to 6", () => {
  expect(roundDown(testValue)).toBe(6);
});
