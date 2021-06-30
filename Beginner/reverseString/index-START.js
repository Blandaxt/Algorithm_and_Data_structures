/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



// function reverseString(text) {
//     // Code goes here

//     if( text === "" ){

//         console.log("Empty String")

//         return ""
//     }

//     let result = ""

//     console.log("word: ", text)

//     for(let i= text.length -1; i >= 0; i--){

//         console.log("letters: ", text[i])

//         result += text[i]
//     }

//     console.log("result: ", result)

//     return result
// }


function reverseString(text) {
    console.log("Word before: ", text)
    let array = text.split("").reverse().join("");
    console.log("Word after: ", array)

    return array;
}


module.exports = reverseString