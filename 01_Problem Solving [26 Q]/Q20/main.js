console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(array) {
  // YOUR CODE HERE
  const arr = array.sort()
  result=1;
  for (let index = 0; index < arr.length; index++) {
    if(arr[index]>0){
      result*= Math.max(arr[index])
    }
    
  }
  return result
}

/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/