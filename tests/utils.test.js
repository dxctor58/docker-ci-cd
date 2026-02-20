const { add } = require('../app/utils');

test('add positive numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('add negative numbers', () => {
  expect(add(-1, -5)).toBe(-6);
});
