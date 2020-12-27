console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(s1,s2) {
  // YOUR CODE HERE
  let amount = 0;

    const arr1 = s1.split('');
    const arr2 = s2.split('');

    for (let i = 0; i < arr1.length; i++) {
        
        if (arr1[i] !== arr2) {
            arr2.splice(arr2, 1);
            amount += 1
        }
    }

    return amount

}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/