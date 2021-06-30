/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
   // Code goes here

   let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    console.log("word Array: ", wordsArray)

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    console.log("Capitalized words: ", capsArray)

    return capsArray.join(' ')

}



module.exports = capSentence