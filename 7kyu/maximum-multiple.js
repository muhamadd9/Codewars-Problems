// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found .

// Input >> Output Example
// divisor = 37, bound = 200 ==> return (185)
// Explanation:
// (185) is divisible by (37) , (185) is less than or equal to bound (200) , and (185) is > 0 .

// My Solution 

function maxMultiple(divisor, bound){
    let num ; 
    for(let i = bound ; i>0;i--){
      if(i % divisor === 0 ) {
        return i ;
      }
    }
  }