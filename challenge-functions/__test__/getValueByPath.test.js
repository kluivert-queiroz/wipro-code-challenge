import getValueByPath from '../src/getValueByPath';

test('getValueByPath function', () => {
  let data;

  data = { a: { b: 1 } };
  expect(getValueByPath(data, 'a.b')).toEqual({
    has: true,
    value: 1,
  });

  data = { a: { b: 1, c: [1, 2, 3] } };
  expect(getValueByPath(data, 'a.c.2')).toEqual({
    has: true,
    value: 3,
  });

  data = { a: 1 };
  expect(getValueByPath(data, '')).toEqual({
    has: true,
    value: data,
  });

  data = { a: { b: 1 } };
  expect(getValueByPath(data, 'a.c')).toEqual({
    has: true,
    value: undefined,
  });
});
