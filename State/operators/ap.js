module.exports = function ap(Sf) {
  return Sg => function State(s) {
    const [f, s1] = Sg(s);
    const [r, s2] = Sf(s1);
    return [f(r), s2];
  };
};
