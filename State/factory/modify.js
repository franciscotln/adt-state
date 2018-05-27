const modify = f => function State(s) {
  return [null, f(s)];
};

module.exports = modify;
