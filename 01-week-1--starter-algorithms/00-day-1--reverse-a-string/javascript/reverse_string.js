function reverseString(str) {
  // type your code here
  let myOut = str.split('').reverse()

  return myOut.join('')
}

console.log(reverseString('bye'))
console.log(reverseString('AwwwSnap'))
console.log(reverseString('racecar'))
console.log(reverseString(''))



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


