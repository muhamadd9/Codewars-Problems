function duplicateCount(text) {
  let map = new Map();
  let count = 0;
  for (let char of text.toLowerCase()) {
    map.get(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  for (let val of map.values()) {
    if (val > 1) count++;
  }
  return count;
}
