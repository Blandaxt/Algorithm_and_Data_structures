/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
    // Code goes here

    console.log("Text: ", text)

    var reversedText = text.toLowerCase()
    .split('').reverse().join('')

    console.log("Reversed text: ", reversedText)

    return text === reversedText

}



module.exports = palindromeChecker;