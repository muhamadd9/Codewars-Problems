// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only .
// Array/list will always have even size
// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

// My Solution 

function minSum(arr) {
    let sum = 0 ;
    let sortedArr = arr.sort((a,b)=>a-b)
    for(let i = 0 ; i<sortedArr.length/2;i++){
      sum+= sortedArr[i] * sortedArr[sortedArr.length - 1 - i]
    }
    return sum
}