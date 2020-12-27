console.log('Problem Solving Q: 3 ');

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
  if(str.length === 0)
  {
    return 'there are 0 words'
  }
  // YOUR CODE HERE
  let newString= str.split('').reverse();
  let output =''
  for (let index = 0 ; index < newString.length ; index++) 
  {
    output += newString[index];
  }
    return output;
}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/

