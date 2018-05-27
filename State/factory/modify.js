const State = require('./State');

module.exports = function modify(f) {
  return State(s => [null, f(s)]);
};
