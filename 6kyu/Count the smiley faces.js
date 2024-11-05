function countSmileys(arr) {
  const smileyPattern = /^[:;][-~]?[)D]$/;
  return arr.filter(item => smileyPattern.test(item)).length;
}
