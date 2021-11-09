function selectionSort(arr) {
  // type your code here
  // let sorted = arr.sort((a,b) => a - b)
  // return sorted
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
    
  }

  return sorted;

}

// let myArr = [0,3,5,7,9]
// console.log(myArr.splice(1,1))

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }


  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    selectionSort([2, 1]);
    selectionSort(longInput);
  }

  const avgTime = (Date.now() - startTime) / 2000;

  console.log("ran 2 thou times in ",avgTime);
  //console.log(myArr.splice(1,1))
}


module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
