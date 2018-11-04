const test = require('tape');
const chain = require('../../../State/operators/chain');

test('Operator::chain should flatten a 1-level deep State instance', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x + 3, x]);

  const runWith = chain(x => State(y => [x * y, y]))(instance);
  const [resultant, state] = runWith(7);

  t.equal(resultant, 70);
  t.equal(state, 7);
  t.end();
});
