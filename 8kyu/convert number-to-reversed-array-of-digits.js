// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// My Solution 

function digitize(n) {
    let stringNum = n.toString()
    let arr = []
    for(let i = 0 ; i<stringNum.length ;i++){
        arr.push(Number(stringNum[i]))
    }
    return arr.reverse() ;
}

// Another Solution 

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}