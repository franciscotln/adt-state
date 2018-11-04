const test = require('tape');
const fst = require('../../../State/runners/fst');

test('Runner::fst should return the resultant part of the pair returned by the State instance', (t) => {
  const State = f => s => f(s);
  const runWith = State(x => [x + 3, x]);

  const resultant = fst(runWith(2));

  t.equal(resultant, 5);
  t.end();
});
