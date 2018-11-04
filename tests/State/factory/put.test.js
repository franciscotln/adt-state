const test = require('tape');
const put = require('../../../State/factory/put');

test('Factory::put should set the provided value to the state portion and set the resultant to null', (t) => {
  const runWith = put(3);

  t.deepEqual(runWith(7), [null, 3]);
  t.end();
});
