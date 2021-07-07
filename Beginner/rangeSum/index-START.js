

/*

 Given an array of two numbers, return the cummulative sum of 
 the two numbers and all the numbers between them. E.g

  rangeSum([1,9]) 
  Should return 45 i.e 1+2+3+4+5+6+7+8+9

*/

// Using a For-Loop

function rangeSum(arr) {

    console.log("Array: \n", arr)

    let sum = 0;

    for (i = arr[0]; i <= arr[1]; i++) {

      sum += i;

    }

    console.log("\n Sum: \n", sum)

    return sum;

  }

  module.exports = rangeSum