const State = require('./State');

module.exports = function put(s) {
  return State(() => [null, s]);
};
