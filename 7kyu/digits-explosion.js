// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

// My Solution 

function explode(s) {
    let arr = []
    let arrOfnums = s.split("")
    for(let i =0;i<s.length;i++){
      for(let j = 0 ; j< Number(arrOfnums[i]);j++){
        arr.push(arrOfnums[i])
      }
    }
    return arr.join("")
  }
  