let score = "33add"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) // gives NaN when pure number is not conerted

// "33" = 33
// "33abc" = NaN(Not a number)
// true => 1 false => 0

let isLoggedIn = undefined
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// true => 1, any defined value
// false values are 0, null, undefined, ''

let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)


// ******************Operations***************

// +, *, -, /, %, ** 
// let value = 3
// let negValue = -value
// console.log(negValue)

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32

console.log(+true)
console.log(+"")

// prefix ++a
// postfix a++


