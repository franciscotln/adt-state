const State = f => function State(s) {
  return f(s);
};

module.exports = State;
