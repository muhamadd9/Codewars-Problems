// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

// My Solution 

function isItLetter(character) {
    return (character.charCodeAt() >= 97 && character.charCodeAt() < 123) || (character.charCodeAt() >= 65 && character.charCodeAt() < 91) ? true:false
}

