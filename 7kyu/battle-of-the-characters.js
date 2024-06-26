// Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

// Rules:
// Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
// Strings will consist of uppercase letters only
// Only two groups to a fight.
// Group whose total power (A + B + C + ...) is bigger wins.
// If the powers are equal, it's a tie.
// Examples:
//       * "ONE", "TWO"  -> "TWO"`
//       * "ONE", "NEO"  -> "Tie!"


// Solution 

function calcCharCode(char){
    return char.toUpperCase().charCodeAt() - 64
  }
  function calcWordFreq(word){
    return word.split("").reduce((total , char) => total + calcCharCode(char),0)
  }
  function battle(x, y) {
    if(calcWordFreq(x) === calcWordFreq(y)) return 'Tie!'
    return calcWordFreq(x) > calcWordFreq(y) ? x : y
  }