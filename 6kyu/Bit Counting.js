var countBits = function (n) {
  let count = 0;
  n.toString(2)
    .split('')
    .map(num => num * 1 === 1 && count++);
  return count;
};
