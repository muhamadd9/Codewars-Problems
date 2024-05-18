// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


// My Solution using bubble sort 

function sortByLength (array) {

    for(let i = 0 ; i<array.length -1 ;i++){
      for(let j = 0 ;j<array.length - 1 - i ;j++){
        if(array[j].length > array[j+1].length){
        swap(array,j,j+1)
      }
      }
    }
    return array
}
function swap(arr,a,b){
  let temp = arr[a];
  arr[a]=arr[b];
  arr[b]=temp
}

// Another solution using built in sort method 

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
}