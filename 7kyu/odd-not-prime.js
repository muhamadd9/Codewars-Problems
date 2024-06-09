// For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.

// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1

// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2

// Solution 

function oddNotPrime(n){
    let oddNumbers = []
    let primeNumbers = []
    for(let i = 0 ;i <= n; i++){
      if(oddNumber(i)) {
        oddNumbers.push(i)
      }
      if(primeNumber(i)) {
        primeNumbers.push(i)
      }
    }
   return oddNumbers.filter((item)=> !primeNumbers.includes(item)).length
  }
  
  function oddNumber(num) {
    return num % 2 !== 0;
  }
  
  function primeNumber(num){
    let flag = true ;
    if(num<=1){
       flag = false
    }
    for(let i = 2 ;i<num ; i++){
      if(num % i == 0){
        flag = false 
        break
      }
    }
    return flag
  }