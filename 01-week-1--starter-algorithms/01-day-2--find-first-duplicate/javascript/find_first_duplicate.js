function findFirstDuplicate(arr) {
  // type your code here
  const uniques = new Set();

  for (const value of arr) {
    if (uniques.has(value)) {
      return value;
    }

    uniques.add(value);
  }

  return -1;
}
//   let myHash= {}
//   let firstDupe;
//   for(let i=0;i<arr.length;i++){
//     myHash[arr[i]] ? myHash[arr[i]] = myHash[arr[i]]+1 : myHash[arr[i]] = 1
//       //firstDupe = arr[i]
//     // } else {
//     //   myHash[arr[i]] = 1
//     // }
//   }
//   let vals = Object.values(myHash)
//   let keys = Object.keys(myHash)
//    firstDupe = vals.find((el, ind) => el > 1 ? ind : -1)
//    //(ar=> myHash[ar]>1)
   
//    let realDupe =  keys[firstDupe] 
//   console.log(myHash, realDupe, firstDupe)
// }
//   arr.map(element => {
//     myHash[element] ? firstDupe = element : myHash[element] = 1;
    
//   });
//   if(firstDupe){
//     return firstDupe
//   } else
//   return -1
// }

console.log(findFirstDuplicate([2, 1, 3, 3, 2]))
console.log(findFirstDuplicate([1,2,3,4]))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
