import generateFibonacci from '../src/generateFibonacci';

test('generateFibonacci function', () => {
  expect(generateFibonacci(0)).toEqual([]);

  expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);

  expect(generateFibonacci(11)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
});
