/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here

    console.log("String A: \n", stringA, "\nString B: \n", stringB)

    const sanitizeString = function (str) {
        return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    }

    console.log("Santized string A: \n", sanitizeString(stringA), "\nSantized string B: \n", sanitizeString(stringB))

    return sanitizeString(stringA) == sanitizeString(stringB)

}


module.exports = isAnagram