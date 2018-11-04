const test = require('tape');
const runWith = require('../../../State/runners/run-with');

test('Runner::runWith should evaluate the State instance and return a Pair(resultant, state)', (t) => {
  const State = f => s => f(s);
  const instance = State(x => [x + 1, x]);

  const pair = runWith(5)(instance);

  t.deepEqual(pair, [6, 5]);
  t.end();
});
