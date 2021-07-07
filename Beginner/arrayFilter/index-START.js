/*

 Return the first element from the given array that passes the test 
 specified by the provided function. Both the array and function are 
 passed into the function as arguments as shown below:

 arrayFilter(arr, func)

*/

// function func(el){

//     if(typeof el === "number") {

//         return true
//     }else{

//         return false
//     }
// }

// function arrayFilter(arr, func) {

//     console.log("Array: \n", arr, "\n Fucntion: \n", func )

//     let filteredArray = arr.filter(func);

//     const result = filteredArray[0] ? filteredArray[0] : undefined;

//     console.log("\n Result: \n", result)

//     return result
//   }

  function arrayFilter(arr, func) {
      
    console.log("Array: \n", arr, "\n Fucntion: \n", func )

    for (let elem of arr) {

      if (func(elem)) {

        console.log("\n Element: \n", elem)

        return elem
      }

    }

    console.log("\n undefined: \n", undefined)

    return undefined
  }


module.exports = arrayFilter