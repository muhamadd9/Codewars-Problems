// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// My Solution 

function positiveSum(arr) {
    let sum = 0 ;
    arr.filter((index)=>index>0).map((number)=>sum+=number);
    return sum ;
}

// Another Solution

function positiveSum(arr) {
    return arr.filter((index)=> index> 0).reduce((acc,currunt)=>acc+currunt)
}


