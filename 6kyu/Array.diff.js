function arrayDiff(a, b) {
  let set1 = new Set(b);
  let diffArr = [];
  for (let item of a) {
    if (!set1.has(item)) {
      diffArr.push(item);
    }
  }
  return diffArr;
}
