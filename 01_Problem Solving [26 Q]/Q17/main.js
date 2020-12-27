console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(string) {
  // YOUR CODE HERE
  if(string === "")
  {
    return "sorry"
  }
  let out;
  for (let index = 0; index < string.length  +1; index++) {
    if(string[index])
    out = (string.charAt(index))
  }
  return out  
}

/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/