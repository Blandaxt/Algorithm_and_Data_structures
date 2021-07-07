
/* 

    Translate the provided string to Pig Latin by following the rules below:

    “Pig Latin is a constructed language game in which words in English are 
    altered, usually by adding a fabricated suffix or by moving the initial 
    consonant or consonant cluster of a word to the end of the word and 
    adding a vocalic syllable to create such a suffix. For example, 
    Wikipedia would become ikipediaway (taking the 'W' and 'ay' to 
    create a suffix). The objective is to conceal the words from 
    others not familiar with the rules.” - Wikipedia

    For words that begin with consonant sounds, the consonant before the initial 
    vowel should be moved to the end of the word sequence and "ay" affixed. E.g
    "pig" = "igpay"
    For words that begin with consonant clusters, the clusters should be 
    moved to the end of the word sequence and "ay" affixed. E.g
    "glove" = "oveglay"
    For words that begin with vowel sounds, simply add "way" to the end of
     the word. E.g
    "explain" = "explainway”

*/

/* 

    Imperative vs. Declarative

    Very often, we find these terms thrown around like they are very simple 
    concepts everyone should know. However, the difference is usually not 
    much obvious to most.

    Simply put, an imperative style of programming is one which specifies
     how things get done. Although this might sound like what you do each
      time you write code, there's a difference to it. Imagine you were 
      to add an array of numbers and return the sum, there are different
       ways you could approach the problem. One way could be writing a 
       forloop that'd go over each element in the array and cumulatively
        add every element to an accumulator until the final sum is reached. 
        That is imperative. You are specifying how things get done.

    On the other hand, a declarative approach would abstract this process, 
    allowing you to specify what should be done rather than how. Thus, 
    you may use the .reduce() method on the array to reduce every element 
    to a final value by returning the sum within the call back.

*/

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;

    console.log("Word: \n", str)
  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel

      let result = str + "way"

      console.log("\n vowel result: \n", result)

      return result;

    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      let otherResult = str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";

      console.log("\n Consonent Result: \n", otherResult)

      return otherResult;
    }
  }

  module.exports = pigLatin;
