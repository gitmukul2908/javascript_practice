const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[0])

// Array methods

// myArr.push(6)
// console.log(myArr)

// myArr.unshift(0)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(3))

const newArr = myArr.join()

console.log(myArr)
console.log(typeof newArr)

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log("B ", myn1)
console.log("A ", myArr)

const myn2 = myArr.splice(1, 4)
console.log("C ", myn2)
console.log("A ", myArr)

