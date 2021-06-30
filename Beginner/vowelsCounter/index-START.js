/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    // Code goes here

    const vowels = ["a", "e", "i", "o", "u"]

    let counter = 0;

      // Loop through text to test if each character is a vowel
      for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    console.log("count: ", counter)

    // Return number of vowels
    return counter

}



module.exports = vowelsCounter;
