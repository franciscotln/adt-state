module.exports = function evalWith(s) {
  return Ss => Ss(s)[0];
};
