/*Complete the square sum method so that it squares each number passed into it and then sums the results together.

    For example: squareSum([1, 2, 2]) should return 9 because 1^2 + 2^2 + 2^2 = 9.*/
//My solution:

function squareSum(numbers){
    return numbers.map(el=>el**2).reduce((acc,item)=>acc+item,0);
}

/* or this one:
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

 */