// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

// My Solution : 

function position(letter){
    let idx = letter.toLowerCase().charCodeAt(0) - 96 ;
     return "Position of alphabet: " +  idx
}

// Another Solution 

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}