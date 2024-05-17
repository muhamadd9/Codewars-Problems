// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

// My Solution using Bubble Sort 

function sortGiftCode(code){
    let codeArr = code.split("")
    for(let i=0 ; i<codeArr.length - 1;i++){
     for(let j=0 ; j<codeArr.length - 1 -i ;j++){
       if(codeArr[j]>codeArr[j+1]) swap(codeArr,j,j+1)
     }
    }
    return codeArr.join("")
 }
 function swap(arr,x,y){
   let temp = arr[x] ;
   arr[x]=arr[y];
   arr[y]=temp;
}