console.log('Problem Solving Q:24 ');

/* bubbleSort */

/*  
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
  • If the first element is greater than the second element, it swaps the two.
  • It then compares the second to the third, and the third to the fourth, and so on.
    - In this way, the largest values 'bubble' to the end of the array.
  • Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
*/


function bubbleSort(inputArr) {
   
  let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
          
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                //swap elements
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
}

/* 
Examples:
bubbleSort() // =>
bubbleSort() // =>
bubbleSort() // =>
*/