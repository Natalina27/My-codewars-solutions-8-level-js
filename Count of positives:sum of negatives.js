/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


 */

//My solutions:
// 1.
// function countPositivesSumNegatives(input) {
//     return  !input||!input.length ? []:[input.filter(p=>p>0).length,input.filter(n=>n<0).reduce((a,b)=>a+b,0)];
// }
// 2.
// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
//
//     let positive = 0;
//     let negative = 0;
//
//     for (let i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
//
//     return [positive, negative];
// }
// 3.
function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}



