const test = require('tape');
const evalWith = require('../../../State/runners/eval-with');

test('Runner::evalWith evaluates the State instance and returns the resultant portion', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x + 1, x]);

  const resultant = evalWith(10)(instance);

  t.equal(resultant, 11);
  t.end();
});
