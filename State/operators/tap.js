module.exports = function tap(f) {
  return Sf => function State(s) {
    const pair = Sf(s);
    f(pair);
    return pair;
  };
};
