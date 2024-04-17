const score = 4000
console.log(score)

const balance = new Number(800)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber = 23.8955
console.log(otherNumber.toPrecision(4))

const nums = 100000000
console.log(nums.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++++++++++++++++===

console.log(Math.abs(-3))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.3))

console.log(Math.floor(Math.random()*10) + 1)

const minVal = 1
const maxVal = 6

console.log(Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal)