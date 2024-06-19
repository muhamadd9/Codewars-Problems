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

//   Another Solution 

function getMinMax(arr){
    arr.sort((a,b)=>a-b)
    return [arr[0],arr[arr.length-1]]
  };

//   Solution 

function getMinMax(arr){
    return [Math.min(...arr),Math.max(...arr)];
  };