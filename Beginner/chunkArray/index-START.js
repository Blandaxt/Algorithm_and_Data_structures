/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]

 Given an array and a chunk size, divide the array into many sub-arrays 
 where each sub-array has the specified length. E.g

 chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
 // should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

*/

function chunkArray(array, size) {
    // Code goes here

    let result = []

    console.log("Array: \n", array, "\n Size: \n", size)

    for (value of array){

        let lastArray = result[result.length -1 ]

        // console.log("\n result step: \n", result)

        // console.log("\n Last Array: \n", lastArray)

        if(!lastArray || lastArray.length == size){

            result.push([value])

            // console.log("\n pushed1: \n", lastArray)

        } else{

            lastArray.push(value)

            // console.log("\n pushed2: \n", lastArray)
        }
    }

    console.log("\n Result: \n", result)

    return result

}

function chunkArray(array, size) {

    console.log("\n array2: ", array)

    let result = []

    let arrayCopy = [...array]

    while (arrayCopy.length > 0) {

        result.push(arrayCopy.splice(0, size))

    }

    console.log("\n Result2: ", result)

    return result
}


module.exports = chunkArray