/*Your task is to sum the differences between consecutive pairs in the array in descending order.

    For example: sumOfDifferences([1, 2, 10] Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.*/

//My solution:

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

}

// 2.
// function sumOfDifferences(arr) {
// if(arr && arr.length>1){
//   arr.sort(function compareNumbers(a, b) {return b-a;});
//   let diff=[];
//   for(let i=0; i< arr.length-1; i++) {
//     diff.push(arr[i]-arr[i+1]);
//   }
//      const result=(acc,item)=>acc+item;
//      return diff.reduce(result);
//      }
//      return 0;
//
// }
