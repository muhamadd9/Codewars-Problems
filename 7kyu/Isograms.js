// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution 

function isIsogram(str){
    let lowerCaseStr = str.toLocaleLowerCase()
    let flag = true ;
    for(let i = 0 ; i<str.length ; i++){
       for(let j = i+1 ; j<str.length ; j++){
        if(lowerCaseStr[i] == lowerCaseStr[j]){
          flag = false ;
          break
        }
       }
    }
    return flag
}

// Another Solution 

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}