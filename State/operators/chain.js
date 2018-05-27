module.exports = function chain(f) {
  return Sf => function State(s) {
    const [r, s1] = Sf(s);
    return f(r)(s1);
  };
};
