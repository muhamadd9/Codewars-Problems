// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// My Solution 

function sumArray(array) {
  if(array == null ) return 0;
  return array
  .sort((a,b)=>a-b)   // Sort From Low to high
  .slice(1,-1)
  .reduce((acc,current)=>acc+current,0)
}
