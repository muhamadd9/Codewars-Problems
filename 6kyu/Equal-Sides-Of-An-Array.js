// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.


// My Solution 

function findEvenIndex(arr)
{
  let n =-1 ;
  for(let i = 0 ; i <arr.length ; i++ ){
  let leftArr =[]
  let rightArr =[]
    leftArr = arr.slice(0,i)
    rightArr = arr.slice(i+1)
     const leftSum = leftArr?.reduce((acc, next) => acc + next, 0);
    const rightSum = rightArr?.reduce((acc, next) => acc + next, 0);
    if(leftSum === rightSum ){
      n=i;
      break;
    }
  }
  return n
}