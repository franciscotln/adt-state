const test = require('tape');
const snd = require('../../../State/runners/snd');

test('Runner::fst should return the state part of the pair returned by the State instance', (t) => {
  const State = f => s => f(s);
  const runWith = State(x => [x + 3, x]);

  const state = snd(runWith(2));

  t.equal(state, 2);
  t.end();
});
