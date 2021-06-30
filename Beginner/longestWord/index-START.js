/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here

    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    console.log("Sentence: ", wordArray)

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    console.log("Result: ", result)

    return result

}


module.exports = longestWord