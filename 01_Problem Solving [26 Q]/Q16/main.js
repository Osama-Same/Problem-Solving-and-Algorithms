console.log('Problem Solving Q:16 ');

/* evenOccurrence */

/*  
Find the first item that occurs an even number of times in an array.
*/

function evenOccurrence(arr) {
  // YOUR CODE HERE
let output = 0  
 for (let index = 0; index < arr.length; index++) {
   if(arr[index] % 2 == 0)
   output =  arr[index]=Math.max(arr[index]) 
   
 }
 return output

}

/* 
Examples:
evenOccurrence([1,2,6,6]) // => 6
evenOccurrence([1,2,9,8,8,6,6]) // => 8 
evenOccurrence([1,9,7,3,6,6,8,9,9]) // => 6
*/