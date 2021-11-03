function findShortestString(arr) {
  // type your code here
  //console.log(arr)
  let srted = arr.map(a=> a.length)
  let min = Math.min(...srted)
  let idx = srted.indexOf(min)
  //console.log(idx,srted)
  return arr[idx]
}
//   let srt = arr.sort((a,b) => {
//     if (a.length < b.length)
//     return -1
//     if(a.length > b.length){
//       return 1
//      } else { 
//       return 0 
//      }
//     }
//   )
//   console.log(srt)
//   return srt[0]
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  let longArr = []
  for (let i=0; i<100;++i){
    longArr.push(Math.random().toString())
  }
  let start_time = Date.now()

  for (i=0; i<1000;++i){
    findShortestString(['a','ba'])
    findShortestString(longArr)
  }
  let avg_time = (Date.now() - start_time)/2000
  console.log('runtime',avg_time)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
