function isPalindrome(word) {
  const reversedWord = [...word].reverse().join("")
  if (reversedWord === word)
  return true 
  return false
}

// function isPalindrome(word){
//   const reversedWord = []
//   const wordArray = word.split("")
//   console.log(wordArray)
//   for (const char in wordArray) {
//     if (char !== " ") {
//       wordArray[char.indexOf] = char.toLowerCase()
//       reversedWord.unshift(char)
//     }
//     else {
//       wordArray.splice(char.indexOf() , 1)
//     }
//   }
//   const revWord = reversedWord.join("")
//   const myWord = wordArray.join("")
//   return revWord === myWord;
// }

/* 
  Add your pseudocode here

  function isPalindrome(word){
    create empty array, assign it to spread of string, reverse it, join it
  }
*/

/*
  Add written explanation of your solution here

   i created a temporary array to store the spread of my target word, then reversed the array and joined it to create a reversed string. i then compared the two values and returned true if they were the same

   i used google to find the reverse() method so felt i should try writing another solution only using methods i already knew. i also tried to make it work with spaces, special characters, and capitalized letters. but i couldn't get it to work. may come back to it at a later date
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

