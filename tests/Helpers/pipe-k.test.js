const test = require('tape');
const pipeK = require('../../Helpers/pipe-k');

test('Pipe Kleisli: should flatten the provided functions from left to right like a sequence of "chain" operators', (t) => {
  const State = f => s => f(s);

  const runWith = pipeK(
    x => State(y => [x + y, y]),
    x => State(y => [x * y, y]),
    x => State(y => [x / 70, y]),
  )(3);

  t.deepEqual(runWith(7), [1, 7]);
  t.end();
});
