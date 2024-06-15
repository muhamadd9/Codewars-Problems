// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21


// Solution 

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if(count < 0){
        return count + "<0"
      }
      if(count == 0) return count + "=0"
      let sumString = `` ;
      let sum = 0 ;
      for(let i = 0 ; i<=count ;i++){
        if(i<count) sumString += `${i}+`
        if(i==count) sumString += `${i}`
        sum += i ;
      }
      return sumString + " = " +sum
    };
  
    return SequenceSum;
  
  })();
  
  
