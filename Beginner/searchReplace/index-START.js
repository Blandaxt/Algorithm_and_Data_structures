

/* 

    Challenge:

    Receiving a sentence, a word in the sentence and a replacement for that 
    word as arguments, perform a search and replace on the sentence using
     the arguments provided and return the new sentence. E.g

*/

function searchReplace(str, word, newWord){

    console.log("New Word before Caps: ", newWord)

    if ( word[0] === word[0].toUpperCase() ) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
   }
   console.log("Senetence: ", str, "word: ", word, "New Word: ", newWord)

   const result = str.replace(word, newWord)

   console.log("New sentence: ", result)

   return result
}

module.exports = searchReplace