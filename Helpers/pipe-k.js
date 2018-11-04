const pipeK = (...fns) => v0 => {
  const [head, ...tail] = fns;
  let State = head(v0);
  for (const f of tail) {
    const _State = State;
    State = s => {
      const [r, s1] = _State(s);
      return f(r)(s1);
    };
  }
  return State;
};

module.exports = pipeK;
