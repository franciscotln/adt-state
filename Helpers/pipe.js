const pipe = (...fns) => v0 => {
  if (fns.length === 0) return v0;
  let v = v0;
  for (const f of fns) v = f(v);
  return v;
};

module.exports = pipe;
