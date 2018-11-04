const test = require('tape');
const State = require('../../../State/factory/State');

test('Factory::State constructor takes a function that returns a pair (array with only 2 elements)', (t) => {
  const stateToRunWith = State(x => [3 + x, x]);

  t.deepEqual(stateToRunWith(7), [10, 7]);
  t.end();
});
