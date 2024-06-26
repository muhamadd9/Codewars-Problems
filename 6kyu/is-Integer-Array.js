// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true  / True if every element in an array is an integer or a float with no decimals.
// returns true  / True if array is empty.
// returns false / False for every other input.


// Solution 

function isIntArray(arr) {
    if(!arr){
    return false
    }
    if(arr.length === 0){
        return true ;
    }
    for(let i = 0 ; i < arr.length ; i++){
        if(Number.isInteger(arr[i])){
            continue ;
        }
        else{
            return false ;
        }
    }
    return true ;
}