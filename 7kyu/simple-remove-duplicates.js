// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

// My Solution 

function solve(arr) {
    return arr.filter((num, i, src) => i === src.lastIndexOf(num));
}


// i === src.lastIndexOf(num) means to check if the current index i is the last occurrence of the element num in the array src
