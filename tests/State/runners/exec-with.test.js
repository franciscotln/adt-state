const test = require('tape');
const execWith = require('../../../State/runners/exec-with');

test('Runner::evalWith evaluates the State instance and returns the state portion', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x + 1, x]);

  const state = execWith(10)(instance);

  t.equal(state, 10);
  t.end();
});
