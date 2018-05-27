module.exports = function execWith(s) {
  return Ss => Ss(s)[1];
};
