const State = require('./State');

module.exports = function get(f) {
  return State(s => [typeof f === 'function' ? f(s) : s, s]);
};
