const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test.each([1, 2, 3, 4])('example each test', (a) => {
  expect(a).toBe(a);
});
