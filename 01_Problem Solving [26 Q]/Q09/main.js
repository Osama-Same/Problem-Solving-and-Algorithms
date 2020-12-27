console.log('Problem Solving Q: 9');

/* Longest Sequence */

/*  
Write a function that returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/

function longestSequence(arr) {
  // YOUR CODE HERE
  if(arr.length === 0){
    return 'There is no one sequenced'
  }
  let count = 1
  let max = 1

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            count++;
        } else {
            if (count > max) {
                max = count;
            }
            count -= 1;
        }
    }

    if (count> max)
        return(count);
            else
        return(max);    
 
}

/* 
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1]) // => 2
longestSequence([1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1]) // => 5
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => 'There is no one sequenced'
*/
