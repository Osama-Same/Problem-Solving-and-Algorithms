console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  // YOUR CODE HERE
   // check if sen is empty string
   if (sen.length === 0) {
    // return 'there are 0 words'
    return 'there are 0 words';
  }
  //converrt
  const splArray = sen.split(" ");
   
   const Array = splArray.sort((a, b) => b.length - a.length)
   const longestWord2 = Array[0]
    return longestWord2;
  }
 /* Q1: Longest Word */
function LongestWordtow(sen) {
  // check if sen is empty string
  if (sen.length === 0) {
    // return 'there are 0 words'
    return 'there are 0 words';
  }

  // the initial value for the output
  let output = ''; // 'lol'

  // Process
  // convert the sen (string) to an array (have each word alone)
  const words = sen.split(' '); // ["lol", 'a', "time"]
  // iterate over the array (words)
  for (let index = 0; index < words.length; index++) {
    // check if the element (the current word) the longest word till now or not
    if (words[index].length > output.length) {
      // make the output (longest world) equal current world
      output = words[index];
    }
  }
  // return the longest word
  return output;
}


/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
