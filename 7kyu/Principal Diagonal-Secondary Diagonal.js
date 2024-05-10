// Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

// Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

// For example:

// matrix:             [1, 2, 3]
//                     [4, 5, 6]
//                     [7, 8, 9]

// principal diagonal: [1, 5, 9]
// secondary diagonal: [3, 5, 7]
// Task
// Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

// If the principal diagonal is larger, return "Principal Diagonal win!"
// If the secondary diagonal is larger, return "Secondary Diagonal win!"
// If they are equal, return "Draw!"
// Note: You will always receive matrices of the same dimension.

// My Solution 

function diagonal(matrix){
    let principal_diagonal = 0
    let secondary_diagonal = 0
    for(let i = 0 ;i<matrix.length ; i++){
      for (let j = 0 ;j<matrix.length ; j++) {
        if(i==j) principal_diagonal+= matrix[i][j]
        if (i + j === matrix.length - 1) secondary_diagonal += matrix[i][j];
      }
    }
    return principal_diagonal == secondary_diagonal ? "Draw!" :  principal_diagonal > secondary_diagonal ? "Principal Diagonal win!" : "Secondary Diagonal win!"
}
  