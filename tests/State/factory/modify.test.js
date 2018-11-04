const test = require('tape');
const modify = require('../../../State/factory/modify');

test('Factory::modify should apply the function to the state portion and set the resultant to null', (t) => {
  const runWith = modify(x => x * 3);

  t.deepEqual(runWith(7), [null, 21]);
  t.end();
});
