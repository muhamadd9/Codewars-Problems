// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// My Solution 

function solution(number){
    let sum =0;
    for(let i = 2 ;i<number;i++){
      if(multiples(i)){
        sum+=i
      }
    }
    return sum
}
  function multiples(number){
    return number % 5 == 0 || number % 3 == 0? true : false
}