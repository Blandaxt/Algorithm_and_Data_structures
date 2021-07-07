/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

Examples of falsy values are: false, null, undefined, 0, NaN, and "".

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    // Code goes here

    console.log("Array: \n", array)

    let result =[]

    //loop through with each array value
    for (value of array){

    // push into result if truthy
        if(value){

            result.push(value)

        }

    }

    console.log("\n Result: \n", result)

    return result

}


module.exports = falsyBouncer