// Implement a function that returns the minimal and the maximal value of a list (in this order).


// Solution 

function getMinMax(arr){
    let min = arr[0]
    let max = arr[0]
    for(let i = 0;i<arr.length;i++){
      if(arr[i] < min){
        min = arr[i]
      }
      if(arr[i] > max){
        max = arr[i]
      }
    }
    return [min,max]
  };