

/*

Given an integer, return an integer that has the reverse ordering
 of that which was received. E.g

    reverseInteger(-123) // should return -321

*/

// Algorithmic Thinking .reduce()

// Reversing a string using .reduce()
function reverseString(text) {

    return [...text].reduce((acc, char) => char + acc, '')

}
// Calling the function on the string equivalent of the integer to be reversed

// let reversedString = reverseString(num.toString())

// Convert back to an Integer

// let reversedNumber = parseInt(reversedString)

// Adding the corresponding sign

// return (reversedNumber * Math.sign(num))

// Reverses an integer

function intergerReversal(num) {

    console.log("Number: \n", num)

    let reversedNumber = parseInt(reverseString(num.toString()))

    console.log("\n Reversed Number: \n", reversedNumber)

    let result = (reversedNumber * Math.sign(num))

    console.log("\n Result: \n", result)

    return result
}

module.exports = intergerReversal





