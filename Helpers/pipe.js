module.exports = function pipe(...fns) {
  return v0 => {
    let v = fns[0](v0);
    for (let i = 1, n = fns.length; i < n; i++) {
      v = fns[i](v);
    }
    return v;
  };
};
