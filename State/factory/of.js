const State = require('./State');

module.exports = function of(r) {
  return State(s => [r, s]);
};
