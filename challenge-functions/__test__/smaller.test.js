import smaller from '../src/smaller';

test('smaller function', () => {
  let data;

  data = [5, 4, 3, 2, 1];
  expect(smaller(data)).toEqual([4, 3, 2, 1, 0]);

  data = [1, 2, 0];
  expect(smaller(data)).toEqual([1, 1, 0]);

  data = [15, 52, 6, 2, 6];
  expect(smaller(data)).toEqual([3, 4, 1, 0]);

  data = [5, 5, 5];
  expect(smaller(data)).toEqual([0, 0, 0]);

  data = [];
  expect(smaller(data)).toEqual([]);
});
