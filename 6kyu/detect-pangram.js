// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My Solution 


function isPangram(string){
    let pangram = true ;
    let alphabets = "abcdefghijklmnopqrstuzwxyz"
    for(let i = 0 ; i < alphabets.length ;i++){
       let charFound = false ; 
      for(let j=0 ; j<string.length;j++){
        if(alphabets[i] === string[j].toLowerCase()){
          charFound = true ;
          break;
        }
      }
      if(!charFound){
        pangram = false ;
        break
      }
    }
    return pangram
   
  }