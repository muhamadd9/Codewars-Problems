// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

// My Solution

function divCon(x){
    let sum =  0 ;
    for(let i = 0 ; i < x.length ; i++){
      if(typeof x[i] == 'string'){
        sum -= +x[i] 
      }
      else{
        sum += x[i]
      }
    }
    return sum 
  }

//   Another Solution 

function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - +cur ,0)
}