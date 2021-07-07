/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {

    console.log("Arrays: \n", arrays)

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    const result = [...new Set([...jointArray])]

    console.log("\n Result: ", result)

    return result
    
}

// function mergeArrays() {

//     let arrays = Array.from(arguments);

//     console.log(arrays)

//    // some more code here
// }


module.exports = mergeArrays