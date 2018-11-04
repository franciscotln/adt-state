const test = require('tape');
const tap = require('../../../State/operators/tap');

test('Operator::tap should call a callback on the pair and return it as the original State instance', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x + 1, x]);
  let val = 0;
  const cb = ([l, r]) => {
    val = l + r;
  };

  const runWith = tap(cb)(instance);
  const [resultant, state] = runWith(7);

  t.equal(resultant, 8);
  t.equal(state, 7);
  t.equal(val, 15);
  t.end();
});
