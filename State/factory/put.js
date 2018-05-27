const put = s => function State() {
  return [null, s];
};

module.exports = put;
