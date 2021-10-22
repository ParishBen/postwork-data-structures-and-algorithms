function simpArr(inp){
    let gar = []
    let mySut = new Set(inp)
    let zeear = mySut.forEach(n=> n)
   // mySut.forEach(n=> gar.push(n))
    return zeear
}
let bingle = []
let gosh = new Set([4,4,4,6,2,4,6,7])
let ringle = gosh.forEach(n=>bingle.push(n))
console.log(ringle,bingle)

console.log(simpArr([3,3,5,5,2,1]))
