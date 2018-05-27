const chain = require('../State/operators/chain');

module.exports = function pipeK(...fns) {
  return v0 => {
    let v = fns[0](v0);
    for (let i = 1; i < fns.length; i++) {
      v = chain(fns[i])(v);
    }
    return v;
  };
};
