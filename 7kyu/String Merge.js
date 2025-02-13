function stringMerge(string1, string2, letter) {
  const part1 = string1.split(letter)[0];
  const part2 = string2.slice(string2.indexOf(letter))
  return part1.concat(part2)
}
