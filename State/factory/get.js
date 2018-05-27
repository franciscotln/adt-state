const get = f => function State(s) {
  return [typeof f === 'function' ? f(s) : s, s];
};

module.exports = get;
