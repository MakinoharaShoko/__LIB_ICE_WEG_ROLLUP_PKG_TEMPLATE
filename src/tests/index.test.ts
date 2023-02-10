const addOne = require('../index')

test('adds 1 + 1 to equal 2', () => {
  expect(addOne.addOne(1)).toBe(2);
});
