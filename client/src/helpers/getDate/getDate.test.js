const { getDate } = require("./getDate");

const testValue = new Date();

test("Expect date to be Today", () => {
  expect(getDate(testValue)).toBe("Today");
});
