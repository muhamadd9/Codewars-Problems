// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// Solution 

function findSmallestInt(arr) {
    let min = arr[0]
    for(let i = 1;i<arr.length;i++){
      if(arr[i] < min) min = arr[i]
    }
    return min
}

// Another solution 

function findSmallestInt(arr) {
    return Math.min(...arr)
}