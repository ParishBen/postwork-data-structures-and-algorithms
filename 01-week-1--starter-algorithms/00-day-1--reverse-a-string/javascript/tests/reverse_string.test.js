const reverseString = require('../reverse_string');

reverseString("can handle an empty string", () => {
  expect(reverseString("")).toBe("");
});

reverseString("can handle a single character", () => {
  expect(reverseString("a")).toBe("a");
}); 

reverseString("can handle two characters", () => {
  expect(reverseString("ab")).toBe("ba");
});

reverseString("can handle three characters", () => {
  expect(reverseString("cat")).toBe("tac");
});

reverseString("can handle many characters", () => {
  expect(reverseString("sham-meow")).toBe("sham-meow".split("").reverse().join(""));
});
