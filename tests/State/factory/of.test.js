const test = require('tape');
const of = require('../../../State/factory/of');

test('Factory::of should set the provided value to the resultant portion of the returned State instance', (t) => {
  const runWith = of(3);

  t.deepEqual(runWith(7), [3, 7]);
  t.end();
});
