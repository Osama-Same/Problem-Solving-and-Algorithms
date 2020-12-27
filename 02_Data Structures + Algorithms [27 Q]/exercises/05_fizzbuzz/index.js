// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    //const num = n.split("");
    let result = "";
  for (let i = 1; i < n.length; i++) {
    if (n[i] % 3) {
      result += "fizz";
    }
    if (n[i] % 5) {
      result += "buzz";
    }
  }
  return result;
}

module.exports = fizzBuzz;
