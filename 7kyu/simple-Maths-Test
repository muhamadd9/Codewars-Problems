// Create a function which checks a number for three different properties.

// is the number prime?
// is the number even?
// is the number a multiple of 10?
// Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.

// Examples
// numberProperty(7)  // ==> [true,  false, false] 
// numberProperty(10) // ==> [false, true,  true] 
// The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:

// numberProperty(-7)  // ==> [false, false, false] 
// numberProperty(-10) // ==> [false, true,  true] 

// My Solution 

function numberProperty(n) {
    let isPrime = true  ;
    let isEven= true  ;
    let isMul = true  ;
    if(n <= 1) isPrime = false ;
    else{
     for(let i=2;i<= Math.sqrt(n);i++){
       if(n%i == 0) {
         isPrime = false 
         break;
       }
    }
    }
    n%2 !=0 ? isEven = false : isEven
    n%10 != 0 ? isMul = false : isMul
     let arr = [isPrime,isEven,isMul]
    return arr
}