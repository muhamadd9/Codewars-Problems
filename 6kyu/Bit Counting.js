var countBits = function (n) {
  let count = 0;
  n.toString(2)
    .split('')
    .map(num => num * 1 === 1 && count++);
  return count;
};


var countBits = function (n) {
  return n
    .toString(2)
    .split('')
    .filter(num => num == 1).length;
};
