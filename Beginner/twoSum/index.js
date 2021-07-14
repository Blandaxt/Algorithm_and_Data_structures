

/*

    Given an array of integers nums and an integer target, return indices 
    of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.

    You can return the answer in any order.

 

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
 

    Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
 

    Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

/*
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

// Start of the function

// function twoSum(nums, target) {

//     console.log("Array: \n", nums, "\n Array length: \n", nums.length, "\n Target: \n", target)

//     if(nums.length === 0){

//         console.log("\n Undefined ")

//         return undefined
//     }

//     const start = Date.now()

//     console.log('starting timer...');

//     let compareTarget = 0;

//     let array = nums

//     // let accumelator = 0;

//     // let secondAccumelator = 1;

//     let stopper = true;

//     setTimeout(() => {
//         const millis = Date.now() - start;

//         stopper = false;

//     console.log(`\n seconds elapsed = ${Math.floor(millis / 1000)}`, "\n while loop failed or function ran for too long.");
//     // expected output: seconds elapsed = 2
    
//      }, 2000);

//      for( const number of array){

//         for(let i = 1; i < array.length ; i++){

//             console.log("\n forloop1: \n", number, "\n forloop2: \n", array[i])

//            compareTarget = number + array[i] 

//            if( array.indexOf(number) != i){

//                 console.log("\n Comparing ...")

//                  if( compareTarget == target ) {

//                     console.log("\n forloop1: \n", number, "\n forloop2: \n", array[i])

//                         let result = [ array.indexOf(number), i ]
            
//                         console.log("\n Result: \n", result, "\n Match Found!");
            
//                         return result;
            
//                 }

//                 console.log("\n False Match ...")

//              }

//         }

//     }

     // accumelator < nums.length - 1 

    // while( accumelator < nums.length ){

    //     compareTarget = nums[accumelator] + nums[secondAccumelator]

    //     if( compareTarget == target ) {

    //         let result = [ nums.indexOf(nums[accumelator]), nums.indexOf(nums[secondAccumelator]) ]

    //         console.log("\n Result: \n", result);

    //         return result;

    //     }

        

    //     if( secondAccumelator == nums.length - 1){

    //         accumelator++

    //         secondAccumelator = accumelator + 1
    //     }

    //     secondAccumelator++

    //     console.log("\n element: \n", nums[secondAccumelator])
        
    // }


//     console.log("\n target cannot be reached")
    
//     return "target cannot be reached"
    
// };

function twoSum(nums, target) {

    console.log("Array: \n", nums, "\n Array length: \n", nums.length, "\n Target: \n", target)

    if(nums.length === 0){

        console.log("\n Undefined ")

        return undefined
    }

    const start = Date.now()

    console.log('starting timer...');

    let compareTarget = 0;

    let array = nums

    // let accumelator = 0;

    // let secondAccumelator = 1;

    let stopper = true;

    setTimeout(() => {
        const millis = Date.now() - start;

        stopper = false;

    console.log(`\n seconds elapsed = ${Math.floor(millis / 1000)}`, "\n while loop failed or function ran for too long.");
    // expected output: seconds elapsed = 2
    
     }, 2000);

    //  for( const number of array){

        for(let i = 0; i < array.length ; i++){

           compareTarget = target - array[i]

           console.log("\n Target sub result: \n", compareTarget, "\n Target: \n", target, "\n Array Number: \n", array[i])

           console.log("\n Analyzing ...")

            if( array.includes(compareTarget)){

                if( array.indexOf(compareTarget) != i || array.indexOf(compareTarget, i + 1) != -1 ){

                    // if( compareTarget == target ) {

                        console.log("\n Index1: \n", i, "\n Index2: \n", array.indexOf(compareTarget, i + 1))

                            let result = [ i, array.indexOf(compareTarget, i + 1) ]
                
                            console.log("\n Result: \n", result, "\n Match Found!");
                
                            return result;
                
                    // }

                   

                }

            }    

            console.log("\n False Match ...")

        }


    console.log("\n target cannot be reached")
    
    return "target cannot be reached"
    
};

module.exports = twoSum