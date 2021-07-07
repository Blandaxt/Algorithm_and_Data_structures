/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
   // Code goes here

   console.log("Array: \n", arr, "\n Number: \n", num)

   const array = arr

   // if(arr === 0){

   //    array.splice(0,0, num)

   //    console.log("\n Spliced Array: \n", array)

   //    return array.length -1
   // }

   array.sort((a, b) => {

      return a - b

  })

  for (var i = 0; i < array.length; i++) {

      if (array[i] >= num) {  

         console.log("\n Index: \n", i)

          return i

      }

  }

  console.log("\n Array Length: \n", array.length)

  return array.length
  
}



module.exports = whereIBelong