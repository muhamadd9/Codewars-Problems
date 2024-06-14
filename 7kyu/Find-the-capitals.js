// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

// My Solution 

var capitals = function (word) {
	return word.split("").map((letter,index)=>letter === letter.toUpperCase()?index:null).filter((index)=>index !=null)
	
};
