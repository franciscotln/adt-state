const test = require('tape');
const ap = require('../../../State/operators/ap');

test('Operator::ap should apply a lifted function to a value', (t) => {
  const add3 = x => x + 3;
  const State = f => s => f(s);
  const instance1 = State(x => [add3, x]);
  const instance2 = State(x => [x, x]);

  const runWith = ap(instance2)(instance1);
  const [resultant, state] = runWith(2);

  t.equal(resultant, 5);
  t.equal(state, 2);
  t.end();
});
