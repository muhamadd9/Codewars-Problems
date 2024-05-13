// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// My Solution 

function noBoringZeros(n) {
    let numArr =  n.toString().split("")
    let newArr = []
    let foundNonZero = false ;
    for(let i = numArr.length-1 ; i >=0 ; i--){
      if (numArr[i] !== "0" || foundNonZero){
        newArr.unshift(numArr[i]) 
        foundNonZero = true
      }
      
    }
    return Number(newArr.join(""))
}

// My Another Solution : 

function noBoringZeros(n) {
    let numstr =  String(n)
    while(numstr.endsWith(0)){
      numstr = numstr.slice(0,numstr.length-1)
    }
    return Number(numstr)
}