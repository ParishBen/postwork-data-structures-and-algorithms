// function fibonacci(num) {
//   // type your code here
//   //const fib = n => {
//     if (num <= 1) { return num; } 
//     return fibonacci(num - 1) + fibonacci(num - 2);
  
// }

function fibonacci(n) {
  let [a, b, temp] = [1, 0];
  console.log("before loop",a,b,temp)
  while(n >= 1){
    temp = a;
    a = a + b;
    b = temp;
    console.log("in while",a,b,temp)
    n--;
  }
  console.log("afterwhile b",b)
  return b;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
