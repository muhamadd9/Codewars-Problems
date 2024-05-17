// 

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