const test = require('tape');
const map = require('../../../State/operators/map');

test('Operator::map should map the resultant portion of the pair returned by the State instance', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x, x]);

  const runWith = map(x => x * 3)(instance);
  const [resultant, state] = runWith(7);

  t.equal(resultant, 21);
  t.equal(state, 7);
  t.end();
});
