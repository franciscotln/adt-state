const test = require('tape');
const pipe = require('../../Helpers/pipe');

test('Pipe: should behave like the identity function if no functions is given to the pipe', (t) => {
  t.equal(pipe()(2), 2);
  t.end();
});

test('Pipe: should compose functions from left to right and return a new unary function', (t) => {
  const add2 = x => x + 2;
  const multiplyBy5 = x => x * 5;
  const divideBy30 = x => x / 30;

  t.equal(pipe(add2, multiplyBy5, divideBy30)(4), 1);
  t.end();
});
