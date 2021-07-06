import rankMostUsedLetters from '../src/rankMostUsedLetters';

test('rankMostUsedLetters function', () => {
  let data;

  data = 'This will be nice!';
  expect(rankMostUsedLetters(data)).toEqua([
    { letter: 'i', times: 3 },
    { letter: 'l', time: 2 },
    { letter: 'e', time: 2 },
  ]);

  data = 'Of course, this will be cool, bro!';
  expect(rankMostUsedLetters(data)).toEquals([
    { letter: 'o', times: 5 },
    { letter: 'l', time: 3 },
    { letter: 'c', time: 2 },
  ]);

  data = 'Are you will travel?';
  expect(rankMostUsedLetters(data)).toEquals([
    { letter: 'l', times: 3 },
    { letter: 'a', time: 2 },
    { letter: 'r', time: 2 },
  ]);

  data = 'Not me, Mathews will';
  expect(rankMostUsedLetters(data)).toEquals([
    { letter: 't', times: 2 },
    { letter: 'm', time: 2 },
    { letter: 'e', time: 2 },
  ]);

  data = 'Ok';
  expect(rankMostUsedLetters(data)).toEquals([
    { letter: 'o', times: 1 },
    { letter: 'k', time: 1 },
    {},
  ]);
});
