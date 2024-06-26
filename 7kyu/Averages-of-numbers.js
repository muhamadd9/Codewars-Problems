// #Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// Example:

// Input:  [ 1, 3, 5, 1, -10]
// Output:  [ 2, 4, 3, -4.5]
// If the array has 0 or 1 values or is null, your method should return an empty array.

// My Solution 

function averages(numbers) {
    if (!numbers || numbers.length < 2) {
        return [];
    }
    let averagesArr= []
    for(let i =0 ;i <numbers.length - 1 ;i++){
      averagesArr.push((numbers[i]+numbers[i+1]) / 2)
    }
    return averagesArr
  }

  // Another solution 

  function averages(numbers) {
    if (!numbers || numbers.length < 2) {
        return [];
    }
    return numbers.slice(0, -1).map((num, index) => (num + numbers[index + 1]) / 2);
}