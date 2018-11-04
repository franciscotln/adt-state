const test = require('tape');
const get = require('../../../State/factory/get');

test('Factory::get when no function is provided', (t) => {
  const runWith = get();

  t.deepEqual(runWith(2), [2, 2]);
  t.end();
});

test('Factory::get when a function is provided', (t) => {
  const runWith = get(n => n + 3.141);

  t.deepEqual(runWith(2.718), [2.718 + 3.141, 2.718]);
  t.end();
});
