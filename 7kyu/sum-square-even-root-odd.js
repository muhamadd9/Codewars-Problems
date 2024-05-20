// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

// Good luck!

// My Solution 

const sumSquareEvenRootOdd = ns => {
    return Math.round(ns.map(item => 
    item%2==0? item*item : Math.sqrt(item)
    ).reduce((acc,next)=>acc+next) * 100) /100
};
  