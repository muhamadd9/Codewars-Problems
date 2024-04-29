// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My Solution 

function findAverage(array) {
    return array.reduce((acc,next)=>acc+next,0)/array.length
}