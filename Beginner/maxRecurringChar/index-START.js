/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
    // Code goes here

    let charMap = {};
    let maxCharValue = 0;
    let maxChar = '';

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    console.log("Letter map: ", charMap)

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    console.log("Max character: ", maxChar, "Highest Number: ", maxCharValue)

    return maxChar


}



module.exports = maxRecurringChar;