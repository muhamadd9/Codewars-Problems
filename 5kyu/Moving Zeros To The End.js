function moveZeros(arr) {
    let result = arr.filter(element => element !== 0);
    let zeroCount = arr.length - result.length;
    result = result.concat(Array(zeroCount).fill(0));
    return result;
  }